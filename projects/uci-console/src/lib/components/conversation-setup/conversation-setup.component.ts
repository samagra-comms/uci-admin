import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UciService} from '../../services/uci.service';
import {GlobalService} from '../../services/global.service';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'lib-conversation-setup',
    templateUrl: './conversation-setup.component.html',
    styleUrls: ['./conversation-setup.component.scss']
})
export class ConversationSetupComponent implements OnInit {
    @Input() conversationForm: FormGroup;
    @Input() isStartingMessageExist;
    @Input() startMinDate;
    @Input() userSegments;
    @Output() starringMessageChange = new EventEmitter<any>();
    @Output() userSegmentDelete = new EventEmitter<any>();
    matDateBreakpoint;
    endMinDate;
    resourceService;

    constructor(
        private fb: FormBuilder,
        private uciService: UciService,
        private globalService: GlobalService,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.matDateBreakpoint = (window.innerWidth <= 1000) ? 1 : 2;
        this.resourceService = this.globalService.getResourceService();
        if (this.conversationForm) {
            // start date and end date value change
            this.conversationForm.get('startDate').valueChanges.subscribe(val => {
                if ((this.conversationForm.value.endDate && moment(this.conversationForm.value.endDate).isBefore(moment(val))) || !val) {
                    this.conversationForm.get('endDate').patchValue(null);
                }
                const tempDate = moment(val).format('YYYY-MM-DD');
                this.endMinDate = new Date(tempDate);
            });

            this.conversationForm.get('startingMessage').valueChanges
                .pipe(debounceTime(1000))
                .subscribe(
                    value => {
                        this.onKeyChange('startingMessage');
                    }
                );
            this.conversationForm.get('name').valueChanges
                .pipe(debounceTime(1000))
                .subscribe(
                    value => {
                        this.onKeyChange('name');
                    }
                );
        }
    }

    onKeyChange(value) {
        this.starringMessageChange.emit(value);
    }

    onUserSegmentDelete(index) {
        this.userSegmentDelete.emit(index);
    }

    disableField(){
        if(this.conversationForm.value.isBroadcastBotEnabled) {
            this.conversationForm.controls['segmentId'].enable();
        } else{
            this.conversationForm.controls['segmentId'].disable();
        }
    }
}

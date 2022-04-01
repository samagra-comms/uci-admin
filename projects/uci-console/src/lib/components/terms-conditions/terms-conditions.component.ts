import {Component, Inject, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'lib-terms-conditions',
    templateUrl: './terms-conditions.component.html',
    styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
    resourceService;

    constructor(
        private globalService: GlobalService,
        public dialogRef: MatDialogRef<TermsConditionsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
    }

    onCancel(): void {
        this.dialogRef.close();
    }

}

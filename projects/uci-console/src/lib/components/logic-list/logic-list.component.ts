import { environment } from './../../../../../../src/environments/environment';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UciService} from '../../services/uci.service';
import {GlobalService} from '../../services/global.service';
import {AddLogicComponent} from '../add-logic/add-logic.component';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'lib-logic-list',
    templateUrl: './logic-list.component.html',
    styleUrls: ['./logic-list.component.scss']
})
export class LogicListComponent implements OnInit {
    @Input() botLogics = [];
    @Input() notificationBotLogics = [];
    @Output() modify = new EventEmitter<any>();
    datasource = new MatTableDataSource<any>([]);
    logicFormRequest = {};
    selectedLogicIndex;
    fileErrorStatus;
    isModalLoaderShow = false;
    collectionListModal = false;
    displayedColumns: string[] = ['sno', 'name', 'description', 'action'];
    resourceService;

    constructor(
        private uciService: UciService,
        private globalService: GlobalService,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        this.datasource.data = this.botLogics;
    }

    openModel(logic = null, index = null) {
        this.logicFormRequest = {};
        this.collectionListModal = true;
        // this.logicForm.reset();
        this.fileErrorStatus = null;
        let data = {};
        if (logic && logic.id) {
            this.selectedLogicIndex = index;
            data = {
                id: logic.id,
                name: logic.name,
                description: logic.description,
                formId: logic.transformers[0].meta.formID
            };
        }
        const dialogRef = this.dialog.open(AddLogicComponent, {
            width: '850px',
            data
        });

        dialogRef.afterClosed().subscribe(logicFormData => {
            console.log('mat-dialog-result', logicFormData);
            if (logicFormData) {
                this.onLogicAdd(logicFormData);
            }
        });
    }

    onLogicAdd(logicFormData) {
        const reqData: any = {
            id: logicFormData.id,
            name: 'Firebase Broadcast Logic',
            description: 'desc',
            transformers: [
                {
                    id: '774cd134-6657-4688-85f6-6338e2323dde',
                    meta: {
                        form: 'https://hosted.my.form.here.com',
                        formID: logicFormData.formId,
                        title: logicFormData.name,
                        body: logicFormData.description,
                        templateType: 'JS_TEMPLATE_LITERALS'
                    }
                }
            ],
            adapter: environment.adapterId
        };

        this.isModalLoaderShow = true;
        if (logicFormData.id) {
            this.uciService.updateLogic(logicFormData.id, {data: reqData}).subscribe(
                (data: any) => {
                    this.isModalLoaderShow = false;
                    const existingLogic = reqData;
                    delete existingLogic.id;
                    this.botLogics[this.selectedLogicIndex] = Object.assign(this.botLogics[this.selectedLogicIndex], existingLogic);
                    this.onModify();
                }, error => {
                    this.isModalLoaderShow = false;
                }
            );
        } else {
            this.uciService.createLogic({data: reqData}).subscribe(
                (data: any) => {
                    this.isModalLoaderShow = false;
                    const existingLogic = reqData;
                    delete existingLogic.id;
                    this.botLogics.push({
                        id: data.id,
                        ...existingLogic,
                    });
                    this.onModify();
                }, error => {
                    this.isModalLoaderShow = false;
                }
            );
            // Broadcast bot logic
            reqData.adapter = environment.broadcastAdapterId;
            reqData.transformers[0].meta.type = 'broadcast';
            this.uciService.createLogic({data: reqData}).subscribe(
                (data: any) => {
                    this.isModalLoaderShow = false;
                    const existingLogic = reqData;
                    delete existingLogic.id;
                    this.notificationBotLogics.push({
                        id: data.id,
                        ...existingLogic,
                    });
                    this.onModify();
                }, error => {
                    this.isModalLoaderShow = false;
                }
            );
        }
    }

    onDelete(logic, index) {
        this.uciService.deleteLogic(logic.id).subscribe(
            file => {
                this.botLogics.splice(index, 1);
            }
        );
    }

    onModify() {
        this.datasource.data = this.botLogics;
        this.modify.emit({botLogic: this.botLogics, notificationBotLogic: this.notificationBotLogics});
    }
}

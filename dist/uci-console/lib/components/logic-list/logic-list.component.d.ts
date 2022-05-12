import { EventEmitter, OnInit } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { GlobalService } from '../../services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export declare class LogicListComponent implements OnInit {
    private uciService;
    private globalService;
    dialog: MatDialog;
    botLogics: any[];
    modify: EventEmitter<any>;
    datasource: MatTableDataSource<any>;
    logicFormRequest: {};
    selectedLogicIndex: any;
    fileErrorStatus: any;
    isModalLoaderShow: boolean;
    collectionListModal: boolean;
    displayedColumns: string[];
    resourceService: any;
    constructor(uciService: UciService, globalService: GlobalService, dialog: MatDialog);
    ngOnInit(): void;
    openModel(logic?: any, index?: any): void;
    onLogicAdd(logicFormData: any): void;
    onDelete(logic: any, index: any): void;
    onModify(): void;
    static ɵfac: i0.ɵɵFactoryDef<LogicListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LogicListComponent, "lib-logic-list", never, { "botLogics": "botLogics"; }, { "modify": "modify"; }, never, never>;
}

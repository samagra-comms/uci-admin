import { EventEmitter, OnInit } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { GlobalService } from '../../services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import * as ɵngcc0 from '@angular/core';
export declare class LogicListComponent implements OnInit {
    private uciService;
    private globalService;
    dialog: MatDialog;
    botLogics: any[];
    notificationBotLogics: any[];
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LogicListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LogicListComponent, "lib-logic-list", never, { "botLogics": "botLogics"; "notificationBotLogics": "notificationBotLogics"; }, { "modify": "modify"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMtbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibG9naWMtbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWNpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9naWNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHVjaVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlO1xuICAgIGRpYWxvZzogTWF0RGlhbG9nO1xuICAgIGJvdExvZ2ljczogYW55W107XG4gICAgbm90aWZpY2F0aW9uQm90TG9naWNzOiBhbnlbXTtcbiAgICBtb2RpZnk6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGRhdGFzb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+O1xuICAgIGxvZ2ljRm9ybVJlcXVlc3Q6IHt9O1xuICAgIHNlbGVjdGVkTG9naWNJbmRleDogYW55O1xuICAgIGZpbGVFcnJvclN0YXR1czogYW55O1xuICAgIGlzTW9kYWxMb2FkZXJTaG93OiBib29sZWFuO1xuICAgIGNvbGxlY3Rpb25MaXN0TW9kYWw6IGJvb2xlYW47XG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gICAgcmVzb3VyY2VTZXJ2aWNlOiBhbnk7XG4gICAgY29uc3RydWN0b3IodWNpU2VydmljZTogVWNpU2VydmljZSwgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSwgZGlhbG9nOiBNYXREaWFsb2cpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb3Blbk1vZGVsKGxvZ2ljPzogYW55LCBpbmRleD86IGFueSk6IHZvaWQ7XG4gICAgb25Mb2dpY0FkZChsb2dpY0Zvcm1EYXRhOiBhbnkpOiB2b2lkO1xuICAgIG9uRGVsZXRlKGxvZ2ljOiBhbnksIGluZGV4OiBhbnkpOiB2b2lkO1xuICAgIG9uTW9kaWZ5KCk6IHZvaWQ7XG59XG4iXX0=
import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { GlobalService } from '../../services/global.service';
import { AddLogicComponent } from '../add-logic/add-logic.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
let LogicListComponent = class LogicListComponent {
    constructor(uciService, globalService, dialog) {
        this.uciService = uciService;
        this.globalService = globalService;
        this.dialog = dialog;
        this.botLogics = [];
        this.notificationBotLogics = [];
        this.modify = new EventEmitter();
        this.datasource = new MatTableDataSource([]);
        this.logicFormRequest = {};
        this.isModalLoaderShow = false;
        this.collectionListModal = false;
        this.displayedColumns = ['sno', 'name', 'description', 'action'];
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
        const reqData = {
            id: logicFormData.id,
            name: logicFormData.name,
            description: logicFormData.description,
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
            adapter: this.globalService.getAdapterId()
        };
        this.isModalLoaderShow = true;
        if (logicFormData.id) {
            this.uciService.updateLogic(logicFormData.id, { data: reqData }).subscribe((data) => {
                this.isModalLoaderShow = false;
                const existingLogic = reqData;
                delete existingLogic.id;
                this.botLogics[this.selectedLogicIndex] = Object.assign(this.botLogics[this.selectedLogicIndex], existingLogic);
                this.onModify();
            }, error => {
                this.isModalLoaderShow = false;
            });
        }
        else {
            this.uciService.createLogic({ data: reqData }).subscribe((data) => {
                this.isModalLoaderShow = false;
                const existingLogic = reqData;
                delete existingLogic.id;
                this.botLogics.push(Object.assign({ id: data.id }, existingLogic));
                this.onModify();
            }, error => {
                this.isModalLoaderShow = false;
            });
        }
    }
    onDelete(logic, index) {
        this.uciService.deleteLogic(logic.id).subscribe(file => {
            this.botLogics.splice(index, 1);
        });
    }
    onModify() {
        this.datasource.data = this.botLogics;
        this.modify.emit(this.botLogics);
    }
};
LogicListComponent.ctorParameters = () => [
    { type: UciService },
    { type: GlobalService },
    { type: MatDialog }
];
__decorate([
    Input()
], LogicListComponent.prototype, "botLogics", void 0);
__decorate([
    Input()
], LogicListComponent.prototype, "notificationBotLogics", void 0);
__decorate([
    Output()
], LogicListComponent.prototype, "modify", void 0);
LogicListComponent = __decorate([
    Component({
        selector: 'lib-logic-list',
        template: "<div class=\"uci-container\">\n    <mat-grid-list cols=\"2\" rowHeight=\"4rem\">\n        <mat-grid-tile colspan=\"1\" class=\"font-1-2 font-weight-bold\">\n            <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.conversationFlow}}</div>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" class=\"right aligned\">\n            <div class=\"w-100 text-right\">\n                <button mat-raised-button class=\"primary\" *ngIf=\"botLogics && botLogics.length\" (click)=\"openModel()\">\n                    {{resourceService.frmelmnts?.btn?.addLogic}}\n                </button>\n            </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"1\">\n\n        <ng-container *ngIf=\"botLogics && botLogics.length <= 0; else showTable\">\n            <mat-grid-list cols=\"1\">\n                <div class=\"text-center\" style=\"margin: auto; padding: 2rem;\">\n                    <div class=\"text-center\">\n                        <div class=\"text-center\">\n                            <img alt=\"Search Icon\" src=\"assets/uci-console/images/empty.svg\">\n                        </div>\n                        <div class=\"text-center mt-20\">\n                            {{resourceService.frmelmnts?.lbl?.noLogic}}\n                        </div>\n                    </div>\n                    <button mat-raised-button class=\"mt-10\" (click)=\"openModel()\">\n                        {{resourceService.frmelmnts?.btn?.addLogic}}\n                    </button>\n                </div>\n            </mat-grid-list>\n        </ng-container>\n        <ng-template #showTable>\n            <div class=\"computer only\">\n                <table mat-table [dataSource]=\"datasource\">\n                    <ng-container matColumnDef=\"sno\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.step}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\"> {{i + 1}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.name}}</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"description\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.description}}</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"action\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.action}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\" class=\"center aligned\">\n                            <button mat-button [matMenuTriggerFor]=\"menu\">\n                                <mat-icon>more_vert</mat-icon>\n                            </button>\n                            <mat-menu #menu=\"matMenu\" class=\"uci-list-menu\">\n                                <button mat-menu-item (click)=\"openModel(element, i)\">\n                                    {{resourceService.frmelmnts?.lbl?.edit}}\n                                </button>\n                                <button mat-menu-item (click)=\"onDelete(element, i)\">\n                                    {{resourceService.frmelmnts?.lbl?.delete}}\n                                </button>\n                            </mat-menu>\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </div>\n\n            <div class=\"mobile only\">\n                <div *ngFor=\"let botLogic of botLogics; let i = index\" class=\"mb-5\">\n                    <mat-card>\n                        <mat-card-content>\n                            <mat-grid-list cols=\"4\" rowHeight=\"35\">\n                                <mat-grid-tile colspan=\"1\">\n                                    <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.name}}</div>\n                                </mat-grid-tile>\n                                <mat-grid-tile colspan=\"3\" class=\"overflow-visible\">\n                                    <div class=\"w-100 d-flex justify-between align-middle\">\n                                        <h5>{{botLogic.name}}</h5>\n                                        <div class=\"ui dropdown\" suiDropdown>\n                                            <button mat-icon-button>\n                                                <mat-icon>more_vert</mat-icon>\n                                            </button>\n                                            <div class=\"menu\" suiDropdownMenu>\n                                                <div class=\"item\" (click)=\"openModel(botLogic, i)\">\n                                                    {{resourceService.frmelmnts?.lbl?.edit}}\n                                                </div>\n                                                <div class=\"item\" (click)=\"onDelete(botLogic, i)\">\n                                                    {{resourceService.frmelmnts?.lbl?.delete}}\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </mat-grid-tile>\n                                <mat-grid-tile colspan=\"1\">\n                                    <div class=\"w-100 wrap-text text-left\">{{resourceService.frmelmnts?.lbl?.description}}</div>\n                                </mat-grid-tile>\n                                <mat-grid-tile colspan=\"3\">\n                                    <div class=\"w-100 text-left\">\n                                        {{botLogic.description}}\n                                    </div>\n                                </mat-grid-tile>\n                            </mat-grid-list>\n                        </mat-card-content>\n                    </mat-card>\n                </div>\n            </div>\n        </ng-template>\n    </mat-grid-list>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}.mat-column-action{width:5px}"]
    })
], LogicListComponent);
export { LogicListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naWMtbGlzdC9sb2dpYy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQU8zRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWEzQixZQUNZLFVBQXNCLEVBQ3RCLGFBQTRCLEVBQzdCLE1BQWlCO1FBRmhCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQWZuQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUd0QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHFCQUFnQixHQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFB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QUFBOztZQXRHMkIsVUFBVTtZQUNQLGFBQWE7WUFDckIsU0FBUzs7QUFmbkI7SUFBUixLQUFLLEVBQUU7cURBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7aUVBQTRCO0FBQzFCO0lBQVQsTUFBTSxFQUFFO2tEQUFrQztBQUhsQyxrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQiw0Nk1BQTBDOztLQUU3QyxDQUFDO0dBQ1csa0JBQWtCLENBb0g5QjtTQXBIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7QWRkTG9naWNDb21wb25lbnR9IGZyb20gJy4uL2FkZC1sb2dpYy9hZGQtbG9naWMuY29tcG9uZW50JztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItbG9naWMtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2ljLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2ljLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpY0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGJvdExvZ2ljcyA9IFtdO1xuICAgIEBJbnB1dCgpIG5vdGlmaWNhdGlvbkJvdExvZ2ljcyA9IFtdO1xuICAgIEBPdXRwdXQoKSBtb2RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBkYXRhc291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcbiAgICBsb2dpY0Zvcm1SZXF1ZXN0ID0ge307XG4gICAgc2VsZWN0ZWRMb2dpY0luZGV4O1xuICAgIGZpbGVFcnJvclN0YXR1cztcbiAgICBpc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgIGNvbGxlY3Rpb25MaXN0TW9kYWwgPSBmYWxzZTtcbiAgICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc25vJywgJ25hbWUnLCAnZGVzY3JpcHRpb24nLCAnYWN0aW9uJ107XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLmRhdGFzb3VyY2UuZGF0YSA9IHRoaXMuYm90TG9naWNzO1xuICAgIH1cblxuICAgIG9wZW5Nb2RlbChsb2dpYyA9IG51bGwsIGluZGV4ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmxvZ2ljRm9ybVJlcXVlc3QgPSB7fTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTGlzdE1vZGFsID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5sb2dpY0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgdGhpcy5maWxlRXJyb3JTdGF0dXMgPSBudWxsO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBpZiAobG9naWMgJiYgbG9naWMuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMb2dpY0luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBsb2dpYy5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBsb2dpYy5uYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBsb2dpYy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBmb3JtSWQ6IGxvZ2ljLnRyYW5zZm9ybWVyc1swXS5tZXRhLmZvcm1JRFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFkZExvZ2ljQ29tcG9uZW50LCB7XG4gICAgICAgICAgICB3aWR0aDogJzg1MHB4JyxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGxvZ2ljRm9ybURhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hdC1kaWFsb2ctcmVzdWx0JywgbG9naWNGb3JtRGF0YSk7XG4gICAgICAgICAgICBpZiAobG9naWNGb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Mb2dpY0FkZChsb2dpY0Zvcm1EYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Mb2dpY0FkZChsb2dpY0Zvcm1EYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlcURhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIGlkOiBsb2dpY0Zvcm1EYXRhLmlkLFxuICAgICAgICAgICAgbmFtZTogbG9naWNGb3JtRGF0YS5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGxvZ2ljRm9ybURhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0cmFuc2Zvcm1lcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnNzc0Y2QxMzQtNjY1Ny00Njg4LTg1ZjYtNjMzOGUyMzIzZGRlJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogJ2h0dHBzOi8vaG9zdGVkLm15LmZvcm0uaGVyZS5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlEOiBsb2dpY0Zvcm1EYXRhLmZvcm1JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBsb2dpY0Zvcm1EYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBsb2dpY0Zvcm1EYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVUeXBlOiAnSlNfVEVNUExBVEVfTElURVJBTFMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYWRhcHRlcjogdGhpcy5nbG9iYWxTZXJ2aWNlLmdldEFkYXB0ZXJJZCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IHRydWU7XG4gICAgICAgIGlmIChsb2dpY0Zvcm1EYXRhLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UudXBkYXRlTG9naWMobG9naWNGb3JtRGF0YS5pZCwge2RhdGE6IHJlcURhdGF9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG9naWMgPSByZXFEYXRhO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZXhpc3RpbmdMb2dpYy5pZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RMb2dpY3NbdGhpcy5zZWxlY3RlZExvZ2ljSW5kZXhdID0gT2JqZWN0LmFzc2lnbih0aGlzLmJvdExvZ2ljc1t0aGlzLnNlbGVjdGVkTG9naWNJbmRleF0sIGV4aXN0aW5nTG9naWMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW9kaWZ5KCk7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5jcmVhdGVMb2dpYyh7ZGF0YTogcmVxRGF0YX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdMb2dpYyA9IHJlcURhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBleGlzdGluZ0xvZ2ljLmlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdExvZ2ljcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Nb2RpZnkoKTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGUobG9naWMsIGluZGV4KSB7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS5kZWxldGVMb2dpYyhsb2dpYy5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMb2dpY3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbk1vZGlmeSgpIHtcbiAgICAgICAgdGhpcy5kYXRhc291cmNlLmRhdGEgPSB0aGlzLmJvdExvZ2ljcztcbiAgICAgICAgdGhpcy5tb2RpZnkuZW1pdCh0aGlzLmJvdExvZ2ljcyk7XG4gICAgfVxufVxuIl19
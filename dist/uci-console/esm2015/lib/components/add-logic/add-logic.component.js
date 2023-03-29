import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
let AddLogicComponent = class AddLogicComponent {
    constructor(uciService, fb, toasterService, globalService, dialogRef, data) {
        this.uciService = uciService;
        this.fb = fb;
        this.toasterService = toasterService;
        this.globalService = globalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isModalLoaderShow = false;
        this.odkFileAlreadyExist = false;
        this.resourceService = this.globalService.getResourceService();
        this.initialize();
        if (data && data.id) {
            this.patchValue(data);
        }
    }
    initialize() {
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.logicForm = this.fb.group({
            id: [null],
            name: ['', Validators.required],
            description: [''],
            formId: ['', Validators.required]
        });
    }
    patchValue(item) {
        this.logicForm.patchValue({
            id: item.id,
            name: item.name,
            description: item.description,
            formId: item.formID
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    onLogicAdd() {
        this.dialogRef.close(this.logicForm.value);
    }
    onFileUpload(event) {
        if (!event.target.files.length) {
            return;
        }
        const file = event.target.files[0];
        const obj = {
            form: file
        };
        this.logicForm.patchValue({ formId: '' });
        this.isModalLoaderShow = true;
        this.uciService.uploadFile(obj).subscribe((fileInfo) => {
            if (fileInfo.data) {
                this.logicForm.patchValue({ formId: fileInfo.data.formID });
            }
            this.isModalLoaderShow = false;
            this.odkFileAlreadyExist = false;
        }, error => {
            this.isModalLoaderShow = false;
            this.odkFileAlreadyExist = true;
            this.fileErrorStatus = error.status;
            if (error.result && error.result.error) {
                this.toasterService.error(error.result.error);
            }
        });
    }
    manualDownload() {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'UCI%20_%20ODK%20Instruction%20Manual.pdf', '_blank');
    }
    sampleODKDownload() {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'Sample_ODK.xlsx', '_blank');
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    }
};
AddLogicComponent.ctorParameters = () => [
    { type: UciService },
    { type: FormBuilder },
    { type: ToasterService },
    { type: GlobalService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
AddLogicComponent = __decorate([
    Component({
        selector: 'lib-add-logic',
        template: "<section style=\"background: white;padding: 20px\">\n    <div class=\"uci-logic-container\">\n        <h1 mat-dialog-title>\n            {{logicForm.get('id').value ? resourceService.frmelmnts?.lbl?.updateConversationLogic : resourceService.frmelmnts?.lbl?.addConversationLogic}}\n        </h1>\n        <mat-dialog-content>\n            <form [formGroup]=\"logicForm\">\n                <mat-form-field class=\"w-100\" appearance=\"outline\">\n                    <mat-label>\n                        {{resourceService.frmelmnts?.lbl?.name}}\n                        <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n                    </mat-label>\n                    <input matInput type=\"text\" name=\"name\" placeholder=\"{{resourceService.frmelmnts?.lbl?.enterName}}\"\n                           formControlName=\"name\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100 \" appearance=\"outline\">\n                    <mat-label>{{resourceService.frmelmnts?.lbl?.description}}</mat-label>\n                    <textarea matInput rows=\"3\" name=\"description\"\n                              placeholder=\"{{resourceService.frmelmnts?.lbl?.enterDescription}}\"\n                              formControlName=\"description\"></textarea>\n                </mat-form-field>\n\n                <div>\n                    <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"3rem\" (window:resize)=\"onResize($event)\">\n                        <mat-grid-tile colspan=\"1\" class=\"font-1-2\">\n                            <div class=\"w-100 text-left\">\n                                {{resourceService.frmelmnts?.lbl?.uploadOdkForm}}\n                                <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n                            </div>\n                        </mat-grid-tile>\n                        <mat-grid-tile *ngIf=\"breakpoint === 3\" colspan=\"2\" class=\"font-1-2 computer only\">\n                            <div class=\"w-100 text-right\">\n                                <a class=\"mx-5 sample-download\" (click)=\"manualDownload()\"\n                                   matTooltip=\"{{resourceService.frmelmnts?.lbl?.instructionManual}}\">\n                                    {{resourceService.frmelmnts?.lbl?.instructionManual}}\n                                </a>\n                                <a class=\"ml-1 sample-download\" (click)=\"sampleODKDownload()\"\n                                   matTooltip=\"{{resourceService.frmelmnts?.lbl?.sampleOdkForm}}\">\n                                    {{resourceService.frmelmnts?.lbl?.sampleOdkForm}}\n                                </a>\n                            </div>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <input type=\"file\" name=\"file\" (change)=\"onFileUpload($event)\" accept=\".xml\" class=\"uci-file-input\">\n                    <small *ngIf=\"odkFileAlreadyExist\" class=\"text-danger\">{{fileErrorStatus}}</small>\n                    <div class=\"mobile only field text-right p-0\">\n                        <a class=\"mr-5 sample-download\"\n                           (click)=\"manualDownload()\">{{resourceService.frmelmnts?.lbl?.instructionManual}}</a>\n                        <a class=\"sample-download\"\n                           (click)=\"sampleODKDownload()\">{{resourceService.frmelmnts?.lbl?.sampleOdkForm}}</a>\n                    </div>\n                </div>\n\n            </form>\n        </mat-dialog-content>\n        <mat-dialog-actions align=\"end\">\n            <ng-container *ngIf=\"isModalLoaderShow; else modalBtn\">\n                <button mat-stroked-button class=\"action-button p-0\">\n                    <div class=\"ui active tiny inline loader\"></div>\n                </button>\n            </ng-container>\n            <ng-template #modalBtn>\n                <button mat-stroked-button class=\"action-button\" (click)=\"onLogicAdd()\"\n                        [disabled]=\"logicForm.invalid\">\n                    {{logicForm.get('id').value ? resourceService.frmelmnts?.btn?.update : resourceService.frmelmnts?.btn?.add}}\n                </button>\n            </ng-template>\n            <button mat-stroked-button class=\"action-button\" (click)=\"onCancel()\">\n                {{resourceService.frmelmnts?.btn?.cancel}}\n            </button>\n        </mat-dialog-actions>\n    </div>\n</section>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .uci-logic-container{padding:20px}.uci-file-input{border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);line-height:1.21428571em;padding:.67857143em 1em;width:100%}.sample-download{text-decoration:underline!important;cursor:pointer!important}.mobile .sample-download{font-size:.8rem}"]
    }),
    __param(5, Inject(MAT_DIALOG_DATA))
], AddLogicComponent);
export { AddLogicComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWxvZ2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZGQtbG9naWMvYWRkLWxvZ2ljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQU85RCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQVExQixZQUNZLFVBQXNCLEVBQ3RCLEVBQWUsRUFDZixjQUE4QixFQUM5QixhQUE0QixFQUM3QixTQUEwQyxFQUNqQixJQUFTO1FBTGpDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixjQUFTLEdBQVQsU0FBUyxDQUFpQztRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBWjdDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUxQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFXeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUks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QyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsMENBQTBDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUVKLENBQUE7O1lBakYyQixVQUFVO1lBQ2xCLFdBQVc7WUFDQyxjQUFjO1lBQ2YsYUFBYTtZQUNsQixZQUFZOzRDQUM3QixNQUFNLFNBQUMsZUFBZTs7QUFkbEIsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDA0SUFBeUM7O0tBRTVDLENBQUM7SUFlTyxXQUFBLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtHQWRuQixpQkFBaUIsQ0EwRjdCO1NBMUZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9hc3RlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWFkZC1sb2dpYycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkZC1sb2dpYy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWRkLWxvZ2ljLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZExvZ2ljQ29tcG9uZW50IHtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG4gICAgaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICBsb2dpY0Zvcm06IEZvcm1Hcm91cDtcbiAgICBvZGtGaWxlQWxyZWFkeUV4aXN0ID0gZmFsc2U7XG4gICAgZmlsZUVycm9yU3RhdHVzO1xuICAgIGJyZWFrcG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFkZExvZ2ljQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGNoVmFsdWUoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSAod2luZG93LmlubmVyV2lkdGggPD0gMTAwMCkgPyAxIDogMztcbiAgICAgICAgdGhpcy5sb2dpY0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGlkOiBbbnVsbF0sXG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJ10sXG4gICAgICAgICAgICBmb3JtSWQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGF0Y2hWYWx1ZShpdGVtKSB7XG4gICAgICAgIHRoaXMubG9naWNGb3JtLnBhdGNoVmFsdWUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGZvcm1JZDogaXRlbS5mb3JtSURcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBvbkxvZ2ljQWRkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmxvZ2ljRm9ybS52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25GaWxlVXBsb2FkKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGZvcm06IGZpbGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2dpY0Zvcm0ucGF0Y2hWYWx1ZSh7Zm9ybUlkOiAnJ30pO1xuICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLnVwbG9hZEZpbGUob2JqKS5zdWJzY3JpYmUoKGZpbGVJbmZvOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZUluZm8uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljRm9ybS5wYXRjaFZhbHVlKHtmb3JtSWQ6IGZpbGVJbmZvLmRhdGEuZm9ybUlEfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ka0ZpbGVBbHJlYWR5RXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vZGtGaWxlQWxyZWFkeUV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVFcnJvclN0YXR1cyA9IGVycm9yLnN0YXR1cztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzdWx0ICYmIGVycm9yLnJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLnJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1hbnVhbERvd25sb2FkKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0QmxvYlVybCgpLnJlcGxhY2UoJy9wbGF5ZXInLCAnJykgKyAnVUNJJTIwXyUyME9ESyUyMEluc3RydWN0aW9uJTIwTWFudWFsLnBkZicsICdfYmxhbmsnKTtcbiAgICB9XG5cbiAgICBzYW1wbGVPREtEb3dubG9hZCgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5nbG9iYWxTZXJ2aWNlLmdldEJsb2JVcmwoKS5yZXBsYWNlKCcvcGxheWVyJywgJycpICsgJ1NhbXBsZV9PREsueGxzeCcsICdfYmxhbmsnKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPD0gMTAwMCkgPyAxIDogMztcbiAgICB9XG5cbn1cbiJdfQ==
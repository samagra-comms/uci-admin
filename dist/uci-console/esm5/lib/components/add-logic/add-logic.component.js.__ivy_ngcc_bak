import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
var AddLogicComponent = /** @class */ (function () {
    function AddLogicComponent(uciService, fb, toasterService, globalService, dialogRef, data) {
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
    AddLogicComponent.prototype.initialize = function () {
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.logicForm = this.fb.group({
            id: [null],
            name: ['', Validators.required],
            description: [''],
            formId: ['', Validators.required]
        });
    };
    AddLogicComponent.prototype.patchValue = function (item) {
        this.logicForm.patchValue({
            id: item.id,
            name: item.name,
            description: item.description,
            formId: item.formID
        });
    };
    AddLogicComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddLogicComponent.prototype.onLogicAdd = function () {
        this.dialogRef.close(this.logicForm.value);
    };
    AddLogicComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        if (!event.target.files.length) {
            return;
        }
        var file = event.target.files[0];
        var obj = {
            form: file
        };
        this.logicForm.patchValue({ formId: '' });
        this.isModalLoaderShow = true;
        this.uciService.uploadFile(obj).subscribe(function (fileInfo) {
            if (fileInfo.data) {
                _this.logicForm.patchValue({ formId: fileInfo.data.formID });
            }
            _this.isModalLoaderShow = false;
            _this.odkFileAlreadyExist = false;
        }, function (error) {
            _this.isModalLoaderShow = false;
            _this.odkFileAlreadyExist = true;
            _this.fileErrorStatus = error.status;
            if (error.result && error.result.error) {
                _this.toasterService.error(error.result.error);
            }
        });
    };
    AddLogicComponent.prototype.manualDownload = function () {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'UCI%20_%20ODK%20Instruction%20Manual.pdf', '_blank');
    };
    AddLogicComponent.prototype.sampleODKDownload = function () {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'Sample_ODK.xlsx', '_blank');
    };
    AddLogicComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    };
    AddLogicComponent.ctorParameters = function () { return [
        { type: UciService },
        { type: FormBuilder },
        { type: ToasterService },
        { type: GlobalService },
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    AddLogicComponent = __decorate([
        Component({
            selector: 'lib-add-logic',
            template: "<section style=\"background: white;padding: 20px\">\n    <div class=\"uci-logic-container\">\n        <h1 mat-dialog-title>\n            {{logicForm.get('id').value ? resourceService.frmelmnts?.lbl?.updateConversationLogic : resourceService.frmelmnts?.lbl?.addConversationLogic}}\n        </h1>\n        <mat-dialog-content>\n            <form [formGroup]=\"logicForm\">\n                <mat-form-field class=\"w-100\" appearance=\"outline\">\n                    <mat-label>\n                        {{resourceService.frmelmnts?.lbl?.name}}\n                        <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n                    </mat-label>\n                    <input matInput type=\"text\" name=\"name\" placeholder=\"{{resourceService.frmelmnts?.lbl?.enterName}}\"\n                           formControlName=\"name\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100 \" appearance=\"outline\">\n                    <mat-label>{{resourceService.frmelmnts?.lbl?.description}}</mat-label>\n                    <textarea matInput rows=\"3\" name=\"description\"\n                              placeholder=\"{{resourceService.frmelmnts?.lbl?.enterDescription}}\"\n                              formControlName=\"description\"></textarea>\n                </mat-form-field>\n\n                <div>\n                    <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"3rem\" (window:resize)=\"onResize($event)\">\n                        <mat-grid-tile colspan=\"1\" class=\"font-1-2\">\n                            <div class=\"w-100 text-left\">\n                                {{resourceService.frmelmnts?.lbl?.uploadOdkForm}}\n                                <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n                            </div>\n                        </mat-grid-tile>\n                        <mat-grid-tile *ngIf=\"breakpoint === 3\" colspan=\"2\" class=\"font-1-2 computer only\">\n                            <div class=\"w-100 text-right\">\n                                <a class=\"mx-5 sample-download\" (click)=\"manualDownload()\"\n                                   matTooltip=\"{{resourceService.frmelmnts?.lbl?.instructionManual}}\">\n                                    {{resourceService.frmelmnts?.lbl?.instructionManual}}\n                                </a>\n                                <a class=\"ml-1 sample-download\" (click)=\"sampleODKDownload()\"\n                                   matTooltip=\"{{resourceService.frmelmnts?.lbl?.sampleOdkForm}}\">\n                                    {{resourceService.frmelmnts?.lbl?.sampleOdkForm}}\n                                </a>\n                            </div>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <input type=\"file\" name=\"file\" (change)=\"onFileUpload($event)\" accept=\".xml\" class=\"uci-file-input\">\n                    <small *ngIf=\"odkFileAlreadyExist\" class=\"text-danger\">{{fileErrorStatus}}</small>\n                    <div class=\"mobile only field text-right p-0\">\n                        <a class=\"mr-5 sample-download\"\n                           (click)=\"manualDownload()\">{{resourceService.frmelmnts?.lbl?.instructionManual}}</a>\n                        <a class=\"sample-download\"\n                           (click)=\"sampleODKDownload()\">{{resourceService.frmelmnts?.lbl?.sampleOdkForm}}</a>\n                    </div>\n                </div>\n\n            </form>\n        </mat-dialog-content>\n        <mat-dialog-actions align=\"end\">\n            <ng-container *ngIf=\"isModalLoaderShow; else modalBtn\">\n                <button mat-stroked-button class=\"action-button p-0\">\n                    <div class=\"ui active tiny inline loader\"></div>\n                </button>\n            </ng-container>\n            <ng-template #modalBtn>\n                <button mat-stroked-button class=\"action-button\" (click)=\"onLogicAdd()\"\n                        [disabled]=\"logicForm.invalid\">\n                    {{logicForm.get('id').value ? resourceService.frmelmnts?.btn?.update : resourceService.frmelmnts?.btn?.add}}\n                </button>\n            </ng-template>\n            <button mat-stroked-button class=\"action-button\" (click)=\"onCancel()\">\n                {{resourceService.frmelmnts?.btn?.cancel}}\n            </button>\n        </mat-dialog-actions>\n    </div>\n</section>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .uci-logic-container{padding:20px}.uci-file-input{border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);line-height:1.21428571em;padding:.67857143em 1em;width:100%}.sample-download{text-decoration:underline!important;cursor:pointer!important}.mobile .sample-download{font-size:.8rem}"]
        }),
        __param(5, Inject(MAT_DIALOG_DATA))
    ], AddLogicComponent);
    return AddLogicComponent;
}());
export { AddLogicComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWxvZ2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZGQtbG9naWMvYWRkLWxvZ2ljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQU85RDtJQVFJLDJCQUNZLFVBQXNCLEVBQ3RCLEVBQWUsRUFDZixjQUE4QixFQUM5QixhQUE0QixFQUM3QixTQUEwQyxFQUNqQixJQUFTO1FBTGpDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixjQUFTLEdBQVQsU0FBUyxDQUFpQztRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBWjdDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUxQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFXeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7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TyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRywwQ0FBMEMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvSCxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkEvRXVCLFVBQVU7Z0JBQ2xCLFdBQVc7Z0JBQ0MsY0FBYztnQkFDZixhQUFhO2dCQUNsQixZQUFZO2dEQUM3QixNQUFNLFNBQUMsZUFBZTs7SUFkbEIsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDA0SUFBeUM7O1NBRTVDLENBQUM7UUFlTyxXQUFBLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtPQWRuQixpQkFBaUIsQ0EwRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQTFGWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge1RvYXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1hZGQtbG9naWMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZGQtbG9naWMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FkZC1sb2dpYy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRMb2dpY0NvbXBvbmVudCB7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuICAgIGlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgbG9naWNGb3JtOiBGb3JtR3JvdXA7XG4gICAgb2RrRmlsZUFscmVhZHlFeGlzdCA9IGZhbHNlO1xuICAgIGZpbGVFcnJvclN0YXR1cztcbiAgICBicmVha3BvaW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBZGRMb2dpY0NvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xuICAgICAgICAgICAgdGhpcy5wYXRjaFZhbHVlKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50ID0gKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMDApID8gMSA6IDM7XG4gICAgICAgIHRoaXMubG9naWNGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBpZDogW251bGxdLFxuICAgICAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgICAgICAgZm9ybUlkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhdGNoVmFsdWUoaXRlbSkge1xuICAgICAgICB0aGlzLmxvZ2ljRm9ybS5wYXRjaFZhbHVlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBmb3JtSWQ6IGl0ZW0uZm9ybUlEXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgb25Mb2dpY0FkZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy5sb2dpY0Zvcm0udmFsdWUpO1xuICAgIH1cblxuICAgIG9uRmlsZVVwbG9hZChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBmb3JtOiBmaWxlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubG9naWNGb3JtLnBhdGNoVmFsdWUoe2Zvcm1JZDogJyd9KTtcbiAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS51cGxvYWRGaWxlKG9iaikuc3Vic2NyaWJlKChmaWxlSW5mbzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGVJbmZvLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpY0Zvcm0ucGF0Y2hWYWx1ZSh7Zm9ybUlkOiBmaWxlSW5mby5kYXRhLmZvcm1JRH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vZGtGaWxlQWxyZWFkeUV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub2RrRmlsZUFscmVhZHlFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlRXJyb3JTdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3VsdCAmJiBlcnJvci5yZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihlcnJvci5yZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtYW51YWxEb3dubG9hZCgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5nbG9iYWxTZXJ2aWNlLmdldEJsb2JVcmwoKS5yZXBsYWNlKCcvcGxheWVyJywgJycpICsgJ1VDSSUyMF8lMjBPREslMjBJbnN0cnVjdGlvbiUyME1hbnVhbC5wZGYnLCAnX2JsYW5rJyk7XG4gICAgfVxuXG4gICAgc2FtcGxlT0RLRG93bmxvYWQoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZ2xvYmFsU2VydmljZS5nZXRCbG9iVXJsKCkucmVwbGFjZSgnL3BsYXllcicsICcnKSArICdTYW1wbGVfT0RLLnhsc3gnLCAnX2JsYW5rJyk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50ID0gKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoIDw9IDEwMDApID8gMSA6IDM7XG4gICAgfVxuXG59XG4iXX0=
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../services/uci.service";
import * as i2 from "@angular/forms";
import * as i3 from "../../services/toaster.service";
import * as i4 from "../../services/global.service";
import * as i5 from "@angular/material/dialog";
import * as i6 from "ng2-semantic-ui-v9";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/material/grid-list";
import * as i10 from "@angular/common";
import * as i11 from "@angular/material/button";
import * as i12 from "@angular/material/tooltip";
function AddLogicComponent_mat_grid_tile_23_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-grid-tile", 21);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵelementStart(2, "a", 23);
    i0.ɵɵlistener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.manualDownload(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 24);
    i0.ɵɵlistener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r6); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.sampleODKDownload(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.instructionManual);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.instructionManual, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.sampleOdkForm);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.sampleOdkForm, " ");
} }
function AddLogicComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.fileErrorStatus);
} }
function AddLogicComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 26);
    i0.ɵɵelement(2, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function AddLogicComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function AddLogicComponent_ng_template_33_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onLogicAdd(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r4.logicForm.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.logicForm.get("id").value ? ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.update : ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.add, " ");
} }
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
                _this.logicForm.patchValue({ formId: fileInfo.data });
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
    AddLogicComponent.ɵfac = function AddLogicComponent_Factory(t) { return new (t || AddLogicComponent)(i0.ɵɵdirectiveInject(i1.UciService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.ToasterService), i0.ɵɵdirectiveInject(i4.GlobalService), i0.ɵɵdirectiveInject(i5.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    AddLogicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddLogicComponent, selectors: [["lib-add-logic"]], decls: 37, vars: 15, consts: [[2, "background", "white", "padding", "20px"], [1, "uci-logic-container"], ["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline", 1, "w-100"], [1, "asterisk", "icon", "asterisk-color"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 3, "placeholder"], ["matInput", "", "rows", "3", "name", "description", "formControlName", "description", 3, "placeholder"], ["rowHeight", "3rem", 3, "cols", "resize"], ["colspan", "1", 1, "font-1-2"], [1, "w-100", "text-left"], ["colspan", "2", "class", "font-1-2 computer only", 4, "ngIf"], ["type", "file", "name", "file", "accept", ".xml", 1, "uci-file-input", 3, "change"], ["class", "text-danger", 4, "ngIf"], [1, "mobile", "only", "field", "text-right", "p-0"], [1, "mr-5", "sample-download", 3, "click"], [1, "sample-download", 3, "click"], ["align", "end"], [4, "ngIf", "ngIfElse"], ["modalBtn", ""], ["mat-stroked-button", "", 1, "action-button", 3, "click"], ["colspan", "2", 1, "font-1-2", "computer", "only"], [1, "w-100", "text-right"], [1, "mx-5", "sample-download", 3, "matTooltip", "click"], [1, "ml-1", "sample-download", 3, "matTooltip", "click"], [1, "text-danger"], ["mat-stroked-button", "", 1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], ["mat-stroked-button", "", 1, "action-button", 3, "disabled", "click"]], template: function AddLogicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h1", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-dialog-content");
            i0.ɵɵelementStart(5, "form", 3);
            i0.ɵɵelementStart(6, "mat-form-field", 4);
            i0.ɵɵelementStart(7, "mat-label");
            i0.ɵɵtext(8);
            i0.ɵɵelementStart(9, "sup");
            i0.ɵɵelement(10, "i", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-form-field", 4);
            i0.ɵɵelementStart(13, "mat-label");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "textarea", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div");
            i0.ɵɵelementStart(17, "mat-grid-list", 8);
            i0.ɵɵlistener("resize", function AddLogicComponent_Template_mat_grid_list_resize_17_listener($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
            i0.ɵɵelementStart(18, "mat-grid-tile", 9);
            i0.ɵɵelementStart(19, "div", 10);
            i0.ɵɵtext(20);
            i0.ɵɵelementStart(21, "sup");
            i0.ɵɵelement(22, "i", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, AddLogicComponent_mat_grid_tile_23_Template, 6, 4, "mat-grid-tile", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "input", 12);
            i0.ɵɵlistener("change", function AddLogicComponent_Template_input_change_24_listener($event) { return ctx.onFileUpload($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(25, AddLogicComponent_small_25_Template, 2, 1, "small", 13);
            i0.ɵɵelementStart(26, "div", 14);
            i0.ɵɵelementStart(27, "a", 15);
            i0.ɵɵlistener("click", function AddLogicComponent_Template_a_click_27_listener() { return ctx.manualDownload(); });
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "a", 16);
            i0.ɵɵlistener("click", function AddLogicComponent_Template_a_click_29_listener() { return ctx.sampleODKDownload(); });
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "mat-dialog-actions", 17);
            i0.ɵɵtemplate(32, AddLogicComponent_ng_container_32_Template, 3, 0, "ng-container", 18);
            i0.ɵɵtemplate(33, AddLogicComponent_ng_template_33_Template, 2, 2, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(35, "button", 20);
            i0.ɵɵlistener("click", function AddLogicComponent_Template_button_click_35_listener() { return ctx.onCancel(); });
            i0.ɵɵtext(36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r3 = i0.ɵɵreference(34);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.logicForm.get("id").value ? ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.updateConversationLogic : ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.addConversationLogic, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.logicForm);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.name, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.description);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterDescription);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cols", ctx.breakpoint);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.uploadOdkForm, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.breakpoint === 3);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.odkFileAlreadyExist);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.instructionManual);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.sampleOdkForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isModalLoaderShow)("ngIfElse", _r3);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.cancel, " ");
        } }, directives: [i5.MatDialogTitle, i5.MatDialogContent, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i6.ɵn, i2.FormGroupDirective, i7.MatFormField, i7.MatLabel, i8.MatInput, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i9.MatGridList, i9.MatGridTile, i10.NgIf, i5.MatDialogActions, i11.MatButton, i12.MatTooltip], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .uci-logic-container{padding:20px}.uci-file-input[_ngcontent-%COMP%]{border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);line-height:1.21428571em;padding:.67857143em 1em;width:100%}.sample-download[_ngcontent-%COMP%]{text-decoration:underline!important;cursor:pointer!important}.mobile[_ngcontent-%COMP%]   .sample-download[_ngcontent-%COMP%]{font-size:.8rem}"] });
    return AddLogicComponent;
}());
export { AddLogicComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddLogicComponent, [{
        type: Component,
        args: [{
                selector: 'lib-add-logic',
                templateUrl: './add-logic.component.html',
                styleUrls: ['./add-logic.component.scss'],
            }]
    }], function () { return [{ type: i1.UciService }, { type: i2.FormBuilder }, { type: i3.ToasterService }, { type: i4.GlobalService }, { type: i5.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWxvZ2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZGQtbG9naWMvYWRkLWxvZ2ljLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2FkZC1sb2dpYy9hZGQtbG9naWMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBRXZFLE9BQU8sRUFBeUIsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUM0QjFDLHlDQUNJO0lBQUEsK0JBQ0k7SUFBQSw2QkFFSTtJQUY0Qiw2TEFBMEI7SUFFdEQsWUFDSjtJQUFBLGlCQUFJO0lBQ0osNkJBRUk7SUFGNEIsZ01BQTZCO0lBRXpELFlBQ0o7SUFBQSxpQkFBSTtJQUNSLGlCQUFNO0lBQ1YsaUJBQWdCOzs7SUFSTCxlQUFrRTtJQUFsRSxzTUFBa0U7SUFDakUsZUFDSjtJQURJLCtMQUNKO0lBRUcsZUFBOEQ7SUFBOUQsa01BQThEO0lBQzdELGVBQ0o7SUFESSwyTEFDSjs7O0lBS1osaUNBQXVEO0lBQUEsWUFBbUI7SUFBQSxpQkFBUTs7O0lBQTNCLGVBQW1CO0lBQW5CLDRDQUFtQjs7O0lBWWxGLDZCQUNJO0lBQUEsa0NBQ0k7SUFBQSwwQkFBZ0Q7SUFDcEQsaUJBQVM7SUFDYiwwQkFBZTs7OztJQUVYLGtDQUVJO0lBRjZDLDRMQUFzQjtJQUVuRSxZQUNKO0lBQUEsaUJBQVM7OztJQUZELG1EQUE4QjtJQUNsQyxlQUNKO0lBREksMFdBQ0o7O0FEM0RoQjtJQWFJLDJCQUNZLFVBQXNCLEVBQ3RCLEVBQWUsRUFDZixjQUE4QixFQUM5QixhQUE0QixFQUM3QixTQUEwQyxFQUNqQixJQUFT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RDtZQUFqRCx1S0FBaUQ7WUFPaEYsZUFBd0M7WUFBeEMsNENBQXdDLGlCQUFBO1lBWWxELGVBQ0o7WUFESSwyS0FDSjs7NEJEdEVaO0NBc0dDLEFBL0ZELElBK0ZDO1NBMUZZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDNUM7O3NCQWVRLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9hc3RlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWFkZC1sb2dpYycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkZC1sb2dpYy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWRkLWxvZ2ljLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZExvZ2ljQ29tcG9uZW50IHtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG4gICAgaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICBsb2dpY0Zvcm06IEZvcm1Hcm91cDtcbiAgICBvZGtGaWxlQWxyZWFkeUV4aXN0ID0gZmFsc2U7XG4gICAgZmlsZUVycm9yU3RhdHVzO1xuICAgIGJyZWFrcG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFkZExvZ2ljQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGNoVmFsdWUoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSAod2luZG93LmlubmVyV2lkdGggPD0gMTAwMCkgPyAxIDogMztcbiAgICAgICAgdGhpcy5sb2dpY0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGlkOiBbbnVsbF0sXG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJ10sXG4gICAgICAgICAgICBmb3JtSWQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGF0Y2hWYWx1ZShpdGVtKSB7XG4gICAgICAgIHRoaXMubG9naWNGb3JtLnBhdGNoVmFsdWUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGZvcm1JZDogaXRlbS5mb3JtSURcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBvbkxvZ2ljQWRkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmxvZ2ljRm9ybS52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25GaWxlVXBsb2FkKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGZvcm06IGZpbGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2dpY0Zvcm0ucGF0Y2hWYWx1ZSh7Zm9ybUlkOiAnJ30pO1xuICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLnVwbG9hZEZpbGUob2JqKS5zdWJzY3JpYmUoKGZpbGVJbmZvOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZUluZm8uZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljRm9ybS5wYXRjaFZhbHVlKHtmb3JtSWQ6IGZpbGVJbmZvLmRhdGF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub2RrRmlsZUFscmVhZHlFeGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ka0ZpbGVBbHJlYWR5RXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUVycm9yU3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXN1bHQgJiYgZXJyb3IucmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoZXJyb3IucmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWFudWFsRG93bmxvYWQoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZ2xvYmFsU2VydmljZS5nZXRCbG9iVXJsKCkucmVwbGFjZSgnL3BsYXllcicsICcnKSArICdVQ0klMjBfJTIwT0RLJTIwSW5zdHJ1Y3Rpb24lMjBNYW51YWwucGRmJywgJ19ibGFuaycpO1xuICAgIH1cblxuICAgIHNhbXBsZU9ES0Rvd25sb2FkKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0QmxvYlVybCgpLnJlcGxhY2UoJy9wbGF5ZXInLCAnJykgKyAnU2FtcGxlX09ESy54bHN4JywgJ19ibGFuaycpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA8PSAxMDAwKSA/IDEgOiAzO1xuICAgIH1cblxufVxuIiwiPHNlY3Rpb24gc3R5bGU9XCJiYWNrZ3JvdW5kOiB3aGl0ZTtwYWRkaW5nOiAyMHB4XCI+XG4gICAgPGRpdiBjbGFzcz1cInVjaS1sb2dpYy1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIG1hdC1kaWFsb2ctdGl0bGU+XG4gICAgICAgICAgICB7e2xvZ2ljRm9ybS5nZXQoJ2lkJykudmFsdWUgPyByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVwZGF0ZUNvbnZlcnNhdGlvbkxvZ2ljIDogcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hZGRDb252ZXJzYXRpb25Mb2dpY319XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImxvZ2ljRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInctMTAwXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+PGkgY2xhc3M9XCJhc3RlcmlzayBpY29uIGFzdGVyaXNrLWNvbG9yXCI+PC9pPjwvc3VwPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cInt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5lbnRlck5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInctMTAwIFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmRlc2NyaXB0aW9ufX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hdElucHV0IHJvd3M9XCIzXCIgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVudGVyRGVzY3JpcHRpb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC1saXN0IFtjb2xzXT1cImJyZWFrcG9pbnRcIiByb3dIZWlnaHQ9XCIzcmVtXCIgKHdpbmRvdzpyZXNpemUpPVwib25SZXNpemUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIiBjbGFzcz1cImZvbnQtMS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXBsb2FkT2RrRm9ybX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+PGkgY2xhc3M9XCJhc3RlcmlzayBpY29uIGFzdGVyaXNrLWNvbG9yXCI+PC9pPjwvc3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgKm5nSWY9XCJicmVha3BvaW50ID09PSAzXCIgY29sc3Bhbj1cIjJcIiBjbGFzcz1cImZvbnQtMS0yIGNvbXB1dGVyIG9ubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm14LTUgc2FtcGxlLWRvd25sb2FkXCIgKGNsaWNrKT1cIm1hbnVhbERvd25sb2FkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRUb29sdGlwPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lmluc3RydWN0aW9uTWFudWFsfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5pbnN0cnVjdGlvbk1hbnVhbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtbC0xIHNhbXBsZS1kb3dubG9hZFwiIChjbGljayk9XCJzYW1wbGVPREtEb3dubG9hZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cInt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5zYW1wbGVPZGtGb3JtfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5zYW1wbGVPZGtGb3JtfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgKGNoYW5nZSk9XCJvbkZpbGVVcGxvYWQoJGV2ZW50KVwiIGFjY2VwdD1cIi54bWxcIiBjbGFzcz1cInVjaS1maWxlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cIm9ka0ZpbGVBbHJlYWR5RXhpc3RcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3tmaWxlRXJyb3JTdGF0dXN9fTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUgb25seSBmaWVsZCB0ZXh0LXJpZ2h0IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJtci01IHNhbXBsZS1kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibWFudWFsRG93bmxvYWQoKVwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5pbnN0cnVjdGlvbk1hbnVhbH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJzYW1wbGUtZG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhbXBsZU9ES0Rvd25sb2FkKClcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uc2FtcGxlT2RrRm9ybX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21hdC1kaWFsb2ctY29udGVudD5cbiAgICAgICAgPG1hdC1kaWFsb2ctYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTW9kYWxMb2FkZXJTaG93OyBlbHNlIG1vZGFsQnRuXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgYWN0aXZlIHRpbnkgaW5saW5lIGxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI21vZGFsQnRuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJvbkxvZ2ljQWRkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvZ2ljRm9ybS5pbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7bG9naWNGb3JtLmdldCgnaWQnKS52YWx1ZSA/IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8udXBkYXRlIDogcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5hZGR9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+XG4gICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmNhbmNlbH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9tYXQtZGlhbG9nLWFjdGlvbnM+XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXX0=
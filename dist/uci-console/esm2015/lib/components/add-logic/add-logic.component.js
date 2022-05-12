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
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-grid-tile", 21);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵelementStart(2, "a", 23);
    i0.ɵɵlistener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.manualDownload(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "a", 24);
    i0.ɵɵlistener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.sampleODKDownload(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
    const ctx_r1 = i0.ɵɵnextContext();
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
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function AddLogicComponent_ng_template_33_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onLogicAdd(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r4.logicForm.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.logicForm.get("id").value ? ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.update : ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.add, " ");
} }
export class AddLogicComponent {
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
                this.logicForm.patchValue({ formId: fileInfo.data });
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
}
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
        const _r3 = i0.ɵɵreference(34);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWxvZ2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hZGQtbG9naWMvYWRkLWxvZ2ljLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2FkZC1sb2dpYy9hZGQtbG9naWMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBRXZFLE9BQU8sRUFBeUIsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUM0QjFDLHlDQUNJO0lBQUEsK0JBQ0k7SUFBQSw2QkFFSTtJQUY0QiwrTEFBMEI7SUFFdEQsWUFDSjtJQUFBLGlCQUFJO0lBQ0osNkJBRUk7SUFGNEIsa01BQTZCO0lBRXpELFlBQ0o7SUFBQSxpQkFBSTtJQUNSLGlCQUFNO0lBQ1YsaUJBQWdCOzs7SUFSTCxlQUFrRTtJQUFsRSxzTUFBa0U7SUFDakUsZUFDSjtJQURJLCtMQUNKO0lBRUcsZUFBOEQ7SUFBOUQsa01BQThEO0lBQzdELGVBQ0o7SUFESSwyTEFDSjs7O0lBS1osaUNBQXVEO0lBQUEsWUFBbUI7SUFBQSxpQkFBUTs7O0lBQTNCLGVBQW1CO0lBQW5CLDRDQUFtQjs7O0lBWWxGLDZCQUNJO0lBQUEsa0NBQ0k7SUFBQSwwQkFBZ0Q7SUFDcEQsaUJBQVM7SUFDYiwwQkFBZTs7OztJQUVYLGtDQUVJO0lBRjZDLDhMQUFzQjtJQUVuRSxZQUNKO0lBQUEsaUJBQVM7OztJQUZELG1EQUE4QjtJQUNsQyxlQUNKO0lBREksMFdBQ0o7O0FEdERoQixNQUFNLE9BQU8saUJBQWlCO0lBUTFCLFlBQ1ksVUFBc0IsRUFDdEIsRUFBZSxFQUNmLGNBQThCLEVBQzlCLGFBQTRCLEVBQzdCLFNBQTBDLEVBQ2pCLElBQVM7UUFMakMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWlDO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQUs7UUFaN0Msc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRTFCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQVd4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDVixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUMvQixXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDakIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ3JCO1lBQ0ksRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBQ0QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxHQUFHLEdBQUc7WUFDUixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pEO1FBQ0wsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsY0FBYztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLDBDQUEwQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9ILENBQUM7SUFFRCxpQkFBaUI7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O2tGQXhGUSxpQkFBaUIsME5BY2QsZUFBZTtzREFkbEIsaUJBQWlCO1FDWjlCLGtDQUNJO1FBQUEsOEJBQ0k7UUFBQSw2QkFDSTtRQUFBLFlBQ0o7UUFBQSxpQkFBSztRQUNMLDBDQUNJO1FBQUEsK0JBQ0k7UUFBQSx5Q0FDSTtRQUFBLGlDQUNJO1FBQUEsWUFDQTtRQUFBLDJCQUFLO1FBQUEsd0JBQTRDO1FBQUEsaUJBQU07UUFDM0QsaUJBQVk7UUFDWiw0QkFFSjtRQUFBLGlCQUFpQjtRQUVqQiwwQ0FDSTtRQUFBLGtDQUFXO1FBQUEsYUFBK0M7UUFBQSxpQkFBWTtRQUN0RSwrQkFFbUQ7UUFDdkQsaUJBQWlCO1FBRWpCLDRCQUNJO1FBQUEseUNBQ0k7UUFEZ0QsOEdBQWlCLG9CQUFnQiwrQkFBQztRQUNsRix5Q0FDSTtRQUFBLGdDQUNJO1FBQUEsYUFDQTtRQUFBLDRCQUFLO1FBQUEsd0JBQTRDO1FBQUEsaUJBQU07UUFDM0QsaUJBQU07UUFDVixpQkFBZ0I7UUFDaEIseUZBQ0k7UUFXUixpQkFBZ0I7UUFDaEIsa0NBQ0E7UUFEK0Isc0dBQVUsd0JBQW9CLElBQUM7UUFBOUQsaUJBQ0E7UUFBQSx5RUFBdUQ7UUFDdkQsZ0NBQ0k7UUFBQSw4QkFDOEI7UUFBM0IsMEZBQVMsb0JBQWdCLElBQUM7UUFBQyxhQUFxRDtRQUFBLGlCQUFJO1FBQ3ZGLDhCQUNpQztRQUE5QiwwRkFBUyx1QkFBbUIsSUFBQztRQUFDLGFBQWlEO1FBQUEsaUJBQUk7UUFDMUYsaUJBQU07UUFDVixpQkFBTTtRQUVWLGlCQUFPO1FBQ1gsaUJBQXFCO1FBQ3JCLCtDQUNJO1FBQUEsdUZBQ0k7UUFJSixzSEFDSTtRQUtKLG1DQUNJO1FBRDZDLCtGQUFTLGNBQVUsSUFBQztRQUNqRSxhQUNKO1FBQUEsaUJBQVM7UUFDYixpQkFBcUI7UUFDekIsaUJBQU07UUFDVixpQkFBVTs7O1FBdEVFLGVBQ0o7UUFESSx1WEFDSjtRQUVVLGVBQXVCO1FBQXZCLHlDQUF1QjtRQUdqQixlQUNBO1FBREEseUtBQ0E7UUFFb0MsZUFBMkQ7UUFBM0Qsc0xBQTJEO1FBS3hGLGVBQStDO1FBQS9DLHFLQUErQztRQUVoRCxlQUFrRTtRQUFsRSw2TEFBa0U7UUFLN0QsZUFBbUI7UUFBbkIscUNBQW1CO1FBR3RCLGVBQ0E7UUFEQSxrTEFDQTtRQUdPLGVBQXdCO1FBQXhCLDJDQUF3QjtRQWNwQyxlQUEyQjtRQUEzQiw4Q0FBMkI7UUFHQSxlQUFxRDtRQUFyRCwyS0FBcUQ7UUFFbEQsZUFBaUQ7UUFBakQsdUtBQWlEO1FBT2hGLGVBQXdDO1FBQXhDLDRDQUF3QyxpQkFBQTtRQVlsRCxlQUNKO1FBREksMktBQ0o7O2tERDFEQyxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUM1Qzs7c0JBZVEsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItYWRkLWxvZ2ljJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRkLWxvZ2ljLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZGQtbG9naWMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkTG9naWNDb21wb25lbnQge1xuICAgIHJlc291cmNlU2VydmljZTtcbiAgICBpc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgIGxvZ2ljRm9ybTogRm9ybUdyb3VwO1xuICAgIG9ka0ZpbGVBbHJlYWR5RXhpc3QgPSBmYWxzZTtcbiAgICBmaWxlRXJyb3JTdGF0dXM7XG4gICAgYnJlYWtwb2ludDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWRkTG9naWNDb21wb25lbnQ+LFxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcbiAgICAgICAgICAgIHRoaXMucGF0Y2hWYWx1ZShkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDAwKSA/IDEgOiAzO1xuICAgICAgICB0aGlzLmxvZ2ljRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgaWQ6IFtudWxsXSxcbiAgICAgICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnXSxcbiAgICAgICAgICAgIGZvcm1JZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXRjaFZhbHVlKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5sb2dpY0Zvcm0ucGF0Y2hWYWx1ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZm9ybUlkOiBpdGVtLmZvcm1JRFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cblxuICAgIG9uTG9naWNBZGQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMubG9naWNGb3JtLnZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkZpbGVVcGxvYWQoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgZm9ybTogZmlsZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvZ2ljRm9ybS5wYXRjaFZhbHVlKHtmb3JtSWQ6ICcnfSk7XG4gICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSB0cnVlO1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UudXBsb2FkRmlsZShvYmopLnN1YnNjcmliZSgoZmlsZUluZm86IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlSW5mby5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWNGb3JtLnBhdGNoVmFsdWUoe2Zvcm1JZDogZmlsZUluZm8uZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vZGtGaWxlQWxyZWFkeUV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub2RrRmlsZUFscmVhZHlFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlRXJyb3JTdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3VsdCAmJiBlcnJvci5yZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihlcnJvci5yZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtYW51YWxEb3dubG9hZCgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5nbG9iYWxTZXJ2aWNlLmdldEJsb2JVcmwoKS5yZXBsYWNlKCcvcGxheWVyJywgJycpICsgJ1VDSSUyMF8lMjBPREslMjBJbnN0cnVjdGlvbiUyME1hbnVhbC5wZGYnLCAnX2JsYW5rJyk7XG4gICAgfVxuXG4gICAgc2FtcGxlT0RLRG93bmxvYWQoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZ2xvYmFsU2VydmljZS5nZXRCbG9iVXJsKCkucmVwbGFjZSgnL3BsYXllcicsICcnKSArICdTYW1wbGVfT0RLLnhsc3gnLCAnX2JsYW5rJyk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50ID0gKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoIDw9IDEwMDApID8gMSA6IDM7XG4gICAgfVxuXG59XG4iLCI8c2VjdGlvbiBzdHlsZT1cImJhY2tncm91bmQ6IHdoaXRlO3BhZGRpbmc6IDIwcHhcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWNpLWxvZ2ljLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDEgbWF0LWRpYWxvZy10aXRsZT5cbiAgICAgICAgICAgIHt7bG9naWNGb3JtLmdldCgnaWQnKS52YWx1ZSA/IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXBkYXRlQ29udmVyc2F0aW9uTG9naWMgOiByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFkZENvbnZlcnNhdGlvbkxvZ2ljfX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPG1hdC1kaWFsb2ctY29udGVudD5cbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibG9naWNGb3JtXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwidy0xMDBcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD48aSBjbGFzcz1cImFzdGVyaXNrIGljb24gYXN0ZXJpc2stY29sb3JcIj48L2k+PC9zdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVudGVyTmFtZX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwidy0xMDAgXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVzY3JpcHRpb259fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcm93cz1cIjNcIiBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZW50ZXJEZXNjcmlwdGlvbn19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLWxpc3QgW2NvbHNdPVwiYnJlYWtwb2ludFwiIHJvd0hlaWdodD1cIjNyZW1cIiAod2luZG93OnJlc2l6ZSk9XCJvblJlc2l6ZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiIGNsYXNzPVwiZm9udC0xLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51cGxvYWRPZGtGb3JtfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD48aSBjbGFzcz1cImFzdGVyaXNrIGljb24gYXN0ZXJpc2stY29sb3JcIj48L2k+PC9zdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSAqbmdJZj1cImJyZWFrcG9pbnQgPT09IDNcIiBjb2xzcGFuPVwiMlwiIGNsYXNzPVwiZm9udC0xLTIgY29tcHV0ZXIgb25seVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXgtNSBzYW1wbGUtZG93bmxvYWRcIiAoY2xpY2spPVwibWFudWFsRG93bmxvYWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdFRvb2x0aXA9XCJ7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uaW5zdHJ1Y3Rpb25NYW51YWx9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lmluc3RydWN0aW9uTWFudWFsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1sLTEgc2FtcGxlLWRvd25sb2FkXCIgKGNsaWNrKT1cInNhbXBsZU9ES0Rvd25sb2FkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRUb29sdGlwPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnNhbXBsZU9ka0Zvcm19fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnNhbXBsZU9ka0Zvcm19fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiAoY2hhbmdlKT1cIm9uRmlsZVVwbG9hZCgkZXZlbnQpXCIgYWNjZXB0PVwiLnhtbFwiIGNsYXNzPVwidWNpLWZpbGUtaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwib2RrRmlsZUFscmVhZHlFeGlzdFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57e2ZpbGVFcnJvclN0YXR1c319PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZSBvbmx5IGZpZWxkIHRleHQtcmlnaHQgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTUgc2FtcGxlLWRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJtYW51YWxEb3dubG9hZCgpXCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lmluc3RydWN0aW9uTWFudWFsfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInNhbXBsZS1kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2FtcGxlT0RLRG93bmxvYWQoKVwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5zYW1wbGVPZGtGb3JtfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWF0LWRpYWxvZy1jb250ZW50PlxuICAgICAgICA8bWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNNb2RhbExvYWRlclNob3c7IGVsc2UgbW9kYWxCdG5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b24gcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBhY3RpdmUgdGlueSBpbmxpbmUgbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbW9kYWxCdG4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgKGNsaWNrKT1cIm9uTG9naWNBZGQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9naWNGb3JtLmludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3tsb2dpY0Zvcm0uZ2V0KCdpZCcpLnZhbHVlID8gcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy51cGRhdGUgOiByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmFkZH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIj5cbiAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY2FuY2VsfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L21hdC1kaWFsb2ctYWN0aW9ucz5cbiAgICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiJdfQ==
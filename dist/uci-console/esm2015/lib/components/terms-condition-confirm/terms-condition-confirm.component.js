import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../../services/global.service";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/material/grid-list";
import * as i4 from "@angular/material/list";
import * as i5 from "@angular/material/divider";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/checkbox";
import * as i9 from "@angular/forms";
function TermsConditionConfirmComponent_mat_list_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const list_r6 = ctx.$implicit; return list_r6.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.updateAllChecked(); });
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", "primary")("name", "appropriateness" + i_r7)("ngModel", list_r6.checks);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", list_r6.text, " ");
} }
function TermsConditionConfirmComponent_mat_list_item_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const list_r11 = ctx.$implicit; return list_r11.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.updateAllChecked(); });
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", "primary")("name", "contentDetails" + i_r12)("ngModel", list_r11.checks);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", list_r11.text, " ");
} }
function TermsConditionConfirmComponent_mat_list_item_28_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const list_r16 = ctx.$implicit; return list_r16.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.updateAllChecked(); });
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", "primary")("name", "usability" + i_r17)("ngModel", list_r16.checks);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", list_r16.text, " ");
} }
function TermsConditionConfirmComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 12);
    i0.ɵɵelement(2, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function TermsConditionConfirmComponent_ng_template_37_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function TermsConditionConfirmComponent_ng_template_37_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onSubmit(true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r21.allChecked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.resourceService.frmelmnts == null ? null : ctx_r21.resourceService.frmelmnts.btn == null ? null : ctx_r21.resourceService.frmelmnts.btn.submit, " ");
} }
function TermsConditionConfirmComponent_ng_template_37_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function TermsConditionConfirmComponent_ng_template_37_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onSubmit(false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r22.allChecked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.resourceService.frmelmnts == null ? null : ctx_r22.resourceService.frmelmnts.btn == null ? null : ctx_r22.resourceService.frmelmnts.btn.save, " ");
} }
function TermsConditionConfirmComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TermsConditionConfirmComponent_ng_template_37_button_0_Template, 2, 2, "button", 14);
    i0.ɵɵtemplate(1, TermsConditionConfirmComponent_ng_template_37_button_1_Template, 2, 2, "button", 14);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isSubmit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.isSubmit);
} }
export class TermsConditionConfirmComponent {
    constructor(globalService, dialogRef, data) {
        this.globalService = globalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isLoaderShow = false;
        this.isSubmit = false;
        this.Appropriateness = [];
        this.contentDetails = [];
        this.usability = [];
        if (data && data.isSubmit) {
            this.isSubmit = data.isSubmit;
        }
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.resourceService = this.globalService.getResourceService();
        this.Appropriateness = [
            {
                text: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.appropriatenessHate,
                checks: false
            },
            {
                text: (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.appropriatenessAbusive,
                checks: false
            },
            {
                text: (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.lbl) === null || _f === void 0 ? void 0 : _f.appropriatenessDiscrimination,
                checks: false
            },
            {
                text: (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.lbl) === null || _h === void 0 ? void 0 : _h.appropriatenessChild,
                checks: false
            }
        ];
        this.contentDetails = [
            {
                text: (_k = (_j = this.resourceService.frmelmnts) === null || _j === void 0 ? void 0 : _j.lbl) === null || _k === void 0 ? void 0 : _k.contentDetailDescription,
                checks: false
            },
            {
                text: (_m = (_l = this.resourceService.frmelmnts) === null || _l === void 0 ? void 0 : _l.lbl) === null || _m === void 0 ? void 0 : _m.contentDetailCorrect,
                checks: false
            },
            {
                text: (_p = (_o = this.resourceService.frmelmnts) === null || _o === void 0 ? void 0 : _o.lbl) === null || _p === void 0 ? void 0 : _p.contentDetailAppropriate,
                checks: false
            },
            {
                text: (_r = (_q = this.resourceService.frmelmnts) === null || _q === void 0 ? void 0 : _q.lbl) === null || _r === void 0 ? void 0 : _r.contentDetailRelevant,
                checks: false
            }
        ];
        this.usability = [
            {
                text: (_t = (_s = this.resourceService.frmelmnts) === null || _s === void 0 ? void 0 : _s.lbl) === null || _t === void 0 ? void 0 : _t.usabilityContent,
                checks: false
            },
            {
                text: (_v = (_u = this.resourceService.frmelmnts) === null || _u === void 0 ? void 0 : _u.lbl) === null || _v === void 0 ? void 0 : _v.usabilityClear,
                checks: false
            },
            {
                text: (_x = (_w = this.resourceService.frmelmnts) === null || _w === void 0 ? void 0 : _w.lbl) === null || _x === void 0 ? void 0 : _x.usabilityAudio,
                checks: false
            },
            {
                text: (_z = (_y = this.resourceService.frmelmnts) === null || _y === void 0 ? void 0 : _y.lbl) === null || _z === void 0 ? void 0 : _z.usabilityNoMistakes,
                checks: false
            },
            {
                text: (_1 = (_0 = this.resourceService.frmelmnts) === null || _0 === void 0 ? void 0 : _0.lbl) === null || _1 === void 0 ? void 0 : _1.usabilitySimple,
                checks: false
            }
        ];
    }
    onCancel() {
        this.dialogRef.close();
    }
    updateAllChecked() {
        let allChecked = true;
        for (const val of this.Appropriateness) {
            if (!val.checks) {
                allChecked = false;
                break;
            }
        }
        if (allChecked) {
            for (const val of this.contentDetails) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        if (allChecked) {
            for (const val of this.usability) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        this.allChecked = allChecked;
    }
    allCheck(isAllCheck = false) {
        this.Appropriateness.forEach(val => {
            val.checks = isAllCheck;
        });
        this.contentDetails.forEach(val => {
            val.checks = isAllCheck;
        });
        this.usability.forEach(val => {
            val.checks = isAllCheck;
        });
        this.allChecked = true;
        if (!isAllCheck) {
            this.dialogRef.close();
        }
    }
    onSubmit(event) {
        this.dialogRef.close(event);
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    }
}
TermsConditionConfirmComponent.ɵfac = function TermsConditionConfirmComponent_Factory(t) { return new (t || TermsConditionConfirmComponent)(i0.ɵɵdirectiveInject(i1.GlobalService), i0.ɵɵdirectiveInject(i2.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
TermsConditionConfirmComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TermsConditionConfirmComponent, selectors: [["lib-terms-condition-confirm"]], decls: 39, vars: 12, consts: [[1, "uci-modal"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "mb-40"], [3, "cols", "resize"], [4, "ngFor", "ngForOf"], [1, "confirm-all-action"], ["mat-raised-button", "", 1, "primary", 3, "click"], ["mat-raised-button", "", 1, "action-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["submitBtn", ""], [3, "color", "name", "ngModel", "ngModelChange"], [1, "confirm-checkbox-label"], ["mat-raised-button", "", 1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], ["mat-raised-button", "", "class", "action-button", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", 1, "action-button", 3, "disabled", "click"]], template: function TermsConditionConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "h1", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "mat-grid-list", 3);
        i0.ɵɵlistener("resize", function TermsConditionConfirmComponent_Template_mat_grid_list_resize_4_listener($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        i0.ɵɵelementStart(5, "mat-grid-tile");
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "mat-list");
        i0.ɵɵelementStart(8, "mat-list-item");
        i0.ɵɵelementStart(9, "h4");
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "mat-divider");
        i0.ɵɵtemplate(12, TermsConditionConfirmComponent_mat_list_item_12_Template, 4, 4, "mat-list-item", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-grid-tile");
        i0.ɵɵelementStart(14, "div");
        i0.ɵɵelementStart(15, "mat-list");
        i0.ɵɵelementStart(16, "mat-list-item");
        i0.ɵɵelementStart(17, "h4");
        i0.ɵɵtext(18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(19, "mat-divider");
        i0.ɵɵtemplate(20, TermsConditionConfirmComponent_mat_list_item_20_Template, 4, 4, "mat-list-item", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "mat-grid-tile");
        i0.ɵɵelementStart(22, "div");
        i0.ɵɵelementStart(23, "mat-list");
        i0.ɵɵelementStart(24, "mat-list-item");
        i0.ɵɵelementStart(25, "h4");
        i0.ɵɵtext(26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(27, "mat-divider");
        i0.ɵɵtemplate(28, TermsConditionConfirmComponent_mat_list_item_28_Template, 4, 4, "mat-list-item", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "mat-dialog-actions", 5);
        i0.ɵɵelementStart(30, "div");
        i0.ɵɵelementStart(31, "button", 6);
        i0.ɵɵlistener("click", function TermsConditionConfirmComponent_Template_button_click_31_listener() { return ctx.allCheck(true); });
        i0.ɵɵtext(32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div");
        i0.ɵɵelementStart(34, "button", 7);
        i0.ɵɵlistener("click", function TermsConditionConfirmComponent_Template_button_click_34_listener() { return ctx.allCheck(false); });
        i0.ɵɵtext(35);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(36, TermsConditionConfirmComponent_ng_container_36_Template, 3, 0, "ng-container", 8);
        i0.ɵɵtemplate(37, TermsConditionConfirmComponent_ng_template_37_Template, 2, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r4 = i0.ɵɵreference(38);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.confirmWarning, ": ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cols", ctx.breakpoint);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.appropriateness);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.Appropriateness);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.contentDetails);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.contentDetails);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.usability);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.usability);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.confirmAll, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.cancel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isLoaderShow)("ngIfElse", _r4);
    } }, directives: [i2.MatDialogTitle, i2.MatDialogContent, i3.MatGridList, i3.MatGridTile, i4.MatList, i4.MatListItem, i5.MatDivider, i6.NgForOf, i2.MatDialogActions, i7.MatButton, i6.NgIf, i8.MatCheckbox, i9.NgControlStatus, i9.NgModel], styles: [".tabs-content-wrapper[_ngcontent-%COMP%]{padding:0 24px!important}.confirm-all-action[_ngcontent-%COMP%]{justify-content:space-between}.uci-modal[_ngcontent-%COMP%]{background:#fff;padding:20px;max-height:90vh;overflow:auto}.uci-modal[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{max-height:initial!important}.uci-modal[_ngcontent-%COMP%]     .mat-figure{align-items:initial!important}.uci-modal[_ngcontent-%COMP%]   .confirm-checkbox-label[_ngcontent-%COMP%]{white-space:break-spaces}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TermsConditionConfirmComponent, [{
        type: Component,
        args: [{
                selector: 'lib-terms-condition-confirm',
                templateUrl: './terms-condition-confirm.component.html',
                styleUrls: ['./terms-condition-confirm.component.scss']
            }]
    }], function () { return [{ type: i1.GlobalService }, { type: i2.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBQyxlQUFlLEVBQWUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ2EvQyxxQ0FDSTtJQUFBLHdDQUVJO0lBRFUseU9BQXlCLDhOQUFBO0lBQ25DLCtCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFNO0lBQ1YsaUJBQWU7SUFDbkIsaUJBQWdCOzs7O0lBTkUsZUFBbUI7SUFBbkIsaUNBQW1CLGtDQUFBLDJCQUFBO0lBR3pCLGVBQ0o7SUFESSw2Q0FDSjs7OztJQWVSLHFDQUNJO0lBQUEsd0NBRUk7SUFGNEQsNE9BQXlCLCtOQUFBO0lBRXJGLCtCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFNO0lBQ1YsaUJBQWU7SUFDbkIsaUJBQWdCOzs7O0lBTkUsZUFBbUI7SUFBbkIsaUNBQW1CLGtDQUFBLDRCQUFBO0lBR3pCLGVBQ0o7SUFESSw4Q0FDSjs7OztJQWVSLHFDQUNJO0lBQUEsd0NBRUk7SUFGdUQsNE9BQXlCLCtOQUFBO0lBRWhGLCtCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFNO0lBQ1YsaUJBQWU7SUFDbkIsaUJBQWdCOzs7O0lBTkUsZUFBbUI7SUFBbkIsaUNBQW1CLDZCQUFBLDRCQUFBO0lBR3pCLGVBQ0o7SUFESSw4Q0FDSjs7O0lBcUJwQiw2QkFDSTtJ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QUFsRCw0Q0FBa0Q7UUFnQnpELGVBQTZDO1FBQTdDLG1LQUE2QztRQUl0QyxlQUE2QztRQUE3Qyx1Q0FBNkM7UUFpQnBFLGVBQ0o7UUFESSwrS0FDSjtRQU1JLGVBQ0o7UUFESSwyS0FDSjtRQUNjLGVBQW9DO1FBQXBDLHVDQUFvQyxpQkFBQTs7a0REeEVqRCw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO2FBQzFEOztzQkFjUSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi10ZXJtcy1jb25kaXRpb24tY29uZmlybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90ZXJtcy1jb25kaXRpb24tY29uZmlybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlcm1zQ29uZGl0aW9uQ29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuICAgIGFsbENoZWNrZWQ6IGJvb2xlYW47XG4gICAgaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgaXNTdWJtaXQgPSBmYWxzZTtcbiAgICBBcHByb3ByaWF0ZW5lc3MgPSBbXTtcbiAgICBjb250ZW50RGV0YWlscyA9IFtdO1xuICAgIHVzYWJpbGl0eSA9IFtdO1xuICAgIGJyZWFrcG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pc1N1Ym1pdCkge1xuICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGRhdGEuaXNTdWJtaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50ID0gKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMDApID8gMSA6IDM7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLkFwcHJvcHJpYXRlbmVzcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYXBwcm9wcmlhdGVuZXNzSGF0ZSxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hcHByb3ByaWF0ZW5lc3NBYnVzaXZlLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFwcHJvcHJpYXRlbmVzc0Rpc2NyaW1pbmF0aW9uLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFwcHJvcHJpYXRlbmVzc0NoaWxkLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb250ZW50RGV0YWlscyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udGVudERldGFpbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnRlbnREZXRhaWxDb3JyZWN0LFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnRlbnREZXRhaWxBcHByb3ByaWF0ZSxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb250ZW50RGV0YWlsUmVsZXZhbnQsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnVzYWJpbGl0eSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXNhYmlsaXR5Q29udGVudCxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlDbGVhcixcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlBdWRpbyxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlOb01pc3Rha2VzLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVzYWJpbGl0eVNpbXBsZSxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWxsQ2hlY2tlZCgpIHtcbiAgICAgICAgbGV0IGFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLkFwcHJvcHJpYXRlbmVzcykge1xuICAgICAgICAgICAgaWYgKCF2YWwuY2hlY2tzKSB7XG4gICAgICAgICAgICAgICAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxDaGVja2VkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLmNvbnRlbnREZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWwuY2hlY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxDaGVja2VkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLnVzYWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIGlmICghdmFsLmNoZWNrcykge1xuICAgICAgICAgICAgICAgICAgICBhbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBhbGxDaGVja2VkO1xuICAgIH1cblxuICAgIGFsbENoZWNrKGlzQWxsQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLkFwcHJvcHJpYXRlbmVzcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICB2YWwuY2hlY2tzID0gaXNBbGxDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGVudERldGFpbHMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgdmFsLmNoZWNrcyA9IGlzQWxsQ2hlY2s7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVzYWJpbGl0eS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICB2YWwuY2hlY2tzID0gaXNBbGxDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICghaXNBbGxDaGVjaykge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPD0gMTAwMCkgPyAxIDogMztcbiAgICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cInVjaS1tb2RhbFwiPlxuICAgIDxoMSBtYXQtZGlhbG9nLXRpdGxlPlxuICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29uZmlybVdhcm5pbmd9fTpcbiAgICA8L2gxPlxuXG4gICAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJtYi00MFwiPlxuICAgICAgICA8bWF0LWdyaWQtbGlzdCBbY29sc109XCJicmVha3BvaW50XCIgKHdpbmRvdzpyZXNpemUpPVwib25SZXNpemUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hcHByb3ByaWF0ZW5lc3N9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGxpc3Qgb2YgQXBwcm9wcmlhdGVuZXNzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBbY29sb3JdPVwiJ3ByaW1hcnknXCIgW25hbWVdPVwiJ2FwcHJvcHJpYXRlbmVzcycgKyBpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibGlzdC5jaGVja3NcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVBbGxDaGVja2VkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tY2hlY2tib3gtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGlzdC50ZXh0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG5cbiAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udGVudERldGFpbHN9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGxpc3Qgb2YgY29udGVudERldGFpbHM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IFtjb2xvcl09XCIncHJpbWFyeSdcIiBbbmFtZV09XCInY29udGVudERldGFpbHMnICsgaVwiIFsobmdNb2RlbCldPVwibGlzdC5jaGVja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQWxsQ2hlY2tlZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWNoZWNrYm94LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xpc3QudGV4dH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1saXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuXG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVzYWJpbGl0eX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbGlzdCBvZiB1c2FiaWxpdHk7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IFtjb2xvcl09XCIncHJpbWFyeSdcIiBbbmFtZV09XCIndXNhYmlsaXR5JyArIGlcIiBbKG5nTW9kZWwpXT1cImxpc3QuY2hlY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUFsbENoZWNrZWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1jaGVja2JveC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsaXN0LnRleHR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGlzdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgPC9tYXQtZ3JpZC1saXN0PlxuICAgIDwvZGl2PlxuXG4gICAgPG1hdC1kaWFsb2ctYWN0aW9ucyBjbGFzcz1cImNvbmZpcm0tYWxsLWFjdGlvblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInByaW1hcnlcIiAoY2xpY2spPVwiYWxsQ2hlY2sodHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY29uZmlybUFsbH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFsbENoZWNrKGZhbHNlKTtcIj5cbiAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY2FuY2VsfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTG9hZGVyU2hvdzsgZWxzZSBzdWJtaXRCdG5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvbiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGFjdGl2ZSB0aW55IGlubGluZSBsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzdWJtaXRCdG4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAqbmdJZj1cImlzU3VibWl0XCIgY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhdGhpcy5hbGxDaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdCh0cnVlKTtcIj5cbiAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LnN1Ym1pdH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAqbmdJZj1cIiFpc1N1Ym1pdFwiIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXRoaXMuYWxsQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TdWJtaXQoZmFsc2UpO1wiPlxuICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uc2F2ZX19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21hdC1kaWFsb2ctYWN0aW9ucz5cbjwvc2VjdGlvbj5cbiJdfQ==
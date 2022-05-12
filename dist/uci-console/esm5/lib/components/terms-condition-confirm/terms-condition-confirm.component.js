import { __values } from "tslib";
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
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); var list_r6 = ctx.$implicit; return list_r6.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r9); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.updateAllChecked(); });
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var list_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", "primary")("name", "appropriateness" + i_r7)("ngModel", list_r6.checks);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", list_r6.text, " ");
} }
function TermsConditionConfirmComponent_mat_list_item_20_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); var list_r11 = ctx.$implicit; return list_r11.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r14); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.updateAllChecked(); });
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var list_r11 = ctx.$implicit;
    var i_r12 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", "primary")("name", "contentDetails" + i_r12)("ngModel", list_r11.checks);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", list_r11.text, " ");
} }
function TermsConditionConfirmComponent_mat_list_item_28_Template(rf, ctx) { if (rf & 1) {
    var _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-list-item");
    i0.ɵɵelementStart(1, "mat-checkbox", 10);
    i0.ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); var list_r16 = ctx.$implicit; return list_r16.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r19); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.updateAllChecked(); });
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var list_r16 = ctx.$implicit;
    var i_r17 = ctx.index;
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
    var _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function TermsConditionConfirmComponent_ng_template_37_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onSubmit(true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r21.allChecked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.resourceService.frmelmnts == null ? null : ctx_r21.resourceService.frmelmnts.btn == null ? null : ctx_r21.resourceService.frmelmnts.btn.submit, " ");
} }
function TermsConditionConfirmComponent_ng_template_37_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function TermsConditionConfirmComponent_ng_template_37_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); var ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onSubmit(false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r22.allChecked);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.resourceService.frmelmnts == null ? null : ctx_r22.resourceService.frmelmnts.btn == null ? null : ctx_r22.resourceService.frmelmnts.btn.save, " ");
} }
function TermsConditionConfirmComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TermsConditionConfirmComponent_ng_template_37_button_0_Template, 2, 2, "button", 14);
    i0.ɵɵtemplate(1, TermsConditionConfirmComponent_ng_template_37_button_1_Template, 2, 2, "button", 14);
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.isSubmit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.isSubmit);
} }
var TermsConditionConfirmComponent = /** @class */ (function () {
    function TermsConditionConfirmComponent(globalService, dialogRef, data) {
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
    TermsConditionConfirmComponent.prototype.ngOnInit = function () {
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
    };
    TermsConditionConfirmComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    TermsConditionConfirmComponent.prototype.updateAllChecked = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var allChecked = true;
        try {
            for (var _d = __values(this.Appropriateness), _e = _d.next(); !_e.done; _e = _d.next()) {
                var val = _e.value;
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (allChecked) {
            try {
                for (var _f = __values(this.contentDetails), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var val = _g.value;
                    if (!val.checks) {
                        allChecked = false;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (allChecked) {
            try {
                for (var _h = __values(this.usability), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var val = _j.value;
                    if (!val.checks) {
                        allChecked = false;
                        break;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        this.allChecked = allChecked;
    };
    TermsConditionConfirmComponent.prototype.allCheck = function (isAllCheck) {
        if (isAllCheck === void 0) { isAllCheck = false; }
        this.Appropriateness.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.contentDetails.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.usability.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.allChecked = true;
        if (!isAllCheck) {
            this.dialogRef.close();
        }
    };
    TermsConditionConfirmComponent.prototype.onSubmit = function (event) {
        this.dialogRef.close(event);
    };
    TermsConditionConfirmComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    };
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
            var _r4 = i0.ɵɵreference(38);
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
    return TermsConditionConfirmComponent;
}());
export { TermsConditionConfirmComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUMsZUFBZSxFQUFlLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNhL0MscUNBQ0k7SUFBQSx3Q0FFSTtJQURVLHVPQUF5Qiw0TkFBQTtJQUNuQywrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTtJQUNWLGlCQUFlO0lBQ25CLGlCQUFnQjs7OztJQU5FLGVBQW1CO0lBQW5CLGlDQUFtQixrQ0FBQSwyQkFBQTtJQUd6QixlQUNKO0lBREksNkNBQ0o7Ozs7SUFlUixxQ0FDSTtJQUFBLHdDQUVJO0lBRjRELDBPQUF5Qiw2TkFBQTtJQUVyRiwrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTtJQUNWLGlCQUFlO0lBQ25CLGlCQUFnQjs7OztJQU5FLGVBQW1CO0lBQW5CLGlDQUFtQixrQ0FBQSw0QkFBQTtJQUd6QixlQUNKO0lBREksOENBQ0o7Ozs7SUFlUixxQ0FDSTtJQUFBLHdDQUVJO0lBRnVELDBPQUF5Qiw2TkFBQTtJQUVoRiwrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTtJQUNWLGlCQUFlO0lBQ25CLGlCQUFnQjs7OztJQU5FLGVBQW1CO0lBQW5CLGlDQUFtQiw2QkFBQSw0QkFBQTtJQUd6QixlQUNKO0lBREksOENBQ0o7OztJQXFCcEIsNkJBQ0k7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Q1YsaUJBQXFCO1lBQ3pCLGlCQUFVOzs7WUFsR0YsZUFDSjtZQURJLG9MQUNKO1lBR21CLGVBQW1CO1lBQW5CLHFDQUFtQjtZQUtWLGVBQW1EO1lBQW5ELHlLQUFtRDtZQUk1QyxlQUFtRDtZQUFuRCw2Q0FBbUQ7WUFnQjFELGVBQWtEO1lBQWxELHdLQUFrRDtZQUkzQyxlQUFrRDtZQUFsRCw0Q0FBa0Q7WUFnQnpELGVBQTZDO1lBQTdDLG1LQUE2QztZQUl0QyxlQUE2QztZQUE3Qyx1Q0FBNkM7WUFpQnBFLGVBQ0o7WUFESSwrS0FDSjtZQU1JLGVBQ0o7WUFESSwyS0FDSjtZQUNjLGVBQW9DO1lBQXBDLHVDQUFvQyxpQkFBQTs7eUNEakY5RDtDQWlKQyxBQTdJRCxJQTZJQztTQXhJWSw4QkFBOEI7a0RBQTlCLDhCQUE4QjtjQUwxQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLDBDQUEwQztnQkFDdkQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7YUFDMUQ7O3NCQWNRLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXRlcm1zLWNvbmRpdGlvbi1jb25maXJtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG4gICAgYWxsQ2hlY2tlZDogYm9vbGVhbjtcbiAgICBpc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICBpc1N1Ym1pdCA9IGZhbHNlO1xuICAgIEFwcHJvcHJpYXRlbmVzcyA9IFtdO1xuICAgIGNvbnRlbnREZXRhaWxzID0gW107XG4gICAgdXNhYmlsaXR5ID0gW107XG4gICAgYnJlYWtwb2ludDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZXJtc0NvbmRpdGlvbkNvbmZpcm1Db21wb25lbnQ+LFxuICAgICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmlzU3VibWl0KSB7XG4gICAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZGF0YS5pc1N1Ym1pdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSAod2luZG93LmlubmVyV2lkdGggPD0gMTAwMCkgPyAxIDogMztcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuQXBwcm9wcmlhdGVuZXNzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hcHByb3ByaWF0ZW5lc3NIYXRlLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFwcHJvcHJpYXRlbmVzc0FidXNpdmUsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYXBwcm9wcmlhdGVuZXNzRGlzY3JpbWluYXRpb24sXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYXBwcm9wcmlhdGVuZXNzQ2hpbGQsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmNvbnRlbnREZXRhaWxzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb250ZW50RGV0YWlsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udGVudERldGFpbENvcnJlY3QsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udGVudERldGFpbEFwcHJvcHJpYXRlLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnRlbnREZXRhaWxSZWxldmFudCxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHRoaXMudXNhYmlsaXR5ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlDb250ZW50LFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVzYWJpbGl0eUNsZWFyLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVzYWJpbGl0eUF1ZGlvLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVzYWJpbGl0eU5vTWlzdGFrZXMsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXNhYmlsaXR5U2ltcGxlLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBbGxDaGVja2VkKCkge1xuICAgICAgICBsZXQgYWxsQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuQXBwcm9wcmlhdGVuZXNzKSB7XG4gICAgICAgICAgICBpZiAoIXZhbC5jaGVja3MpIHtcbiAgICAgICAgICAgICAgICBhbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFsbENoZWNrZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuY29udGVudERldGFpbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbC5jaGVja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFsbENoZWNrZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMudXNhYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWwuY2hlY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGFsbENoZWNrZWQ7XG4gICAgfVxuXG4gICAgYWxsQ2hlY2soaXNBbGxDaGVjazogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuQXBwcm9wcmlhdGVuZXNzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIHZhbC5jaGVja3MgPSBpc0FsbENoZWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250ZW50RGV0YWlscy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICB2YWwuY2hlY2tzID0gaXNBbGxDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXNhYmlsaXR5LmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIHZhbC5jaGVja3MgPSBpc0FsbENoZWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc0FsbENoZWNrKSB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA8PSAxMDAwKSA/IDEgOiAzO1xuICAgIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwidWNpLW1vZGFsXCI+XG4gICAgPGgxIG1hdC1kaWFsb2ctdGl0bGU+XG4gICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb25maXJtV2FybmluZ319OlxuICAgIDwvaDE+XG5cbiAgICA8ZGl2IG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cIm1iLTQwXCI+XG4gICAgICAgIDxtYXQtZ3JpZC1saXN0IFtjb2xzXT1cImJyZWFrcG9pbnRcIiAod2luZG93OnJlc2l6ZSk9XCJvblJlc2l6ZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFwcHJvcHJpYXRlbmVzc319PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbGlzdCBvZiBBcHByb3ByaWF0ZW5lc3M7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IFtjb2xvcl09XCIncHJpbWFyeSdcIiBbbmFtZV09XCInYXBwcm9wcmlhdGVuZXNzJyArIGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJsaXN0LmNoZWNrc1wiIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUFsbENoZWNrZWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1jaGVja2JveC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsaXN0LnRleHR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGlzdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cblxuICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb250ZW50RGV0YWlsc319PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbGlzdCBvZiBjb250ZW50RGV0YWlsczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggW2NvbG9yXT1cIidwcmltYXJ5J1wiIFtuYW1lXT1cIidjb250ZW50RGV0YWlscycgKyBpXCIgWyhuZ01vZGVsKV09XCJsaXN0LmNoZWNrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVBbGxDaGVja2VkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tY2hlY2tib3gtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGlzdC50ZXh0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1saXN0LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWxpc3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG5cbiAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXNhYmlsaXR5fX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBsaXN0IG9mIHVzYWJpbGl0eTsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggW2NvbG9yXT1cIidwcmltYXJ5J1wiIFtuYW1lXT1cIid1c2FiaWxpdHknICsgaVwiIFsobmdNb2RlbCldPVwibGlzdC5jaGVja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlQWxsQ2hlY2tlZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWNoZWNrYm94LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xpc3QudGV4dH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1saXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICA8L21hdC1ncmlkLWxpc3Q+XG4gICAgPC9kaXY+XG5cbiAgICA8bWF0LWRpYWxvZy1hY3Rpb25zIGNsYXNzPVwiY29uZmlybS1hbGwtYWN0aW9uXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwicHJpbWFyeVwiIChjbGljayk9XCJhbGxDaGVjayh0cnVlKVwiPlxuICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5jb25maXJtQWxsfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWxsQ2hlY2soZmFsc2UpO1wiPlxuICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5jYW5jZWx9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNMb2FkZXJTaG93OyBlbHNlIHN1Ym1pdEJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgYWN0aXZlIHRpbnkgaW5saW5lIGxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3N1Ym1pdEJ0bj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uICpuZ0lmPVwiaXNTdWJtaXRcIiBjbGFzcz1cImFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiF0aGlzLmFsbENoZWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0KHRydWUpO1wiPlxuICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uc3VibWl0fX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uICpuZ0lmPVwiIWlzU3VibWl0XCIgY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhdGhpcy5hbGxDaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblN1Ym1pdChmYWxzZSk7XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5zYXZlfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuPC9zZWN0aW9uPlxuIl19
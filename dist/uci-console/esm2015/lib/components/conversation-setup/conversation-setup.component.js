import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/uci.service";
import * as i3 from "../../services/global.service";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/material/grid-list";
import * as i6 from "ng2-semantic-ui-v9";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/common";
import * as i10 from "@angular/material/datepicker";
function ConversationSetupComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.startMessageError, " ");
} }
function ConversationSetupComponent_ng_container_52_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵelementStart(3, "i", 24);
    i0.ɵɵlistener("click", function ConversationSetupComponent_ng_container_52_div_2_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r8); const i_r6 = ctx.index; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onUserSegmentDelete(i_r6); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "div", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const userSegment_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", userSegment_r5.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.lbl == null ? null : ctx_r4.resourceService.frmelmnts.lbl.userCount, " ", userSegment_r5.count, "");
} }
function ConversationSetupComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵtemplate(2, ConversationSetupComponent_ng_container_52_div_2_Template, 7, 3, "div", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.userSegments);
} }
export class ConversationSetupComponent {
    constructor(fb, uciService, globalService, dialog) {
        this.fb = fb;
        this.uciService = uciService;
        this.globalService = globalService;
        this.dialog = dialog;
        this.starringMessageChange = new EventEmitter();
        this.userSegmentDelete = new EventEmitter();
    }
    ngOnInit() {
        this.matDateBreakpoint = (window.innerWidth <= 1000) ? 1 : 2;
        this.resourceService = this.globalService.getResourceService();
        if (this.conversationForm) {
            // start date and end date value change
            this.conversationForm.get('startDate').valueChanges.subscribe(val => {
                if ((this.conversationForm.value.endDate && moment(this.conversationForm.value.endDate).isBefore(moment(val))) || !val) {
                    this.conversationForm.get('endDate').patchValue(null);
                }
                const tempDate = moment(val).format('YYYY-MM-DD');
                this.endMinDate = new Date(tempDate);
            });
            this.conversationForm.get('startingMessage').valueChanges
                .pipe(debounceTime(1000))
                .subscribe(value => {
                this.onStarringMessageChange();
            });
        }
    }
    onStarringMessageChange() {
        this.starringMessageChange.emit({});
    }
    onUserSegmentDelete(index) {
        this.userSegmentDelete.emit(index);
    }
}
ConversationSetupComponent.ɵfac = function ConversationSetupComponent_Factory(t) { return new (t || ConversationSetupComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.UciService), i0.ɵɵdirectiveInject(i3.GlobalService), i0.ɵɵdirectiveInject(i4.MatDialog)); };
ConversationSetupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ConversationSetupComponent, selectors: [["lib-conversation-setup"]], inputs: { conversationForm: "conversationForm", isStartingMessageExist: "isStartingMessageExist", startMinDate: "startMinDate", userSegments: "userSegments" }, outputs: { starringMessageChange: "starringMessageChange", userSegmentDelete: "userSegmentDelete" }, decls: 53, vars: 21, consts: [[1, "uci-container"], ["cols", "1", "rowHeight", "4rem"], ["colspan", "1", 1, "font-1-2", "font-weight-bold"], [1, "w-100", "text-left"], [3, "formGroup"], ["appearance", "outline", 1, "w-100"], [1, "asterisk", "icon", "asterisk-color"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 3, "placeholder"], ["matInput", "", "rows", "5", "name", "description", "formControlName", "description", 3, "placeholder"], ["matInput", "", "type", "text", "name", "name", "formControlName", "purpose", 3, "placeholder"], ["matInput", "", "type", "text", "name", "startingMessage", "formControlName", "startingMessage", 3, "placeholder"], [4, "ngIf"], ["rowHeight", "6rem", 3, "cols"], ["matInput", "", "formControlName", "startDate", 3, "matDatepicker", "min"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "endDate", 3, "matDatepicker", "min"], ["endPicker", ""], [1, ""], [1, "ui", "three", "column", "grid"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], [1, "ui", "fluid", "card"], [1, "content"], [1, "right", "floated", "icon", "trash", "delete-icon", 3, "click"], [1, "meta"]], template: function ConversationSetupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-grid-list", 1);
        i0.ɵɵelementStart(2, "mat-grid-tile", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "form", 4);
        i0.ɵɵelementStart(6, "mat-form-field", 5);
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8);
        i0.ɵɵelementStart(9, "sup");
        i0.ɵɵelement(10, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 5);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "textarea", 8);
        i0.ɵɵtext(16, "            ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field", 5);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19);
        i0.ɵɵelementStart(20, "sup");
        i0.ɵɵelement(21, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-form-field", 5);
        i0.ɵɵelementStart(24, "mat-label");
        i0.ɵɵtext(25);
        i0.ɵɵelementStart(26, "sup");
        i0.ɵɵelement(27, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(28, "input", 10);
        i0.ɵɵtemplate(29, ConversationSetupComponent_mat_error_29_Template, 2, 1, "mat-error", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "mat-grid-list", 12);
        i0.ɵɵelementStart(31, "mat-grid-tile");
        i0.ɵɵelementStart(32, "div", 3);
        i0.ɵɵelementStart(33, "mat-form-field", 5);
        i0.ɵɵelementStart(34, "mat-label");
        i0.ɵɵtext(35);
        i0.ɵɵelementStart(36, "sup");
        i0.ɵɵelement(37, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(38, "input", 13);
        i0.ɵɵelement(39, "mat-datepicker-toggle", 14);
        i0.ɵɵelement(40, "mat-datepicker", null, 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "mat-grid-tile");
        i0.ɵɵelementStart(43, "div", 3);
        i0.ɵɵelementStart(44, "mat-form-field", 5);
        i0.ɵɵelementStart(45, "mat-label");
        i0.ɵɵtext(46);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(47, "input", 16);
        i0.ɵɵelement(48, "mat-datepicker-toggle", 14);
        i0.ɵɵelement(49, "mat-datepicker", null, 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "div", 18);
        i0.ɵɵtemplate(52, ConversationSetupComponent_ng_container_52_Template, 3, 1, "ng-container", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(41);
        const _r2 = i0.ɵɵreference(50);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.addConversation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.conversationForm);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationName, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterName);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationDescription);
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterDescription);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationPurpose, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterPurpose);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.startMessage, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isStartingMessageExist);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cols", ctx.matDateBreakpoint);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.startDate, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matDatepicker", _r1)("min", ctx.startMinDate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r1);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.endDate, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matDatepicker", _r2)("min", ctx.endMinDate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r2);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.userSegments && ctx.userSegments.length);
    } }, directives: [i5.MatGridList, i5.MatGridTile, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i6.ɵn, i1.FormGroupDirective, i7.MatFormField, i7.MatLabel, i8.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i9.NgIf, i10.MatDatepickerInput, i10.MatDatepickerToggle, i7.MatSuffix, i10.MatDatepicker, i7.MatError, i9.NgForOf], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.mat-column-action[_ngcontent-%COMP%]{width:5px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConversationSetupComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-setup',
                templateUrl: './conversation-setup.component.html',
                styleUrls: ['./conversation-setup.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.UciService }, { type: i3.GlobalService }, { type: i4.MatDialog }]; }, { conversationForm: [{
            type: Input
        }], isStartingMessageExist: [{
            type: Input
        }], startMinDate: [{
            type: Input
        }], userSegments: [{
            type: Input
        }], starringMessageChange: [{
            type: Output
        }], userSegmentDelete: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLXNldHVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb252ZXJzYXRpb24tc2V0dXAvY29udmVyc2F0aW9uLXNldHVwLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1zZXR1cC9jb252ZXJzYXRpb24tc2V0dXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUs3RSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNrQ2hDLGlDQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFZOzs7SUFEUixlQUNKO0lBREksK0xBQ0o7Ozs7SUFzREEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsNkJBQ3dDO0lBQXJDLCtPQUFnQztJQUFDLGlCQUFJO0lBQ3hDLFlBQ0E7SUFBQSwrQkFBa0I7SUFBQSxZQUFtRTtJQUFBLGlCQUFNO0lBQy9GLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTs7OztJQUpNLGVBQ0E7SUFEQSxvREFDQTtJQUFrQixlQUFtRTtJQUFuRSxnTkFBbUU7OztJQVJ6Ryw2QkFDSTtJQUFBLCtCQUNJO0lBQUEsNEZBQ0k7SUFTUixpQkFBTTtJQUNWLDBCQUFlOzs7SUFYYSxlQUF1RDtJQUF2RCw2Q0FBdUQ7O0FEbkZ2RixNQUFNLE9BQU8sMEJBQTBCO0lBV25DLFlBQ1ksRUFBZSxFQUNmLFVBQXNCLEVBQ3RCLGFBQTRCLEVBQzdCLE1BQWlCO1FBSGhCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZ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LFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ3JEOztrQkFFSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1jb252ZXJzYXRpb24tc2V0dXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzYXRpb24tc2V0dXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NvbnZlcnNhdGlvbi1zZXR1cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvblNldHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjb252ZXJzYXRpb25Gb3JtOiBGb3JtR3JvdXA7XG4gICAgQElucHV0KCkgaXNTdGFydGluZ01lc3NhZ2VFeGlzdDtcbiAgICBASW5wdXQoKSBzdGFydE1pbkRhdGU7XG4gICAgQElucHV0KCkgdXNlclNlZ21lbnRzO1xuICAgIEBPdXRwdXQoKSBzdGFycmluZ01lc3NhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgdXNlclNlZ21lbnREZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBtYXREYXRlQnJlYWtwb2ludDtcbiAgICBlbmRNaW5EYXRlO1xuICAgIHJlc291cmNlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5tYXREYXRlQnJlYWtwb2ludCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDAwKSA/IDEgOiAyO1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgaWYgKHRoaXMuY29udmVyc2F0aW9uRm9ybSkge1xuICAgICAgICAgICAgLy8gc3RhcnQgZGF0ZSBhbmQgZW5kIGRhdGUgdmFsdWUgY2hhbmdlXG4gICAgICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbkZvcm0uZ2V0KCdzdGFydERhdGUnKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLmNvbnZlcnNhdGlvbkZvcm0udmFsdWUuZW5kRGF0ZSAmJiBtb21lbnQodGhpcy5jb252ZXJzYXRpb25Gb3JtLnZhbHVlLmVuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh2YWwpKSkgfHwgIXZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbkZvcm0uZ2V0KCdlbmREYXRlJykucGF0Y2hWYWx1ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcERhdGUgPSBtb21lbnQodmFsKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZE1pbkRhdGUgPSBuZXcgRGF0ZSh0ZW1wRGF0ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5jb252ZXJzYXRpb25Gb3JtLmdldCgnc3RhcnRpbmdNZXNzYWdlJykudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDEwMDApKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdGFycmluZ01lc3NhZ2VDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJyaW5nTWVzc2FnZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zdGFycmluZ01lc3NhZ2VDaGFuZ2UuZW1pdCh7fSk7XG4gICAgfVxuXG4gICAgb25Vc2VyU2VnbWVudERlbGV0ZShpbmRleCkge1xuICAgICAgICB0aGlzLnVzZXJTZWdtZW50RGVsZXRlLmVtaXQoaW5kZXgpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ1Y2ktY29udGFpbmVyXCI+XG4gICAgPG1hdC1ncmlkLWxpc3QgY29scz1cIjFcIiByb3dIZWlnaHQ9XCI0cmVtXCI+XG4gICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCIgY2xhc3M9XCJmb250LTEtMiBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFkZENvbnZlcnNhdGlvbn19PC9kaXY+XG4gICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICA8L21hdC1ncmlkLWxpc3Q+XG5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImNvbnZlcnNhdGlvbkZvcm1cIj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwidy0xMDBcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udmVyc2F0aW9uTmFtZX19XG4gICAgICAgICAgICAgICAgPHN1cD48aSBjbGFzcz1cImFzdGVyaXNrIGljb24gYXN0ZXJpc2stY29sb3JcIj48L2k+PC9zdXA+XG4gICAgICAgICAgICA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5lbnRlck5hbWV9fVwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJ3LTEwMFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb252ZXJzYXRpb25EZXNjcmlwdGlvbn19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcm93cz1cIjVcIiBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVudGVyRGVzY3JpcHRpb259fVwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwidy0xMDBcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udmVyc2F0aW9uUHVycG9zZX19XG4gICAgICAgICAgICAgICAgPHN1cD48aSBjbGFzcz1cImFzdGVyaXNrIGljb24gYXN0ZXJpc2stY29sb3JcIj48L2k+PC9zdXA+XG4gICAgICAgICAgICA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5lbnRlclB1cnBvc2V9fVwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicHVycG9zZVwiPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInctMTAwXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnN0YXJ0TWVzc2FnZX19IDxzdXA+PGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhc3RlcmlzayBpY29uIGFzdGVyaXNrLWNvbG9yXCI+PC9pPjwvc3VwPjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXJ0aW5nTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZW50ZXJNZXNzYWdlfX1cIlxuICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0aW5nTWVzc2FnZVwiPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImlzU3RhcnRpbmdNZXNzYWdlRXhpc3RcIj5cbiAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uc3RhcnRNZXNzYWdlRXJyb3J9fVxuICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG1hdC1ncmlkLWxpc3QgW2NvbHNdPVwibWF0RGF0ZUJyZWFrcG9pbnRcIiByb3dIZWlnaHQ9XCI2cmVtXCI+XG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInctMTAwXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnN0YXJ0RGF0ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD48aSBjbGFzcz1cImFzdGVyaXNrIGljb24gYXN0ZXJpc2stY29sb3JcIj48L2k+PC9zdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbbWluXT1cInN0YXJ0TWluRGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0RGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cInctMTAwXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVuZERhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZW5kUGlja2VyXCIgW21pbl09XCJlbmRNaW5EYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW5kRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJlbmRQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjZW5kUGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgIDwvbWF0LWdyaWQtbGlzdD5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cbjwhLS1XaWxsIGVuYWJsZSB0aGlzIGluIGZ1dHVyZS0tPlxuPCEtLTxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwidWkgZ3JpZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaXggd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgPGg2PlVzZXIgc2VnbWVudHM8L2g2PlxuICAgICAgICA8cCBjbGFzcz1cInB0LTEwXCI+e3t1c2VyU2VnbWVudHMubGVuZ3RofX0gc2VnbWVudHMgYWRkZWQ8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNpeCB3aWRlIGNvbHVtbiAgcmlnaHQgYWxpZ25lZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY2xhc3M9XCJhY3Rpb24tYnV0dG9uIG1yLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uVXNlclNlZ21lbnRBZGRDbGljaygpXCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIG5ld1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjbGFzcz1cImFjdGlvbi1idXR0b25cIiAoY2xpY2spPVwidXNlclNlZ21lbnQoKVwiPlxuICAgICAgICAgICAgICAgIENob29zZSBmcm9tIGV4aXN0aW5nXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4tLT5cbjxkaXYgY2xhc3M9XCJcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXNlclNlZ21lbnRzICYmIHVzZXJTZWdtZW50cy5sZW5ndGhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIHRocmVlIGNvbHVtbiBncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCIgKm5nRm9yPVwibGV0IHVzZXJTZWdtZW50IG9mIHVzZXJTZWdtZW50czsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBmbHVpZCBjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpZ2h0IGZsb2F0ZWQgaWNvbiB0cmFzaCBkZWxldGUtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Vc2VyU2VnbWVudERlbGV0ZShpKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dXNlclNlZ21lbnQubmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YVwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2VyQ291bnR9fSB7e3VzZXJTZWdtZW50LmNvdW50fX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbjwvZGl2PlxuIl19
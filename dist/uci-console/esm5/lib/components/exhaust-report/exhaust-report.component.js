import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../services/uci.service";
import * as i3 from "@angular/router";
import * as i4 from "../../services/toaster.service";
import * as i5 from "../../services/global.service";
import * as i6 from "ng2-semantic-ui-v9";
import * as i7 from "@angular/material/grid-list";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/select";
import * as i10 from "@angular/common";
import * as i11 from "@angular/material/button";
import * as i12 from "@angular/material/table";
import * as i13 from "@angular/material/paginator";
import * as i14 from "@angular/material/core";
function ExhaustReportComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var exhaustType_r21 = ctx.$implicit;
    i0.ɵɵproperty("value", exhaustType_r21.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", exhaustType_r21.name, " ");
} }
function ExhaustReportComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Request ID");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r22 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r22.requestid, " ");
} }
function ExhaustReportComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Request Type");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r23 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r23.requesttype, " ");
} }
function ExhaustReportComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Request Date");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r24 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r24.requestdate, " ");
} }
function ExhaustReportComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Conversation ID");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r25.conversationid, " ");
} }
function ExhaustReportComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Start Date");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r26 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r26.startdate, " ");
} }
function ExhaustReportComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " End Date");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r27 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r27.enddate, " ");
} }
function ExhaustReportComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Status");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r28.status, " ");
} }
function ExhaustReportComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Report Link");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r29 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r29.reportlink, " ");
} }
function ExhaustReportComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 30);
    i0.ɵɵtext(1, " Generated Date");
    i0.ɵɵelementEnd();
} }
function ExhaustReportComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r30 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r30.generateddate, " ");
} }
function ExhaustReportComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 32);
} }
function ExhaustReportComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 33);
} }
var _c0 = function () { return [5, 10, 20]; };
var ExhaustReportComponent = /** @class */ (function () {
    function ExhaustReportComponent(fb, uciService, router, activatedRoute, toasterService, globalService) {
        this.fb = fb;
        this.uciService = uciService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toasterService = toasterService;
        this.globalService = globalService;
        this.exhaustTypes = [
            { name: 'Response Exhaust', value: 'uci-response-exhaust' },
            { name: 'Private Exhaust', value: 'uci-private-exhaust' },
        ];
        this.filters = {
            startDate: null,
            endDate: null,
            exhaustType: null,
        };
        this.displayedColumns = ['requestid', 'requesttype', 'requestdate', 'conversationid', 'startdate', 'enddate', 'status', 'reportlink', 'generateddate'];
        this.dataSource = [
            {
                requestid: 'dhheb1234',
                requesttype: 'Response Exhaust',
                requestdate: '14 / 03 / 2022',
                conversationid: 'uik123',
                startdate: '10 / 03 / 2022',
                enddate: '11/03/2022',
                status: 'Submitted',
                reportlink: '-',
                generateddate: '-'
            },
            {
                requestid: 'dhheb9876',
                requesttype: 'Private Exhaust',
                requestdate: '14 / 03 / 2022',
                conversationid: 'uik123',
                startdate: '10 / 03 / 2022',
                enddate: '11/03/2022',
                status: 'Success',
                reportlink: '-',
                generateddate: '15 / 03 / 2022'
            },
        ];
        this.resourceService = this.globalService.getResourceService();
    }
    ExhaustReportComponent.prototype.ngOnInit = function () {
        this.user = this.globalService.getUser();
        this.resourceService = this.globalService.getResourceService();
        if (!this.user) {
            this.router.navigate(['uci-admin']);
            return;
        }
        this.filterForm = this.fb.group({
            startDate: [''],
            endDate: [''],
            exhaustType: [this.exhaustTypes[0].value],
        });
        // this.filters.exhaustType = this.exhaustTypes[0].value;
        this.conversationId = this.activatedRoute.snapshot.paramMap.get('id');
        this.getJobList();
    };
    ExhaustReportComponent.prototype.getJobList = function () {
        this.uciService.getJobList(this.conversationId, {}).subscribe(function (data) {
            console.log('job list data');
        });
    };
    ExhaustReportComponent.prototype.getJobInfo = function () {
        this.uciService.getJobInfo(this.conversationId, {}).subscribe(function (data) {
            console.log('job Info');
        });
    };
    ExhaustReportComponent.prototype.submitExhaust = function () {
        var exhaustData = {
            request: {
                dataset: this.filters.exhaustType,
                tag: uuidv4(),
                requestedBy: 'user_id',
                requestedChannel: '01309282781705830427',
                datasetConfig: {
                    type: this.filters.exhaustType,
                    conversationId: this.conversationId,
                    startDate: '2022-02-06',
                    endDate: '2022-02-10'
                },
                output_format: 'csv'
            }
        };
        this.uciService.submitExhaust(exhaustData).subscribe(function (data) {
            console.log('job Info');
        });
    };
    ExhaustReportComponent.ɵfac = function ExhaustReportComponent_Factory(t) { return new (t || ExhaustReportComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.UciService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.ToasterService), i0.ɵɵdirectiveInject(i5.GlobalService)); };
    ExhaustReportComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExhaustReportComponent, selectors: [["lib-exhaust-report"]], decls: 56, vars: 11, consts: [[1, "header"], [3, "formGroup"], ["cols", "4", "rowHeight", "3rem"], ["colspan", "1"], [1, "w-100", "text-left"], ["appearance", "fill"], ["formControlName", "exhaustType"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ui", "left", "icon", "input"], [1, "calendar", "icon"], ["suiDatepicker", "", "placeholder", "Start Date", "formControlName", "startDate", 3, "pickerMode", "pickerUseNativeOnMobile"], ["suiDatepicker", "", "placeholder", "End Date", "formControlName", "endDate", 3, "pickerMode", "pickerUseNativeOnMobile"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "requestid"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "requesttype"], ["matColumnDef", "requestdate"], ["matColumnDef", "conversationid"], ["matColumnDef", "startdate"], ["matColumnDef", "enddate"], ["matColumnDef", "status"], ["matColumnDef", "reportlink"], ["matColumnDef", "generateddate"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ExhaustReportComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "form", 1);
            i0.ɵɵelementStart(2, "mat-grid-list", 2);
            i0.ɵɵelementStart(3, "mat-grid-tile", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelementStart(5, "mat-form-field", 5);
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Exhaust type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-select", 6);
            i0.ɵɵtemplate(9, ExhaustReportComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-grid-tile", 3);
            i0.ɵɵelementStart(11, "div", 4);
            i0.ɵɵelementStart(12, "div", 8);
            i0.ɵɵelement(13, "i", 9);
            i0.ɵɵelement(14, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-grid-tile", 3);
            i0.ɵɵelementStart(16, "div", 4);
            i0.ɵɵelementStart(17, "div", 8);
            i0.ɵɵelement(18, "i", 9);
            i0.ɵɵelement(19, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-grid-tile", 3);
            i0.ɵɵelementStart(21, "div", 4);
            i0.ɵɵelementStart(22, "button", 12);
            i0.ɵɵlistener("click", function ExhaustReportComponent_Template_button_click_22_listener() { return ctx.getJobList(); });
            i0.ɵɵtext(23, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 13);
            i0.ɵɵelementStart(25, "table", 14);
            i0.ɵɵelementContainerStart(26, 15);
            i0.ɵɵtemplate(27, ExhaustReportComponent_th_27_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(28, ExhaustReportComponent_td_28_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(29, 18);
            i0.ɵɵtemplate(30, ExhaustReportComponent_th_30_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(31, ExhaustReportComponent_td_31_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(32, 19);
            i0.ɵɵtemplate(33, ExhaustReportComponent_th_33_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(34, ExhaustReportComponent_td_34_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(35, 20);
            i0.ɵɵtemplate(36, ExhaustReportComponent_th_36_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(37, ExhaustReportComponent_td_37_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(38, 21);
            i0.ɵɵtemplate(39, ExhaustReportComponent_th_39_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(40, ExhaustReportComponent_td_40_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(41, 22);
            i0.ɵɵtemplate(42, ExhaustReportComponent_th_42_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(43, ExhaustReportComponent_td_43_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(44, 23);
            i0.ɵɵtemplate(45, ExhaustReportComponent_th_45_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(46, ExhaustReportComponent_td_46_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(47, 24);
            i0.ɵɵtemplate(48, ExhaustReportComponent_th_48_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(49, ExhaustReportComponent_td_49_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(50, 25);
            i0.ɵɵtemplate(51, ExhaustReportComponent_th_51_Template, 2, 0, "th", 16);
            i0.ɵɵtemplate(52, ExhaustReportComponent_td_52_Template, 2, 1, "td", 17);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(53, ExhaustReportComponent_tr_53_Template, 1, 0, "tr", 26);
            i0.ɵɵtemplate(54, ExhaustReportComponent_tr_54_Template, 1, 0, "tr", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(55, "mat-paginator", 28);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.filterForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.exhaustTypes);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("pickerMode", "date")("pickerUseNativeOnMobile", false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("pickerMode", "date")("pickerUseNativeOnMobile", false);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(28);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("pageSizeOptions", i0.ɵɵpureFunction0(10, _c0));
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i6.ɵn, i1.FormGroupDirective, i7.MatGridList, i7.MatGridTile, i8.MatFormField, i8.MatLabel, i9.MatSelect, i1.NgControlStatus, i1.FormControlName, i10.NgForOf, i6.ɵx, i1.DefaultValueAccessor, i6.ɵu, i6.ɵv, i6.ɵw, i11.MatButton, i12.MatTable, i12.MatColumnDef, i12.MatHeaderCellDef, i12.MatCellDef, i12.MatHeaderRowDef, i12.MatRowDef, i13.MatPaginator, i14.MatOption, i12.MatHeaderCell, i12.MatCell, i12.MatHeaderRow, i12.MatRow], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .uci-logic-container{padding:20px}.sample-download[_ngcontent-%COMP%]{text-decoration:underline!important;cursor:pointer!important}.mobile[_ngcontent-%COMP%]   .sample-download[_ngcontent-%COMP%]{font-size:.8rem}"] });
    return ExhaustReportComponent;
}());
export { ExhaustReportComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExhaustReportComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exhaust-report',
                templateUrl: './exhaust-report.component.html',
                styleUrls: ['./exhaust-report.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.UciService }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.ToasterService }, { type: i5.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFLaEQsT0FBTyxFQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDR04sc0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQWE7OztJQUZ3Qyw2Q0FBMkI7SUFDNUUsZUFDSjtJQURJLHFEQUNKOzs7SUFzRGhCLDhCQUF1QztJQUFBLDJCQUFVO0lBQUEsaUJBQUs7OztJQUN0RCw4QkFBd0M7SUFBQSxZQUFzQjtJQUFBLGlCQUFLOzs7SUFBM0IsZUFBc0I7SUFBdEIsc0RBQXNCOzs7SUFLOUQsOEJBQXVDO0lBQUEsNkJBQVk7SUFBQSxpQkFBSzs7O0lBQ3hELDhCQUF3QztJQUFBLFlBQXdCO0lBQUEsaUJBQUs7OztJQUE3QixlQUF3QjtJQUF4Qix3REFBd0I7OztJQUtoRSw4QkFBdUM7SUFBQSw2QkFBWTtJQUFBLGlCQUFLOzs7SUFDeEQsOEJBQXdDO0lBQUEsWUFBd0I7SUFBQSxpQkFBSzs7O0lBQTdCLGVBQXdCO0lBQXhCLHdEQUF3Qjs7O0lBS2hFLDhCQUF1QztJQUFBLGdDQUFlO0lBQUEsaUJBQUs7OztJQUMzRCw4QkFBd0M7SUFBQSxZQUEyQjtJQUFBLGlCQUFLOzs7SUFBaEMsZUFBMkI7SUFBM0IsMkRBQTJCOzs7SUFLbkUsOEJBQXVDO0lBQUEsMkJBQVU7SUFBQSxpQkFBSzs7O0lBQ3RELDhCQUF3QztJQUFBLFlBQXNCO0lBQUEs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QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUdmLGtDQUNJO1lBQUEsd0VBQXVDO1lBQ3ZDLHdFQUF3QztZQUM1QywwQkFBZTtZQUVmLHdFQUF1RDtZQUN2RCx3RUFBNkQ7WUFDakUsaUJBQVE7WUFFUixxQ0FHZ0I7WUFDcEIsaUJBQU07O1lBM0hJLGVBQXdCO1lBQXhCLDBDQUF3QjtZQU9NLGVBQXdDO1lBQXhDLDBDQUF3QztZQW9CakQsZUFBcUI7WUFBckIsbUNBQXFCLGtDQUFBO1lBa0JyQixlQUFxQjtZQUFyQixtQ0FBcUIsa0NBQUE7WUFjL0IsZUFBeUI7WUFBekIsMkNBQXlCO1lBd0RuQixnQkFBbUM7WUFBbkMsc0RBQW1DO1lBQzFDLGVBQWdEO1lBQWhELHVEQUFnRDtZQUdqRCxlQUErQjtZQUEvQiw2REFBK0I7O2lDRHhIbEQ7Q0F3SEMsQUFoSEQsSUFnSEM7U0EzR1ksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge1RvYXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1leGhhdXN0LXJlcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9leGhhdXN0LXJlcG9ydC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeGhhdXN0UmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG4gICAgdXNlcjtcbiAgICBjb252ZXJzYXRpb25JZDtcbiAgICBleGhhdXN0VHlwZXMgPSBbXG4gICAgICAgIHtuYW1lOiAnUmVzcG9uc2UgRXhoYXVzdCcsIHZhbHVlOiAndWNpLXJlc3BvbnNlLWV4aGF1c3QnfSxcbiAgICAgICAge25hbWU6ICdQcml2YXRlIEV4aGF1c3QnLCB2YWx1ZTogJ3VjaS1wcml2YXRlLWV4aGF1c3QnfSxcbiAgICBdO1xuICAgIGZpbHRlckZvcm06IEZvcm1Hcm91cDtcbiAgICBmaWx0ZXJzID0ge1xuICAgICAgICBzdGFydERhdGU6IG51bGwsXG4gICAgICAgIGVuZERhdGU6IG51bGwsXG4gICAgICAgIGV4aGF1c3RUeXBlOiBudWxsLFxuICAgIH07XG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3JlcXVlc3RpZCcsICdyZXF1ZXN0dHlwZScsICdyZXF1ZXN0ZGF0ZScsICdjb252ZXJzYXRpb25pZCcsICdzdGFydGRhdGUnLCAnZW5kZGF0ZScsICdzdGF0dXMnLCAncmVwb3J0bGluaycsICdnZW5lcmF0ZWRkYXRlJ107XG4gICAgZGF0YVNvdXJjZSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdGlkOiAnZGhoZWIxMjM0JyxcbiAgICAgICAgICAgIHJlcXVlc3R0eXBlOiAnUmVzcG9uc2UgRXhoYXVzdCcsXG4gICAgICAgICAgICByZXF1ZXN0ZGF0ZTogJzE0IC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbmlkOiAndWlrMTIzJyxcbiAgICAgICAgICAgIHN0YXJ0ZGF0ZTogJzEwIC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGVuZGRhdGU6ICcxMS8wMy8yMDIyJyxcbiAgICAgICAgICAgIHN0YXR1czogJ1N1Ym1pdHRlZCcsXG4gICAgICAgICAgICByZXBvcnRsaW5rOiAnLScsXG4gICAgICAgICAgICBnZW5lcmF0ZWRkYXRlOiAnLSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdGlkOiAnZGhoZWI5ODc2JyxcbiAgICAgICAgICAgIHJlcXVlc3R0eXBlOiAnUHJpdmF0ZSBFeGhhdXN0JyxcbiAgICAgICAgICAgIHJlcXVlc3RkYXRlOiAnMTQgLyAwMyAvIDIwMjInLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uaWQ6ICd1aWsxMjMnLFxuICAgICAgICAgICAgc3RhcnRkYXRlOiAnMTAgLyAwMyAvIDIwMjInLFxuICAgICAgICAgICAgZW5kZGF0ZTogJzExLzAzLzIwMjInLFxuICAgICAgICAgICAgc3RhdHVzOiAnU3VjY2VzcycsXG4gICAgICAgICAgICByZXBvcnRsaW5rOiAnLScsXG4gICAgICAgICAgICBnZW5lcmF0ZWRkYXRlOiAnMTUgLyAwMyAvIDIwMjInXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIGlmICghdGhpcy51c2VyKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbiddKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogWycnXSxcbiAgICAgICAgICAgIGVuZERhdGU6IFsnJ10sXG4gICAgICAgICAgICBleGhhdXN0VHlwZTogW3RoaXMuZXhoYXVzdFR5cGVzWzBdLnZhbHVlXSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVycy5leGhhdXN0VHlwZSA9IHRoaXMuZXhoYXVzdFR5cGVzWzBdLnZhbHVlO1xuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbklkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgICAgIHRoaXMuZ2V0Sm9iTGlzdCgpO1xuICAgIH1cblxuICAgIGdldEpvYkxpc3QoKSB7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS5nZXRKb2JMaXN0KHRoaXMuY29udmVyc2F0aW9uSWQsIHt9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnam9iIGxpc3QgZGF0YScpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEpvYkluZm8oKSB7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS5nZXRKb2JJbmZvKHRoaXMuY29udmVyc2F0aW9uSWQsIHt9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnam9iIEluZm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdWJtaXRFeGhhdXN0KCkge1xuICAgICAgICBjb25zdCBleGhhdXN0RGF0YSA9IHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICBkYXRhc2V0OiB0aGlzLmZpbHRlcnMuZXhoYXVzdFR5cGUsXG4gICAgICAgICAgICAgICAgdGFnOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0ZWRCeTogJ3VzZXJfaWQnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RlZENoYW5uZWw6ICcwMTMwOTI4Mjc4MTcwNTgzMDQyNycsXG4gICAgICAgICAgICAgICAgZGF0YXNldENvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmZpbHRlcnMuZXhoYXVzdFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiB0aGlzLmNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6ICcyMDIyLTAyLTA2JyxcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogJzIwMjItMDItMTAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvdXRwdXRfZm9ybWF0OiAnY3N2J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2Uuc3VibWl0RXhoYXVzdChleGhhdXN0RGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYiBJbmZvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIj5cbiAgICAgICAgPG1hdC1ncmlkLWxpc3QgY29scz1cIjRcIiByb3dIZWlnaHQ9XCIzcmVtXCI+XG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkV4aGF1c3QgdHlwZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiZXhoYXVzdFR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZXhoYXVzdFR5cGUgb2YgZXhoYXVzdFR5cGVzXCIgW3ZhbHVlXT1cImV4aGF1c3RUeXBlLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGV4aGF1c3RUeXBlLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5TdGFydCBkYXRlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwic3RhcnRQaWNrZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJzdGFydFBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNzdGFydFBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxlZnQgaWNvbiBpbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJjYWxlbmRhciBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN1aURhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0IERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BpY2tlck1vZGVdPVwiJ2RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGlja2VyVXNlTmF0aXZlT25Nb2JpbGVdPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkVuZCBkYXRlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJlbmRQaWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJlbmRQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNlbmRQaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxlZnQgaWNvbiBpbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJjYWxlbmRhciBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN1aURhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVuZCBEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbmREYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGlja2VyTW9kZV09XCInZGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwaWNrZXJVc2VOYXRpdmVPbk1vYmlsZV09XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJnZXRKb2JMaXN0KClcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgPC9tYXQtZ3JpZC1saXN0PlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cblxuICAgICAgICA8IS0tIFJlcXVlc3QgSUQgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInJlcXVlc3RpZFwiPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gUmVxdWVzdCBJRDwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucmVxdWVzdGlkfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBSZXF1ZXN0IFR5cGUgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInJlcXVlc3R0eXBlXCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBSZXF1ZXN0IFR5cGU8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnJlcXVlc3R0eXBlfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBSZXF1ZXN0IERhdGUgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInJlcXVlc3RkYXRlXCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBSZXF1ZXN0IERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnJlcXVlc3RkYXRlfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBDb252ZXJzYXRpb24gSUQgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvbnZlcnNhdGlvbmlkXCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb252ZXJzYXRpb24gSUQ8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LmNvbnZlcnNhdGlvbmlkfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBTdGFydCBEYXRlIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzdGFydGRhdGVcIj5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN0YXJ0IERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN0YXJ0ZGF0ZX19IDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gRW5kIERhdGUgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImVuZGRhdGVcIj5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEVuZCBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5lbmRkYXRlfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBTdGF0dXMgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN0YXR1c1wiPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3RhdHVzPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zdGF0dXN9fSA8L3RkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8IS0tIFJlcG9ydCBMaW5rICBDb2x1bW4gLS0+XG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicmVwb3J0bGlua1wiPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gUmVwb3J0IExpbms8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnJlcG9ydGxpbmt9fSA8L3RkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8IS0tR2VuZXJhdGVkIERhdGUgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImdlbmVyYXRlZGRhdGVcIj5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEdlbmVyYXRlZCBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5nZW5lcmF0ZWRkYXRlfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICA8L3RhYmxlPlxuXG4gICAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDIwXVwiXG4gICAgICAgICAgICAgICAgICAgc2hvd0ZpcnN0TGFzdEJ1dHRvbnNcbiAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2Ugb2YgcGVyaW9kaWMgZWxlbWVudHNcIj5cbiAgICA8L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cbiJdfQ==
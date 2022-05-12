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
    const exhaustType_r21 = ctx.$implicit;
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
    const element_r22 = ctx.$implicit;
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
    const element_r23 = ctx.$implicit;
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
    const element_r24 = ctx.$implicit;
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
    const element_r25 = ctx.$implicit;
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
    const element_r26 = ctx.$implicit;
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
    const element_r27 = ctx.$implicit;
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
    const element_r28 = ctx.$implicit;
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
    const element_r29 = ctx.$implicit;
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
    const element_r30 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r30.generateddate, " ");
} }
function ExhaustReportComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 32);
} }
function ExhaustReportComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 33);
} }
const _c0 = function () { return [5, 10, 20]; };
export class ExhaustReportComponent {
    constructor(fb, uciService, router, activatedRoute, toasterService, globalService) {
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
    ngOnInit() {
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
    }
    getJobList() {
        this.uciService.getJobList(this.conversationId, {}).subscribe(data => {
            console.log('job list data');
        });
    }
    getJobInfo() {
        this.uciService.getJobInfo(this.conversationId, {}).subscribe(data => {
            console.log('job Info');
        });
    }
    submitExhaust() {
        const exhaustData = {
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
        this.uciService.submitExhaust(exhaustData).subscribe(data => {
            console.log('job Info');
        });
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExhaustReportComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exhaust-report',
                templateUrl: './exhaust-report.component.html',
                styleUrls: ['./exhaust-report.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.UciService }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.ToasterService }, { type: i5.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFLaEQsT0FBTyxFQUFDLEVBQUUsSUFBSSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDR04sc0NBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQWE7OztJQUZ3Qyw2Q0FBMkI7SUFDNUUsZUFDSjtJQURJLHFEQUNKOzs7SUFzRGhCLDhCQUF1QztJQUFBLDJCQUFVO0lBQUEsaUJBQUs7OztJQUN0RCw4QkFBd0M7SUFBQSxZQUFzQjtJQUFBLGlCQUFLOzs7SUFBM0IsZUFBc0I7SUFBdEIsc0RBQXNCOzs7SUFLOUQsOEJBQXVDO0lBQUEsNkJBQVk7SUFBQSxpQkFBSzs7O0lBQ3hELDhCQUF3QztJQUFBLFlBQXdCO0lBQUEsaUJBQUs7OztJQUE3QixlQUF3QjtJQUF4Qix3REFBd0I7OztJQUtoRSw4QkFBdUM7SUFBQSw2QkFBWTtJQUFBLGlCQUFLOzs7SUFDeEQsOEJBQXdDO0lBQUEsWUFBd0I7SUFBQSxpQkFBSzs7O0lBQTdCLGVBQXdCO0lBQXhCLHdEQUF3Qjs7O0lBS2hFLDhCQUF1QztJQUFBLGdDQUFlO0lBQUEsaUJBQUs7OztJQUMzRCw4QkFBd0M7SUFBQSxZQUEyQjtJQUFBLGlCQUFLOzs7SUFBaEMsZUFBMkI7SUFBM0IsMkRBQTJCOzs7SUFLbkUsOEJBQXVDO0lBQUEsMkJBQVU7SUFBQSxpQkFBSzs7O0lBQ3RELDhCQUF3QztJQUFBLFlBQXNCO0lBQUEsaUJBQUs7OztJQUEzQixlQUFzQjtJQUF0QixzREFBc0I7OztJQUs5RCw4QkFBdUM7SUFBQSx5QkFBUTtJQUFBLGlCQUFLOzs7SUFDcEQsOEJBQXdDO0lBQUEsWUFBb0I7SUFBQSxpQkFBSzs7O0lBQXpCLGVBQW9CO0lBQXBCLG9EQUFvQjs7O0lBSzVELDhCQUF1QztJQUFBLHVCQUFNO0lBQUEsaUJBQUs7OztJQUNsRCw4QkFBd0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsbURBQW1COzs7SUFLM0QsOEJBQXVDO0lBQUEsNEJBQVc7SUFBQSxpQkFBSzs7O0lBQ3ZELDhCQUF3QztJQUFBLFlBQXVCO0lBQUEsaUJBQUs7OztJQUE1QixlQUF1QjtJQUF2Qix1REFBdUI7OztJQUsvRCw4QkFBdUM7SUFBQSwrQkFBYztJQUFBLGlCQUFLOzs7SUFDMUQsOEJBQXdDO0lBQUEsWUFBMEI7SUFBQSxpQkFBSzs7O0lBQS9CLGVBQTBCO0lBQTFCLDBEQUEwQjs7O0lBR3RFLHlCQUE0RDs7O0lBQzVELHlCQUFrRTs7O0FEeEcxRSxNQUFNLE9BQU8sc0JBQXNCO0lBd0MvQixZQUNZLEVBQWUsRUFDZixVQUFzQixFQUN0QixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsYUFBNEI7UUFMNUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUExQ3hDLGlCQUFZLEdBQUc7WUFDWCxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUM7WUFDekQsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFDO1NBQzFELENBQUM7UUFFRixZQUFPLEdBQUc7WUFDTixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsV0FBVyxFQUFFLElBQUk7U0FDcEIsQ0FBQztRQUNGLHFCQUFnQixHQUFhLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzVKLGVBQVUsR0FBRztZQUNUO2dCQUNJLFNBQVMsRUFBRSxXQUFXO2dCQUN0QixXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixXQUFXLEVBQUUsZ0JBQWdCO2dCQUM3QixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsR0FBRzthQUNyQjtZQUNEO2dCQUNJLFNBQVMsRUFBRSxXQUFXO2dCQUN0QixXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixXQUFXLEVBQUUsZ0JBQWdCO2dCQUM3QixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixhQUFhLEVBQUUsZ0JBQWdCO2FBQ2xDO1NBQ0osQ0FBQztRQVNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2YsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2IsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDNUMsQ0FBQyxDQUFDO1FBQ0gseURBQXlEO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsSUFBSSxDQUFDLEVBQUU7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsSUFBSSxDQUFDLEVBQUU7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGFBQWE7UUFDVCxNQUFNLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztnQkFDakMsR0FBRyxFQUFFLE1BQU0sRUFBRTtnQkFDYixXQUFXLEVBQUUsU0FBUztnQkFDdEIsZ0JBQWdCLEVBQUUsc0JBQXNCO2dCQUN4QyxhQUFhLEVBQUU7b0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztvQkFDOUIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO29CQUNuQyxTQUFTLEVBQUUsWUFBWTtvQkFDdkIsT0FBTyxFQUFFLFlBQVk7aUJBQ3hCO2dCQUNELGFBQWEsRUFBRSxLQUFLO2FBQ3ZCO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FDaEQsSUFBSSxDQUFDLEVBQUU7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQzs7NEZBeEdRLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDYm5DLDhCQUNJO1FBQUEsK0JBQ0k7UUFBQSx3Q0FDSTtRQUFBLHdDQUNJO1FBQUEsOEJBQ0k7UUFBQSx5Q0FDSTtRQUFBLGlDQUFXO1FBQUEsNEJBQVk7UUFBQSxpQkFBWTtRQUNuQyxxQ0FDSTtRQUFBLHFGQUNJO1FBRVIsaUJBQWE7UUFDakIsaUJBQWlCO1FBQ3JCLGlCQUFNO1FBQ1YsaUJBQWdCO1FBQ2hCLHlDQUNJO1FBQUEsK0JBQ0k7UUFNQSwrQkFDSTtRQUFBLHdCQUE2QjtRQUM3Qiw2QkFLSjtRQUFBLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBZ0I7UUFDaEIseUNBQ0k7UUFBQSwrQkFDSTtRQU1BLCtCQUNJO1FBQUEsd0JBQTZCO1FBQzdCLDZCQUtKO1FBQUEsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFnQjtRQUNoQix5Q0FDSTtRQUFBLCtCQUNJO1FBQUEsbUNBQWlFO1FBQXZCLG9HQUFTLGdCQUFZLElBQUM7UUFBQyx1QkFBTTtRQUFBLGlCQUFTO1FBQ3BGLGlCQUFNO1FBQ1YsaUJBQWdCO1FBQ3BCLGlCQUFnQjtRQUNwQixpQkFBTztRQUNYLGlCQUFNO1FBQ04sZ0NBQ0k7UUFBQSxrQ0FFSTtRQUNBLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUdmLGtDQUNJO1FBQUEsd0VBQXVDO1FBQ3ZDLHdFQUF3QztRQUM1QywwQkFBZTtRQUVmLHdFQUF1RDtRQUN2RCx3RUFBNkQ7UUFDakUsaUJBQVE7UUFFUixxQ0FHZ0I7UUFDcEIsaUJBQU07O1FBM0hJLGVBQXdCO1FBQXhCLDBDQUF3QjtRQU9NLGVBQXdDO1FBQXhDLDBDQUF3QztRQW9CakQsZUFBcUI7UUFBckIsbUNBQXFCLGtDQUFBO1FBa0JyQixlQUFxQjtRQUFyQixtQ0FBcUIsa0NBQUE7UUFjL0IsZUFBeUI7UUFBekIsMkNBQXlCO1FBd0RuQixnQkFBbUM7UUFBbkMsc0RBQW1DO1FBQzFDLGVBQWdEO1FBQWhELHVEQUFnRDtRQUdqRCxlQUErQjtRQUEvQiw2REFBK0I7O2tERDNHckMsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItZXhoYXVzdC1yZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leGhhdXN0LXJlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhoYXVzdFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuICAgIHVzZXI7XG4gICAgY29udmVyc2F0aW9uSWQ7XG4gICAgZXhoYXVzdFR5cGVzID0gW1xuICAgICAgICB7bmFtZTogJ1Jlc3BvbnNlIEV4aGF1c3QnLCB2YWx1ZTogJ3VjaS1yZXNwb25zZS1leGhhdXN0J30sXG4gICAgICAgIHtuYW1lOiAnUHJpdmF0ZSBFeGhhdXN0JywgdmFsdWU6ICd1Y2ktcHJpdmF0ZS1leGhhdXN0J30sXG4gICAgXTtcbiAgICBmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gICAgZmlsdGVycyA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBudWxsLFxuICAgICAgICBlbmREYXRlOiBudWxsLFxuICAgICAgICBleGhhdXN0VHlwZTogbnVsbCxcbiAgICB9O1xuICAgIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydyZXF1ZXN0aWQnLCAncmVxdWVzdHR5cGUnLCAncmVxdWVzdGRhdGUnLCAnY29udmVyc2F0aW9uaWQnLCAnc3RhcnRkYXRlJywgJ2VuZGRhdGUnLCAnc3RhdHVzJywgJ3JlcG9ydGxpbmsnLCAnZ2VuZXJhdGVkZGF0ZSddO1xuICAgIGRhdGFTb3VyY2UgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3RpZDogJ2RoaGViMTIzNCcsXG4gICAgICAgICAgICByZXF1ZXN0dHlwZTogJ1Jlc3BvbnNlIEV4aGF1c3QnLFxuICAgICAgICAgICAgcmVxdWVzdGRhdGU6ICcxNCAvIDAzIC8gMjAyMicsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25pZDogJ3VpazEyMycsXG4gICAgICAgICAgICBzdGFydGRhdGU6ICcxMCAvIDAzIC8gMjAyMicsXG4gICAgICAgICAgICBlbmRkYXRlOiAnMTEvMDMvMjAyMicsXG4gICAgICAgICAgICBzdGF0dXM6ICdTdWJtaXR0ZWQnLFxuICAgICAgICAgICAgcmVwb3J0bGluazogJy0nLFxuICAgICAgICAgICAgZ2VuZXJhdGVkZGF0ZTogJy0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3RpZDogJ2RoaGViOTg3NicsXG4gICAgICAgICAgICByZXF1ZXN0dHlwZTogJ1ByaXZhdGUgRXhoYXVzdCcsXG4gICAgICAgICAgICByZXF1ZXN0ZGF0ZTogJzE0IC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbmlkOiAndWlrMTIzJyxcbiAgICAgICAgICAgIHN0YXJ0ZGF0ZTogJzEwIC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGVuZGRhdGU6ICcxMS8wMy8yMDIyJyxcbiAgICAgICAgICAgIHN0YXR1czogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgcmVwb3J0bGluazogJy0nLFxuICAgICAgICAgICAgZ2VuZXJhdGVkZGF0ZTogJzE1IC8gMDMgLyAyMDIyJ1xuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICBpZiAoIXRoaXMudXNlcikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4nXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBzdGFydERhdGU6IFsnJ10sXG4gICAgICAgICAgICBlbmREYXRlOiBbJyddLFxuICAgICAgICAgICAgZXhoYXVzdFR5cGU6IFt0aGlzLmV4aGF1c3RUeXBlc1swXS52YWx1ZV0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmZpbHRlcnMuZXhoYXVzdFR5cGUgPSB0aGlzLmV4aGF1c3RUeXBlc1swXS52YWx1ZTtcbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25JZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuICAgICAgICB0aGlzLmdldEpvYkxpc3QoKTtcbiAgICB9XG5cbiAgICBnZXRKb2JMaXN0KCkge1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZ2V0Sm9iTGlzdCh0aGlzLmNvbnZlcnNhdGlvbklkLCB7fSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYiBsaXN0IGRhdGEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRKb2JJbmZvKCkge1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZ2V0Sm9iSW5mbyh0aGlzLmNvbnZlcnNhdGlvbklkLCB7fSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYiBJbmZvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3VibWl0RXhoYXVzdCgpIHtcbiAgICAgICAgY29uc3QgZXhoYXVzdERhdGEgPSB7XG4gICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgZGF0YXNldDogdGhpcy5maWx0ZXJzLmV4aGF1c3RUeXBlLFxuICAgICAgICAgICAgICAgIHRhZzogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgcmVxdWVzdGVkQnk6ICd1c2VyX2lkJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0ZWRDaGFubmVsOiAnMDEzMDkyODI3ODE3MDU4MzA0MjcnLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5maWx0ZXJzLmV4aGF1c3RUeXBlLFxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25JZDogdGhpcy5jb252ZXJzYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiAnMjAyMi0wMi0wNicsXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGU6ICcyMDIyLTAyLTEwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3V0cHV0X2Zvcm1hdDogJ2NzdidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLnN1Ym1pdEV4aGF1c3QoZXhoYXVzdERhdGEpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqb2IgSW5mbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaWx0ZXJGb3JtXCI+XG4gICAgICAgIDxtYXQtZ3JpZC1saXN0IGNvbHM9XCI0XCIgcm93SGVpZ2h0PVwiM3JlbVwiPlxuICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5FeGhhdXN0IHR5cGU8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImV4aGF1c3RUeXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGV4aGF1c3RUeXBlIG9mIGV4aGF1c3RUeXBlc1wiIFt2YWx1ZV09XCJleGhhdXN0VHlwZS52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBleGhhdXN0VHlwZS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U3RhcnQgZGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInN0YXJ0UGlja2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwic3RhcnRQaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjc3RhcnRQaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsZWZ0IGljb24gaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY2FsZW5kYXIgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdWlEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydCBEYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdGFydERhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwaWNrZXJNb2RlXT1cIidkYXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BpY2tlclVzZU5hdGl2ZU9uTW9iaWxlXT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5FbmQgZGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZW5kUGlja2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZW5kUGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjZW5kUGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsZWZ0IGljb24gaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiY2FsZW5kYXIgaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdWlEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbmQgRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW5kRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BpY2tlck1vZGVdPVwiJ2RhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGlja2VyVXNlTmF0aXZlT25Nb2JpbGVdPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZ2V0Sm9iTGlzdCgpXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgIDwvbWF0LWdyaWQtbGlzdD5cbiAgICA8L2Zvcm0+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gICAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG5cbiAgICAgICAgPCEtLSBSZXF1ZXN0IElEIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJyZXF1ZXN0aWRcIj5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFJlcXVlc3QgSUQ8L3RoPlxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnJlcXVlc3RpZH19IDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gUmVxdWVzdCBUeXBlIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJyZXF1ZXN0dHlwZVwiPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gUmVxdWVzdCBUeXBlPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5yZXF1ZXN0dHlwZX19IDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gUmVxdWVzdCBEYXRlIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJyZXF1ZXN0ZGF0ZVwiPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gUmVxdWVzdCBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5yZXF1ZXN0ZGF0ZX19IDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gQ29udmVyc2F0aW9uIElEIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb252ZXJzYXRpb25pZFwiPlxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gQ29udmVyc2F0aW9uIElEPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5jb252ZXJzYXRpb25pZH19IDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gU3RhcnQgRGF0ZSBDb2x1bW4gLS0+XG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3RhcnRkYXRlXCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTdGFydCBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zdGFydGRhdGV9fSA8L3RkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8IS0tIEVuZCBEYXRlIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJlbmRkYXRlXCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBFbmQgRGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZW5kZGF0ZX19IDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gU3RhdHVzIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN0YXR1czwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3RhdHVzfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBSZXBvcnQgTGluayAgQ29sdW1uIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInJlcG9ydGxpbmtcIj5cbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFJlcG9ydCBMaW5rPC90aD5cbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5yZXBvcnRsaW5rfX0gPC90ZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLUdlbmVyYXRlZCBEYXRlIENvbHVtbiAtLT5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJnZW5lcmF0ZWRkYXRlXCI+XG4gICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBHZW5lcmF0ZWQgRGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZ2VuZXJhdGVkZGF0ZX19IDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gICAgPC90YWJsZT5cblxuICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyMF1cIlxuICAgICAgICAgICAgICAgICAgIHNob3dGaXJzdExhc3RCdXR0b25zXG4gICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlIG9mIHBlcmlvZGljIGVsZW1lbnRzXCI+XG4gICAgPC9tYXQtcGFnaW5hdG9yPlxuPC9kaXY+XG4iXX0=
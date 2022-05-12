import { __assign } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddLogicComponent } from '../add-logic/add-logic.component';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "../../services/uci.service";
import * as i2 from "../../services/global.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/grid-list";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/table";
import * as i8 from "@angular/material/menu";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/card";
import * as i11 from "ng2-semantic-ui-v9";
function LogicListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function LogicListComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.openModel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.btn == null ? null : ctx_r0.resourceService.frmelmnts.btn.addLogic, " ");
} }
function LogicListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-grid-list", 7);
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵelement(5, "img", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 14);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 15);
    i0.ɵɵlistener("click", function LogicListComponent_ng_container_9_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r7); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.openModel(); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.lbl == null ? null : ctx_r1.resourceService.frmelmnts.lbl.noLogic, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.btn == null ? null : ctx_r1.resourceService.frmelmnts.btn.addLogic, " ");
} }
function LogicListComponent_ng_template_10_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.resourceService.frmelmnts == null ? null : ctx_r8.resourceService.frmelmnts.lbl == null ? null : ctx_r8.resourceService.frmelmnts.lbl.step, "");
} }
function LogicListComponent_ng_template_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r20 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r20 + 1, " ");
} }
function LogicListComponent_ng_template_10_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.resourceService.frmelmnts == null ? null : ctx_r10.resourceService.frmelmnts.lbl == null ? null : ctx_r10.resourceService.frmelmnts.lbl.name, "");
} }
function LogicListComponent_ng_template_10_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r21.name, " ");
} }
function LogicListComponent_ng_template_10_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.resourceService.frmelmnts == null ? null : ctx_r12.resourceService.frmelmnts.lbl == null ? null : ctx_r12.resourceService.frmelmnts.lbl.description, "");
} }
function LogicListComponent_ng_template_10_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r22 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r22.description, " ");
} }
function LogicListComponent_ng_template_10_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.action, "");
} }
function LogicListComponent_ng_template_10_td_13_Template(rf, ctx) { if (rf & 1) {
    var _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵelementStart(1, "button", 32);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 33, 34);
    i0.ɵɵelementStart(6, "button", 35);
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r27); var element_r23 = ctx.$implicit; var i_r24 = ctx.index; var ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.openModel(element_r23, i_r24); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 35);
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r27); var element_r23 = ctx.$implicit; var i_r24 = ctx.index; var ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.onDelete(element_r23, i_r24); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r25 = i0.ɵɵreference(5);
    var ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r25);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.resourceService.frmelmnts == null ? null : ctx_r15.resourceService.frmelmnts.lbl == null ? null : ctx_r15.resourceService.frmelmnts.lbl.edit, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.resourceService.frmelmnts == null ? null : ctx_r15.resourceService.frmelmnts.lbl == null ? null : ctx_r15.resourceService.frmelmnts.lbl.delete, " ");
} }
function LogicListComponent_ng_template_10_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 36);
} }
function LogicListComponent_ng_template_10_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 37);
} }
function LogicListComponent_ng_template_10_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "mat-card");
    i0.ɵɵelementStart(2, "mat-card-content");
    i0.ɵɵelementStart(3, "mat-grid-list", 39);
    i0.ɵɵelementStart(4, "mat-grid-tile", 40);
    i0.ɵɵelementStart(5, "div", 3);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-grid-tile", 41);
    i0.ɵɵelementStart(8, "div", 42);
    i0.ɵɵelementStart(9, "h5");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 43);
    i0.ɵɵelementStart(12, "button", 44);
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 45);
    i0.ɵɵelementStart(16, "div", 46);
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_16_listener() { i0.ɵɵrestoreView(_r33); var botLogic_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.openModel(botLogic_r30, i_r31); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 46);
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_18_listener() { i0.ɵɵrestoreView(_r33); var botLogic_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onDelete(botLogic_r30, i_r31); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-grid-tile", 40);
    i0.ɵɵelementStart(21, "div", 47);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "mat-grid-tile", 48);
    i0.ɵɵelementStart(24, "div", 3);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var botLogic_r30 = ctx.$implicit;
    var ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(botLogic_r30.name);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.edit, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.delete, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", botLogic_r30.description, " ");
} }
function LogicListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "table", 17);
    i0.ɵɵelementContainerStart(2, 18);
    i0.ɵɵtemplate(3, LogicListComponent_ng_template_10_th_3_Template, 2, 1, "th", 19);
    i0.ɵɵtemplate(4, LogicListComponent_ng_template_10_td_4_Template, 2, 1, "td", 20);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(5, 21);
    i0.ɵɵtemplate(6, LogicListComponent_ng_template_10_th_6_Template, 2, 1, "th", 19);
    i0.ɵɵtemplate(7, LogicListComponent_ng_template_10_td_7_Template, 2, 1, "td", 20);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(8, 22);
    i0.ɵɵtemplate(9, LogicListComponent_ng_template_10_th_9_Template, 2, 1, "th", 19);
    i0.ɵɵtemplate(10, LogicListComponent_ng_template_10_td_10_Template, 2, 1, "td", 20);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(11, 23);
    i0.ɵɵtemplate(12, LogicListComponent_ng_template_10_th_12_Template, 2, 1, "th", 19);
    i0.ɵɵtemplate(13, LogicListComponent_ng_template_10_td_13_Template, 10, 3, "td", 24);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(14, LogicListComponent_ng_template_10_tr_14_Template, 1, 0, "tr", 25);
    i0.ɵɵtemplate(15, LogicListComponent_ng_template_10_tr_15_Template, 1, 0, "tr", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 27);
    i0.ɵɵtemplate(17, LogicListComponent_ng_template_10_div_17_Template, 26, 6, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r3.datasource);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r3.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r3.displayedColumns);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.botLogics);
} }
var LogicListComponent = /** @class */ (function () {
    function LogicListComponent(uciService, globalService, dialog) {
        this.uciService = uciService;
        this.globalService = globalService;
        this.dialog = dialog;
        this.botLogics = [];
        this.modify = new EventEmitter();
        this.datasource = new MatTableDataSource([]);
        this.logicFormRequest = {};
        this.isModalLoaderShow = false;
        this.collectionListModal = false;
        this.displayedColumns = ['sno', 'name', 'description', 'action'];
    }
    LogicListComponent.prototype.ngOnInit = function () {
        this.resourceService = this.globalService.getResourceService();
        this.datasource.data = this.botLogics;
    };
    LogicListComponent.prototype.openModel = function (logic, index) {
        var _this = this;
        if (logic === void 0) { logic = null; }
        if (index === void 0) { index = null; }
        this.logicFormRequest = {};
        this.collectionListModal = true;
        // this.logicForm.reset();
        this.fileErrorStatus = null;
        var data = {};
        if (logic && logic.id) {
            this.selectedLogicIndex = index;
            data = {
                id: logic.id,
                name: logic.name,
                description: logic.description,
                formId: logic.transformers[0].meta.formID
            };
        }
        var dialogRef = this.dialog.open(AddLogicComponent, {
            width: '850px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (logicFormData) {
            console.log('mat-dialog-result', logicFormData);
            if (logicFormData) {
                _this.onLogicAdd(logicFormData);
            }
        });
    };
    LogicListComponent.prototype.onLogicAdd = function (logicFormData) {
        var _this = this;
        var reqData = __assign(__assign({}, logicFormData), { transformers: [
                {
                    id: 'bbf56981-b8c9-40e9-8067-468c2c753659',
                    meta: {
                        form: 'https://hosted.my.form.here.com',
                        formID: logicFormData.formId
                    }
                }
            ], adapter: '44a9df72-3d7a-4ece-94c5-98cf26307324' });
        this.isModalLoaderShow = true;
        if (logicFormData.id) {
            this.uciService.updateLogic(logicFormData.id, { data: reqData }).subscribe(function (data) {
                _this.isModalLoaderShow = false;
                var existingLogic = reqData;
                delete existingLogic.id;
                _this.botLogics[_this.selectedLogicIndex] = Object.assign(_this.botLogics[_this.selectedLogicIndex], existingLogic);
                _this.onModify();
            }, function (error) {
                _this.isModalLoaderShow = false;
            });
        }
        else {
            this.uciService.createLogic({ data: reqData }).subscribe(function (data) {
                _this.isModalLoaderShow = false;
                var existingLogic = reqData;
                delete existingLogic.id;
                _this.botLogics.push(__assign({ id: data.data.id }, existingLogic));
                _this.onModify();
            }, function (error) {
                _this.isModalLoaderShow = false;
            });
        }
    };
    LogicListComponent.prototype.onDelete = function (logic, index) {
        var _this = this;
        this.uciService.deleteLogic(logic.id).subscribe(function (file) {
            _this.botLogics.splice(index, 1);
        });
    };
    LogicListComponent.prototype.onModify = function () {
        this.datasource.data = this.botLogics;
        this.modify.emit(this.botLogics);
    };
    LogicListComponent.ɵfac = function LogicListComponent_Factory(t) { return new (t || LogicListComponent)(i0.ɵɵdirectiveInject(i1.UciService), i0.ɵɵdirectiveInject(i2.GlobalService), i0.ɵɵdirectiveInject(i3.MatDialog)); };
    LogicListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LogicListComponent, selectors: [["lib-logic-list"]], inputs: { botLogics: "botLogics" }, outputs: { modify: "modify" }, decls: 12, vars: 4, consts: [[1, "uci-container"], ["cols", "2", "rowHeight", "4rem"], ["colspan", "1", 1, "font-1-2", "font-weight-bold"], [1, "w-100", "text-left"], ["colspan", "1", 1, "right", "aligned"], [1, "w-100", "text-right"], ["mat-raised-button", "", "class", "primary", 3, "click", 4, "ngIf"], ["cols", "1"], [4, "ngIf", "ngIfElse"], ["showTable", ""], ["mat-raised-button", "", 1, "primary", 3, "click"], [1, "text-center", 2, "margin", "auto", "padding", "2rem"], [1, "text-center"], ["alt", "Search Icon", "src", "assets/uci-console/images/empty.svg"], [1, "text-center", "mt-20"], ["mat-raised-button", "", 1, "mt-10", 3, "click"], [1, "computer", "only"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "action"], ["mat-cell", "", "class", "center aligned", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile", "only"], ["class", "mb-5", 4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "center", "aligned"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "uci-list-menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mb-5"], ["cols", "4", "rowHeight", "35"], ["colspan", "1"], ["colspan", "3", 1, "overflow-visible"], [1, "w-100", "d-flex", "justify-between", "align-middle"], ["suiDropdown", "", 1, "ui", "dropdown"], ["mat-icon-button", ""], ["suiDropdownMenu", "", 1, "menu"], [1, "item", 3, "click"], [1, "w-100", "wrap-text", "text-left"], ["colspan", "3"]], template: function LogicListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-grid-list", 1);
            i0.ɵɵelementStart(2, "mat-grid-tile", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-grid-tile", 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵtemplate(7, LogicListComponent_button_7_Template, 2, 1, "button", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-grid-list", 7);
            i0.ɵɵtemplate(9, LogicListComponent_ng_container_9_Template, 10, 2, "ng-container", 8);
            i0.ɵɵtemplate(10, LogicListComponent_ng_template_10_Template, 18, 4, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(11);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationFlow);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.botLogics && ctx.botLogics.length);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.botLogics && ctx.botLogics.length <= 0)("ngIfElse", _r2);
        } }, directives: [i4.MatGridList, i4.MatGridTile, i5.NgIf, i6.MatButton, i7.MatTable, i7.MatColumnDef, i7.MatHeaderCellDef, i7.MatCellDef, i7.MatHeaderRowDef, i7.MatRowDef, i5.NgForOf, i7.MatHeaderCell, i7.MatCell, i8.MatMenuTrigger, i9.MatIcon, i8._MatMenu, i8.MatMenuItem, i7.MatHeaderRow, i7.MatRow, i10.MatCard, i10.MatCardContent, i11.ɵbk, i11.ɵbj, i11.ɵbi], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.mat-column-action[_ngcontent-%COMP%]{width:5px}"] });
    return LogicListComponent;
}());
export { LogicListComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LogicListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-logic-list',
                templateUrl: './logic-list.component.html',
                styleUrls: ['./logic-list.component.scss']
            }]
    }], function () { return [{ type: i1.UciService }, { type: i2.GlobalService }, { type: i3.MatDialog }]; }, { botLogics: [{
            type: Input
        }], modify: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naWMtbGlzdC9sb2dpYy1saXN0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2xvZ2ljLWxpc3QvbG9naWMtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUc3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUVuRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDRTNDLGtDQUNJO0lBRDRFLHNMQUFxQjtJQUNqRyxZQUNKO0lBQUEsaUJBQVM7OztJQURMLGVBQ0o7SUFESSxzTEFDSjs7OztJQU1SLDZCQUNJO0lBQUEsd0NBQ0k7SUFBQSwrQkFDSTtJQUFBLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSwwQkFDSjtJQUFBLGlCQUFNO0lBQ04sK0JBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQU07SUFDVixpQkFBTTtJQUNOLGtDQUNJO0lBRG9DLDRMQUFxQjtJQUN6RCxZQUNKO0lBQUEsaUJBQVM7SUFDYixpQkFBTTtJQUNWLGlCQUFnQjtJQUNwQiwwQkFBZTs7O0lBUkssZUFDSjtJQURJLHFMQUNKO0lBR0EsZUFDSjtJQURJLHNMQUNKOzs7SUFRSSw4QkFBdUM7SUFBQSxZQUF3QztJQUFBLGlCQUFLOzs7SUFBN0MsZUFBd0M7SUFBeEMsaUxBQXdDOzs7SUFDL0UsOEJBQXVEO0lBQUEsWUFBVTtJQUFBLGlCQUFLOzs7SUFBZixlQUFVO0lBQVYsMENBQVU7OztJQUdqRSw4QkFBdUM7SUFBQSxZQUF3QztJQUFBLGlCQUFLOzs7SUFBN0MsZUFBd0M7SUFB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QUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO3dGQTdHUSxrQkFBa0I7MkRBQWxCLGtCQUFrQjtZQ1ovQiw4QkFDSTtZQUFBLHdDQUNJO1lBQUEsd0NBQ0k7WUFBQSw4QkFBNkI7WUFBQSxZQUFvRDtZQUFBLGlCQUFNO1lBQzNGLGlCQUFnQjtZQUNoQix3Q0FDSTtZQUFBLDhCQUNJO1lBQUEseUVBQ0k7WUFFUixpQkFBTTtZQUNWLGlCQUFnQjtZQUNwQixpQkFBZ0I7WUFDaEIsd0NBRUk7WUFBQSxzRkFDSTtZQWdCSix1SEFDSTtZQTJFUixpQkFBZ0I7WUFDcEIsaUJBQU07OztZQTFHbUMsZUFBb0Q7WUFBcEQsMEtBQW9EO1lBSW5DLGVBQXFDO1lBQXJDLDREQUFxQztZQVF6RSxlQUEwRDtZQUExRCxpRUFBMEQsaUJBQUE7OzZCRGZoRjtDQTBIQyxBQW5IRCxJQW1IQztTQTlHWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDN0M7O2tCQUVJLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7QWRkTG9naWNDb21wb25lbnR9IGZyb20gJy4uL2FkZC1sb2dpYy9hZGQtbG9naWMuY29tcG9uZW50JztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItbG9naWMtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2ljLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2ljLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpY0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGJvdExvZ2ljcyA9IFtdO1xuICAgIEBPdXRwdXQoKSBtb2RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBkYXRhc291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KFtdKTtcbiAgICBsb2dpY0Zvcm1SZXF1ZXN0ID0ge307XG4gICAgc2VsZWN0ZWRMb2dpY0luZGV4O1xuICAgIGZpbGVFcnJvclN0YXR1cztcbiAgICBpc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgIGNvbGxlY3Rpb25MaXN0TW9kYWwgPSBmYWxzZTtcbiAgICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc25vJywgJ25hbWUnLCAnZGVzY3JpcHRpb24nLCAnYWN0aW9uJ107XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLmRhdGFzb3VyY2UuZGF0YSA9IHRoaXMuYm90TG9naWNzO1xuICAgIH1cblxuICAgIG9wZW5Nb2RlbChsb2dpYyA9IG51bGwsIGluZGV4ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmxvZ2ljRm9ybVJlcXVlc3QgPSB7fTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uTGlzdE1vZGFsID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5sb2dpY0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgdGhpcy5maWxlRXJyb3JTdGF0dXMgPSBudWxsO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBpZiAobG9naWMgJiYgbG9naWMuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMb2dpY0luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBsb2dpYy5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBsb2dpYy5uYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBsb2dpYy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBmb3JtSWQ6IGxvZ2ljLnRyYW5zZm9ybWVyc1swXS5tZXRhLmZvcm1JRFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFkZExvZ2ljQ29tcG9uZW50LCB7XG4gICAgICAgICAgICB3aWR0aDogJzg1MHB4JyxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKGxvZ2ljRm9ybURhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21hdC1kaWFsb2ctcmVzdWx0JywgbG9naWNGb3JtRGF0YSk7XG4gICAgICAgICAgICBpZiAobG9naWNGb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Mb2dpY0FkZChsb2dpY0Zvcm1EYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Mb2dpY0FkZChsb2dpY0Zvcm1EYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlcURhdGEgPSB7XG4gICAgICAgICAgICAuLi5sb2dpY0Zvcm1EYXRhLFxuICAgICAgICAgICAgdHJhbnNmb3JtZXJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2JiZjU2OTgxLWI4YzktNDBlOS04MDY3LTQ2OGMyYzc1MzY1OScsXG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06ICdodHRwczovL2hvc3RlZC5teS5mb3JtLmhlcmUuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1JRDogbG9naWNGb3JtRGF0YS5mb3JtSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhZGFwdGVyOiAnNDRhOWRmNzItM2Q3YS00ZWNlLTk0YzUtOThjZjI2MzA3MzI0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSB0cnVlO1xuICAgICAgICBpZiAobG9naWNGb3JtRGF0YS5pZCkge1xuICAgICAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLnVwZGF0ZUxvZ2ljKGxvZ2ljRm9ybURhdGEuaWQsIHtkYXRhOiByZXFEYXRhfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0xvZ2ljID0gcmVxRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGV4aXN0aW5nTG9naWMuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90TG9naWNzW3RoaXMuc2VsZWN0ZWRMb2dpY0luZGV4XSA9IE9iamVjdC5hc3NpZ24odGhpcy5ib3RMb2dpY3NbdGhpcy5zZWxlY3RlZExvZ2ljSW5kZXhdLCBleGlzdGluZ0xvZ2ljKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vZGlmeSgpO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UuY3JlYXRlTG9naWMoe2RhdGE6IHJlcURhdGF9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG9naWMgPSByZXFEYXRhO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZXhpc3RpbmdMb2dpYy5pZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RMb2dpY3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS5kYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdMb2dpYyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Nb2RpZnkoKTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGUobG9naWMsIGluZGV4KSB7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS5kZWxldGVMb2dpYyhsb2dpYy5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMb2dpY3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbk1vZGlmeSgpIHtcbiAgICAgICAgdGhpcy5kYXRhc291cmNlLmRhdGEgPSB0aGlzLmJvdExvZ2ljcztcbiAgICAgICAgdGhpcy5tb2RpZnkuZW1pdCh0aGlzLmJvdExvZ2ljcyk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVjaS1jb250YWluZXJcIj5cbiAgICA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMlwiIHJvd0hlaWdodD1cIjRyZW1cIj5cbiAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIiBjbGFzcz1cImZvbnQtMS0yIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udmVyc2F0aW9uRmxvd319PC9kaXY+XG4gICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIiBjbGFzcz1cInJpZ2h0IGFsaWduZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInByaW1hcnlcIiAqbmdJZj1cImJvdExvZ2ljcyAmJiBib3RMb2dpY3MubGVuZ3RoXCIgKGNsaWNrKT1cIm9wZW5Nb2RlbCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5hZGRMb2dpY319XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgIDwvbWF0LWdyaWQtbGlzdD5cbiAgICA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJib3RMb2dpY3MgJiYgYm90TG9naWNzLmxlbmd0aCA8PSAwOyBlbHNlIHNob3dUYWJsZVwiPlxuICAgICAgICAgICAgPG1hdC1ncmlkLWxpc3QgY29scz1cIjFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbjogYXV0bzsgcGFkZGluZzogMnJlbTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlNlYXJjaCBJY29uXCIgc3JjPVwiYXNzZXRzL3VjaS1jb25zb2xlL2ltYWdlcy9lbXB0eS5zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lm5vTG9naWN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibXQtMTBcIiAoY2xpY2spPVwib3Blbk1vZGVsKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5hZGRMb2dpY319XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtZ3JpZC1saXN0PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzaG93VGFibGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXIgb25seVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YXNvdXJjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInNub1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnN0ZXB9fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudDsgbGV0IGkgPSBpbmRleFwiPiB7e2kgKyAxfX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lm5hbWV9fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVzY3JpcHRpb259fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZGVzY3JpcHRpb259fSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hY3Rpb259fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudDsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiY2VudGVyIGFsaWduZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiIGNsYXNzPVwidWNpLWxpc3QtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9wZW5Nb2RlbChlbGVtZW50LCBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVkaXR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvbkRlbGV0ZShlbGVtZW50LCBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmRlbGV0ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUgb25seVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGJvdExvZ2ljIG9mIGJvdExvZ2ljczsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwibWItNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiNFwiIHJvd0hlaWdodD1cIjM1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIzXCIgY2xhc3M9XCJvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3tib3RMb2dpYy5uYW1lfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkcm9wZG93blwiIHN1aURyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVcIiBzdWlEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJvcGVuTW9kZWwoYm90TG9naWMsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVkaXR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJvbkRlbGV0ZShib3RMb2dpYywgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVsZXRlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgd3JhcC10ZXh0IHRleHQtbGVmdFwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5kZXNjcmlwdGlvbn19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2JvdExvZ2ljLmRlc2NyaXB0aW9ufX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9tYXQtZ3JpZC1saXN0PlxuPC9kaXY+XG4iXX0=
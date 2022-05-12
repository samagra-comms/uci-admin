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
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function LogicListComponent_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.openModel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.btn == null ? null : ctx_r0.resourceService.frmelmnts.btn.addLogic, " ");
} }
function LogicListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function LogicListComponent_ng_container_9_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.openModel(); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
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
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.resourceService.frmelmnts == null ? null : ctx_r8.resourceService.frmelmnts.lbl == null ? null : ctx_r8.resourceService.frmelmnts.lbl.step, "");
} }
function LogicListComponent_ng_template_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r20 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r20 + 1, " ");
} }
function LogicListComponent_ng_template_10_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.resourceService.frmelmnts == null ? null : ctx_r10.resourceService.frmelmnts.lbl == null ? null : ctx_r10.resourceService.frmelmnts.lbl.name, "");
} }
function LogicListComponent_ng_template_10_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r21.name, " ");
} }
function LogicListComponent_ng_template_10_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.resourceService.frmelmnts == null ? null : ctx_r12.resourceService.frmelmnts.lbl == null ? null : ctx_r12.resourceService.frmelmnts.lbl.description, "");
} }
function LogicListComponent_ng_template_10_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r22.description, " ");
} }
function LogicListComponent_ng_template_10_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.action, "");
} }
function LogicListComponent_ng_template_10_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵelementStart(1, "button", 32);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 33, 34);
    i0.ɵɵelementStart(6, "button", 35);
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r27); const element_r23 = ctx.$implicit; const i_r24 = ctx.index; const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.openModel(element_r23, i_r24); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 35);
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r27); const element_r23 = ctx.$implicit; const i_r24 = ctx.index; const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.onDelete(element_r23, i_r24); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r25 = i0.ɵɵreference(5);
    const ctx_r15 = i0.ɵɵnextContext(2);
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
    const _r33 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_16_listener() { i0.ɵɵrestoreView(_r33); const botLogic_r30 = ctx.$implicit; const i_r31 = ctx.index; const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.openModel(botLogic_r30, i_r31); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 46);
    i0.ɵɵlistener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_18_listener() { i0.ɵɵrestoreView(_r33); const botLogic_r30 = ctx.$implicit; const i_r31 = ctx.index; const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.onDelete(botLogic_r30, i_r31); });
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
    const botLogic_r30 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
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
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r3.datasource);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r3.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r3.displayedColumns);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.botLogics);
} }
export class LogicListComponent {
    constructor(uciService, globalService, dialog) {
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
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        this.datasource.data = this.botLogics;
    }
    openModel(logic = null, index = null) {
        this.logicFormRequest = {};
        this.collectionListModal = true;
        // this.logicForm.reset();
        this.fileErrorStatus = null;
        let data = {};
        if (logic && logic.id) {
            this.selectedLogicIndex = index;
            data = {
                id: logic.id,
                name: logic.name,
                description: logic.description,
                formId: logic.transformers[0].meta.formID
            };
        }
        const dialogRef = this.dialog.open(AddLogicComponent, {
            width: '850px',
            data
        });
        dialogRef.afterClosed().subscribe(logicFormData => {
            console.log('mat-dialog-result', logicFormData);
            if (logicFormData) {
                this.onLogicAdd(logicFormData);
            }
        });
    }
    onLogicAdd(logicFormData) {
        const reqData = Object.assign(Object.assign({}, logicFormData), { transformers: [
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
            this.uciService.updateLogic(logicFormData.id, { data: reqData }).subscribe((data) => {
                this.isModalLoaderShow = false;
                const existingLogic = reqData;
                delete existingLogic.id;
                this.botLogics[this.selectedLogicIndex] = Object.assign(this.botLogics[this.selectedLogicIndex], existingLogic);
                this.onModify();
            }, error => {
                this.isModalLoaderShow = false;
            });
        }
        else {
            this.uciService.createLogic({ data: reqData }).subscribe((data) => {
                this.isModalLoaderShow = false;
                const existingLogic = reqData;
                delete existingLogic.id;
                this.botLogics.push(Object.assign({ id: data.data.id }, existingLogic));
                this.onModify();
            }, error => {
                this.isModalLoaderShow = false;
            });
        }
    }
    onDelete(logic, index) {
        this.uciService.deleteLogic(logic.id).subscribe(file => {
            this.botLogics.splice(index, 1);
        });
    }
    onModify() {
        this.datasource.data = this.botLogics;
        this.modify.emit(this.botLogics);
    }
}
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
        const _r2 = i0.ɵɵreference(11);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationFlow);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.botLogics && ctx.botLogics.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.botLogics && ctx.botLogics.length <= 0)("ngIfElse", _r2);
    } }, directives: [i4.MatGridList, i4.MatGridTile, i5.NgIf, i6.MatButton, i7.MatTable, i7.MatColumnDef, i7.MatHeaderCellDef, i7.MatCellDef, i7.MatHeaderRowDef, i7.MatRowDef, i5.NgForOf, i7.MatHeaderCell, i7.MatCell, i8.MatMenuTrigger, i9.MatIcon, i8._MatMenu, i8.MatMenuItem, i7.MatHeaderRow, i7.MatRow, i10.MatCard, i10.MatCardContent, i11.ɵbk, i11.ɵbj, i11.ɵbi], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.mat-column-action[_ngcontent-%COMP%]{width:5px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naWMtbGlzdC9sb2dpYy1saXN0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2xvZ2ljLWxpc3QvbG9naWMtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzdFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRW5FLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNFM0Msa0NBQ0k7SUFENEUsd0xBQXFCO0lBQ2pHLFlBQ0o7SUFBQSxpQkFBUzs7O0lBREwsZUFDSjtJQURJLHNMQUNKOzs7O0lBTVIsNkJBQ0k7SUFBQSx3Q0FDSTtJQUFBLCtCQUNJO0lBQUEsK0JBQ0k7SUFBQSwrQkFDSTtJQUFBLDBCQUNKO0lBQUEsaUJBQU07SUFDTiwrQkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTTtJQUNWLGlCQUFNO0lBQ04sa0NBQ0k7SUFEb0MsOExBQXFCO0lBQ3pELFlBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFNO0lBQ1YsaUJBQWdCO0lBQ3BCLDBCQUFlOzs7SUFSSyxlQUNKO0lBREkscUxBQ0o7SUFHQSxlQUNKO0lBREksc0xBQ0o7OztJQVFJLDhCQUF1QztJQUFBLFlBQXdDO0lBQUEsaUJBQUs7OztJQUE3QyxlQUF3QztJQUF4QyxpTEFBd0M7OztJQUMvRSw4QkFBdUQ7SUFBQSxZQUFVO0lBQUEsaUJBQUs7OztJQUFmLGVBQVU7SUFBViwwQ0FBVTs7O0lBR2pFLDhCQUF1QztJQUFBLFlBQXdDO0lBQUEsaUJBQUs7OztJQUE3QyxlQUF3QztJQUF4QyxvTEFBd0M7OztJQUMvRSw4QkFBd0M7SUFBQSxZQUFpQjtJQUFBLGlCQUFLOzs7SUFBdEIsZUFBaUI7SUFBakIsaURBQWlCOzs7SUFHekQsOEJBQXVDO0lBQUEsWUFBK0M7SUFBQSxpQkFBSzs7O0lBQXBELGVBQStDO0lBQS9DLDJMQUErQzs7O0lBQ3RGLDhCQUF3QztJQUFBLFlBQXdCO0lBQUEsaUJBQUs7OztJQUE3QixlQUF3QjtJQUF4Qix3REFBd0I7OztJQUdoRSw4QkFBdUM7SUFBQSxZQUEwQztJQUFBLGlCQUFLOzs7SUFBL0MsZUFBMEM7SUFBMUMsc0xBQTBDOzs7O0lBQ2pGLDhCQUNJO0lBQUEsa0NBQ0k7SUFBQSxnQ0FBVTtJQUFBLHlCQUFTO0lBQUEsaUJBQVc7SUFDbEMsaUJBQVM7SUFDVCx3Q0FDSTtJQUFBLGtDQUNJO0lBRGtCLHNSQUErQjtJQUNqRCxZQUNKO0lBQUEsaUJBQVM7SUFDVCxrQ0FDSTtJQURrQixxUkFBOEI7SUFDaEQsWUFDSjtJQUFBLGlCQUFTO0lBQ2IsaUJBQVc7SUFDZixpQkFBSzs7OztJQVhrQixlQUEwQjtJQUExQix3Q0FBMEI7SUFLckMsZUFDSjtJQURJLHFMQUNKO0lBRUksZUFDSjtJQURJLHVMQUNKOzs7SUFJWix5QkFBNEQ7OztJQUM1RCx5QkFBa0U7Ozs7SUFLdEUsK0JBQ0k7SUFBQSxnQ0FDSTtJQUFBLHdDQUNJO0lBQUEseUNBQ0k7SUFBQSx5Q0FDSTtJQUFBLDhCQUE2QjtJQUFBLFlBQXdDO0lBQUEsaUJBQU07SUFDL0UsaUJBQWdCO0lBQ2hCLHlDQUNJO0lBQUEsK0JBQ0k7SUFBQSwwQkFBSTtJQUFBLGFBQWlCO0lBQUEsaUJBQUs7SUFDMUIsZ0NBQ0k7SUFBQSxtQ0FDSTtJQUFBLGlDQUFVO0lBQUEsMEJBQVM7SUFBQSxpQkFBVztJQUNsQyxpQkFBUztJQUNULGdDQUNJO0lBQUEsZ0NBQ0k7SUFEYyx1UkFBZ0M7SUFDOUMsYUFDSjtJQUFBLGlCQUFNO0lBQ04sZ0NBQ0k7SUFEYyxzUkFBK0I7SUFDN0MsYUFDSjtJQUFBLGlCQUFNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQWdCO0lBQ2hCLDBDQUNJO0lBQUEsZ0NBQXVDO0lBQUEsYUFBK0M7SUFBQSxpQkFBTTtJQUNoRyxpQkFBZ0I7SUFDaEIsMENBQ0k7SUFBQSwrQkFDSTtJQUFBLGFBQ0o7SUFBQSxpQkFBTTtJQUNWLGlCQUFnQjtJQUNwQixpQkFBZ0I7SUFDcEIsaUJBQW1CO0lBQ3ZCLGlCQUFXO0lBQ2YsaUJBQU07Ozs7SUEvQjJDLGVBQXdDO0lBQXhDLDBLQUF3QztJQUk3RCxlQUFpQjtJQUFqQix1Q0FBaUI7SUFPVCxlQUNKO0lBREkscUxBQ0o7SUFFSSxlQUNKO0lBREksdUxBQ0o7SUFNMkIsZUFBK0M7SUFBL0MsaUxBQStDO0lBSWxGLGVBQ0o7SUFESSx5REFDSjs7O0lBbkV4QiwrQkFDSTtJQUFBLGlDQUNJO0lBQUEsaUNBQ0k7SUFBQSxpRkFBdUM7SUFDdkMsaUZBQXVEO0lBQzNELDBCQUFlO0lBQ2YsaUNBQ0k7SUFBQSxpRkFBdUM7SUFDdkMsaUZBQXdDO0lBQzVDLDBCQUFlO0lBQ2YsaUNBQ0k7SUFBQSxpRkFBdUM7SUFDdkMsbUZBQXdDO0lBQzVDLDBCQUFlO0lBQ2Ysa0NBQ0k7SUFBQSxtRkFBdUM7SUFDdkMsb0ZBQ0k7SUFZUiwwQkFBZTtJQUNmLG1GQUF1RDtJQUN2RCxtRkFBNkQ7SUFDakUsaUJBQVE7SUFDWixpQkFBTTtJQUVOLGdDQUNJO0lBQUEsc0ZBQ0k7SUFvQ1IsaUJBQU07OztJQXhFZSxlQUF5QjtJQUF6Qiw4Q0FBeUI7SUE2Qm5CLGdCQUFtQztJQUFuQyx5REFBbUM7SUFDMUMsZUFBZ0Q7SUFBaEQsMERBQWdEO0lBSzNELGVBQWlEO0lBQWpELDBDQUFpRDs7QUR6RHRFLE1BQU0sT0FBTyxrQkFBa0I7SUFZM0IsWUFDWSxVQUFzQixFQUN0QixhQUE0QixFQUM3QixNQUFpQjtRQUZoQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFkbkIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzNDLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUd0QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHFCQUFnQixHQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFRdEUsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSTtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLEdBQUc7Z0JBQ0gsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNaLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDaEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2dCQUM5QixNQUFNLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTthQUM1QyxDQUFDO1NBQ0w7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNsRCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUk7U0FDUCxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDaEQsSUFBSSxhQUFhLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVUsQ0FBQyxhQUFhO1FBQ3BCLE1BQU0sT0FBTyxtQ0FDTixhQUFhLEtBQ2hCLFlBQVksRUFBRTtnQkFDVjtvQkFDSSxFQUFFLEVBQUUsc0NBQXNDO29CQUMxQyxJQUFJLEVBQUU7d0JBQ0YsSUFBSSxFQUFFLGlDQUFpQzt3QkFDdkMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNO3FCQUMvQjtpQkFDSjthQUNKLEVBQ0QsT0FBTyxFQUFFLHNDQUFzQyxHQUNsRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLGFBQWEsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDcEUsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUM7Z0JBQzlCLE9BQU8sYUFBYSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ2hILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUNuQyxDQUFDLENBQ0osQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDbEQsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUM7Z0JBQzlCLE9BQU8sYUFBYSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGlCQUNmLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFDYixhQUFhLEVBQ2xCLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDUCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQ25DLENBQUMsQ0FDSixDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzNDLElBQUksQ0FBQyxFQUFFO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOztvRkE3R1Esa0JBQWtCO3VEQUFsQixrQkFBa0I7UUNaL0IsOEJBQ0k7UUFBQSx3Q0FDSTtRQUFBLHdDQUNJO1FBQUEsOEJBQTZCO1FBQUEsWUFBb0Q7UUFBQSxpQkFBTTtRQUMzRixpQkFBZ0I7UUFDaEIsd0NBQ0k7UUFBQSw4QkFDSTtRQUFBLHlFQUNJO1FBRVIsaUJBQU07UUFDVixpQkFBZ0I7UUFDcEIsaUJBQWdCO1FBQ2hCLHdDQUVJO1FBQUEsc0ZBQ0k7UUFnQkosdUhBQ0k7UUEyRVIsaUJBQWdCO1FBQ3BCLGlCQUFNOzs7UUExR21DLGVBQW9EO1FBQXBELDBLQUFvRDtRQUluQyxlQUFxQztRQUFyQyw0REFBcUM7UUFRekUsZUFBMEQ7UUFBMUQsaUVBQTBELGlCQUFBOztrRERIbkUsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM3Qzs7a0JBRUksS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHtBZGRMb2dpY0NvbXBvbmVudH0gZnJvbSAnLi4vYWRkLWxvZ2ljL2FkZC1sb2dpYy5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1sb2dpYy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naWMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naWMtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2ljTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgYm90TG9naWNzID0gW107XG4gICAgQE91dHB1dCgpIG1vZGlmeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIGRhdGFzb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oW10pO1xuICAgIGxvZ2ljRm9ybVJlcXVlc3QgPSB7fTtcbiAgICBzZWxlY3RlZExvZ2ljSW5kZXg7XG4gICAgZmlsZUVycm9yU3RhdHVzO1xuICAgIGlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgY29sbGVjdGlvbkxpc3RNb2RhbCA9IGZhbHNlO1xuICAgIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydzbm8nLCAnbmFtZScsICdkZXNjcmlwdGlvbicsICdhY3Rpb24nXTtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZS5kYXRhID0gdGhpcy5ib3RMb2dpY3M7XG4gICAgfVxuXG4gICAgb3Blbk1vZGVsKGxvZ2ljID0gbnVsbCwgaW5kZXggPSBudWxsKSB7XG4gICAgICAgIHRoaXMubG9naWNGb3JtUmVxdWVzdCA9IHt9O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25MaXN0TW9kYWwgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmxvZ2ljRm9ybS5yZXNldCgpO1xuICAgICAgICB0aGlzLmZpbGVFcnJvclN0YXR1cyA9IG51bGw7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIGlmIChsb2dpYyAmJiBsb2dpYy5pZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExvZ2ljSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGxvZ2ljLmlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGxvZ2ljLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGxvZ2ljLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGZvcm1JZDogbG9naWMudHJhbnNmb3JtZXJzWzBdLm1ldGEuZm9ybUlEXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQWRkTG9naWNDb21wb25lbnQsIHtcbiAgICAgICAgICAgIHdpZHRoOiAnODUwcHgnLFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUobG9naWNGb3JtRGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWF0LWRpYWxvZy1yZXN1bHQnLCBsb2dpY0Zvcm1EYXRhKTtcbiAgICAgICAgICAgIGlmIChsb2dpY0Zvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkxvZ2ljQWRkKGxvZ2ljRm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkxvZ2ljQWRkKGxvZ2ljRm9ybURhdGEpIHtcbiAgICAgICAgY29uc3QgcmVxRGF0YSA9IHtcbiAgICAgICAgICAgIC4uLmxvZ2ljRm9ybURhdGEsXG4gICAgICAgICAgICB0cmFuc2Zvcm1lcnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnYmJmNTY5ODEtYjhjOS00MGU5LTgwNjctNDY4YzJjNzUzNjU5JyxcbiAgICAgICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogJ2h0dHBzOi8vaG9zdGVkLm15LmZvcm0uaGVyZS5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlEOiBsb2dpY0Zvcm1EYXRhLmZvcm1JZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFkYXB0ZXI6ICc0NGE5ZGY3Mi0zZDdhLTRlY2UtOTRjNS05OGNmMjYzMDczMjQnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IHRydWU7XG4gICAgICAgIGlmIChsb2dpY0Zvcm1EYXRhLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UudXBkYXRlTG9naWMobG9naWNGb3JtRGF0YS5pZCwge2RhdGE6IHJlcURhdGF9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG9naWMgPSByZXFEYXRhO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZXhpc3RpbmdMb2dpYy5pZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RMb2dpY3NbdGhpcy5zZWxlY3RlZExvZ2ljSW5kZXhdID0gT2JqZWN0LmFzc2lnbih0aGlzLmJvdExvZ2ljc1t0aGlzLnNlbGVjdGVkTG9naWNJbmRleF0sIGV4aXN0aW5nTG9naWMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTW9kaWZ5KCk7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5jcmVhdGVMb2dpYyh7ZGF0YTogcmVxRGF0YX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdMb2dpYyA9IHJlcURhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBleGlzdGluZ0xvZ2ljLmlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdExvZ2ljcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5leGlzdGluZ0xvZ2ljLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vZGlmeSgpO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlbGV0ZShsb2dpYywgaW5kZXgpIHtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLmRlbGV0ZUxvZ2ljKGxvZ2ljLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBmaWxlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExvZ2ljcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uTW9kaWZ5KCkge1xuICAgICAgICB0aGlzLmRhdGFzb3VyY2UuZGF0YSA9IHRoaXMuYm90TG9naWNzO1xuICAgICAgICB0aGlzLm1vZGlmeS5lbWl0KHRoaXMuYm90TG9naWNzKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidWNpLWNvbnRhaW5lclwiPlxuICAgIDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIyXCIgcm93SGVpZ2h0PVwiNHJlbVwiPlxuICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiIGNsYXNzPVwiZm9udC0xLTIgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtbGVmdFwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb252ZXJzYXRpb25GbG93fX08L2Rpdj5cbiAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiIGNsYXNzPVwicmlnaHQgYWxpZ25lZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwicHJpbWFyeVwiICpuZ0lmPVwiYm90TG9naWNzICYmIGJvdExvZ2ljcy5sZW5ndGhcIiAoY2xpY2spPVwib3Blbk1vZGVsKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmFkZExvZ2ljfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgPC9tYXQtZ3JpZC1saXN0PlxuICAgIDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIxXCI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJvdExvZ2ljcyAmJiBib3RMb2dpY3MubGVuZ3RoIDw9IDA7IGVsc2Ugc2hvd1RhYmxlXCI+XG4gICAgICAgICAgICA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPVwibWFyZ2luOiBhdXRvOyBwYWRkaW5nOiAycmVtO1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiU2VhcmNoIEljb25cIiBzcmM9XCJhc3NldHMvdWNpLWNvbnNvbGUvaW1hZ2VzL2VtcHR5LnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ubm9Mb2dpY319XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJtdC0xMFwiIChjbGljayk9XCJvcGVuTW9kZWwoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmFkZExvZ2ljfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1ncmlkLWxpc3Q+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3Nob3dUYWJsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlciBvbmx5XCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhc291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic25vXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uc3RlcH19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50OyBsZXQgaSA9IGluZGV4XCI+IHt7aSArIDF9fSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ubmFtZX19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5kZXNjcmlwdGlvbn19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5kZXNjcmlwdGlvbn19IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFjdGlvbn19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50OyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJjZW50ZXIgYWxpZ25lZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCIgY2xhc3M9XCJ1Y2ktbGlzdC1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwib3Blbk1vZGVsKGVsZW1lbnQsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZWRpdH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uRGVsZXRlKGVsZW1lbnQsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVsZXRlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZSBvbmx5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYm90TG9naWMgb2YgYm90TG9naWNzOyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC1saXN0IGNvbHM9XCI0XCIgcm93SGVpZ2h0PVwiMzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjNcIiBjbGFzcz1cIm92ZXJmbG93LXZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1iZXR3ZWVuIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57e2JvdExvZ2ljLm5hbWV9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGRyb3Bkb3duXCIgc3VpRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVwiIHN1aURyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cIm9wZW5Nb2RlbChib3RMb2dpYywgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZWRpdH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cIm9uRGVsZXRlKGJvdExvZ2ljLCBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5kZWxldGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB3cmFwLXRleHQgdGV4dC1sZWZ0XCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmRlc2NyaXB0aW9ufX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Ym90TG9naWMuZGVzY3JpcHRpb259fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L21hdC1ncmlkLWxpc3Q+XG48L2Rpdj5cbiJdfQ==
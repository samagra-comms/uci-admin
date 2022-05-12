import { Component, ViewChild } from '@angular/core';
import { Helper } from '../../utils/helper';
import * as i0 from "@angular/core";
import * as i1 from "../../services/uci.service";
import * as i2 from "@angular/router";
import * as i3 from "../../services/global.service";
import * as i4 from "@angular/material/grid-list";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/table";
import * as i10 from "@angular/common";
import * as i11 from "@angular/material/paginator";
import * as i12 from "@angular/material/menu";
import * as i13 from "@angular/material/icon";
import * as i14 from "@angular/material/card";
const _c0 = ["botTable"];
function ConversationListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.lbl == null ? null : ctx_r1.resourceService.frmelmnts.lbl.name, "");
} }
function ConversationListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r18.name, " ");
} }
function ConversationListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.resourceService.frmelmnts == null ? null : ctx_r3.resourceService.frmelmnts.lbl == null ? null : ctx_r3.resourceService.frmelmnts.lbl.status, " ");
} }
function ConversationListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", "status-" + (element_r19.status ? element_r19.status.toLowerCase() : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r19.status, " ");
} }
function ConversationListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.resourceService.frmelmnts == null ? null : ctx_r5.resourceService.frmelmnts.lbl == null ? null : ctx_r5.resourceService.frmelmnts.lbl.description, "");
} }
function ConversationListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r20.description, " ");
} }
function ConversationListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.resourceService.frmelmnts == null ? null : ctx_r7.resourceService.frmelmnts.lbl == null ? null : ctx_r7.resourceService.frmelmnts.lbl.startingMessage, " ");
} }
function ConversationListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r21.startingMessage, " ");
} }
function ConversationListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.lbl == null ? null : ctx_r9.resourceService.frmelmnts.lbl.botUrl, " ");
} }
function ConversationListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 33);
    i0.ɵɵlistener("click", function ConversationListComponent_td_30_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r25); const i_r23 = ctx.index; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onCopy("copyUrl-" + i_r23); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", "copyUrl-" + i_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r22.url);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.resourceService.frmelmnts == null ? null : ctx_r10.resourceService.frmelmnts.btn == null ? null : ctx_r10.resourceService.frmelmnts.btn.copy, " ");
} }
function ConversationListComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.resourceService.frmelmnts == null ? null : ctx_r11.resourceService.frmelmnts.lbl == null ? null : ctx_r11.resourceService.frmelmnts.lbl.botId, "");
} }
function ConversationListComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 33);
    i0.ɵɵlistener("click", function ConversationListComponent_td_33_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r29); const i_r27 = ctx.index; const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onCopy("copyId-" + i_r27); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", "copyId-" + i_r27);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r26.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.resourceService.frmelmnts == null ? null : ctx_r12.resourceService.frmelmnts.btn == null ? null : ctx_r12.resourceService.frmelmnts.btn.copy, " ");
} }
function ConversationListComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.resourceService.frmelmnts == null ? null : ctx_r13.resourceService.frmelmnts.lbl == null ? null : ctx_r13.resourceService.frmelmnts.lbl.action, "");
} }
function ConversationListComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵelementStart(1, "button", 35);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 36, 37);
    i0.ɵɵelementStart(6, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r34); const element_r30 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.onEdit(element_r30); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r34); const element_r30 = ctx.$implicit; const i_r31 = ctx.index; const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onDelete(element_r30, i_r31); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r34); const element_r30 = ctx.$implicit; const i_r31 = ctx.index; const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onStatusChange(element_r30, i_r31); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r34); const element_r30 = ctx.$implicit; const i_r31 = ctx.index; const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.onReport(element_r30, i_r31); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const _r32 = i0.ɵɵreference(5);
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r32);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.edit, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.delete, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r30.status === "Live" ? ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.disable : ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.enable, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.report, " ");
} }
function ConversationListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 39);
} }
function ConversationListComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 40);
} }
function ConversationListComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "mat-card");
    i0.ɵɵelementStart(2, "mat-card-content");
    i0.ɵɵelementStart(3, "mat-grid-list", 42);
    i0.ɵɵelementStart(4, "mat-grid-tile", 2);
    i0.ɵɵelementStart(5, "div", 3);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-grid-tile", 43);
    i0.ɵɵelementStart(8, "div", 44);
    i0.ɵɵelementStart(9, "h5");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 35);
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-menu", 36, 45);
    i0.ɵɵelementStart(16, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r43); const chatBot_r39 = ctx.$implicit; const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onEdit(chatBot_r39); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r43); const chatBot_r39 = ctx.$implicit; const i_r40 = ctx.index; const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onDelete(chatBot_r39, i_r40); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r43); const chatBot_r39 = ctx.$implicit; const i_r40 = ctx.index; const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onStatusChange(chatBot_r39, i_r40); });
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r43); const chatBot_r39 = ctx.$implicit; const i_r40 = ctx.index; const ctx_r46 = i0.ɵɵnextContext(); return ctx_r46.onReport(chatBot_r39, i_r40); });
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-grid-tile", 2);
    i0.ɵɵelementStart(25, "div", 3);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "mat-grid-tile", 46);
    i0.ɵɵelementStart(28, "div", 3);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "mat-grid-tile", 2);
    i0.ɵɵelementStart(31, "div", 3);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "mat-grid-tile", 46);
    i0.ɵɵelementStart(34, "div", 44);
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵelementStart(38, "button", 47);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chatBot_r39 = ctx.$implicit;
    const _r41 = i0.ɵɵreference(15);
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(chatBot_r39.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r41);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.edit, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.delete, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", chatBot_r39.status === "Live" ? ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.disable : ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.enable, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.report, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", chatBot_r39.description, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.startingMessage);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(chatBot_r39.startingMessage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", "status-" + (chatBot_r39.status ? chatBot_r39.status.toLowerCase() : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chatBot_r39.status, " ");
} }
export class ConversationListComponent {
    constructor(uciService, router, globalService) {
        this.uciService = uciService;
        this.router = router;
        this.globalService = globalService;
        this.chatBots = [];
        this.displayedColumns = ['name', 'status', 'description', 'startingMessage', 'botUrl', 'botId', 'action'];
        this.pager = {
            pageSizeOptions: [5, 10, 25, 30],
            currentPage: 1,
            totalItems: 0,
            pageSize: 10
        };
        this.column = '';
        this.sortDirection = '';
        this.reverse = false;
    }
    ngOnInit() {
        this.user = this.globalService.getUser();
        if (!this.user) {
            this.router.navigate(['uci-admin']);
            return;
        }
        this.resourceService = this.globalService.getResourceService();
        this.getAllChatBots();
    }
    getAllChatBots() {
        const param = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };
        if (this.search) {
            param.name = this.search;
            this.uciService.searchConversation(param).subscribe(data => this.parseConversations(data));
        }
        else {
            this.uciService.fetchConversation(param).subscribe(data => this.parseConversations(data));
        }
    }
    parseConversations(data) {
        this.chatBots = [];
        data.data.forEach(bot => {
            const obj = Object.assign(Object.assign({}, bot), { segmentText: '', userCount: 0, status: bot.status || 'Draft' });
            obj.status = bot.status === 'enabled' ? 'Live' : bot.status === 'disabled' ? 'Disabled' : 'Draft';
            const segmentNames = [];
            bot.userSegments.forEach(userSegment => {
                segmentNames.push(userSegment.name);
                obj.userCount += (userSegment.count || 0);
            });
            obj.segmentText = segmentNames.join(', ');
            obj.url = Helper.makBotUrl(bot.startingMessage || '', this.globalService.getBotPhoneNumber());
            obj.botId = bot.id || '';
            this.chatBots.push(obj);
        });
        this.pager.totalItems = data.total;
    }
    sortColumns(column) {
        this.column = column;
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.reverse = !this.reverse;
    }
    navigateToPage(pageEvent) {
        this.pager.currentPage = pageEvent.pageIndex + 1;
        this.getAllChatBots();
    }
    getSearch() {
        this.pager.currentPage = 1;
        this.getAllChatBots();
    }
    onAddNew() {
        this.router.navigateByUrl('uci-admin/add');
    }
    onEdit(conversation) {
        this.router.navigateByUrl(`uci-admin/${conversation.id}/edit`);
    }
    onStatusChange(conversation, index) {
        if (conversation.status === 'Live') {
            this.uciService.pauseConversation(conversation.id).subscribe(data => {
                this.chatBots[index].status = 'Disabled';
                this.updateDatasource();
            });
        }
        else {
            this.uciService.startConversation(conversation.id).subscribe(data => {
                this.chatBots[index].status = 'Live';
                this.updateDatasource();
            });
        }
    }
    onDelete(conversation, index) {
        this.uciService.deleteConversation(conversation.id).subscribe(data => {
            this.chatBots.splice(index, 1);
            this.updateDatasource();
        });
    }
    onCopy(id) {
        Helper.copyData(id);
    }
    updateDatasource() {
        this.botTable.renderRows();
    }
    onReport(conversation, i) {
        this.router.navigateByUrl(`uci-admin/${conversation.id}/reports`);
    }
}
ConversationListComponent.ɵfac = function ConversationListComponent_Factory(t) { return new (t || ConversationListComponent)(i0.ɵɵdirectiveInject(i1.UciService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.GlobalService)); };
ConversationListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ConversationListComponent, selectors: [["lib-conversation-list"]], viewQuery: function ConversationListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.botTable = _t.first);
    } }, decls: 43, vars: 12, consts: [[1, "uci-container"], ["cols", "2", "rowHeight", "4rem"], ["colspan", "1"], [1, "w-100", "text-left"], ["matInput", "", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter"], ["mat-button", "", "matSuffix", "", "mat-stroked-button", "", "aria-label", "search", 1, "uci-action-button", "computer", "only", 3, "click"], [1, "pb-10", "text-right", "w-100"], [1, "right-floated", "pt-0"], ["mat-raised-button", "", 1, "uci-action-button", 3, "click"], ["cols", "1"], ["mat-table", "", 1, "computer", "only", 3, "dataSource"], ["botTable", ""], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "startingMessage"], ["matColumnDef", "botUrl"], ["matColumnDef", "botId"], ["matColumnDef", "action"], ["mat-cell", "", "class", "center aligned", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile", "only"], ["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "uci-mat-pagination"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], [1, "hide", 3, "id"], ["mat-raised-button", "", 1, "uci-copy-button", 3, "click"], ["mat-cell", "", 1, "center", "aligned"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "uci-list-menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mb-5"], ["cols", "4", "rowHeight", "35"], ["colspan", "3", 1, "overflow-visible"], [1, "w-100", "d-flex", "justify-between", "align-middle"], ["menuMobile", "matMenu"], ["colspan", "3"], ["mat-flat-button", "", 1, "small-btn", 3, "ngClass"]], template: function ConversationListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-grid-list", 1);
        i0.ɵɵelementStart(2, "mat-grid-tile", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "mat-form-field");
        i0.ɵɵelementStart(5, "input", 4);
        i0.ɵɵlistener("ngModelChange", function ConversationListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.search = $event; })("keyup.enter", function ConversationListComponent_Template_input_keyup_enter_5_listener() { return ctx.getSearch(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 5);
        i0.ɵɵlistener("click", function ConversationListComponent_Template_button_click_6_listener() { return ctx.getSearch(); });
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-grid-tile", 2);
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "button", 8);
        i0.ɵɵlistener("click", function ConversationListComponent_Template_button_click_11_listener() { return ctx.onAddNew(); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-grid-list", 9);
        i0.ɵɵelementStart(14, "table", 10, 11);
        i0.ɵɵelementContainerStart(16, 12);
        i0.ɵɵtemplate(17, ConversationListComponent_th_17_Template, 2, 1, "th", 13);
        i0.ɵɵtemplate(18, ConversationListComponent_td_18_Template, 2, 1, "td", 14);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(19, 15);
        i0.ɵɵtemplate(20, ConversationListComponent_th_20_Template, 2, 1, "th", 13);
        i0.ɵɵtemplate(21, ConversationListComponent_td_21_Template, 2, 2, "td", 16);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(22, 17);
        i0.ɵɵtemplate(23, ConversationListComponent_th_23_Template, 2, 1, "th", 13);
        i0.ɵɵtemplate(24, ConversationListComponent_td_24_Template, 2, 1, "td", 14);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(25, 18);
        i0.ɵɵtemplate(26, ConversationListComponent_th_26_Template, 2, 1, "th", 13);
        i0.ɵɵtemplate(27, ConversationListComponent_td_27_Template, 2, 1, "td", 14);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(28, 19);
        i0.ɵɵtemplate(29, ConversationListComponent_th_29_Template, 2, 1, "th", 13);
        i0.ɵɵtemplate(30, ConversationListComponent_td_30_Template, 5, 3, "td", 14);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(31, 20);
        i0.ɵɵtemplate(32, ConversationListComponent_th_32_Template, 2, 1, "th", 13);
        i0.ɵɵtemplate(33, ConversationListComponent_td_33_Template, 5, 3, "td", 14);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(34, 21);
        i0.ɵɵtemplate(35, ConversationListComponent_th_35_Template, 2, 1, "th", 13);
        i0.ɵɵtemplate(36, ConversationListComponent_td_36_Template, 14, 5, "td", 22);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(37, ConversationListComponent_tr_37_Template, 1, 0, "tr", 23);
        i0.ɵɵtemplate(38, ConversationListComponent_tr_38_Template, 1, 0, "tr", 24);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "div", 25);
        i0.ɵɵtemplate(40, ConversationListComponent_div_40_Template, 40, 13, "div", 26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div", 27);
        i0.ɵɵelementStart(42, "mat-paginator", 28);
        i0.ɵɵlistener("page", function ConversationListComponent_Template_mat_paginator_page_42_listener($event) { return ctx.navigateToPage($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.search)("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.search);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.search, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.addNew, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.chatBots);
        i0.ɵɵadvance(23);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.chatBots);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("length", ctx.pager.totalItems)("pageSize", ctx.pager.pageSize)("pageIndex", ctx.pager.currentPage - 1)("pageSizeOptions", ctx.pager.pageSizeOptions);
    } }, directives: [i4.MatGridList, i4.MatGridTile, i5.MatFormField, i6.MatInput, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i8.MatButton, i5.MatSuffix, i9.MatTable, i9.MatColumnDef, i9.MatHeaderCellDef, i9.MatCellDef, i9.MatHeaderRowDef, i9.MatRowDef, i10.NgForOf, i11.MatPaginator, i9.MatHeaderCell, i9.MatCell, i10.NgClass, i12.MatMenuTrigger, i13.MatIcon, i12._MatMenu, i12.MatMenuItem, i9.MatHeaderRow, i9.MatRow, i14.MatCard, i14.MatCardContent], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .mat-select-panel-wrap{flex-basis:auto}.mat-column-action[_ngcontent-%COMP%]{width:5px}.uci-list-menu[_ngcontent-%COMP%]{background:red}.uci-container[_ngcontent-%COMP%]     .cdk-overlay-pane{width:auto}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.status-live[_ngcontent-%COMP%]{color:#3c763d}.status-draft[_ngcontent-%COMP%]{color:#ffb300}.status-disabled[_ngcontent-%COMP%]{color:#ff4a2f}.mobile[_ngcontent-%COMP%]   .status-draft[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(241,210,140,.69)}.mobile[_ngcontent-%COMP%]   .status-disabled[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(229,135,126,.63)}.mobile[_ngcontent-%COMP%]   .status-live[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(120,206,122,.58)}.action-dropdown[_ngcontent-%COMP%]{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{cursor:pointer}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#f6f6f6}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConversationListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-list',
                templateUrl: './conversation-list.component.html',
                styleUrls: ['./conversation-list.component.scss']
            }]
    }], function () { return [{ type: i1.UciService }, { type: i2.Router }, { type: i3.GlobalService }]; }, { botTable: [{
            type: ViewChild,
            args: ['botTable']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1saXN0L2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1saXN0L2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSTNELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeUIxQiw4QkFBdUM7SUFBQSxZQUF3QztJQUFBLGlCQUFLOzs7SUFBN0MsZUFBd0M7SUFBeEMsaUxBQXdDOzs7SUFDL0UsOEJBQXdDO0lBQUEsWUFBaUI7SUFBQSxpQkFBSzs7O0lBQXRCLGVBQWlCO0lBQWpCLGlEQUFpQjs7O0lBR3pELDhCQUF1QztJQUFBLFlBQTJDO0lBQUEsaUJBQUs7OztJQUFoRCxlQUEyQztJQUEzQyxvTEFBMkM7OztJQUNsRiw4QkFDaUY7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBckcsa0dBQTJFO0lBQUUsZUFBbUI7SUFBbkIsbURBQW1COzs7SUFHcEcsOEJBQXVDO0lBQUEsWUFBK0M7SUFBQSxpQkFBSzs7O0lBQXBELGVBQStDO0lBQS9DLHdMQUErQzs7O0lBQ3RGLDhCQUF3QztJQUFBLFlBQXdCO0lBQUEsaUJBQUs7OztJQUE3QixlQUF3QjtJQUF4Qix3REFBd0I7OztJQUdoRSw4QkFBdUM7SUFBQSxZQUFvRDtJQUFBLGlCQUFLOzs7SUFBekQsZUFBb0Q7SUFBcEQsNkxBQW9EOzs7SUFDM0YsOEJBQXdDO0lBQUEsWUFBNEI7SUFBQSxpQkFBSzs7O0lBQWpDLGVBQTRCO0lBQTVCLDREQUE0Qjs7O0lBR3BFLDhCQUF1QztJQUFBLFlBQTJDO0lBQUEsaUJBQUs7OztJQUFoRCxlQUEyQztJQUEzQyxvTEFBMkM7Ozs7SUFDbEYsOEJBQ0k7SUFBQSxnQ0FBeUM7SUFBQSxZQUFlO0lBQUEsaUJBQU87SUFDL0Qsa0NBRUk7SUFESSxnTkFBZ0IsVUFBVSxhQUFNO0lBQ3BDLFlBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFLOzs7OztJQUxrQixlQUFxQjtJQUFyQix1Q0FBcUI7SUFBQyxlQUFlO0lBQWYscUNBQWU7SUFHcEQsZUFDSjtJQURJLHFMQUNKOzs7SUFJSiw4QkFBdUM7SUFBQSxZQUF5QztJQUFBLGlCQUFLOzs7SUFBOUMsZUFBeUM7SUFBekMscUxBQXlDOzs7O0lBQ2hGLDhCQUNJO0lBQUEsZ0NBQXdDO0lBQUEsWUFBYztJQUFBLGlCQUFPO0lBQzdELGtDQUVJO0lBREksZ05BQWdCLFNBQVMsYUFBTTtJQUNuQyxZQUNKO0lBQUEsaUJBQVM7SUFDYixpQkFBSzs7Ozs7SUFMa0IsZUFBb0I7SUFBcEIsc0NBQW9CO0lBQUMsZUFBYztJQUFkLG9DQUFjO0lBR2xELGVBQ0o7SUFESSxxTEFDSjs7O0lBSUosOEJBQXVDO0lBQUEsWUFBMEM7SUFBQSxpQkFBSzs7O0lBQS9DLGVBQTBDO0lBQTFDLHNMQUEwQzs7OztJQUNqRiw4QkFDSTtJQUFBLGtDQUNJO0lBQUEsZ0NBQVU7SUFBQSx5QkFBUztJQUFBLGlCQUFXO0lBQ2xDLGlCQUFTO0lBQ1Qsd0NBQ0k7SUFBQSxrQ0FBZ0Q7SUFBMUIsME9BQXlCO0lBQUMsWUFBeUM7SUFBQSxpQkFBUztJQUNsRyxrQ0FBcUQ7SUFBL0IsNFFBQThCO0lBQUMsWUFBMkM7SUFBQSxpQkFBUztJQUN6RyxtQ0FDSTtJQURrQixtUkFBb0M7SUFDdEQsYUFDSjtJQUFBLGlCQUFTO0lBQ1QsbUNBQ0k7SUFEa0IsNlFBQThCO0lBQ2hELGFBQ0o7SUFBQSxpQkFBUztJQUNiLGlCQUFXO0lBQ2YsaUJBQUs7Ozs7O0lBYmtCLGVBQTBCO0lBQTFCLHdDQUEwQjtJQUlPLGVBQXlDO0lBQXpDLG9MQUF5QztJQUNwQyxlQUEyQztJQUEzQyxzTEFBMkM7SUFFNUYsZUFDSjtJQURJLGlYQUNKO0lBRUksZUFDSjtJQURJLHVMQUNKOzs7SUFJWix5QkFBNEQ7OztJQUM1RCx5QkFBa0U7Ozs7SUFJbEUsK0JBQ0k7SUFBQSxnQ0FDSTtJQUFBLHdDQUNJO0lBQUEseUNBQ0k7SUFBQSx3Q0FDSTtJQUFBLDhCQUE2QjtJQUFBLFlBQXdDO0lBQUEsaUJBQU07SUFDL0UsaUJBQWdCO0lBQ2hCLHlDQUNJO0lBQUEsK0JBQ0k7SUFBQSwwQkFBSTtJQUFBLGFBQWdCO0lBQUEsaUJBQUs7SUFDekIsbUNBQ0k7SUFBQSxpQ0FBVTtJQUFBLDBCQUFTO0lBQUEsaUJBQVc7SUFDbEMsaUJBQVM7SUFDVCx5Q0FDSTtJQUFBLG1DQUFnRDtJQUExQiw0T0FBeUI7SUFBQyxhQUF5QztJQUFBLGlCQUFTO0lBQ2xHLG1DQUFxRDtJQUEvQiw4UUFBOEI7SUFBQyxhQUEyQztJQUFBLGlCQUFTO0lBQ3pHLG1DQUNJO0lBRGtCLG9SQUFvQztJQUN0RCxhQUNKO0lBQUEsaUJBQVM7SUFDVCxtQ0FDSTtJQURrQiw4UUFBOEI7SUFDaEQsYUFDSjtJQUFBLGlCQUFTO0lBQ2IsaUJBQVc7SUFDZixpQkFBTTtJQUNWLGlCQUFnQjtJQUNoQix5Q0FDSTtJQUFBLCtCQUE2QjtJQUFBLGFBQStDO0lBQUEsaUJBQU07SUFDdEYsaUJBQWdCO0lBQ2hCLDBDQUNJO0lBQUEsK0JBQ0k7SUFBQSxhQUNKO0lBQUEsaUJBQU07SUFDVixpQkFBZ0I7SUFDaEIseUNBQ0k7SUFBQSwrQkFBNkI7SUFBQSxhQUFtRDtJQUFBLGlCQUFNO0lBQzFGLGlCQUFnQjtJQUNoQiwwQ0FDSTtJQUFBLGdDQUNJO0lBQUEsNkJBQU07SUFBQSxhQUEyQjtJQUFBLGlCQUFPO0lBQ3hDLDZCQUNJO0lBQUEsbUNBRUk7SUFBQSxhQUNKO0lBQUEsaUJBQVM7SUFDYixpQkFBTztJQUNYLGlCQUFNO0lBQ1YsaUJBQWdCO0lBQ3BCLGlCQUFnQjtJQUNwQixpQkFBbUI7SUFDdkIsaUJBQVc7SUFDZixpQkFBTTs7Ozs7SUE3QzJDLGVBQXdDO0lBQXhDLDBLQUF3QztJQUk3RCxlQUFnQjtJQUFoQixzQ0FBZ0I7SUFDRCxlQUFnQztJQUFoQyx3Q0FBZ0M7SUFJQyxlQUF5QztJQUF6QyxvTEFBeUM7SUFDcEMsZUFBMkM7SUFBM0Msc0xBQTJDO0lBRTVGLGVBQ0o7SUFESSxpWEFDSjtJQUVJLGVBQ0o7SUFESSx1TEFDSjtJQUtxQixlQUErQztJQUEvQyxpTEFBK0M7SUFJeEUsZUFDSjtJQURJLHdEQUNKO0lBRzZCLGVBQW1EO0lBQW5ELHFMQUFtRDtJQUl0RSxlQUEyQjtJQUEzQixpREFBMkI7SUFHckIsZUFBMkU7SUFBM0Usa0dBQTJFO0lBQy9FLGVBQ0o7SUFESSxtREFDSjs7QUR2SHhDLE1BQU0sT0FBTyx5QkFBeUI7SUFrQmxDLFlBQ1ksVUFBc0IsRUFDdEIsTUFBYyxFQUNkLGFBQTRCO1FBRjVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBbkJ4QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9HLFVBQUssR0FBRztZQUNKLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNoQyxXQUFXLEVBQUUsQ0FBQztZQUNkLFVBQVUsRUFBRSxDQUFDO1lBQ2IsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBQ0YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFXaEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxjQUFjO1FBQ1YsTUFBTSxLQUFLLEdBQVE7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDL0IsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQ3hDLENBQUM7U0FDTDthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQzlDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUN4QyxDQUFDO1NBQ0w7SUFFTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBSTtRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixNQUFNLEdBQUcsbUNBQU8sR0FBRyxLQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sSUFBSSxPQUFPLEdBQUMsQ0FBQztZQUNuRixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNsRyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ25DLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxQyxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDOUYsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUV6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWMsQ0FBQyxTQUFTO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVk7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLFlBQVksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxjQUFjLENBQUMsWUFBWSxFQUFFLEtBQUs7UUFDOUIsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3hELElBQUksQ0FBQyxFQUFFO2dCQUNILElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUNKLENBQUM7U0FDTDthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUN4RCxJQUFJLENBQUMsRUFBRTtnQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FDSixDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsSUFBSSxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQUU7UUFDTCxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxZQUFZLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDOztrR0F2SVEseUJBQXlCOzhEQUF6Qix5QkFBeUI7Ozs7OztRQ1p0Qyw4QkFDSTtRQUFBLHdDQUNJO1FBQUEsd0NBQ0k7UUFBQSw4QkFDSTtRQUFBLHNDQUNJO1FBQUEsZ0NBR0E7UUFINEIsa0pBQW9CLG9HQUUxQixlQUFXLElBRmU7UUFBaEQsaUJBR0E7UUFBQSxpQ0FFcEI7UUFEb0Usc0dBQVMsZUFBVyxJQUFDO1FBRWpFLFlBQ0o7UUFBQSxpQkFBUztRQUNiLGlCQUFpQjtRQUNyQixpQkFBTTtRQUNWLGlCQUFnQjtRQUNoQix3Q0FDSTtRQUFBLDhCQUNJO1FBQUEsK0JBQ0k7UUFBQSxrQ0FDOEI7UUFBdEIsdUdBQVMsY0FBVSxJQUFDO1FBQUUsYUFBMkM7UUFBQSxpQkFBUztRQUN0RixpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQWdCO1FBQ3BCLGlCQUFnQjtRQUVoQix5Q0FDSTtRQUFBLHNDQUNJO1FBQUEsa0NBQ0k7UUFBQSwyRUFBdUM7UUFDdkMsMkVBQXdDO1FBQzVDLDBCQUFlO1FBQ2Ysa0NBQ0k7UUFBQSwyRUFBdUM7UUFDdkMsMkVBQ2lGO1FBQ3JGLDBCQUFlO1FBQ2Ysa0NBQ0k7UUFBQSwyRUFBdUM7UUFDdkMsMkVBQXdDO1FBQzVDLDBCQUFlO1FBQ2Ysa0NBQ0k7UUFBQSwyRUFBdUM7UUFDdkMsMkVBQXdDO1FBQzVDLDBCQUFlO1FBQ2Ysa0NBQ0k7UUFBQSwyRUFBdUM7UUFDdkMsMkVBQ0k7UUFNUiwwQkFBZTtRQUNmLGtDQUNJO1FBQUEsMkVBQXVDO1FBQ3ZDLDJFQUNJO1FBTVIsMEJBQWU7UUFDZixrQ0FDSTtRQUFBLDJFQUF1QztRQUN2Qyw0RUFDSTtRQWNSLDBCQUFlO1FBQ2YsMkVBQXVEO1FBQ3ZELDJFQUE2RDtRQUNqRSxpQkFBUTtRQUVSLGdDQUNJO1FBQUEsK0VBQ0k7UUFrRFIsaUJBQU07UUFDTixnQ0FDSTtRQUFBLDBDQUtnQjtRQURELGtIQUFRLDBCQUFzQixJQUFDO1FBQzlDLGlCQUFnQjtRQUNwQixpQkFBTTtRQUNWLGlCQUFnQjtRQUNwQixpQkFBTTs7UUFoSjBDLGVBQW9CO1FBQXBCLG9DQUFvQiwySkFBQTtRQU01QyxlQUNKO1FBREksMktBQ0o7UUFROEIsZUFBMkM7UUFBM0MsMktBQTJDO1FBTzlDLGVBQXVCO1FBQXZCLHlDQUF1QjtRQXdEdkMsZ0JBQW1DO1FBQW5DLHNEQUFtQztRQUMxQyxlQUFnRDtRQUFoRCx1REFBZ0Q7UUFJdkQsZUFBK0M7UUFBL0Msc0NBQStDO1FBcURyQyxlQUEyQjtRQUEzQiw2Q0FBMkIsZ0NBQUEsd0NBQUEsOENBQUE7O2tERGpJekMseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNwRDs7a0JBRUksU0FBUzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7SGVscGVyfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXInO1xuaW1wb3J0IHtNYXRUYWJsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1jb252ZXJzYXRpb24tbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jb252ZXJzYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvbkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoJ2JvdFRhYmxlJykgYm90VGFibGU6IE1hdFRhYmxlPGFueT47XG4gICAgY2hhdEJvdHMgPSBbXTtcbiAgICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnbmFtZScsICdzdGF0dXMnLCAnZGVzY3JpcHRpb24nLCAnc3RhcnRpbmdNZXNzYWdlJywgJ2JvdFVybCcsICdib3RJZCcsICdhY3Rpb24nXTtcbiAgICBwYWdlciA9IHtcbiAgICAgICAgcGFnZVNpemVPcHRpb25zOiBbNSwgMTAsIDI1LCAzMF0sXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICB0b3RhbEl0ZW1zOiAwLFxuICAgICAgICBwYWdlU2l6ZTogMTBcbiAgICB9O1xuICAgIGNvbHVtbiA9ICcnO1xuICAgIHNvcnREaXJlY3Rpb24gPSAnJztcbiAgICByZXZlcnNlID0gZmFsc2U7XG4gICAgcXVlcnlQYXJhbXM6IGFueTtcbiAgICBzZWFyY2g7XG4gICAgdXNlcjtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIGlmICghdGhpcy51c2VyKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbiddKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5nZXRBbGxDaGF0Qm90cygpO1xuICAgIH1cblxuICAgIGdldEFsbENoYXRCb3RzKCkge1xuICAgICAgICBjb25zdCBwYXJhbTogYW55ID0ge1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlci5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHBlclBhZ2U6IHRoaXMucGFnZXIucGFnZVNpemVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICAgIHBhcmFtLm5hbWUgPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5zZWFyY2hDb252ZXJzYXRpb24ocGFyYW0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VDb252ZXJzYXRpb25zKGRhdGEpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLmZldGNoQ29udmVyc2F0aW9uKHBhcmFtKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlQ29udmVyc2F0aW9ucyhkYXRhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcGFyc2VDb252ZXJzYXRpb25zKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jaGF0Qm90cyA9IFtdO1xuICAgICAgICBkYXRhLmRhdGEuZm9yRWFjaChib3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gey4uLmJvdCwgc2VnbWVudFRleHQ6ICcnLCB1c2VyQ291bnQ6IDAsIHN0YXR1czogYm90LnN0YXR1cyB8fCAnRHJhZnQnfTtcbiAgICAgICAgICAgIG9iai5zdGF0dXMgPSBib3Quc3RhdHVzID09PSAnZW5hYmxlZCcgPyAnTGl2ZScgOiBib3Quc3RhdHVzID09PSAnZGlzYWJsZWQnID8gJ0Rpc2FibGVkJyA6ICdEcmFmdCc7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50TmFtZXMgPSBbXTtcbiAgICAgICAgICAgIGJvdC51c2VyU2VnbWVudHMuZm9yRWFjaCh1c2VyU2VnbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgc2VnbWVudE5hbWVzLnB1c2godXNlclNlZ21lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgb2JqLnVzZXJDb3VudCArPSAodXNlclNlZ21lbnQuY291bnQgfHwgMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9iai5zZWdtZW50VGV4dCA9IHNlZ21lbnROYW1lcy5qb2luKCcsICcpO1xuXG4gICAgICAgICAgICBvYmoudXJsID0gSGVscGVyLm1ha0JvdFVybChib3Quc3RhcnRpbmdNZXNzYWdlIHx8ICcnLCB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0Qm90UGhvbmVOdW1iZXIoKSk7XG4gICAgICAgICAgICBvYmouYm90SWQgPSBib3QuaWQgfHwgJyc7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhdEJvdHMucHVzaChvYmopO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wYWdlci50b3RhbEl0ZW1zID0gZGF0YS50b3RhbDtcbiAgICB9XG5cbiAgICBzb3J0Q29sdW1ucyhjb2x1bW4pIHtcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcbiAgICAgICAgdGhpcy5yZXZlcnNlID0gIXRoaXMucmV2ZXJzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvUGFnZShwYWdlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlci5jdXJyZW50UGFnZSA9IHBhZ2VFdmVudC5wYWdlSW5kZXggKyAxO1xuICAgICAgICB0aGlzLmdldEFsbENoYXRCb3RzKCk7XG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoKCkge1xuICAgICAgICB0aGlzLnBhZ2VyLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgdGhpcy5nZXRBbGxDaGF0Qm90cygpO1xuICAgIH1cblxuICAgIG9uQWRkTmV3KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCd1Y2ktYWRtaW4vYWRkJyk7XG4gICAgfVxuXG4gICAgb25FZGl0KGNvbnZlcnNhdGlvbikge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGB1Y2ktYWRtaW4vJHtjb252ZXJzYXRpb24uaWR9L2VkaXRgKTtcbiAgICB9XG5cbiAgICBvblN0YXR1c0NoYW5nZShjb252ZXJzYXRpb24sIGluZGV4KSB7XG4gICAgICAgIGlmIChjb252ZXJzYXRpb24uc3RhdHVzID09PSAnTGl2ZScpIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5wYXVzZUNvbnZlcnNhdGlvbihjb252ZXJzYXRpb24uaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGF0Qm90c1tpbmRleF0uc3RhdHVzID0gJ0Rpc2FibGVkJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhc291cmNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5zdGFydENvbnZlcnNhdGlvbihjb252ZXJzYXRpb24uaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGF0Qm90c1tpbmRleF0uc3RhdHVzID0gJ0xpdmUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGFzb3VyY2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWxldGUoY29udmVyc2F0aW9uLCBpbmRleCkge1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZGVsZXRlQ29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbi5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0Qm90cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YXNvdXJjZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ29weShpZCkge1xuICAgICAgICBIZWxwZXIuY29weURhdGEoaWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGFzb3VyY2UoKSB7XG4gICAgICAgIHRoaXMuYm90VGFibGUucmVuZGVyUm93cygpO1xuICAgIH1cblxuICAgIG9uUmVwb3J0KGNvbnZlcnNhdGlvbiwgaSk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGB1Y2ktYWRtaW4vJHtjb252ZXJzYXRpb24uaWR9L3JlcG9ydHNgKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidWNpLWNvbnRhaW5lclwiPlxuICAgIDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIyXCIgcm93SGVpZ2h0PVwiNHJlbVwiPlxuICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJnZXRTZWFyY2goKVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3VmZml4IG1hdC1zdHJva2VkLWJ1dHRvbiBhcmlhLWxhYmVsPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVjaS1hY3Rpb24tYnV0dG9uIGNvbXB1dGVyIG9ubHlcIiAoY2xpY2spPVwiZ2V0U2VhcmNoKClcIj5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2VhcmNoPC9tYXQtaWNvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5zZWFyY2h9fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi0xMCB0ZXh0LXJpZ2h0IHctMTAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWZsb2F0ZWQgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwidWNpLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFkZE5ldygpXCI+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5hZGROZXd9fSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgPC9tYXQtZ3JpZC1saXN0PlxuXG4gICAgPG1hdC1ncmlkLWxpc3QgY29scz1cIjFcIj5cbiAgICAgICAgPHRhYmxlIG1hdC10YWJsZSBjbGFzcz1cImNvbXB1dGVyIG9ubHlcIiBbZGF0YVNvdXJjZV09XCJjaGF0Qm90c1wiICNib3RUYWJsZT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5uYW1lfX08L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uc3RhdHVzfX0gPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIidzdGF0dXMtJyArIChlbGVtZW50LnN0YXR1cyA/IGVsZW1lbnQuc3RhdHVzLnRvTG93ZXJDYXNlKCk6ICcnKVwiPiB7e2VsZW1lbnQuc3RhdHVzfX0gPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5kZXNjcmlwdGlvbn19PC90aD5cbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZGVzY3JpcHRpb259fSA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN0YXJ0aW5nTWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5zdGFydGluZ01lc3NhZ2V9fSA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zdGFydGluZ01lc3NhZ2V9fSA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImJvdFVybFwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5ib3RVcmx9fSA8L3RoPlxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50OyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlkZVwiIFtpZF09XCInY29weVVybC0nICsgaVwiPnt7ZWxlbWVudC51cmx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInVjaS1jb3B5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ29weSgnY29weVVybC0nICsgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5jb3B5fX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJib3RJZFwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5ib3RJZH19PC90aD5cbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudDsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGVcIiBbaWRdPVwiJ2NvcHlJZC0nICsgaVwiPnt7ZWxlbWVudC5pZH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwidWNpLWNvcHktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25Db3B5KCdjb3B5SWQtJyArIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY29weX19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFjdGlvbn19PC90aD5cbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudDsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiY2VudGVyIGFsaWduZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIiBjbGFzcz1cInVjaS1saXN0LW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwib25FZGl0KGVsZW1lbnQpXCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVkaXR9fSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwib25EZWxldGUoZWxlbWVudCwgaSlcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVsZXRlfX0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uU3RhdHVzQ2hhbmdlKGVsZW1lbnQsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlbGVtZW50LnN0YXR1cyA9PT0gJ0xpdmUnID8gcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5kaXNhYmxlIDogcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5lbmFibGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uUmVwb3J0KGVsZW1lbnQsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnJlcG9ydH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtbWVudT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9iaWxlIG9ubHlcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNoYXRCb3Qgb2YgY2hhdEJvdHM7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLWxpc3QgY29scz1cIjRcIiByb3dIZWlnaHQ9XCIzNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIzXCIgY2xhc3M9XCJvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1iZXR3ZWVuIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt7Y2hhdEJvdC5uYW1lfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51TW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbWVudSAjbWVudU1vYmlsZT1cIm1hdE1lbnVcIiBjbGFzcz1cInVjaS1saXN0LW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uRWRpdChjaGF0Qm90KVwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5lZGl0fX0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvbkRlbGV0ZShjaGF0Qm90LCBpKVwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5kZWxldGV9fSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uU3RhdHVzQ2hhbmdlKGNoYXRCb3QsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhdEJvdC5zdGF0dXMgPT09ICdMaXZlJyA/IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGlzYWJsZSA6IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZW5hYmxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uUmVwb3J0KGNoYXRCb3QsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5yZXBvcnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVzY3JpcHRpb259fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXRCb3QuZGVzY3JpcHRpb259fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtbGVmdFwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5zdGFydGluZ01lc3NhZ2V9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7Y2hhdEJvdC5zdGFydGluZ01lc3NhZ2V9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNsYXNzPVwic21hbGwtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIidzdGF0dXMtJyArIChjaGF0Qm90LnN0YXR1cyA/IGNoYXRCb3Quc3RhdHVzLnRvTG93ZXJDYXNlKCk6ICcnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXRCb3Quc3RhdHVzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVjaS1tYXQtcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPG1hdC1wYWdpbmF0b3IgW2xlbmd0aF09XCJwYWdlci50b3RhbEl0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJwYWdlci5wYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFnZUluZGV4XT1cInBhZ2VyLmN1cnJlbnRQYWdlIC0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFnZVNpemVPcHRpb25zXT1cInBhZ2VyLnBhZ2VTaXplT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAocGFnZSk9XCJuYXZpZ2F0ZVRvUGFnZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8L21hdC1wYWdpbmF0b3I+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWF0LWdyaWQtbGlzdD5cbjwvZGl2PlxuIl19
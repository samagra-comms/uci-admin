import { __assign } from "tslib";
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
var _c0 = ["botTable"];
function ConversationListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.lbl == null ? null : ctx_r1.resourceService.frmelmnts.lbl.name, "");
} }
function ConversationListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r18.name, " ");
} }
function ConversationListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.resourceService.frmelmnts == null ? null : ctx_r3.resourceService.frmelmnts.lbl == null ? null : ctx_r3.resourceService.frmelmnts.lbl.status, " ");
} }
function ConversationListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r19 = ctx.$implicit;
    i0.ɵɵproperty("ngClass", "status-" + (element_r19.status ? element_r19.status.toLowerCase() : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r19.status, " ");
} }
function ConversationListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.resourceService.frmelmnts == null ? null : ctx_r5.resourceService.frmelmnts.lbl == null ? null : ctx_r5.resourceService.frmelmnts.lbl.description, "");
} }
function ConversationListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r20.description, " ");
} }
function ConversationListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.resourceService.frmelmnts == null ? null : ctx_r7.resourceService.frmelmnts.lbl == null ? null : ctx_r7.resourceService.frmelmnts.lbl.startingMessage, " ");
} }
function ConversationListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r21.startingMessage, " ");
} }
function ConversationListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.lbl == null ? null : ctx_r9.resourceService.frmelmnts.lbl.botUrl, " ");
} }
function ConversationListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    var _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 33);
    i0.ɵɵlistener("click", function ConversationListComponent_td_30_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r25); var i_r23 = ctx.index; var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onCopy("copyUrl-" + i_r23); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r22 = ctx.$implicit;
    var i_r23 = ctx.index;
    var ctx_r10 = i0.ɵɵnextContext();
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
    var ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.resourceService.frmelmnts == null ? null : ctx_r11.resourceService.frmelmnts.lbl == null ? null : ctx_r11.resourceService.frmelmnts.lbl.botId, "");
} }
function ConversationListComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 33);
    i0.ɵɵlistener("click", function ConversationListComponent_td_33_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r29); var i_r27 = ctx.index; var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onCopy("copyId-" + i_r27); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r26 = ctx.$implicit;
    var i_r27 = ctx.index;
    var ctx_r12 = i0.ɵɵnextContext();
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
    var ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.resourceService.frmelmnts == null ? null : ctx_r13.resourceService.frmelmnts.lbl == null ? null : ctx_r13.resourceService.frmelmnts.lbl.action, "");
} }
function ConversationListComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    var _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵelementStart(1, "button", 35);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", 36, 37);
    i0.ɵɵelementStart(6, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.onEdit(element_r30); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.onDelete(element_r30, i_r31); });
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.onStatusChange(element_r30, i_r31); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.onReport(element_r30, i_r31); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r30 = ctx.$implicit;
    var _r32 = i0.ɵɵreference(5);
    var ctx_r14 = i0.ɵɵnextContext();
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
    var _r43 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.onEdit(chatBot_r39); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.onDelete(chatBot_r39, i_r40); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onStatusChange(chatBot_r39, i_r40); });
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 38);
    i0.ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r46 = i0.ɵɵnextContext(); return ctx_r46.onReport(chatBot_r39, i_r40); });
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
    var chatBot_r39 = ctx.$implicit;
    var _r41 = i0.ɵɵreference(15);
    var ctx_r17 = i0.ɵɵnextContext();
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
var ConversationListComponent = /** @class */ (function () {
    function ConversationListComponent(uciService, router, globalService) {
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
    ConversationListComponent.prototype.ngOnInit = function () {
        this.user = this.globalService.getUser();
        if (!this.user) {
            this.router.navigate(['uci-admin']);
            return;
        }
        this.resourceService = this.globalService.getResourceService();
        this.getAllChatBots();
    };
    ConversationListComponent.prototype.getAllChatBots = function () {
        var _this = this;
        var param = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };
        if (this.search) {
            param.name = this.search;
            this.uciService.searchConversation(param).subscribe(function (data) { return _this.parseConversations(data); });
        }
        else {
            this.uciService.fetchConversation(param).subscribe(function (data) { return _this.parseConversations(data); });
        }
    };
    ConversationListComponent.prototype.parseConversations = function (data) {
        var _this = this;
        this.chatBots = [];
        data.data.forEach(function (bot) {
            var obj = __assign(__assign({}, bot), { segmentText: '', userCount: 0, status: bot.status || 'Draft' });
            obj.status = bot.status === 'enabled' ? 'Live' : bot.status === 'disabled' ? 'Disabled' : 'Draft';
            var segmentNames = [];
            bot.userSegments.forEach(function (userSegment) {
                segmentNames.push(userSegment.name);
                obj.userCount += (userSegment.count || 0);
            });
            obj.segmentText = segmentNames.join(', ');
            obj.url = Helper.makBotUrl(bot.startingMessage || '', _this.globalService.getBotPhoneNumber());
            obj.botId = bot.id || '';
            _this.chatBots.push(obj);
        });
        this.pager.totalItems = data.total;
    };
    ConversationListComponent.prototype.sortColumns = function (column) {
        this.column = column;
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.reverse = !this.reverse;
    };
    ConversationListComponent.prototype.navigateToPage = function (pageEvent) {
        this.pager.currentPage = pageEvent.pageIndex + 1;
        this.getAllChatBots();
    };
    ConversationListComponent.prototype.getSearch = function () {
        this.pager.currentPage = 1;
        this.getAllChatBots();
    };
    ConversationListComponent.prototype.onAddNew = function () {
        this.router.navigateByUrl('uci-admin/add');
    };
    ConversationListComponent.prototype.onEdit = function (conversation) {
        this.router.navigateByUrl("uci-admin/" + conversation.id + "/edit");
    };
    ConversationListComponent.prototype.onStatusChange = function (conversation, index) {
        var _this = this;
        if (conversation.status === 'Live') {
            this.uciService.pauseConversation(conversation.id).subscribe(function (data) {
                _this.chatBots[index].status = 'Disabled';
                _this.updateDatasource();
            });
        }
        else {
            this.uciService.startConversation(conversation.id).subscribe(function (data) {
                _this.chatBots[index].status = 'Live';
                _this.updateDatasource();
            });
        }
    };
    ConversationListComponent.prototype.onDelete = function (conversation, index) {
        var _this = this;
        this.uciService.deleteConversation(conversation.id).subscribe(function (data) {
            _this.chatBots.splice(index, 1);
            _this.updateDatasource();
        });
    };
    ConversationListComponent.prototype.onCopy = function (id) {
        Helper.copyData(id);
    };
    ConversationListComponent.prototype.updateDatasource = function () {
        this.botTable.renderRows();
    };
    ConversationListComponent.prototype.onReport = function (conversation, i) {
        this.router.navigateByUrl("uci-admin/" + conversation.id + "/reports");
    };
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
    return ConversationListComponent;
}());
export { ConversationListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1saXN0L2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1saXN0L2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUkzRCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3lCMUIsOEJBQXVDO0lBQUEsWUFBd0M7SUFBQSxpQkFBSzs7O0lBQTdDLGVBQXdDO0lBQXhDLGlMQUF3Qzs7O0lBQy9FLDhCQUF3QztJQUFBLFlBQWlCO0lBQUEsaUJBQUs7OztJQUF0QixlQUFpQjtJQUFqQixpREFBaUI7OztJQUd6RCw4QkFBdUM7SUFBQSxZQUEyQztJQUFBLGlCQUFLOzs7SUFBaEQsZUFBMkM7SUFBM0Msb0xBQTJDOzs7SUFDbEYsOEJBQ2lGO0lBQUEsWUFBbUI7SUFBQSxpQkFBSzs7O0lBQXJHLGtHQUEyRTtJQUFFLGVBQW1CO0lBQW5CLG1EQUFtQjs7O0lBR3BHLDhCQUF1QztJQUFBLFlBQStDO0lBQUEsaUJBQUs7OztJQUFwRCxlQUErQztJQUEvQyx3TEFBK0M7OztJQUN0Riw4QkFBd0M7SUFBQSxZQUF3QjtJQUFBLGlCQUFLOzs7SUFBN0IsZUFBd0I7SUFBeEIsd0RBQXdCOzs7SUFHaEUsOEJBQXVDO0lBQUEsWUFBb0Q7SUFBQSxpQkFBSzs7O0lBQXpELGVBQW9EO0lBQXBELDZMQUFvRDs7O0lBQzNGLDhCQUF3QztJQUFBLFlBQTRCO0lBQUEsaUJBQUs7OztJQUFqQyxlQUE0QjtJQUE1Qiw0REFBNEI7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QTs7b0NEN0l0RDtDQW9KQyxBQTdJRCxJQTZJQztTQXhJWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDcEQ7O2tCQUVJLFNBQVM7bUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge0hlbHBlcn0gZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVyJztcbmltcG9ydCB7TWF0VGFibGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItY29udmVyc2F0aW9uLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzYXRpb24tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCdib3RUYWJsZScpIGJvdFRhYmxlOiBNYXRUYWJsZTxhbnk+O1xuICAgIGNoYXRCb3RzID0gW107XG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ25hbWUnLCAnc3RhdHVzJywgJ2Rlc2NyaXB0aW9uJywgJ3N0YXJ0aW5nTWVzc2FnZScsICdib3RVcmwnLCAnYm90SWQnLCAnYWN0aW9uJ107XG4gICAgcGFnZXIgPSB7XG4gICAgICAgIHBhZ2VTaXplT3B0aW9uczogWzUsIDEwLCAyNSwgMzBdLFxuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgdG90YWxJdGVtczogMCxcbiAgICAgICAgcGFnZVNpemU6IDEwXG4gICAgfTtcbiAgICBjb2x1bW4gPSAnJztcbiAgICBzb3J0RGlyZWN0aW9uID0gJyc7XG4gICAgcmV2ZXJzZSA9IGZhbHNlO1xuICAgIHF1ZXJ5UGFyYW1zOiBhbnk7XG4gICAgc2VhcmNoO1xuICAgIHVzZXI7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICBpZiAoIXRoaXMudXNlcikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4nXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuZ2V0QWxsQ2hhdEJvdHMoKTtcbiAgICB9XG5cbiAgICBnZXRBbGxDaGF0Qm90cygpIHtcbiAgICAgICAgY29uc3QgcGFyYW06IGFueSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZXIuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwZXJQYWdlOiB0aGlzLnBhZ2VyLnBhZ2VTaXplXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgICBwYXJhbS5uYW1lID0gdGhpcy5zZWFyY2g7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2Uuc2VhcmNoQ29udmVyc2F0aW9uKHBhcmFtKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlQ29udmVyc2F0aW9ucyhkYXRhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5mZXRjaENvbnZlcnNhdGlvbihwYXJhbSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZUNvbnZlcnNhdGlvbnMoZGF0YSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBhcnNlQ29udmVyc2F0aW9ucyhkYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhdEJvdHMgPSBbXTtcbiAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goYm90ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHsuLi5ib3QsIHNlZ21lbnRUZXh0OiAnJywgdXNlckNvdW50OiAwLCBzdGF0dXM6IGJvdC5zdGF0dXMgfHwgJ0RyYWZ0J307XG4gICAgICAgICAgICBvYmouc3RhdHVzID0gYm90LnN0YXR1cyA9PT0gJ2VuYWJsZWQnID8gJ0xpdmUnIDogYm90LnN0YXR1cyA9PT0gJ2Rpc2FibGVkJyA/ICdEaXNhYmxlZCcgOiAnRHJhZnQnO1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudE5hbWVzID0gW107XG4gICAgICAgICAgICBib3QudXNlclNlZ21lbnRzLmZvckVhY2godXNlclNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHNlZ21lbnROYW1lcy5wdXNoKHVzZXJTZWdtZW50Lm5hbWUpO1xuICAgICAgICAgICAgICAgIG9iai51c2VyQ291bnQgKz0gKHVzZXJTZWdtZW50LmNvdW50IHx8IDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvYmouc2VnbWVudFRleHQgPSBzZWdtZW50TmFtZXMuam9pbignLCAnKTtcblxuICAgICAgICAgICAgb2JqLnVybCA9IEhlbHBlci5tYWtCb3RVcmwoYm90LnN0YXJ0aW5nTWVzc2FnZSB8fCAnJywgdGhpcy5nbG9iYWxTZXJ2aWNlLmdldEJvdFBob25lTnVtYmVyKCkpO1xuICAgICAgICAgICAgb2JqLmJvdElkID0gYm90LmlkIHx8ICcnO1xuXG4gICAgICAgICAgICB0aGlzLmNoYXRCb3RzLnB1c2gob2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGFnZXIudG90YWxJdGVtcyA9IGRhdGEudG90YWw7XG4gICAgfVxuXG4gICAgc29ydENvbHVtbnMoY29sdW1uKSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSB0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9ICF0aGlzLnJldmVyc2U7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUb1BhZ2UocGFnZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFnZXIuY3VycmVudFBhZ2UgPSBwYWdlRXZlbnQucGFnZUluZGV4ICsgMTtcbiAgICAgICAgdGhpcy5nZXRBbGxDaGF0Qm90cygpO1xuICAgIH1cblxuICAgIGdldFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5wYWdlci5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgIHRoaXMuZ2V0QWxsQ2hhdEJvdHMoKTtcbiAgICB9XG5cbiAgICBvbkFkZE5ldygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgndWNpLWFkbWluL2FkZCcpO1xuICAgIH1cblxuICAgIG9uRWRpdChjb252ZXJzYXRpb24pIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgdWNpLWFkbWluLyR7Y29udmVyc2F0aW9uLmlkfS9lZGl0YCk7XG4gICAgfVxuXG4gICAgb25TdGF0dXNDaGFuZ2UoY29udmVyc2F0aW9uLCBpbmRleCkge1xuICAgICAgICBpZiAoY29udmVyc2F0aW9uLnN0YXR1cyA9PT0gJ0xpdmUnKSB7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UucGF1c2VDb252ZXJzYXRpb24oY29udmVyc2F0aW9uLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhdEJvdHNbaW5kZXhdLnN0YXR1cyA9ICdEaXNhYmxlZCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YXNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2Uuc3RhcnRDb252ZXJzYXRpb24oY29udmVyc2F0aW9uLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhdEJvdHNbaW5kZXhdLnN0YXR1cyA9ICdMaXZlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhc291cmNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVsZXRlKGNvbnZlcnNhdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLmRlbGV0ZUNvbnZlcnNhdGlvbihjb252ZXJzYXRpb24uaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhdEJvdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGFzb3VyY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNvcHkoaWQpIHtcbiAgICAgICAgSGVscGVyLmNvcHlEYXRhKGlkKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhc291cmNlKCkge1xuICAgICAgICB0aGlzLmJvdFRhYmxlLnJlbmRlclJvd3MoKTtcbiAgICB9XG5cbiAgICBvblJlcG9ydChjb252ZXJzYXRpb24sIGkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgdWNpLWFkbWluLyR7Y29udmVyc2F0aW9uLmlkfS9yZXBvcnRzYCk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVjaS1jb250YWluZXJcIj5cbiAgICA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMlwiIHJvd0hlaWdodD1cIjRyZW1cIj5cbiAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LnNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwiZ2V0U2VhcmNoKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN1ZmZpeCBtYXQtc3Ryb2tlZC1idXR0b24gYXJpYS1sYWJlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1Y2ktYWN0aW9uLWJ1dHRvbiBjb21wdXRlciBvbmx5XCIgKGNsaWNrKT1cImdldFNlYXJjaCgpXCI+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnNlYXJjaDwvbWF0LWljb24+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uc2VhcmNofX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItMTAgdGV4dC1yaWdodCB3LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1mbG9hdGVkIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInVjaS1hY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25BZGROZXcoKVwiPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uYWRkTmV3fX0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgIDwvbWF0LWdyaWQtbGlzdD5cblxuICAgIDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIxXCI+XG4gICAgICAgIDx0YWJsZSBtYXQtdGFibGUgY2xhc3M9XCJjb21wdXRlciBvbmx5XCIgW2RhdGFTb3VyY2VdPVwiY2hhdEJvdHNcIiAjYm90VGFibGU+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ubmFtZX19PC90aD5cbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnN0YXR1c319IDwvdGg+XG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCInc3RhdHVzLScgKyAoZWxlbWVudC5zdGF0dXMgPyBlbGVtZW50LnN0YXR1cy50b0xvd2VyQ2FzZSgpOiAnJylcIj4ge3tlbGVtZW50LnN0YXR1c319IDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVzY3JpcHRpb259fTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LmRlc2NyaXB0aW9ufX0gPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzdGFydGluZ01lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uc3RhcnRpbmdNZXNzYWdlfX0gPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3RhcnRpbmdNZXNzYWdlfX0gPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJib3RVcmxcIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYm90VXJsfX0gPC90aD5cbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudDsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGVcIiBbaWRdPVwiJ2NvcHlVcmwtJyArIGlcIj57e2VsZW1lbnQudXJsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJ1Y2ktY29weS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNvcHkoJ2NvcHlVcmwtJyArIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY29weX19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYm90SWRcIj5cbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYm90SWR9fTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnQ7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRlXCIgW2lkXT1cIidjb3B5SWQtJyArIGlcIj57e2VsZW1lbnQuaWR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInVjaS1jb3B5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ29weSgnY29weUlkLScgKyBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmNvcHl9fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hY3Rpb259fTwvdGg+XG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnQ7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cImNlbnRlciBhbGlnbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCIgY2xhc3M9XCJ1Y2ktbGlzdC1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uRWRpdChlbGVtZW50KVwiPnt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5lZGl0fX0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9uRGVsZXRlKGVsZW1lbnQsIGkpXCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmRlbGV0ZX19IDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvblN0YXR1c0NoYW5nZShlbGVtZW50LCBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxlbWVudC5zdGF0dXMgPT09ICdMaXZlJyA/IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGlzYWJsZSA6IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZW5hYmxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvblJlcG9ydChlbGVtZW50LCBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5yZXBvcnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZSBvbmx5XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaGF0Qm90IG9mIGNoYXRCb3RzOyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC1saXN0IGNvbHM9XCI0XCIgcm93SGVpZ2h0PVwiMzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiM1wiIGNsYXNzPVwib3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57e2NoYXRCb3QubmFtZX19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudU1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI21lbnVNb2JpbGU9XCJtYXRNZW51XCIgY2xhc3M9XCJ1Y2ktbGlzdC1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvbkVkaXQoY2hhdEJvdClcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZWRpdH19IDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwib25EZWxldGUoY2hhdEJvdCwgaSlcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZGVsZXRlfX0gPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvblN0YXR1c0NoYW5nZShjaGF0Qm90LCBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXRCb3Quc3RhdHVzID09PSAnTGl2ZScgPyByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmRpc2FibGUgOiByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmVuYWJsZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvblJlcG9ydChjaGF0Qm90LCBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ucmVwb3J0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgdGV4dC1sZWZ0XCI+e3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmRlc2NyaXB0aW9ufX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjaGF0Qm90LmRlc2NyaXB0aW9ufX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZ3JpZC10aWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB0ZXh0LWxlZnRcIj57e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uc3RhcnRpbmdNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1ncmlkLXRpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2NoYXRCb3Quc3RhcnRpbmdNZXNzYWdlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjbGFzcz1cInNtYWxsLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCInc3RhdHVzLScgKyAoY2hhdEJvdC5zdGF0dXMgPyBjaGF0Qm90LnN0YXR1cy50b0xvd2VyQ2FzZSgpOiAnJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjaGF0Qm90LnN0YXR1c319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtdGlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWdyaWQtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1Y2ktbWF0LXBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwicGFnZXIudG90YWxJdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFnZVNpemVdPVwicGFnZXIucGFnZVNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhZ2VJbmRleF09XCJwYWdlci5jdXJyZW50UGFnZSAtIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJwYWdlci5wYWdlU2l6ZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2UpPVwibmF2aWdhdGVUb1BhZ2UoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPC9tYXQtcGFnaW5hdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L21hdC1ncmlkLWxpc3Q+XG48L2Rpdj5cbiJdfQ==
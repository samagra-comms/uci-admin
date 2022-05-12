import { __assign } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import * as moment from 'moment';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { TermsConditionConfirmComponent } from '../terms-condition-confirm/terms-condition-confirm.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/uci.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/forms";
import * as i4 from "../../services/global.service";
import * as i5 from "../../services/toaster.service";
import * as i6 from "@angular/material/dialog";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/stepper";
import * as i9 from "../conversation-setup/conversation-setup.component";
import * as i10 from "../logic-list/logic-list.component";
import * as i11 from "@angular/material/button";
import * as i12 from "@angular/material/checkbox";
import * as i13 from "@angular/material/form-field";
var _c0 = ["verifyAllModal"];
var _c1 = ["horizontalStepper"];
var _c2 = ["verticalStepper"];
function ConversationAddComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "lib-conversation-setup", 17);
    i0.ɵɵlistener("starringMessageChange", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_starringMessageChange_1_listener() { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onUserSegmentDelete($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("conversationForm", ctx_r2.conversationForm)("startMinDate", ctx_r2.startMinDate)("userSegments", ctx_r2.userSegments)("isStartingMessageExist", ctx_r2.isStartingMessageExist);
} }
function ConversationAddComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "lib-logic-list", 19);
    i0.ɵɵlistener("modify", function ConversationAddComponent_div_1_div_8_Template_lib_logic_list_modify_1_listener($event) { i0.ɵɵrestoreView(_r16); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onBotLogicModify($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("botLogics", ctx_r3.botLogics);
} }
function ConversationAddComponent_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    var _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r18); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onAddCancel(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r18); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.nextStep(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.cancel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r4.conversationForm.invalid || ctx_r4.isStartingMessageExist);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.next, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); var ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25.backToStepOne(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.resourceService.frmelmnts == null ? null : ctx_r20.resourceService.frmelmnts.btn == null ? null : ctx_r20.resourceService.frmelmnts.btn.back, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); var ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.openItemsVerifyModal(false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r21.isCheckedTermCondition || !ctx_r21.botLogics.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.resourceService.frmelmnts == null ? null : ctx_r21.resourceService.frmelmnts.btn == null ? null : ctx_r21.resourceService.frmelmnts.btn.save, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 31);
    i0.ɵɵelement(2, "div", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); var ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.conversationId ? ctx_r29.onSubmit(true) : ctx_r29.openItemsVerifyModal(true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r24.isCheckedTermCondition || !ctx_r24.botLogics.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.conversationId ? ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.update : ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.submit, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    var _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, ConversationAddComponent_div_1_ng_template_11_button_1_Template, 2, 1, "button", 24);
    i0.ɵɵtemplate(2, ConversationAddComponent_div_1_ng_template_11_button_2_Template, 2, 2, "button", 25);
    i0.ɵɵtemplate(3, ConversationAddComponent_div_1_ng_template_11_ng_container_3_Template, 3, 0, "ng-container", 11);
    i0.ɵɵtemplate(4, ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template, 2, 2, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 23);
    i0.ɵɵelementStart(7, "mat-checkbox", 27);
    i0.ɵɵlistener("ngModelChange", function ConversationAddComponent_div_1_ng_template_11_Template_mat_checkbox_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r32); var ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.isCheckedTermCondition = $event; });
    i0.ɵɵelementStart(8, "mat-label", 28);
    i0.ɵɵelementStart(9, "a", 29);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r23 = i0.ɵɵreference(5);
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.isLoaderShow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.isLoaderShow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.isLoaderShow)("ngIfElse", _r23);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("color", "primary")("ngModel", ctx_r6.isCheckedTermCondition);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.resourceService.frmelmnts == null ? null : ctx_r6.resourceService.frmelmnts.lbl == null ? null : ctx_r6.resourceService.frmelmnts.lbl.aggreeTc, " ");
} }
function ConversationAddComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "lib-conversation-setup", 17);
    i0.ɵɵlistener("starringMessageChange", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_starringMessageChange_1_listener() { i0.ɵɵrestoreView(_r34); var ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { i0.ɵɵrestoreView(_r34); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onUserSegmentDelete($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("conversationForm", ctx_r8.conversationForm)("startMinDate", ctx_r8.startMinDate)("userSegments", ctx_r8.userSegments)("isStartingMessageExist", ctx_r8.isStartingMessageExist);
} }
function ConversationAddComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r37); var ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onAddCancel(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r37); var ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.nextStep(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.cancel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r9.conversationForm.invalid || ctx_r9.isStartingMessageExist);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.next, " ");
} }
function ConversationAddComponent_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "lib-logic-list", 19);
    i0.ɵɵlistener("modify", function ConversationAddComponent_div_1_div_20_Template_lib_logic_list_modify_1_listener($event) { i0.ɵɵrestoreView(_r40); var ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.onBotLogicModify($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("botLogics", ctx_r10.botLogics);
} }
function ConversationAddComponent_div_1_div_21_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r47); var ctx_r46 = i0.ɵɵnextContext(3); return ctx_r46.backToStepOne(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r41 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r41.resourceService.frmelmnts == null ? null : ctx_r41.resourceService.frmelmnts.btn == null ? null : ctx_r41.resourceService.frmelmnts.btn.back, " ");
} }
function ConversationAddComponent_div_1_div_21_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r49); var ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48.openItemsVerifyModal(false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r42.isCheckedTermCondition || !ctx_r42.botLogics.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r42.resourceService.frmelmnts == null ? null : ctx_r42.resourceService.frmelmnts.btn == null ? null : ctx_r42.resourceService.frmelmnts.btn.save, " ");
} }
function ConversationAddComponent_div_1_div_21_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 31);
    i0.ɵɵelement(2, "div", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function ConversationAddComponent_div_1_div_21_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); var ctx_r50 = i0.ɵɵnextContext(3); return ctx_r50.conversationId ? ctx_r50.onSubmit(true) : ctx_r50.openItemsVerifyModal(true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r45 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r45.isCheckedTermCondition || !ctx_r45.botLogics.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r45.conversationId ? ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.update : ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.submit, " ");
} }
function ConversationAddComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵtemplate(2, ConversationAddComponent_div_1_div_21_button_2_Template, 2, 1, "button", 24);
    i0.ɵɵtemplate(3, ConversationAddComponent_div_1_div_21_button_3_Template, 2, 2, "button", 25);
    i0.ɵɵtemplate(4, ConversationAddComponent_div_1_div_21_ng_container_4_Template, 3, 0, "ng-container", 11);
    i0.ɵɵtemplate(5, ConversationAddComponent_div_1_div_21_ng_template_5_Template, 2, 2, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 23);
    i0.ɵɵelementStart(8, "mat-checkbox", 27);
    i0.ɵɵlistener("ngModelChange", function ConversationAddComponent_div_1_div_21_Template_mat_checkbox_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r53); var ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.isCheckedTermCondition = $event; });
    i0.ɵɵelementStart(9, "mat-label", 28);
    i0.ɵɵelementStart(10, "a", 29);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r44 = i0.ɵɵreference(6);
    var ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r11.isLoaderShow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r11.isLoaderShow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.isLoaderShow)("ngIfElse", _r44);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("color", "primary")("ngModel", ctx_r11.isCheckedTermCondition);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.resourceService.frmelmnts == null ? null : ctx_r11.resourceService.frmelmnts.lbl == null ? null : ctx_r11.resourceService.frmelmnts.lbl.aggreeTc, " ");
} }
function ConversationAddComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "mat-horizontal-stepper", 5, 6);
    i0.ɵɵelementStart(5, "mat-step", 7);
    i0.ɵɵtemplate(6, ConversationAddComponent_div_1_div_6_Template, 2, 4, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-step", 7);
    i0.ɵɵtemplate(8, ConversationAddComponent_div_1_div_8_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 10);
    i0.ɵɵtemplate(10, ConversationAddComponent_div_1_ng_container_10_Template, 6, 3, "ng-container", 11);
    i0.ɵɵtemplate(11, ConversationAddComponent_div_1_ng_template_11_Template, 11, 7, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 13);
    i0.ɵɵelementStart(14, "mat-vertical-stepper", 5, 14);
    i0.ɵɵelementStart(16, "mat-step", 7);
    i0.ɵɵtemplate(17, ConversationAddComponent_div_1_div_17_Template, 2, 4, "div", 8);
    i0.ɵɵtemplate(18, ConversationAddComponent_div_1_div_18_Template, 6, 3, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "mat-step", 7);
    i0.ɵɵtemplate(20, ConversationAddComponent_div_1_div_20_Template, 2, 1, "div", 9);
    i0.ɵɵtemplate(21, ConversationAddComponent_div_1_div_21_Template, 12, 7, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r5 = i0.ɵɵreference(12);
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("linear", true);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationSetup);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.stepIndex === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationFlow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.stepIndex === 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.stepIndex === 1)("ngIfElse", _r5);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("linear", true);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationSetup);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.stepIndex === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.stepIndex === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationFlow);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.stepIndex === 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.stepIndex === 2);
} }
var ConversationAddComponent = /** @class */ (function () {
    function ConversationAddComponent(uciService, router, activatedRoute, fb, globalService, toasterService, dialog) {
        this.uciService = uciService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.globalService = globalService;
        this.toasterService = toasterService;
        this.dialog = dialog;
        this.currentViewState = 'ADD_CONVERSATION';
        this.stepIndex = 1;
        this.botLogics = [];
        this.userSegments = [];
        this.column = '';
        this.sortDirection = '';
        this.reverse = false;
        this.collectionListModal = false;
        this.isLoaderShow = false;
        this.isModalLoaderShow = false;
        this.logicFormRequest = {};
        this.isCheckedTermCondition = false;
        this.termsAndConditionModal = false;
        this.verifyAllItemsModal = false;
        this.startMinDate = new Date(moment().subtract(1, 'd').format('YYYY-MM-DD'));
        this.isStartingMessageExist = false;
        this.isStartingMessageAvailable = false;
        this.endMinDate = new Date(moment().add(1, 'days').format('YYYY-MM-DD'));
    }
    ConversationAddComponent.prototype.ngOnInit = function () {
        this.user = this.globalService.getUser();
        this.resourceService = this.globalService.getResourceService();
        if (!this.user) {
            this.router.navigate(['uci-admin']);
            return;
        }
        this.conversationForm = this.fb.group({
            name: ['', Validators.required],
            description: [''],
            purpose: ['', Validators.required],
            startingMessage: ['', Validators.required],
            startDate: [null, Validators.required],
            endDate: [null],
            status: ['Draft']
        });
        // Edit case
        this.conversationId = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.conversationId) {
            this.getBotDetails();
        }
    };
    ConversationAddComponent.prototype.userSegment = function () {
        this.currentViewState = 'SELECT_SEGMENT';
    };
    ConversationAddComponent.prototype.onUserSegmentCancel = function () {
        this.currentViewState = 'ADD_CONVERSATION';
    };
    ConversationAddComponent.prototype.onUserSegmentAddClick = function () {
        this.currentViewState = 'ADD_SEGMENT';
    };
    ConversationAddComponent.prototype.onUserSegmentAdd = function (segments) {
        this.userSegments = segments;
        this.currentViewState = 'ADD_CONVERSATION';
    };
    ConversationAddComponent.prototype.onUserSegmentCreate = function (segment) {
        this.userSegments.push(segment);
        this.currentViewState = 'ADD_CONVERSATION';
    };
    ConversationAddComponent.prototype.onUserSegmentDelete = function (index) {
        this.userSegments.splice(index, 1);
    };
    ConversationAddComponent.prototype.nextStep = function () {
        if (this.stepIndex === 1 && this.conversationForm.valid) {
            this.horizontalStepper.next();
            this.verticalStepper.next();
            this.stepIndex = 2;
        }
    };
    ConversationAddComponent.prototype.backToStepOne = function () {
        if (this.stepIndex === 2) {
            this.stepIndex = 1;
            this.horizontalStepper.previous();
            this.verticalStepper.previous();
        }
    };
    ConversationAddComponent.prototype.onAddCancel = function () {
        this.router.navigate(['uci-admin']);
    };
    ConversationAddComponent.prototype.onSubmit = function (isTriggerBot) {
        var _this = this;
        if (isTriggerBot === void 0) { isTriggerBot = false; }
        var reqObj = __assign(__assign({}, this.conversationForm.value), { users: [], logic: [] });
        this.userSegments.forEach(function (userSegment) {
            reqObj.users.push(userSegment.id);
        });
        this.botLogics.forEach(function (logic) {
            reqObj.logic.push(logic.id);
        });
        if (reqObj.startDate) {
            reqObj.startDate = moment(reqObj.startDate).format('YYYY-MM-DD');
        }
        if (reqObj.endDate) {
            reqObj.endDate = moment(reqObj.endDate).format('YYYY-MM-DD');
        }
        this.isLoaderShow = true;
        if (this.conversationId) {
            this.uciService.botUpdate(this.conversationId, { data: reqObj }).subscribe(function (data) {
                _this.closeVerifyModal();
                _this.isLoaderShow = false;
                _this.router.navigate(['uci-admin/success'], { queryParams: { text: reqObj.startingMessage, botId: _this.conversationId } });
            }, function (error) {
                _this.isLoaderShow = false;
                _this.verifyAllItemsModal = true;
                _this.allChecked = false;
                if (error.result && error.result.error) {
                    _this.toasterService.error(error.result.error);
                }
            });
        }
        else {
            this.uciService.botCreate({ data: reqObj }).subscribe(function (data) {
                if (isTriggerBot) {
                    _this.startConversation(data.data);
                }
                else {
                    _this.closeVerifyModal();
                    _this.isLoaderShow = false;
                    _this.router.navigate(['uci-admin/success'], { queryParams: { text: reqObj.startingMessage, botId: data.data.id } });
                }
            }, function (error) {
                _this.isLoaderShow = false;
                _this.verifyAllItemsModal = true;
                _this.allChecked = false;
                if (error.result && error.result.error) {
                    _this.toasterService.error(error.result.error);
                }
            });
        }
    };
    ConversationAddComponent.prototype.startConversation = function (bot) {
        var _this = this;
        this.uciService.startConversation(bot.id).subscribe(function (data) {
            _this.isLoaderShow = false;
            _this.closeVerifyModal();
            _this.router.navigate(['uci-admin/success'], {
                queryParams: {
                    text: _this.conversationForm.value.startingMessage,
                    botId: bot.id
                }
            });
        }, function (error) {
            _this.verifyAllItemsModal = true;
            _this.allChecked = false;
            _this.isLoaderShow = false;
            if (error.result && error.result.error) {
                _this.toasterService.error(error.result.error);
            }
        });
    };
    ConversationAddComponent.prototype.closeVerifyModal = function () {
        if (this.verifyAllModal) {
            this.verifyAllModal.deny('denied');
        }
        this.verifyAllItemsModal = false;
    };
    ConversationAddComponent.prototype.openTermAndConditionModel = function () {
        // this.termsAndConditionModal = true;
        var dialogRef = this.dialog.open(TermsConditionsComponent);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ConversationAddComponent.prototype.openItemsVerifyModal = function (isSubmitBtn) {
        var _this = this;
        this.verifyAllItemsModal = true;
        this.allChecked = false;
        this.isSubmit = isSubmitBtn;
        var dialogRef = this.dialog.open(TermsConditionConfirmComponent, {
            data: { isSubmit: this.isSubmit }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                _this.onSubmit(result);
            }
        });
    };
    ConversationAddComponent.prototype.getBotDetails = function () {
        var _this = this;
        this.uciService.getBotDetails(this.conversationId).subscribe(function (val) {
            if (val.data) {
                _this.conversationForm.patchValue({
                    name: val.data.name,
                    description: val.data.description,
                    purpose: val.data.purpose,
                    startingMessage: val.data.startingMessage,
                    status: val.data.status,
                    startDate: val.data.startDate ? new Date(moment(val.data.startDate).format('YYYY-MM-DD')) : null,
                    endDate: val.data.endDate ? new Date(moment(val.data.endDate).format('YYYY-MM-DD')) : null
                });
                if (val.data.startDate) {
                    var minDate = moment().isBefore(moment(val.data.startDate)) ? moment().subtract(1, 'd') : moment(val.data.startDate);
                    _this.startMinDate = new Date(moment(minDate).format('YYYY-MM-DD'));
                }
                if (val.data.userSegments) {
                    _this.userSegments = val.data.userSegments;
                }
                if (val.data.logic) {
                    _this.botLogics = val.data.logic;
                }
            }
        });
    };
    ConversationAddComponent.prototype.onStarringMessageChange = function () {
        var _this = this;
        this.uciService.getCheckStartingMessage({ startingMessage: this.conversationForm.value.startingMessage }).subscribe(function (val) {
            if (val && val.data && val.data.id) {
                _this.isStartingMessageExist = (_this.conversationId !== val.data.id);
            }
        }, function (error) {
            _this.isStartingMessageExist = false;
        });
    };
    ConversationAddComponent.prototype.onBotLogicModify = function (bots) {
        this.botLogics = bots;
    };
    ConversationAddComponent.ɵfac = function ConversationAddComponent_Factory(t) { return new (t || ConversationAddComponent)(i0.ɵɵdirectiveInject(i1.UciService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.GlobalService), i0.ɵɵdirectiveInject(i5.ToasterService), i0.ɵɵdirectiveInject(i6.MatDialog)); };
    ConversationAddComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ConversationAddComponent, selectors: [["lib-conversation-add"]], viewQuery: function ConversationAddComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
            i0.ɵɵviewQuery(_c1, true);
            i0.ɵɵviewQuery(_c2, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.verifyAllModal = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.horizontalStepper = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.verticalStepper = _t.first);
        } }, decls: 2, vars: 2, consts: [[3, "ngSwitch"], ["class", "uci-add-container", 4, "ngSwitchCase"], [1, "uci-add-container"], [1, "computer", "only", "d-flex", "align-items-baseline", "justify-content-between"], [1, "col-3"], [1, "background-transparent", 3, "linear"], ["horizontalStepper", ""], [3, "label"], ["class", "step1-wrapper", 4, "ngIf"], ["class", "step2-wrapper", 4, "ngIf"], [1, "col-1", "text-right"], [4, "ngIf", "ngIfElse"], ["stp2_btn", ""], [1, "mobile", "only"], ["verticalStepper", ""], [4, "ngIf"], [1, "step1-wrapper"], [3, "conversationForm", "startMinDate", "userSegments", "isStartingMessageExist", "starringMessageChange", "userSegmentDelete"], [1, "step2-wrapper"], [3, "botLogics", "modify"], [1, "right-floated", "pt-0"], ["mat-raised-button", "", 1, "mr-10", 3, "click"], ["mat-raised-button", "", 1, "uci-action-button", 3, "disabled", "click"], [1, "pt-0"], ["mat-raised-button", "", "class", "mr-10", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "mr-10 primary", 3, "disabled", "click", 4, "ngIf"], ["submitBtn1", ""], ["name", "isCheckedTermCondition", 3, "color", "ngModel", "ngModelChange"], [1, "font-weight-normal", "t-and-c-title"], ["href", "https://diksha.gov.in/term-of-use.html", "target", "_blank", 1, "tc-tag"], ["mat-raised-button", "", 1, "mr-10", "primary", 3, "disabled", "click"], [1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"]], template: function ConversationAddComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, ConversationAddComponent_div_1_Template, 22, 14, "div", 1);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.currentViewState);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "ADD_CONVERSATION");
        } }, directives: [i7.NgSwitch, i7.NgSwitchCase, i8.MatHorizontalStepper, i8.MatStep, i7.NgIf, i8.MatVerticalStepper, i9.ConversationSetupComponent, i10.LogicListComponent, i11.MatButton, i12.MatCheckbox, i3.NgControlStatus, i3.NgModel, i13.MatLabel], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .mat-horizontal-stepper-header{pointer-events:none}  .mat-vertical-stepper-header{pointer-events:none}.filter_search[_ngcontent-%COMP%]{border-radius:25px!important}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.w-50-px[_ngcontent-%COMP%]{width:50px!important}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.ui.form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-weight:400}.action-dropdown[_ngcontent-%COMP%]{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{cursor:pointer}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#f6f6f6}.steps[_ngcontent-%COMP%]{width:20px;height:20px;overflow:hidden;border:1px solid #777;border-radius:10px;display:flex;align-items:center;justify-content:center;background-color:#e2e2e2;color:#000;margin-right:.7rem;font-size:.75rem}.font-0-75[_ngcontent-%COMP%]{font-size:.75rem}.line[_ngcontent-%COMP%]{background-color:#777;width:25%;height:1px}.blue-bg-white-text[_ngcontent-%COMP%]{background-color:#0c5593!important;color:#fff!important}.green-bg-white-text[_ngcontent-%COMP%]{background-color:#3c763d!important;color:#fff!important}.w-25-per[_ngcontent-%COMP%]{width:25%}.delete-icon[_ngcontent-%COMP%]{color:red;font-size:1.5rem}.delete-icon-sec[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]:disabled{background:#89cff0;border-color:#89cff0}.t-and-c-title[_ngcontent-%COMP%]{cursor:pointer!important}.t-and-c-title[_ngcontent-%COMP%]:hover{color:#89cff0!important}.sb-modal.ui.modal[_ngcontent-%COMP%]{box-shadow:none!important}.sb-modal.ui.modal.normal[_ngcontent-%COMP%]{max-width:45rem;height:0!important}.line-height[_ngcontent-%COMP%]{line-height:normal}.allCheckBtn[_ngcontent-%COMP%]{position:absolute;left:1rem}.text-danger[_ngcontent-%COMP%]{color:red!important}.text-success[_ngcontent-%COMP%]{color:green!important}.circular-button[_ngcontent-%COMP%]{height:30px;width:30px;display:flex;align-items:center;justify-content:center}.action-button[_ngcontent-%COMP%]{min-width:95px;border-radius:50px;color:#fff}.tc-tag[_ngcontent-%COMP%]{text-decoration:none}.step2-wrapper[_ngcontent-%COMP%]{min-height:300px}"] });
    return ConversationAddComponent;
}());
export { ConversationAddComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConversationAddComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-add',
                templateUrl: './conversation-add.component.html',
                styleUrls: ['./conversation-add.component.scss'],
            }]
    }], function () { return [{ type: i1.UciService }, { type: i2.Router }, { type: i2.ActivatedRoute }, { type: i3.FormBuilder }, { type: i4.GlobalService }, { type: i5.ToasterService }, { type: i6.MatDialog }]; }, { verifyAllModal: [{
            type: ViewChild,
            args: ['verifyAllModal']
        }], horizontalStepper: [{
            type: ViewChild,
            args: ['horizontalStepper']
        }], verticalStepper: [{
            type: ViewChild,
            args: ['verticalStepper']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udmVyc2F0aW9uLWFkZC9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1hZGQvY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUF5QixVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUlsRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUtqQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RixPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSw4REFBOEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNNcEYsK0JBQ0k7SUFBQSxrREFPeUI7SUFIakIsaVFBQW1ELG9QQUFBO0lBRzNELGlCQUF5QjtJQUM3QixpQkFBTTs7O0lBUE0sZUFBcUM7SUFBckMsMERBQXFDLHFDQUFBLHFDQUFBLHlEQUFBOzs7O0lBVWpELCtCQUNJO0lBQUEsMENBQ2lCO0lBRHVCLGdPQUFtQztJQUMzRSxpQkFBaUI7SUFDckIsaUJBQU07OztJQUZjLGVBQXVCO0lBQXZCLDRDQUF1Qjs7OztJQU9uRCw2QkFDSTtJQUFBLCtCQUNJO0lBQUEsa0NBQ0k7SUFEb0MsK01BQXVCO0lBQzNELFlBQ0o7SUFBQSxpQkFBUztJQUNULGtDQUU4QjtJQUF0Qiw0TUFBb0I7SUFBRSxZQUM5QjtJQUFBLGlCQUFTO0lBQ2IsaUJBQU07SUFDViwwQkFBZTs7O0lBUEgsZUFDSjtJQURJLG9MQUNKO0lBRVEsZUFBK0Q7SUFBL0QsMkZBQStEO0lBQ3pDLGVB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UztlQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ25EOztrQkFFSSxTQUFTO21CQUFDLGdCQUFnQjs7a0JBQzFCLFNBQVM7bUJBQUMsbUJBQW1COztrQkFDN0IsU0FBUzttQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1RvYXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge0FkZExvZ2ljQ29tcG9uZW50fSBmcm9tICcuLi9hZGQtbG9naWMvYWRkLWxvZ2ljLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rlcm1zQ29uZGl0aW9uc0NvbXBvbmVudH0gZnJvbSAnLi4vdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rlcm1zQ29uZGl0aW9uQ29uZmlybUNvbXBvbmVudH0gZnJvbSAnLi4vdGVybXMtY29uZGl0aW9uLWNvbmZpcm0vdGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7TWF0U3RlcHBlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWNvbnZlcnNhdGlvbi1hZGQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvbkFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgndmVyaWZ5QWxsTW9kYWwnKSB2ZXJpZnlBbGxNb2RhbDtcbiAgICBAVmlld0NoaWxkKCdob3Jpem9udGFsU3RlcHBlcicpIGhvcml6b250YWxTdGVwcGVyO1xuICAgIEBWaWV3Q2hpbGQoJ3ZlcnRpY2FsU3RlcHBlcicpIHZlcnRpY2FsU3RlcHBlcjtcbiAgICBjdXJyZW50Vmlld1N0YXRlID0gJ0FERF9DT05WRVJTQVRJT04nO1xuICAgIHN0ZXBJbmRleCA9IDE7XG4gICAgYm90TG9naWNzID0gW107XG4gICAgdXNlclNlZ21lbnRzID0gW107XG4gICAgY29sdW1uID0gJyc7XG4gICAgc29ydERpcmVjdGlvbiA9ICcnO1xuICAgIHJldmVyc2UgPSBmYWxzZTtcbiAgICBjb2xsZWN0aW9uTGlzdE1vZGFsID0gZmFsc2U7XG4gICAgaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICBsb2dpY0Zvcm1SZXF1ZXN0ID0ge307XG4gICAgaXNDaGVja2VkVGVybUNvbmRpdGlvbiA9IGZhbHNlO1xuICAgIGNvbnZlcnNhdGlvbkZvcm06IEZvcm1Hcm91cDtcbiAgICB0ZXJtc0FuZENvbmRpdGlvbk1vZGFsID0gZmFsc2U7XG4gICAgdmVyaWZ5QWxsSXRlbXNNb2RhbCA9IGZhbHNlO1xuICAgIGNvbnZlcnNhdGlvbklkO1xuICAgIHNlbGVjdGVkTG9naWNJbmRleDtcbiAgICBzdGFydE1pbkRhdGUgPSBuZXcgRGF0ZShtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcbiAgICBlbmRNaW5EYXRlO1xuICAgIGFsbENoZWNrZWQ6IGJvb2xlYW47XG4gICAgaXNTdWJtaXQ6IGJvb2xlYW47XG4gICAgaXNTdGFydGluZ01lc3NhZ2VFeGlzdCA9IGZhbHNlO1xuICAgIGlzU3RhcnRpbmdNZXNzYWdlQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgZmlsZUVycm9yU3RhdHVzO1xuICAgIHVzZXI7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZW5kTWluRGF0ZSA9IG5ldyBEYXRlKG1vbWVudCgpLmFkZCgxLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIGlmICghdGhpcy51c2VyKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbiddKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogWycnXSxcbiAgICAgICAgICAgIHB1cnBvc2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBzdGFydGluZ01lc3NhZ2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBzdGFydERhdGU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVuZERhdGU6IFtudWxsXSxcbiAgICAgICAgICAgIHN0YXR1czogWydEcmFmdCddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEVkaXQgY2FzZVxuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbklkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgICAgIGlmICh0aGlzLmNvbnZlcnNhdGlvbklkKSB7XG4gICAgICAgICAgICB0aGlzLmdldEJvdERldGFpbHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZXJTZWdtZW50KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3U3RhdGUgPSAnU0VMRUNUX1NFR01FTlQnO1xuICAgIH1cblxuICAgIG9uVXNlclNlZ21lbnRDYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdBRERfQ09OVkVSU0FUSU9OJztcbiAgICB9XG5cbiAgICBvblVzZXJTZWdtZW50QWRkQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdBRERfU0VHTUVOVCc7XG4gICAgfVxuXG4gICAgb25Vc2VyU2VnbWVudEFkZChzZWdtZW50cykge1xuICAgICAgICB0aGlzLnVzZXJTZWdtZW50cyA9IHNlZ21lbnRzO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3U3RhdGUgPSAnQUREX0NPTlZFUlNBVElPTic7XG4gICAgfVxuXG4gICAgb25Vc2VyU2VnbWVudENyZWF0ZShzZWdtZW50KSB7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdBRERfQ09OVkVSU0FUSU9OJztcbiAgICB9XG5cbiAgICBvblVzZXJTZWdtZW50RGVsZXRlKGluZGV4KSB7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgbmV4dFN0ZXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0ZXBJbmRleCA9PT0gMSAmJiB0aGlzLmNvbnZlcnNhdGlvbkZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0ZXBwZXIubmV4dCgpO1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFN0ZXBwZXIubmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5zdGVwSW5kZXggPSAyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFja1RvU3RlcE9uZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RlcEluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXBJbmRleCA9IDE7XG4gICAgICAgICAgICB0aGlzLmhvcml6b250YWxTdGVwcGVyLnByZXZpb3VzKCk7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsU3RlcHBlci5wcmV2aW91cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZGRDYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluJ10pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGlzVHJpZ2dlckJvdCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHJlcU9iaiA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuY29udmVyc2F0aW9uRm9ybS52YWx1ZSxcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgIGxvZ2ljOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVzZXJTZWdtZW50cy5mb3JFYWNoKHVzZXJTZWdtZW50ID0+IHtcbiAgICAgICAgICAgIHJlcU9iai51c2Vycy5wdXNoKHVzZXJTZWdtZW50LmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYm90TG9naWNzLmZvckVhY2gobG9naWMgPT4ge1xuICAgICAgICAgICAgcmVxT2JqLmxvZ2ljLnB1c2gobG9naWMuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlcU9iai5zdGFydERhdGUpIHtcbiAgICAgICAgICAgIHJlcU9iai5zdGFydERhdGUgPSBtb21lbnQocmVxT2JqLnN0YXJ0RGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcU9iai5lbmREYXRlKSB7XG4gICAgICAgICAgICByZXFPYmouZW5kRGF0ZSA9IG1vbWVudChyZXFPYmouZW5kRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5ib3RVcGRhdGUodGhpcy5jb252ZXJzYXRpb25JZCwge2RhdGE6IHJlcU9ian0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZlcmlmeU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluL3N1Y2Nlc3MnXSwge3F1ZXJ5UGFyYW1zOiB7dGV4dDogcmVxT2JqLnN0YXJ0aW5nTWVzc2FnZSwgYm90SWQ6IHRoaXMuY29udmVyc2F0aW9uSWR9fSk7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3VsdCAmJiBlcnJvci5yZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoZXJyb3IucmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UuYm90Q3JlYXRlKHtkYXRhOiByZXFPYmp9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUcmlnZ2VyQm90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0Q29udmVyc2F0aW9uKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmVyaWZ5TW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbi9zdWNjZXNzJ10sIHtxdWVyeVBhcmFtczoge3RleHQ6IHJlcU9iai5zdGFydGluZ01lc3NhZ2UsIGJvdElkOiBkYXRhLmRhdGEuaWR9fSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlBbGxJdGVtc01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXN1bHQgJiYgZXJyb3IucmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLnJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRDb252ZXJzYXRpb24oYm90KSB7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS5zdGFydENvbnZlcnNhdGlvbihib3QuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZlcmlmeU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4vc3VjY2VzcyddLCB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnZlcnNhdGlvbkZvcm0udmFsdWUuc3RhcnRpbmdNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm90SWQ6IGJvdC5pZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJpZnlBbGxJdGVtc01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXN1bHQgJiYgZXJyb3IucmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoZXJyb3IucmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2xvc2VWZXJpZnlNb2RhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmVyaWZ5QWxsTW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMudmVyaWZ5QWxsTW9kYWwuZGVueSgnZGVuaWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJpZnlBbGxJdGVtc01vZGFsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb3BlblRlcm1BbmRDb25kaXRpb25Nb2RlbCgpIHtcbiAgICAgICAgLy8gdGhpcy50ZXJtc0FuZENvbmRpdGlvbk1vZGFsID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQpO1xuXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuSXRlbXNWZXJpZnlNb2RhbChpc1N1Ym1pdEJ0bjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGlzU3VibWl0QnRuO1xuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFRlcm1zQ29uZGl0aW9uQ29uZmlybUNvbXBvbmVudCwge1xuICAgICAgICAgICAgZGF0YToge2lzU3VibWl0OiB0aGlzLmlzU3VibWl0fVxuICAgICAgICB9KTtcblxuICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Qm90RGV0YWlscygpIHtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLmdldEJvdERldGFpbHModGhpcy5jb252ZXJzYXRpb25JZCkuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJzYXRpb25Gb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB2YWwuZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdmFsLmRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IHZhbC5kYXRhLnB1cnBvc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nTWVzc2FnZTogdmFsLmRhdGEuc3RhcnRpbmdNZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHZhbC5kYXRhLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiB2YWwuZGF0YS5zdGFydERhdGUgPyBuZXcgRGF0ZShtb21lbnQodmFsLmRhdGEuc3RhcnREYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiB2YWwuZGF0YS5lbmREYXRlID8gbmV3IERhdGUobW9tZW50KHZhbC5kYXRhLmVuZERhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodmFsLmRhdGEuc3RhcnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbkRhdGUgPSBtb21lbnQoKS5pc0JlZm9yZShtb21lbnQodmFsLmRhdGEuc3RhcnREYXRlKSkgPyBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZCcpIDogbW9tZW50KHZhbC5kYXRhLnN0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRNaW5EYXRlID0gbmV3IERhdGUobW9tZW50KG1pbkRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5kYXRhLnVzZXJTZWdtZW50cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZWdtZW50cyA9IHZhbC5kYXRhLnVzZXJTZWdtZW50cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5kYXRhLmxvZ2ljKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90TG9naWNzID0gdmFsLmRhdGEubG9naWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN0YXJyaW5nTWVzc2FnZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLmdldENoZWNrU3RhcnRpbmdNZXNzYWdlKHtzdGFydGluZ01lc3NhZ2U6IHRoaXMuY29udmVyc2F0aW9uRm9ybS52YWx1ZS5zdGFydGluZ01lc3NhZ2V9KS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgICAgICAgIGlmICh2YWwgJiYgdmFsLmRhdGEgJiYgdmFsLmRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPSAodGhpcy5jb252ZXJzYXRpb25JZCAhPT0gdmFsLmRhdGEuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBvbkJvdExvZ2ljTW9kaWZ5KGJvdHMpIHtcbiAgICAgICAgdGhpcy5ib3RMb2dpY3MgPSBib3RzO1xuICAgIH1cbn1cbiIsIjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImN1cnJlbnRWaWV3U3RhdGVcIj5cblxuICAgIDwhLS08bGliLXVzZXItc2VnbWVudC1hZGQgKm5nU3dpdGNoQ2FzZT1cIidBRERfU0VHTUVOVCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FuY2VsKT1cIm9uVXNlclNlZ21lbnRDYW5jZWwoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhZGQpPVwib25Vc2VyU2VnbWVudENyZWF0ZSgkZXZlbnQpXCI+XG4gICAgPC9saWItdXNlci1zZWdtZW50LWFkZD5cblxuICAgIDxsaWItdXNlci1zZWdtZW50LWxpc3QgKm5nU3dpdGNoQ2FzZT1cIidTRUxFQ1RfU0VHTUVOVCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbmNlbCk9XCJvblVzZXJTZWdtZW50Q2FuY2VsKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFkZCk9XCJvblVzZXJTZWdtZW50QWRkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkVXNlclNlZ21lbnRzXT1cInVzZXJTZWdtZW50c1wiPlxuICAgIDwvbGliLXVzZXItc2VnbWVudC1saXN0Pi0tPlxuXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ0FERF9DT05WRVJTQVRJT04nXCIgY2xhc3M9XCJ1Y2ktYWRkLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcHV0ZXIgb25seSBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgIDxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIFtsaW5lYXJdPVwidHJ1ZVwiICNob3Jpem9udGFsU3RlcHBlciBjbGFzcz1cImJhY2tncm91bmQtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zdGVwIGxhYmVsPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnZlcnNhdGlvblNldHVwfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwMS13cmFwcGVyXCIgKm5nSWY9XCJzdGVwSW5kZXggPT09IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWNvbnZlcnNhdGlvbi1zZXR1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnZlcnNhdGlvbkZvcm1dPVwiY29udmVyc2F0aW9uRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRNaW5EYXRlXT1cInN0YXJ0TWluRGF0ZVwiIFt1c2VyU2VnbWVudHNdPVwidXNlclNlZ21lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0XT1cImlzU3RhcnRpbmdNZXNzYWdlRXhpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXJyaW5nTWVzc2FnZUNoYW5nZSk9XCJvblN0YXJyaW5nTWVzc2FnZUNoYW5nZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh1c2VyU2VnbWVudERlbGV0ZSk9XCJvblVzZXJTZWdtZW50RGVsZXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1jb252ZXJzYXRpb24tc2V0dXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zdGVwIGxhYmVsPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnZlcnNhdGlvbkZsb3d9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXAyLXdyYXBwZXJcIiAqbmdJZj1cInN0ZXBJbmRleCA9PT0gMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9naWMtbGlzdCBbYm90TG9naWNzXT1cImJvdExvZ2ljc1wiIChtb2RpZnkpPVwib25Cb3RMb2dpY01vZGlmeSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItbG9naWMtbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zdGVwPlxuICAgICAgICAgICAgICAgIDwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3RlcEluZGV4ID09PSAxOyBlbHNlIHN0cDJfYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1mbG9hdGVkIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJtci0xMFwiIChjbGljayk9XCJvbkFkZENhbmNlbCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmNhbmNlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJ1Y2ktYWN0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb252ZXJzYXRpb25Gb3JtLmludmFsaWQgfHwgaXNTdGFydGluZ01lc3NhZ2VFeGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0U3RlcCgpXCI+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5uZXh0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3N0cDJfYnRuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1yLTEwXCIgKm5nSWY9XCIhaXNMb2FkZXJTaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImJhY2tUb1N0ZXBPbmUoKVwiPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uYmFja319XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJtci0xMCBwcmltYXJ5XCIgKm5nSWY9XCIhaXNMb2FkZXJTaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5JdGVtc1ZlcmlmeU1vZGFsKGZhbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNDaGVja2VkVGVybUNvbmRpdGlvbiB8fCAhYm90TG9naWNzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5zYXZlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTG9hZGVyU2hvdzsgZWxzZSBzdWJtaXRCdG4xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbi1idXR0b24gcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBhY3RpdmUgdGlueSBpbmxpbmUgbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc3VibWl0QnRuMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwidWNpLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0NoZWNrZWRUZXJtQ29uZGl0aW9uIHx8ICFib3RMb2dpY3MubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLmNvbnZlcnNhdGlvbklkID8gb25TdWJtaXQodHJ1ZSkgOiBvcGVuSXRlbXNWZXJpZnlNb2RhbCh0cnVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbnZlcnNhdGlvbklkID8gcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy51cGRhdGUgOiByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LnN1Ym1pdH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggbmFtZT1cImlzQ2hlY2tlZFRlcm1Db25kaXRpb25cIiBbY29sb3JdPVwiJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpc0NoZWNrZWRUZXJtQ29uZGl0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cImZvbnQtd2VpZ2h0LW5vcm1hbCB0LWFuZC1jLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGMtdGFnXCIgaHJlZj1cImh0dHBzOi8vZGlrc2hhLmdvdi5pbi90ZXJtLW9mLXVzZS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYWdncmVlVGN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9iaWxlIG9ubHlcIj5cbiAgICAgICAgICAgIDxtYXQtdmVydGljYWwtc3RlcHBlciBbbGluZWFyXT1cInRydWVcIiAjdmVydGljYWxTdGVwcGVyIGNsYXNzPVwiYmFja2dyb3VuZC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtc3RlcCBsYWJlbD1cInt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb252ZXJzYXRpb25TZXR1cH19XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwMS13cmFwcGVyXCIgKm5nSWY9XCJzdGVwSW5kZXggPT09IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItY29udmVyc2F0aW9uLXNldHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb252ZXJzYXRpb25Gb3JtXT1cImNvbnZlcnNhdGlvbkZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRNaW5EYXRlXT1cInN0YXJ0TWluRGF0ZVwiIFt1c2VyU2VnbWVudHNdPVwidXNlclNlZ21lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzU3RhcnRpbmdNZXNzYWdlRXhpc3RdPVwiaXNTdGFydGluZ01lc3NhZ2VFeGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFycmluZ01lc3NhZ2VDaGFuZ2UpPVwib25TdGFycmluZ01lc3NhZ2VDaGFuZ2UoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh1c2VyU2VnbWVudERlbGV0ZSk9XCJvblVzZXJTZWdtZW50RGVsZXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saWItY29udmVyc2F0aW9uLXNldHVwPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RlcEluZGV4ID09PSAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtZmxvYXRlZCBwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1yLTEwXCIgKGNsaWNrKT1cIm9uQWRkQ2FuY2VsKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmNhbmNlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInVjaS1hY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb252ZXJzYXRpb25Gb3JtLmludmFsaWQgfHwgaXNTdGFydGluZ01lc3NhZ2VFeGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmV4dFN0ZXAoKVwiPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8ubmV4dH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYXQtc3RlcD5cbiAgICAgICAgICAgICAgICA8bWF0LXN0ZXAgbGFiZWw9XCJ7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udmVyc2F0aW9uRmxvd319XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwMi13cmFwcGVyXCIgKm5nSWY9XCJzdGVwSW5kZXggPT09IDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItbG9naWMtbGlzdCBbYm90TG9naWNzXT1cImJvdExvZ2ljc1wiIChtb2RpZnkpPVwib25Cb3RMb2dpY01vZGlmeSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1sb2dpYy1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInN0ZXBJbmRleCA9PT0gMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibXItMTBcIiAqbmdJZj1cIiFpc0xvYWRlclNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImJhY2tUb1N0ZXBPbmUoKVwiPiB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uYmFja319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1yLTEwIHByaW1hcnlcIiAqbmdJZj1cIiFpc0xvYWRlclNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5JdGVtc1ZlcmlmeU1vZGFsKGZhbHNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWlzQ2hlY2tlZFRlcm1Db25kaXRpb24gfHwgIWJvdExvZ2ljcy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LnNhdmV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xvYWRlclNob3c7IGVsc2Ugc3VibWl0QnRuMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvbiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBhY3RpdmUgdGlueSBpbmxpbmUgbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc3VibWl0QnRuMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInVjaS1hY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWlzQ2hlY2tlZFRlcm1Db25kaXRpb24gfHwgIWJvdExvZ2ljcy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLmNvbnZlcnNhdGlvbklkID8gb25TdWJtaXQodHJ1ZSkgOiBvcGVuSXRlbXNWZXJpZnlNb2RhbCh0cnVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjb252ZXJzYXRpb25JZCA/IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8udXBkYXRlIDogcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5zdWJtaXR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggbmFtZT1cImlzQ2hlY2tlZFRlcm1Db25kaXRpb25cIiBbY29sb3JdPVwiJ3ByaW1hcnknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXNDaGVja2VkVGVybUNvbmRpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwiZm9udC13ZWlnaHQtbm9ybWFsIHQtYW5kLWMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGMtdGFnXCIgaHJlZj1cImh0dHBzOi8vZGlrc2hhLmdvdi5pbi90ZXJtLW9mLXVzZS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFnZ3JlZVRjfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYXQtc3RlcD5cbiAgICAgICAgICAgIDwvbWF0LXZlcnRpY2FsLXN0ZXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=
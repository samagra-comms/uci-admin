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
const _c0 = ["verifyAllModal"];
const _c1 = ["horizontalStepper"];
const _c2 = ["verticalStepper"];
function ConversationAddComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "lib-conversation-setup", 17);
    i0.ɵɵlistener("starringMessageChange", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_starringMessageChange_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onUserSegmentDelete($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("conversationForm", ctx_r2.conversationForm)("startMinDate", ctx_r2.startMinDate)("userSegments", ctx_r2.userSegments)("isStartingMessageExist", ctx_r2.isStartingMessageExist);
} }
function ConversationAddComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "lib-logic-list", 19);
    i0.ɵɵlistener("modify", function ConversationAddComponent_div_1_div_8_Template_lib_logic_list_modify_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onBotLogicModify($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("botLogics", ctx_r3.botLogics);
} }
function ConversationAddComponent_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onAddCancel(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.nextStep(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.cancel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r4.conversationForm.invalid || ctx_r4.isStartingMessageExist);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.next, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25.backToStepOne(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.resourceService.frmelmnts == null ? null : ctx_r20.resourceService.frmelmnts.btn == null ? null : ctx_r20.resourceService.frmelmnts.btn.back, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.openItemsVerifyModal(false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(3);
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
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.conversationId ? ctx_r29.onSubmit(true) : ctx_r29.openItemsVerifyModal(true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r24.isCheckedTermCondition || !ctx_r24.botLogics.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.conversationId ? ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.update : ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.submit, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, ConversationAddComponent_div_1_ng_template_11_button_1_Template, 2, 1, "button", 24);
    i0.ɵɵtemplate(2, ConversationAddComponent_div_1_ng_template_11_button_2_Template, 2, 2, "button", 25);
    i0.ɵɵtemplate(3, ConversationAddComponent_div_1_ng_template_11_ng_container_3_Template, 3, 0, "ng-container", 11);
    i0.ɵɵtemplate(4, ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template, 2, 2, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 23);
    i0.ɵɵelementStart(7, "mat-checkbox", 27);
    i0.ɵɵlistener("ngModelChange", function ConversationAddComponent_div_1_ng_template_11_Template_mat_checkbox_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.isCheckedTermCondition = $event; });
    i0.ɵɵelementStart(8, "mat-label", 28);
    i0.ɵɵelementStart(9, "a", 29);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = i0.ɵɵreference(5);
    const ctx_r6 = i0.ɵɵnextContext(2);
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
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "lib-conversation-setup", 17);
    i0.ɵɵlistener("starringMessageChange", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_starringMessageChange_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onUserSegmentDelete($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("conversationForm", ctx_r8.conversationForm)("startMinDate", ctx_r8.startMinDate)("userSegments", ctx_r8.userSegments)("isStartingMessageExist", ctx_r8.isStartingMessageExist);
} }
function ConversationAddComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onAddCancel(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r37); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.nextStep(); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.cancel, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r9.conversationForm.invalid || ctx_r9.isStartingMessageExist);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.next, " ");
} }
function ConversationAddComponent_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "lib-logic-list", 19);
    i0.ɵɵlistener("modify", function ConversationAddComponent_div_1_div_20_Template_lib_logic_list_modify_1_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.onBotLogicModify($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("botLogics", ctx_r10.botLogics);
} }
function ConversationAddComponent_div_1_div_21_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(3); return ctx_r46.backToStepOne(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r41.resourceService.frmelmnts == null ? null : ctx_r41.resourceService.frmelmnts.btn == null ? null : ctx_r41.resourceService.frmelmnts.btn.back, " ");
} }
function ConversationAddComponent_div_1_div_21_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48.openItemsVerifyModal(false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(3);
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
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(3); return ctx_r50.conversationId ? ctx_r50.onSubmit(true) : ctx_r50.openItemsVerifyModal(true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r45.isCheckedTermCondition || !ctx_r45.botLogics.length);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r45.conversationId ? ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.update : ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.submit, " ");
} }
function ConversationAddComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵtemplate(2, ConversationAddComponent_div_1_div_21_button_2_Template, 2, 1, "button", 24);
    i0.ɵɵtemplate(3, ConversationAddComponent_div_1_div_21_button_3_Template, 2, 2, "button", 25);
    i0.ɵɵtemplate(4, ConversationAddComponent_div_1_div_21_ng_container_4_Template, 3, 0, "ng-container", 11);
    i0.ɵɵtemplate(5, ConversationAddComponent_div_1_div_21_ng_template_5_Template, 2, 2, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 23);
    i0.ɵɵelementStart(8, "mat-checkbox", 27);
    i0.ɵɵlistener("ngModelChange", function ConversationAddComponent_div_1_div_21_Template_mat_checkbox_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.isCheckedTermCondition = $event; });
    i0.ɵɵelementStart(9, "mat-label", 28);
    i0.ɵɵelementStart(10, "a", 29);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r44 = i0.ɵɵreference(6);
    const ctx_r11 = i0.ɵɵnextContext(2);
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
    const _r5 = i0.ɵɵreference(12);
    const ctx_r0 = i0.ɵɵnextContext();
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
export class ConversationAddComponent {
    constructor(uciService, router, activatedRoute, fb, globalService, toasterService, dialog) {
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
    ngOnInit() {
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
    }
    userSegment() {
        this.currentViewState = 'SELECT_SEGMENT';
    }
    onUserSegmentCancel() {
        this.currentViewState = 'ADD_CONVERSATION';
    }
    onUserSegmentAddClick() {
        this.currentViewState = 'ADD_SEGMENT';
    }
    onUserSegmentAdd(segments) {
        this.userSegments = segments;
        this.currentViewState = 'ADD_CONVERSATION';
    }
    onUserSegmentCreate(segment) {
        this.userSegments.push(segment);
        this.currentViewState = 'ADD_CONVERSATION';
    }
    onUserSegmentDelete(index) {
        this.userSegments.splice(index, 1);
    }
    nextStep() {
        if (this.stepIndex === 1 && this.conversationForm.valid) {
            this.horizontalStepper.next();
            this.verticalStepper.next();
            this.stepIndex = 2;
        }
    }
    backToStepOne() {
        if (this.stepIndex === 2) {
            this.stepIndex = 1;
            this.horizontalStepper.previous();
            this.verticalStepper.previous();
        }
    }
    onAddCancel() {
        this.router.navigate(['uci-admin']);
    }
    onSubmit(isTriggerBot = false) {
        const reqObj = Object.assign(Object.assign({}, this.conversationForm.value), { users: [], logic: [] });
        this.userSegments.forEach(userSegment => {
            reqObj.users.push(userSegment.id);
        });
        this.botLogics.forEach(logic => {
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
            this.uciService.botUpdate(this.conversationId, { data: reqObj }).subscribe(data => {
                this.closeVerifyModal();
                this.isLoaderShow = false;
                this.router.navigate(['uci-admin/success'], { queryParams: { text: reqObj.startingMessage, botId: this.conversationId } });
            }, error => {
                this.isLoaderShow = false;
                this.verifyAllItemsModal = true;
                this.allChecked = false;
                if (error.result && error.result.error) {
                    this.toasterService.error(error.result.error);
                }
            });
        }
        else {
            this.uciService.botCreate({ data: reqObj }).subscribe((data) => {
                if (isTriggerBot) {
                    this.startConversation(data.data);
                }
                else {
                    this.closeVerifyModal();
                    this.isLoaderShow = false;
                    this.router.navigate(['uci-admin/success'], { queryParams: { text: reqObj.startingMessage, botId: data.data.id } });
                }
            }, error => {
                this.isLoaderShow = false;
                this.verifyAllItemsModal = true;
                this.allChecked = false;
                if (error.result && error.result.error) {
                    this.toasterService.error(error.result.error);
                }
            });
        }
    }
    startConversation(bot) {
        this.uciService.startConversation(bot.id).subscribe(data => {
            this.isLoaderShow = false;
            this.closeVerifyModal();
            this.router.navigate(['uci-admin/success'], {
                queryParams: {
                    text: this.conversationForm.value.startingMessage,
                    botId: bot.id
                }
            });
        }, error => {
            this.verifyAllItemsModal = true;
            this.allChecked = false;
            this.isLoaderShow = false;
            if (error.result && error.result.error) {
                this.toasterService.error(error.result.error);
            }
        });
    }
    closeVerifyModal() {
        if (this.verifyAllModal) {
            this.verifyAllModal.deny('denied');
        }
        this.verifyAllItemsModal = false;
    }
    openTermAndConditionModel() {
        // this.termsAndConditionModal = true;
        const dialogRef = this.dialog.open(TermsConditionsComponent);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    openItemsVerifyModal(isSubmitBtn) {
        this.verifyAllItemsModal = true;
        this.allChecked = false;
        this.isSubmit = isSubmitBtn;
        const dialogRef = this.dialog.open(TermsConditionConfirmComponent, {
            data: { isSubmit: this.isSubmit }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.onSubmit(result);
            }
        });
    }
    getBotDetails() {
        this.uciService.getBotDetails(this.conversationId).subscribe((val) => {
            if (val.data) {
                this.conversationForm.patchValue({
                    name: val.data.name,
                    description: val.data.description,
                    purpose: val.data.purpose,
                    startingMessage: val.data.startingMessage,
                    status: val.data.status,
                    startDate: val.data.startDate ? new Date(moment(val.data.startDate).format('YYYY-MM-DD')) : null,
                    endDate: val.data.endDate ? new Date(moment(val.data.endDate).format('YYYY-MM-DD')) : null
                });
                if (val.data.startDate) {
                    const minDate = moment().isBefore(moment(val.data.startDate)) ? moment().subtract(1, 'd') : moment(val.data.startDate);
                    this.startMinDate = new Date(moment(minDate).format('YYYY-MM-DD'));
                }
                if (val.data.userSegments) {
                    this.userSegments = val.data.userSegments;
                }
                if (val.data.logic) {
                    this.botLogics = val.data.logic;
                }
            }
        });
    }
    onStarringMessageChange() {
        this.uciService.getCheckStartingMessage({ startingMessage: this.conversationForm.value.startingMessage }).subscribe(val => {
            if (val && val.data && val.data.id) {
                this.isStartingMessageExist = (this.conversationId !== val.data.id);
            }
        }, error => {
            this.isStartingMessageExist = false;
        });
    }
    onBotLogicModify(bots) {
        this.botLogics = bots;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udmVyc2F0aW9uLWFkZC9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1hZGQvY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQXlCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSWxFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBS2pDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDhEQUE4RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01wRiwrQkFDSTtJQUFBLGtEQU95QjtJQUhqQixtUUFBbUQsc1BBQUE7SUFHM0QsaUJBQXlCO0lBQzdCLGlCQUFNOzs7SUFQTSxlQUFxQztJQUFyQywwREFBcUMscUNBQUEscUNBQUEseURBQUE7Ozs7SUFVakQsK0JBQ0k7SUFBQSwwQ0FDaUI7SUFEdUIsa09BQW1DO0lBQzNFLGlCQUFpQjtJQUNyQixpQkFBTTs7O0lBRmMsZUFBdUI7SUFBdkIsNENBQXVCOzs7O0lBT25ELDZCQUNJO0lBQUEsK0JBQ0k7SUFBQSxrQ0FDSTtJQURvQyxpTkFBdUI7SUFDM0QsWUFDSjtJQUFBLGlCQUFTO0lBQ1Qsa0NBRThCO0lBQXRCLDhNQUFvQjtJQUFFLFlBQzlCO0lBQUEsaUJBQVM7SUFDYixpQkFBTTtJQUNWLDBCQUFlOzs7SUFQSCxlQUNKO0lBREksb0xBQ0o7SUFFUSxlQUErRDtJQUEvRCwyRkFBK0Q7SUFDekMsZUFD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QkFBQyxtQkFBbUI7O2tCQUM3QixTQUFTO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VG9hc3RlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0ZXIuc2VydmljZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7QWRkTG9naWNDb21wb25lbnR9IGZyb20gJy4uL2FkZC1sb2dpYy9hZGQtbG9naWMuY29tcG9uZW50JztcbmltcG9ydCB7VGVybXNDb25kaXRpb25zQ29tcG9uZW50fSBmcm9tICcuLi90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7VGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50fSBmcm9tICcuLi90ZXJtcy1jb25kaXRpb24tY29uZmlybS90ZXJtcy1jb25kaXRpb24tY29uZmlybS5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRTdGVwcGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItY29udmVyc2F0aW9uLWFkZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnZlcnNhdGlvbi1hZGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NvbnZlcnNhdGlvbi1hZGQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCd2ZXJpZnlBbGxNb2RhbCcpIHZlcmlmeUFsbE1vZGFsO1xuICAgIEBWaWV3Q2hpbGQoJ2hvcml6b250YWxTdGVwcGVyJykgaG9yaXpvbnRhbFN0ZXBwZXI7XG4gICAgQFZpZXdDaGlsZCgndmVydGljYWxTdGVwcGVyJykgdmVydGljYWxTdGVwcGVyO1xuICAgIGN1cnJlbnRWaWV3U3RhdGUgPSAnQUREX0NPTlZFUlNBVElPTic7XG4gICAgc3RlcEluZGV4ID0gMTtcbiAgICBib3RMb2dpY3MgPSBbXTtcbiAgICB1c2VyU2VnbWVudHMgPSBbXTtcbiAgICBjb2x1bW4gPSAnJztcbiAgICBzb3J0RGlyZWN0aW9uID0gJyc7XG4gICAgcmV2ZXJzZSA9IGZhbHNlO1xuICAgIGNvbGxlY3Rpb25MaXN0TW9kYWwgPSBmYWxzZTtcbiAgICBpc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICBpc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgIGxvZ2ljRm9ybVJlcXVlc3QgPSB7fTtcbiAgICBpc0NoZWNrZWRUZXJtQ29uZGl0aW9uID0gZmFsc2U7XG4gICAgY29udmVyc2F0aW9uRm9ybTogRm9ybUdyb3VwO1xuICAgIHRlcm1zQW5kQ29uZGl0aW9uTW9kYWwgPSBmYWxzZTtcbiAgICB2ZXJpZnlBbGxJdGVtc01vZGFsID0gZmFsc2U7XG4gICAgY29udmVyc2F0aW9uSWQ7XG4gICAgc2VsZWN0ZWRMb2dpY0luZGV4O1xuICAgIHN0YXJ0TWluRGF0ZSA9IG5ldyBEYXRlKG1vbWVudCgpLnN1YnRyYWN0KDEsICdkJykuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICAgIGVuZE1pbkRhdGU7XG4gICAgYWxsQ2hlY2tlZDogYm9vbGVhbjtcbiAgICBpc1N1Ym1pdDogYm9vbGVhbjtcbiAgICBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0ID0gZmFsc2U7XG4gICAgaXNTdGFydGluZ01lc3NhZ2VBdmFpbGFibGUgPSBmYWxzZTtcbiAgICBmaWxlRXJyb3JTdGF0dXM7XG4gICAgdXNlcjtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5lbmRNaW5EYXRlID0gbmV3IERhdGUobW9tZW50KCkuYWRkKDEsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluJ10pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udmVyc2F0aW9uRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgICAgICAgcHVycG9zZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHN0YXJ0aW5nTWVzc2FnZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZW5kRGF0ZTogW251bGxdLFxuICAgICAgICAgICAgc3RhdHVzOiBbJ0RyYWZ0J11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRWRpdCBjYXNlXG4gICAgICAgIHRoaXMuY29udmVyc2F0aW9uSWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgICAgICAgaWYgKHRoaXMuY29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Qm90RGV0YWlscygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlclNlZ21lbnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdTRUxFQ1RfU0VHTUVOVCc7XG4gICAgfVxuXG4gICAgb25Vc2VyU2VnbWVudENhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Vmlld1N0YXRlID0gJ0FERF9DT05WRVJTQVRJT04nO1xuICAgIH1cblxuICAgIG9uVXNlclNlZ21lbnRBZGRDbGljaygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Vmlld1N0YXRlID0gJ0FERF9TRUdNRU5UJztcbiAgICB9XG5cbiAgICBvblVzZXJTZWdtZW50QWRkKHNlZ21lbnRzKSB7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRzID0gc2VnbWVudHM7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdBRERfQ09OVkVSU0FUSU9OJztcbiAgICB9XG5cbiAgICBvblVzZXJTZWdtZW50Q3JlYXRlKHNlZ21lbnQpIHtcbiAgICAgICAgdGhpcy51c2VyU2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgdGhpcy5jdXJyZW50Vmlld1N0YXRlID0gJ0FERF9DT05WRVJTQVRJT04nO1xuICAgIH1cblxuICAgIG9uVXNlclNlZ21lbnREZWxldGUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VnbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBuZXh0U3RlcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RlcEluZGV4ID09PSAxICYmIHRoaXMuY29udmVyc2F0aW9uRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsU3RlcHBlci5uZXh0KCk7XG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsU3RlcHBlci5uZXh0KCk7XG4gICAgICAgICAgICB0aGlzLnN0ZXBJbmRleCA9IDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrVG9TdGVwT25lKCkge1xuICAgICAgICBpZiAodGhpcy5zdGVwSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcEluZGV4ID0gMTtcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0ZXBwZXIucHJldmlvdXMoKTtcbiAgICAgICAgICAgIHRoaXMudmVydGljYWxTdGVwcGVyLnByZXZpb3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZENhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4nXSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoaXNUcmlnZ2VyQm90ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcmVxT2JqID0ge1xuICAgICAgICAgICAgLi4udGhpcy5jb252ZXJzYXRpb25Gb3JtLnZhbHVlLFxuICAgICAgICAgICAgdXNlcnM6IFtdLFxuICAgICAgICAgICAgbG9naWM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRzLmZvckVhY2godXNlclNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgcmVxT2JqLnVzZXJzLnB1c2godXNlclNlZ21lbnQuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ib3RMb2dpY3MuZm9yRWFjaChsb2dpYyA9PiB7XG4gICAgICAgICAgICByZXFPYmoubG9naWMucHVzaChsb2dpYy5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVxT2JqLnN0YXJ0RGF0ZSkge1xuICAgICAgICAgICAgcmVxT2JqLnN0YXJ0RGF0ZSA9IG1vbWVudChyZXFPYmouc3RhcnREYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVxT2JqLmVuZERhdGUpIHtcbiAgICAgICAgICAgIHJlcU9iai5lbmREYXRlID0gbW9tZW50KHJlcU9iai5lbmREYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5jb252ZXJzYXRpb25JZCkge1xuICAgICAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLmJvdFVwZGF0ZSh0aGlzLmNvbnZlcnNhdGlvbklkLCB7ZGF0YTogcmVxT2JqfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmVyaWZ5TW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4vc3VjY2VzcyddLCB7cXVlcnlQYXJhbXM6IHt0ZXh0OiByZXFPYmouc3RhcnRpbmdNZXNzYWdlLCBib3RJZDogdGhpcy5jb252ZXJzYXRpb25JZH19KTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVyaWZ5QWxsSXRlbXNNb2RhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzdWx0ICYmIGVycm9yLnJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihlcnJvci5yZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5ib3RDcmVhdGUoe2RhdGE6IHJlcU9ian0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RyaWdnZXJCb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDb252ZXJzYXRpb24oZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWZXJpZnlNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluL3N1Y2Nlc3MnXSwge3F1ZXJ5UGFyYW1zOiB7dGV4dDogcmVxT2JqLnN0YXJ0aW5nTWVzc2FnZSwgYm90SWQ6IGRhdGEuZGF0YS5pZH19KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3VsdCAmJiBlcnJvci5yZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoZXJyb3IucmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydENvbnZlcnNhdGlvbihib3QpIHtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLnN0YXJ0Q29udmVyc2F0aW9uKGJvdC5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmVyaWZ5TW9kYWwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbi9zdWNjZXNzJ10sIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udmVyc2F0aW9uRm9ybS52YWx1ZS5zdGFydGluZ01lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3RJZDogYm90LmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3VsdCAmJiBlcnJvci5yZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihlcnJvci5yZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjbG9zZVZlcmlmeU1vZGFsKCkge1xuICAgICAgICBpZiAodGhpcy52ZXJpZnlBbGxNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlBbGxNb2RhbC5kZW55KCdkZW5pZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvcGVuVGVybUFuZENvbmRpdGlvbk1vZGVsKCkge1xuICAgICAgICAvLyB0aGlzLnRlcm1zQW5kQ29uZGl0aW9uTW9kYWwgPSB0cnVlO1xuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCk7XG5cbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5JdGVtc1ZlcmlmeU1vZGFsKGlzU3VibWl0QnRuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudmVyaWZ5QWxsSXRlbXNNb2RhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3VibWl0ID0gaXNTdWJtaXRCdG47XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkYXRhOiB7aXNTdWJtaXQ6IHRoaXMuaXNTdWJtaXR9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRCb3REZXRhaWxzKCkge1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZ2V0Qm90RGV0YWlscyh0aGlzLmNvbnZlcnNhdGlvbklkKS5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsLmRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbkZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHZhbC5kYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB2YWwuZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcHVycG9zZTogdmFsLmRhdGEucHVycG9zZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdNZXNzYWdlOiB2YWwuZGF0YS5zdGFydGluZ01lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogdmFsLmRhdGEuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IHZhbC5kYXRhLnN0YXJ0RGF0ZSA/IG5ldyBEYXRlKG1vbWVudCh2YWwuZGF0YS5zdGFydERhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IHZhbC5kYXRhLmVuZERhdGUgPyBuZXcgRGF0ZShtb21lbnQodmFsLmRhdGEuZW5kRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykpIDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh2YWwuZGF0YS5zdGFydERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluRGF0ZSA9IG1vbWVudCgpLmlzQmVmb3JlKG1vbWVudCh2YWwuZGF0YS5zdGFydERhdGUpKSA/IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkJykgOiBtb21lbnQodmFsLmRhdGEuc3RhcnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydE1pbkRhdGUgPSBuZXcgRGF0ZShtb21lbnQobWluRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsLmRhdGEudXNlclNlZ21lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRzID0gdmFsLmRhdGEudXNlclNlZ21lbnRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsLmRhdGEubG9naWMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3RMb2dpY3MgPSB2YWwuZGF0YS5sb2dpYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU3RhcnJpbmdNZXNzYWdlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZ2V0Q2hlY2tTdGFydGluZ01lc3NhZ2Uoe3N0YXJ0aW5nTWVzc2FnZTogdGhpcy5jb252ZXJzYXRpb25Gb3JtLnZhbHVlLnN0YXJ0aW5nTWVzc2FnZX0pLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWwuZGF0YSAmJiB2YWwuZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydGluZ01lc3NhZ2VFeGlzdCA9ICh0aGlzLmNvbnZlcnNhdGlvbklkICE9PSB2YWwuZGF0YS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGFydGluZ01lc3NhZ2VFeGlzdCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG9uQm90TG9naWNNb2RpZnkoYm90cykge1xuICAgICAgICB0aGlzLmJvdExvZ2ljcyA9IGJvdHM7XG4gICAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY3VycmVudFZpZXdTdGF0ZVwiPlxuXG4gICAgPCEtLTxsaWItdXNlci1zZWdtZW50LWFkZCAqbmdTd2l0Y2hDYXNlPVwiJ0FERF9TRUdNRU5UJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjYW5jZWwpPVwib25Vc2VyU2VnbWVudENhbmNlbCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFkZCk9XCJvblVzZXJTZWdtZW50Q3JlYXRlKCRldmVudClcIj5cbiAgICA8L2xpYi11c2VyLXNlZ21lbnQtYWRkPlxuXG4gICAgPGxpYi11c2VyLXNlZ21lbnQtbGlzdCAqbmdTd2l0Y2hDYXNlPVwiJ1NFTEVDVF9TRUdNRU5UJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FuY2VsKT1cIm9uVXNlclNlZ21lbnRDYW5jZWwoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoYWRkKT1cIm9uVXNlclNlZ21lbnRBZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRVc2VyU2VnbWVudHNdPVwidXNlclNlZ21lbnRzXCI+XG4gICAgPC9saWItdXNlci1zZWdtZW50LWxpc3Q+LS0+XG5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInQUREX0NPTlZFUlNBVElPTidcIiBjbGFzcz1cInVjaS1hZGQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wdXRlciBvbmx5IGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1ob3Jpem9udGFsLXN0ZXBwZXIgW2xpbmVhcl09XCJ0cnVlXCIgI2hvcml6b250YWxTdGVwcGVyIGNsYXNzPVwiYmFja2dyb3VuZC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LXN0ZXAgbGFiZWw9XCJ7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udmVyc2F0aW9uU2V0dXB9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXAxLXdyYXBwZXJcIiAqbmdJZj1cInN0ZXBJbmRleCA9PT0gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItY29udmVyc2F0aW9uLXNldHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udmVyc2F0aW9uRm9ybV09XCJjb252ZXJzYXRpb25Gb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGFydE1pbkRhdGVdPVwic3RhcnRNaW5EYXRlXCIgW3VzZXJTZWdtZW50c109XCJ1c2VyU2VnbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzU3RhcnRpbmdNZXNzYWdlRXhpc3RdPVwiaXNTdGFydGluZ01lc3NhZ2VFeGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhcnJpbmdNZXNzYWdlQ2hhbmdlKT1cIm9uU3RhcnJpbmdNZXNzYWdlQ2hhbmdlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHVzZXJTZWdtZW50RGVsZXRlKT1cIm9uVXNlclNlZ21lbnREZWxldGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLWNvbnZlcnNhdGlvbi1zZXR1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zdGVwPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LXN0ZXAgbGFiZWw9XCJ7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udmVyc2F0aW9uRmxvd319XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcDItd3JhcHBlclwiICpuZ0lmPVwic3RlcEluZGV4ID09PSAyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2dpYy1saXN0IFtib3RMb2dpY3NdPVwiYm90TG9naWNzXCIgKG1vZGlmeSk9XCJvbkJvdExvZ2ljTW9kaWZ5KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1sb2dpYy1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXN0ZXA+XG4gICAgICAgICAgICAgICAgPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdGVwSW5kZXggPT09IDE7IGVsc2Ugc3RwMl9idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWZsb2F0ZWQgcHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1yLTEwXCIgKGNsaWNrKT1cIm9uQWRkQ2FuY2VsKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY2FuY2VsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInVjaS1hY3Rpb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbnZlcnNhdGlvbkZvcm0uaW52YWxpZCB8fCBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5leHRTdGVwKClcIj4ge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/Lm5leHR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc3RwMl9idG4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibXItMTBcIiAqbmdJZj1cIiFpc0xvYWRlclNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYmFja1RvU3RlcE9uZSgpXCI+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5iYWNrfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIm1yLTEwIHByaW1hcnlcIiAqbmdJZj1cIiFpc0xvYWRlclNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3Blbkl0ZW1zVmVyaWZ5TW9kYWwoZmFsc2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0NoZWNrZWRUZXJtQ29uZGl0aW9uIHx8ICFib3RMb2dpY3MubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LnNhdmV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNMb2FkZXJTaG93OyBlbHNlIHN1Ym1pdEJ0bjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvbiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGFjdGl2ZSB0aW55IGlubGluZSBsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzdWJtaXRCdG4xPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJ1Y2ktYWN0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWlzQ2hlY2tlZFRlcm1Db25kaXRpb24gfHwgIWJvdExvZ2ljcy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRoaXMuY29udmVyc2F0aW9uSWQgPyBvblN1Ym1pdCh0cnVlKSA6IG9wZW5JdGVtc1ZlcmlmeU1vZGFsKHRydWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29udmVyc2F0aW9uSWQgPyByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LnVwZGF0ZSA6IHJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uc3VibWl0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBuYW1lPVwiaXNDaGVja2VkVGVybUNvbmRpdGlvblwiIFtjb2xvcl09XCIncHJpbWFyeSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFRlcm1Db25kaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwiZm9udC13ZWlnaHQtbm9ybWFsIHQtYW5kLWMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0Yy10YWdcIiBocmVmPVwiaHR0cHM6Ly9kaWtzaGEuZ292LmluL3Rlcm0tb2YtdXNlLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hZ2dyZWVUY319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUgb25seVwiPlxuICAgICAgICAgICAgPG1hdC12ZXJ0aWNhbC1zdGVwcGVyIFtsaW5lYXJdPVwidHJ1ZVwiICN2ZXJ0aWNhbFN0ZXBwZXIgY2xhc3M9XCJiYWNrZ3JvdW5kLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1zdGVwIGxhYmVsPVwie3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnZlcnNhdGlvblNldHVwfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXAxLXdyYXBwZXJcIiAqbmdJZj1cInN0ZXBJbmRleCA9PT0gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1jb252ZXJzYXRpb24tc2V0dXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnZlcnNhdGlvbkZvcm1dPVwiY29udmVyc2F0aW9uRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGFydE1pbkRhdGVdPVwic3RhcnRNaW5EYXRlXCIgW3VzZXJTZWdtZW50c109XCJ1c2VyU2VnbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNTdGFydGluZ01lc3NhZ2VFeGlzdF09XCJpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXJyaW5nTWVzc2FnZUNoYW5nZSk9XCJvblN0YXJyaW5nTWVzc2FnZUNoYW5nZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHVzZXJTZWdtZW50RGVsZXRlKT1cIm9uVXNlclNlZ21lbnREZWxldGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpYi1jb252ZXJzYXRpb24tc2V0dXA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdGVwSW5kZXggPT09IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1mbG9hdGVkIHB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibXItMTBcIiAoY2xpY2spPVwib25BZGRDYW5jZWwoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY2FuY2VsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwidWNpLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbnZlcnNhdGlvbkZvcm0uaW52YWxpZCB8fCBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJuZXh0U3RlcCgpXCI+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5uZXh0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21hdC1zdGVwPlxuICAgICAgICAgICAgICAgIDxtYXQtc3RlcCBsYWJlbD1cInt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb252ZXJzYXRpb25GbG93fX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXAyLXdyYXBwZXJcIiAqbmdJZj1cInN0ZXBJbmRleCA9PT0gMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1sb2dpYy1saXN0IFtib3RMb2dpY3NdPVwiYm90TG9naWNzXCIgKG1vZGlmeSk9XCJvbkJvdExvZ2ljTW9kaWZ5KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGliLWxvZ2ljLWxpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RlcEluZGV4ID09PSAyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJtci0xMFwiICpuZ0lmPVwiIWlzTG9hZGVyU2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYmFja1RvU3RlcE9uZSgpXCI+IHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy5iYWNrfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwibXItMTAgcHJpbWFyeVwiICpuZ0lmPVwiIWlzTG9hZGVyU2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3Blbkl0ZW1zVmVyaWZ5TW9kYWwoZmFsc2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNDaGVja2VkVGVybUNvbmRpdGlvbiB8fCAhYm90TG9naWNzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uc2F2ZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTG9hZGVyU2hvdzsgZWxzZSBzdWJtaXRCdG4xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGFjdGl2ZSB0aW55IGlubGluZSBsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzdWJtaXRCdG4xPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwidWNpLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNDaGVja2VkVGVybUNvbmRpdGlvbiB8fCAhYm90TG9naWNzLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRoaXMuY29udmVyc2F0aW9uSWQgPyBvblN1Ym1pdCh0cnVlKSA6IG9wZW5JdGVtc1ZlcmlmeU1vZGFsKHRydWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbnZlcnNhdGlvbklkID8gcmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8uYnRuPy51cGRhdGUgOiByZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LnN1Ym1pdH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBuYW1lPVwiaXNDaGVja2VkVGVybUNvbmRpdGlvblwiIFtjb2xvcl09XCIncHJpbWFyeSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpc0NoZWNrZWRUZXJtQ29uZGl0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWwgY2xhc3M9XCJmb250LXdlaWdodC1ub3JtYWwgdC1hbmQtYy10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0Yy10YWdcIiBocmVmPVwiaHR0cHM6Ly9kaWtzaGEuZ292LmluL3Rlcm0tb2YtdXNlLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYWdncmVlVGN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21hdC1zdGVwPlxuICAgICAgICAgICAgPC9tYXQtdmVydGljYWwtc3RlcHBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==
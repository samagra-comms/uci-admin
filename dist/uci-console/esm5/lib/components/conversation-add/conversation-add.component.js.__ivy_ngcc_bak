import { __assign, __decorate, __values } from "tslib";
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { UciService } from '../../services/uci.service';
import * as moment from 'moment';
import { ToasterService } from '../../services/toaster.service';
import { MatDialog } from '@angular/material/dialog';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { TermsConditionConfirmComponent } from '../terms-condition-confirm/terms-condition-confirm.component';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
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
        this.broadcastBotLogics = [];
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
        this.isStartingMessageExist = new BehaviorSubject(false);
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
            startingMessage: ['', [Validators.required]],
            startDate: [null, Validators.required],
            endDate: [null],
            segmentId: ['', Validators.required],
            status: ['enabled']
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
    ConversationAddComponent.prototype.onSubmit = function (isTriggerBot, isNavigateToEnd) {
        var _this = this;
        if (isTriggerBot === void 0) { isTriggerBot = false; }
        if (isNavigateToEnd === void 0) { isNavigateToEnd = false; }
        var reqObj = __assign(__assign({}, this.conversationForm.getRawValue()), { users: [], logic: [] });
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
        if (isNavigateToEnd) {
            reqObj.name += ' Broadcast';
            reqObj.startingMessage += ' Broadcast';
        }
        this.isLoaderShow = true;
        if (this.conversationId) {
            this.uciService.botUpdate(this.conversationId, { data: reqObj }).subscribe(function (data) {
                _this.closeVerifyModal();
                _this.isLoaderShow = false;
                _this.afterBotSubmit({ queryParams: { text: reqObj.startingMessage, botId: _this.conversationId } });
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
                if (!isNavigateToEnd) {
                    _this.conversationBot = { text: reqObj.startingMessage, botId: data.id };
                }
                if (isTriggerBot) {
                    _this.startConversation(data, isNavigateToEnd);
                }
                else {
                    _this.closeVerifyModal();
                    _this.isLoaderShow = false;
                    if (isNavigateToEnd) {
                        _this.afterBotSubmit({ queryParams: { text: reqObj.startingMessage, botId: data.id } });
                    }
                    else {
                        _this.createSegment();
                    }
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
    ConversationAddComponent.prototype.afterBotSubmit = function (extras) {
        var _this = this;
        var mappingData = {
            segmentId: parseInt(this.conversationForm.value.segmentId, 10),
            botId: this.conversationBot.botId
        };
        this.uciService.nlSegmentBotMapping(mappingData).subscribe(function (data) {
            _this.router.navigate(['uci-admin/success'], extras);
        });
    };
    ConversationAddComponent.prototype.createSegment = function () {
        var _this = this;
        var segData = {
            name: this.conversationForm.getRawValue().name,
            all: {
                type: 'get',
                config: {
                    url: "http://103.154.251.109:8070/segments/" + this.conversationForm.getRawValue().segmentId + "/mentors?deepLink=nipunlakshya://chatbot&botId=" + this.conversationBot.botId,
                    type: 'GET',
                    cadence: {
                        perPage: 5,
                        retries: 5,
                        timeout: 60,
                        concurrent: true,
                        pagination: true,
                        concurrency: 10,
                        'retries-interval': 10
                    },
                    pageParam: 'page',
                    credentials: {},
                    totalRecords: 200000
                }
            },
            byID: {},
            byPhone: {}
        };
        segData.byID = segData.all;
        segData.byPhone = segData.all;
        this.uciService.createUserSegment(segData).subscribe(function (data) {
            _this.userSegments.push(data);
            _this.createBroadcastBotLogic();
        });
    };
    ConversationAddComponent.prototype.createBroadcastBotLogic = function () {
        var e_1, _a;
        var _this = this;
        var _loop_1 = function (botLogic) {
            botLogic.adapter = this_1.globalService.getBroadcastAdapterId();
            botLogic.transformers[0].meta.type = 'broadcast';
            botLogic.transformers[0].meta.data = { botId: this_1.conversationBot.botId };
            this_1.uciService.createLogic({ data: botLogic }).subscribe(function (data) {
                _this.isModalLoaderShow = false;
                var existingLogic = botLogic;
                delete existingLogic.id;
                _this.broadcastBotLogics.push(__assign({ id: data.id }, existingLogic));
                _this.afterBroadcastBotLogic();
            }, function (error) {
                _this.isModalLoaderShow = false;
            });
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.botLogics), _c = _b.next(); !_c.done; _c = _b.next()) {
                var botLogic = _c.value;
                _loop_1(botLogic);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ConversationAddComponent.prototype.afterBroadcastBotLogic = function () {
        if (this.botLogics.length <= this.broadcastBotLogics.length) {
            this.botLogics = this.broadcastBotLogics;
            this.onSubmit(true, true);
        }
    };
    ConversationAddComponent.prototype.startConversation = function (bot, isNavigateToEnd) {
        var _this = this;
        if (isNavigateToEnd === void 0) { isNavigateToEnd = false; }
        this.uciService.startConversation(bot.id).subscribe(function (data) {
            _this.isLoaderShow = false;
            _this.closeVerifyModal();
            if (isNavigateToEnd) {
                _this.afterBotSubmit({ queryParams: { text: _this.conversationForm.value.startingMessage, botId: bot.id } });
            }
            else {
                _this.createSegment();
            }
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
        // this.uciService.searchConversation({startingMessage: this.conversationForm.value.startingMessage, match: true}).subscribe(val => {
        //   console.log(val);
        //   if (val && val.data && val.data.length) {
        //     console.log(val.data);
        //     this.isStartingMessageExist.next((this.conversationId !== val.data[0].id));
        //   } else {
        //     this.isStartingMessageExist.next(false);
        //   }
        // }, error => {
        //   this.isStartingMessageExist.next(false);
        // });
    };
    ConversationAddComponent.prototype.validateStartingMessage = function () {
        var _this = this;
        return function (control) { return control.valueChanges
            .pipe(debounceTime(400), distinctUntilChanged(), switchMap(function (value) { return _this.uciService.searchConversation({ startingMessage: value, match: true }); }), map(function (val) {
            console.log('---', val);
            var isStartingMessageExist = false;
            if (val && val.data && val.data.length) {
                isStartingMessageExist = (_this.conversationId !== val.data[0].id);
            }
            console.log('vaaaaaaa', isStartingMessageExist, isStartingMessageExist ? { alreadyExist: true } : null);
            return isStartingMessageExist ? { alreadyExist: true } : null;
        })); };
        /*return (control: AbstractControl): Observable<ValidationErrors | null> => {
          // return this.isStartingMessageExist.pipe(
          //   map(val => {
          //     console.log('vaaaaaaa', val, val ? {alreadyExist: true} : null);
          //     return val ? {alreadyExist: true} : null;
          //   })
          // );
    
    
    
          // return this.uciService.searchConversation({startingMessage: control.value, match: true})
          //   .pipe(
          //     debounceTime(1000),
          //     map(val => {
          //       console.log(val);
          //       let isStartingMessageExist = false;
          //       if (val && val.data && val.data.length) {
          //         isStartingMessageExist = (this.conversationId !== val.data[0].id);
          //       }
          //       console.log('-----', isStartingMessageExist);
          //       return isStartingMessageExist ? {alreadyExist: true} : null;
          //     })
          //   );
          // return {alreadyExist: true};
        };*/
    };
    ConversationAddComponent.prototype.onBotLogicModify = function (logics) {
        this.botLogics = logics;
    };
    ConversationAddComponent.ctorParameters = function () { return [
        { type: UciService },
        { type: Router },
        { type: ActivatedRoute },
        { type: FormBuilder },
        { type: GlobalService },
        { type: ToasterService },
        { type: MatDialog }
    ]; };
    __decorate([
        ViewChild('verifyAllModal')
    ], ConversationAddComponent.prototype, "verifyAllModal", void 0);
    __decorate([
        ViewChild('horizontalStepper')
    ], ConversationAddComponent.prototype, "horizontalStepper", void 0);
    __decorate([
        ViewChild('verticalStepper')
    ], ConversationAddComponent.prototype, "verticalStepper", void 0);
    ConversationAddComponent = __decorate([
        Component({
            selector: 'lib-conversation-add',
            template: "<ng-container [ngSwitch]=\"currentViewState\">\n\n    <!--<lib-user-segment-add *ngSwitchCase=\"'ADD_SEGMENT'\"\n                          (cancel)=\"onUserSegmentCancel()\"\n                          (add)=\"onUserSegmentCreate($event)\">\n    </lib-user-segment-add>\n\n    <lib-user-segment-list *ngSwitchCase=\"'SELECT_SEGMENT'\"\n                           (cancel)=\"onUserSegmentCancel()\"\n                           (add)=\"onUserSegmentAdd($event)\"\n                           [selectedUserSegments]=\"userSegments\">\n    </lib-user-segment-list>-->\n\n    <div *ngSwitchCase=\"'ADD_CONVERSATION'\" class=\"uci-add-container\">\n        <div class=\"computer only d-flex align-items-baseline justify-content-between\">\n            <div class=\"col-3\">\n                <mat-horizontal-stepper [linear]=\"true\" #horizontalStepper class=\"background-transparent\">\n                    <mat-step label=\"{{resourceService.frmelmnts?.lbl?.conversationSetup}}\">\n                        <div class=\"step1-wrapper\" *ngIf=\"stepIndex === 1\">\n                            <lib-conversation-setup\n                                    [conversationForm]=\"conversationForm\"\n                                    [startMinDate]=\"startMinDate\" [userSegments]=\"userSegments\"\n                                    [isStartingMessageExist]=\"isStartingMessageExist.value\"\n                                    (starringMessageChange)=\"onStarringMessageChange()\"\n                                    (userSegmentDelete)=\"onUserSegmentDelete($event)\"\n                            >\n                            </lib-conversation-setup>\n                        </div>\n                    </mat-step>\n                    <mat-step label=\"{{resourceService.frmelmnts?.lbl?.conversationFlow}}\">\n                        <div class=\"step2-wrapper\" *ngIf=\"stepIndex === 2\">\n                            <lib-logic-list [botLogics]=\"botLogics\" (modify)=\"onBotLogicModify($event)\">\n                            </lib-logic-list>\n                        </div>\n                    </mat-step>\n                </mat-horizontal-stepper>\n            </div>\n            <div class=\"col-1 text-right\">\n                <ng-container *ngIf=\"stepIndex === 1; else stp2_btn\">\n                    <div class=\"right-floated pt-0\">\n                        <button mat-raised-button class=\"mr-10\" (click)=\"onAddCancel()\">\n                            {{resourceService.frmelmnts?.btn?.cancel}}\n                        </button>\n                        <button mat-raised-button class=\"uci-action-button\"\n                                [disabled]=\"conversationForm.invalid\"\n                                (click)=\"nextStep()\"> {{resourceService.frmelmnts?.btn?.next}}\n                        </button>\n                    </div>\n                </ng-container>\n                <ng-template #stp2_btn>\n                    <div class=\"pt-0\">\n                        <button mat-raised-button class=\"mr-10\" *ngIf=\"!isLoaderShow\"\n                                (click)=\"backToStepOne()\"> {{resourceService.frmelmnts?.btn?.back}}\n                        </button>\n                        <button mat-raised-button class=\"mr-10 primary\" *ngIf=\"!isLoaderShow\"\n                                (click)=\"openItemsVerifyModal(false)\"\n                                [disabled]=\"!isCheckedTermCondition || !botLogics.length\">\n                            {{resourceService.frmelmnts?.btn?.save}}\n                        </button>\n                        <ng-container *ngIf=\"isLoaderShow; else submitBtn1\">\n                            <button class=\"action-button p-0\">\n                                <div class=\"ui active tiny inline loader\"></div>\n                            </button>\n                        </ng-container>\n                        <ng-template #submitBtn1>\n                            <button mat-raised-button class=\"uci-action-button\"\n                                    [disabled]=\"!isCheckedTermCondition || !botLogics.length\"\n                                    (click)=\"this.conversationId ? onSubmit(true) : openItemsVerifyModal(true)\">\n                                {{conversationId ? resourceService.frmelmnts?.btn?.update : resourceService.frmelmnts?.btn?.submit}}\n                            </button>\n                        </ng-template>\n                    </div>\n                    <div class=\"pt-0\">\n                        <mat-checkbox name=\"isCheckedTermCondition\" [color]=\"'primary'\"\n                                      [(ngModel)]=\"isCheckedTermCondition\">\n                            <mat-label class=\"font-weight-normal t-and-c-title\">\n                                <a class=\"tc-tag\" href=\"https://Nipun Lakshya App Chatbot.gov.in/term-of-use.html\" target=\"_blank\">\n                                    {{resourceService.frmelmnts?.lbl?.aggreeTc}}\n                                </a>\n                            </mat-label>\n                        </mat-checkbox>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n\n        <div class=\"mobile only\">\n            <mat-vertical-stepper [linear]=\"true\" #verticalStepper class=\"background-transparent\">\n                <mat-step label=\"{{resourceService.frmelmnts?.lbl?.conversationSetup}}\">\n                    <div class=\"step1-wrapper\" *ngIf=\"stepIndex === 1\">\n                        <lib-conversation-setup\n                                [conversationForm]=\"conversationForm\"\n                                [startMinDate]=\"startMinDate\" [userSegments]=\"userSegments\"\n                                [isStartingMessageExist]=\"isStartingMessageExist.value\"\n                                (starringMessageChange)=\"onStarringMessageChange()\"\n                                (userSegmentDelete)=\"onUserSegmentDelete($event)\"\n                        >\n                        </lib-conversation-setup>\n                    </div>\n\n                    <div *ngIf=\"stepIndex === 1\">\n                        <div class=\"right-floated pt-0\">\n                            <button mat-raised-button class=\"mr-10\" (click)=\"onAddCancel()\">\n                                {{resourceService.frmelmnts?.btn?.cancel}}\n                            </button>\n                            <button mat-raised-button class=\"uci-action-button\"\n                                    [disabled]=\"conversationForm.invalid\"\n                                    (click)=\"nextStep()\"> {{resourceService.frmelmnts?.btn?.next}}\n                            </button>\n                        </div>\n                    </div>\n                </mat-step>\n                <mat-step label=\"{{resourceService.frmelmnts?.lbl?.conversationFlow}}\">\n                    <div class=\"step2-wrapper\" *ngIf=\"stepIndex === 2\">\n                        <lib-logic-list [botLogics]=\"botLogics\" [notificationBotLogics]=\"broadcastBotLogics\" (modify)=\"onBotLogicModify($event)\">\n                        </lib-logic-list>\n                    </div>\n                    <div *ngIf=\"stepIndex === 2\">\n                        <div class=\"pt-0\">\n                            <button mat-raised-button class=\"mr-10\" *ngIf=\"!isLoaderShow\"\n                                    (click)=\"backToStepOne()\"> {{resourceService.frmelmnts?.btn?.back}}\n                            </button>\n                            <button mat-raised-button class=\"mr-10 primary\" *ngIf=\"!isLoaderShow\"\n                                    (click)=\"openItemsVerifyModal(false)\"\n                                    [disabled]=\"!isCheckedTermCondition || !botLogics.length\">\n                                {{resourceService.frmelmnts?.btn?.save}}\n                            </button>\n                            <ng-container *ngIf=\"isLoaderShow; else submitBtn1\">\n                                <button class=\"action-button p-0\">\n                                    <div class=\"ui active tiny inline loader\"></div>\n                                </button>\n                            </ng-container>\n                            <ng-template #submitBtn1>\n                                <button mat-raised-button class=\"uci-action-button\"\n                                        [disabled]=\"!isCheckedTermCondition || !botLogics.length\"\n                                        (click)=\"this.conversationId ? onSubmit(true) : openItemsVerifyModal(true)\">\n                                    {{conversationId ? resourceService.frmelmnts?.btn?.update : resourceService.frmelmnts?.btn?.submit}}\n                                </button>\n                            </ng-template>\n                        </div>\n                        <div class=\"pt-0\">\n                            <mat-checkbox name=\"isCheckedTermCondition\" [color]=\"'primary'\"\n                                          [(ngModel)]=\"isCheckedTermCondition\">\n                                <mat-label class=\"font-weight-normal t-and-c-title\">\n                                    <a class=\"tc-tag\" href=\"https://Nipun Lakshya App Chatbot.gov.in/term-of-use.html\" target=\"_blank\">\n                                        {{resourceService.frmelmnts?.lbl?.aggreeTc}}\n                                    </a>\n                                </mat-label>\n                            </mat-checkbox>\n                        </div>\n                    </div>\n                </mat-step>\n            </mat-vertical-stepper>\n        </div>\n    </div>\n</ng-container>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .mat-horizontal-stepper-header{pointer-events:none}::ng-deep .mat-vertical-stepper-header{pointer-events:none}.filter_search{border-radius:25px!important}.ellipsis-icon{font-size:1.2rem}.w-50-px{width:50px!important}.font-1-2{font-size:1.2rem}.ui.form .field>label{font-weight:400}.action-dropdown{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown .item{cursor:pointer}.action-dropdown .item:hover{background-color:#f6f6f6}.steps{width:20px;height:20px;overflow:hidden;border:1px solid #777;border-radius:10px;display:flex;align-items:center;justify-content:center;background-color:#e2e2e2;color:#000;margin-right:.7rem;font-size:.75rem}.font-0-75{font-size:.75rem}.line{background-color:#777;width:25%;height:1px}.blue-bg-white-text{background-color:#0c5593!important;color:#fff!important}.green-bg-white-text{background-color:#3c763d!important;color:#fff!important}.w-25-per{width:25%}.delete-icon{color:red;font-size:1.5rem}.delete-icon-sec{display:flex;justify-content:center;align-items:center}button:disabled{background:#89cff0;border-color:#89cff0}.t-and-c-title{cursor:pointer!important}.t-and-c-title:hover{color:#89cff0!important}.sb-modal.ui.modal{box-shadow:none!important}.sb-modal.ui.modal.normal{max-width:45rem;height:0!important}.line-height{line-height:normal}.allCheckBtn{position:absolute;left:1rem}.text-danger{color:red!important}.text-success{color:green!important}.circular-button{height:30px;width:30px;display:flex;align-items:center;justify-content:center}.action-button{min-width:95px;border-radius:50px;color:#fff}.tc-tag{text-decoration:none}.step2-wrapper{min-height:300px}"]
        })
    ], ConversationAddComponent);
    return ConversationAddComponent;
}());
export { ConversationAddComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udmVyc2F0aW9uLWFkZC9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBJLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RixPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQVMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3pGO0lBaUNFLGtDQUNVLFVBQXNCLEVBQ3RCLE1BQWMsRUFDZCxjQUE4QixFQUM5QixFQUFlLEVBQ2YsYUFBNEIsRUFDNUIsY0FBOEIs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WyJpbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yRm4sIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7VG9hc3RlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0ZXIuc2VydmljZSc7XG5pbXBvcnQge01hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7VGVybXNDb25kaXRpb25zQ29tcG9uZW50fSBmcm9tICcuLi90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7VGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50fSBmcm9tICcuLi90ZXJtcy1jb25kaXRpb24tY29uZmlybS90ZXJtcy1jb25kaXRpb24tY29uZmlybS5jb21wb25lbnQnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgbWFwLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbnZlcnNhdGlvbi1hZGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnZlcnNhdGlvbi1hZGQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgndmVyaWZ5QWxsTW9kYWwnKSB2ZXJpZnlBbGxNb2RhbDtcbiAgQFZpZXdDaGlsZCgnaG9yaXpvbnRhbFN0ZXBwZXInKSBob3Jpem9udGFsU3RlcHBlcjtcbiAgQFZpZXdDaGlsZCgndmVydGljYWxTdGVwcGVyJykgdmVydGljYWxTdGVwcGVyO1xuICBjdXJyZW50Vmlld1N0YXRlID0gJ0FERF9DT05WRVJTQVRJT04nO1xuICBjb252ZXJzYXRpb25Cb3Q7XG4gIHN0ZXBJbmRleCA9IDE7XG4gIGJvdExvZ2ljcyA9IFtdO1xuICBicm9hZGNhc3RCb3RMb2dpY3MgPSBbXTtcbiAgdXNlclNlZ21lbnRzID0gW107XG4gIGNvbHVtbiA9ICcnO1xuICBzb3J0RGlyZWN0aW9uID0gJyc7XG4gIHJldmVyc2UgPSBmYWxzZTtcbiAgY29sbGVjdGlvbkxpc3RNb2RhbCA9IGZhbHNlO1xuICBpc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgbG9naWNGb3JtUmVxdWVzdCA9IHt9O1xuICBpc0NoZWNrZWRUZXJtQ29uZGl0aW9uID0gZmFsc2U7XG4gIGNvbnZlcnNhdGlvbkZvcm06IEZvcm1Hcm91cDtcbiAgdGVybXNBbmRDb25kaXRpb25Nb2RhbCA9IGZhbHNlO1xuICB2ZXJpZnlBbGxJdGVtc01vZGFsID0gZmFsc2U7XG4gIGNvbnZlcnNhdGlvbklkO1xuICBzZWxlY3RlZExvZ2ljSW5kZXg7XG4gIHN0YXJ0TWluRGF0ZSA9IG5ldyBEYXRlKG1vbWVudCgpLnN1YnRyYWN0KDEsICdkJykuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICBlbmRNaW5EYXRlO1xuICBhbGxDaGVja2VkOiBib29sZWFuO1xuICBpc1N1Ym1pdDogYm9vbGVhbjtcbiAgaXNTdGFydGluZ01lc3NhZ2VFeGlzdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGlzU3RhcnRpbmdNZXNzYWdlQXZhaWxhYmxlID0gZmFsc2U7XG4gIGZpbGVFcnJvclN0YXR1cztcbiAgdXNlcjtcbiAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcbiAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICkge1xuICAgIHRoaXMuZW5kTWluRGF0ZSA9IG5ldyBEYXRlKG1vbWVudCgpLmFkZCgxLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRVc2VyKCk7XG4gICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgaWYgKCF0aGlzLnVzZXIpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluJ10pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbnZlcnNhdGlvbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnXSxcbiAgICAgIHB1cnBvc2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGFydGluZ01lc3NhZ2U6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHN0YXJ0RGF0ZTogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZW5kRGF0ZTogW251bGxdLFxuICAgICAgc2VnbWVudElkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgc3RhdHVzOiBbJ2VuYWJsZWQnXVxuICAgIH0pO1xuXG4gICAgLy8gRWRpdCBjYXNlXG4gICAgdGhpcy5jb252ZXJzYXRpb25JZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuICAgIGlmICh0aGlzLmNvbnZlcnNhdGlvbklkKSB7XG4gICAgICB0aGlzLmdldEJvdERldGFpbHMoKTtcbiAgICB9XG4gIH1cblxuICB1c2VyU2VnbWVudCgpIHtcbiAgICB0aGlzLmN1cnJlbnRWaWV3U3RhdGUgPSAnU0VMRUNUX1NFR01FTlQnO1xuICB9XG5cbiAgb25Vc2VyU2VnbWVudENhbmNlbCgpIHtcbiAgICB0aGlzLmN1cnJlbnRWaWV3U3RhdGUgPSAnQUREX0NPTlZFUlNBVElPTic7XG4gIH1cblxuICBvblVzZXJTZWdtZW50QWRkQ2xpY2soKSB7XG4gICAgdGhpcy5jdXJyZW50Vmlld1N0YXRlID0gJ0FERF9TRUdNRU5UJztcbiAgfVxuXG4gIG9uVXNlclNlZ21lbnRBZGQoc2VnbWVudHMpIHtcbiAgICB0aGlzLnVzZXJTZWdtZW50cyA9IHNlZ21lbnRzO1xuICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdBRERfQ09OVkVSU0FUSU9OJztcbiAgfVxuXG4gIG9uVXNlclNlZ21lbnRDcmVhdGUoc2VnbWVudCkge1xuICAgIHRoaXMudXNlclNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgdGhpcy5jdXJyZW50Vmlld1N0YXRlID0gJ0FERF9DT05WRVJTQVRJT04nO1xuICB9XG5cbiAgb25Vc2VyU2VnbWVudERlbGV0ZShpbmRleCkge1xuICAgIHRoaXMudXNlclNlZ21lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBuZXh0U3RlcCgpIHtcbiAgICBpZiAodGhpcy5zdGVwSW5kZXggPT09IDEgJiYgdGhpcy5jb252ZXJzYXRpb25Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLmhvcml6b250YWxTdGVwcGVyLm5leHQoKTtcbiAgICAgIHRoaXMudmVydGljYWxTdGVwcGVyLm5leHQoKTtcbiAgICAgIHRoaXMuc3RlcEluZGV4ID0gMjtcbiAgICB9XG4gIH1cblxuICBiYWNrVG9TdGVwT25lKCkge1xuICAgIGlmICh0aGlzLnN0ZXBJbmRleCA9PT0gMikge1xuICAgICAgdGhpcy5zdGVwSW5kZXggPSAxO1xuICAgICAgdGhpcy5ob3Jpem9udGFsU3RlcHBlci5wcmV2aW91cygpO1xuICAgICAgdGhpcy52ZXJ0aWNhbFN0ZXBwZXIucHJldmlvdXMoKTtcbiAgICB9XG4gIH1cblxuICBvbkFkZENhbmNlbCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbiddKTtcbiAgfVxuXG4gIG9uU3VibWl0KGlzVHJpZ2dlckJvdCA9IGZhbHNlLCBpc05hdmlnYXRlVG9FbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJlcU9iaiA9IHtcbiAgICAgIC4uLnRoaXMuY29udmVyc2F0aW9uRm9ybS5nZXRSYXdWYWx1ZSgpLFxuICAgICAgdXNlcnM6IFtdLFxuICAgICAgbG9naWM6IFtdXG4gICAgfTtcbiAgICB0aGlzLnVzZXJTZWdtZW50cy5mb3JFYWNoKHVzZXJTZWdtZW50ID0+IHtcbiAgICAgIHJlcU9iai51c2Vycy5wdXNoKHVzZXJTZWdtZW50LmlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmJvdExvZ2ljcy5mb3JFYWNoKGxvZ2ljID0+IHtcbiAgICAgIHJlcU9iai5sb2dpYy5wdXNoKGxvZ2ljLmlkKTtcbiAgICB9KTtcbiAgICBpZiAocmVxT2JqLnN0YXJ0RGF0ZSkge1xuICAgICAgcmVxT2JqLnN0YXJ0RGF0ZSA9IG1vbWVudChyZXFPYmouc3RhcnREYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB9XG4gICAgaWYgKHJlcU9iai5lbmREYXRlKSB7XG4gICAgICByZXFPYmouZW5kRGF0ZSA9IG1vbWVudChyZXFPYmouZW5kRGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgfVxuICAgIGlmIChpc05hdmlnYXRlVG9FbmQpIHtcbiAgICAgIHJlcU9iai5uYW1lICs9ICcgQnJvYWRjYXN0JztcbiAgICAgIHJlcU9iai5zdGFydGluZ01lc3NhZ2UgKz0gJyBCcm9hZGNhc3QnO1xuICAgIH1cblxuICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmNvbnZlcnNhdGlvbklkKSB7XG4gICAgICB0aGlzLnVjaVNlcnZpY2UuYm90VXBkYXRlKHRoaXMuY29udmVyc2F0aW9uSWQsIHtkYXRhOiByZXFPYmp9KS5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VWZXJpZnlNb2RhbCgpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hZnRlckJvdFN1Ym1pdCh7cXVlcnlQYXJhbXM6IHt0ZXh0OiByZXFPYmouc3RhcnRpbmdNZXNzYWdlLCBib3RJZDogdGhpcy5jb252ZXJzYXRpb25JZH19KTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy52ZXJpZnlBbGxJdGVtc01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzdWx0ICYmIGVycm9yLnJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihlcnJvci5yZXN1bHQuZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51Y2lTZXJ2aWNlLmJvdENyZWF0ZSh7ZGF0YTogcmVxT2JqfSkuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKCFpc05hdmlnYXRlVG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udmVyc2F0aW9uQm90ID0ge3RleHQ6IHJlcU9iai5zdGFydGluZ01lc3NhZ2UsIGJvdElkOiBkYXRhLmlkfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzVHJpZ2dlckJvdCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydENvbnZlcnNhdGlvbihkYXRhLCBpc05hdmlnYXRlVG9FbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVmVyaWZ5TW9kYWwoKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaXNOYXZpZ2F0ZVRvRW5kKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWZ0ZXJCb3RTdWJtaXQoe3F1ZXJ5UGFyYW1zOiB7dGV4dDogcmVxT2JqLnN0YXJ0aW5nTWVzc2FnZSwgYm90SWQ6IGRhdGEuaWR9fSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNlZ21lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy52ZXJpZnlBbGxJdGVtc01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzdWx0ICYmIGVycm9yLnJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihlcnJvci5yZXN1bHQuZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhZnRlckJvdFN1Ym1pdChleHRyYXMpIHtcbiAgICBjb25zdCBtYXBwaW5nRGF0YSA9IHtcbiAgICAgIHNlZ21lbnRJZDogcGFyc2VJbnQodGhpcy5jb252ZXJzYXRpb25Gb3JtLnZhbHVlLnNlZ21lbnRJZCwgMTApLFxuICAgICAgYm90SWQ6IHRoaXMuY29udmVyc2F0aW9uQm90LmJvdElkXG4gICAgfTtcblxuICAgIHRoaXMudWNpU2VydmljZS5ubFNlZ21lbnRCb3RNYXBwaW5nKG1hcHBpbmdEYXRhKS5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4vc3VjY2VzcyddLCBleHRyYXMpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVTZWdtZW50KCkge1xuICAgIGNvbnN0IHNlZ0RhdGEgPSB7XG4gICAgICBuYW1lOiB0aGlzLmNvbnZlcnNhdGlvbkZvcm0uZ2V0UmF3VmFsdWUoKS5uYW1lLFxuICAgICAgYWxsOiB7XG4gICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICB1cmw6IGBodHRwOi8vMTAzLjE1NC4yNTEuMTA5OjgwNzAvc2VnbWVudHMvJHt0aGlzLmNvbnZlcnNhdGlvbkZvcm0uZ2V0UmF3VmFsdWUoKS5zZWdtZW50SWR9L21lbnRvcnM/ZGVlcExpbms9bmlwdW5sYWtzaHlhOi8vY2hhdGJvdCZib3RJZD0ke3RoaXMuY29udmVyc2F0aW9uQm90LmJvdElkfWAsXG4gICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgY2FkZW5jZToge1xuICAgICAgICAgICAgcGVyUGFnZTogNSxcbiAgICAgICAgICAgIHJldHJpZXM6IDUsXG4gICAgICAgICAgICB0aW1lb3V0OiA2MCxcbiAgICAgICAgICAgIGNvbmN1cnJlbnQ6IHRydWUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgY29uY3VycmVuY3k6IDEwLFxuICAgICAgICAgICAgJ3JldHJpZXMtaW50ZXJ2YWwnOiAxMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFnZVBhcmFtOiAncGFnZScsXG4gICAgICAgICAgY3JlZGVudGlhbHM6IHt9LFxuICAgICAgICAgIHRvdGFsUmVjb3JkczogMjAwMDAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBieUlEOiB7fSxcbiAgICAgIGJ5UGhvbmU6IHt9XG4gICAgfTtcbiAgICBzZWdEYXRhLmJ5SUQgPSBzZWdEYXRhLmFsbDtcbiAgICBzZWdEYXRhLmJ5UGhvbmUgPSBzZWdEYXRhLmFsbDtcbiAgICB0aGlzLnVjaVNlcnZpY2UuY3JlYXRlVXNlclNlZ21lbnQoc2VnRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiB7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRzLnB1c2goZGF0YSk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnJvYWRjYXN0Qm90TG9naWMoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY3JlYXRlQnJvYWRjYXN0Qm90TG9naWMoKSB7XG4gICAgZm9yIChjb25zdCBib3RMb2dpYyBvZiB0aGlzLmJvdExvZ2ljcykge1xuICAgICAgYm90TG9naWMuYWRhcHRlciA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRCcm9hZGNhc3RBZGFwdGVySWQoKTtcbiAgICAgIGJvdExvZ2ljLnRyYW5zZm9ybWVyc1swXS5tZXRhLnR5cGUgPSAnYnJvYWRjYXN0JztcbiAgICAgIGJvdExvZ2ljLnRyYW5zZm9ybWVyc1swXS5tZXRhLmRhdGEgPSB7Ym90SWQ6IHRoaXMuY29udmVyc2F0aW9uQm90LmJvdElkfTtcblxuICAgICAgdGhpcy51Y2lTZXJ2aWNlLmNyZWF0ZUxvZ2ljKHtkYXRhOiBib3RMb2dpY30pLnN1YnNjcmliZShcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvZ2ljID0gYm90TG9naWM7XG4gICAgICAgICAgZGVsZXRlIGV4aXN0aW5nTG9naWMuaWQ7XG4gICAgICAgICAgdGhpcy5icm9hZGNhc3RCb3RMb2dpY3MucHVzaCh7XG4gICAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nTG9naWMsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5hZnRlckJyb2FkY2FzdEJvdExvZ2ljKCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLmlzTW9kYWxMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJCcm9hZGNhc3RCb3RMb2dpYygpIHtcbiAgICBpZiAodGhpcy5ib3RMb2dpY3MubGVuZ3RoIDw9IHRoaXMuYnJvYWRjYXN0Qm90TG9naWNzLmxlbmd0aCkge1xuICAgICAgdGhpcy5ib3RMb2dpY3MgPSB0aGlzLmJyb2FkY2FzdEJvdExvZ2ljcztcbiAgICAgIHRoaXMub25TdWJtaXQodHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRDb252ZXJzYXRpb24oYm90LCBpc05hdmlnYXRlVG9FbmQgPSBmYWxzZSkge1xuICAgIHRoaXMudWNpU2VydmljZS5zdGFydENvbnZlcnNhdGlvbihib3QuaWQpLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsb3NlVmVyaWZ5TW9kYWwoKTtcbiAgICAgICAgaWYgKGlzTmF2aWdhdGVUb0VuZCkge1xuICAgICAgICAgIHRoaXMuYWZ0ZXJCb3RTdWJtaXQoe3F1ZXJ5UGFyYW1zOiB7dGV4dDogdGhpcy5jb252ZXJzYXRpb25Gb3JtLnZhbHVlLnN0YXJ0aW5nTWVzc2FnZSwgYm90SWQ6IGJvdC5pZH19KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVNlZ21lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yLnJlc3VsdCAmJiBlcnJvci5yZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLnJlc3VsdC5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY2xvc2VWZXJpZnlNb2RhbCgpIHtcbiAgICBpZiAodGhpcy52ZXJpZnlBbGxNb2RhbCkge1xuICAgICAgdGhpcy52ZXJpZnlBbGxNb2RhbC5kZW55KCdkZW5pZWQnKTtcbiAgICB9XG4gICAgdGhpcy52ZXJpZnlBbGxJdGVtc01vZGFsID0gZmFsc2U7XG4gIH1cblxuICBvcGVuVGVybUFuZENvbmRpdGlvbk1vZGVsKCkge1xuICAgIC8vIHRoaXMudGVybXNBbmRDb25kaXRpb25Nb2RhbCA9IHRydWU7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQpO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuSXRlbXNWZXJpZnlNb2RhbChpc1N1Ym1pdEJ0bjogYm9vbGVhbikge1xuICAgIHRoaXMudmVyaWZ5QWxsSXRlbXNNb2RhbCA9IHRydWU7XG4gICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc1N1Ym1pdCA9IGlzU3VibWl0QnRuO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50LCB7XG4gICAgICBkYXRhOiB7aXNTdWJtaXQ6IHRoaXMuaXNTdWJtaXR9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm9uU3VibWl0KHJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRCb3REZXRhaWxzKCkge1xuICAgIHRoaXMudWNpU2VydmljZS5nZXRCb3REZXRhaWxzKHRoaXMuY29udmVyc2F0aW9uSWQpLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgIGlmICh2YWwuZGF0YSkge1xuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbkZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgbmFtZTogdmFsLmRhdGEubmFtZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdmFsLmRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgcHVycG9zZTogdmFsLmRhdGEucHVycG9zZSxcbiAgICAgICAgICBzdGFydGluZ01lc3NhZ2U6IHZhbC5kYXRhLnN0YXJ0aW5nTWVzc2FnZSxcbiAgICAgICAgICBzdGF0dXM6IHZhbC5kYXRhLnN0YXR1cyxcbiAgICAgICAgICBzdGFydERhdGU6IHZhbC5kYXRhLnN0YXJ0RGF0ZSA/IG5ldyBEYXRlKG1vbWVudCh2YWwuZGF0YS5zdGFydERhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKSA6IG51bGwsXG4gICAgICAgICAgZW5kRGF0ZTogdmFsLmRhdGEuZW5kRGF0ZSA/IG5ldyBEYXRlKG1vbWVudCh2YWwuZGF0YS5lbmREYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSkgOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFsLmRhdGEuc3RhcnREYXRlKSB7XG4gICAgICAgICAgY29uc3QgbWluRGF0ZSA9IG1vbWVudCgpLmlzQmVmb3JlKG1vbWVudCh2YWwuZGF0YS5zdGFydERhdGUpKSA/IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkJykgOiBtb21lbnQodmFsLmRhdGEuc3RhcnREYXRlKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0TWluRGF0ZSA9IG5ldyBEYXRlKG1vbWVudChtaW5EYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbC5kYXRhLnVzZXJTZWdtZW50cykge1xuICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRzID0gdmFsLmRhdGEudXNlclNlZ21lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwuZGF0YS5sb2dpYykge1xuICAgICAgICAgIHRoaXMuYm90TG9naWNzID0gdmFsLmRhdGEubG9naWM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU3RhcnJpbmdNZXNzYWdlQ2hhbmdlKCkge1xuICAgIC8vIHRoaXMudWNpU2VydmljZS5zZWFyY2hDb252ZXJzYXRpb24oe3N0YXJ0aW5nTWVzc2FnZTogdGhpcy5jb252ZXJzYXRpb25Gb3JtLnZhbHVlLnN0YXJ0aW5nTWVzc2FnZSwgbWF0Y2g6IHRydWV9KS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgLy8gICBpZiAodmFsICYmIHZhbC5kYXRhICYmIHZhbC5kYXRhLmxlbmd0aCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWwuZGF0YSk7XG4gICAgLy8gICAgIHRoaXMuaXNTdGFydGluZ01lc3NhZ2VFeGlzdC5uZXh0KCh0aGlzLmNvbnZlcnNhdGlvbklkICE9PSB2YWwuZGF0YVswXS5pZCkpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy5pc1N0YXJ0aW5nTWVzc2FnZUV4aXN0Lm5leHQoZmFsc2UpO1xuICAgIC8vICAgfVxuICAgIC8vIH0sIGVycm9yID0+IHtcbiAgICAvLyAgIHRoaXMuaXNTdGFydGluZ01lc3NhZ2VFeGlzdC5uZXh0KGZhbHNlKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVTdGFydGluZ01lc3NhZ2UoKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIGNvbnRyb2wgPT4gY29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNDAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgc3dpdGNoTWFwKHZhbHVlID0+IHRoaXMudWNpU2VydmljZS5zZWFyY2hDb252ZXJzYXRpb24oe3N0YXJ0aW5nTWVzc2FnZTogdmFsdWUsIG1hdGNoOiB0cnVlfSkpLFxuICAgICAgICBtYXAoKHZhbCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0nLCB2YWwpO1xuICAgICAgICAgIGxldCBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHZhbCAmJiB2YWwuZGF0YSAmJiB2YWwuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPSAodGhpcy5jb252ZXJzYXRpb25JZCAhPT0gdmFsLmRhdGFbMF0uaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygndmFhYWFhYWEnLCBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0LCBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0ID8ge2FscmVhZHlFeGlzdDogdHJ1ZX0gOiBudWxsKTtcbiAgICAgICAgICByZXR1cm4gaXNTdGFydGluZ01lc3NhZ2VFeGlzdCA/IHthbHJlYWR5RXhpc3Q6IHRydWV9IDogbnVsbDtcbiAgICAgICAgfSkpO1xuICAgIC8qcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9PiB7XG4gICAgICAvLyByZXR1cm4gdGhpcy5pc1N0YXJ0aW5nTWVzc2FnZUV4aXN0LnBpcGUoXG4gICAgICAvLyAgIG1hcCh2YWwgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWFhYWFhYScsIHZhbCwgdmFsID8ge2FscmVhZHlFeGlzdDogdHJ1ZX0gOiBudWxsKTtcbiAgICAgIC8vICAgICByZXR1cm4gdmFsID8ge2FscmVhZHlFeGlzdDogdHJ1ZX0gOiBudWxsO1xuICAgICAgLy8gICB9KVxuICAgICAgLy8gKTtcblxuXG5cbiAgICAgIC8vIHJldHVybiB0aGlzLnVjaVNlcnZpY2Uuc2VhcmNoQ29udmVyc2F0aW9uKHtzdGFydGluZ01lc3NhZ2U6IGNvbnRyb2wudmFsdWUsIG1hdGNoOiB0cnVlfSlcbiAgICAgIC8vICAgLnBpcGUoXG4gICAgICAvLyAgICAgZGVib3VuY2VUaW1lKDEwMDApLFxuICAgICAgLy8gICAgIG1hcCh2YWwgPT4ge1xuICAgICAgLy8gICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgIC8vICAgICAgIGxldCBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0ID0gZmFsc2U7XG4gICAgICAvLyAgICAgICBpZiAodmFsICYmIHZhbC5kYXRhICYmIHZhbC5kYXRhLmxlbmd0aCkge1xuICAgICAgLy8gICAgICAgICBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0ID0gKHRoaXMuY29udmVyc2F0aW9uSWQgIT09IHZhbC5kYXRhWzBdLmlkKTtcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCctLS0tLScsIGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QpO1xuICAgICAgLy8gICAgICAgcmV0dXJuIGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPyB7YWxyZWFkeUV4aXN0OiB0cnVlfSA6IG51bGw7XG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgKTtcbiAgICAgIC8vIHJldHVybiB7YWxyZWFkeUV4aXN0OiB0cnVlfTtcbiAgICB9OyovXG4gIH1cblxuICBvbkJvdExvZ2ljTW9kaWZ5KGxvZ2ljcykge1xuICAgIHRoaXMuYm90TG9naWNzID0gbG9naWNzO1xuICB9XG59XG4iXX0=
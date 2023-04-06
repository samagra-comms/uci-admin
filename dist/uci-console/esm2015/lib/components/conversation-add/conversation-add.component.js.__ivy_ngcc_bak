import { __decorate } from "tslib";
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
let ConversationAddComponent = class ConversationAddComponent {
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
    onSubmit(isTriggerBot = false, isNavigateToEnd = false) {
        const reqObj = Object.assign(Object.assign({}, this.conversationForm.getRawValue()), { users: [], logic: [] });
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
        if (isNavigateToEnd) {
            reqObj.name += ' Broadcast';
            reqObj.startingMessage += ' Broadcast';
        }
        this.isLoaderShow = true;
        if (this.conversationId) {
            this.uciService.botUpdate(this.conversationId, { data: reqObj }).subscribe(data => {
                this.closeVerifyModal();
                this.isLoaderShow = false;
                this.afterBotSubmit({ queryParams: { text: reqObj.startingMessage, botId: this.conversationId } });
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
                if (!isNavigateToEnd) {
                    this.conversationBot = { text: reqObj.startingMessage, botId: data.id };
                }
                if (isTriggerBot) {
                    this.startConversation(data, isNavigateToEnd);
                }
                else {
                    this.closeVerifyModal();
                    this.isLoaderShow = false;
                    if (isNavigateToEnd) {
                        this.afterBotSubmit({ queryParams: { text: reqObj.startingMessage, botId: data.id } });
                    }
                    else {
                        this.createSegment();
                    }
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
    afterBotSubmit(extras) {
        const mappingData = {
            segmentId: parseInt(this.conversationForm.value.segmentId, 10),
            botId: this.conversationBot.botId
        };
        this.uciService.nlSegmentBotMapping(mappingData).subscribe(data => {
            this.router.navigate(['uci-admin/success'], extras);
        });
    }
    createSegment() {
        const segData = {
            name: this.conversationForm.getRawValue().name,
            all: {
                type: 'get',
                config: {
                    url: `http://103.154.251.109:8070/segments/${this.conversationForm.getRawValue().segmentId}/mentors?deepLink=nipunlakshya://chatbot&botId=${this.conversationBot.botId}`,
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
        this.uciService.createUserSegment(segData).subscribe(data => {
            this.userSegments.push(data);
            this.createBroadcastBotLogic();
        });
    }
    createBroadcastBotLogic() {
        for (const botLogic of this.botLogics) {
            botLogic.adapter = this.globalService.getBroadcastAdapterId();
            botLogic.transformers[0].meta.type = 'broadcast';
            botLogic.transformers[0].meta.data = { botId: this.conversationBot.botId };
            this.uciService.createLogic({ data: botLogic }).subscribe((data) => {
                this.isModalLoaderShow = false;
                const existingLogic = botLogic;
                delete existingLogic.id;
                this.broadcastBotLogics.push(Object.assign({ id: data.id }, existingLogic));
                this.afterBroadcastBotLogic();
            }, error => {
                this.isModalLoaderShow = false;
            });
        }
    }
    afterBroadcastBotLogic() {
        if (this.botLogics.length <= this.broadcastBotLogics.length) {
            this.botLogics = this.broadcastBotLogics;
            this.onSubmit(true, true);
        }
    }
    startConversation(bot, isNavigateToEnd = false) {
        this.uciService.startConversation(bot.id).subscribe(data => {
            this.isLoaderShow = false;
            this.closeVerifyModal();
            if (isNavigateToEnd) {
                this.afterBotSubmit({ queryParams: { text: this.conversationForm.value.startingMessage, botId: bot.id } });
            }
            else {
                this.createSegment();
            }
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
    }
    validateStartingMessage() {
        return control => control.valueChanges
            .pipe(debounceTime(400), distinctUntilChanged(), switchMap(value => this.uciService.searchConversation({ startingMessage: value, match: true })), map((val) => {
            console.log('---', val);
            let isStartingMessageExist = false;
            if (val && val.data && val.data.length) {
                isStartingMessageExist = (this.conversationId !== val.data[0].id);
            }
            console.log('vaaaaaaa', isStartingMessageExist, isStartingMessageExist ? { alreadyExist: true } : null);
            return isStartingMessageExist ? { alreadyExist: true } : null;
        }));
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
    }
    onBotLogicModify(logics) {
        this.botLogics = logics;
    }
};
ConversationAddComponent.ctorParameters = () => [
    { type: UciService },
    { type: Router },
    { type: ActivatedRoute },
    { type: FormBuilder },
    { type: GlobalService },
    { type: ToasterService },
    { type: MatDialog }
];
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
export { ConversationAddComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udmVyc2F0aW9uLWFkZC9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBJLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RixPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSw4REFBOEQsQ0FBQztBQUM1RyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQVMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3pGLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBaUNuQyxZQUNVLFVBQXNCLEVBQ3RCLE1BQWMsRUFDZCxjQUE4QixFQUM5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VUFBVSxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEcsT0FBTyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCSTtJQUNOLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFNO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztZQTlXdUIsVUFBVTtZQUNkLE1BQU07WUFDRSxjQUFjO1lBQzFCLFdBQVc7WUFDQSxhQUFhO1lBQ1osY0FBYztZQUN2QixTQUFTOztBQXZDRztJQUE1QixTQUFTLENBQUMsZ0JBQWdCLENBQUM7Z0VBQWdCO0FBQ1o7SUFBL0IsU0FBUyxDQUFDLG1CQUFtQixDQUFDO21FQUFtQjtBQUNwQjtJQUE3QixTQUFTLENBQUMsaUJBQWlCLENBQUM7aUVBQWlCO0FBSG5DLHdCQUF3QjtJQUxwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLG1pVEFBZ0Q7O0tBRWpELENBQUM7R0FDVyx3QkFBd0IsQ0FnWnBDO1NBaFpZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3JGbiwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7TWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtUZXJtc0NvbmRpdGlvbnNDb21wb25lbnR9IGZyb20gJy4uL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHtUZXJtc0NvbmRpdGlvbkNvbmZpcm1Db21wb25lbnR9IGZyb20gJy4uL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpcnN0LCBtYXAsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29udmVyc2F0aW9uLWFkZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25BZGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCd2ZXJpZnlBbGxNb2RhbCcpIHZlcmlmeUFsbE1vZGFsO1xuICBAVmlld0NoaWxkKCdob3Jpem9udGFsU3RlcHBlcicpIGhvcml6b250YWxTdGVwcGVyO1xuICBAVmlld0NoaWxkKCd2ZXJ0aWNhbFN0ZXBwZXInKSB2ZXJ0aWNhbFN0ZXBwZXI7XG4gIGN1cnJlbnRWaWV3U3RhdGUgPSAnQUREX0NPTlZFUlNBVElPTic7XG4gIGNvbnZlcnNhdGlvbkJvdDtcbiAgc3RlcEluZGV4ID0gMTtcbiAgYm90TG9naWNzID0gW107XG4gIGJyb2FkY2FzdEJvdExvZ2ljcyA9IFtdO1xuICB1c2VyU2VnbWVudHMgPSBbXTtcbiAgY29sdW1uID0gJyc7XG4gIHNvcnREaXJlY3Rpb24gPSAnJztcbiAgcmV2ZXJzZSA9IGZhbHNlO1xuICBjb2xsZWN0aW9uTGlzdE1vZGFsID0gZmFsc2U7XG4gIGlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICBpc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICBsb2dpY0Zvcm1SZXF1ZXN0ID0ge307XG4gIGlzQ2hlY2tlZFRlcm1Db25kaXRpb24gPSBmYWxzZTtcbiAgY29udmVyc2F0aW9uRm9ybTogRm9ybUdyb3VwO1xuICB0ZXJtc0FuZENvbmRpdGlvbk1vZGFsID0gZmFsc2U7XG4gIHZlcmlmeUFsbEl0ZW1zTW9kYWwgPSBmYWxzZTtcbiAgY29udmVyc2F0aW9uSWQ7XG4gIHNlbGVjdGVkTG9naWNJbmRleDtcbiAgc3RhcnRNaW5EYXRlID0gbmV3IERhdGUobW9tZW50KCkuc3VidHJhY3QoMSwgJ2QnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XG4gIGVuZE1pbkRhdGU7XG4gIGFsbENoZWNrZWQ6IGJvb2xlYW47XG4gIGlzU3VibWl0OiBib29sZWFuO1xuICBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgaXNTdGFydGluZ01lc3NhZ2VBdmFpbGFibGUgPSBmYWxzZTtcbiAgZmlsZUVycm9yU3RhdHVzO1xuICB1c2VyO1xuICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgKSB7XG4gICAgdGhpcy5lbmRNaW5EYXRlID0gbmV3IERhdGUobW9tZW50KCkuYWRkKDEsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICBpZiAoIXRoaXMudXNlcikge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4nXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29udmVyc2F0aW9uRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgcHVycG9zZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHN0YXJ0aW5nTWVzc2FnZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc3RhcnREYXRlOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbmREYXRlOiBbbnVsbF0sXG4gICAgICBzZWdtZW50SWQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBzdGF0dXM6IFsnZW5hYmxlZCddXG4gICAgfSk7XG5cbiAgICAvLyBFZGl0IGNhc2VcbiAgICB0aGlzLmNvbnZlcnNhdGlvbklkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgaWYgKHRoaXMuY29udmVyc2F0aW9uSWQpIHtcbiAgICAgIHRoaXMuZ2V0Qm90RGV0YWlscygpO1xuICAgIH1cbiAgfVxuXG4gIHVzZXJTZWdtZW50KCkge1xuICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdTRUxFQ1RfU0VHTUVOVCc7XG4gIH1cblxuICBvblVzZXJTZWdtZW50Q2FuY2VsKCkge1xuICAgIHRoaXMuY3VycmVudFZpZXdTdGF0ZSA9ICdBRERfQ09OVkVSU0FUSU9OJztcbiAgfVxuXG4gIG9uVXNlclNlZ21lbnRBZGRDbGljaygpIHtcbiAgICB0aGlzLmN1cnJlbnRWaWV3U3RhdGUgPSAnQUREX1NFR01FTlQnO1xuICB9XG5cbiAgb25Vc2VyU2VnbWVudEFkZChzZWdtZW50cykge1xuICAgIHRoaXMudXNlclNlZ21lbnRzID0gc2VnbWVudHM7XG4gICAgdGhpcy5jdXJyZW50Vmlld1N0YXRlID0gJ0FERF9DT05WRVJTQVRJT04nO1xuICB9XG5cbiAgb25Vc2VyU2VnbWVudENyZWF0ZShzZWdtZW50KSB7XG4gICAgdGhpcy51c2VyU2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICB0aGlzLmN1cnJlbnRWaWV3U3RhdGUgPSAnQUREX0NPTlZFUlNBVElPTic7XG4gIH1cblxuICBvblVzZXJTZWdtZW50RGVsZXRlKGluZGV4KSB7XG4gICAgdGhpcy51c2VyU2VnbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIG5leHRTdGVwKCkge1xuICAgIGlmICh0aGlzLnN0ZXBJbmRleCA9PT0gMSAmJiB0aGlzLmNvbnZlcnNhdGlvbkZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbFN0ZXBwZXIubmV4dCgpO1xuICAgICAgdGhpcy52ZXJ0aWNhbFN0ZXBwZXIubmV4dCgpO1xuICAgICAgdGhpcy5zdGVwSW5kZXggPSAyO1xuICAgIH1cbiAgfVxuXG4gIGJhY2tUb1N0ZXBPbmUoKSB7XG4gICAgaWYgKHRoaXMuc3RlcEluZGV4ID09PSAyKSB7XG4gICAgICB0aGlzLnN0ZXBJbmRleCA9IDE7XG4gICAgICB0aGlzLmhvcml6b250YWxTdGVwcGVyLnByZXZpb3VzKCk7XG4gICAgICB0aGlzLnZlcnRpY2FsU3RlcHBlci5wcmV2aW91cygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQWRkQ2FuY2VsKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluJ10pO1xuICB9XG5cbiAgb25TdWJtaXQoaXNUcmlnZ2VyQm90ID0gZmFsc2UsIGlzTmF2aWdhdGVUb0VuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmVxT2JqID0ge1xuICAgICAgLi4udGhpcy5jb252ZXJzYXRpb25Gb3JtLmdldFJhd1ZhbHVlKCksXG4gICAgICB1c2VyczogW10sXG4gICAgICBsb2dpYzogW11cbiAgICB9O1xuICAgIHRoaXMudXNlclNlZ21lbnRzLmZvckVhY2godXNlclNlZ21lbnQgPT4ge1xuICAgICAgcmVxT2JqLnVzZXJzLnB1c2godXNlclNlZ21lbnQuaWQpO1xuICAgIH0pO1xuICAgIHRoaXMuYm90TG9naWNzLmZvckVhY2gobG9naWMgPT4ge1xuICAgICAgcmVxT2JqLmxvZ2ljLnB1c2gobG9naWMuaWQpO1xuICAgIH0pO1xuICAgIGlmIChyZXFPYmouc3RhcnREYXRlKSB7XG4gICAgICByZXFPYmouc3RhcnREYXRlID0gbW9tZW50KHJlcU9iai5zdGFydERhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIH1cbiAgICBpZiAocmVxT2JqLmVuZERhdGUpIHtcbiAgICAgIHJlcU9iai5lbmREYXRlID0gbW9tZW50KHJlcU9iai5lbmREYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB9XG4gICAgaWYgKGlzTmF2aWdhdGVUb0VuZCkge1xuICAgICAgcmVxT2JqLm5hbWUgKz0gJyBCcm9hZGNhc3QnO1xuICAgICAgcmVxT2JqLnN0YXJ0aW5nTWVzc2FnZSArPSAnIEJyb2FkY2FzdCc7XG4gICAgfVxuXG4gICAgdGhpcy5pc0xvYWRlclNob3cgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuY29udmVyc2F0aW9uSWQpIHtcbiAgICAgIHRoaXMudWNpU2VydmljZS5ib3RVcGRhdGUodGhpcy5jb252ZXJzYXRpb25JZCwge2RhdGE6IHJlcU9ian0pLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVZlcmlmeU1vZGFsKCk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFmdGVyQm90U3VibWl0KHtxdWVyeVBhcmFtczoge3RleHQ6IHJlcU9iai5zdGFydGluZ01lc3NhZ2UsIGJvdElkOiB0aGlzLmNvbnZlcnNhdGlvbklkfX0pO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmIChlcnJvci5yZXN1bHQgJiYgZXJyb3IucmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLnJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVjaVNlcnZpY2UuYm90Q3JlYXRlKHtkYXRhOiByZXFPYmp9KS5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoIWlzTmF2aWdhdGVUb0VuZCkge1xuICAgICAgICAgICAgdGhpcy5jb252ZXJzYXRpb25Cb3QgPSB7dGV4dDogcmVxT2JqLnN0YXJ0aW5nTWVzc2FnZSwgYm90SWQ6IGRhdGEuaWR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNUcmlnZ2VyQm90KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q29udmVyc2F0aW9uKGRhdGEsIGlzTmF2aWdhdGVUb0VuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VWZXJpZnlNb2RhbCgpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChpc05hdmlnYXRlVG9FbmQpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZnRlckJvdFN1Ym1pdCh7cXVlcnlQYXJhbXM6IHt0ZXh0OiByZXFPYmouc3RhcnRpbmdNZXNzYWdlLCBib3RJZDogZGF0YS5pZH19KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2VnbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIGlmIChlcnJvci5yZXN1bHQgJiYgZXJyb3IucmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLnJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFmdGVyQm90U3VibWl0KGV4dHJhcykge1xuICAgIGNvbnN0IG1hcHBpbmdEYXRhID0ge1xuICAgICAgc2VnbWVudElkOiBwYXJzZUludCh0aGlzLmNvbnZlcnNhdGlvbkZvcm0udmFsdWUuc2VnbWVudElkLCAxMCksXG4gICAgICBib3RJZDogdGhpcy5jb252ZXJzYXRpb25Cb3QuYm90SWRcbiAgICB9O1xuXG4gICAgdGhpcy51Y2lTZXJ2aWNlLm5sU2VnbWVudEJvdE1hcHBpbmcobWFwcGluZ0RhdGEpLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbi9zdWNjZXNzJ10sIGV4dHJhcyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVNlZ21lbnQoKSB7XG4gICAgY29uc3Qgc2VnRGF0YSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuY29udmVyc2F0aW9uRm9ybS5nZXRSYXdWYWx1ZSgpLm5hbWUsXG4gICAgICBhbGw6IHtcbiAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIHVybDogYGh0dHA6Ly8xMDMuMTU0LjI1MS4xMDk6ODA3MC9zZWdtZW50cy8ke3RoaXMuY29udmVyc2F0aW9uRm9ybS5nZXRSYXdWYWx1ZSgpLnNlZ21lbnRJZH0vbWVudG9ycz9kZWVwTGluaz1uaXB1bmxha3NoeWE6Ly9jaGF0Ym90JmJvdElkPSR7dGhpcy5jb252ZXJzYXRpb25Cb3QuYm90SWR9YCxcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICBjYWRlbmNlOiB7XG4gICAgICAgICAgICBwZXJQYWdlOiA1LFxuICAgICAgICAgICAgcmV0cmllczogNSxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDYwLFxuICAgICAgICAgICAgY29uY3VycmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogMTAsXG4gICAgICAgICAgICAncmV0cmllcy1pbnRlcnZhbCc6IDEwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYWdlUGFyYW06ICdwYWdlJyxcbiAgICAgICAgICBjcmVkZW50aWFsczoge30sXG4gICAgICAgICAgdG90YWxSZWNvcmRzOiAyMDAwMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ5SUQ6IHt9LFxuICAgICAgYnlQaG9uZToge31cbiAgICB9O1xuICAgIHNlZ0RhdGEuYnlJRCA9IHNlZ0RhdGEuYWxsO1xuICAgIHNlZ0RhdGEuYnlQaG9uZSA9IHNlZ0RhdGEuYWxsO1xuICAgIHRoaXMudWNpU2VydmljZS5jcmVhdGVVc2VyU2VnbWVudChzZWdEYXRhKS5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHtcbiAgICAgICAgdGhpcy51c2VyU2VnbWVudHMucHVzaChkYXRhKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCcm9hZGNhc3RCb3RMb2dpYygpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVCcm9hZGNhc3RCb3RMb2dpYygpIHtcbiAgICBmb3IgKGNvbnN0IGJvdExvZ2ljIG9mIHRoaXMuYm90TG9naWNzKSB7XG4gICAgICBib3RMb2dpYy5hZGFwdGVyID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldEJyb2FkY2FzdEFkYXB0ZXJJZCgpO1xuICAgICAgYm90TG9naWMudHJhbnNmb3JtZXJzWzBdLm1ldGEudHlwZSA9ICdicm9hZGNhc3QnO1xuICAgICAgYm90TG9naWMudHJhbnNmb3JtZXJzWzBdLm1ldGEuZGF0YSA9IHtib3RJZDogdGhpcy5jb252ZXJzYXRpb25Cb3QuYm90SWR9O1xuXG4gICAgICB0aGlzLnVjaVNlcnZpY2UuY3JlYXRlTG9naWMoe2RhdGE6IGJvdExvZ2ljfSkuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5pc01vZGFsTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG9naWMgPSBib3RMb2dpYztcbiAgICAgICAgICBkZWxldGUgZXhpc3RpbmdMb2dpYy5pZDtcbiAgICAgICAgICB0aGlzLmJyb2FkY2FzdEJvdExvZ2ljcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgLi4uZXhpc3RpbmdMb2dpYyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmFmdGVyQnJvYWRjYXN0Qm90TG9naWMoKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuaXNNb2RhbExvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhZnRlckJyb2FkY2FzdEJvdExvZ2ljKCkge1xuICAgIGlmICh0aGlzLmJvdExvZ2ljcy5sZW5ndGggPD0gdGhpcy5icm9hZGNhc3RCb3RMb2dpY3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLmJvdExvZ2ljcyA9IHRoaXMuYnJvYWRjYXN0Qm90TG9naWNzO1xuICAgICAgdGhpcy5vblN1Ym1pdCh0cnVlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzdGFydENvbnZlcnNhdGlvbihib3QsIGlzTmF2aWdhdGVUb0VuZCA9IGZhbHNlKSB7XG4gICAgdGhpcy51Y2lTZXJ2aWNlLnN0YXJ0Q29udmVyc2F0aW9uKGJvdC5pZCkuc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2xvc2VWZXJpZnlNb2RhbCgpO1xuICAgICAgICBpZiAoaXNOYXZpZ2F0ZVRvRW5kKSB7XG4gICAgICAgICAgdGhpcy5hZnRlckJvdFN1Ym1pdCh7cXVlcnlQYXJhbXM6IHt0ZXh0OiB0aGlzLmNvbnZlcnNhdGlvbkZvcm0udmFsdWUuc3RhcnRpbmdNZXNzYWdlLCBib3RJZDogYm90LmlkfX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3JlYXRlU2VnbWVudCgpO1xuICAgICAgICB9XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIHRoaXMudmVyaWZ5QWxsSXRlbXNNb2RhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IucmVzdWx0ICYmIGVycm9yLnJlc3VsdC5lcnJvcikge1xuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoZXJyb3IucmVzdWx0LmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjbG9zZVZlcmlmeU1vZGFsKCkge1xuICAgIGlmICh0aGlzLnZlcmlmeUFsbE1vZGFsKSB7XG4gICAgICB0aGlzLnZlcmlmeUFsbE1vZGFsLmRlbnkoJ2RlbmllZCcpO1xuICAgIH1cbiAgICB0aGlzLnZlcmlmeUFsbEl0ZW1zTW9kYWwgPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5UZXJtQW5kQ29uZGl0aW9uTW9kZWwoKSB7XG4gICAgLy8gdGhpcy50ZXJtc0FuZENvbmRpdGlvbk1vZGFsID0gdHJ1ZTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5JdGVtc1ZlcmlmeU1vZGFsKGlzU3VibWl0QnRuOiBib29sZWFuKSB7XG4gICAgdGhpcy52ZXJpZnlBbGxJdGVtc01vZGFsID0gdHJ1ZTtcbiAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU3VibWl0ID0gaXNTdWJtaXRCdG47XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihUZXJtc0NvbmRpdGlvbkNvbmZpcm1Db21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHtpc1N1Ym1pdDogdGhpcy5pc1N1Ym1pdH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMub25TdWJtaXQocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEJvdERldGFpbHMoKSB7XG4gICAgdGhpcy51Y2lTZXJ2aWNlLmdldEJvdERldGFpbHModGhpcy5jb252ZXJzYXRpb25JZCkuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgaWYgKHZhbC5kYXRhKSB7XG4gICAgICAgIHRoaXMuY29udmVyc2F0aW9uRm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgICBuYW1lOiB2YWwuZGF0YS5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB2YWwuZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBwdXJwb3NlOiB2YWwuZGF0YS5wdXJwb3NlLFxuICAgICAgICAgIHN0YXJ0aW5nTWVzc2FnZTogdmFsLmRhdGEuc3RhcnRpbmdNZXNzYWdlLFxuICAgICAgICAgIHN0YXR1czogdmFsLmRhdGEuc3RhdHVzLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogdmFsLmRhdGEuc3RhcnREYXRlID8gbmV3IERhdGUobW9tZW50KHZhbC5kYXRhLnN0YXJ0RGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJykpIDogbnVsbCxcbiAgICAgICAgICBlbmREYXRlOiB2YWwuZGF0YS5lbmREYXRlID8gbmV3IERhdGUobW9tZW50KHZhbC5kYXRhLmVuZERhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKSA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YWwuZGF0YS5zdGFydERhdGUpIHtcbiAgICAgICAgICBjb25zdCBtaW5EYXRlID0gbW9tZW50KCkuaXNCZWZvcmUobW9tZW50KHZhbC5kYXRhLnN0YXJ0RGF0ZSkpID8gbW9tZW50KCkuc3VidHJhY3QoMSwgJ2QnKSA6IG1vbWVudCh2YWwuZGF0YS5zdGFydERhdGUpO1xuICAgICAgICAgIHRoaXMuc3RhcnRNaW5EYXRlID0gbmV3IERhdGUobW9tZW50KG1pbkRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsLmRhdGEudXNlclNlZ21lbnRzKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VnbWVudHMgPSB2YWwuZGF0YS51c2VyU2VnbWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbC5kYXRhLmxvZ2ljKSB7XG4gICAgICAgICAgdGhpcy5ib3RMb2dpY3MgPSB2YWwuZGF0YS5sb2dpYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25TdGFycmluZ01lc3NhZ2VDaGFuZ2UoKSB7XG4gICAgLy8gdGhpcy51Y2lTZXJ2aWNlLnNlYXJjaENvbnZlcnNhdGlvbih7c3RhcnRpbmdNZXNzYWdlOiB0aGlzLmNvbnZlcnNhdGlvbkZvcm0udmFsdWUuc3RhcnRpbmdNZXNzYWdlLCBtYXRjaDogdHJ1ZX0pLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2codmFsKTtcbiAgICAvLyAgIGlmICh2YWwgJiYgdmFsLmRhdGEgJiYgdmFsLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbC5kYXRhKTtcbiAgICAvLyAgICAgdGhpcy5pc1N0YXJ0aW5nTWVzc2FnZUV4aXN0Lm5leHQoKHRoaXMuY29udmVyc2F0aW9uSWQgIT09IHZhbC5kYXRhWzBdLmlkKSk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmlzU3RhcnRpbmdNZXNzYWdlRXhpc3QubmV4dChmYWxzZSk7XG4gICAgLy8gICB9XG4gICAgLy8gfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgdGhpcy5pc1N0YXJ0aW5nTWVzc2FnZUV4aXN0Lm5leHQoZmFsc2UpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZVN0YXJ0aW5nTWVzc2FnZSgpOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gY29udHJvbCA9PiBjb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg0MDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBzd2l0Y2hNYXAodmFsdWUgPT4gdGhpcy51Y2lTZXJ2aWNlLnNlYXJjaENvbnZlcnNhdGlvbih7c3RhcnRpbmdNZXNzYWdlOiB2YWx1ZSwgbWF0Y2g6IHRydWV9KSksXG4gICAgICAgIG1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJy0tLScsIHZhbCk7XG4gICAgICAgICAgbGV0IGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodmFsICYmIHZhbC5kYXRhICYmIHZhbC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgaXNTdGFydGluZ01lc3NhZ2VFeGlzdCA9ICh0aGlzLmNvbnZlcnNhdGlvbklkICE9PSB2YWwuZGF0YVswXS5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWFhYWFhYScsIGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QsIGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPyB7YWxyZWFkeUV4aXN0OiB0cnVlfSA6IG51bGwpO1xuICAgICAgICAgIHJldHVybiBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0ID8ge2FscmVhZHlFeGlzdDogdHJ1ZX0gOiBudWxsO1xuICAgICAgICB9KSk7XG4gICAgLypyZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0+IHtcbiAgICAgIC8vIHJldHVybiB0aGlzLmlzU3RhcnRpbmdNZXNzYWdlRXhpc3QucGlwZShcbiAgICAgIC8vICAgbWFwKHZhbCA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coJ3ZhYWFhYWFhJywgdmFsLCB2YWwgPyB7YWxyZWFkeUV4aXN0OiB0cnVlfSA6IG51bGwpO1xuICAgICAgLy8gICAgIHJldHVybiB2YWwgPyB7YWxyZWFkeUV4aXN0OiB0cnVlfSA6IG51bGw7XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyApO1xuXG5cblxuICAgICAgLy8gcmV0dXJuIHRoaXMudWNpU2VydmljZS5zZWFyY2hDb252ZXJzYXRpb24oe3N0YXJ0aW5nTWVzc2FnZTogY29udHJvbC52YWx1ZSwgbWF0Y2g6IHRydWV9KVxuICAgICAgLy8gICAucGlwZShcbiAgICAgIC8vICAgICBkZWJvdW5jZVRpbWUoMTAwMCksXG4gICAgICAvLyAgICAgbWFwKHZhbCA9PiB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgLy8gICAgICAgbGV0IGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPSBmYWxzZTtcbiAgICAgIC8vICAgICAgIGlmICh2YWwgJiYgdmFsLmRhdGEgJiYgdmFsLmRhdGEubGVuZ3RoKSB7XG4gICAgICAvLyAgICAgICAgIGlzU3RhcnRpbmdNZXNzYWdlRXhpc3QgPSAodGhpcy5jb252ZXJzYXRpb25JZCAhPT0gdmFsLmRhdGFbMF0uaWQpO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJy0tLS0tJywgaXNTdGFydGluZ01lc3NhZ2VFeGlzdCk7XG4gICAgICAvLyAgICAgICByZXR1cm4gaXNTdGFydGluZ01lc3NhZ2VFeGlzdCA/IHthbHJlYWR5RXhpc3Q6IHRydWV9IDogbnVsbDtcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICApO1xuICAgICAgLy8gcmV0dXJuIHthbHJlYWR5RXhpc3Q6IHRydWV9O1xuICAgIH07Ki9cbiAgfVxuXG4gIG9uQm90TG9naWNNb2RpZnkobG9naWNzKSB7XG4gICAgdGhpcy5ib3RMb2dpY3MgPSBsb2dpY3M7XG4gIH1cbn1cbiJdfQ==
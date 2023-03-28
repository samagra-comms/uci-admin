import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

import {GlobalService} from '../../services/global.service';
import {UciService} from '../../services/uci.service';
import * as moment from 'moment';
import {ToasterService} from '../../services/toaster.service';
import {MatDialog} from '@angular/material/dialog';
import {TermsConditionsComponent} from '../terms-conditions/terms-conditions.component';
import {TermsConditionConfirmComponent} from '../terms-condition-confirm/terms-condition-confirm.component';
import {environment} from '../../../../../../src/environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, first, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'lib-conversation-add',
  templateUrl: './conversation-add.component.html',
  styleUrls: ['./conversation-add.component.scss'],
})
export class ConversationAddComponent implements OnInit {
  @ViewChild('verifyAllModal') verifyAllModal;
  @ViewChild('horizontalStepper') horizontalStepper;
  @ViewChild('verticalStepper') verticalStepper;
  currentViewState = 'ADD_CONVERSATION';
  conversationBot;
  stepIndex = 1;
  botLogics = [];
  broadcastBotLogics = [];
  userSegments = [];
  column = '';
  sortDirection = '';
  reverse = false;
  collectionListModal = false;
  isLoaderShow = false;
  isModalLoaderShow = false;
  logicFormRequest = {};
  isCheckedTermCondition = false;
  conversationForm: FormGroup;
  termsAndConditionModal = false;
  verifyAllItemsModal = false;
  conversationId;
  selectedLogicIndex;
  startMinDate = new Date(moment().subtract(1, 'd').format('YYYY-MM-DD'));
  endMinDate;
  allChecked: boolean;
  isSubmit: boolean;
  isStartingMessageExist: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isStartingMessageAvailable = false;
  fileErrorStatus;
  user;
  resourceService;

  constructor(
    private uciService: UciService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private globalService: GlobalService,
    private toasterService: ToasterService,
    public dialog: MatDialog,
  ) {
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
    const reqObj = {
      ...this.conversationForm.getRawValue(),
      users: [],
      logic: []
    };
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
      this.uciService.botUpdate(this.conversationId, {data: reqObj}).subscribe(
        data => {
          this.closeVerifyModal();
          this.isLoaderShow = false;
          this.afterBotSubmit({queryParams: {text: reqObj.startingMessage, botId: this.conversationId}});
        }, error => {
          this.isLoaderShow = false;
          this.verifyAllItemsModal = true;
          this.allChecked = false;
          if (error.result && error.result.error) {
            this.toasterService.error(error.result.error);
          }
        }
      );
    } else {
      this.uciService.botCreate({data: reqObj}).subscribe(
        (data: any) => {
          if (!isNavigateToEnd) {
            this.conversationBot = {text: reqObj.startingMessage, botId: data.id};
          }
          if (isTriggerBot) {
            this.startConversation(data, isNavigateToEnd);
          } else {
            this.closeVerifyModal();
            this.isLoaderShow = false;
            if (isNavigateToEnd) {
              this.afterBotSubmit({queryParams: {text: reqObj.startingMessage, botId: data.id}});
            } else {
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
        }
      );
    }
  }

  afterBotSubmit(extras) {
    const mappingData = {
      segmentId: parseInt(this.conversationForm.value.segmentId, 10),
      botId: this.conversationBot.botId
    };

    this.uciService.nlSegmentBotMapping(mappingData).subscribe(
      data => {
        this.router.navigate(['uci-admin/success'], extras);
      }
    );
  }

  createSegment() {
    const segData = {
      name: this.conversationForm.getRawValue().name,
      all: {
        type: 'get',
        config: {
          url: `http://103.154.251.109:8070/segments/${this.conversationForm.getRawValue().segmentId}/mentors?deepLink=nipunlakshya://chatbot`,
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
    this.uciService.createUserSegment(segData).subscribe(
      data => {
        this.userSegments.push(data);
        this.createBroadcastBotLogic();
      }
    );
  }

  createBroadcastBotLogic() {
    for (const botLogic of this.botLogics) {
      botLogic.adapter = environment.broadcastAdapterId;
      botLogic.transformers[0].meta.type = 'broadcast';
      botLogic.transformers[0].meta.data = {botId: this.conversationBot.botId};

      this.uciService.createLogic({data: botLogic}).subscribe(
        (data: any) => {
          this.isModalLoaderShow = false;
          const existingLogic = botLogic;
          delete existingLogic.id;
          this.broadcastBotLogics.push({
            id: data.id,
            ...existingLogic,
          });
          this.afterBroadcastBotLogic();
        }, error => {
          this.isModalLoaderShow = false;
        }
      );
    }
  }

  afterBroadcastBotLogic() {
    if (this.botLogics.length <= this.broadcastBotLogics.length) {
      this.botLogics = this.broadcastBotLogics;
      this.onSubmit(true, true);
    }
  }

  startConversation(bot, isNavigateToEnd = false) {
    this.uciService.startConversation(bot.id).subscribe(
      data => {
        this.isLoaderShow = false;
        this.closeVerifyModal();
        if (isNavigateToEnd) {
          this.afterBotSubmit({queryParams: {text: this.conversationForm.value.startingMessage, botId: bot.id}});
        } else {
          this.createSegment();
        }
      }, error => {
        this.verifyAllItemsModal = true;
        this.allChecked = false;
        this.isLoaderShow = false;
        if (error.result && error.result.error) {
          this.toasterService.error(error.result.error);
        }
      }
    );
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

  openItemsVerifyModal(isSubmitBtn: boolean) {
    this.verifyAllItemsModal = true;
    this.allChecked = false;
    this.isSubmit = isSubmitBtn;
    const dialogRef = this.dialog.open(TermsConditionConfirmComponent, {
      data: {isSubmit: this.isSubmit}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.onSubmit(result);
      }
    });
  }

  getBotDetails() {
    this.uciService.getBotDetails(this.conversationId).subscribe((val: any) => {
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

  private validateStartingMessage(): AsyncValidatorFn {
    return control => control.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(value => this.uciService.searchConversation({startingMessage: value, match: true})),
        map((val) => {
          console.log('---', val);
          let isStartingMessageExist = false;
          if (val && val.data && val.data.length) {
            isStartingMessageExist = (this.conversationId !== val.data[0].id);
          }
          console.log('vaaaaaaa', isStartingMessageExist, isStartingMessageExist ? {alreadyExist: true} : null);
          return isStartingMessageExist ? {alreadyExist: true} : null;
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
}

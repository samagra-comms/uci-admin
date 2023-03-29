import { __decorate, __param } from 'tslib';
import { NgModule, ɵɵdefineInjectable, Injectable, ɵɵinject, EventEmitter, Component, ViewChild, Inject, Output, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, Location } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BehaviorSubject, throwError, Subject } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { get, isEmpty, last, find, isEqual, reject } from 'lodash';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as moment from 'moment';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SuiModule } from 'ng2-semantic-ui-v9';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { v4 } from 'uuid';

let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule
        ],
        exports: []
    })
], PipesModule);

let GlobalService = class GlobalService {
    constructor() {
        this.user = new BehaviorSubject(undefined);
        this.user$ = this.user.asObservable();
        this.baseUrl = new BehaviorSubject(undefined);
        this.nlBaseUrl = new BehaviorSubject(undefined);
        this.blobUrl = new BehaviorSubject(undefined);
        this.botPhoneNumber = new BehaviorSubject('');
        this.resourceService = new BehaviorSubject({});
        this.broadcastAdapterId = new BehaviorSubject('');
        this.adapterId = new BehaviorSubject('');
        this.baseUrl$ = this.baseUrl.asObservable();
        this.nlBaseUrl$ = this.nlBaseUrl.asObservable();
        this.resourceService$ = this.resourceService.asObservable();
    }
    setUser(user) {
        this.user.next(user);
    }
    getUser() {
        return this.user.value;
    }
    setBaseUrl(baseUrl) {
        this.baseUrl.next(baseUrl);
    }
    getBaseUrl() {
        return this.baseUrl.value;
    }
    setNlBaseUrl(baseUrl) {
        this.nlBaseUrl.next(baseUrl);
    }
    getNlBaseUrl() {
        return this.nlBaseUrl.value;
    }
    setBlobUrl(baseUrl) {
        this.blobUrl.next(baseUrl);
    }
    getBlobUrl() {
        return this.blobUrl.value;
    }
    setBotPhoneNumber(phoneNumber) {
        this.botPhoneNumber.next(phoneNumber);
    }
    getBotPhoneNumber() {
        return this.botPhoneNumber.value;
    }
    setResourceService(resourceService) {
        this.resourceService.next(resourceService);
    }
    getResourceService() {
        return this.resourceService.value;
    }
    setBroadcastAdapterId(broadcastAdapterId) {
        this.broadcastAdapterId.next(broadcastAdapterId);
    }
    getBroadcastAdapterId() {
        return this.broadcastAdapterId.value;
    }
    setAdapterId(broadcastAdapterId) {
        this.adapterId.next(broadcastAdapterId);
    }
    getAdapterId() {
        return this.adapterId.value;
    }
};
GlobalService.ɵprov = ɵɵdefineInjectable({ factory: function GlobalService_Factory() { return new GlobalService(); }, token: GlobalService, providedIn: "root" });
GlobalService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GlobalService);

let BaseService = class BaseService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
    }
    getDefaultHeaders() {
        const headers = {};
        const user = this.globalService.getUser();
        if (user && user.id) {
            headers.ownerID = user.id;
        }
        if (user && user.rootOrgId) {
            headers.ownerOrgID = user.rootOrgId;
        }
        if (user.token) {
            headers['admin-token'] = user.token;
        }
        return headers;
    }
    getRequest(url, params = {}, headers = {}) {
        headers = Object.assign(Object.assign({}, headers), this.getDefaultHeaders());
        return this.http.get(url, { params, headers }).pipe(map((res) => {
            return res.result;
        }), catchError(err => {
            return this.handleError(err);
        }));
    }
    postRequest(url, data = {}, headers = {}) {
        headers = Object.assign(Object.assign({}, headers), this.getDefaultHeaders());
        return this.http.post(url, data, { headers }).pipe(map((res) => {
            return res.result;
        }), catchError(err => {
            return this.handleError(err);
        }));
    }
    postSegmentRequest(url, data = {}, headers = {}) {
        headers = Object.assign(Object.assign({}, headers), this.getDefaultHeaders());
        return this.http.post(url, data, { headers }).pipe(map((res) => {
            return res.result ? res.result : res;
        }), catchError(err => {
            return this.handleError(err);
        }));
    }
    patchRequest(url, data = {}, headers = {}) {
        headers = Object.assign(Object.assign({}, headers), this.getDefaultHeaders());
        return this.http.patch(url, data, { headers }).pipe(map((res) => {
            return res.result;
        }), catchError(err => {
            return this.handleError(err);
        }));
    }
    deleteRequest(url, headers = {}) {
        headers = Object.assign(Object.assign({}, headers), this.getDefaultHeaders());
        return this.http.delete(url, { headers }).pipe(map((res) => {
            return res.result;
        }), catchError(err => {
            return this.handleError(err);
        }));
    }
    handleError(error) {
        if (error instanceof ErrorEvent) {
            return throwError(error.error.message);
        }
        console.log('=====', error, error.error);
        // this.toasterService.error(this.resourceService.messages.fmsg.m0091);
        return throwError(error.error);
    }
    toFormData(formValue) {
        const formData = new FormData();
        for (const key of Object.keys(formValue)) {
            const value = formValue[key];
            formData.append(key, value);
        }
        return formData;
    }
};
BaseService.ctorParameters = () => [
    { type: HttpClient },
    { type: GlobalService }
];
BaseService.ɵprov = ɵɵdefineInjectable({ factory: function BaseService_Factory() { return new BaseService(ɵɵinject(HttpClient), ɵɵinject(GlobalService)); }, token: BaseService, providedIn: "root" });
BaseService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BaseService);

let UciService = class UciService extends BaseService {
    constructor(http, globalService) {
        super(http, globalService);
        this.http = http;
        this.globalService = globalService;
        this.FORM_BASE_URL = 'https://dev.sunbirded.org/';
        this.globalService.baseUrl$.subscribe(value => {
            if (value) {
                this.BASE_URL = value + '/admin/';
                this.BASE_URL_V1 = value + '/admin/v1/';
                this.BASE_URL_V2 = value + '/admin/v2/';
                this.DATASET_URL = value.replace('/uci') + '/dataset/v1/';
            }
        });
        this.globalService.nlBaseUrl$.subscribe(value => {
            if (value) {
                this.NL_BASE_URL = value + '/';
            }
        });
    }
    fetchConversation(params) {
        return this.getRequest(this.BASE_URL + 'bot/search', params, { asset: 'bot' });
    }
    searchConversation(params) {
        return this.getRequest(this.BASE_URL + 'bot/search', params, { asset: 'bot' });
    }
    pauseConversation(botId) {
        return this.getRequest(this.BASE_URL + `bot/pause/${botId}`, {}, { asset: 'bot' });
    }
    startConversation(botId) {
        return this.getRequest(this.BASE_URL + `bot/start/${botId}`, {}, { asset: 'bot' });
    }
    deleteConversation(botId) {
        return this.getRequest(this.BASE_URL + `bot/delete/${botId}`, {}, { asset: 'bot' });
    }
    getBotDetails(id) {
        return this.getRequest(this.BASE_URL + `bot/get/${id}`, {}, { asset: 'bot' });
    }
    getCheckStartingMessage(param) {
        return this.getRequest(this.BASE_URL + `bot/getByParam`, param, { asset: 'bot' });
    }
    botCreate(data) {
        return this.postRequest(this.BASE_URL + 'bot', data, { asset: 'bot' });
    }
    botUpdate(id, data) {
        return this.postRequest(this.BASE_URL + `bot/update/${id}`, data, { asset: 'bot' });
    }
    // User Segment APIs
    fetchUserSegment(params) {
        return this.getRequest(this.BASE_URL + 'userSegment/get', params, { asset: 'userSegment' });
    }
    searchUserSegment(params) {
        return this.getRequest(this.BASE_URL + 'userSegment/search', params, { asset: 'userSegment' });
    }
    createUserSegment(data) {
        return this.postSegmentRequest(this.BASE_URL + 'user-segment', data, { asset: 'userSegment' });
    }
    userSegmentQueryBuilder(data) {
        return this.postRequest(this.BASE_URL + 'userSegment/queryBuilder', data, { asset: 'userSegment' });
    }
    // Conversation APIs
    createLogic(data) {
        return this.postRequest(this.BASE_URL + 'conversationLogic', data, { asset: 'conversationLogic' });
    }
    updateLogic(id, data) {
        return this.patchRequest(this.BASE_URL + `conversationLogic/${id}`, data, { asset: 'conversationLogic' });
    }
    deleteLogic(id) {
        return this.deleteRequest(this.BASE_URL + `conversationLogic/${id}`, { asset: 'conversationLogic' });
    }
    // Mis APIs
    uploadFile(obj) {
        return this.postRequest(this.BASE_URL + 'form/upload', this.toFormData(obj));
    }
    readForm(data) {
        return this.postRequest(this.FORM_BASE_URL + 'api/data/v1/form/read', data);
    }
    // Exhaust API
    getJobList(id, params) {
        return this.getRequest(this.DATASET_URL + `request/list/${id}`, params, { asset: 'conversationLogic' });
    }
    getJobInfo(id, params) {
        return this.getRequest(this.DATASET_URL + `request/read/${id}`, params, { asset: 'conversationLogic' });
    }
    submitExhaust(data) {
        return this.postRequest(this.DATASET_URL + `request/submit`, data, { asset: 'conversationLogic' });
    }
    nlSegmentBotMapping(data) {
        return this.postRequest(this.NL_BASE_URL + `segment-bot-mapping`, data);
    }
    submitSegmentData(data) {
        return this.postRequest(this.NL_BASE_URL + `segment-bot-mapping`, data);
    }
};
UciService.ctorParameters = () => [
    { type: HttpClient },
    { type: GlobalService }
];
UciService.ɵprov = ɵɵdefineInjectable({ factory: function UciService_Factory() { return new UciService(ɵɵinject(HttpClient), ɵɵinject(GlobalService)); }, token: UciService, providedIn: "root" });
UciService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UciService);

let ConfigService = class ConfigService {
    constructor(activatedRoute, UciService) {
        this.activatedRoute = activatedRoute;
        this.UciService = UciService;
    }
    ngOnInit() {
    }
    setConfig(activatedRoute) {
        activatedRoute.data.subscribe((config) => {
            this._config = config.data;
        });
    }
    setConfigFromParams(activatedRoute) {
        activatedRoute.queryParams.subscribe((params) => {
            const obj = {
                userName: get(params, 'userName'),
                categories: JSON.parse(get(params, 'categories'))
            };
            this._config = obj;
        });
    }
    getConfig() {
        return this._config;
    }
    getCategories() {
        this.getParams = this.getConfig();
        return get(this.getParams, 'categories');
    }
    hasContext() {
        this.hasContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result.length : null)
            : null;
        return this.hasContextData;
    }
    getContext() {
        this.getContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result : null)
            : null;
        return this.getContextData;
    }
    getRouterSlug() {
        return this._config.routerSlug ? this._config.routerSlug : '';
    }
};
ConfigService.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: UciService }
];
ConfigService.ɵprov = ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(ɵɵinject(ActivatedRoute), ɵɵinject(UciService)); }, token: ConfigService, providedIn: "root" });
ConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ConfigService);

var UciData;
(function (UciData) {
    let IPageName;
    (function (IPageName) {
        IPageName["HOME"] = "uci-admin";
        IPageName["LIB_ENTRY"] = "lib-entry";
    })(IPageName = UciData.IPageName || (UciData.IPageName = {}));
})(UciData || (UciData = {}));

/* tslint:enable */
let UciEventsService = class UciEventsService {
    constructor() {
        this.telemetryEvent = new Subject();
        this.actionEvent = new EventEmitter();
    }
    emitTelemetry(event) {
        // console.log('Lib Event', event);
        if (!isEmpty(event)) {
            this.telemetryEvent.next(event);
        }
    }
};
UciEventsService.ɵprov = ɵɵdefineInjectable({ factory: function UciEventsService_Factory() { return new UciEventsService(); }, token: UciEventsService, providedIn: "root" });
UciEventsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UciEventsService);

let TelemetryUtilsService = class TelemetryUtilsService {
    constructor(discussionEvents, router) {
        this.discussionEvents = discussionEvents;
        this.router = router;
        this._context = [];
        this.currentObj = {};
    }
    setContext(context) {
        this._context = context;
        this.currentObj = last(context);
    }
    uppendContext(data) {
        const matchedC = find(this._context, { id: data.id });
        if (!isEmpty(data) && !isEqual(data, matchedC)) {
            this._context.push(data);
        }
        this.currentObj = last(this._context);
    }
    deleteContext(prevTopic) {
        const topic = find(this._context, prevTopic);
        if (topic) {
            this._context = reject(this._context, topic);
        }
    }
    getContext() {
        return this._context;
    }
    logImpression(pageId) {
        this.discussionEvents.emitTelemetry({});
        const impressionEvent = {
            eid: 'IMPRESSION',
            edata: {
                type: 'view',
                pageid: pageId,
                uri: this.router.url
            }
        };
        if (this.currentObj) {
            impressionEvent.context = { cdata: [{
                        id: get(this.currentObj, 'id').toString(),
                        type: get(this.currentObj, 'type')
                    }
                ] };
        }
        this.discussionEvents.emitTelemetry(impressionEvent);
    }
    logInteract(event, pageId) {
        const target = get(event, 'currentTarget.attributes.id') || get(event, 'target.attributes.id') ||
            get(event, 'srcElement.attributes.id');
        const interactEvent = {
            eid: 'INTERACT',
            edata: {
                id: get(target, 'value') || get(event, 'action'),
                type: 'CLICK',
                pageid: pageId
            }
        };
        if (this.currentObj) {
            const object = {
                id: get(this.currentObj, 'id').toString(),
                type: get(this.currentObj, 'type'),
                ver: '1'
            };
            object['rollup'] = this._context.length > 1 ? this.getRollUp() : {};
            interactEvent.context = {
                cdata: [{
                        id: get(this.currentObj, 'id').toString(),
                        type: get(this.currentObj, 'type')
                    }], object
            };
        }
        this.discussionEvents.emitTelemetry(interactEvent);
    }
    getRollUp() {
        const rollUp = {};
        const data = reject(this._context, this.currentObj);
        if (this._context.length > 1) {
            data.forEach((element, index) => {
                // console.log('rollup', element);
                rollUp['l' + (index + 1)] = element.toString();
            });
        }
        if (get(this.currentObj, 'type') !== 'Post') {
            return rollUp;
        }
        return {};
    }
};
TelemetryUtilsService.ctorParameters = () => [
    { type: UciEventsService },
    { type: Router }
];
TelemetryUtilsService.ɵprov = ɵɵdefineInjectable({ factory: function TelemetryUtilsService_Factory() { return new TelemetryUtilsService(ɵɵinject(UciEventsService), ɵɵinject(Router)); }, token: TelemetryUtilsService, providedIn: "root" });
TelemetryUtilsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TelemetryUtilsService);

/* tslint:enable */
let SidePanelComponent = class SidePanelComponent {
    constructor(router, uciService, activatedRoute, telemetryUtils, configService, globalService) {
        this.router = router;
        this.uciService = uciService;
        this.activatedRoute = activatedRoute;
        this.telemetryUtils = telemetryUtils;
        this.configService = configService;
        this.globalService = globalService;
        this.defaultPage = 'categories';
        this.menu = [];
        this.showSideMenu = true;
    }
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        // TODO: loader or spinner
        this.telemetryUtils.setContext([]);
        this.hideSidePanel = document.body.classList.contains('widget');
        this.telemetryUtils.logImpression(UciData.IPageName.HOME);
        this.setMenu();
        if (this.globalService.getResourceService() && this.globalService.getResourceService().languageSelected$) {
            this.globalService.getResourceService().languageSelected$.subscribe(lang => {
                this.menu = [];
                this.setMenu();
            });
        }
    }
    setMenu() {
        var _a, _b;
        this.menu = [
            {
                route: '',
                label: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.conversations,
                enable: true
            }
        ];
    }
    isActive(selectedItem) {
        if (this.router.url.indexOf(`/${selectedItem}`) > -1 || this.selectedTab === selectedItem) {
            if (!this.selectedTab) {
                this.selectedTab = selectedItem;
            }
            return true;
        }
        else if (selectedItem === 'categories' && !this.selectedTab) {
            return true;
        }
        return false;
    }
    navigate(pageName, event) {
        this.selectedTab = pageName;
        this.telemetryUtils.setContext([]);
        if (event) {
            this.telemetryUtils.logInteract(event, UciData.IPageName.HOME);
        }
        this.router.navigate([`uci-admin`]);
        this.closeNav();
    }
    ngOnDestroy() {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }
    showMenuButton() {
        this.showSideMenu = !this.showSideMenu;
    }
    closeNav() {
        this.showSideMenu = !this.showSideMenu;
    }
};
SidePanelComponent.ctorParameters = () => [
    { type: Router },
    { type: UciService },
    { type: ActivatedRoute },
    { type: TelemetryUtilsService },
    { type: ConfigService },
    { type: GlobalService }
];
SidePanelComponent = __decorate([
    Component({
        selector: 'lib-side-panel',
        template: "<ul class=\"sb-sidebar-menu pl-0\" *ngIf=\"!hideSidePanel\">\n    <li *ngFor='let d of menu' class=\"ua-sidebar-menu-list\" [ngClass]=\"{'menu-active': isActive(d.route)}\"\n        (click)=\"navigate(d.route, $event)\" id=\"d.route\"><a>{{d.label}}</a></li>\n</ul>\n\n<!-- for mobile-view -->\n<!--<button type=\"button\" class=\"openbtn\" (click)=\"showMenuButton()\">\u2630</button>\n<div class=\"overlay-sidebar\" *ngIf=\"!showSideMenu\">\n    <div class=\"overlay-sidebar__menu\">\n        <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n        <div class=\"sidebar-menu__content\">\n            <ul class=\"sb-sidebar-menu-mob pl-0\">\n                <li class=\"ua-sidebar-menu-list\" *ngIf=\"false\" (click)=\"navigate('', $event)\" id=\"all-discussions\"><a>Bots</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n",
        styles: [".sb-sidebar-menu{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu li{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu li.menu-active{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.openbtn,.overlay-sidebar{display:none}@media (max-width:768px){.sb-sidebar-menu{display:none}.openbtn{display:inline;border:none;cursor:pointer;height:40px;width:40px;border-radius:16px;font-size:22px;background-color:#fff;box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:#0245fd}.overlay-sidebar{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:#f5f6fa;color:rgba(0,0,0,.87);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.sidebar-menu__content{padding:0 1rem;height:100%}.closebtn{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.ua-sidebar-menu-list{margin-bottom:.5rem;position:relative;padding:.675rem;font-size:.875rem}.sb-sidebar-menu-mob li{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob li.menu-active{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.sb-sidebar-menu-mob li:hover{background-color:var(--white);font-weight:700;color:#002e50}}"]
    })
], SidePanelComponent);

let Helper = class Helper {
    static copyData(id) {
        const val = document.getElementById(id).innerText;
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    static makBotUrl(startingMessage, phoneNumber) {
        return encodeURI('https://api.whatsapp.com/send?text=' + startingMessage + '&phone=' + phoneNumber);
    }
};
Helper.ɵprov = ɵɵdefineInjectable({ factory: function Helper_Factory() { return new Helper(); }, token: Helper, providedIn: "root" });
Helper = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Helper);

let ConversationListComponent = class ConversationListComponent {
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
        }
        this.uciService.searchConversation(param).subscribe(data => this.parseConversations(data));
    }
    parseConversations(data) {
        this.chatBots = [];
        data.data.forEach(bot => {
            const obj = Object.assign(Object.assign({}, bot), { segmentText: '', userCount: 0, status: bot.status || 'Draft' });
            obj.status = bot.status === 'enabled' ? 'Live' : bot.status === 'disabled' ? 'Disabled' : 'Draft';
            const segmentNames = [];
            // bot.userSegments.forEach(userSegment => {
            //     segmentNames.push(userSegment.name);
            //     obj.userCount += (userSegment.count || 0);
            // });
            obj.segmentText = segmentNames.join(', ');
            obj.url = Helper.makBotUrl(bot.startingMessage || '', this.globalService.getBotPhoneNumber());
            obj.botId = bot.id || '';
            this.chatBots.push(obj);
        });
        this.pager.totalItems = data.totalCount;
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
};
ConversationListComponent.ctorParameters = () => [
    { type: UciService },
    { type: Router },
    { type: GlobalService }
];
__decorate([
    ViewChild('botTable')
], ConversationListComponent.prototype, "botTable", void 0);
ConversationListComponent = __decorate([
    Component({
        selector: 'lib-conversation-list',
        template: "<div class=\"uci-container\">\n    <mat-grid-list cols=\"2\" rowHeight=\"4rem\">\n        <mat-grid-tile colspan=\"1\">\n            <div class=\"w-100 text-left\">\n                <mat-form-field>\n                    <input matInput type=\"text\" [(ngModel)]=\"search\"\n                           [placeholder]=\"resourceService.frmelmnts?.btn?.search\"\n                           (keyup.enter)=\"getSearch()\">\n                    <button mat-button matSuffix mat-stroked-button aria-label=\"search\"\n                            class=\"uci-action-button computer only\" (click)=\"getSearch()\">\n<!--                        <mat-icon>search</mat-icon>-->\n                        {{resourceService.frmelmnts?.btn?.search}}\n                    </button>\n                </mat-form-field>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\">\n            <div class=\"pb-10 text-right w-100\">\n                <div class=\"right-floated pt-0\">\n                    <button mat-raised-button class=\"uci-action-button\"\n                            (click)=\"onAddNew()\"> {{resourceService.frmelmnts?.btn?.addNew}} </button>\n                </div>\n            </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n\n    <mat-grid-list cols=\"1\">\n        <table mat-table class=\"computer only\" [dataSource]=\"chatBots\" #botTable>\n            <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.name}}</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.status}} </th>\n                <td mat-cell *matCellDef=\"let element\"\n                    [ngClass]=\"'status-' + (element.status ? element.status.toLowerCase(): '')\"> {{element.status}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"description\">\n                <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.description}}</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"startingMessage\">\n                <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.startingMessage}} </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.startingMessage}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"botUrl\">\n                <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.botUrl}} </th>\n                <td mat-cell *matCellDef=\"let element; let i = index\">\n                    <span class=\"hide\" [id]=\"'copyUrl-' + i\">{{element.url}}</span>\n                    <button mat-raised-button class=\"uci-copy-button\"\n                            (click)=\"onCopy('copyUrl-' + i)\">\n                        {{resourceService.frmelmnts?.btn?.copy}}\n                    </button>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"botId\">\n                <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.botId}}</th>\n                <td mat-cell *matCellDef=\"let element; let i = index\">\n                    <span class=\"hide\" [id]=\"'copyId-' + i\">{{element.id}}</span>\n                    <button mat-raised-button class=\"uci-copy-button\"\n                            (click)=\"onCopy('copyId-' + i)\">\n                        {{resourceService.frmelmnts?.btn?.copy}}\n                    </button>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.action}}</th>\n                <td mat-cell *matCellDef=\"let element; let i = index\" class=\"center aligned\">\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\n                        <mat-icon>more_vert</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\" class=\"uci-list-menu\">\n                        <button mat-menu-item (click)=\"onEdit(element)\">{{resourceService.frmelmnts?.lbl?.edit}} </button>\n                        <button mat-menu-item (click)=\"onDelete(element, i)\">{{resourceService.frmelmnts?.lbl?.delete}} </button>\n                        <button mat-menu-item (click)=\"onStatusChange(element, i)\">\n                            {{element.status === 'Live' ? resourceService.frmelmnts?.lbl?.disable : resourceService.frmelmnts?.lbl?.enable}}\n                        </button>\n                        <button mat-menu-item (click)=\"onReport(element, i)\">\n                            {{resourceService.frmelmnts?.lbl?.report}}\n                        </button>\n                    </mat-menu>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n\n        <div class=\"mobile only\">\n            <div *ngFor=\"let chatBot of chatBots; let i = index\" class=\"mb-5\">\n                <mat-card>\n                    <mat-card-content>\n                        <mat-grid-list cols=\"4\" rowHeight=\"35\">\n                            <mat-grid-tile colspan=\"1\">\n                                <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.name}}</div>\n                            </mat-grid-tile>\n                            <mat-grid-tile colspan=\"3\" class=\"overflow-visible\">\n                                <div class=\"w-100 d-flex justify-between align-middle\">\n                                    <h5>{{chatBot.name}}</h5>\n                                    <button mat-button [matMenuTriggerFor]=\"menuMobile\">\n                                        <mat-icon>more_vert</mat-icon>\n                                    </button>\n                                    <mat-menu #menuMobile=\"matMenu\" class=\"uci-list-menu\">\n                                        <button mat-menu-item (click)=\"onEdit(chatBot)\">{{resourceService.frmelmnts?.lbl?.edit}} </button>\n                                        <button mat-menu-item (click)=\"onDelete(chatBot, i)\">{{resourceService.frmelmnts?.lbl?.delete}} </button>\n                                        <button mat-menu-item (click)=\"onStatusChange(chatBot, i)\">\n                                            {{chatBot.status === 'Live' ? resourceService.frmelmnts?.lbl?.disable : resourceService.frmelmnts?.lbl?.enable}}\n                                        </button>\n                                        <button mat-menu-item (click)=\"onReport(chatBot, i)\">\n                                            {{resourceService.frmelmnts?.lbl?.report}}\n                                        </button>\n                                    </mat-menu>\n                                </div>\n                            </mat-grid-tile>\n                            <mat-grid-tile colspan=\"1\">\n                                <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.description}}</div>\n                            </mat-grid-tile>\n                            <mat-grid-tile colspan=\"3\">\n                                <div class=\"w-100 text-left\">\n                                    {{chatBot.description}}\n                                </div>\n                            </mat-grid-tile>\n                            <mat-grid-tile colspan=\"1\">\n                                <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.startingMessage}}</div>\n                            </mat-grid-tile>\n                            <mat-grid-tile colspan=\"3\">\n                                <div class=\"w-100 d-flex justify-between align-middle\">\n                                    <span>{{chatBot.startingMessage}}</span>\n                                    <span>\n                                        <button mat-flat-button class=\"small-btn\"\n                                                [ngClass]=\"'status-' + (chatBot.status ? chatBot.status.toLowerCase(): '')\">\n                                            {{chatBot.status}}\n                                        </button>\n                                    </span>\n                                </div>\n                            </mat-grid-tile>\n                        </mat-grid-list>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n        </div>\n        <div class=\"uci-mat-pagination\">\n            <mat-paginator [length]=\"pager.totalItems\"\n                           [pageSize]=\"pager.pageSize\"\n                           [pageIndex]=\"pager.currentPage - 1\"\n                           [pageSizeOptions]=\"pager.pageSizeOptions\"\n                           (page)=\"navigateToPage($event)\">\n            </mat-paginator>\n        </div>\n    </mat-grid-list>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .mat-select-panel-wrap{flex-basis:auto}.mat-column-action{width:5px}.uci-list-menu{background:red}.uci-container ::ng-deep .cdk-overlay-pane{width:auto}.ellipsis-icon{font-size:1.2rem}.status-live{color:#3c763d}.status-draft{color:#ffb300}.status-disabled{color:#ff4a2f}.mobile .status-draft{font-weight:900;background-color:rgba(241,210,140,.69)}.mobile .status-disabled{font-weight:900;background-color:rgba(229,135,126,.63)}.mobile .status-live{font-weight:900;background-color:rgba(120,206,122,.58)}.action-dropdown{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown .item{cursor:pointer}.action-dropdown .item:hover{background-color:#f6f6f6}"]
    })
], ConversationListComponent);

/**
 * Service to show toaster
 *
 */
let ToasterService = class ToasterService {
    /**
       * Constructor to create injected service(s) object
       */
    constructor() {
        this.iziToast = iziToast; // global object
        this.iziToast.settings({
            position: 'topCenter',
            titleSize: '18'
        });
    }
    /**
     * Format success message
     * @memberOf Services.toasterService
     * @param {string}  message - Success message
     */
    success(message) {
        this.iziToast.success({
            title: message,
            class: 'sb-toaster sb-toast-success'
        });
    }
    /**
     * Format information message
     * @memberOf Services.toasterService
     * @param {string}  message - Info message
     */
    info(message) {
        this.iziToast.info({
            title: message,
            class: 'sb-toaster sb-toast-info'
        });
    }
    /**
     * Format error message
     * @memberOf Services.toasterService
     * @param {string}  message - Error message
     */
    error(message) {
        this.iziToast.error({
            title: message,
            class: 'sb-toaster sb-toast-error'
        });
    }
    /**
     * Format warning message
     * @memberOf Services.toasterService
     * @param {string}  message - Warning message
     */
    warning(message) {
        this.iziToast.warning({
            title: message,
            class: 'sb-toaster sb-toast-warning'
        });
    }
    /**
     * Custom toaster message to be configured
     * @param config
     */
    custom(config) {
        this.iziToast.show({
            class: config.class,
            message: config.message
        });
    }
};
ToasterService = __decorate([
    Injectable()
], ToasterService);

let TermsConditionsComponent = class TermsConditionsComponent {
    constructor(globalService, dialogRef, data) {
        this.globalService = globalService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
    }
    onCancel() {
        this.dialogRef.close();
    }
};
TermsConditionsComponent.ctorParameters = () => [
    { type: GlobalService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
TermsConditionsComponent = __decorate([
    Component({
        selector: 'lib-terms-conditions',
        template: "<section style=\"background: white;margin-top: 5%;padding: 20px;\">\n    <h1 mat-dialog-title>\n        {{resourceService.frmelmnts?.lbl?.termsConditions}}\n    </h1>\n\n    <div mat-dialog-content class=\"tabs-content-wrapper mb-40\">\n        <sui-tabset>\n            <div class=\"ui secondary menu\">\n                <a class=\"item\" suiTabHeader=\"1\">Terms of Use</a>\n                <a class=\"item\" suiTabHeader=\"2\">Privacy Policy </a>\n                <a class=\"item\" suiTabHeader=\"3\">Content Policy </a>\n                <!--            <a class=\"item\" suiTabHeader=\"4\">Group Guidelines </a>-->\n                <!--            <a class=\"item\" suiTabHeader=\"5\">Course Guidelines </a>-->\n                <a class=\"item\" suiTabHeader=\"6\">Administrator Guidelines </a>\n            </div>\n\n            <!--    terms and use start here-->\n            <div class=\"ui segment\" suiTabContent=\"1\">\n                <div id=\"termsOfUse\" aria-labelledby=\"terms-of-use-tab\">\n                    <h4><strong>Terms of Use</strong></h4>\n                    <label class=\"tagLine\"><em>( Last updated on <b>28-04-2021</b> )</em></label>\n                    <p>\n                        This website is designed, developed and maintained by the National\n                        Council for Educational Research and Training (NCERT) (Ministry of\n                        Education (MoE), Government of India) (together referred to as\n                        \"<strong>GoI</strong>\").\n                    </p>\n                    <p>\n                        These terms of use, as amended, govern the usage of Nipun Lakshya App Chatbot (Digital\n                        Infrastructure for Knowledge Sharing) by its Users (as defined below)\n                        (\"<strong>Terms</strong>\"). Nipun Lakshya App Chatbot is an initiative of the GoI.\n                    </p>\n                    <p>\n                        By using Nipun Lakshya App Chatbot, you have accepted and agree to be governed by these\n                        Terms, as may be amended from time to time. The terms \"you\", \"your\"\n                        hereinafter refer to any User of Nipun Lakshya App Chatbot, including Registered Users (as\n                        defined below).\n                    </p>\n\n\n                    <h4 class=\"sub-heading\">Definitions</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Administrator means any natural person who is a\n                            Registered User and who is authorised to be an administrator by an\n                            Institutional User on behalf of such Institutional User.\n                        </li>\n                        <li>\n                            Content means and includes, as the context\n                            requires, (i) any text, scripts, graphics, photos, sounds, music,\n                            videos, audio-visual combinations, interactive content, features\n                            and other materials you may view, access or contribute, (ii) all\n                            content and postings that are written, uploaded, submitted,\n                            stored, sent, received, shared or otherwise provided by Registered\n                            Users, such as posts, comments, feedback, submissions, responses,\n                            explanation in forums or groups, for teaching and learning\n                            materials, and/or using project/ survey/ observation tools, and\n                            (iii) all types of learning material created, uploaded or consumed\n                            by a User, such as resources (like teaching or learning content\n                            consumed by teachers, parents or students), collections (i.e. sets\n                            of ordered resources bundled together to be consumed as a whole),\n                            books, e-books, lesson plans, questions, assessments, quizzes,\n                            challenges, learning activities, projects, courses and other types\n                            of teaching and learning materials that is meant for wide user\n                            consumption.\n                        </li>\n                        <li>\n                            Nipun Lakshya App Chatbot means <strong>D</strong>igital\n                            <strong>I</strong>nfrastructure for <strong>K</strong>nowledge\n                            <strong>Sha</strong>ring which is the National Platform for School\n                            Education, an initiative of the GoI, and is accessible online at\n                            <a href=\"https://Nipun Lakshya App Chatbot.gov.in/\">https://Nipun Lakshya App Chatbot.gov.in,</a>\n                            through the Nipun Lakshya App Chatbot android application and through the Nipun Lakshya App Chatbot\n                            desktop application, and any includes other sub-domains / extended\n                            domains of Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            Institutional User means and includes MoE, any\n                            Education Departments (of both Central Government and State/UT),\n                            National Council for Educational Research and Training (NCERT),\n                            any State Council for Educational Research and Training (SCERT)\n                            and training statutory body, Government affiliated body,\n                            autonomous authority set up by the Government, Boards and Councils\n                            of education (Central, State and others), Schools, Universities,\n                            Deemed Universities, Autonomous educational institutions, Learning\n                            Centres or other such institutions or organisations who are\n                            authorised to operate as a tenant on the Nipun Lakshya App Chatbot digital\n                            infrastructure.\n                        </li>\n                        <li>\n                            Registered Users are (i) Users of Nipun Lakshya App Chatbot, who\n                            register themselves as users of Nipun Lakshya App Chatbot in accordance with the\n                            requirements specified on Nipun Lakshya App Chatbot, and (ii) Users of Nipun Lakshya App Chatbot who\n                            have been registered on Nipun Lakshya App Chatbot by an Administrator with\n                            permissions to create, curate, review or publish Content for\n                            Nipun Lakshya App Chatbot, and such users can log in to Nipun Lakshya App Chatbot with their registered\n                            credentials.\n                        </li>\n                        <li>\n                            Users are all natural persons who access Nipun Lakshya App Chatbot\n                            and access, view or use Content on Nipun Lakshya App Chatbot, and such Users include\n                            Registered Users of Nipun Lakshya App Chatbot.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Access and Use</h4>\n\n                    <strong>Users</strong> -\n                    <ol class=\"arrow-list\" type=\"i\">\n                        <li>\n                            As a User you represent and warrant that you are of legal age\n                            and are legally competent to form a binding contract (or if\n                            not, you've received your parent's or guardian's permission\n                            to use Nipun Lakshya App Chatbot and they have agreed to these Terms on your\n                            behalf).\n                        </li>\n                        <li>\n                            If you are agreeing to these Terms on behalf of a department,\n                            institution, organization or other legal entity (for example,\n                            if you\u2019re an Administrator agreeing to the Terms on behalf of\n                            your school, institution, organisation, government department,\n                            non-profit entity, etc.), you hereby represent and warrant\n                            that you are duly authorized to agree to these Terms on behalf\n                            of that department, institution, organization or entity and\n                            these Terms are binding on them.\n                        </li>\n                        <li>\n                            If you are agreeing to this Terms on behalf of a student who\n                            is not of legal age, you hereby represent and warrant that you\n                            consent / have obtained consent from the parent(s) / legal\n                            guardian(s) on behalf of such student, to access, view and use\n                            Content on Nipun Lakshya App Chatbot in accordance with these Terms.\n                        </li>\n                        <li>\n                            If you are a student who is not of legal age, you are\n                            accessing Nipun Lakshya App Chatbot with consent of parent/legal guardian, you\n                            can access, view and use Content on Nipun Lakshya App Chatbot without registering\n                            yourself on Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            Users can:\n                            <ol class=\"arrow-list\" type=\"A\">\n                                <li>access and use Content available on Nipun Lakshya App Chatbot,</li>\n                                <li>create and manage their User profiles, and</li>\n                                <li>share Content with other Users.</li>\n                            </ol>\n                        </li>\n                        <li>\n                            Nipun Lakshya App Chatbot should be used for learning and educational purposes.\n                            As a User, you will be responsible for all your actions and\n                            activities in relation to your usage of Nipun Lakshya App Chatbot. All Users must\n                            follow the policies and guidelines of Nipun Lakshya App Chatbot as applicable\n                            from time to time, such as these\n                            <a class=\"TermsOfUseClick\"><b>Terms of\n                                Use</b></a>.\n                        </li>\n                        <li>\n                            Your access and use of Nipun Lakshya App Chatbot may possibly be disrupted due to\n                            technical or operational difficulties, without prior notice of\n                            downtime.\n                        </li>\n                    </ol>\n\n\n                    <strong>Registered Users</strong> -\n                    <ol class=\"arrow-list\" type=\"i\">\n                        <li>\n                            Nipun Lakshya App Chatbot allows Users to register themselves on Nipun Lakshya App Chatbot by:\n                            <ol class=\"arrow-list\" type=\"A\">\n                                <li>Self-registration;</li>\n                                <li>State led registration.</li>\n                            </ol>\n                        </li>\n                        <li>\n                            Depending on your mode of registration, as a Registered User,\n                            Nipun Lakshya App Chatbot collects certain data and information about you in\n                            accordance with the\n                            <a class=\"TermsOfUseClick\"><b>Privacy\n                                Policy of Nipun Lakshya App Chatbot</b></a>. Registered Users may also choose to give their consent for\n                            certain of their data and information to be accessed by\n                            Administrators for specified purposes in accordance with the\n                            relevant policies and guidelines of Nipun Lakshya App Chatbot as applicable from\n                            time to time.\n                        </li>\n                        <li>\n                            Registered Users can use / participate in a variety of\n                            offerings on Nipun Lakshya App Chatbot including:\n                            <ul class=\"arrow-list\">\n                                <li>\n                                    Submitting / posting / uploading / otherwise providing\n                                    Content;\n                                </li>\n                                <li>Accessing courses or other collections of Content;</li>\n                                <li>Creating or participating in Nipun Lakshya App Chatbot Groups.</li>\n                            </ul>\n                        </li>\n                        <li>\n                            All Registered Users (including Administrators) must follow\n                            the policies and guidelines of Nipun Lakshya App Chatbot as applicable from time\n                            to time, including but not limited to these Terms, the Content\n                            Policy of Nipun Lakshya App Chatbot and Privacy Policy of Nipun Lakshya App Chatbot. Some Registered\n                            Users may have read, write and edit rights on Nipun Lakshya App Chatbot to\n                            create, curate, review or publish Content, such rights are\n                            given by Institutional Users.\n                        </li>\n                        <li>\n                            Registered Users are responsible for maintaining the\n                            confidentiality of their User ID and Password and also\n                            responsible for all activities that occur under their User ID\n                            and Password. As a Registered User, you agree,\n                            <em>inter alia</em>, to provide true, accurate, current and\n                            complete information about yourself as prompted by the Nipun Lakshya App Chatbot\n                            registration form or provided by you as a visitor or user of a\n                            third party site through which you access Nipun Lakshya App Chatbot. If you\n                            provide any information that is untrue, inappropriate,\n                            inaccurate, not current or incomplete or there are reasonable\n                            grounds to suspect that such information is untrue,\n                            inaccurate, inappropriate, not current or incomplete, or not\n                            in accordance with these Terms, the administrators and\n                            technology support providers of Nipun Lakshya App Chatbot have the right to\n                            indefinitely suspend or terminate your registration or block\n                            access to and participation in Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            A Registered User may not transfer their registration to\n                            anyone else.\n                        </li>\n                    </ol>\n\n\n                    <strong>Institutional Users </strong>-\n                    <ol class=\"arrow-list\" type=\"i\">\n                        <li>\n                            Institutional Users can operate as a tenant on the Nipun Lakshya App Chatbot\n                            digital infrastructure.\n                        </li>\n                        <li>\n                            Institutional Users shall appoint Administrators and shall be\n                            responsible for the Administrators\u2019 compliance and enforcement\n                            of terms and policies of Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            Institutional Users can authorise Registered Users to create,\n                            curate, review or publish Content or collections of Content\n                            and shall be responsible for such Registered Users\u2019 compliance\n                            with the terms and policies of Nipun Lakshya App Chatbot. For more details on the\n                            role of administrators, creators, contributors, reviewers and\n                            other roles, please visit the\n                            <a href=\"https://Nipun Lakshya App Chatbot.gov.in/help/getting-started/explore-Nipun Lakshya App Chatbot/index.html\"\n                               target=\"_blank\">Help\n                                Center</a>.\n                        </li>\n                        <li>\n                            Institutional Users may run programs on the Nipun Lakshya App Chatbot digital\n                            infrastructure, including (i) to source Content through\n                            programs and tools that invite the participation and\n                            contributions from the education ecosystem, and (ii) to offer\n                            courses, conduct quizzes, competitions, assessments, or other\n                            programs using the various tools available including project /\n                            survey / observation tools that invite the participation of\n                            Users of Nipun Lakshya App Chatbot. Such programs and its participants shall be\n                            governed by the terms and policies of Nipun Lakshya App Chatbot, in addition to\n                            any specific terms of use prescribed for the same.\n                        </li>\n                        <li>\n                            Institutional Users shall be responsible for and shall comply\n                            with Indian law currently in force, including but not limited\n                            to the (Indian) Information Technology (Reasonable Security\n                            Practices and Procedures) Rules, 2011 with respect to any data\n                            and personal information that is collected during the course\n                            of running such programs.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Prohibited Content and Use</h4>\n                    <p>Registered Users shall not:</p>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            use Nipun Lakshya App Chatbot for any purpose other than learning and educational\n                            purposes;\n                        </li>\n                        <li>\n                            post, upload, or distribute any defamatory, libelous, or\n                            inaccurate Content or other content on Nipun Lakshya App Chatbot;\n                        </li>\n                        <li>\n                            post, upload, or distribute any Content or other content that is\n                            unlawful or that a reasonable person could deem to be\n                            objectionable, offensive, indecent, pornographic, harassing,\n                            threatening, vulgar, hateful, racially or ethnically offensive, or\n                            otherwise inappropriate;\n                        </li>\n                        <li>\n                            contribute any Content (including any of the elements that such\n                            Content comprises such as text, scripts, graphics, photos, sounds,\n                            music, videos, audio-visual combinations etc.) that infringes upon\n                            any third party rights including but not limited to intellectual\n                            property rights such as copyrights or any other legal rights of\n                            individual(s)/organisation(s);\n                        </li>\n                        <li>\n                            use Nipun Lakshya App Chatbot in any manner that is harmful to minors, or in any\n                            manner that violates the extant\n                            <a class=\"TermsOfUseClick\"><b>Terms of\n                                Use</b></a>, the\n                            <a class=\"TermsOfUseClick\"><b>Privacy\n                                Policy</b></a>\n                            and the\n                            <a class=\"TermsOfUseClick\"><b>Content\n                                Policy</b></a>;\n                        </li>\n                        <li>\n                            impersonate any person or entity, falsely claim an affiliation\n                            with any person or entity, or access Nipun Lakshya App Chatbot accounts of others\n                            without permission, or perform any other fraudulent activity;\n                        </li>\n                        <li>\n                            delete the copyright or other proprietary rights notices on Nipun Lakshya App Chatbot\n                            or on any licensed Content;\n                        </li>\n                        <li>\n                            assert, or authorize, assist, or encourage any third party to\n                            assert, against Nipun Lakshya App Chatbot any intellectual property infringement\n                            claim regarding any Content you have used, submitted, or otherwise\n                            made available on or through Nipun Lakshya App Chatbot;\n                        </li>\n                        <li>\n                            make unsolicited offers, advertisements, proposals, or send junk\n                            mail or spam to other Users (including, but not limited to,\n                            unsolicited advertising, promotional materials, offerings or other\n                            solicitation material, bulk mailing of commercial advertising,\n                            chain mail, informational announcements, charity requests, and\n                            petitions for signatures);\n                        </li>\n                        <li>\n                            use Nipun Lakshya App Chatbot for any illegal purpose, or in violation of any local,\n                            state, national, or international law, including, without\n                            limitation, laws governing intellectual property and other\n                            proprietary rights, and data protection and privacy;\n                        </li>\n                        <li>\n                            defame, harass, abuse, threaten or defraud Users, or collect, or\n                            attempt to collect, personal information about Users or third\n                            parties without their consent;\n                        </li>\n                        <li>\n                            remove, circumvent, disable, damage or otherwise interfere with\n                            security-related features of Nipun Lakshya App Chatbot;\n                        </li>\n                        <li>\n                            modify, adapt, translate or create derivative works based upon\n                            Content on Nipun Lakshya App Chatbot or any part thereof, except and only to the\n                            extent expressly permitted by the license applicable to such\n                            Content; or\n                        </li>\n                        <li>\n                            intentionally interfere with or damage operation of Nipun Lakshya App Chatbot or any\n                            user's usage of it, by any means, including without limitation by\n                            participation in any denial-of-service type attacks or by\n                            uploading or otherwise disseminating viruses, adware, spyware,\n                            worms, or other malicious code.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Privacy and Personal Information</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Nipun Lakshya App Chatbot takes the privacy of its users very seriously. Please\n                            review the entire\n                            <a class=\"TermsOfUseClick\"><b>Privacy\n                                Policy of Nipun Lakshya App Chatbot</b></a>.\n                        </li>\n                        <li>\n                            By using Nipun Lakshya App Chatbot and/or by providing your information, you consent\n                            to the collection and use of the information you disclose on\n                            Nipun Lakshya App Chatbot in accordance with the policies and guidelines of Nipun Lakshya App Chatbot as\n                            applicable from time to time, including but not limited to the\n                            <a class=\"TermsOfUseClick\"><b>Privacy\n                                Policy of Nipun Lakshya App Chatbot</b></a>.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Content Policy of Nipun Lakshya App Chatbot</h4>\n                    <ol class=\"arrow-list\">\n                        <li>\n                            Nipun Lakshya App Chatbot is an open content repository that has been built with the\n                            purpose to enable greater access to learning and teaching content.\n                            When you use Nipun Lakshya App Chatbot, you join a vast community of learners and\n                            teachers using Nipun Lakshya App Chatbot which involves a certain level of trust.\n                        </li>\n                        <li>\n                            Users are expected to respect that trust and be responsible about\n                            their usage of Nipun Lakshya App Chatbot and all its Content and follow all relevant\n                            terms, policies and guidelines applicable to Content, including\n                            the\n                            <a class=\"TermsOfUseClick\"><b>Content\n                                Policy of Nipun Lakshya App Chatbot</b></a>.\n                        </li>\n                        <li>\n                            By submitting / uploading / creating/ publishing Content on Nipun Lakshya App Chatbot\n                            and following the open license frameworks adopted by Nipun Lakshya App Chatbot,\n                            Registered Users recognise and accept that the Content will be\n                            accessed and used by any individual, institution or organisation\n                            through various platforms, portals and applications in accordance\n                            with license conditions.\n                        </li>\n                        <li>\n                            It shall be the sole responsibility of Registered Users to ensure\n                            that proper and correct attributions, acknowledgements and\n                            sourcing references are given to the Content and individual(s)/\n                            institution(s) that have been involved in the development and\n                            creation of Content and wherever Content has been quoted/used.\n                        </li>\n                        <li>\n                            It shall be the responsibility of Registered Users not to infringe\n                            upon any third party rights including but not limited to\n                            intellectual property rights such as copyrights or any other legal\n                            rights of individual(s)/organisation(s) with regards to Content\n                            (including all the elements that such Content comprises such as\n                            text, scripts, graphics, photos, sounds, music, videos,\n                            audio-visual combinations etc.) contributed on Nipun Lakshya App Chatbot. For any\n                            legal matter arising out of infringement of such rights by the\n                            Registered User, such Registered User shall be solely responsible\n                            for any financial or other damages arising out of such violations\n                            and disputes.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Changes in Nipun Lakshya App Chatbot Policies</h4>\n                    <p>These Terms (including\n                        any policies, terms and guidelines) may be updated or modified from\n                        time to time and the revised Terms will be reflected herein. Your\n                        continued use of Nipun Lakshya App Chatbot constitutes acceptance of the then-current\n                        Terms. Hence, we encourage you to visit this page periodically to\n                        review any changes.\n\n                    </p>\n                    <h4 class=\"sub-heading\">Limited Liability</h4>\n                    <ol class=\"arrow-list\">\n                        <li>\n                            As a User you shall not collect any personal information or\n                            sensitive personal data of other Users through Nipun Lakshya App Chatbot, but if you\n                            do collect such information, you must ensure that such collection,\n                            storage, transfer and disclosure is in accordance with Indian law\n                            currently in force, including but not limited to the (Indian)\n                            Information Technology (Reasonable Security Practices and\n                            Procedures) Rules, 2011.\n                        </li>\n                        <li>\n                            GoI, administrators and technology support providers of Nipun Lakshya App Chatbot and\n                            Institutional Users do not guarantee the accuracy of any of the\n                            Content made available on the Nipun Lakshya App Chatbot. GoI, administrators and\n                            technology support providers of Nipun Lakshya App Chatbot and Institutional Users do\n                            not take responsibility for any external websites linked on\n                            Nipun Lakshya App Chatbot, including compliance with Indian Government Web\n                            Guidelines.\n                        </li>\n                        <li>\n                            Registered Users are solely responsible for maintaining the\n                            security and confidentiality of the username and password. Any\n                            unauthorised use of your username or password or any other breach\n                            of security must be notified by sending an email notification to\n                            <a href=\"mailto:support@teamNipun Lakshya App Chatbot.org\"><b>support@teamNipun Lakshya App Chatbot.org</b></a>. GoI,\n                            administrators and\n                            technology support providers of Nipun Lakshya App Chatbot\n                            and Institutional Users will not be liable for any loss or damage\n                            arising from failure to comply with this provision.\n                        </li>\n                        <li>\n                            Registered Users are responsible for any offensive or unlawful\n                            Content posted, transmitted, sent or communicated through Nipun Lakshya App Chatbot.\n                            GoI, administrators and technology support providers of Nipun Lakshya App Chatbot and\n                            Institutional Users shall not be held responsible for any\n                            offensive or unlawful Content posted, uploaded, transmitted, sent\n                            and received through Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            In no event will GoI, administrators and technology support\n                            providers of Nipun Lakshya App Chatbot or Institutional Users be liable for any\n                            expense, loss or damage including, without limitation, indirect or\n                            consequential loss or damage, or any expense, loss or damage\n                            whatsoever arising from use, or loss of use, of data, arising out\n                            of or in connection with the access or use of Nipun Lakshya App Chatbot.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Termination</h4>\n                    <p>Any violation or breach of these Terms,\n                        including while investigating complaints or alleged violation of these\n                        Terms, may lead to suspension or termination of your registration and\n                        access to Nipun Lakshya App Chatbot.\n                    </p>\n\n                    <h4 class=\"sub-heading\">Electronic Agreement</h4>\n                    <p>This document is a written\n                        agreement, an electronic record and valid and enforceable electronic\n                        agreement / contract under Information Technology Act, 2000 (as\n                        applicable in Republic of India) and rules there under as applicable\n                        and the amended provisions pertaining to electronic records in various\n                        statutes under applicable Indian laws. This electronic record is\n                        generated by a computer system and does not require any physical or\n                        digital signatures. Your usage of Nipun Lakshya App Chatbot shall be your deemed\n                        acceptance of these Terms and all the modifications and updates\n                        thereto.\n                    </p>\n\n                    <h4 class=\"sub-heading\">Governing Law and Dispute Resolution</h4>\n                    <p> These Terms\n                        shall be governed by and construed in accordance with the Indian law.\n                        Any dispute arising under these Terms shall be subject to the\n                        exclusive jurisdiction of the courts of New Delhi, India.\n                    </p>\n\n                    <h4 class=\"sub-heading\">Disclaimer</h4>\n                    <p> Nipun Lakshya App Chatbot IS AVAILABLE ON AN \"AS IS\" BASIS\n                        AND THERE ARE NO WARRANTIES OF ANY KIND WITH RESPECT TO Nipun Lakshya App Chatbot. GOI\n                        AND THE ADMINISTRATORS AND TECHNOLOGY SUPPORT PROVIDERS OF Nipun Lakshya App Chatbot\n                        SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF FITNESS FOR A\n                        PARTICULAR PURPOSE OR NON-INFRINGEMENT. ACCESS AND USE OF Nipun Lakshya App Chatbot\n                        (INCLUDING ANY CONTENT OR INFORMATION) IS ENTIRELY AT YOUR OWN RISK.\n                        IN NO EVENT WILL GOI OR THE ADMINISTRATORS AND TECHNOLOGY SUPPORT\n                        PROVIDERS OF Nipun Lakshya App Chatbot BE LIABLE FOR ANY EXPENSE, LOSS OR DAMAGE\n                        INCLUDING, WITHOUT LIMITATION, INDIRECT OR CONSEQUENTIAL LOSS OR\n                        DAMAGE, OR ANY EXPENSE, LOSS OR DAMAGE WHATSOEVER ARISING FROM USE, OR\n                        LOSS OF USE, OF DATA, ARISING OUT OF OR IN CONNECTION WITH THE USE OF\n                        Nipun Lakshya App Chatbot. WHEN YOU SELECT A LINK TO AN OUTSIDE WEBSITE, YOU ARE LEAVING\n                        Nipun Lakshya App Chatbot AND ARE SUBJECT TO THE PRIVACY AND SECURITY POLICIES OF THE\n                        OWNERS/SPONSORS OF THE OUTSIDE WEBSITE / DOMAIN.\n                    </p>\n\n                    <!--                <div class=\"text-right\">-->\n                    <!--                    <a class=\"text-right TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\">Read-->\n                    <!--                        Privacy Policy of Nipun Lakshya App Chatbot <i class=\"fas fa-chevron-right\"></i>-->\n                    <!--                    </a>-->\n                    <!--                </div>-->\n                </div>\n            </div>\n            <!--    terms and use end here-->\n\n            <!--    Privacy Policy start here-->\n            <div class=\"ui segment\" suiTabContent=\"2\">\n                <div id=\"privacyPolicy\" aria-labelledby=\"privacy-policy-tab\">\n                    <h4><strong>Privacy Policy of Nipun Lakshya App Chatbot</strong></h4>\n                    <label class=\"tagLine\"><em>( Last updated on <b>28-04-2021</b> )</em></label>\n                    <p>\n                        Nipun Lakshya App Chatbot (Digital Infrastructure for Knowledge Sharing ) is the National\n                        Platform for School Education for the benefit of teachers and learners\n                        across India. Nipun Lakshya App Chatbot is an initiative of National Council for\n                        Educational Research and Training (NCERT) (Ministry of Education (MoE),\n                        Government of India). Users of Nipun Lakshya App Chatbot can access content for learning on\n                        the web at\n                        <a href=\"https://Nipun Lakshya App Chatbot.gov.in\" target=\"_blank\">https://Nipun Lakshya App Chatbot.gov.in</a>, through the Nipun Lakshya App Chatbot\n                        mobile application, and the desktop application.\n                    </p>\n                    <p>\n                        The privacy and protection of data of Nipun Lakshya App Chatbot\u2019s Users is of utmost\n                        importance and shall be ensured at all times. This Privacy Policy shall\n                        cover details of data protection and management on Nipun Lakshya App Chatbot, including how\n                        personal data of users of Nipun Lakshya App Chatbot is managed, used and processed. Users\n                        are individuals who access and use Nipun Lakshya App Chatbot and broadly comprise (i) users\n                        who access and use Nipun Lakshya App Chatbot without registering themselves on Nipun Lakshya App Chatbot\n                        (\"<strong>Users</strong>\"), (ii) users who access and use Nipun Lakshya App Chatbot after\n                        registering themselves on Nipun Lakshya App Chatbot (\"<strong>Registered Users</strong>\"),\n                        (iii) users who are registered on Nipun Lakshya App Chatbot and are authorised to be\n                        administrators on behalf of Institutional Users (such as NCERT, State\n                        Education Departments etc.) (\"<strong>Administrators</strong>\").\n                        Institutional Users operate as tenants on Nipun Lakshya App Chatbot. More details on the\n                        rights and responsibilities of Users and Registered Users are set out in\n                        the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>.\n                    </p>\n                    <p>\n                        By accessing and using Nipun Lakshya App Chatbot, and by providing your information on\n                        Nipun Lakshya App Chatbot, you consent to the collection and use of the information you\n                        disclose on Nipun Lakshya App Chatbot by Nipun Lakshya App Chatbot and relevant Administrators of Nipun Lakshya App Chatbot in\n                        accordance with the policies and guidelines of Nipun Lakshya App Chatbot as applicable from\n                        time to time, including the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>\n                        and this\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                            Policy</b></a>. If you do not agree with the contents of this policy, please do not\n                        access or use Nipun Lakshya App Chatbot.\n                    </p>\n                    <p>\n                        This\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                            Policy</b></a>\n                        should be read in conjunction with the <strong>Terms of Use</strong>.\n                        Defined terms used but not defined herein shall have the meaning\n                        ascribed to them in the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>.\n                    </p>\n\n\n                    <h4 class=\"sub-heading\">Rights of Users:</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Right to fair, transparent and lawful collection of your data and\n                            information on Nipun Lakshya App Chatbot\n                        </li>\n                        <li>\n                            Right to be informed about the ways in which your data and\n                            information that is collected on Nipun Lakshya App Chatbot will be used\n                        </li>\n                        <li>\n                            Right to receive all the information you need to provide informed\n                            consent before collection of your personally identifiable\n                            information or sensitive personal data or information on Nipun Lakshya App Chatbot\n                            and sharing of the same with relevant Administrators\n                        </li>\n                        <li>Right to revoke such consent</li>\n                        <li>\n                            Right to privacy and confidentiality regarding your personal data\n                            and information\n                        </li>\n                        <li>\n                            Right to proper use of your personal data and information by\n                            Administrators for specified and legitimate purposes related to\n                            your use of Nipun Lakshya App Chatbot\n                        </li>\n                        <li>\n                            Right to keep your personal information accurate and up to date\n                        </li>\n                        <li>\n                            Right to secure collection, handling and storage of your personal\n                            data and information\n                        </li>\n                        <li>\n                            Right to protection from unauthorised or unlawful use of your\n                            personal data and information\n                        </li>\n                        <li>Right to view and access Nipun Lakshya App Chatbot\u2019s privacy policy</li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Responsibilities of Administrators with respect to User data and\n                        information</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>To respect the privacy and data protection rights of Users</li>\n                        <li>\n                            To ensure the security of and use of data (especially any personal\n                            information) shared by Registered Users is limited solely to the\n                            uses and purposes mentioned here\n                        </li>\n                        <li>\n                            To know that any use of data for purposes outside of the proper\n                            use shall be considered violation of the terms of the policies of\n                            Nipun Lakshya App Chatbot as well as applicable laws and policies of India and they\n                            shall be responsible and liable for such actions and for any loss\n                            or damage arising from failure to comply with this obligation\n                        </li>\n                        <li>\n                            To ensure their communication (if any) with Registered Users is\n                            explicitly limited and relevant to the purpose of their usage of\n                            Nipun Lakshya App Chatbot and meets the Appropriateness standards set out in the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                Policy of Nipun Lakshya App Chatbot</b></a>.\n                        </li>\n                        <li>\n                            To ensure that their Content and programs on Nipun Lakshya App Chatbot are not used\n                            for any of the Prohibited Uses set out in the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">What User data and information is collected on Nipun Lakshya App Chatbot?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            All <strong>Users</strong> can expect the following data and\n                            information of theirs to be collected on Nipun Lakshya App Chatbot:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>\n                                    <strong>Basic Information</strong>: User Type (eg. teacher,\n                                    student, other)\n                                </li>\n                                <li>\n                                    <strong>Geographical Information</strong>: State and District\n                                </li>\n                                <li>\n                                    <strong>Preferences: </strong>Board of interest, Medium of\n                                    instruction, Classes of interest, Subjects of interest\n                                </li>\n                                <li>\n                                    <strong>Nipun Lakshya App Chatbot Usage: </strong>Usage history, time spent on\n                                    Content, Content created/ contributed / published and its\n                                    usage, progress in trackable collections of Content (eg.\n                                    courses), scores &amp; assessment results, question-wise\n                                    answers and other telemetry data in relation to usage of\n                                    Nipun Lakshya App Chatbot, badges generated, certificates issued.\n                                </li>\n                                <li>\n                                    <strong>IP Address</strong>: The IP address of a User is\n                                    collected once for the limited purpose of determining your\n                                    approximate location - the State, City and District of origin.\n                                    The IP address is not stored in the database of Registered\n                                    Users and the precise location of any User cannot be\n                                    determined. The User can confirm or modify the State and\n                                    District details determined on the basis of the IP address.\n                                </li>\n                                <li>\n                                    Nipun Lakshya App Chatbot uses hash digest functions and fingerprinting to create\n                                    unique identifiers for different devices. Nipun Lakshya App Chatbot also uses FCM\n                                    tokens to enable push notifications to your devices, should\n                                    you choose to opt for the same.\n                                </li>\n                                <li>\n                                    Nipun Lakshya App Chatbot also generates a unique identifier for each device used\n                                    to access Nipun Lakshya App Chatbot.\n                                </li>\n                            </ol>\n                        </li>\n                        <li>\n                            In case of <strong>Registered Users</strong>, they can expect the\n                            following additional information of theirs to be collected on\n                            Nipun Lakshya App Chatbot:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>Name</li>\n                                <li>Email Address / Mobile number, and</li>\n                                <li>Nipun Lakshya App Chatbot Password</li>\n                            </ol>\n                        </li>\n                        <li>\n                            <strong>Registered Users </strong>have an option to provide the\n                            following information of theirs (\"<strong>Declared Information</strong>\"), namely:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>Both Email Address and Mobile Number,</li>\n                                <li>Block,</li>\n                                <li>School or Organisation name,</li>\n                                <li>School U-DISE code or Organisation code / number,</li>\n                                <li>ID as provided by your state/board/organisation.</li>\n                            </ol>\n                        </li>\n                        <li>\n                            No other personally identifiable information or sensitive personal\n                            data or information of the User is collected.\n                        </li>\n                        <li>\n                            All <strong>Users </strong>(using the Nipun Lakshya App Chatbot mobile app to access\n                            Nipun Lakshya App Chatbot) have a profile which specifies the User type, Geographical\n                            Information and Preferences. They may choose to customise their\n                            profile by changing these details at any time as well as providing\n                            their name. If Users are using Nipun Lakshya App Chatbot as a guest User, i.e.\n                            without registering on Nipun Lakshya App Chatbot, your User type and Preferences are\n                            stored locally on your device. Only Registered Users can view\n                            their profile on both the Nipun Lakshya App Chatbot mobile app as well as the Nipun Lakshya App Chatbot\n                            web portal, and their profiles specify all the additional\n                            information provided by such a Registered User.\n                        </li>\n                        <li>\n                            <strong>Children as Registered Users</strong>: Nipun Lakshya App Chatbot collects the\n                            \u2018year of birth\u2019 of a User in order to determine whether a User is\n                            below 18 years. In the event a person under 18 years of age is\n                            registering on Nipun Lakshya App Chatbot, Nipun Lakshya App Chatbot prompts the User to provide the\n                            email address or mobile number of a parent / guardian for the\n                            purposes of registration. Children under 18 years of age are\n                            neither required to nor encouraged to provide their personal\n                            information.\n                        </li>\n                        <li>\n                            You represent to us that the data and information you provide on\n                            Nipun Lakshya App Chatbot from time to time is and shall be correct, current and\n                            updated and you have all the rights, permissions and consents to\n                            provide such data and information. Your providing the information\n                            or data and the consequent storage, collection, usage, transfer,\n                            access or processing of the same in accordance with the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>\n                            and this\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                                Policy</b></a>\n                            shall not be in violation of any third party agreement, laws,\n                            charter documents, judgments, orders and decrees.\n                        </li>\n                    </ol>\n\n                    <h4 class=\"sub-heading\"> How is User data and information collected?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Basic Information, Geographical Information and Preferences are\n                            collected when a User accesses and uses Nipun Lakshya App Chatbot for the first time.\n                            These details can be updated by the User from their profile.\n                        </li>\n                        <li>\n                            Usage data of Users is collected as and when a User accesses, uses\n                            and navigates Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            The additional information provided by Registered Users, namely,\n                            (i) Name (ii) Email Address / Mobile Number (iii) Password, is\n                            collected when a User creates a registered account on Nipun Lakshya App Chatbot and\n                            becomes a Registered User or when a Registered User updates their\n                            profile.\n                        </li>\n                        <li>\n                            Declared Information of Registered Users is collected with their\n                            explicit consent when they choose to provide the same on Nipun Lakshya App Chatbot,\n                            through their profile or otherwise.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Who has access to User data and information?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Nipun Lakshya App Chatbot Usage data (including Usage across the States and\n                            Districts) is a part of anonymised and aggregated data sets that\n                            is accessible to relevant Administrators of Nipun Lakshya App Chatbot and to the\n                            employees, contractors or subcontractors of the technology service\n                            providers of Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            If you are a User, your Basic Information, Geographical\n                            Information, Preferences, and Usage data is accessible to the\n                            employees, contractors or subcontractors of the technology service\n                            providers of Nipun Lakshya App Chatbot (under strict confidentiality obligations) if\n                            they need to access the data to process it on behalf of Nipun Lakshya App Chatbot or\n                            an Administrator or to provide the services available on Nipun Lakshya App Chatbot.\n                            For Registered Users, your Name is also accessible in this manner.\n                        </li>\n                        <li>\n                            Registered Users also have an option to explicitly consent to give\n                            relevant Administrators access to their Name, Basic Information,\n                            Preferences, Usage data, and Declared Information for specified\n                            purposes such as implementation of programs on Nipun Lakshya App Chatbot like\n                            courses. Note that Institutional Users are required to ensure that\n                            their respective Administrators comply with and Administrators are\n                            responsible to comply with the relevant policies and guidelines of\n                            Nipun Lakshya App Chatbot as applicable from time to time, including the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>\n                            and this\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                                Policy</b></a>.\n                        </li>\n                        <li>\n                            Usage data which is anonymised and aggregated by State and\n                            District is also available publicly on Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            In order to provide and improve Nipun Lakshya App Chatbot, a limited number of\n                            third-party services require access to some of your personal data\n                            and information, eg. FreshDesk, Google PlayStore. Third party\n                            services are contractually prohibited from using your information\n                            except to provide the service.\n                        </li>\n                        <li>\n                            Your data and information is only accessible outside of the Nipun Lakshya App Chatbot\n                            platform when it is necessary to offer the service, comply with\n                            law, or with your permission.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">What is User data and information used for? </h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Nipun Lakshya App Chatbot processes your data and information when necessary for\n                            providing access to Content for educational purposes and running\n                            programs on Nipun Lakshya App Chatbot. These purposes are legitimate. The uses of\n                            your data are set out below:\n                            <ol class=\"arrow-list\">\n                                <li>\n                                    To create a profile for you to have a customised experience on\n                                    Nipun Lakshya App Chatbot,\n                                </li>\n                                <li>\n                                    To suggest relevant Content for you to conveniently discover\n                                    Content based on your preferences, activities on Nipun Lakshya App Chatbot, and\n                                    Content you are viewing on Nipun Lakshya App Chatbot;\n                                </li>\n                                <li>To enable you to access and use Content on Nipun Lakshya App Chatbot;</li>\n                                <li>\n                                    To enable you to participate in programs run by Institutional\n                                    Users on Nipun Lakshya App Chatbot;\n                                </li>\n                                <li>\n                                    To provide you push notifications on your hand-held devices,\n                                    only if you have provided permission for the same during app\n                                    installation;\n                                </li>\n                                <li>\n                                    To track your progress in collections of Content for which\n                                    progress is tracked / recorded such as courses, TV\n                                    collections, textbooks;\n                                </li>\n                                <li>\n                                    To generate badges for or issue certificates to you upon\n                                    completion of milestones;\n                                </li>\n                                <li>\n                                    To maintain records of your progress and certificates/badges\n                                    in relation to collections of Content you have accessed and\n                                    used;\n                                </li>\n                                <li>\n                                    To measure interest in the offerings on Nipun Lakshya App Chatbot and to improve\n                                    Nipun Lakshya App Chatbot over time;\n                                </li>\n                                <li>\n                                    To track and analyse usage of Content on Nipun Lakshya App Chatbot by\n                                    Administrators and Content providers to improve Nipun Lakshya App Chatbot and its\n                                    offerings over time;\n                                </li>\n                                <li>\n                                    To assess, evaluate, validate Content submitted / posted /\n                                    uploaded by Registered Users;\n                                </li>\n                                <li>\n                                    To report anonymised usage of Nipun Lakshya App Chatbot and its Content by\n                                    Administrators to improve Nipun Lakshya App Chatbot over time;\n                                </li>\n                                <li>\n                                    To contact you and deliver information, administrative\n                                    notices, seek feedback or other communications in connection\n                                    with your usage of Nipun Lakshya App Chatbot. By accepting the\n                                    <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\"\n                                       tabpanetoshow=\"termsOfUse\"><b>Terms of Use</b></a>\n                                    including the Privacy Policy, you expressly agree to receive\n                                    this information;\n                                </li>\n                                <li>\n                                    To suggest details for your profile such as your declared\n                                    State and District;\n                                </li>\n                                <li>\n                                    To resolve disputes, troubleshoot problems, detect and protect\n                                    you against fraud and other criminal activity, enforce the\n                                    Terms of Use and any other agreements;\n                                </li>\n                                <li>\n                                    At times multiple users may be looked at to identify problems\n                                    or resolve disputes, and in particular may examine your\n                                    information or data to identify users using multiple User IDs\n                                    or aliases. Your information or data may be compared or\n                                    reviewed for errors, omissions and for accuracy; and\n                                </li>\n                                <li>\n                                    For any other use that may be described to you at the time of\n                                    collection.\n                                </li>\n                            </ol>\n                        </li>\n                        <li>\n                            The administrators and technology support providers of Nipun Lakshya App Chatbot may\n                            use third parties as service providers to facilitate or outsource\n                            one or more aspects of service operations that are provided on\n                            Nipun Lakshya App Chatbot (e.g., search technology, discussion boards, technical\n                            service providers, affiliate) and therefore some of your\n                            information or data may be provided directly to these service\n                            providers. These service providers are subject to confidentiality\n                            and other legal restrictions that prohibit their use of the\n                            information provided to them for any purpose other than to\n                            facilitate specific website related operations.\n                        </li>\n                        <li>\n                            If we wish to use your data and information for a new purpose, not\n                            covered by this Privacy Policy, then we will provide you with a\n                            new notice explaining this new use prior to commencing the\n                            processing and setting out the relevant purposes and processing\n                            conditions. Where and whenever necessary, we will seek your prior\n                            consent to the new processing, unless authorized by law.\n                        </li>\n                        <li>\n                            In any event, your data will not be used for any of the following\n                            purposes:\n                            <ol class=\"arrow-list\">\n                                <li>Rent or sale or other commercial purposes;</li>\n                                <li>Advertising or marketing;</li>\n                                <li>\n                                    Phone calls or other forms of unsolicited communication that\n                                    is not related to your usage of Nipun Lakshya App Chatbot;\n                                </li>\n                                <li>\n                                    Building a personal profile, other than for educational\n                                    purposes on Nipun Lakshya App Chatbot;\n                                </li>\n                                <li>\n                                    Any of the Prohibited Purposes set out in the\n                                    <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\"\n                                       tabpanetoshow=\"termsOfUse\"><b>Terms of Use</b></a>; and\n                                </li>\n                                <li>\n                                    Any purpose that is not disclosed in this policy or on Nipun Lakshya App Chatbot.\n                                </li>\n                            </ol>\n                        </li>\n                        <li>\n                            Administrators are responsible for any use of data and information\n                            outside the proper use and shall be held accountable for the\n                            violation of the terms and policies of Nipun Lakshya App Chatbot, as well as\n                            applicable laws and policies of India for any misuse.\n                            Administrators shall be liable for such actions and for any loss\n                            or damage arising from failure to comply with the obligation of\n                            proper use of your data and information. Should you believe that\n                            your data or information is being used in a manner inconsistent\n                            with this Privacy Policy, please contact the Nipun Lakshya App Chatbot support team\n                            with the details of your concern by sending an email to\n                            <a href=\"mailto:support@teamNipun Lakshya App Chatbot.org\"><b>support@teamNipun Lakshya App Chatbot.org</b></a>.\n                        </li>\n                        <li>\n                            As a User, you understand, agree and acknowledge that the\n                            collection, storage and processing of your information or data on\n                            Nipun Lakshya App Chatbot is for a lawful purpose connected with a function or\n                            activity of Nipun Lakshya App Chatbot. You further understand, agree and acknowledge\n                            that your information or data which is classified as personal\n                            information as per applicable laws is considered necessary for us\n                            to provide various services on and in relation to Nipun Lakshya App Chatbot to you\n                            and for your usage of Nipun Lakshya App Chatbot.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">How is User data and information stored?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Reasonable and appropriate security practices and procedures are\n                            being adopted to secure your personal data and information in\n                            accordance with Indian laws currently in force, including the\n                            Information Technology (Reasonable Security Practices and\n                            Procedures and Sensitive Personal Data or Information) Rules,\n                            2011. These measures include administrative, physical security,\n                            and technical controls in order to safeguard your personal data\n                            and information.\n                        </li>\n                        <li>\n                            Your data, including your Declared Information, any personally\n                            identifiable information or sensitive personal data or information\n                            is securely stored using Microsoft Azure cloud services which have\n                            it\u2019s servers in India. Your data and information will primarily be\n                            stored in electronic form however certain data may also be stored\n                            in physical form.\n                        </li>\n                        <li>\n                            Third party service providers are engaged to store and process\n                            your data. These service providers are contractually bound to\n                            follow reasonable security standards to safeguard your data.\n                        </li>\n                        <li>\n                            Your email address and mobile number and any other personally\n                            identifiable information is only collected should you choose to\n                            provide the same and it is encrypted and stored securely.\n                            Personally identifiable information is only shared with\n                            Administrators for purposes specified to you, with your explicit\n                            consent and under the obligation that the Administrators will use\n                            such information only in connection with your usage of Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            Your IP address is only collected once for the limited purpose of\n                            ascertaining and suggesting your State and District. Your IP\n                            address is not stored on Nipun Lakshya App Chatbot at any time.\n                        </li>\n                        <li>\n                            Additionally, a variety of methods such as network and\n                            infrastructure security, encryption and manual security procedures\n                            are used to secure your information and data against loss or\n                            damage and to help protect the accuracy and security of your\n                            personal information / general information / usage data and to\n                            prevent unauthorized access or improper use. If you think that\n                            Nipun Lakshya App Chatbot or any your personal information / general information /\n                            usage data is not secure or that there has been unauthorized\n                            access to the website or your personal data, please contact\n                            <a href=\"mailto:support@teamNipun Lakshya App Chatbot.org\"><b>support@teamNipun Lakshya App Chatbot.org</b></a>\n                            immediately.\n                        </li>\n                        <li>\n                            Although Nipun Lakshya App Chatbot strives to protect your personal information and\n                            data, it cannot guarantee the security of your data while it is\n                            being transmitted to its site; any transmission is at your own\n                            risk. Once your information has been received, reasonable\n                            procedures and security features are in place to reasonably\n                            endeavor to prevent unauthorized access in accordance with Indian\n                            law.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">How long is User data and information stored?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Your data will not be retained for a period more than necessary to\n                            fulfill the purposes outlined in this Privacy Policy, unless a\n                            longer retention period is required by law or for directly related\n                            legitimate purposes.\n                        </li>\n                    </ol>\n\n                    <h4 class=\"sub-heading\">What are the system permissions required by the Nipun Lakshya App Chatbot?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Microphone - Your system Microphone will be used if voice\n                            recording is explicitly requested as part of a Content for the\n                            purposes of practice. This voice recording is only stored locally\n                            on your system. Your system Microphone will be used if a\n                            Registered User creating Content wants to add a voice recording to\n                            Content. This voice recording will become part of the Content.\n                        </li>\n                        <li>\n                            Camera - Your system Camera will only be used if you want to scan\n                            QR codes to access Content on Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            Access to file manager - This is used by the Nipun Lakshya App Chatbot android\n                            application to transfer Content to an external storage space.\n                            Additionally, on the Nipun Lakshya App Chatbot desktop app, this is used to transfer\n                            Content to and from an external storage device like a pendrive or\n                            SD card.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Cookies: How are they used? What types of cookies are used? How to\n                        manage your cookies?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Out of all the consumption clients, only the Nipun Lakshya App Chatbot web portal\n                            uses cookies. Nipun Lakshya App Chatbot only uses session cookies, none of the other\n                            types of cookies. Nipun Lakshya App Chatbot session cookies are used to store URLs in\n                            order to better redirect users to the right pages. For example,\n                            when a User signs-in to Nipun Lakshya App Chatbot from the courses page, they'll\n                            need to be redirected back to the courses page at the end of\n                            sign-in for a cleaner user experience. Session cookies are also\n                            used to store whether to use the Content Delivery Network (CDN) to\n                            pull images, plugins and other assets that are shown on the user\n                            interface. This is to enable faster loading of the pages the User\n                            interacts with. No personal information, or user preferences are\n                            stored in cookies.\n                        </li>\n                        <li>\n                            Users can clear their cookies by going to their browser settings\n                            and clearing their browsing data (by specifically checking off the\n                            option to clear cookies). Doing so, does not impact their user\n                            experience on Nipun Lakshya App Chatbot as usage of Nipun Lakshya App Chatbot sets the cookies again.\n                            Users can also choose to block cookies from the settings as well.\n                            Doing so, will mean that certain things on Nipun Lakshya App Chatbot will not\n                            function properly. For eg., images/plugins may take a long time to\n                            load and the user will not be taken to the right pages after\n                            login.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Data and information Nipun Lakshya App Chatbot is not responsible for</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Nipun Lakshya App Chatbot may have Content, webpages, cookies, files, software, data\n                            or other information or communication links that are originated,\n                            created or posted by third parties that may have the capability to\n                            collect, store or use your data or information. The administrators\n                            and technology support providers of Nipun Lakshya App Chatbot are not responsible for\n                            such data or information collected, stored or used by third\n                            parties even if such third parties use Nipun Lakshya App Chatbot to collect, store or\n                            use such data or information.\n                        </li>\n                        <li>\n                            If you access Nipun Lakshya App Chatbot through a third party QR code scanner or\n                            through a web browser, the administrators and technology support\n                            providers of Nipun Lakshya App Chatbot are not responsible for the data or\n                            information collected by such third parties.\n                        </li>\n                        <li>\n                            Nipun Lakshya App Chatbot is not responsible for the privacy practices of other\n                            websites and users need to be aware of the data privacy practices\n                            of such sites should they choose to use these links.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Compliance with laws and law enforcement</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            The administrators and technology support providers of Nipun Lakshya App Chatbot\n                            cooperate with governments and law enforcement agencies or any\n                            third party by any order under law for the time being in force to\n                            enforce and comply with the law. Any information about you will be\n                            disclosed to the government or law enforcement officials or\n                            private parties as, in the sole discretion of the administrators\n                            and technology support providers, if they believe necessary or\n                            appropriate to respond to claims and legal process, to protect\n                            their property and rights or a third party, to protect the safety\n                            of the public or any person, or to prevent or stop any illegal,\n                            unethical or legally actionable activity.\n                        </li>\n                        <li>\n                            Your information or data may also be provided to various tax\n                            authorities upon any demand or request from them. You acknowledge\n                            that Nipun Lakshya App Chatbot can be accessed from anywhere in the world and it will\n                            have users from all over the world and therefore governments,\n                            judiciaries or law enforcement authorities in various parts of the\n                            world may have or assume jurisdiction over Nipun Lakshya App Chatbot and Nipun Lakshya App Chatbot may\n                            be subject to the laws, rules, regulations and judgments of\n                            various countries, states, municipalities or provinces where it\n                            may not have a direct presence to store, process, collect, use or\n                            keep your information or data. You acknowledge that government or\n                            law enforcement authorities in the countries where your data or\n                            information is stored may have the right to decrypt, collect,\n                            monitor or access your data or information, which actions are\n                            completely out of the control of the administrators and technology\n                            support providers of Nipun Lakshya App Chatbot. The administrators and technology\n                            support providers of Nipun Lakshya App Chatbot do not take any responsibility for\n                            such actions.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Deleting your information</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            If you wish to have the information or data that you have provided\n                            deleted, you can always do so by sending an email request to\n                            <a href=\"mailto:support@teamNipun Lakshya App Chatbot.org\"><b>support@teamNipun Lakshya App Chatbot.org</b></a>. You may note that\n                            deletion of certain information or data may\n                            lead to cancellation of your registration with Nipun Lakshya App Chatbot and your\n                            access to certain features of Nipun Lakshya App Chatbot. You also agree and\n                            acknowledge that certain data or information cannot be deleted or\n                            may be prohibited to be deleted as required under any applicable\n                            law, law enforcement requests or under any judicial proceedings.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">Changes to this Privacy Policy</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Nipun Lakshya App Chatbot reserves the right to modify this privacy statement at any\n                            time, so please review it frequently. If a material change is made\n                            to the practices regarding your personally identifiable\n                            information, you will be notified, by means of a notice on Nipun Lakshya App Chatbot.\n                        </li>\n                    </ol>\n\n\n                    <h4 class=\"sub-heading\">How to contact us?</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            If you have any queries, comments, or requests, please contact us\n                            by sending an email to\n                            <a href=\"mailto:support@teamNipun Lakshya App Chatbot.org\"><b>support@teamNipun Lakshya App Chatbot.org</b></a>.\n                        </li>\n                    </ol>\n\n\n                    <!--                <div class=\"text-left\">-->\n                    <!--        <span class=\"text-left\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><i class=\"fas fa-chevron-left\"></i> Read Terms of Use</a>-->\n                    <!--        </span>-->\n                    <!--                    <span class=\"text-right pull-right\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\">Read Content Policy of Nipun Lakshya App Chatbot <i class=\"fa fa-chevron-right\"></i></a>-->\n                    <!--        </span>-->\n                    <!--                </div>-->\n                </div>\n            </div>\n            <!--    Privacy Policy end here-->\n\n            <!--    Content Policy start here-->\n            <div class=\"ui segment\" suiTabContent=\"3\">\n                <div id=\"contentPolicy\" aria-labelledby=\"content-policy-tab\">\n                    <h4><strong>Content Policy of Nipun Lakshya App Chatbot</strong></h4>\n                    <label class=\"tagLine\"><em>( Last updated on <b>28-04-2021</b> )</em></label>\n                    <p>\n                        This Content Policy sets out the guidelines for content to be followed\n                        on Nipun Lakshya App Chatbot. The Nipun Lakshya App Chatbot Strategy and Approach Paper clearly articulates\n                        one of the intentions of Nipun Lakshya App Chatbot - to create a common repository of open\n                        education resources for easy access to teachers across the country. This\n                        Content Policy sets out the principles and process to achieve this end.\n                    </p>\n                    <p>\n                        The content creation and curation process on Nipun Lakshya App Chatbot is envisaged to be\n                        an open process with low barriers to entry. It celebrates and encourages\n                        participation by making it simple to create and share content on the\n                        platform. It avoids creating barriers to entry in the form of\n                        centralized review workflows and federates that process to the community\n                        to police itself. Institutional Users, through their Administrators,\n                        being the custodians of Nipun Lakshya App Chatbot, frame the guidelines and curation rules,\n                        and delegate the authority to curate to the community. This creates a\n                        platform that is open, has low barrier to entry, while the quality of\n                        content is ensured by the federated process.\n                    </p>\n                    <p>\n                        Set out below are some common-sense rules that all Users must comply\n                        with respect to Content on Nipun Lakshya App Chatbot. These rules are to be taken seriously\n                        as Administrators are required to enforce the same strictly. Users are\n                        requested not to look for loopholes or ways around these guidelines and\n                        respect the spirit in which they have been created.\n                    </p>\n                    <p>\n                        Please read this Content Policy carefully, to learn more about the rules\n                        on appropriateness, accuracy, intellectual property rights and licensing\n                        that govern Content on Nipun Lakshya App Chatbot.\n                    </p>\n                    <p>\n                        This Content Policy should be read in conjunction and together with the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>. Defined terms used but not defined herein shall have the meaning\n                        ascribed to them in the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>.\n                    </p>\n                    <h4 class=\"sub-heading\">Principles for Content on Nipun Lakshya App Chatbot</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Content on the Nipun Lakshya App Chatbot will be contributed by various content\n                            contributors across the country. The intent is to enable access to\n                            a wide range and diverse content from across the country so as to\n                            enable better contextualisation of content and wide access for end\n                            users.\n                        </li>\n                        <li>\n                            All content published on Nipun Lakshya App Chatbot belongs to the creators of content\n                            be it individuals or organisations that have made content\n                            available on the platform, they are responsible for use by open\n                            learning platforms and applications therefore, content creators\n                            are responsibles for ensuring accuracy and appropriateness of\n                            content.\n                        </li>\n                        <li>\n                            Users can make multilingual and diverse content available on\n                            Nipun Lakshya App Chatbot ranging from courses for in-service and pre-service\n                            teachers to classroom resources to tools for assessment and\n                            evaluation both of teachers and learners.\n                        </li>\n                        <li>\n                            Content on Nipun Lakshya App Chatbot means and includes, (i) content that is written,\n                            uploaded, submitted, stored, sent, received or shared using\n                            Nipun Lakshya App Chatbot, teaching and learning content in the context of school\n                            education, courses, lesson plans, worksheets, supplemental\n                            materials for classroom and other such learning materials meant\n                            for wide user consumption, and (iii) other types of Content\n                            described in the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>.\n                        </li>\n                        <li>\n                            Registered Users are solely responsible for the accuracy,\n                            appropriateness and violations of any privacy rights, third party\n                            rights including intellectual property rights with regards to\n                            their Content.\n                        </li>\n                        <li>\n                            Different types of Content are submitted/ posted/ uploaded /\n                            published on Nipun Lakshya App Chatbot following different processes and workflows\n                            based on the purpose of the Content. Certain Content, such as\n                            posts, comments, feedback, submissions, responses, explanations in\n                            forums/groups or using project/ survey/ observation tools etc.,\n                            are directly submitted/ posted/ uploaded. Certain Content\n                            contributed by Registered Users that is meant for wider user\n                            consumption is published by Institutional Users after following a\n                            review process described below.\n                        </li>\n                    </ol>\n\n                    <h4 class=\"sub-heading\">Content Contribution</h4>\n                    <p>Content that is published on\n                        Nipun Lakshya App Chatbot for wider user consumption can only be created by Registered\n                        Users who are authorised by an Institutional User to have read, write\n                        and edit rights to create Content. This authorisation may happen at\n                        central level or state level. Each Institutional User has their own\n                        guidelines for such authorisation. Registered Users who create Content\n                        are responsible for creating and contributing Content that complies\n                        with this\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                            Policy</b></a>, the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>\n                        and\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                            Policy</b></a>, and any other policies and guidelines prescribed from time to time.\n                        Registered Users shall have exercised reasonable diligence to satisfy\n                        themselves that their Content is ready for public consumption prior to\n                        being submitted for review and use on Nipun Lakshya App Chatbot.</p>\n\n                    <h4 class=\"sub-heading\">Content Review &amp; Publishing </h4>\n                    <p>All Content published\n                        on Nipun Lakshya App Chatbot for wider user consumption is curated, reviewed and\n                        published by Registered Users who are authorised by an Institutional\n                        to have read, write and edit rights to curate, review or publish\n                        Content. This authorisation may happen at central level or state\n                        level. Each Institutional User has their own guidelines for such\n                        authorisation. Registered Users who curate, review or publish Content\n                        shall ensure that the Content they accept complies with this Content\n                        Policy, the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>\n                        and\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                            Policy</b></a>, and any other policies and guidelines prescribed from time to time.\n                    </p>\n\n                    <h4 class=\"sub-heading\">Accuracy and Appropriateness </h4>- Registered Users must\n                    ensure that all the Content they have created, contributed, reviewed\n                    or published is appropriate and accurate and meets their pedagogical\n                    and usability requirements as prescribed by Institutional Users.\n                    Content identified as inappropriate or inaccurate, as per this Content\n                    Policy, will not be published and can be unilaterally removed from\n                    Nipun Lakshya App Chatbot.\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            <strong>Accurate Content</strong> - All Content must:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>Be factually correct,</li>\n                                <li>\n                                    Use language in text, audio, video and interactive materials\n                                    that is simple and easy to understand, and\n                                </li>\n                                <li>\n                                    Be contextual and relevant to the needs of the intended User.\n                                </li>\n                            </ol>\n                        </li>\n                        <li>\n                            <strong>Inappropriate Content</strong> includes, but is not\n                            limited to:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>\n                                    Hate Speech - by words either written or spoken or by signs or\n                                    by visible representation or otherwise promotes or attempts to\n                                    promote feelings of enmity, hatred or ill-will against persons\n                                    of a:\n                                    <ul class=\"arrow-list\">\n                                        <li>Caste</li>\n                                        <li>Class</li>\n                                        <li>Tribe</li>\n                                        <li>Race</li>\n                                        <li>Ethnicity</li>\n                                        <li>Sex, gender, or gender identity</li>\n                                        <li>National origin</li>\n                                        <li>Religious affiliation</li>\n                                        <li>Sexual orientation, or</li>\n                                        <li>Disabilities or diseases</li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    Sexually explicit content\n                                    <ul class=\"arrow-list\">\n                                        <li>Pornography</li>\n                                        <li>\n                                            Explicit text/images/illustrations/sounds of sexual\n                                            content\n                                        </li>\n                                        <li>Descriptions of sexual acts</li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    Depiction of sexual violence and exploitation\n                                    <ul class=\"arrow-list\">\n                                        <li>\n                                            Includes sexual exploitation of minors, and sexual\n                                            assault.\n                                        </li>\n                                        <li>\n                                            Photographs/ Illustrations/videos depicting incidents of\n                                            sexual violence\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    Depiction of nudity\n                                    <ul class=\"arrow-list\">\n                                        <li>\n                                            Nudity would mean displaying genitals, breasts or buttocks\n                                            (clothed or unclothed) for the purpose of sexual\n                                            gratification.\n                                        </li>\n                                        <li>\n                                            Other than the depiction of body parts which isn\u2019t\n                                            gratuitously graphic and is educational, documentary,\n                                            scientific, or artistic - paintings, sculptures, and other\n                                            art that depicts nude figures, which is posted for\n                                            educational purposes. Providing context will help users\n                                            determine the purpose of the content/asset.\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    Content that promotes violence, including\n                                    <ul class=\"arrow-list\">\n                                        <li>\n                                            Promoting, encouraging, supporting, praising, or condoning\n                                            violent actions, activities and behaviour - verbal,\n                                            physical or emotional.\n                                        </li>\n                                        <li>\n                                            Threatening or inciting others to commit acts of violence\n                                        </li>\n                                        <li>\n                                            Expressing support or praise for groups, people that are\n                                            involved in violent or criminal behaviour\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    Content that promotes/depicts/reflects discrimination and\n                                    bullying or encouraging such behaviour, including:\n                                    <ul class=\"arrow-list\">\n                                        <li>\n                                            Targeting individuals with the intention of degrading or\n                                            shaming them.\n                                        </li>\n                                        <li>\n                                            Illustrations or Images altered to degrade individuals\n                                        </li>\n                                        <li>Photos or videos of physical or verbal bullying</li>\n                                        <li>Sharing personal information or harassing people</li>\n                                        <li>\n                                            Repeatedly targeting other people with unwanted requests\n                                            or messages.\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    Comprises harmful or dangerous content\n                                    <ul class=\"arrow-list\">\n                                        <li>\n                                            which intends to incite violence or encourage dangerous or\n                                            illegal activities that have an inherent risk of serious\n                                            physical harm or death.\n                                        </li>\n                                        <li>\n                                            Encourages dangerous or illegal activities for instance -\n                                            money laundering, gambling, performing stunts, high risk\n                                            activities, choking games, drug use, or other acts where\n                                            serious injury or harm may result. Content that depicts\n                                            dangerous acts may be allowed if the primary purpose is\n                                            educational, documentary, scientific, or artistic (EDSA),\n                                            and isn\u2019t gratuitously graphic.\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li>\n                                    Other possibilities:\n                                    <ul class=\"arrow-list\">\n                                        <li>\n                                            Content which violates the law for the time being in\n                                            force,\n                                        </li>\n                                        <li>\n                                            Content which infringes any trademark, copyright, or other\n                                            intellectual property rights,\n                                        </li>\n                                        <li>\n                                            Content which deceives or misleads the User about the\n                                            origin of such Content and conveys information which is\n                                            grossly offensive or menacing,\n                                        </li>\n                                        <li>\n                                            Content which contains software viruses or any other\n                                            computer code, files or programs designed to interrupt,\n                                            destroy or limit the functionality of any computer\n                                            resource,\n                                        </li>\n                                        <li>\n                                            Content which threatens the unity, integrity, defence,\n                                            security or sovereignty of India, friendly relations with\n                                            foreign states, or public order, or causes incitement to\n                                            the commission of any cognisable offence or prevents\n                                            investigation of any offence or is insulting any other\n                                            nation,\n                                        </li>\n                                        <li>\n                                            Content involvings minors/ children in violence as victims\n                                            or perpetrators or as forced witnesses to violence, or\n                                            showing children as being subjected to any form of child\n                                            abuse,\n                                        </li>\n                                        <li>\n                                            Content involving abuse or ridicule of people with\n                                            disabilities (physical or mental),\n                                        </li>\n                                        <li>Content involving cruelty to, or abuse of animals,</li>\n                                        <li>\n                                            depiction of violence, cruelty and horror, scenes of\n                                            violence primarily,\n                                        </li>\n                                        <li>\n                                            Content involving images/text/ illustrations have the\n                                            effect of encouraging, justifying, glorifying, glamorising\n                                            alcohol drinking, drugs and substance abuse; consumption\n                                            of tobacco or smoking,\n                                        </li>\n                                        <li>\n                                            Content involving degrading or denigrating women in any\n                                            manner,\n                                        </li>\n                                        <li>\n                                            Content involving vulgarity, obscenity or depravity,\n                                        </li>\n                                        <li>\n                                            Content involving dual meaning words as obviously cater to\n                                            baser instincts,\n                                        </li>\n                                        <li>\n                                            Content involving visuals or words contemptuous of racial,\n                                            religious or other groups,\n                                        </li>\n                                        <li>\n                                            Content involving visuals or words which promote\n                                            superstition, communal, obscurantist, anti-scientific\n                                            attitude, and\n                                        </li>\n                                        <li>\n                                            Content involving visuals or words involving defamation of\n                                            an individual or a body of individuals.\n                                        </li>\n                                    </ul>\n                                </li>\n                            </ol>\n                        </li>\n                    </ol>\n\n                    <h4 class=\"sub-heading\">Intellectual Property Rights</h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            Registered Users are solely responsible for Content they have\n                            created, uploaded, sourced, linked, streamed, curated, reviewed,\n                            or published on Nipun Lakshya App Chatbot.\n                        </li>\n                        <li>\n                            Registered Users must ensure that Content (meant for wider user\n                            consumption) that they create, upload, source, link, stream,\n                            curate, review or publish on Nipun Lakshya App Chatbot accurately reflects:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>Author</li>\n                                <li>Copyright holder</li>\n                                <li>Year of copyright</li>\n                                <li>\n                                    Attributions to creators whose content has been relied on,\n                                    used in, or referred to in the Content (if any) and sources\n                                    and citations.\n                                </li>\n                                <li>The relevant license, as per the Licensing Policy</li>\n                            </ol>\n                        </li>\n                        <li>\n                            Registered Users who have copyright in the Content they have\n                            contributed, consent to publication of their Content in accordance\n                            with the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>\n                            and this\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                Policy</b></a>.\n                        </li>\n                        <li>\n                            In relation to Content being contributed by any person other than\n                            the copyright holder of the Content, Registered Users must ensure\n                            that they have the necessary authorisation, consent, license, or\n                            permission to publish such Content in accordance with the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>\n                            and this\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                Policy</b></a>.\n                        </li>\n                        <li>\n                            If Content includes copyrighted materials (including text, images,\n                            photos, illustrations, sounds, music, videos, audio-visual\n                            combinations, etc.), Registered Users (creators, curators,\n                            reviewers and publishers) must ensure compliance with the license\n                            terms, proper attribution and any other third party intellectual\n                            property rights. Infringement of copyright or any other\n                            intellectual property rights is not acceptable, the proper\n                            attributions and acknowledgement of authors and creators for open\n                            education resource community and creative commons community must\n                            be respected and upheld at all times. Administrators and\n                            technology support providers of Nipun Lakshya App Chatbot will remove any Content if\n                            properly notified that such Content infringes on another's\n                            intellectual property rights or violates this Content Policy,\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>\n                            and / or the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                                Policy</b></a>.\n                        </li>\n                        <li>\n                            By submitting / uploading / creating/ publishing Content on Nipun Lakshya App Chatbot\n                            and following the open license frameworks adopted by Nipun Lakshya App Chatbot,\n                            Registered Users recognise and accept that the Content (including\n                            all the elements that such Content comprises such as text,\n                            scripts, graphics, photos, sounds, music, videos, audio-visual\n                            combinations etc.) is placed in public domain will be accessed and\n                            used by any individual, institution or organisation through\n                            various platforms, portals and applications in accordance with the\n                            license conditions.\n                        </li>\n                        <li>\n                            It shall be the sole responsibility of Registered Users to ensure\n                            that proper and correct attributions, acknowledgements and\n                            sourcing references are given to the Content and individual(s)/\n                            institution(s) that have been involved in the development and\n                            creation of Content and wherever Content has been quoted/used.\n                        </li>\n                        <li>\n                            It shall be the responsibility of Registered Users not to infringe\n                            upon any third party rights including but not limited to\n                            intellectual property rights such as copyrights or any other legal\n                            rights of individual(s)/organisation(s) with regards to Content\n                            contributed on Nipun Lakshya App Chatbot. For any legal matter arising out of\n                            infringement of such rights by the Registered User, such\n                            Registered User shall be solely responsible for any financial or\n                            other damages arising out of such violations and disputes.\n                        </li>\n                        <li>\n                            GoI and/or the administrators and technology support providers of\n                            Nipun Lakshya App Chatbot are not responsible for the violations of any third party\n                            rights including intellectual property rights by any User.\n                        </li>\n                        <li>\n                            Any violations of intellectual property rights will be the\n                            responsibility of the concerned Users. Any disputes will be\n                            settled by the respective parties.\n                        </li>\n                        <li>\n                            GoI and/or the administrators and technology support providers of\n                            Nipun Lakshya App Chatbot do not endorse any Content published on Nipun Lakshya App Chatbot, or any\n                            opinion, recommendation, or advice expressed therein, and Nipun Lakshya App Chatbot\n                            expressly disclaims any and all liability in connection with\n                            Content.\n                        </li>\n                    </ol>\n\n                    <h4 class=\"sub-heading\">Open Licensing Policy - Creative Commons Framework</h4>\n                    <ol class=\"arrow-list\">\n                        <li>\n                            Nipun Lakshya App Chatbot follows principles of open access, open licensing and is a\n                            platform for open education resources. Registered Users must\n                            ensure that they follow these licensing terms. Content which does\n                            not follow these licensing terms shall be rejected.\n                        </li>\n                        <li>\n                            Content must be made available under the Creative Commons Licence\n                            Framework. Creative Commons licenses provide an easy way to manage\n                            the copyright terms that attach automatically to all creative\n                            material under copyright. Creative Commons licenses allow that\n                            material to be shared and reused under terms that are flexible and\n                            legally sound. Creative Commons offers a core suite of six\n                            copyright licenses. Anyone can use Creative Commons licensed\n                            materials as long as the license conditions are followed. One\n                            condition of all Creative Commons licenses is attribution. Nipun Lakshya App Chatbot\n                            permits the use of the following licences:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>\n                                    <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\">CC BY4.0</a>\n                                    (Attribution)\n                                </li>\n                                <li>\n                                    <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\">CC BY-SA 4.0</a>\n                                    (Attribution-ShareAlike)\n                                </li>\n                                <li>\n                                    <a href=\"https://creativecommons.org/licenses/by-nc/4.0/legalcode\">CC BY-NC 4.0</a>\n                                    (Attribution-NonCommercial)\n                                </li>\n                                <li>\n                                    <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode\">CC BY-NC-SA\n                                        4.0</a>\n                                    (Attribution-NonCommercial-ShareAlike)\n                                </li>\n                                <li>\n                                    <a href=\"https://creativecommons.org/licenses/by-nd/4.0/legalcode\">CC BY-ND 4.0</a>\n                                    (Attribution-Non-Derivative)\n                                </li>\n                                <li>YouTube License</li>\n                            </ol>\n                        </li>\n                        <li>\n                            Registered Users must ensure that the Content submitted to be\n                            published on the Nipun Lakshya App Chatbot for wider user consumption specifies:\n                            <ol class=\"arrow-list\">\n                                <li>\n                                    the relevant license under which such Content will be\n                                    available to the Users.\n                                </li>\n                                <li>\n                                    That the appropriate license terms and well as attributions\n                                    relating to such Content are properly followed, including\n                                    details of the creator and source/ citations;\n                                </li>\n                                <li>\n                                    That license options mentioned herein are followed in all\n                                    cases, and that the relevant license should be compatible with\n                                    the copyright license applicable to the original piece of\n                                    content.\n                                </li>\n                            </ol>\n                        </li>\n                        <li>\n                            Registered Users acknowledge and accept that since the Content\n                            provided herein follows open licensing norms such as creative\n                            commons licenses or other open licenses, the use of the Content\n                            shall not be limited to specific Institutional Users/ Registered\n                            Users that have published the Content and they shall be made\n                            available for discovery, access and use by any organisation,\n                            institution, platform, application and individual in general.\n                        </li>\n                        <li>\n                            Registered Users recognise and accept that once Content is\n                            submitted and placed in the public domain for use, they cannot\n                            unilaterally withdraw the Content or change the licensing terms.\n                        </li>\n                    </ol>\n\n                    <h4 class=\"sub-heading\">Bad Practices:</h4> Registered Users must not indulge in\n                    any of the following bad practices in relation to their Content,\n                    including:\n                    <ol class=\"arrow-list\">\n                        <li>\n                            <em>Uploading Content (including photos or videos) of individuals\n                                without their consent</em>: Photos or videos which include other people who are not the\n                            subject of the photo and have not signed a consent / release form\n                            to share those photos or videos, are not permitted. Any person\n                            that appears in the photo or video (whose face is visible) must\n                            have signed a consent / release form where they consent to the\n                            sharing of such photo(s) with third parties. If the individual is\n                            a child under the age of 18 years, the parents or guardians of\n                            such child must have signed such consent/ release form.\n                        </li>\n                        <li>\n                            <em>Uploading Content (including photos or videos) with ethical\n                                issues: </em>Photographs or videos containing violent, pornographic, sensitive\n                            content or other inappropriate Content described in this Content\n                            Policy that could, in some way, offend our Users are not\n                            permitted.\n                        </li>\n                        <li>\n                            <em>Uploading Content (including photos, videos or documents) which\n                                require authorisation from the author / owner: </em>Certain types of Content (including\n                            photographs, videos or\n                            documents) require the permission of the author / owner such as\n                            copyrighted works (eg. logos, literary or artworks), or\n                            confidential documents. It is important that before uploading such\n                            Content, appropriate written permissions are taken.\n                        </li>\n                        <li>\n                            <em>Uploading Content which doesn\u2019t meet specified technical or\n                                visual requirements.\n                            </em>\n                        </li>\n                        <li><em>Uploading repeats of the same Content. </em></li>\n                        <li><em>Uploading files that contain viruses or malware.</em></li>\n                    </ol>\n\n                    <h4 class=\"sub-heading\">Takedown Policy - </h4>\n                    <ol class=\"arrow-list\">\n                        <li>\n                            If a User believes that certain Content published on Nipun Lakshya App Chatbot is in\n                            violation of this Content Policy or any applicable laws please\n                            contact us at\n                            <a href=\"mailto:support@teamNipun Lakshya App Chatbot.org\"><b>support@teamNipun Lakshya App Chatbot.org</b></a>\n                            and necessary action will be taken to review and / or remove such\n                            content as quickly as possible.\n                        </li>\n                        <li>\n                            Administrators and technology support providers of Nipun Lakshya App Chatbot reserve\n                            the right to remove Content from Nipun Lakshya App Chatbot without any prior notice\n                            for any violation of the Content Policy,\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                                Policy</b></a>, or the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                of Use</b></a>. They may at their sole and absolute discretion delete, remove,\n                            disable access or otherwise deal with information, data or Content\n                            to comply with laws currently in force, including the Information\n                            Technology Act, 2000.\n                        </li>\n                    </ol>\n\n\n                    <p>\n                        <em>DISCLAIMER: Though all efforts have been made to ensure the accuracy\n                            and currency of the Content on Nipun Lakshya App Chatbot, the same should not be\n                            construed as a statement of law or used for any legal purposes. In no\n                            event will the Government of India, MoE or NCERT be liable for any\n                            expense, loss or damage including, without limitation, indirect or\n                            consequential loss or damage, or any expense, loss or damage\n                            whatsoever arising from use, or loss of use, of data, arising out of\n                            or in connection with the use of Nipun Lakshya App Chatbot. Links to other websites that\n                            have been included on this platform are provided for public\n                            convenience only.</em>\n                    </p>\n                    <!--                <div class=\"text-left\">-->\n                    <!--        <span class=\"text-left\">-->\n                    <!--          <a class=\"text-right TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\">-->\n                    <!--            <i class=\"fas fa-chevron-left\"></i> Read Privacy Policy of Nipun Lakshya App Chatbot</a>-->\n                    <!--        </span>-->\n                    <!--                    <span class=\"text-right pull-right\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"group-guidelines-tab\" tabpanetoshow=\"groupGuidelines\">Read Group Guidelines of Nipun Lakshya App Chatbot <i class=\"fa fa-chevron-right\"></i></a>-->\n                    <!--        </span>-->\n                    <!--                </div>-->\n                </div>\n            </div>\n            <!--    Content Policy end here-->\n\n            <!--    Group Guidelines start here-->\n            <div class=\"ui segment\" suiTabContent=\"4\">\n                <div class=\"tab-pane fade\" id=\"groupGuidelines\" role=\"tabpanel\" aria-labelledby=\"group-guidelines-tab\">\n                    <h4><strong>Nipun Lakshya App Chatbot Group Guidelines</strong></h4>\n                    <label class=\"tagLine\"><em>( Last updated on <b>28-04-2021</b> )</em></label>\n                    <p>\n                        These Group Guidelines specify the rights and responsibilities of\n                        Registered Users who use and participate in Groups. These Group\n                        Guidelines should be read in conjunction with the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>,\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                            Policy</b></a>\n                        and\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\" tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                            Policy</b></a>. Defined terms used but not defined herein shall have the meaning\n                        ascribed to them in the\n                        <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms of\n                            Use</b></a>.\n                    </p>\n                    <ol class=\"arrow-list\" type=\"1\">\n\n                        <h4 class=\"sub-heading\">What is a Group?\n                            <ol class=\"arrow-list\" type=\"a\">\n                                <li>A Group is a set of Registered Users</li>\n                                <li>\n                                    A Group can be created by a Group Admin and comprises Group\n                                    Members\n                                </li>\n                                <li>\n                                    Groups are only visible to the Group Admin who has created the\n                                    Group and the Group Members assigned to the Group. Groups are not\n                                    searchable.\n                                </li>\n                                <li>\n                                    Group Admins can assign activities on Nipun Lakshya App Chatbot to the Group Members\n                                    (visible on the Group).\n                                </li>\n                            </ol>\n\n\n                        </h4>\n                        <h4 class=\"sub-heading\">Who is a Group Admin?</h4>\n                        <p>\n                            A Registered User who has created a Group or has been assigned to be\n                            a Group Admin by another Group Admin\n                        </p>\n\n\n                        <h4 class=\"sub-heading\">Who is a Group Member?</h4>\n                        <p>\n                            A Registered User who has been added to Group as a Group Member by a\n                            Group Admin.\n                        </p>\n\n                        <h4 class=\"sub-heading\">What can a Group Admin do on Nipun Lakshya App Chatbot?</h4>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>Create a Group</li>\n                            <li>Add / Remove Group Members</li>\n                            <li>Mark another Group Member as a Group Admin</li>\n                            <li>View, search and suggest activities on Nipun Lakshya App Chatbot to the Group</li>\n                            <li>\n                                View the progress of individual Group Members in relation to\n                                activities of the Group\n                            </li>\n                            <li>\n                                Communicate with the Group Members (as a Group and individually)\n                            </li>\n                            <li>Delete the Group</li>\n                        </ol>\n\n\n                        <h4 class=\"sub-heading\">What Registered User data does the Group Admin have access to?</h4>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>Name</li>\n                            <li>\n                                Progress and milestones achieved by Group Members in relation to\n                                the activities of the Group\n                            </li>\n                        </ol>\n\n\n                        <h4 class=\"sub-heading\">What are the responsibilities of the Group Admin?</h4>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>\n                                To ensure that activities of the Group are in line with the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                    Policy of Nipun Lakshya App Chatbot</b></a>, and accordingly meet the Accuracy and Appropriateness\n                                standards.\n                            </li>\n                            <li>\n                                To use the data and information of Registered Users only for the\n                                purposes of tracking the progress of Group Members, and for no\n                                other purpose.\n                            </li>\n                            <li>\n                                To ensure that any communication with Group Members is relevant to\n                                the purpose of the Group and meets the Appropriateness standards\n                                set out in the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                    Policy of Nipun Lakshya App Chatbot</b></a>.\n                            </li>\n                            <li>\n                                To refrain from using the Group for any of the Prohibited Uses set\n                                out in the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                    of Use</b></a>.\n                            </li>\n                        </ol>\n\n\n                        <h4 class=\"sub-heading\">What can a Group Member do once assigned to a Group?</h4>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>\n                                View, participate and communicate in relation to the activities of\n                                the Group on Nipun Lakshya App Chatbot\n                            </li>\n                            <li>\n                                View their own progress in relation to the activities of the Group\n                                on Nipun Lakshya App Chatbot\n                            </li>\n                            <li>View a list of other Group Members</li>\n                            <li>Opt out of any Group</li>\n                        </ol>\n\n\n                        <h4 class=\"sub-heading\">What are the responsibilities of the Group Member?</h4>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>\n                                To ensure that any communication with other Group Members or the\n                                Group Admin is relevant to the purpose of the Group and meet the\n                                Appropriateness standards set out in the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                    Policy of Nipun Lakshya App Chatbot</b></a>.\n                            </li>\n                            <li>\n                                To refrain from using the Group for any of the Prohibited Uses set\n                                out in the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                    of Use</b></a>.\n                            </li>\n                        </ol>\n\n                    </ol>\n                    <!--                <div class=\"text-left\">-->\n                    <!--        <span class=\"text-left\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><i class=\"fas fa-chevron-left\"></i> Read Content Policy of-->\n                    <!--            Nipun Lakshya App Chatbot</a>-->\n                    <!--        </span>-->\n                    <!--                    <span class=\"text-right pull-right\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"course-guidelines-tab\" tabpanetoshow=\"courseGuidelines\">Read Course Guidelines of Nipun Lakshya App Chatbot <i class=\"fa fa-chevron-right\"></i></a>-->\n                    <!--        </span>-->\n                    <!--                </div>-->\n                </div>\n            </div>\n            <!--    Group Guidelines end here-->\n\n            <!--    Course Guidelines start here-->\n            <div class=\"ui segment\" suiTabContent=\"5\">\n                <div id=\"courseGuidelines\" aria-labelledby=\"course-guidelines-tab\">\n                    <h4><strong>Nipun Lakshya App Chatbot Course Terms</strong></h4>\n                    <label class=\"tagLine\"><em> ( Last updated on <b>28-04-2021</b> )</em></label>\n                    <p>\n                        These Course Terms specify the rights and responsibilities of Registered\n                        Users who choose to join a course on Nipun Lakshya App Chatbot and Administrators of\n                        courses on Nipun Lakshya App Chatbot. Administrators of a course are Registered Users\n                        authorised by Institutional Users to offer courses on Nipun Lakshya App Chatbot.\n                    </p>\n                    <h4 class=\"sub-heading\">For Registered Users </h4>\n                    <ol class=\"arrow-list\" type=\"1\">\n\n                        <strong>A Registered User that chooses to join a course on Nipun Lakshya App Chatbot\n                            can:</strong>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>Access the course and its Content</li>\n                            <li>View their own progress</li>\n                            <li>\n                                Access and download any certificates received on achieving\n                                milestones in the course\n                            </li>\n                            <li>Opt out of the course at any time</li>\n                            <li>\n                                Provide consent for sharing personal information with\n                                Administrators of a course\n                            </li>\n                            <li>\n                                Revoke consent for sharing personal information with\n                                Administrators of a course\n                            </li>\n                        </ol>\n\n                        <strong>Access and Revocation of access to data and information of\n                            Registered User:\n                        </strong>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>\n                                By choosing to join a course, the Registered User agrees to give\n                                the Administrators of the course access to their Name, State,\n                                District, progress in the course and milestones achieved for the\n                                purposes of analysing usage of Content to improve content and\n                                other offerings.\n                            </li>\n                            <li>\n                                Upon joining a course, a Registered User has the option to provide\n                                their explicit consent to give the Administrators of the course\n                                access to the following additional information, namely: (i) User\n                                ID (Teacher ID) (ii) Block (iii) School U-DISE code / Organisation\n                                ID or number (iv) School/Organisation name (v) mobile number and\n                                (vi) email address. This consent can be given either when prompted\n                                by a pop-up or by changing their data sharing settings. This\n                                additional information can only be used by the Administrators of\n                                the course for the purpose of:\n                                <ol class=\"arrow-list\" type=\"i\">\n                                    <li>tracking progress of the Registered User ;</li>\n                                    <li>\n                                        analysing usage to improve the course, Content and other\n                                        offerings;\n                                    </li>\n                                    <li>validating contact details;</li>\n                                    <li>issuing certificates; and</li>\n                                    <li>\n                                        contacting Registered Users to send relevant information or\n                                        seek feedback.\n                                    </li>\n                                </ol>\n                            </li>\n                            <li>\n                                Registered Users can revoke their consent to sharing additional\n                                information at any time by changing their data sharing settings.\n                            </li>\n                        </ol>\n\n\n                        <strong>Responsibilities of Registered Users: </strong>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>\n                                To ensure that any of their communication is relevant to the\n                                purpose of the course and meet the Appropriateness standards set\n                                out in the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                    Policy of Nipun Lakshya App Chatbot</b></a>.\n                            </li>\n                            <li>\n                                To ensure that their use of courses does not violate any of the\n                                Prohibited Uses set out in the <strong>Terms of Use</strong>.\n                            </li>\n                        </ol>\n\n                        <h4 class=\"sub-heading\">For Administrators of the course</h4>\n\n                        <strong>Administrators of a course on Nipun Lakshya App Chatbot can: </strong>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>Create, review or publish courses on Nipun Lakshya App Chatbot</li>\n                            <li>\n                                Access data and information of courses created by or assigned to\n                                them, which contain:\n                                <ol class=\"arrow-list\" type=\"i\">\n                                    <li>\n                                        Name, State, District and progress data of the Registered\n                                        Users who have chosen to join the course,\n                                    </li>\n                                    <li>\n                                        User ID (Teacher ID), Block, School U-DISE code / Organisation\n                                        ID or number, School/Organisation name, mobile number, and\n                                        email address of Registered Users, only if the Registered\n                                        Users have given their explicit consent,\n                                    </li>\n                                    <li>\n                                        Course usage data such as progress and completion details and\n                                        other related matters\n                                    </li>\n                                </ol>\n                            </li>\n                            <li>\n                                View and use such data and information. Reports with this\n                                additional information will be available only for a limited period\n                                of time and will expire in 15 days.\n                            </li>\n                            <li>\n                                Use the data and information of the Registered Users only for the\n                                purposes of:\n                                <ol class=\"arrow-list\" type=\"i\">\n                                    <li>tracking their progress;</li>\n                                    <li>\n                                        analysing usage of Content to improve content and other\n                                        offerings;\n                                    </li>\n                                    <li>validating contact details;</li>\n                                    <li>issuing certificates; and</li>\n                                    <li>\n                                        contacting Registered Users to send relevant information or\n                                        seek feedback.\n                                    </li>\n                                </ol>\n                            </li>\n                            <li>\n                                Create and issue certificates for Registered Users who have\n                                achieved milestones in the course.\n                            </li>\n                        </ol>\n\n\n                        <strong>Responsibilities of Administrators of a course: </strong>\n                        <ol class=\"arrow-list\" type=\"a\">\n                            <li>\n                                To ensure that the courses created, reviewed or published by them\n                                are in line with the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                    Policy of Nipun Lakshya App Chatbot</b></a>, and accordingly meet the Accuracy and Appropriateness\n                                standards.\n                            </li>\n                            <li>\n                                To respect the privacy and data protection rights of Registered\n                                Users.\n                            </li>\n                            <li>\n                                To ensure the security of and use of data (especially personal\n                                data) shared by Registered Users is limited solely to the purposes\n                                mentioned here.\n                            </li>\n                            <li>\n                                To know that any use of data for purposes outside of the proper\n                                use shall be considered violation of the terms of the policies of\n                                Nipun Lakshya App Chatbot as well as applicable laws and policies of India and they\n                                shall be responsible and liable for such actions and for any loss\n                                or damage arising from failure to comply with this obligation.\n                            </li>\n                            <li>\n                                To ensure that their communication (if any) with Registered Users\n                                is explicitly limited and relevant to the purpose of the course\n                                and meets the Appropriateness standards set out in the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                    Policy of Nipun Lakshya App Chatbot</b></a>. The email address and phone number of Registered Users\n                                shall\n                                only be used to share information in connection with the course\n                                and shall not under any circumstance be used for any other\n                                matters.\n                            </li>\n                            <li>\n                                To ensure that their courses are not used for any of the\n                                Prohibited Uses set out in the\n                                <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\" tabpanetoshow=\"termsOfUse\"><b>Terms\n                                    of Use of Nipun Lakshya App Chatbot</b></a>.\n                            </li>\n                        </ol>\n\n                    </ol>\n                    <p>\n                        <em>These Course Guidelines should be read in conjunction with the\n                            policies and guidelines of Nipun Lakshya App Chatbot, including the </em><strong><em><a class=\"TermsOfUseClick\"\n                                                                                                 tabtoshow=\"terms-of-use-tab\"\n                                                                                                 tabpanetoshow=\"termsOfUse\"><b>Terms\n                        of Use</b></a></em></strong><em>, </em><strong><em><a class=\"TermsOfUseClick\"\n                                                                              tabtoshow=\"content-policy-tab\"\n                                                                              tabpanetoshow=\"contentPolicy\"><b>Content\n                        Policy</b></a></em></strong><em> and </em><strong><em><a class=\"TermsOfUseClick\"\n                                                                                 tabtoshow=\"privacy-policy-tab\"\n                                                                                 tabpanetoshow=\"privacyPolicy\"><b>Privacy\n                        Policy</b></a></em></strong><em>. Defined terms used but not defined herein shall have the\n                        meaning\n                        ascribed to them in the </em><strong><em><a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\"\n                                                                    tabpanetoshow=\"termsOfUse\"><b>Terms of\n                        Use</b></a></em></strong><em>. </em>\n                    </p>\n                    <!--                <div class=\"text-left\">-->\n                    <!--        <span class=\"text-left\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"group-guidelines-tab\" tabpanetoshow=\"groupGuidelines\">-->\n                    <!--            <i class=\"fas fa-chevron-left\"></i> Read Group Guidelines of Nipun Lakshya App Chatbot-->\n                    <!--          </a>-->\n                    <!--        </span>-->\n                    <!--                    <span class=\"text-right pull-right\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"administrator-guidelines-tab\" tabpanetoshow=\"administratorGuidelines\">-->\n                    <!--            Read Administrator Guidelines of Nipun Lakshya App Chatbot-->\n                    <!--            <i class=\"fa fa-chevron-right\"></i>-->\n                    <!--          </a>-->\n                    <!--        </span>-->\n                    <!--                </div>-->\n                </div>\n            </div>\n            <!--    Course Guidelines end here-->\n\n            <!--    Administrator Guidelines start here-->\n            <div class=\"ui segment\" suiTabContent=\"6\">\n                <div id=\"administratorGuidelines\" aria-labelledby=\"administrator-guidelines-tab\">\n                    <h4><strong>Administrator Guidelines</strong></h4>\n                    <label class=\"tagLine\"><em>( Last updated on <b>28-04-2021</b> )</em></label>\n                    <p>\n                        These Administrator Guidelines specify the rights and responsibilities\n                        of Registered Users who are Administrators on Nipun Lakshya App Chatbot. Administrators are\n                        Registered Users authorised by Institutional Users to be administrators\n                        on Nipun Lakshya App Chatbot on their behalf.\n                    </p>\n\n\n                    <h4 class=\"sub-heading\">Administrators on Nipun Lakshya App Chatbot can:</h4>\n                    <strong>\n                        Access the following data and information of Registered Users:</strong>\n                    <ol class=\"arrow-list\" type=\"i\">\n                        <li>\n                            <strong><em>Name</em></strong>, <strong><em>State</em></strong>,\n                            <strong><em>District</em></strong> and\n                            <strong><em>course progress data</em></strong> of the\n                            Registered Users who have chosen to join courses offered by\n                            the the Institutional User that the Administrator belongs to,\n                        </li>\n                        <li>\n                            <strong><em>User ID</em></strong> (16 digit randomised system\n                            generated identifier for every Registered User),\n                            <strong><em>external ID</em></strong> (ID entered by the\n                            Registered User when they choose to submit additional details\n                            from their profile), <strong><em>Block</em></strong>,\n                            <strong><em>School U-DISE code / Organisation ID or number</em></strong>, <strong><em>School/Organisation\n                            name</em></strong>, <strong><em>mobile number(s)</em></strong>, and <strong><em>email\n                            address(s)</em></strong> linked to\n                            the profile of the Registered Users or additionally provided\n                            by the Registered User, <strong>only if</strong> the\n                            Registered Users have given their explicit consent to share\n                            these details with the Administrators. This Administrator will\n                            belong to the same Institutional User that the Registered User\n                            belongs to.\n                        </li>\n                    </ol>\n\n                    <strong>\n                        Access data and information in relation to usage of Nipun Lakshya App Chatbot and its\n                        Content, which includes: </strong>\n                    <ol class=\"arrow-list\" type=\"i\">\n                        <li>\n                            Content plays (i.e. any Content played / viewed / used for at\n                            least 10 seconds)\n                        </li>\n                        <li>Content play time (in minutes)</li>\n                        <li>\n                            QR code scans (including using the DIAL Code directly) and\n                            failed scans\n                        </li>\n                        <li>User ratings and feedback for Content</li>\n                        <li>Number and types of unique devices</li>\n                        <li>Transactions per second on Nipun Lakshya App Chatbot</li>\n                        <li>\n                            Reports that compile the above mentioned data and information\n                            by board, medium, grade, subject, location, creator, device\n                            type, number of unique devices, energised textbook so as to\n                            enable Administrators to learn about usage of Nipun Lakshya App Chatbot and its\n                            Content in different contexts\n                        </li>\n                        <li>\n                            Reports that compile the Content provided by Registered Users\n                            using tools like surveys, observations, and projects\n                        </li>\n                    </ol>\n\n                    <strong> Use the data and information only for the purposes of:</strong>\n                    <ol class=\"arrow-list\" type=\"i\">\n                        <li>\n                            Gaining insights through analysis of data to improve quality,\n                            effectiveness, relevance, usage of Content, courses,\n                            textbooks, programs and other offerings over time based on\n                            Content usage, interest, user feedback, popularity, completion\n                            rates, identified misconceptions;\n                        </li>\n                        <li>\n                            Assessing, evaluating, validating Content submitted / posted /\n                            uploaded / otherwise provided by Registered Users;\n                        </li>\n                        <li>\n                            Downloading details submitted and expressly shared by\n                            Registered Users only for the purposes mentioned herein and in\n                            accordance with the policies of Nipun Lakshya App Chatbot;\n                        </li>\n                    </ol>\n                    <strong>\n                        Grant or revoke rights to create, curate, review or publish\n                        Content on Nipun Lakshya App Chatbot to Registered Users.\n                    </strong>\n\n\n                    <h4 class=\"sub-heading\">Responsibilities of Administrators: </h4>\n                    <ol class=\"arrow-list\" type=\"a\">\n                        <li>\n                            To ensure that the Content created, reviewed or published by them\n                            are in line with the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                Policy of Nipun Lakshya App Chatbot</b></a>, and accordingly meet the Accuracy and Appropriateness\n                            standards;\n                        </li>\n                        <li>\n                            To respect the privacy and data protection rights of Registered\n                            Users;\n                        </li>\n                        <li>\n                            To ensure the security of and use of data (especially personal\n                            data) shared by Registered Users or obtained from Nipun Lakshya App Chatbot is\n                            limited solely to the purposes mentioned here and is not used for:\n                            <ol class=\"arrow-list\" type=\"i\">\n                                <li>Sale or other commercial purposes;</li>\n                                <li>Advertising or marketing;</li>\n                                <li>\n                                    Phone calls or other forms of unsolicited communication that\n                                    is not related to usage of Nipun Lakshya App Chatbot;\n                                </li>\n                                <li>\n                                    Building a personal profile, other than for educational\n                                    purposes on Nipun Lakshya App Chatbot;\n                                </li>\n                                <li>\n                                    Defaming, harassing, abusing, threatening or defrauding any\n                                    Registered Users,\n                                </li>\n                                <li>\n                                    Impersonating any person or entity, falsely claiming an\n                                    affiliation with any person or entity, or accessing Nipun Lakshya App Chatbot\n                                    accounts without permission, or perform any other fraudulent\n                                    activity;\n                                </li>\n                                <li>\n                                    Sending junk mail or spam, informational announcements,\n                                    charity requests, and petitions for signatures etc.\n                                </li>\n                                <li>\n                                    Any of the Prohibited Purposes set out in the\n                                    <a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\"\n                                       tabpanetoshow=\"termsOfUse\"><b>Terms of Use</b></a>; and\n                                </li>\n                                <li>\n                                    Any purpose that is not disclosed in this policy or on Nipun Lakshya App Chatbot.\n                                </li>\n                            </ol>\n                        </li>\n                        <li>\n                            To know that any use of data for purposes outside of the proper\n                            use shall be considered violation of the terms of the policies of\n                            Nipun Lakshya App Chatbot as well as applicable laws and policies of India and they\n                            shall be responsible and liable for such actions and for any loss\n                            or damage arising from failure to comply with this obligation.\n                        </li>\n                        <li>\n                            To ensure that their communication (if any) with Registered Users\n                            is explicitly limited and relevant to the purposes specified here\n                            and meets the Appropriateness standards set out in the\n                            <a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\" tabpanetoshow=\"contentPolicy\"><b>Content\n                                Policy</b></a>. The email address and phone number of Registered Users shall\n                            only be used to share information in connection with uses\n                            specified here and shall not under any circumstance be used for\n                            any other matters.\n                        </li>\n                    </ol>\n\n\n                    <p>\n                        <em>These Administrator Guidelines should be read in conjunction with the\n                            policies and guidelines of Nipun Lakshya App Chatbot, including the </em><a class=\"TermsOfUseClick\"\n                                                                                     tabtoshow=\"terms-of-use-tab\"\n                                                                                     tabpanetoshow=\"termsOfUse\"><b><em>Terms\n                        of Use</em></b></a><em>, </em><a class=\"TermsOfUseClick\" tabtoshow=\"content-policy-tab\"\n                                                         tabpanetoshow=\"contentPolicy\"><b><em>Content\n                        Policy</em></b></a><em> and </em><a class=\"TermsOfUseClick\" tabtoshow=\"privacy-policy-tab\"\n                                                            tabpanetoshow=\"privacyPolicy\"><b><em>Privacy Policy</em></b></a><em>.\n                        Defined terms used but not defined herein shall have the meaning\n                        ascribed to them in the </em><a class=\"TermsOfUseClick\" tabtoshow=\"terms-of-use-tab\"\n                                                        tabpanetoshow=\"termsOfUse\"><b><em>Terms of\n                        Use</em></b></a><em>. </em>\n                    </p>\n                    <!--                <div class=\"text-left\">-->\n                    <!--        <span class=\"text-left\">-->\n                    <!--          <a class=\"TermsOfUseClick\" tabtoshow=\"course-guidelines-tab\" tabpanetoshow=\"courseGuidelines\">-->\n                    <!--            <i class=\"fas fa-chevron-left\"></i> Read Course Guidelines of Nipun Lakshya App Chatbot-->\n                    <!--          </a>-->\n                    <!--        </span>-->\n                    <!--                </div>-->\n                </div>\n            </div>\n            <!--    Administrator Guidelines end here-->\n        </sui-tabset>\n    </div>\n\n    <mat-dialog-actions align=\"end\">\n        <button mat-stroked-button class=\"action-button\" (click)=\"onCancel()\">\n            Cancel\n        </button>\n    </mat-dialog-actions>\n</section>\n",
        styles: ["@charset \"UTF-8\";a,body,button,div,footer,header,html,label,li,ol,p,span,ul{font-family:\"Noto Sans\",sans-serif!important}.header{border-bottom:.0625rem solid #ccc;position:fixed;top:0;left:0;right:0;z-index:99;transition:.8s,border .1s,box-shadow .1s,padding .1s}.header-fix{height:8.5rem}h1.logo{margin:0;padding:0}img.logo1{height:2.8125rem}img.logo2{height:3.75rem;margin-top:.3125rem}#initiatorText{display:none!important}.hdrtxt1,.hdrtxt2{line-height:1;color:#333;text-align:center}.hdrtxt1{font-size:.875rem;padding-top:.625rem}#initiatorText1 .hdrtxt2{padding-bottom:.625rem}.hdrtxt2{font-size:1rem;font-weight:600;padding-top:.3125rem}.nav-fix{height:3.625rem;padding:.3125rem 0;box-shadow:0 .125rem .125rem 0 rgba(0,0,0,.16),0 0 0 .0625rem rgba(0,0,0,.08);border-bottom:0;transition:.8s,border .1s,box-shadow .1s,padding .1s}.nav-fix .logo img{max-height:3rem;transition:.2s ease-in-out}.nav>li{margin-bottom:0}.nav .open>a,.nav>li>a{transition:color .25s ease-out;padding:.5rem 1rem;font-size:.875rem}.nav>li>a.btn{padding:.625rem .4375rem!important;margin:0}.nav .open>a:focus,.nav .open>a:hover,.nav>li>a:focus,.nav>li>a:hover{background-color:transparent}.nav>li>a.btn-default{border-color:#ccc;color:#4a4a4a}.nav>li>a.btn-primary{border-color:#2e6da4;background:#337ab7;color:#fff}.nav>li>a.btn-default:focus,.nav>li>a.btn-default:hover,.nav>li>a.btn-primary:focus,.nav>li>a.btn-primary:hover{color:#286090;background-color:#fff;border-color:#204d74;transition:none}.header .navbar-toggle{margin:0;padding:1.25rem .9375rem 0;background-color:#fff!important;font-size:1rem}.navbar-collapse.in{z-index:2;max-height:85vh}.navbar-collapse .btn{margin-bottom:.9375rem!important}.nav-tabs .open>a:focus,.nav-tabs .open>a:hover,.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover,.nav-tabs>li>a:focus,.nav-tabs>li>a:hover{color:#4a90e2}.hash-fix:before{display:block;content:\" \";visibility:hidden;margin-top:-3.75rem;height:3.75rem}@media (min-width:480px){.header-fix{height:7.5rem}}@media (min-width:768px){.header-fix{height:8.625rem}img.logo1{height:3.75rem}img.logo2{height:4.6875rem}.hdrtxt1{font-size:1rem}#initiatorText1{display:block!important}.navbar-collapse .btn{margin-bottom:0!important}}@media (min-width:1200px){.header-fix{height:5.125rem}.hdrtxt1,.hdrtxt2{text-align:left}.hdrtxt1{padding-top:0}#initiatorText{display:block!important;padding-top:1.375rem;padding-bottom:1.375rem}#initiatorText1{display:none!important}}@media (min-width:1280px){.hdrtxt1{font-size:1.125rem}}.getStartedBtn{cursor:pointer}.navbar.bg-white-header{transition:.25s ease-in;box-shadow:0 .125rem .875rem .625rem rgba(0,0,0,.1);position:fixed;top:0;left:0;right:0;z-index:999;background:#fff;box-shadow:0 .125rem .875rem .625rem rgba(0,0,0,.1);padding:0 5rem;border-radius:0}.navbar.bg-white-header .btn-header-exp{border:.0625rem solid rgba(2,79,157,.4)}.navbar.bg-white-header .btn-header{width:9.875rem;color:#024f9d;padding:.25rem .5rem!important;font-size:.875rem;line-height:1.5;border-radius:.1875rem}.navbar.bg-white-header .btn-header.active,.navbar.bg-white-header .btn-header:hover{font-weight:700;box-shadow:none}.navbar.bg-white-header .navbar-toggle{border:none;position:relative}.navbar.bg-white-header .navbar-toggle span{display:block;background-color:#024f9d;height:.1875rem;width:1.5625rem;margin-top:.25rem;margin-bottom:.25rem;transform:rotate(0);position:relative;left:0;opacity:1}.navbar.bg-white-header .navbar-toggle span:nth-child(1),.navbar.bg-white-header .navbar-toggle span:nth-child(3){transition:transform .35s ease-in-out}.navbar.bg-white-header .navbar-toggle:not(.collapsed) span:nth-child(1){position:absolute;left:.75rem;top:.625rem;transform:rotate(135deg);opacity:.9}.navbar.bg-white-header .navbar-toggle:not(.collapsed) span:nth-child(2){height:.75rem;visibility:hidden;background-color:transparent}.navbar.bg-white-header .navbar-toggle:not(.collapsed) span:nth-child(3){position:absolute;left:.75rem;top:.625rem;transform:rotate(-135deg);opacity:.9}.header-img{clear:both;display:block;overflow:hidden;padding:.625rem;background:#fff;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.header-img .img{padding:0 .625rem}.section-footer .footer-link{font-size:.875rem;color:#fff;text-align:left;border:none;padding:0 0 .9375rem!important}.section-footer .footer-app-details .txt{font-size:.875rem;text-align:center}.section-footer .footer-app-details .txt label{font-weight:400}.section-footer .footer-app-details .app-img{width:150px;margin:0 auto}.section-footer .footer-app-details .app-img img{border-radius:.3125rem}.section-footer .page-view-count .txt{font-size:.875rem}.section-footer .page-view-count .count{font-size:32px}.section-footer .contact-div .contact-txt label{text-align:left;font-size:.875rem;font-weight:400}.section-footer .contact-div .contact-txt label .footer-link{padding-bottom:1px!important}.section-footer .contact-div .contact-txt label .footer-link:hover{color:#fff}.section-footer .contact-div .terms-of-use-txt{text-align:right}.section-footer .contact-div .terms-of-use-txt a{cursor:pointer;font-size:.875rem;color:#fff;padding:0!important}.section-footer .contact-div .terms-of-use-txt a.disabled{opacity:1}.container{width:auto;margin-right:auto;margin-left:auto}.header-gap{padding-top:60px}*{box-sizing:border-box}.tabs-content-wrapper{font-family:Lato,sans-serif;font-size:.875rem;line-height:1.5;max-height:calc(80vh - 100px)!important;padding:0 24px!important}.tabs-content-wrapper .ui.secondary.menu .item{word-break:break-word;font-size:.875rem;margin-bottom:-.0625rem;border:1px solid #dfe1e5;color:#293845;height:3rem;box-shadow:.375rem .375rem .125rem 0 rgba(0,0,0,.1);background:#fff;border-radius:24px;min-height:2rem;cursor:pointer;word-wrap:break-word;white-space:normal;outline:0;transform:rotateZ(0);display:flex;transition:box-shadow .1s,width .1s;justify-content:space-between;align-items:center}.tabs-content-wrapper .ui.secondary.menu .active.item{background-color:#024f9d!important;color:#fff!important}h1,h2{font-size:20.25rem;color:#005da2;font-weight:700;margin-bottom:30px}p{font-size:18px;line-height:30px;margin-bottom:1.5625rem}b,strong{font-weight:700}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol li{margin:.625rem 0}.list-circle{list-style-type:circle}.lower-roman{list-style-type:lower-roman}a{text-decoration:none;color:#4a4a4a;cursor:pointer}a.no-underline:active,a.no-underline:focus,a.no-underline:hover,a:active,a:focus,a:hover{text-decoration:none}a:focus{outline:-webkit-focus-ring-color auto .3125rem;outline-offset:-.125rem}li{overflow-wrap:break-word}ol li ul li{list-style-type:circle}@media (min-width:320px){#terms-of-use ol,#terms-of-use ul{-webkit-padding-start:2.5rem;padding-inline-start:2.5rem}.container{max-width:100%!important;width:100%!important}.section-footer .contact-div .contact-txt label,.section-footer .contact-div .terms-of-use-txt{text-align:center}.section-footer .contact-div .contact-txt label .footer-link{padding-bottom:.0625rem!important;display:block;text-align:center}}@media (min-width:768px){.container{width:45rem!important;max-width:45rem!important}.section-footer .contact-div .contact-txt label .footer-link{padding-bottom:.0625rem!important;display:inline;text-align:left}.section-footer .contact-div .contact-txt label{text-align:left}.section-footer .contact-div .terms-of-use-txt{text-align:right}}@media (min-width:992px){.container{width:60rem!important;max-width:60rem!important}}@media (min-width:1200px){.container{width:71.25rem!important;max-width:71.25rem!important}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-tabs .nav-item{margin-bottom:-.0625rem}.sub-heading{font-size:1.125rem}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .nav-link{border:.0625rem solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-link{display:block;padding:.5rem 1rem}#terms-of-use .nav-tabs .nav-link{border:1px solid #dfe1e5;color:#293845;font-size:.875rem;white-space:nowrap}ul#termsAndPoliciesTab>li>a{height:3rem;font-size:.875rem;background:#fff;color:#008840;border:none;border-radius:24px;min-height:2rem;margin:5px;cursor:pointer;word-wrap:break-word;white-space:normal;outline:0;transform:rotateZ(0);display:flex;transition:box-shadow .1s,width .1s;justify-content:space-between;align-items:center}#terms-of-use #termsAndPolicies{margin-top:1.25rem;padding:1.875rem;margin-bottom:1.875rem}#terms-of-use .TermsOfUseClick,#terms-of-use .TermsOfUseClick:hover,#terms-of-use .tab-pane a,#terms-of-use .tab-pane a:hover{cursor:pointer}#terms-of-use .TermsOfUseClick:hover,#terms-of-use .tab-pane a:hover{text-decoration:underline}#terms-of-use a,#terms-of-use div,#terms-of-use li,#terms-of-use p{word-break:break-word;font-size:.875rem}.arrow-list li{list-style-type:none;position:relative;padding-left:15px}.arrow-list li:before{content:\"\u203A\";font-size:25px;position:absolute;top:-10px;left:-20px;color:#4a4a4a}#terms-of-use .scrollToTop{cursor:pointer}#terms-of-use .scrollToTop .scrollTopWrapper{text-align:center;border-radius:50%;width:3.125rem;height:3.125rem;background:#dfe6ed;position:fixed;padding:.625rem;z-index:1;bottom:.625rem;right:.625rem}#terms-of-use .scrollToTop .scrollTopWrapper i{display:block;font-size:1.5rem;line-height:.625rem}#terms-of-use .scrollToTop .scrollTopWrapper span{display:block;font-size:.875rem}#terms-of-use .early-box{margin-top:8rem;margin-bottom:1.25rem;text-align:center}#terms-of-use .early-box h6{margin-bottom:.9375rem;color:#024f9d;font-weight:700}#terms-of-use .early-box ul{padding-left:0}#terms-of-use .early-box ul li{list-style:none;margin-bottom:1.5625rem;border-left:1px solid #dfe1e5}#terms-of-use .early-box ul li a{color:#024f9d;cursor:pointer}#terms-of-use .early-box ul li a sub{display:block;color:#333;bottom:-.5em}#terms-of-use .showVersions.active{font-size:1.0625rem;font-weight:700}ul#termsAndPoliciesTab{-webkit-padding-start:0;padding-inline-start:0;border-bottom:1px solid #dfe1e5;padding-bottom:24px;width:auto}@media only screen and (max-width:769px){#terms-of-use ol,#terms-of-use ul{-webkit-padding-start:1.25rem;padding-inline-start:1.25rem}#terms-of-use.container{max-width:100%}}.navbar.no-sticky-top{position:absolute;background:0 0;z-index:999;width:100%}#terms-of-use h3{font-size:1.25rem;font-weight:600}#terms-of-use label.tagLine{display:block;font-size:.875rem;margin-bottom:1.875rem}.heading-term{color:#4a4a4a;font-size:18px}.pull-right{float:right}.text-right{text-align:right!important}#terms-of-use .nav-tabs{flex-wrap:nowrap;overflow-x:auto}#terms-of-use .nav-tabs::-webkit-scrollbar{width:.5rem;height:.5rem;background-color:#f5f5f5}#terms-of-use .nav-tabs::-webkit-scrollbar-thumb{border-radius:.625rem;-webkit-box-shadow:inset 0 0 .375rem rgba(0,0,0,.5)}.dk-copyright-text{font-size:.875rem;color:var(--white);text-align:left;border:none;padding:0!important}ul#termsAndPoliciesTab>li>a.active{background-color:#024f9d!important;color:#fff!important}.first-row-top{margin-top:-30px;margin-bottom:30px}"]
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], TermsConditionsComponent);

let TermsConditionConfirmComponent = class TermsConditionConfirmComponent {
    constructor(globalService, dialogRef, data) {
        this.globalService = globalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isLoaderShow = false;
        this.isSubmit = false;
        this.Appropriateness = [];
        this.contentDetails = [];
        this.usability = [];
        if (data && data.isSubmit) {
            this.isSubmit = data.isSubmit;
        }
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.resourceService = this.globalService.getResourceService();
        this.Appropriateness = [
            {
                text: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.appropriatenessHate,
                checks: false
            },
            {
                text: (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.appropriatenessAbusive,
                checks: false
            },
            {
                text: (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.lbl) === null || _f === void 0 ? void 0 : _f.appropriatenessDiscrimination,
                checks: false
            },
            {
                text: (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.lbl) === null || _h === void 0 ? void 0 : _h.appropriatenessChild,
                checks: false
            }
        ];
        this.contentDetails = [
            {
                text: (_k = (_j = this.resourceService.frmelmnts) === null || _j === void 0 ? void 0 : _j.lbl) === null || _k === void 0 ? void 0 : _k.contentDetailDescription,
                checks: false
            },
            {
                text: (_m = (_l = this.resourceService.frmelmnts) === null || _l === void 0 ? void 0 : _l.lbl) === null || _m === void 0 ? void 0 : _m.contentDetailCorrect,
                checks: false
            },
            {
                text: (_p = (_o = this.resourceService.frmelmnts) === null || _o === void 0 ? void 0 : _o.lbl) === null || _p === void 0 ? void 0 : _p.contentDetailAppropriate,
                checks: false
            },
            {
                text: (_r = (_q = this.resourceService.frmelmnts) === null || _q === void 0 ? void 0 : _q.lbl) === null || _r === void 0 ? void 0 : _r.contentDetailRelevant,
                checks: false
            }
        ];
        this.usability = [
            {
                text: (_t = (_s = this.resourceService.frmelmnts) === null || _s === void 0 ? void 0 : _s.lbl) === null || _t === void 0 ? void 0 : _t.usabilityContent,
                checks: false
            },
            {
                text: (_v = (_u = this.resourceService.frmelmnts) === null || _u === void 0 ? void 0 : _u.lbl) === null || _v === void 0 ? void 0 : _v.usabilityClear,
                checks: false
            },
            {
                text: (_x = (_w = this.resourceService.frmelmnts) === null || _w === void 0 ? void 0 : _w.lbl) === null || _x === void 0 ? void 0 : _x.usabilityAudio,
                checks: false
            },
            {
                text: (_z = (_y = this.resourceService.frmelmnts) === null || _y === void 0 ? void 0 : _y.lbl) === null || _z === void 0 ? void 0 : _z.usabilityNoMistakes,
                checks: false
            },
            {
                text: (_1 = (_0 = this.resourceService.frmelmnts) === null || _0 === void 0 ? void 0 : _0.lbl) === null || _1 === void 0 ? void 0 : _1.usabilitySimple,
                checks: false
            }
        ];
    }
    onCancel() {
        this.dialogRef.close();
    }
    updateAllChecked() {
        let allChecked = true;
        for (const val of this.Appropriateness) {
            if (!val.checks) {
                allChecked = false;
                break;
            }
        }
        if (allChecked) {
            for (const val of this.contentDetails) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        if (allChecked) {
            for (const val of this.usability) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        this.allChecked = allChecked;
    }
    allCheck(isAllCheck = false) {
        this.Appropriateness.forEach(val => {
            val.checks = isAllCheck;
        });
        this.contentDetails.forEach(val => {
            val.checks = isAllCheck;
        });
        this.usability.forEach(val => {
            val.checks = isAllCheck;
        });
        this.allChecked = true;
        if (!isAllCheck) {
            this.dialogRef.close();
        }
    }
    onSubmit(event) {
        this.dialogRef.close(event);
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    }
};
TermsConditionConfirmComponent.ctorParameters = () => [
    { type: GlobalService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
TermsConditionConfirmComponent = __decorate([
    Component({
        selector: 'lib-terms-condition-confirm',
        template: "<section class=\"uci-modal\">\n    <h1 mat-dialog-title>\n        {{resourceService.frmelmnts?.lbl?.confirmWarning}}:\n    </h1>\n\n    <div mat-dialog-content class=\"mb-40\">\n        <mat-grid-list [cols]=\"breakpoint\" (window:resize)=\"onResize($event)\">\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.appropriateness}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of Appropriateness; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'appropriateness' + i\"\n                                          [(ngModel)]=\"list.checks\" (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.contentDetails}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of contentDetails; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'contentDetails' + i\" [(ngModel)]=\"list.checks\"\n                                          (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.usability}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of usability; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'usability' + i\" [(ngModel)]=\"list.checks\"\n                                          (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n\n    <mat-dialog-actions class=\"confirm-all-action\">\n        <div>\n            <button mat-raised-button class=\"primary\" (click)=\"allCheck(true)\">\n                {{resourceService.frmelmnts?.btn?.confirmAll}}\n            </button>\n        </div>\n\n        <div>\n            <button mat-raised-button class=\"action-button\"\n                    (click)=\"allCheck(false);\">\n                {{resourceService.frmelmnts?.btn?.cancel}}\n            </button>\n            <ng-container *ngIf=\"isLoaderShow; else submitBtn\">\n                <button mat-raised-button class=\"action-button p-0\">\n                    <div class=\"ui active tiny inline loader\"></div>\n                </button>\n            </ng-container>\n            <ng-template #submitBtn>\n                <button mat-raised-button *ngIf=\"isSubmit\" class=\"action-button\"\n                        [disabled]=\"!this.allChecked\"\n                        (click)=\"onSubmit(true);\">\n                    {{resourceService.frmelmnts?.btn?.submit}}\n                </button>\n                <button mat-raised-button *ngIf=\"!isSubmit\" class=\"action-button\"\n                        [disabled]=\"!this.allChecked\"\n                        (click)=\"onSubmit(false);\">\n                    {{resourceService.frmelmnts?.btn?.save}}\n                </button>\n            </ng-template>\n        </div>\n    </mat-dialog-actions>\n</section>\n",
        styles: [".tabs-content-wrapper{padding:0 24px!important}.confirm-all-action{justify-content:space-between}.uci-modal{background:#fff;padding:20px;max-height:90vh;overflow:auto}.uci-modal .mat-dialog-content{max-height:initial!important}.uci-modal ::ng-deep .mat-figure{align-items:initial!important}.uci-modal .confirm-checkbox-label{white-space:break-spaces}"]
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], TermsConditionConfirmComponent);

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

let UserSegmentListComponent = class UserSegmentListComponent {
    constructor(uciService, route, globalService) {
        this.uciService = uciService;
        this.route = route;
        this.globalService = globalService;
        this.cancel = new EventEmitter();
        this.add = new EventEmitter();
        this.selectedUserSegments = [];
        this.userSegments = [];
        this.selectedUserSegmentMap = {};
        this.pager = {
            totalItems: 0,
            currentPage: 1,
            pageSize: 10,
            totalPages: 0,
            startPage: 0,
            endPage: 0,
            startIndex: 0,
            endIndex: 0,
            pages: []
        };
        this.pageNumber = 1;
        this.column = '';
        this.reverse = false;
    }
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        this.selectedUserSegments.forEach(selectedUserSegment => {
            this.selectedUserSegmentMap[selectedUserSegment.id] = selectedUserSegment;
        });
        this.getUserSegment();
    }
    getUserSegment() {
        const param = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };
        if (this.search) {
            param.name = this.search;
            this.uciService.searchUserSegment(param).subscribe(data => this.parseUserSegments(data));
        }
        else {
            this.uciService.fetchUserSegment(param).subscribe(data => this.parseUserSegments(data));
        }
    }
    parseUserSegments(data) {
        this.userSegments = data.data;
        this.pager.totalItems = data.total;
        this.pager.totalPages = Math.ceil(data.total / this.pager.pageSize);
        this.pager.pages = [];
        let i = 1;
        while (i <= Math.ceil(data.total / this.pager.pageSize)) {
            this.pager.pages.push(i);
            i++;
        }
    }
    navigateToPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pageNumber = page;
        this.pager.currentPage = page;
        this.getUserSegment();
    }
    getSearch() {
        this.getUserSegment();
    }
    onCancel() {
        this.cancel.emit(false);
    }
    onCheck(event, userSegment) {
        if (event.target.checked) {
            this.selectedUserSegmentMap[userSegment.id] = userSegment;
        }
        else {
            delete this.selectedUserSegmentMap[userSegment.id];
        }
    }
    onAdd() {
        this.add.emit(Object.values(this.selectedUserSegmentMap));
    }
};
UserSegmentListComponent.ctorParameters = () => [
    { type: UciService },
    { type: Router },
    { type: GlobalService }
];
__decorate([
    Output()
], UserSegmentListComponent.prototype, "cancel", void 0);
__decorate([
    Output()
], UserSegmentListComponent.prototype, "add", void 0);
__decorate([
    Input()
], UserSegmentListComponent.prototype, "selectedUserSegments", void 0);
UserSegmentListComponent = __decorate([
    Component({
        selector: 'lib-user-segment-list',
        template: "<div class=\"uci-container\">\n    <div class=\"ui grid\">\n        <div class=\"seven wide column font-1-2 font-weight-bold\">\n            Select user segment\n        </div>\n        <div class=\"five wide column\">\n            <div class=\"right-floated pt-0\">\n                <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary mr-10\" (click)=\"onCancel()\"> Cancel</button>\n                <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"onAdd()\"> Add</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"ui grid\">\n        <div class=\"ten wide column\">\n            <div class=\"sb-search-box b-0 ml-0 large\">\n                <div class=\"input-div relative\" id=\"search-input-container\">\n                    <img alt=\"Search Icon\" class=\"search icon\" src=\"assets/images/search-icon.svg\">\n                    <input class=\"sb-search-input disabled ng-untouched ng-pristine\" id=\"keyword\" name=\"filter_search\"\n                           [(ngModel)]=\"search\" type=\"text\" placeholder=\"Search\">\n                </div>\n                <button class=\"sb-btn sb-btn-normal disabled\" (click)=\"getSearch()\">Search</button>\n            </div>\n        </div>\n    </div>\n    <table class=\"ui single line upForReviewTable table\">\n        <thead>\n        <tr>\n            <th class=\"one wide UpReviewTableHeader sorted bl-0 w-50-px\">\n\n            </th>\n            <th class=\"four wide UpReviewTableHeader sorted bl-0\">\n                Name\n            </th>\n            <th class=\"four wide UpReviewTableHeader sorted bl-0\">\n                Category\n            </th>\n            <th class=\"two wide UpReviewTableHeader sorted bl-0 center aligned\">\n                Total members\n            </th>\n            <th class=\"two wide UpReviewTableHeader sorted bl-0 center aligned\">\n                Last Updated On\n            </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr class=\"UpForReviewListHover\" *ngFor=\"let content of userSegments; let i = index;\">\n            <td class=\"center aligned\">\n                <input type=\"checkbox\" [checked]=\"!!selectedUserSegmentMap[content.id]\" (change)=\"onCheck($event, content)\">\n            </td>\n            <td>{{content.name}}</td>\n            <td>{{content?.category}}</td>\n            <td class=\"center aligned\">{{content?.count}}</td>\n            <td class=\"center aligned\">{{content?.updated_at | date}}</td>\n        </tr>\n        </tbody>\n    </table>\n    <div class=\"ui grid\">\n        <div class=\"two wide column\"></div>\n        <div class=\"ten wide column\">\n            <div class=\"pb-10\">\n                <div class=\"ui pagination menu mt-10 right-floated pt-0\" *ngIf=\"pager.pages\">\n                    <a [ngClass]=\"{disabled:pager.currentPage===1 }\" class=\"item \"\n                       (click)=\"navigateToPage(1) \">First</a>\n                    <a [ngClass]=\"{disabled:pager.currentPage===1 }\" class=\"item \"\n                       (click)=\"navigateToPage(pager.currentPage - 1)\">Previous</a>\n                    <a *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage===page}\"\n                       (click)=\"navigateToPage(page)\" class=\"item\">{{page}}</a>\n                    <a [ngClass]=\"{disabled:pager.currentPage=== pager.totalPages}\"\n                       (click)=\"navigateToPage(pager.currentPage + 1)\" class=\"item\">Next</a>\n                    <a [ngClass]=\"{disabled:pager.currentPage=== pager.totalPages}\"\n                       (click)=\"navigateToPage(pager.totalPages)\" class=\"item \">Last</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n",
        styles: [".filter_search{border-radius:25px!important}.ellipsis-icon{font-size:1.2rem}.w-50-px{width:50px!important}.font-1-5{font-size:1.5rem}.font-1-2{font-size:1.2rem}"]
    })
], UserSegmentListComponent);

let UciGraphQlService = class UciGraphQlService extends BaseService {
    constructor(http, globalService) {
        super(http, globalService);
        this.http = http;
        this.globalService = globalService;
        this.globalService.baseUrl$.subscribe(value => {
            if (value) {
                this.BASE_URL = value + '/uci-api/gql';
            }
        });
    }
    getState() {
        return this.baseRequest({
            query: `query getListOfStates{
            organisation(distinct_on:state){
            state}}`
        });
    }
    getDistrict(param) {
        return this.baseRequest({
            query: `query getListOfDistrictInState($state:String){
            organisation(where:{state:{_eq:$state}},  distinct_on:district){
            state
            district}}`,
            variables: param
        });
    }
    getBlock(param) {
        return this.baseRequest({
            query: `query getListOfBlocksUnderDistrict($district:[String!],$state:String){
            blocks: organisation(where:{state:{_eq:$state},district:{_in:$district}},distinct_on:block){
            block
            district
            state
            }
            }`,
            variables: param
        });
    }
    getSchoolDetails(param) {
        return this.baseRequest({
            query: `query getListOfSchoolsUnderBlocksAndDistrict($district:[String!],$state:String,$block:[String!]){
            schools:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}}){
            school
            school_code
            block
            district
            state
            }
            }`,
            variables: param
        });
    }
    getClusters(param) {
        return this.baseRequest({
            query: `query getListOfClustersUnderBlockAndDistrict($block:[String!],$district:[String!],$state:String){
            clusters:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}},distinct_on:cluster){
            cluster
            }
            }`,
            variables: param
        });
    }
    getRole() {
        return this.baseRequest({
            query: `query fetchListOfRoles{
                   role{
                   id
                   name
                   }
                   }`
        });
    }
    getBoards() {
        return this.baseRequest({
            query: `query listOfBoards{
                  board{
                  id
                  name}}`
        });
    }
    baseRequest(body) {
        return this.http.post(this.BASE_URL, body, {});
    }
};
UciGraphQlService.ctorParameters = () => [
    { type: HttpClient },
    { type: GlobalService }
];
UciGraphQlService.ɵprov = ɵɵdefineInjectable({ factory: function UciGraphQlService_Factory() { return new UciGraphQlService(ɵɵinject(HttpClient), ɵɵinject(GlobalService)); }, token: UciGraphQlService, providedIn: "root" });
UciGraphQlService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UciGraphQlService);

let UserSegmentAddComponent = class UserSegmentAddComponent {
    constructor(uciService, fb, uciGraphQlService, globalService) {
        this.uciService = uciService;
        this.fb = fb;
        this.uciGraphQlService = uciGraphQlService;
        this.globalService = globalService;
        this.cancel = new EventEmitter();
        this.add = new EventEmitter();
        this.userSegment = {};
        this.isLoaderShow = false;
        this.districts = [];
        this.blocks = [];
        this.schools = [];
        this.clusters = [];
        this.roles = [];
        this.boards = [];
        this.grade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
        this.subjects = [];
        this.state = 'Haryana';
    }
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        this.getUciDistrict();
        this.getUciRole();
        this.getUciBoard();
        this.userSegmentForm = this.fb.group({
            name: ['', Validators.required],
            description: [''],
            district: [''],
            block: [''],
            cluster: [''],
            school: [''],
            role: [''],
            board: [''],
            grade: [''],
            subject: ['']
        });
        this.userSegmentForm.get('district').valueChanges.subscribe(item => {
            if (item) {
                this.userSegmentForm.get('block').patchValue('');
                this.blocks = [];
                this.userSegmentForm.get('cluster').patchValue('');
                this.userSegmentForm.get('school').patchValue('');
                this.schools = [];
                this.clusters = [];
                this.getUciBlock();
            }
        });
        this.userSegmentForm.get('block').valueChanges.subscribe(item => {
            if (item) {
                this.userSegmentForm.get('cluster').patchValue('');
                this.userSegmentForm.get('school').patchValue('');
                this.schools = [];
                this.clusters = [];
                this.getUciCluster();
                this.getUciSchoolDetails();
            }
        });
    }
    onCancel() {
        this.cancel.emit(false);
    }
    onAdd() {
        if (this.userSegmentForm.invalid) {
            return;
        }
        this.isLoaderShow = true;
        const formValue = this.userSegmentForm.value;
        const locationData = [];
        const blockData = [];
        const districtData = [];
        for (const school of this.schools) {
            if (formValue.school.indexOf(school.school) !== -1) {
                locationData.push(school);
                if (blockData.indexOf(school.block) === -1) {
                    blockData.push(school.block);
                    districtData.push(school.district);
                }
            }
            if (locationData.length === formValue.school) {
                break;
            }
        }
        if (blockData.length < formValue.block.length) {
            for (const block of this.blocks) {
                if (formValue.block.indexOf(block.block) !== -1 && blockData.indexOf(block.block) === -1) {
                    locationData.push(block);
                    blockData.push(block.block);
                    districtData.push(block.district);
                }
                if (blockData.length === formValue.block) {
                    break;
                }
            }
        }
        if (districtData.length < formValue.district.length) {
            for (const district of this.districts) {
                if (formValue.district.indexOf(district.district) !== -1 && districtData.indexOf(district.district) === -1) {
                    locationData.push(district);
                }
            }
        }
        const param = {
            data: {
                userLocation: locationData,
                roles: formValue.role,
                userType: {
                    type: 'student'
                },
                framework: {
                    board: formValue.board,
                    gradeLevel: formValue.grade
                }
            }
        };
        this.uciService.userSegmentQueryBuilder(param).subscribe(response => {
            if (response) {
                const items = Object.assign(Object.assign({}, response), { name: formValue.name, description: formValue.description });
                this.uciService.createUserSegment({ data: items }).subscribe((data) => {
                    this.isLoaderShow = false;
                    this.afterAdd(data.inserted);
                }, err => {
                    this.isLoaderShow = false;
                });
            }
        }, error => {
            this.isLoaderShow = false;
        });
    }
    afterAdd(data) {
        this.add.emit(data);
    }
    getUciState() {
        this.uciGraphQlService.getState().subscribe(res => {
        });
    }
    getUciDistrict() {
        const params = {
            state: this.state
        };
        this.uciGraphQlService.getDistrict(params).subscribe((res) => {
            this.districts = [];
            if (res && res.data && res.data.organisation && res.data.organisation.length) {
                this.districts = res.data.organisation;
            }
        });
    }
    getUciBlock() {
        const formVal = this.userSegmentForm.value;
        const params = {
            state: this.state, district: formVal.district
        };
        this.uciGraphQlService.getBlock(params).subscribe((res) => {
            this.blocks = [];
            if (res && res.data && res.data.blocks && res.data.blocks.length) {
                this.blocks = res.data.blocks;
            }
        });
    }
    getUciCluster() {
        const formVal = this.userSegmentForm.value;
        const params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getClusters(params).subscribe((res) => {
            this.clusters = [];
            if (res && res.data && res.data.clusters && res.data.clusters.length) {
                if (res.data.clusters[0].cluster) {
                    this.clusters = res.data.clusters;
                }
            }
        });
    }
    getUciSchoolDetails() {
        const formVal = this.userSegmentForm.value;
        const params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getSchoolDetails(params).subscribe((res) => {
            this.schools = [];
            if (res && res.data && res.data.schools && res.data.schools.length) {
                this.schools = res.data.schools;
            }
        });
    }
    getUciRole() {
        this.uciGraphQlService.getRole().subscribe((res) => {
            if (res && res.data && res.data.role && res.data.role.length) {
                this.roles = res.data.role;
            }
        });
    }
    getUciBoard() {
        this.uciGraphQlService.getBoards().subscribe((res) => {
            if (res && res.data && res.data.board && res.data.board.length) {
                this.boards = res.data.board;
            }
        });
    }
};
UserSegmentAddComponent.ctorParameters = () => [
    { type: UciService },
    { type: FormBuilder },
    { type: UciGraphQlService },
    { type: GlobalService }
];
__decorate([
    Output()
], UserSegmentAddComponent.prototype, "cancel", void 0);
__decorate([
    Output()
], UserSegmentAddComponent.prototype, "add", void 0);
UserSegmentAddComponent = __decorate([
    Component({
        selector: 'lib-user-segment-add',
        template: "<div class=\"uci-add-segment\">\n    <div class=\"ui grid\">\n        <div class=\"nine wide column font-1-2 font-weight-bold\">\n            Create new segment\n        </div>\n        <div class=\"three wide column\">\n            <div class=\"right-floated pt-0\">\n                <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary mr-10\" (click)=\"onCancel()\">\n                    Cancel\n                </button>\n                <ng-container *ngIf=\"isLoaderShow; else addBtn\">\n                    <button class=\"sb-btn sb-btn-normal sb-btn-primary p-0\">\n                        <div class=\"ui active tiny inline loader\"></div>\n                    </button>\n                </ng-container>\n                <ng-template #addBtn>\n                    <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"onAdd()\"\n                            [disabled]=\"userSegmentForm.invalid\">\n                        Add\n                    </button>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ten wide column font-1-2\">\n        <form class=\"ui form user-segment-form\" [formGroup]=\"userSegmentForm\">\n            <div class=\"field\">\n                <label>Name <sup><i class=\"asterisk icon asterisk-color\"></i></sup></label>\n                <input type=\"text\" name=\"name\" placeholder=\"Name\" formControlName=\"name\">\n            </div>\n            <div class=\"field\">\n                <label>Description</label>\n                <textarea name=\"description\" formControlName=\"description\" placeholder=\"Enter description\"></textarea>\n            </div>\n            <div class=\"ui divider mt-30\"></div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                    <label>District</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"district\"\n                                          [options]=\"districts\"\n                                          #multiSelectDistrict>\n                            <sui-select-option *ngFor=\"let option of multiSelectDistrict.filteredOptions\"\n                                               [value]=\"option.district\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n\n                </div>\n                <div class=\"field\">\n                    <label>Block</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"block\"\n                                          [options]=\"blocks\"\n                                          #multiSelectBlock>\n                            <sui-select-option *ngFor=\"let option of multiSelectBlock.filteredOptions\"\n                                               [value]=\"option.block\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\" *ngIf=\"clusters.length\">\n                    <label>Cluster</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"cluster\"\n                                          [options]=\"clusters\"\n                                          #multiSelectCluster>\n                            <sui-select-option *ngFor=\"let option of multiSelectCluster.filteredOptions\"\n                                               [value]=\"option.cluster\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <label>School</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"school\"\n                                          [options]=\"schools\"\n                                          #multiSelectSchool>\n                            <sui-select-option *ngFor=\"let option of multiSelectSchool.filteredOptions\"\n                                               [value]=\"option.school\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                    <label>Role</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"role\"\n                                          [options]=\"roles\"\n                                          #multiSelectRole>\n                            <sui-select-option *ngFor=\"let option of multiSelectRole.filteredOptions\"\n                                               [value]=\"option.name\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <label>Board</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"board\"\n                                          [options]=\"boards\"\n                                          #multiSelectBoard>\n                            <sui-select-option *ngFor=\"let option of multiSelectBoard.filteredOptions\"\n                                               [value]=\"option.name\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                    <label>Grade</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"grade\"\n                                          [options]=\"grade\"\n                                          #multiSelectGrade>\n                            <sui-select-option *ngFor=\"let option of multiSelectGrade.filteredOptions\"\n                                               [value]=\"option\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n",
        styles: [".font-1-2{font-size:1.2rem}.user-segment-form label{font-weight:400!important}button:disabled{background:#89cff0;border-color:#89cff0}"]
    })
], UserSegmentAddComponent);

let ConversationSuccessComponent = class ConversationSuccessComponent {
    constructor(router, activatedRoute, globalService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.globalService = globalService;
        this.url = '';
        this.botId = '';
    }
    ngOnInit() {
        this.url = Helper.makBotUrl(this.activatedRoute.snapshot.queryParams.text || '', this.globalService.getBotPhoneNumber());
        this.botId = this.activatedRoute.snapshot.queryParams.botId || '';
        this.resourceService = this.globalService.getResourceService();
    }
    onCopy(id) {
        Helper.copyData(id);
    }
    onClose() {
        this.router.navigate(['/uci-admin']);
    }
};
ConversationSuccessComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: GlobalService }
];
ConversationSuccessComponent = __decorate([
    Component({
        selector: 'lib-conversation-success',
        template: "<mat-grid-list cols=\"1\">\n    <div class=\"pt-0 d-flex flex-row justify-content-center\">\n        <div class=\"w-25-per text-center\" style=\"margin: auto;\">\n            <div class=\"text-center mb-20\">\n                <img alt=\"Search Icon\" src=\"assets/uci-console/images/success.svg\">\n            </div>\n\n            <div class=\"text-center p-5\">\n                {{resourceService.frmelmnts?.lbl?.botSuccess}}\n            </div>\n\n            <div class=\"text-center p-5\">\n                {{resourceService.frmelmnts?.lbl?.botUrlMessage}} :\n                <strong><span id=\"copyUrl\">{{url}}</span></strong>\n            </div>\n\n            <div class=\"text-center p-5\" *ngIf=\"botId\">\n                {{resourceService.frmelmnts?.lbl?.botIdMessage}}:\n                <strong><span id=\"copyId\">{{botId}}</span></strong>\n            </div>\n\n            <div class=\"mt-20\">\n                <button mat-raised-button class=\"uci-action-button mr-10\" (click)=\"onCopy('copyUrl')\">\n                    {{resourceService.frmelmnts?.btn?.copyUrl}}\n                </button>\n                <button mat-raised-button class=\"uci-action-button mr-10\" (click)=\"onCopy('copyId')\">\n                    {{resourceService.frmelmnts?.btn?.copyId}}\n                </button>\n                <button mat-raised-button class=\"\" (click)=\"onClose()\">\n                    {{resourceService.frmelmnts?.btn?.close}}\n                </button>\n            </div>\n        </div>\n    </div>\n</mat-grid-list>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}"]
    })
], ConversationSuccessComponent);

let AddLogicComponent = class AddLogicComponent {
    constructor(uciService, fb, toasterService, globalService, dialogRef, data) {
        this.uciService = uciService;
        this.fb = fb;
        this.toasterService = toasterService;
        this.globalService = globalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isModalLoaderShow = false;
        this.odkFileAlreadyExist = false;
        this.resourceService = this.globalService.getResourceService();
        this.initialize();
        if (data && data.id) {
            this.patchValue(data);
        }
    }
    initialize() {
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.logicForm = this.fb.group({
            id: [null],
            name: ['', Validators.required],
            description: [''],
            formId: ['', Validators.required]
        });
    }
    patchValue(item) {
        this.logicForm.patchValue({
            id: item.id,
            name: item.name,
            description: item.description,
            formId: item.formID
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    onLogicAdd() {
        this.dialogRef.close(this.logicForm.value);
    }
    onFileUpload(event) {
        if (!event.target.files.length) {
            return;
        }
        const file = event.target.files[0];
        const obj = {
            form: file
        };
        this.logicForm.patchValue({ formId: '' });
        this.isModalLoaderShow = true;
        this.uciService.uploadFile(obj).subscribe((fileInfo) => {
            if (fileInfo.data) {
                this.logicForm.patchValue({ formId: fileInfo.data.formID });
            }
            this.isModalLoaderShow = false;
            this.odkFileAlreadyExist = false;
        }, error => {
            this.isModalLoaderShow = false;
            this.odkFileAlreadyExist = true;
            this.fileErrorStatus = error.status;
            if (error.result && error.result.error) {
                this.toasterService.error(error.result.error);
            }
        });
    }
    manualDownload() {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'UCI%20_%20ODK%20Instruction%20Manual.pdf', '_blank');
    }
    sampleODKDownload() {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'Sample_ODK.xlsx', '_blank');
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    }
};
AddLogicComponent.ctorParameters = () => [
    { type: UciService },
    { type: FormBuilder },
    { type: ToasterService },
    { type: GlobalService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
AddLogicComponent = __decorate([
    Component({
        selector: 'lib-add-logic',
        template: "<section style=\"background: white;padding: 20px\">\n    <div class=\"uci-logic-container\">\n        <h1 mat-dialog-title>\n            {{logicForm.get('id').value ? resourceService.frmelmnts?.lbl?.updateConversationLogic : resourceService.frmelmnts?.lbl?.addConversationLogic}}\n        </h1>\n        <mat-dialog-content>\n            <form [formGroup]=\"logicForm\">\n                <mat-form-field class=\"w-100\" appearance=\"outline\">\n                    <mat-label>\n                        {{resourceService.frmelmnts?.lbl?.name}}\n                        <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n                    </mat-label>\n                    <input matInput type=\"text\" name=\"name\" placeholder=\"{{resourceService.frmelmnts?.lbl?.enterName}}\"\n                           formControlName=\"name\">\n                </mat-form-field>\n\n                <mat-form-field class=\"w-100 \" appearance=\"outline\">\n                    <mat-label>{{resourceService.frmelmnts?.lbl?.description}}</mat-label>\n                    <textarea matInput rows=\"3\" name=\"description\"\n                              placeholder=\"{{resourceService.frmelmnts?.lbl?.enterDescription}}\"\n                              formControlName=\"description\"></textarea>\n                </mat-form-field>\n\n                <div>\n                    <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"3rem\" (window:resize)=\"onResize($event)\">\n                        <mat-grid-tile colspan=\"1\" class=\"font-1-2\">\n                            <div class=\"w-100 text-left\">\n                                {{resourceService.frmelmnts?.lbl?.uploadOdkForm}}\n                                <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n                            </div>\n                        </mat-grid-tile>\n                        <mat-grid-tile *ngIf=\"breakpoint === 3\" colspan=\"2\" class=\"font-1-2 computer only\">\n                            <div class=\"w-100 text-right\">\n                                <a class=\"mx-5 sample-download\" (click)=\"manualDownload()\"\n                                   matTooltip=\"{{resourceService.frmelmnts?.lbl?.instructionManual}}\">\n                                    {{resourceService.frmelmnts?.lbl?.instructionManual}}\n                                </a>\n                                <a class=\"ml-1 sample-download\" (click)=\"sampleODKDownload()\"\n                                   matTooltip=\"{{resourceService.frmelmnts?.lbl?.sampleOdkForm}}\">\n                                    {{resourceService.frmelmnts?.lbl?.sampleOdkForm}}\n                                </a>\n                            </div>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <input type=\"file\" name=\"file\" (change)=\"onFileUpload($event)\" accept=\".xml\" class=\"uci-file-input\">\n                    <small *ngIf=\"odkFileAlreadyExist\" class=\"text-danger\">{{fileErrorStatus}}</small>\n                    <div class=\"mobile only field text-right p-0\">\n                        <a class=\"mr-5 sample-download\"\n                           (click)=\"manualDownload()\">{{resourceService.frmelmnts?.lbl?.instructionManual}}</a>\n                        <a class=\"sample-download\"\n                           (click)=\"sampleODKDownload()\">{{resourceService.frmelmnts?.lbl?.sampleOdkForm}}</a>\n                    </div>\n                </div>\n\n            </form>\n        </mat-dialog-content>\n        <mat-dialog-actions align=\"end\">\n            <ng-container *ngIf=\"isModalLoaderShow; else modalBtn\">\n                <button mat-stroked-button class=\"action-button p-0\">\n                    <div class=\"ui active tiny inline loader\"></div>\n                </button>\n            </ng-container>\n            <ng-template #modalBtn>\n                <button mat-stroked-button class=\"action-button\" (click)=\"onLogicAdd()\"\n                        [disabled]=\"logicForm.invalid\">\n                    {{logicForm.get('id').value ? resourceService.frmelmnts?.btn?.update : resourceService.frmelmnts?.btn?.add}}\n                </button>\n            </ng-template>\n            <button mat-stroked-button class=\"action-button\" (click)=\"onCancel()\">\n                {{resourceService.frmelmnts?.btn?.cancel}}\n            </button>\n        </mat-dialog-actions>\n    </div>\n</section>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .uci-logic-container{padding:20px}.uci-file-input{border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);line-height:1.21428571em;padding:.67857143em 1em;width:100%}.sample-download{text-decoration:underline!important;cursor:pointer!important}.mobile .sample-download{font-size:.8rem}"]
    }),
    __param(5, Inject(MAT_DIALOG_DATA))
], AddLogicComponent);

let LogicListComponent = class LogicListComponent {
    constructor(uciService, globalService, dialog) {
        this.uciService = uciService;
        this.globalService = globalService;
        this.dialog = dialog;
        this.botLogics = [];
        this.notificationBotLogics = [];
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
        const reqData = {
            id: logicFormData.id,
            name: logicFormData.name,
            description: logicFormData.description,
            transformers: [
                {
                    id: '774cd134-6657-4688-85f6-6338e2323dde',
                    meta: {
                        form: 'https://hosted.my.form.here.com',
                        formID: logicFormData.formId,
                        title: logicFormData.name,
                        body: logicFormData.description,
                        templateType: 'JS_TEMPLATE_LITERALS'
                    }
                }
            ],
            adapter: this.globalService.getAdapterId()
        };
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
                this.botLogics.push(Object.assign({ id: data.id }, existingLogic));
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
};
LogicListComponent.ctorParameters = () => [
    { type: UciService },
    { type: GlobalService },
    { type: MatDialog }
];
__decorate([
    Input()
], LogicListComponent.prototype, "botLogics", void 0);
__decorate([
    Input()
], LogicListComponent.prototype, "notificationBotLogics", void 0);
__decorate([
    Output()
], LogicListComponent.prototype, "modify", void 0);
LogicListComponent = __decorate([
    Component({
        selector: 'lib-logic-list',
        template: "<div class=\"uci-container\">\n    <mat-grid-list cols=\"2\" rowHeight=\"4rem\">\n        <mat-grid-tile colspan=\"1\" class=\"font-1-2 font-weight-bold\">\n            <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.conversationFlow}}</div>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" class=\"right aligned\">\n            <div class=\"w-100 text-right\">\n                <button mat-raised-button class=\"primary\" *ngIf=\"botLogics && botLogics.length\" (click)=\"openModel()\">\n                    {{resourceService.frmelmnts?.btn?.addLogic}}\n                </button>\n            </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"1\">\n\n        <ng-container *ngIf=\"botLogics && botLogics.length <= 0; else showTable\">\n            <mat-grid-list cols=\"1\">\n                <div class=\"text-center\" style=\"margin: auto; padding: 2rem;\">\n                    <div class=\"text-center\">\n                        <div class=\"text-center\">\n                            <img alt=\"Search Icon\" src=\"assets/uci-console/images/empty.svg\">\n                        </div>\n                        <div class=\"text-center mt-20\">\n                            {{resourceService.frmelmnts?.lbl?.noLogic}}\n                        </div>\n                    </div>\n                    <button mat-raised-button class=\"mt-10\" (click)=\"openModel()\">\n                        {{resourceService.frmelmnts?.btn?.addLogic}}\n                    </button>\n                </div>\n            </mat-grid-list>\n        </ng-container>\n        <ng-template #showTable>\n            <div class=\"computer only\">\n                <table mat-table [dataSource]=\"datasource\">\n                    <ng-container matColumnDef=\"sno\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.step}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\"> {{i + 1}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.name}}</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"description\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.description}}</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"action\">\n                        <th mat-header-cell *matHeaderCellDef> {{resourceService.frmelmnts?.lbl?.action}}</th>\n                        <td mat-cell *matCellDef=\"let element; let i = index\" class=\"center aligned\">\n                            <button mat-button [matMenuTriggerFor]=\"menu\">\n                                <mat-icon>more_vert</mat-icon>\n                            </button>\n                            <mat-menu #menu=\"matMenu\" class=\"uci-list-menu\">\n                                <button mat-menu-item (click)=\"openModel(element, i)\">\n                                    {{resourceService.frmelmnts?.lbl?.edit}}\n                                </button>\n                                <button mat-menu-item (click)=\"onDelete(element, i)\">\n                                    {{resourceService.frmelmnts?.lbl?.delete}}\n                                </button>\n                            </mat-menu>\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n            </div>\n\n            <div class=\"mobile only\">\n                <div *ngFor=\"let botLogic of botLogics; let i = index\" class=\"mb-5\">\n                    <mat-card>\n                        <mat-card-content>\n                            <mat-grid-list cols=\"4\" rowHeight=\"35\">\n                                <mat-grid-tile colspan=\"1\">\n                                    <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.name}}</div>\n                                </mat-grid-tile>\n                                <mat-grid-tile colspan=\"3\" class=\"overflow-visible\">\n                                    <div class=\"w-100 d-flex justify-between align-middle\">\n                                        <h5>{{botLogic.name}}</h5>\n                                        <div class=\"ui dropdown\" suiDropdown>\n                                            <button mat-icon-button>\n                                                <mat-icon>more_vert</mat-icon>\n                                            </button>\n                                            <div class=\"menu\" suiDropdownMenu>\n                                                <div class=\"item\" (click)=\"openModel(botLogic, i)\">\n                                                    {{resourceService.frmelmnts?.lbl?.edit}}\n                                                </div>\n                                                <div class=\"item\" (click)=\"onDelete(botLogic, i)\">\n                                                    {{resourceService.frmelmnts?.lbl?.delete}}\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </mat-grid-tile>\n                                <mat-grid-tile colspan=\"1\">\n                                    <div class=\"w-100 wrap-text text-left\">{{resourceService.frmelmnts?.lbl?.description}}</div>\n                                </mat-grid-tile>\n                                <mat-grid-tile colspan=\"3\">\n                                    <div class=\"w-100 text-left\">\n                                        {{botLogic.description}}\n                                    </div>\n                                </mat-grid-tile>\n                            </mat-grid-list>\n                        </mat-card-content>\n                    </mat-card>\n                </div>\n            </div>\n        </ng-template>\n    </mat-grid-list>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}.mat-column-action{width:5px}"]
    })
], LogicListComponent);

let ConversationSetupComponent = class ConversationSetupComponent {
    constructor(fb, uciService, globalService, dialog) {
        this.fb = fb;
        this.uciService = uciService;
        this.globalService = globalService;
        this.dialog = dialog;
        this.starringMessageChange = new EventEmitter();
        this.userSegmentDelete = new EventEmitter();
    }
    ngOnInit() {
        this.matDateBreakpoint = (window.innerWidth <= 1000) ? 1 : 2;
        this.resourceService = this.globalService.getResourceService();
        if (this.conversationForm) {
            // start date and end date value change
            this.conversationForm.get('startDate').valueChanges.subscribe(val => {
                if ((this.conversationForm.value.endDate && moment(this.conversationForm.value.endDate).isBefore(moment(val))) || !val) {
                    this.conversationForm.get('endDate').patchValue(null);
                }
                const tempDate = moment(val).format('YYYY-MM-DD');
                this.endMinDate = new Date(tempDate);
            });
            this.conversationForm.get('startingMessage').valueChanges
                .pipe(debounceTime(1000))
                .subscribe(value => {
                this.onStarringMessageChange();
            });
        }
    }
    onStarringMessageChange() {
        this.starringMessageChange.emit({});
    }
    onUserSegmentDelete(index) {
        this.userSegmentDelete.emit(index);
    }
};
ConversationSetupComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UciService },
    { type: GlobalService },
    { type: MatDialog }
];
__decorate([
    Input()
], ConversationSetupComponent.prototype, "conversationForm", void 0);
__decorate([
    Input()
], ConversationSetupComponent.prototype, "isStartingMessageExist", void 0);
__decorate([
    Input()
], ConversationSetupComponent.prototype, "startMinDate", void 0);
__decorate([
    Input()
], ConversationSetupComponent.prototype, "userSegments", void 0);
__decorate([
    Output()
], ConversationSetupComponent.prototype, "starringMessageChange", void 0);
__decorate([
    Output()
], ConversationSetupComponent.prototype, "userSegmentDelete", void 0);
ConversationSetupComponent = __decorate([
    Component({
        selector: 'lib-conversation-setup',
        template: "<div class=\"uci-container\">\n    <mat-grid-list cols=\"1\" rowHeight=\"4rem\">\n        <mat-grid-tile colspan=\"1\" class=\"font-1-2 font-weight-bold\">\n            <div class=\"w-100 text-left\">{{resourceService.frmelmnts?.lbl?.addConversation}}</div>\n        </mat-grid-tile>\n    </mat-grid-list>\n\n    <form [formGroup]=\"conversationForm\">\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>{{resourceService.frmelmnts?.lbl?.conversationName}}\n                <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n            </mat-label>\n            <input matInput type=\"text\" name=\"name\"\n                   placeholder=\"{{resourceService.frmelmnts?.lbl?.enterName}}\"\n                   formControlName=\"name\">\n        </mat-form-field>\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>{{resourceService.frmelmnts?.lbl?.conversationDescription}}</mat-label>\n            <textarea matInput rows=\"5\" name=\"description\"\n                      placeholder=\"{{resourceService.frmelmnts?.lbl?.enterDescription}}\"\n                      formControlName=\"description\">\n            </textarea>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>\n                {{resourceService.frmelmnts?.lbl?.conversationPurpose}}\n                <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n            </mat-label>\n            <input matInput type=\"text\" name=\"name\"\n                   placeholder=\"{{resourceService.frmelmnts?.lbl?.enterPurpose}}\"\n                   formControlName=\"purpose\">\n        </mat-form-field>\n\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>{{resourceService.frmelmnts?.lbl?.startMessage}} <sup><i\n                    class=\"asterisk icon asterisk-color\"></i></sup></mat-label>\n            <input matInput type=\"text\" name=\"startingMessage\"\n                   placeholder=\"{{resourceService.frmelmnts?.lbl?.enterMessage}}\"\n                   formControlName=\"startingMessage\">\n<!--          {{isStartingMessageExist}}-->\n<!--          {{conversationForm.invalid}}-->\n            <mat-error>\n                {{resourceService.frmelmnts?.lbl?.startMessageError}}\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>{{resourceService.frmelmnts?.lbl?.segmentId}} <sup><i\n                    class=\"asterisk icon asterisk-color\"></i></sup></mat-label>\n            <input matInput type=\"text\" name=\"segmentId\"\n                  placeholder=\"{{resourceService.frmelmnts?.lbl?.enterSegmentId}}\"\n                  formControlName=\"segmentId\">\n        </mat-form-field>\n\n        <!--<mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>{{resourceService.frmelmnts?.lbl?.notificationTitle}} <sup><i\n                    class=\"asterisk icon asterisk-color\"></i></sup></mat-label>\n            <input matInput type=\"text\" name=\"notificationTitle\"\n                  placeholder=\"{{resourceService.frmelmnts?.lbl?.enterTitle}}\"\n                  formControlName=\"notificationTitle\">\n        </mat-form-field>\n\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\n            <mat-label>{{resourceService.frmelmnts?.lbl?.notificationDescription}} <sup><i\n                    class=\"asterisk icon asterisk-color\"></i></sup></mat-label>\n            <textarea matInput rows=\"5\" name=\"notificationDescription\"\n                    placeholder=\"{{resourceService.frmelmnts?.lbl?.enterDescription}}\"\n                    formControlName=\"notificationDescription\">\n            </textarea>\n        </mat-form-field>-->\n\n        <mat-grid-list [cols]=\"matDateBreakpoint\" rowHeight=\"6rem\">\n            <mat-grid-tile>\n                <div class=\"w-100 text-left\">\n                    <mat-form-field class=\"w-100\" appearance=\"outline\">\n                        <mat-label>\n                            {{resourceService.frmelmnts?.lbl?.startDate}}\n                            <sup><i class=\"asterisk icon asterisk-color\"></i></sup>\n                        </mat-label>\n                        <input matInput [matDatepicker]=\"picker\" [min]=\"startMinDate\" formControlName=\"startDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile>\n                <div class=\"w-100 text-left\">\n                    <mat-form-field class=\"w-100\" appearance=\"outline\">\n                        <mat-label>\n                            {{resourceService.frmelmnts?.lbl?.endDate}}\n                        </mat-label>\n                        <input matInput [matDatepicker]=\"endPicker\" [min]=\"endMinDate\" formControlName=\"endDate\">\n                        <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #endPicker></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </form>\n</div>\n<!--Will enable this in future-->\n<!--<div class=\"ui divider\"></div>\n<div class=\"ui grid\">\n    <div class=\"six wide column\">\n        <h6>User segments</h6>\n        <p class=\"pt-10\">{{userSegments.length}} segments added</p>\n    </div>\n    <div class=\"six wide column  right aligned\">\n        <div class=\"pt-0\">\n            <button mat-mini-fab class=\"action-button mr-10\"\n                    (click)=\"onUserSegmentAddClick()\">\n                Create new\n            </button>\n            <button mat-mini-fab class=\"action-button\" (click)=\"userSegment()\">\n                Choose from existing\n            </button>\n        </div>\n    </div>\n</div>-->\n<div class=\"\">\n    <ng-container *ngIf=\"userSegments && userSegments.length\">\n        <div class=\"ui three column grid\">\n            <div class=\"column\" *ngFor=\"let userSegment of userSegments; let i = index\">\n                <div class=\"ui fluid card\">\n                    <div class=\"content\">\n                        <i class=\"right floated icon trash delete-icon\"\n                           (click)=\"onUserSegmentDelete(i)\"></i>\n                        {{userSegment.name}}\n                        <div class=\"meta\">{{resourceService.frmelmnts?.lbl?.userCount}} {{userSegment.count}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}.mat-column-action{width:5px}"]
    })
], ConversationSetupComponent);

let PaginatorIntl = class PaginatorIntl extends MatPaginatorIntl {
    constructor(globalService) {
        super();
        this.globalService = globalService;
        this.getRangeLabel = (page, pageSize, length) => {
            var _a, _b;
            // tslint:disable-next-line:max-line-length
            const of = this.resourceService.frmelmnts && this.resourceService.frmelmnts.lbl && this.resourceService.frmelmnts.lbl.of ? (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.of : 'of';
            if (length === 0 || pageSize === 0) {
                return '0 ' + of + ' ' + length;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;
            const endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
        };
        this.globalService.resourceService$.subscribe(d => {
            this.resourceService = d;
            this.getPaginatorIntl();
            if (this.globalService.getResourceService() && this.globalService.getResourceService().languageSelected$) {
                this.globalService.getResourceService().languageSelected$.subscribe(lang => {
                    this.getPaginatorIntl();
                });
            }
        });
    }
    getPaginatorIntl() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.itemsPerPageLabel = (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.itemsPerPageLabel;
        this.nextPageLabel = (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.nextPageLabel;
        this.previousPageLabel = (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.lbl) === null || _f === void 0 ? void 0 : _f.previousPageLabel;
        this.firstPageLabel = (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.lbl) === null || _h === void 0 ? void 0 : _h.firstPageLabel;
        this.lastPageLabel = (_k = (_j = this.resourceService.frmelmnts) === null || _j === void 0 ? void 0 : _j.lbl) === null || _k === void 0 ? void 0 : _k.lastPageLabel;
        this.changes.next();
        // this.getRangeLabel = this.getRangeLabel.bind(this);
    }
};
PaginatorIntl.ctorParameters = () => [
    { type: GlobalService }
];
PaginatorIntl.ɵprov = ɵɵdefineInjectable({ factory: function PaginatorIntl_Factory() { return new PaginatorIntl(ɵɵinject(GlobalService)); }, token: PaginatorIntl, providedIn: "root" });
PaginatorIntl = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PaginatorIntl);

let ExhaustReportComponent = class ExhaustReportComponent {
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
                tag: v4(),
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
};
ExhaustReportComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UciService },
    { type: Router },
    { type: ActivatedRoute },
    { type: ToasterService },
    { type: GlobalService }
];
ExhaustReportComponent = __decorate([
    Component({
        selector: 'lib-exhaust-report',
        template: "<div class=\"header\">\n    <form [formGroup]=\"filterForm\">\n        <mat-grid-list cols=\"4\" rowHeight=\"3rem\">\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <mat-form-field appearance=\"fill\">\n                        <mat-label>Exhaust type</mat-label>\n                        <mat-select formControlName=\"exhaustType\">\n                            <mat-option *ngFor=\"let exhaustType of exhaustTypes\" [value]=\"exhaustType.value\">\n                                {{ exhaustType.name }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <!--<mat-form-field appearance=\"fill\">\n                        <mat-label>Start date</mat-label>\n                        <input matInput [matDatepicker]=\"startPicker\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #startPicker></mat-datepicker>\n                        </mat-form-field>-->\n                    <div class=\"ui left icon input\">\n                        <i class=\"calendar icon\"></i>\n                        <input suiDatepicker\n                               placeholder=\"Start Date\"\n                               formControlName=\"startDate\"\n                               [pickerMode]=\"'date'\"\n                               [pickerUseNativeOnMobile]=\"false\">\n                    </div>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <!--<mat-form-field appearance=\"fill\">\n                    <mat-label>End date</mat-label>\n                    <input matInput [matDatepicker]=\"endPicker\">\n                    <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #endPicker></mat-datepicker>\n                    </mat-form-field>-->\n                    <div class=\"ui left icon input\">\n                        <i class=\"calendar icon\"></i>\n                        <input suiDatepicker\n                               placeholder=\"End Date\"\n                               formControlName=\"endDate\"\n                               [pickerMode]=\"'date'\"\n                               [pickerUseNativeOnMobile]=\"false\">\n                    </div>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <button mat-raised-button color=\"primary\" (click)=\"getJobList()\">Submit</button>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </form>\n</div>\n<div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n        <!-- Request ID Column -->\n        <ng-container matColumnDef=\"requestid\">\n            <th mat-header-cell *matHeaderCellDef> Request ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requestid}} </td>\n        </ng-container>\n\n        <!-- Request Type Column -->\n        <ng-container matColumnDef=\"requesttype\">\n            <th mat-header-cell *matHeaderCellDef> Request Type</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requesttype}} </td>\n        </ng-container>\n\n        <!-- Request Date Column -->\n        <ng-container matColumnDef=\"requestdate\">\n            <th mat-header-cell *matHeaderCellDef> Request Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requestdate}} </td>\n        </ng-container>\n\n        <!-- Conversation ID Column -->\n        <ng-container matColumnDef=\"conversationid\">\n            <th mat-header-cell *matHeaderCellDef> Conversation ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.conversationid}} </td>\n        </ng-container>\n\n        <!-- Start Date Column -->\n        <ng-container matColumnDef=\"startdate\">\n            <th mat-header-cell *matHeaderCellDef> Start Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.startdate}} </td>\n        </ng-container>\n\n        <!-- End Date Column -->\n        <ng-container matColumnDef=\"enddate\">\n            <th mat-header-cell *matHeaderCellDef> End Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.enddate}} </td>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef> Status</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n        </ng-container>\n\n        <!-- Report Link  Column -->\n        <ng-container matColumnDef=\"reportlink\">\n            <th mat-header-cell *matHeaderCellDef> Report Link</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.reportlink}} </td>\n        </ng-container>\n\n        <!--Generated Date Column -->\n        <ng-container matColumnDef=\"generateddate\">\n            <th mat-header-cell *matHeaderCellDef> Generated Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.generateddate}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"\n                   showFirstLastButtons\n                   aria-label=\"Select page of periodic elements\">\n    </mat-paginator>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .uci-logic-container{padding:20px}.sample-download{text-decoration:underline!important;cursor:pointer!important}.mobile .sample-download{font-size:.8rem}"]
    })
], ExhaustReportComponent);

let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [
            SidePanelComponent,
            ConversationListComponent,
            ConversationAddComponent,
            UserSegmentListComponent,
            UserSegmentAddComponent,
            TermsConditionsComponent,
            TermsConditionConfirmComponent,
            ConversationSuccessComponent,
            AddLogicComponent,
            LogicListComponent,
            ConversationSetupComponent,
            ExhaustReportComponent
        ],
        imports: [
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            PipesModule,
            SuiModule,
            MatButtonModule,
            MatInputModule,
            MatGridListModule,
            MatCheckboxModule,
            MatDialogModule,
            MatTableModule,
            MatPaginatorModule,
            MatIconModule,
            MatMenuModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCardModule,
            MatStepperModule,
            MatListModule,
            MatTooltipModule,
            MatSelectModule,
            MatFormFieldModule,
        ],
        exports: [
            SidePanelComponent,
        ],
        providers: [
            GlobalService,
            UciService,
            ConfigService,
            UciGraphQlService,
            MatDatepickerModule,
            {
                provide: MatPaginatorIntl, useClass: PaginatorIntl
            }
        ],
        entryComponents: [
            AddLogicComponent,
            TermsConditionsComponent,
            TermsConditionConfirmComponent
        ],
    })
], ComponentsModule);

let LibEntryComponent = class LibEntryComponent {
    constructor(activatedRoute, uciService, configService, location, uciEventsService, telemetryUtils, globalService, router) {
        this.activatedRoute = activatedRoute;
        this.uciService = uciService;
        this.configService = configService;
        this.location = location;
        this.uciEventsService = uciEventsService;
        this.telemetryUtils = telemetryUtils;
        this.globalService = globalService;
        this.router = router;
    }
    ngOnInit() {
        if (this.user) {
            this.globalService.setUser(this.user);
        }
        if (this.baseUrl) {
            this.globalService.setBaseUrl(this.baseUrl);
        }
        if (this.nlBaseUrl) {
            this.globalService.setNlBaseUrl(this.nlBaseUrl);
        }
        if (this.blobUrl) {
            this.globalService.setBlobUrl(this.blobUrl);
        }
        if (this.botPhoneNumber) {
            this.globalService.setBotPhoneNumber(this.botPhoneNumber);
        }
        if (this.resourceService) {
            this.globalService.setResourceService(this.resourceService);
        }
        if (this.adapterId) {
            this.globalService.setAdapterId(this.adapterId);
        }
        if (this.broadcastAdapterId) {
            this.globalService.setBroadcastAdapterId(this.broadcastAdapterId);
        }
        if (this.router.url === '/uci-admin') {
            this.router.navigate(['uci-admin/home'], { skipLocationChange: true });
        }
    }
    goBack() {
        this.location.back();
    }
    close(event) {
        const eventAction = {
            action: 'DF_CLOSE'
        };
        this.uciEventsService.emitTelemetry(eventAction);
        this.telemetryUtils.logInteract(event, UciData.IPageName.LIB_ENTRY);
    }
};
LibEntryComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: UciService },
    { type: ConfigService },
    { type: Location },
    { type: UciEventsService },
    { type: TelemetryUtilsService },
    { type: GlobalService },
    { type: Router }
];
__decorate([
    Input()
], LibEntryComponent.prototype, "user", void 0);
__decorate([
    Input()
], LibEntryComponent.prototype, "baseUrl", void 0);
__decorate([
    Input()
], LibEntryComponent.prototype, "nlBaseUrl", void 0);
__decorate([
    Input()
], LibEntryComponent.prototype, "blobUrl", void 0);
__decorate([
    Input()
], LibEntryComponent.prototype, "botPhoneNumber", void 0);
__decorate([
    Input()
], LibEntryComponent.prototype, "resourceService", void 0);
__decorate([
    Input()
], LibEntryComponent.prototype, "adapterId", void 0);
__decorate([
    Input()
], LibEntryComponent.prototype, "broadcastAdapterId", void 0);
LibEntryComponent = __decorate([
    Component({
        selector: 'lib-lib-entry',
        template: "<div class=\"ui\">\n    <div class=\"relative position\">\n        <div class=\"py-8 ua-btn-container ua-back-btn-container px-20 z-index-2\">\n           <div class=\"mx-20\">\n               <button mat-raised-button (click)=\"goBack()\">\n                   <mat-icon>keyboard_backspace</mat-icon>\n                   {{resourceService?.frmelmnts?.btn?.back || 'Back'}}\n               </button>\n           </div>\n        </div>\n    </div>\n    <div class=\"uci-admin\">\n        <div class=\"uci-admin-content\">\n            <div class=\"uci-admin-left-panel ua-side-content z-index-2\">\n                <lib-side-panel></lib-side-panel>\n            </div>\n            <div class=\"uci-admin-right-panel ua-main-content z-index-2\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}.ua-btn-container{display:flex;align-items:center;justify-content:space-between;background:#fff}.ua-btn-close{color:#000;font-weight:700;background:#ef64af}.uci-admin{width:100%;min-height:100vh;position:relative;z-index:unset}.uci-admin-content{display:grid;grid-template-columns:1fr 4fr;margin:0 1.5rem}.uci-admin-left-panel{padding:1.5rem;position:relative;z-index:2}.uci-admin-right-panel{padding:1.5rem}.ui.loader:after{border-color:#fff transparent transparent!important}@media (max-width:768px){.uci-admin{padding:0 8px;height:100vh;overflow:auto;background:#e9e8d9}.uci-admin-left-panel{padding:1rem 0}.uci-admin-right-panel{padding:0 0 48px}}.font-weight-bold{font-weight:700}.font-weight-normal{font-weight:400}.font-1-2{font-size:1.2rem}.z-index-2{z-index:2!important}@media screen and (min-width:376px) and (max-width:768px){.uci-admin-content{grid-template-columns:1fr;margin:0}}@media screen and (min-width:320px) and (max-width:375px){.uci-admin-content{grid-template-columns:repeat(auto-fill,minmax(292px,1fr));margin:0}}"]
    })
], LibEntryComponent);

const routes = [
    {
        path: '',
        component: LibEntryComponent,
        children: [
            {
                path: 'home',
                pathMatch: 'full',
                component: ConversationListComponent
            },
            {
                path: 'add',
                pathMatch: 'full',
                component: ConversationAddComponent,
            },
            {
                path: ':id/edit',
                pathMatch: 'full',
                component: ConversationAddComponent,
            },
            {
                path: 'success',
                pathMatch: 'full',
                component: ConversationSuccessComponent,
            },
            {
                path: ':id/reports',
                pathMatch: 'full',
                component: ExhaustReportComponent,
            },
        ]
    }
];
let UciRoutingModule = class UciRoutingModule {
};
UciRoutingModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(routes),
            CommonModule
        ],
        exports: [RouterModule]
    })
], UciRoutingModule);

function provideCsModule() {
    return window['CsModule'];
}
let UciModule = class UciModule {
};
UciModule = __decorate([
    NgModule({
        declarations: [
            LibEntryComponent
        ],
        imports: [
            ComponentsModule,
            UciRoutingModule,
            MatButtonModule,
            MatIconModule
        ],
        exports: [
            LibEntryComponent
        ],
        providers: [UciEventsService, TelemetryUtilsService, ToasterService, { provide: 'CsModule', useFactory: provideCsModule }]
    })
], UciModule);

/*
 * Public API Surface of uci-console
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddLogicComponent, LibEntryComponent, UciEventsService, UciModule, provideCsModule, UciService as ɵa, BaseService as ɵb, GlobalService as ɵc, ConfigService as ɵd, TelemetryUtilsService as ɵe, ComponentsModule as ɵf, SidePanelComponent as ɵg, ConversationListComponent as ɵh, ConversationAddComponent as ɵi, ToasterService as ɵj, UserSegmentListComponent as ɵk, UserSegmentAddComponent as ɵl, UciGraphQlService as ɵm, TermsConditionsComponent as ɵn, TermsConditionConfirmComponent as ɵo, ConversationSuccessComponent as ɵp, LogicListComponent as ɵq, ConversationSetupComponent as ɵr, ExhaustReportComponent as ɵs, PipesModule as ɵt, PaginatorIntl as ɵu, UciRoutingModule as ɵv };
//# sourceMappingURL=samagra-x-uci-console.js.map

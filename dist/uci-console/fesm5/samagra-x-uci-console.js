import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule, ɵɵdefineInjectable, Injectable, ɵɵinject, EventEmitter, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵpureFunction1, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵdirectiveInject, ɵɵdefineComponent, Component, ɵɵtextInterpolate1, ɵɵreference, ɵɵelement, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelementContainerStart, ɵɵelementContainerEnd, ViewChild, Inject, ɵɵresolveWindow, ɵɵtemplateRefExtractor, ɵɵtextInterpolate2, ɵɵpropertyInterpolate, Input, Output, ɵɵpipe, ɵɵpipeBind1, ɵɵpureFunction0 } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule, NgIf, NgForOf, NgClass, NgSwitch, NgSwitchCase, DatePipe, Location } from '@angular/common';
import { __assign, __values, __extends } from 'tslib';
import { map, catchError, debounceTime } from 'rxjs/operators';
import { BehaviorSubject, throwError, Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { get, isEmpty, last, find, isEqual, reject } from 'lodash';
import { ActivatedRoute, Router, RouterOutlet, RouterModule } from '@angular/router';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormControlName, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridList, MatGridTile, MatGridListModule } from '@angular/material/grid-list';
import { MatFormField, MatSuffix, MatLabel, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuTrigger, _MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import * as moment from 'moment';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ɵdd, ɵbi, ɵdf, ɵde, ɵn, ɵbk, ɵbj, ɵcs, ɵct, ɵcu, ɵx, ɵu, ɵv, ɵw, SuiModule } from 'ng2-semantic-ui-v9';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatHorizontalStepper, MatStep, MatVerticalStepper, MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatOption, MatNativeDateModule } from '@angular/material/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { v4 } from 'uuid';

var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.ɵmod = ɵɵdefineNgModule({ type: PipesModule });
    PipesModule.ɵinj = ɵɵdefineInjector({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
                CommonModule
            ]] });
    return PipesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PipesModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PipesModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule
                ],
                exports: []
            }]
    }], null, null); })();

var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.user = new BehaviorSubject(undefined);
        this.user$ = this.user.asObservable();
        this.baseUrl = new BehaviorSubject(undefined);
        this.blobUrl = new BehaviorSubject(undefined);
        this.botPhoneNumber = new BehaviorSubject('');
        this.resourceService = new BehaviorSubject({});
        this.baseUrl$ = this.baseUrl.asObservable();
        this.resourceService$ = this.resourceService.asObservable();
    }
    GlobalService.prototype.setUser = function (user) {
        this.user.next(user);
    };
    GlobalService.prototype.getUser = function () {
        return this.user.value;
    };
    GlobalService.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl.next(baseUrl);
    };
    GlobalService.prototype.getBaseUrl = function () {
        return this.baseUrl.value;
    };
    GlobalService.prototype.setBlobUrl = function (baseUrl) {
        this.blobUrl.next(baseUrl);
    };
    GlobalService.prototype.getBlobUrl = function () {
        return this.blobUrl.value;
    };
    GlobalService.prototype.setBotPhoneNumber = function (phoneNumber) {
        this.botPhoneNumber.next(phoneNumber);
    };
    GlobalService.prototype.getBotPhoneNumber = function () {
        return this.botPhoneNumber.value;
    };
    GlobalService.prototype.setResourceService = function (resourceService) {
        this.resourceService.next(resourceService);
    };
    GlobalService.prototype.getResourceService = function () {
        return this.resourceService.value;
    };
    GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
    GlobalService.ɵprov = ɵɵdefineInjectable({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
    return GlobalService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(GlobalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var BaseService = /** @class */ (function () {
    function BaseService(http, globalService) {
        this.http = http;
        this.globalService = globalService;
    }
    BaseService.prototype.getDefaultHeaders = function () {
        var headers = {};
        var user = this.globalService.getUser();
        if (user && user.id) {
            headers.ownerID = user.id;
        }
        if (user && user.rootOrgId) {
            headers.ownerOrgID = user.rootOrgId;
        }
        return headers;
    };
    BaseService.prototype.getRequest = function (url, params, headers) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        headers = __assign(__assign({}, headers), this.getDefaultHeaders());
        return this.http.get(url, { params: params, headers: headers }).pipe(map(function (res) {
            return res.result;
        }), catchError(function (err) {
            return _this.handleError(err);
        }));
    };
    BaseService.prototype.postRequest = function (url, data, headers) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (headers === void 0) { headers = {}; }
        headers = __assign(__assign({}, headers), this.getDefaultHeaders());
        return this.http.post(url, data, { headers: headers }).pipe(map(function (res) {
            return res.result;
        }), catchError(function (err) {
            return _this.handleError(err);
        }));
    };
    BaseService.prototype.handleError = function (error) {
        if (error instanceof ErrorEvent) {
            return throwError(error.error.message);
        }
        console.log('=====', error, error.error);
        // this.toasterService.error(this.resourceService.messages.fmsg.m0091);
        return throwError(error.error);
    };
    BaseService.prototype.toFormData = function (formValue) {
        var e_1, _a;
        var formData = new FormData();
        try {
            for (var _b = __values(Object.keys(formValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var value = formValue[key];
                formData.append(key, value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return formData;
    };
    BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(ɵɵinject(HttpClient), ɵɵinject(GlobalService)); };
    BaseService.ɵprov = ɵɵdefineInjectable({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });
    return BaseService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BaseService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: GlobalService }]; }, null); })();

var UciService = /** @class */ (function (_super) {
    __extends(UciService, _super);
    function UciService(http, globalService) {
        var _this = _super.call(this, http, globalService) || this;
        _this.http = http;
        _this.globalService = globalService;
        _this.FORM_BASE_URL = 'https://dev.sunbirded.org/';
        _this.globalService.baseUrl$.subscribe(function (value) {
            if (value) {
                _this.BASE_URL = value + '/admin/v1/';
                _this.DATASET_URL = value.replace('/uci') + '/dataset/v1/';
            }
        });
        return _this;
    }
    UciService.prototype.fetchConversation = function (params) {
        return this.getRequest(this.BASE_URL + 'bot/get', params, { asset: 'bot' });
    };
    UciService.prototype.searchConversation = function (params) {
        return this.getRequest(this.BASE_URL + 'bot/search', params, { asset: 'bot' });
    };
    UciService.prototype.pauseConversation = function (botId) {
        return this.getRequest(this.BASE_URL + ("bot/pause/" + botId), {}, { asset: 'bot' });
    };
    UciService.prototype.startConversation = function (botId) {
        return this.getRequest(this.BASE_URL + ("bot/start/" + botId), {}, { asset: 'bot' });
    };
    UciService.prototype.deleteConversation = function (botId) {
        return this.getRequest(this.BASE_URL + ("bot/delete/" + botId), {}, { asset: 'bot' });
    };
    UciService.prototype.getBotDetails = function (id) {
        return this.getRequest(this.BASE_URL + ("bot/get/" + id), {}, { asset: 'bot' });
    };
    UciService.prototype.getCheckStartingMessage = function (param) {
        return this.getRequest(this.BASE_URL + "bot/getByParam", param, { asset: 'bot' });
    };
    UciService.prototype.botCreate = function (data) {
        return this.postRequest(this.BASE_URL + 'bot/create', data, { asset: 'bot' });
    };
    UciService.prototype.botUpdate = function (id, data) {
        return this.postRequest(this.BASE_URL + ("bot/update/" + id), data, { asset: 'bot' });
    };
    // User Segment APIs
    UciService.prototype.fetchUserSegment = function (params) {
        return this.getRequest(this.BASE_URL + 'userSegment/get', params, { asset: 'userSegment' });
    };
    UciService.prototype.searchUserSegment = function (params) {
        return this.getRequest(this.BASE_URL + 'userSegment/search', params, { asset: 'userSegment' });
    };
    UciService.prototype.createUserSegment = function (data) {
        return this.postRequest(this.BASE_URL + 'userSegment/create', data, { asset: 'userSegment' });
    };
    UciService.prototype.userSegmentQueryBuilder = function (data) {
        return this.postRequest(this.BASE_URL + 'userSegment/queryBuilder', data, { asset: 'userSegment' });
    };
    // Conversation APIs
    UciService.prototype.createLogic = function (data) {
        return this.postRequest(this.BASE_URL + 'conversationLogic/create', data, { asset: 'conversationLogic' });
    };
    UciService.prototype.updateLogic = function (id, data) {
        return this.postRequest(this.BASE_URL + ("conversationLogic/update/" + id), data, { asset: 'conversationLogic' });
    };
    UciService.prototype.deleteLogic = function (id) {
        return this.getRequest(this.BASE_URL + ("conversationLogic/delete/" + id), {}, { asset: 'conversationLogic' });
    };
    // Mis APIs
    UciService.prototype.uploadFile = function (obj) {
        return this.postRequest(this.BASE_URL + 'forms/upload', this.toFormData(obj));
    };
    UciService.prototype.readForm = function (data) {
        return this.postRequest(this.FORM_BASE_URL + 'api/data/v1/form/read', data);
    };
    // Exhaust API
    UciService.prototype.getJobList = function (id, params) {
        return this.getRequest(this.DATASET_URL + ("request/list/" + id), params, { asset: 'conversationLogic' });
    };
    UciService.prototype.getJobInfo = function (id, params) {
        return this.getRequest(this.DATASET_URL + ("request/read/" + id), params, { asset: 'conversationLogic' });
    };
    UciService.prototype.submitExhaust = function (data) {
        return this.postRequest(this.DATASET_URL + "request/submit", data, { asset: 'conversationLogic' });
    };
    UciService.ɵfac = function UciService_Factory(t) { return new (t || UciService)(ɵɵinject(HttpClient), ɵɵinject(GlobalService)); };
    UciService.ɵprov = ɵɵdefineInjectable({ token: UciService, factory: UciService.ɵfac, providedIn: 'root' });
    return UciService;
}(BaseService));
/*@__PURE__*/ (function () { ɵsetClassMetadata(UciService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: GlobalService }]; }, null); })();

var ConfigService = /** @class */ (function () {
    function ConfigService(activatedRoute, UciService) {
        this.activatedRoute = activatedRoute;
        this.UciService = UciService;
    }
    ConfigService.prototype.ngOnInit = function () {
    };
    ConfigService.prototype.setConfig = function (activatedRoute) {
        var _this = this;
        activatedRoute.data.subscribe(function (config) {
            _this._config = config.data;
        });
    };
    ConfigService.prototype.setConfigFromParams = function (activatedRoute) {
        var _this = this;
        activatedRoute.queryParams.subscribe(function (params) {
            var obj = {
                userName: get(params, 'userName'),
                categories: JSON.parse(get(params, 'categories'))
            };
            _this._config = obj;
        });
    };
    ConfigService.prototype.getConfig = function () {
        return this._config;
    };
    ConfigService.prototype.getCategories = function () {
        this.getParams = this.getConfig();
        return get(this.getParams, 'categories');
    };
    ConfigService.prototype.hasContext = function () {
        this.hasContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result.length : null)
            : null;
        return this.hasContextData;
    };
    ConfigService.prototype.getContext = function () {
        this.getContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result : null)
            : null;
        return this.getContextData;
    };
    ConfigService.prototype.getRouterSlug = function () {
        return this._config.routerSlug ? this._config.routerSlug : '';
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(ɵɵinject(ActivatedRoute), ɵɵinject(UciService)); };
    ConfigService.ɵprov = ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
    return ConfigService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: UciService }]; }, null); })();

var UciData;
(function (UciData) {
    var IPageName;
    (function (IPageName) {
        IPageName["HOME"] = "uci-admin";
        IPageName["LIB_ENTRY"] = "lib-entry";
    })(IPageName = UciData.IPageName || (UciData.IPageName = {}));
})(UciData || (UciData = {}));

/* tslint:enable */
var UciEventsService = /** @class */ (function () {
    function UciEventsService() {
        this.telemetryEvent = new Subject();
        this.actionEvent = new EventEmitter();
    }
    UciEventsService.prototype.emitTelemetry = function (event) {
        // console.log('Lib Event', event);
        if (!isEmpty(event)) {
            this.telemetryEvent.next(event);
        }
    };
    UciEventsService.ɵfac = function UciEventsService_Factory(t) { return new (t || UciEventsService)(); };
    UciEventsService.ɵprov = ɵɵdefineInjectable({ token: UciEventsService, factory: UciEventsService.ɵfac, providedIn: 'root' });
    return UciEventsService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UciEventsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var TelemetryUtilsService = /** @class */ (function () {
    function TelemetryUtilsService(discussionEvents, router) {
        this.discussionEvents = discussionEvents;
        this.router = router;
        this._context = [];
        this.currentObj = {};
    }
    TelemetryUtilsService.prototype.setContext = function (context) {
        this._context = context;
        this.currentObj = last(context);
    };
    TelemetryUtilsService.prototype.uppendContext = function (data) {
        var matchedC = find(this._context, { id: data.id });
        if (!isEmpty(data) && !isEqual(data, matchedC)) {
            this._context.push(data);
        }
        this.currentObj = last(this._context);
    };
    TelemetryUtilsService.prototype.deleteContext = function (prevTopic) {
        var topic = find(this._context, prevTopic);
        if (topic) {
            this._context = reject(this._context, topic);
        }
    };
    TelemetryUtilsService.prototype.getContext = function () {
        return this._context;
    };
    TelemetryUtilsService.prototype.logImpression = function (pageId) {
        this.discussionEvents.emitTelemetry({});
        var impressionEvent = {
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
    };
    TelemetryUtilsService.prototype.logInteract = function (event, pageId) {
        var target = get(event, 'currentTarget.attributes.id') || get(event, 'target.attributes.id') ||
            get(event, 'srcElement.attributes.id');
        var interactEvent = {
            eid: 'INTERACT',
            edata: {
                id: get(target, 'value') || get(event, 'action'),
                type: 'CLICK',
                pageid: pageId
            }
        };
        if (this.currentObj) {
            var object = {
                id: get(this.currentObj, 'id').toString(),
                type: get(this.currentObj, 'type'),
                ver: '1'
            };
            object['rollup'] = this._context.length > 1 ? this.getRollUp() : {};
            interactEvent.context = {
                cdata: [{
                        id: get(this.currentObj, 'id').toString(),
                        type: get(this.currentObj, 'type')
                    }], object: object
            };
        }
        this.discussionEvents.emitTelemetry(interactEvent);
    };
    TelemetryUtilsService.prototype.getRollUp = function () {
        var rollUp = {};
        var data = reject(this._context, this.currentObj);
        if (this._context.length > 1) {
            data.forEach(function (element, index) {
                // console.log('rollup', element);
                rollUp['l' + (index + 1)] = element.toString();
            });
        }
        if (get(this.currentObj, 'type') !== 'Post') {
            return rollUp;
        }
        return {};
    };
    TelemetryUtilsService.ɵfac = function TelemetryUtilsService_Factory(t) { return new (t || TelemetryUtilsService)(ɵɵinject(UciEventsService), ɵɵinject(Router)); };
    TelemetryUtilsService.ɵprov = ɵɵdefineInjectable({ token: TelemetryUtilsService, factory: TelemetryUtilsService.ɵfac, providedIn: 'root' });
    return TelemetryUtilsService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TelemetryUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: UciEventsService }, { type: Router }]; }, null); })();

var _c0 = function (a0) { return { "menu-active": a0 }; };
function SidePanelComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 3);
    ɵɵlistener("click", function SidePanelComponent_ul_0_li_1_Template_li_click_0_listener($event) { ɵɵrestoreView(_r4); var d_r2 = ctx.$implicit; var ctx_r3 = ɵɵnextContext(2); return ctx_r3.navigate(d_r2.route, $event); });
    ɵɵelementStart(1, "a");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var d_r2 = ctx.$implicit;
    var ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0, ctx_r1.isActive(d_r2.route)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r2.label);
} }
function SidePanelComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 1);
    ɵɵtemplate(1, SidePanelComponent_ul_0_li_1_Template, 3, 4, "li", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.menu);
} }
/* tslint:enable */
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(router, uciService, activatedRoute, telemetryUtils, configService, globalService) {
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
    SidePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService = this.globalService.getResourceService();
        // TODO: loader or spinner
        this.telemetryUtils.setContext([]);
        this.hideSidePanel = document.body.classList.contains('widget');
        this.telemetryUtils.logImpression(UciData.IPageName.HOME);
        this.setMenu();
        if (this.globalService.getResourceService() && this.globalService.getResourceService().languageSelected$) {
            this.globalService.getResourceService().languageSelected$.subscribe(function (lang) {
                _this.menu = [];
                _this.setMenu();
            });
        }
    };
    SidePanelComponent.prototype.setMenu = function () {
        var _a, _b;
        this.menu = [
            {
                route: '',
                label: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.conversations,
                enable: true
            }
        ];
    };
    SidePanelComponent.prototype.isActive = function (selectedItem) {
        if (this.router.url.indexOf("/" + selectedItem) > -1 || this.selectedTab === selectedItem) {
            if (!this.selectedTab) {
                this.selectedTab = selectedItem;
            }
            return true;
        }
        else if (selectedItem === 'categories' && !this.selectedTab) {
            return true;
        }
        return false;
    };
    SidePanelComponent.prototype.navigate = function (pageName, event) {
        this.selectedTab = pageName;
        this.telemetryUtils.setContext([]);
        if (event) {
            this.telemetryUtils.logInteract(event, UciData.IPageName.HOME);
        }
        this.router.navigate(["uci-admin"]);
        this.closeNav();
    };
    SidePanelComponent.prototype.ngOnDestroy = function () {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    };
    SidePanelComponent.prototype.showMenuButton = function () {
        this.showSideMenu = !this.showSideMenu;
    };
    SidePanelComponent.prototype.closeNav = function () {
        this.showSideMenu = !this.showSideMenu;
    };
    SidePanelComponent.ɵfac = function SidePanelComponent_Factory(t) { return new (t || SidePanelComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(TelemetryUtilsService), ɵɵdirectiveInject(ConfigService), ɵɵdirectiveInject(GlobalService)); };
    SidePanelComponent.ɵcmp = ɵɵdefineComponent({ type: SidePanelComponent, selectors: [["lib-side-panel"]], decls: 1, vars: 1, consts: [["class", "sb-sidebar-menu pl-0", 4, "ngIf"], [1, "sb-sidebar-menu", "pl-0"], ["class", "ua-sidebar-menu-list", "id", "d.route", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["id", "d.route", 1, "ua-sidebar-menu-list", 3, "ngClass", "click"]], template: function SidePanelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidePanelComponent_ul_0_Template, 2, 1, "ul", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", !ctx.hideSidePanel);
        } }, directives: [NgIf, NgForOf, NgClass], styles: [".sb-sidebar-menu[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu[_ngcontent-%COMP%]   li.menu-active[_ngcontent-%COMP%]{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.openbtn[_ngcontent-%COMP%], .overlay-sidebar[_ngcontent-%COMP%]{display:none}@media (max-width:768px){.sb-sidebar-menu[_ngcontent-%COMP%]{display:none}.openbtn[_ngcontent-%COMP%]{display:inline;border:none;cursor:pointer;height:40px;width:40px;border-radius:16px;font-size:22px;background-color:#fff;box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:#0245fd}.overlay-sidebar[_ngcontent-%COMP%]{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu[_ngcontent-%COMP%]{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:#f5f6fa;color:rgba(0,0,0,.87);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.sidebar-menu__content[_ngcontent-%COMP%]{padding:0 1rem;height:100%}.closebtn[_ngcontent-%COMP%]{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.ua-sidebar-menu-list[_ngcontent-%COMP%]{margin-bottom:.5rem;position:relative;padding:.675rem;font-size:.875rem}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li.menu-active[_ngcontent-%COMP%]{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--white);font-weight:700;color:#002e50}}"] });
    return SidePanelComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidePanelComponent, [{
        type: Component,
        args: [{
                selector: 'lib-side-panel',
                templateUrl: './side-panel.component.html',
                styleUrls: ['./side-panel.component.scss']
            }]
    }], function () { return [{ type: Router }, { type: UciService }, { type: ActivatedRoute }, { type: TelemetryUtilsService }, { type: ConfigService }, { type: GlobalService }]; }, null); })();

var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.copyData = function (id) {
        var val = document.getElementById(id).innerText;
        var selBox = document.createElement('textarea');
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
    };
    Helper.makBotUrl = function (startingMessage, phoneNumber) {
        return encodeURI('https://api.whatsapp.com/send?text=' + startingMessage + '&phone=' + phoneNumber);
    };
    Helper.ɵfac = function Helper_Factory(t) { return new (t || Helper)(); };
    Helper.ɵprov = ɵɵdefineInjectable({ token: Helper, factory: Helper.ɵfac, providedIn: 'root' });
    return Helper;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(Helper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

var _c0$1 = ["botTable"];
function ConversationListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.lbl == null ? null : ctx_r1.resourceService.frmelmnts.lbl.name, "");
} }
function ConversationListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r18 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r18.name, " ");
} }
function ConversationListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.resourceService.frmelmnts == null ? null : ctx_r3.resourceService.frmelmnts.lbl == null ? null : ctx_r3.resourceService.frmelmnts.lbl.status, " ");
} }
function ConversationListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r19 = ctx.$implicit;
    ɵɵproperty("ngClass", "status-" + (element_r19.status ? element_r19.status.toLowerCase() : ""));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r19.status, " ");
} }
function ConversationListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r5.resourceService.frmelmnts == null ? null : ctx_r5.resourceService.frmelmnts.lbl == null ? null : ctx_r5.resourceService.frmelmnts.lbl.description, "");
} }
function ConversationListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r20 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r20.description, " ");
} }
function ConversationListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.resourceService.frmelmnts == null ? null : ctx_r7.resourceService.frmelmnts.lbl == null ? null : ctx_r7.resourceService.frmelmnts.lbl.startingMessage, " ");
} }
function ConversationListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r21 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r21.startingMessage, " ");
} }
function ConversationListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.lbl == null ? null : ctx_r9.resourceService.frmelmnts.lbl.botUrl, " ");
} }
function ConversationListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    var _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 30);
    ɵɵelementStart(1, "span", 32);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 33);
    ɵɵlistener("click", function ConversationListComponent_td_30_Template_button_click_3_listener() { ɵɵrestoreView(_r25); var i_r23 = ctx.index; var ctx_r24 = ɵɵnextContext(); return ctx_r24.onCopy("copyUrl-" + i_r23); });
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r22 = ctx.$implicit;
    var i_r23 = ctx.index;
    var ctx_r10 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("id", "copyUrl-" + i_r23);
    ɵɵadvance(1);
    ɵɵtextInterpolate(element_r22.url);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r10.resourceService.frmelmnts == null ? null : ctx_r10.resourceService.frmelmnts.btn == null ? null : ctx_r10.resourceService.frmelmnts.btn.copy, " ");
} }
function ConversationListComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r11.resourceService.frmelmnts == null ? null : ctx_r11.resourceService.frmelmnts.lbl == null ? null : ctx_r11.resourceService.frmelmnts.lbl.botId, "");
} }
function ConversationListComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    var _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 30);
    ɵɵelementStart(1, "span", 32);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 33);
    ɵɵlistener("click", function ConversationListComponent_td_33_Template_button_click_3_listener() { ɵɵrestoreView(_r29); var i_r27 = ctx.index; var ctx_r28 = ɵɵnextContext(); return ctx_r28.onCopy("copyId-" + i_r27); });
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r26 = ctx.$implicit;
    var i_r27 = ctx.index;
    var ctx_r12 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("id", "copyId-" + i_r27);
    ɵɵadvance(1);
    ɵɵtextInterpolate(element_r26.id);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r12.resourceService.frmelmnts == null ? null : ctx_r12.resourceService.frmelmnts.btn == null ? null : ctx_r12.resourceService.frmelmnts.btn.copy, " ");
} }
function ConversationListComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r13.resourceService.frmelmnts == null ? null : ctx_r13.resourceService.frmelmnts.lbl == null ? null : ctx_r13.resourceService.frmelmnts.lbl.action, "");
} }
function ConversationListComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 34);
    ɵɵelementStart(1, "button", 35);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "more_vert");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-menu", 36, 37);
    ɵɵelementStart(6, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_6_listener() { ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var ctx_r33 = ɵɵnextContext(); return ctx_r33.onEdit(element_r30); });
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_8_listener() { ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r35 = ɵɵnextContext(); return ctx_r35.onDelete(element_r30, i_r31); });
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_10_listener() { ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r36 = ɵɵnextContext(); return ctx_r36.onStatusChange(element_r30, i_r31); });
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementStart(12, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_td_36_Template_button_click_12_listener() { ɵɵrestoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r37 = ɵɵnextContext(); return ctx_r37.onReport(element_r30, i_r31); });
    ɵɵtext(13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r30 = ctx.$implicit;
    var _r32 = ɵɵreference(5);
    var ctx_r14 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r32);
    ɵɵadvance(6);
    ɵɵtextInterpolate1("", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.edit, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.delete, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r30.status === "Live" ? ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.disable : ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.enable, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.report, " ");
} }
function ConversationListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 39);
} }
function ConversationListComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 40);
} }
function ConversationListComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    var _r43 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 41);
    ɵɵelementStart(1, "mat-card");
    ɵɵelementStart(2, "mat-card-content");
    ɵɵelementStart(3, "mat-grid-list", 42);
    ɵɵelementStart(4, "mat-grid-tile", 2);
    ɵɵelementStart(5, "div", 3);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-grid-tile", 43);
    ɵɵelementStart(8, "div", 44);
    ɵɵelementStart(9, "h5");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 35);
    ɵɵelementStart(12, "mat-icon");
    ɵɵtext(13, "more_vert");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "mat-menu", 36, 45);
    ɵɵelementStart(16, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_16_listener() { ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var ctx_r42 = ɵɵnextContext(); return ctx_r42.onEdit(chatBot_r39); });
    ɵɵtext(17);
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_18_listener() { ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r44 = ɵɵnextContext(); return ctx_r44.onDelete(chatBot_r39, i_r40); });
    ɵɵtext(19);
    ɵɵelementEnd();
    ɵɵelementStart(20, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_20_listener() { ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r45 = ɵɵnextContext(); return ctx_r45.onStatusChange(chatBot_r39, i_r40); });
    ɵɵtext(21);
    ɵɵelementEnd();
    ɵɵelementStart(22, "button", 38);
    ɵɵlistener("click", function ConversationListComponent_div_40_Template_button_click_22_listener() { ɵɵrestoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r46 = ɵɵnextContext(); return ctx_r46.onReport(chatBot_r39, i_r40); });
    ɵɵtext(23);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-grid-tile", 2);
    ɵɵelementStart(25, "div", 3);
    ɵɵtext(26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(27, "mat-grid-tile", 46);
    ɵɵelementStart(28, "div", 3);
    ɵɵtext(29);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(30, "mat-grid-tile", 2);
    ɵɵelementStart(31, "div", 3);
    ɵɵtext(32);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(33, "mat-grid-tile", 46);
    ɵɵelementStart(34, "div", 44);
    ɵɵelementStart(35, "span");
    ɵɵtext(36);
    ɵɵelementEnd();
    ɵɵelementStart(37, "span");
    ɵɵelementStart(38, "button", 47);
    ɵɵtext(39);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var chatBot_r39 = ctx.$implicit;
    var _r41 = ɵɵreference(15);
    var ctx_r17 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵtextInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.name);
    ɵɵadvance(4);
    ɵɵtextInterpolate(chatBot_r39.name);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r41);
    ɵɵadvance(6);
    ɵɵtextInterpolate1("", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.edit, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.delete, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", chatBot_r39.status === "Live" ? ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.disable : ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.enable, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.report, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.description);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", chatBot_r39.description, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.startingMessage);
    ɵɵadvance(4);
    ɵɵtextInterpolate(chatBot_r39.startingMessage);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", "status-" + (chatBot_r39.status ? chatBot_r39.status.toLowerCase() : ""));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", chatBot_r39.status, " ");
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
    ConversationListComponent.ɵfac = function ConversationListComponent_Factory(t) { return new (t || ConversationListComponent)(ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(GlobalService)); };
    ConversationListComponent.ɵcmp = ɵɵdefineComponent({ type: ConversationListComponent, selectors: [["lib-conversation-list"]], viewQuery: function ConversationListComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$1, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.botTable = _t.first);
        } }, decls: 43, vars: 12, consts: [[1, "uci-container"], ["cols", "2", "rowHeight", "4rem"], ["colspan", "1"], [1, "w-100", "text-left"], ["matInput", "", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter"], ["mat-button", "", "matSuffix", "", "mat-stroked-button", "", "aria-label", "search", 1, "uci-action-button", "computer", "only", 3, "click"], [1, "pb-10", "text-right", "w-100"], [1, "right-floated", "pt-0"], ["mat-raised-button", "", 1, "uci-action-button", 3, "click"], ["cols", "1"], ["mat-table", "", 1, "computer", "only", 3, "dataSource"], ["botTable", ""], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "startingMessage"], ["matColumnDef", "botUrl"], ["matColumnDef", "botId"], ["matColumnDef", "action"], ["mat-cell", "", "class", "center aligned", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile", "only"], ["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "uci-mat-pagination"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], [1, "hide", 3, "id"], ["mat-raised-button", "", 1, "uci-copy-button", 3, "click"], ["mat-cell", "", 1, "center", "aligned"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "uci-list-menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mb-5"], ["cols", "4", "rowHeight", "35"], ["colspan", "3", 1, "overflow-visible"], [1, "w-100", "d-flex", "justify-between", "align-middle"], ["menuMobile", "matMenu"], ["colspan", "3"], ["mat-flat-button", "", 1, "small-btn", 3, "ngClass"]], template: function ConversationListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "mat-grid-list", 1);
            ɵɵelementStart(2, "mat-grid-tile", 2);
            ɵɵelementStart(3, "div", 3);
            ɵɵelementStart(4, "mat-form-field");
            ɵɵelementStart(5, "input", 4);
            ɵɵlistener("ngModelChange", function ConversationListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.search = $event; })("keyup.enter", function ConversationListComponent_Template_input_keyup_enter_5_listener() { return ctx.getSearch(); });
            ɵɵelementEnd();
            ɵɵelementStart(6, "button", 5);
            ɵɵlistener("click", function ConversationListComponent_Template_button_click_6_listener() { return ctx.getSearch(); });
            ɵɵtext(7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-grid-tile", 2);
            ɵɵelementStart(9, "div", 6);
            ɵɵelementStart(10, "div", 7);
            ɵɵelementStart(11, "button", 8);
            ɵɵlistener("click", function ConversationListComponent_Template_button_click_11_listener() { return ctx.onAddNew(); });
            ɵɵtext(12);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(13, "mat-grid-list", 9);
            ɵɵelementStart(14, "table", 10, 11);
            ɵɵelementContainerStart(16, 12);
            ɵɵtemplate(17, ConversationListComponent_th_17_Template, 2, 1, "th", 13);
            ɵɵtemplate(18, ConversationListComponent_td_18_Template, 2, 1, "td", 14);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(19, 15);
            ɵɵtemplate(20, ConversationListComponent_th_20_Template, 2, 1, "th", 13);
            ɵɵtemplate(21, ConversationListComponent_td_21_Template, 2, 2, "td", 16);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(22, 17);
            ɵɵtemplate(23, ConversationListComponent_th_23_Template, 2, 1, "th", 13);
            ɵɵtemplate(24, ConversationListComponent_td_24_Template, 2, 1, "td", 14);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(25, 18);
            ɵɵtemplate(26, ConversationListComponent_th_26_Template, 2, 1, "th", 13);
            ɵɵtemplate(27, ConversationListComponent_td_27_Template, 2, 1, "td", 14);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(28, 19);
            ɵɵtemplate(29, ConversationListComponent_th_29_Template, 2, 1, "th", 13);
            ɵɵtemplate(30, ConversationListComponent_td_30_Template, 5, 3, "td", 14);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(31, 20);
            ɵɵtemplate(32, ConversationListComponent_th_32_Template, 2, 1, "th", 13);
            ɵɵtemplate(33, ConversationListComponent_td_33_Template, 5, 3, "td", 14);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(34, 21);
            ɵɵtemplate(35, ConversationListComponent_th_35_Template, 2, 1, "th", 13);
            ɵɵtemplate(36, ConversationListComponent_td_36_Template, 14, 5, "td", 22);
            ɵɵelementContainerEnd();
            ɵɵtemplate(37, ConversationListComponent_tr_37_Template, 1, 0, "tr", 23);
            ɵɵtemplate(38, ConversationListComponent_tr_38_Template, 1, 0, "tr", 24);
            ɵɵelementEnd();
            ɵɵelementStart(39, "div", 25);
            ɵɵtemplate(40, ConversationListComponent_div_40_Template, 40, 13, "div", 26);
            ɵɵelementEnd();
            ɵɵelementStart(41, "div", 27);
            ɵɵelementStart(42, "mat-paginator", 28);
            ɵɵlistener("page", function ConversationListComponent_Template_mat_paginator_page_42_listener($event) { return ctx.navigateToPage($event); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(5);
            ɵɵproperty("ngModel", ctx.search)("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.search);
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.search, " ");
            ɵɵadvance(5);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.addNew, " ");
            ɵɵadvance(2);
            ɵɵproperty("dataSource", ctx.chatBots);
            ɵɵadvance(23);
            ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ctx.chatBots);
            ɵɵadvance(2);
            ɵɵproperty("length", ctx.pager.totalItems)("pageSize", ctx.pager.pageSize)("pageIndex", ctx.pager.currentPage - 1)("pageSizeOptions", ctx.pager.pageSizeOptions);
        } }, directives: [MatGridList, MatGridTile, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatSuffix, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, NgForOf, MatPaginator, MatHeaderCell, MatCell, NgClass, MatMenuTrigger, MatIcon, _MatMenu, MatMenuItem, MatHeaderRow, MatRow, MatCard, MatCardContent], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .mat-select-panel-wrap{flex-basis:auto}.mat-column-action[_ngcontent-%COMP%]{width:5px}.uci-list-menu[_ngcontent-%COMP%]{background:red}.uci-container[_ngcontent-%COMP%]     .cdk-overlay-pane{width:auto}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.status-live[_ngcontent-%COMP%]{color:#3c763d}.status-draft[_ngcontent-%COMP%]{color:#ffb300}.status-disabled[_ngcontent-%COMP%]{color:#ff4a2f}.mobile[_ngcontent-%COMP%]   .status-draft[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(241,210,140,.69)}.mobile[_ngcontent-%COMP%]   .status-disabled[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(229,135,126,.63)}.mobile[_ngcontent-%COMP%]   .status-live[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(120,206,122,.58)}.action-dropdown[_ngcontent-%COMP%]{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{cursor:pointer}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#f6f6f6}"] });
    return ConversationListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConversationListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-list',
                templateUrl: './conversation-list.component.html',
                styleUrls: ['./conversation-list.component.scss']
            }]
    }], function () { return [{ type: UciService }, { type: Router }, { type: GlobalService }]; }, { botTable: [{
            type: ViewChild,
            args: ['botTable']
        }] }); })();

var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent(globalService, dialogRef, data) {
        this.globalService = globalService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
        this.resourceService = this.globalService.getResourceService();
    };
    TermsConditionsComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    TermsConditionsComponent.ɵfac = function TermsConditionsComponent_Factory(t) { return new (t || TermsConditionsComponent)(ɵɵdirectiveInject(GlobalService), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    TermsConditionsComponent.ɵcmp = ɵɵdefineComponent({ type: TermsConditionsComponent, selectors: [["lib-terms-conditions"]], decls: 1441, vars: 1, consts: [[2, "background", "white", "margin-top", "5%", "padding", "20px"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "tabs-content-wrapper", "mb-40"], [1, "ui", "secondary", "menu"], ["suiTabHeader", "1", 1, "item"], ["suiTabHeader", "2", 1, "item"], ["suiTabHeader", "3", 1, "item"], ["suiTabHeader", "6", 1, "item"], ["suiTabContent", "1", 1, "ui", "segment"], ["id", "termsOfUse", "aria-labelledby", "terms-of-use-tab"], [1, "tagLine"], [1, "sub-heading"], ["type", "a", 1, "arrow-list"], ["href", "https://diksha.gov.in/"], ["type", "i", 1, "arrow-list"], ["type", "A", 1, "arrow-list"], [1, "TermsOfUseClick"], [1, "arrow-list"], ["href", "https://diksha.gov.in/help/getting-started/explore-diksha/index.html", "target", "_blank"], ["href", "mailto:support@teamdiksha.org"], ["suiTabContent", "2", 1, "ui", "segment"], ["id", "privacyPolicy", "aria-labelledby", "privacy-policy-tab"], ["href", "https://diksha.gov.in", "target", "_blank"], ["tabtoshow", "terms-of-use-tab", "tabpanetoshow", "termsOfUse", 1, "TermsOfUseClick"], ["tabtoshow", "privacy-policy-tab", "tabpanetoshow", "privacyPolicy", 1, "TermsOfUseClick"], ["tabtoshow", "content-policy-tab", "tabpanetoshow", "contentPolicy", 1, "TermsOfUseClick"], ["suiTabContent", "3", 1, "ui", "segment"], ["id", "contentPolicy", "aria-labelledby", "content-policy-tab"], ["href", "https://creativecommons.org/licenses/by/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-sa/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-nc/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-nd/4.0/legalcode"], ["suiTabContent", "4", 1, "ui", "segment"], ["id", "groupGuidelines", "role", "tabpanel", "aria-labelledby", "group-guidelines-tab", 1, "tab-pane", "fade"], ["type", "1", 1, "arrow-list"], ["suiTabContent", "5", 1, "ui", "segment"], ["id", "courseGuidelines", "aria-labelledby", "course-guidelines-tab"], ["suiTabContent", "6", 1, "ui", "segment"], ["id", "administratorGuidelines", "aria-labelledby", "administrator-guidelines-tab"], ["align", "end"], ["mat-stroked-button", "", 1, "action-button", 3, "click"]], template: function TermsConditionsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "section", 0);
            ɵɵelementStart(1, "h1", 1);
            ɵɵtext(2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "div", 2);
            ɵɵelementStart(4, "sui-tabset");
            ɵɵelementStart(5, "div", 3);
            ɵɵelementStart(6, "a", 4);
            ɵɵtext(7, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementStart(8, "a", 5);
            ɵɵtext(9, "Privacy Policy ");
            ɵɵelementEnd();
            ɵɵelementStart(10, "a", 6);
            ɵɵtext(11, "Content Policy ");
            ɵɵelementEnd();
            ɵɵelementStart(12, "a", 7);
            ɵɵtext(13, "Administrator Guidelines ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "div", 8);
            ɵɵelementStart(15, "div", 9);
            ɵɵelementStart(16, "h4");
            ɵɵelementStart(17, "strong");
            ɵɵtext(18, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(19, "label", 10);
            ɵɵelementStart(20, "em");
            ɵɵtext(21, "( Last updated on ");
            ɵɵelementStart(22, "b");
            ɵɵtext(23, "28-04-2021");
            ɵɵelementEnd();
            ɵɵtext(24, " )");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(25, "p");
            ɵɵtext(26, " This website is designed, developed and maintained by the National Council for Educational Research and Training (NCERT) (Ministry of Education (MoE), Government of India) (together referred to as \"");
            ɵɵelementStart(27, "strong");
            ɵɵtext(28, "GoI");
            ɵɵelementEnd();
            ɵɵtext(29, "\"). ");
            ɵɵelementEnd();
            ɵɵelementStart(30, "p");
            ɵɵtext(31, " These terms of use, as amended, govern the usage of DIKSHA (Digital Infrastructure for Knowledge Sharing) by its Users (as defined below) (\"");
            ɵɵelementStart(32, "strong");
            ɵɵtext(33, "Terms");
            ɵɵelementEnd();
            ɵɵtext(34, "\"). DIKSHA is an initiative of the GoI. ");
            ɵɵelementEnd();
            ɵɵelementStart(35, "p");
            ɵɵtext(36, " By using DIKSHA, you have accepted and agree to be governed by these Terms, as may be amended from time to time. The terms \"you\", \"your\" hereinafter refer to any User of DIKSHA, including Registered Users (as defined below). ");
            ɵɵelementEnd();
            ɵɵelementStart(37, "h4", 11);
            ɵɵtext(38, "Definitions");
            ɵɵelementEnd();
            ɵɵelementStart(39, "ol", 12);
            ɵɵelementStart(40, "li");
            ɵɵtext(41, " Administrator means any natural person who is a Registered User and who is authorised to be an administrator by an Institutional User on behalf of such Institutional User. ");
            ɵɵelementEnd();
            ɵɵelementStart(42, "li");
            ɵɵtext(43, " Content means and includes, as the context requires, (i) any text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations, interactive content, features and other materials you may view, access or contribute, (ii) all content and postings that are written, uploaded, submitted, stored, sent, received, shared or otherwise provided by Registered Users, such as posts, comments, feedback, submissions, responses, explanation in forums or groups, for teaching and learning materials, and/or using project/ survey/ observation tools, and (iii) all types of learning material created, uploaded or consumed by a User, such as resources (like teaching or learning content consumed by teachers, parents or students), collections (i.e. sets of ordered resources bundled together to be consumed as a whole), books, e-books, lesson plans, questions, assessments, quizzes, challenges, learning activities, projects, courses and other types of teaching and learning materials that is meant for wide user consumption. ");
            ɵɵelementEnd();
            ɵɵelementStart(44, "li");
            ɵɵtext(45, " DIKSHA means ");
            ɵɵelementStart(46, "strong");
            ɵɵtext(47, "D");
            ɵɵelementEnd();
            ɵɵtext(48, "igital ");
            ɵɵelementStart(49, "strong");
            ɵɵtext(50, "I");
            ɵɵelementEnd();
            ɵɵtext(51, "nfrastructure for ");
            ɵɵelementStart(52, "strong");
            ɵɵtext(53, "K");
            ɵɵelementEnd();
            ɵɵtext(54, "nowledge ");
            ɵɵelementStart(55, "strong");
            ɵɵtext(56, "Sha");
            ɵɵelementEnd();
            ɵɵtext(57, "ring which is the National Platform for School Education, an initiative of the GoI, and is accessible online at ");
            ɵɵelementStart(58, "a", 13);
            ɵɵtext(59, "https://diksha.gov.in,");
            ɵɵelementEnd();
            ɵɵtext(60, " through the DIKSHA android application and through the DIKSHA desktop application, and any includes other sub-domains / extended domains of DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(61, "li");
            ɵɵtext(62, " Institutional User means and includes MoE, any Education Departments (of both Central Government and State/UT), National Council for Educational Research and Training (NCERT), any State Council for Educational Research and Training (SCERT) and training statutory body, Government affiliated body, autonomous authority set up by the Government, Boards and Councils of education (Central, State and others), Schools, Universities, Deemed Universities, Autonomous educational institutions, Learning Centres or other such institutions or organisations who are authorised to operate as a tenant on the DIKSHA digital infrastructure. ");
            ɵɵelementEnd();
            ɵɵelementStart(63, "li");
            ɵɵtext(64, " Registered Users are (i) Users of DIKSHA, who register themselves as users of DIKSHA in accordance with the requirements specified on DIKSHA, and (ii) Users of DIKSHA who have been registered on DIKSHA by an Administrator with permissions to create, curate, review or publish Content for DIKSHA, and such users can log in to DIKSHA with their registered credentials. ");
            ɵɵelementEnd();
            ɵɵelementStart(65, "li");
            ɵɵtext(66, " Users are all natural persons who access DIKSHA and access, view or use Content on DIKSHA, and such Users include Registered Users of DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(67, "h4", 11);
            ɵɵtext(68, "Access and Use");
            ɵɵelementEnd();
            ɵɵelementStart(69, "strong");
            ɵɵtext(70, "Users");
            ɵɵelementEnd();
            ɵɵtext(71, " - ");
            ɵɵelementStart(72, "ol", 14);
            ɵɵelementStart(73, "li");
            ɵɵtext(74, " As a User you represent and warrant that you are of legal age and are legally competent to form a binding contract (or if not, you've received your parent's or guardian's permission to use DIKSHA and they have agreed to these Terms on your behalf). ");
            ɵɵelementEnd();
            ɵɵelementStart(75, "li");
            ɵɵtext(76, " If you are agreeing to these Terms on behalf of a department, institution, organization or other legal entity (for example, if you\u2019re an Administrator agreeing to the Terms on behalf of your school, institution, organisation, government department, non-profit entity, etc.), you hereby represent and warrant that you are duly authorized to agree to these Terms on behalf of that department, institution, organization or entity and these Terms are binding on them. ");
            ɵɵelementEnd();
            ɵɵelementStart(77, "li");
            ɵɵtext(78, " If you are agreeing to this Terms on behalf of a student who is not of legal age, you hereby represent and warrant that you consent / have obtained consent from the parent(s) / legal guardian(s) on behalf of such student, to access, view and use Content on DIKSHA in accordance with these Terms. ");
            ɵɵelementEnd();
            ɵɵelementStart(79, "li");
            ɵɵtext(80, " If you are a student who is not of legal age, you are accessing DIKSHA with consent of parent/legal guardian, you can access, view and use Content on DIKSHA without registering yourself on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(81, "li");
            ɵɵtext(82, " Users can: ");
            ɵɵelementStart(83, "ol", 15);
            ɵɵelementStart(84, "li");
            ɵɵtext(85, "access and use Content available on DIKSHA,");
            ɵɵelementEnd();
            ɵɵelementStart(86, "li");
            ɵɵtext(87, "create and manage their User profiles, and");
            ɵɵelementEnd();
            ɵɵelementStart(88, "li");
            ɵɵtext(89, "share Content with other Users.");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(90, "li");
            ɵɵtext(91, " DIKSHA should be used for learning and educational purposes. As a User, you will be responsible for all your actions and activities in relation to your usage of DIKSHA. All Users must follow the policies and guidelines of DIKSHA as applicable from time to time, such as these ");
            ɵɵelementStart(92, "a", 16);
            ɵɵelementStart(93, "b");
            ɵɵtext(94, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(95, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(96, "li");
            ɵɵtext(97, " Your access and use of DIKSHA may possibly be disrupted due to technical or operational difficulties, without prior notice of downtime. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(98, "strong");
            ɵɵtext(99, "Registered Users");
            ɵɵelementEnd();
            ɵɵtext(100, " - ");
            ɵɵelementStart(101, "ol", 14);
            ɵɵelementStart(102, "li");
            ɵɵtext(103, " DIKSHA allows Users to register themselves on DIKSHA by: ");
            ɵɵelementStart(104, "ol", 15);
            ɵɵelementStart(105, "li");
            ɵɵtext(106, "Self-registration;");
            ɵɵelementEnd();
            ɵɵelementStart(107, "li");
            ɵɵtext(108, "State led registration.");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(109, "li");
            ɵɵtext(110, " Depending on your mode of registration, as a Registered User, DIKSHA collects certain data and information about you in accordance with the ");
            ɵɵelementStart(111, "a", 16);
            ɵɵelementStart(112, "b");
            ɵɵtext(113, "Privacy Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(114, ". Registered Users may also choose to give their consent for certain of their data and information to be accessed by Administrators for specified purposes in accordance with the relevant policies and guidelines of DIKSHA as applicable from time to time. ");
            ɵɵelementEnd();
            ɵɵelementStart(115, "li");
            ɵɵtext(116, " Registered Users can use / participate in a variety of offerings on DIKSHA including: ");
            ɵɵelementStart(117, "ul", 17);
            ɵɵelementStart(118, "li");
            ɵɵtext(119, " Submitting / posting / uploading / otherwise providing Content; ");
            ɵɵelementEnd();
            ɵɵelementStart(120, "li");
            ɵɵtext(121, "Accessing courses or other collections of Content;");
            ɵɵelementEnd();
            ɵɵelementStart(122, "li");
            ɵɵtext(123, "Creating or participating in DIKSHA Groups.");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(124, "li");
            ɵɵtext(125, " All Registered Users (including Administrators) must follow the policies and guidelines of DIKSHA as applicable from time to time, including but not limited to these Terms, the Content Policy of DIKSHA and Privacy Policy of DIKSHA. Some Registered Users may have read, write and edit rights on DIKSHA to create, curate, review or publish Content, such rights are given by Institutional Users. ");
            ɵɵelementEnd();
            ɵɵelementStart(126, "li");
            ɵɵtext(127, " Registered Users are responsible for maintaining the confidentiality of their User ID and Password and also responsible for all activities that occur under their User ID and Password. As a Registered User, you agree, ");
            ɵɵelementStart(128, "em");
            ɵɵtext(129, "inter alia");
            ɵɵelementEnd();
            ɵɵtext(130, ", to provide true, accurate, current and complete information about yourself as prompted by the DIKSHA registration form or provided by you as a visitor or user of a third party site through which you access DIKSHA. If you provide any information that is untrue, inappropriate, inaccurate, not current or incomplete or there are reasonable grounds to suspect that such information is untrue, inaccurate, inappropriate, not current or incomplete, or not in accordance with these Terms, the administrators and technology support providers of DIKSHA have the right to indefinitely suspend or terminate your registration or block access to and participation in DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(131, "li");
            ɵɵtext(132, " A Registered User may not transfer their registration to anyone else. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(133, "strong");
            ɵɵtext(134, "Institutional Users ");
            ɵɵelementEnd();
            ɵɵtext(135, "- ");
            ɵɵelementStart(136, "ol", 14);
            ɵɵelementStart(137, "li");
            ɵɵtext(138, " Institutional Users can operate as a tenant on the DIKSHA digital infrastructure. ");
            ɵɵelementEnd();
            ɵɵelementStart(139, "li");
            ɵɵtext(140, " Institutional Users shall appoint Administrators and shall be responsible for the Administrators\u2019 compliance and enforcement of terms and policies of DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(141, "li");
            ɵɵtext(142, " Institutional Users can authorise Registered Users to create, curate, review or publish Content or collections of Content and shall be responsible for such Registered Users\u2019 compliance with the terms and policies of DIKSHA. For more details on the role of administrators, creators, contributors, reviewers and other roles, please visit the ");
            ɵɵelementStart(143, "a", 18);
            ɵɵtext(144, "Help Center");
            ɵɵelementEnd();
            ɵɵtext(145, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(146, "li");
            ɵɵtext(147, " Institutional Users may run programs on the DIKSHA digital infrastructure, including (i) to source Content through programs and tools that invite the participation and contributions from the education ecosystem, and (ii) to offer courses, conduct quizzes, competitions, assessments, or other programs using the various tools available including project / survey / observation tools that invite the participation of Users of DIKSHA. Such programs and its participants shall be governed by the terms and policies of DIKSHA, in addition to any specific terms of use prescribed for the same. ");
            ɵɵelementEnd();
            ɵɵelementStart(148, "li");
            ɵɵtext(149, " Institutional Users shall be responsible for and shall comply with Indian law currently in force, including but not limited to the (Indian) Information Technology (Reasonable Security Practices and Procedures) Rules, 2011 with respect to any data and personal information that is collected during the course of running such programs. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(150, "h4", 11);
            ɵɵtext(151, "Prohibited Content and Use");
            ɵɵelementEnd();
            ɵɵelementStart(152, "p");
            ɵɵtext(153, "Registered Users shall not:");
            ɵɵelementEnd();
            ɵɵelementStart(154, "ol", 12);
            ɵɵelementStart(155, "li");
            ɵɵtext(156, " use DIKSHA for any purpose other than learning and educational purposes; ");
            ɵɵelementEnd();
            ɵɵelementStart(157, "li");
            ɵɵtext(158, " post, upload, or distribute any defamatory, libelous, or inaccurate Content or other content on DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(159, "li");
            ɵɵtext(160, " post, upload, or distribute any Content or other content that is unlawful or that a reasonable person could deem to be objectionable, offensive, indecent, pornographic, harassing, threatening, vulgar, hateful, racially or ethnically offensive, or otherwise inappropriate; ");
            ɵɵelementEnd();
            ɵɵelementStart(161, "li");
            ɵɵtext(162, " contribute any Content (including any of the elements that such Content comprises such as text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations etc.) that infringes upon any third party rights including but not limited to intellectual property rights such as copyrights or any other legal rights of individual(s)/organisation(s); ");
            ɵɵelementEnd();
            ɵɵelementStart(163, "li");
            ɵɵtext(164, " use DIKSHA in any manner that is harmful to minors, or in any manner that violates the extant ");
            ɵɵelementStart(165, "a", 16);
            ɵɵelementStart(166, "b");
            ɵɵtext(167, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(168, ", the ");
            ɵɵelementStart(169, "a", 16);
            ɵɵelementStart(170, "b");
            ɵɵtext(171, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(172, " and the ");
            ɵɵelementStart(173, "a", 16);
            ɵɵelementStart(174, "b");
            ɵɵtext(175, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(176, "; ");
            ɵɵelementEnd();
            ɵɵelementStart(177, "li");
            ɵɵtext(178, " impersonate any person or entity, falsely claim an affiliation with any person or entity, or access DIKSHA accounts of others without permission, or perform any other fraudulent activity; ");
            ɵɵelementEnd();
            ɵɵelementStart(179, "li");
            ɵɵtext(180, " delete the copyright or other proprietary rights notices on DIKSHA or on any licensed Content; ");
            ɵɵelementEnd();
            ɵɵelementStart(181, "li");
            ɵɵtext(182, " assert, or authorize, assist, or encourage any third party to assert, against DIKSHA any intellectual property infringement claim regarding any Content you have used, submitted, or otherwise made available on or through DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(183, "li");
            ɵɵtext(184, " make unsolicited offers, advertisements, proposals, or send junk mail or spam to other Users (including, but not limited to, unsolicited advertising, promotional materials, offerings or other solicitation material, bulk mailing of commercial advertising, chain mail, informational announcements, charity requests, and petitions for signatures); ");
            ɵɵelementEnd();
            ɵɵelementStart(185, "li");
            ɵɵtext(186, " use DIKSHA for any illegal purpose, or in violation of any local, state, national, or international law, including, without limitation, laws governing intellectual property and other proprietary rights, and data protection and privacy; ");
            ɵɵelementEnd();
            ɵɵelementStart(187, "li");
            ɵɵtext(188, " defame, harass, abuse, threaten or defraud Users, or collect, or attempt to collect, personal information about Users or third parties without their consent; ");
            ɵɵelementEnd();
            ɵɵelementStart(189, "li");
            ɵɵtext(190, " remove, circumvent, disable, damage or otherwise interfere with security-related features of DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(191, "li");
            ɵɵtext(192, " modify, adapt, translate or create derivative works based upon Content on DIKSHA or any part thereof, except and only to the extent expressly permitted by the license applicable to such Content; or ");
            ɵɵelementEnd();
            ɵɵelementStart(193, "li");
            ɵɵtext(194, " intentionally interfere with or damage operation of DIKSHA or any user's usage of it, by any means, including without limitation by participation in any denial-of-service type attacks or by uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(195, "h4", 11);
            ɵɵtext(196, "Privacy and Personal Information");
            ɵɵelementEnd();
            ɵɵelementStart(197, "ol", 12);
            ɵɵelementStart(198, "li");
            ɵɵtext(199, " DIKSHA takes the privacy of its users very seriously. Please review the entire ");
            ɵɵelementStart(200, "a", 16);
            ɵɵelementStart(201, "b");
            ɵɵtext(202, "Privacy Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(203, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(204, "li");
            ɵɵtext(205, " By using DIKSHA and/or by providing your information, you consent to the collection and use of the information you disclose on DIKSHA in accordance with the policies and guidelines of DIKSHA as applicable from time to time, including but not limited to the ");
            ɵɵelementStart(206, "a", 16);
            ɵɵelementStart(207, "b");
            ɵɵtext(208, "Privacy Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(209, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(210, "h4", 11);
            ɵɵtext(211, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementStart(212, "ol", 17);
            ɵɵelementStart(213, "li");
            ɵɵtext(214, " DIKSHA is an open content repository that has been built with the purpose to enable greater access to learning and teaching content. When you use DIKSHA, you join a vast community of learners and teachers using DIKSHA which involves a certain level of trust. ");
            ɵɵelementEnd();
            ɵɵelementStart(215, "li");
            ɵɵtext(216, " Users are expected to respect that trust and be responsible about their usage of DIKSHA and all its Content and follow all relevant terms, policies and guidelines applicable to Content, including the ");
            ɵɵelementStart(217, "a", 16);
            ɵɵelementStart(218, "b");
            ɵɵtext(219, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(220, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(221, "li");
            ɵɵtext(222, " By submitting / uploading / creating/ publishing Content on DIKSHA and following the open license frameworks adopted by DIKSHA, Registered Users recognise and accept that the Content will be accessed and used by any individual, institution or organisation through various platforms, portals and applications in accordance with license conditions. ");
            ɵɵelementEnd();
            ɵɵelementStart(223, "li");
            ɵɵtext(224, " It shall be the sole responsibility of Registered Users to ensure that proper and correct attributions, acknowledgements and sourcing references are given to the Content and individual(s)/ institution(s) that have been involved in the development and creation of Content and wherever Content has been quoted/used. ");
            ɵɵelementEnd();
            ɵɵelementStart(225, "li");
            ɵɵtext(226, " It shall be the responsibility of Registered Users not to infringe upon any third party rights including but not limited to intellectual property rights such as copyrights or any other legal rights of individual(s)/organisation(s) with regards to Content (including all the elements that such Content comprises such as text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations etc.) contributed on DIKSHA. For any legal matter arising out of infringement of such rights by the Registered User, such Registered User shall be solely responsible for any financial or other damages arising out of such violations and disputes. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(227, "h4", 11);
            ɵɵtext(228, "Changes in DIKSHA Policies");
            ɵɵelementEnd();
            ɵɵelementStart(229, "p");
            ɵɵtext(230, "These Terms (including any policies, terms and guidelines) may be updated or modified from time to time and the revised Terms will be reflected herein. Your continued use of DIKSHA constitutes acceptance of the then-current Terms. Hence, we encourage you to visit this page periodically to review any changes. ");
            ɵɵelementEnd();
            ɵɵelementStart(231, "h4", 11);
            ɵɵtext(232, "Limited Liability");
            ɵɵelementEnd();
            ɵɵelementStart(233, "ol", 17);
            ɵɵelementStart(234, "li");
            ɵɵtext(235, " As a User you shall not collect any personal information or sensitive personal data of other Users through DIKSHA, but if you do collect such information, you must ensure that such collection, storage, transfer and disclosure is in accordance with Indian law currently in force, including but not limited to the (Indian) Information Technology (Reasonable Security Practices and Procedures) Rules, 2011. ");
            ɵɵelementEnd();
            ɵɵelementStart(236, "li");
            ɵɵtext(237, " GoI, administrators and technology support providers of DIKSHA and Institutional Users do not guarantee the accuracy of any of the Content made available on the DIKSHA. GoI, administrators and technology support providers of DIKSHA and Institutional Users do not take responsibility for any external websites linked on DIKSHA, including compliance with Indian Government Web Guidelines. ");
            ɵɵelementEnd();
            ɵɵelementStart(238, "li");
            ɵɵtext(239, " Registered Users are solely responsible for maintaining the security and confidentiality of the username and password. Any unauthorised use of your username or password or any other breach of security must be notified by sending an email notification to ");
            ɵɵelementStart(240, "a", 19);
            ɵɵelementStart(241, "b");
            ɵɵtext(242, "support@teamdiksha.org");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(243, ". GoI, administrators and technology support providers of DIKSHA and Institutional Users will not be liable for any loss or damage arising from failure to comply with this provision. ");
            ɵɵelementEnd();
            ɵɵelementStart(244, "li");
            ɵɵtext(245, " Registered Users are responsible for any offensive or unlawful Content posted, transmitted, sent or communicated through DIKSHA. GoI, administrators and technology support providers of DIKSHA and Institutional Users shall not be held responsible for any offensive or unlawful Content posted, uploaded, transmitted, sent and received through DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(246, "li");
            ɵɵtext(247, " In no event will GoI, administrators and technology support providers of DIKSHA or Institutional Users be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the access or use of DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(248, "h4", 11);
            ɵɵtext(249, "Termination");
            ɵɵelementEnd();
            ɵɵelementStart(250, "p");
            ɵɵtext(251, "Any violation or breach of these Terms, including while investigating complaints or alleged violation of these Terms, may lead to suspension or termination of your registration and access to DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(252, "h4", 11);
            ɵɵtext(253, "Electronic Agreement");
            ɵɵelementEnd();
            ɵɵelementStart(254, "p");
            ɵɵtext(255, "This document is a written agreement, an electronic record and valid and enforceable electronic agreement / contract under Information Technology Act, 2000 (as applicable in Republic of India) and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes under applicable Indian laws. This electronic record is generated by a computer system and does not require any physical or digital signatures. Your usage of DIKSHA shall be your deemed acceptance of these Terms and all the modifications and updates thereto. ");
            ɵɵelementEnd();
            ɵɵelementStart(256, "h4", 11);
            ɵɵtext(257, "Governing Law and Dispute Resolution");
            ɵɵelementEnd();
            ɵɵelementStart(258, "p");
            ɵɵtext(259, " These Terms shall be governed by and construed in accordance with the Indian law. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India. ");
            ɵɵelementEnd();
            ɵɵelementStart(260, "h4", 11);
            ɵɵtext(261, "Disclaimer");
            ɵɵelementEnd();
            ɵɵelementStart(262, "p");
            ɵɵtext(263, " DIKSHA IS AVAILABLE ON AN \"AS IS\" BASIS AND THERE ARE NO WARRANTIES OF ANY KIND WITH RESPECT TO DIKSHA. GOI AND THE ADMINISTRATORS AND TECHNOLOGY SUPPORT PROVIDERS OF DIKSHA SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. ACCESS AND USE OF DIKSHA (INCLUDING ANY CONTENT OR INFORMATION) IS ENTIRELY AT YOUR OWN RISK. IN NO EVENT WILL GOI OR THE ADMINISTRATORS AND TECHNOLOGY SUPPORT PROVIDERS OF DIKSHA BE LIABLE FOR ANY EXPENSE, LOSS OR DAMAGE INCLUDING, WITHOUT LIMITATION, INDIRECT OR CONSEQUENTIAL LOSS OR DAMAGE, OR ANY EXPENSE, LOSS OR DAMAGE WHATSOEVER ARISING FROM USE, OR LOSS OF USE, OF DATA, ARISING OUT OF OR IN CONNECTION WITH THE USE OF DIKSHA. WHEN YOU SELECT A LINK TO AN OUTSIDE WEBSITE, YOU ARE LEAVING DIKSHA AND ARE SUBJECT TO THE PRIVACY AND SECURITY POLICIES OF THE OWNERS/SPONSORS OF THE OUTSIDE WEBSITE / DOMAIN. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(264, "div", 20);
            ɵɵelementStart(265, "div", 21);
            ɵɵelementStart(266, "h4");
            ɵɵelementStart(267, "strong");
            ɵɵtext(268, "Privacy Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(269, "label", 10);
            ɵɵelementStart(270, "em");
            ɵɵtext(271, "( Last updated on ");
            ɵɵelementStart(272, "b");
            ɵɵtext(273, "28-04-2021");
            ɵɵelementEnd();
            ɵɵtext(274, " )");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(275, "p");
            ɵɵtext(276, " DIKSHA (Digital Infrastructure for Knowledge Sharing ) is the National Platform for School Education for the benefit of teachers and learners across India. DIKSHA is an initiative of National Council for Educational Research and Training (NCERT) (Ministry of Education (MoE), Government of India). Users of DIKSHA can access content for learning on the web at ");
            ɵɵelementStart(277, "a", 22);
            ɵɵtext(278, "https://diksha.gov.in");
            ɵɵelementEnd();
            ɵɵtext(279, ", through the DIKSHA mobile application, and the desktop application. ");
            ɵɵelementEnd();
            ɵɵelementStart(280, "p");
            ɵɵtext(281, " The privacy and protection of data of DIKSHA\u2019s Users is of utmost importance and shall be ensured at all times. This Privacy Policy shall cover details of data protection and management on DIKSHA, including how personal data of users of DIKSHA is managed, used and processed. Users are individuals who access and use DIKSHA and broadly comprise (i) users who access and use DIKSHA without registering themselves on DIKSHA (\"");
            ɵɵelementStart(282, "strong");
            ɵɵtext(283, "Users");
            ɵɵelementEnd();
            ɵɵtext(284, "\"), (ii) users who access and use DIKSHA after registering themselves on DIKSHA (\"");
            ɵɵelementStart(285, "strong");
            ɵɵtext(286, "Registered Users");
            ɵɵelementEnd();
            ɵɵtext(287, "\"), (iii) users who are registered on DIKSHA and are authorised to be administrators on behalf of Institutional Users (such as NCERT, State Education Departments etc.) (\"");
            ɵɵelementStart(288, "strong");
            ɵɵtext(289, "Administrators");
            ɵɵelementEnd();
            ɵɵtext(290, "\"). Institutional Users operate as tenants on DIKSHA. More details on the rights and responsibilities of Users and Registered Users are set out in the ");
            ɵɵelementStart(291, "a", 23);
            ɵɵelementStart(292, "b");
            ɵɵtext(293, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(294, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(295, "p");
            ɵɵtext(296, " By accessing and using DIKSHA, and by providing your information on DIKSHA, you consent to the collection and use of the information you disclose on DIKSHA by DIKSHA and relevant Administrators of DIKSHA in accordance with the policies and guidelines of DIKSHA as applicable from time to time, including the ");
            ɵɵelementStart(297, "a", 23);
            ɵɵelementStart(298, "b");
            ɵɵtext(299, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(300, " and this ");
            ɵɵelementStart(301, "a", 24);
            ɵɵelementStart(302, "b");
            ɵɵtext(303, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(304, ". If you do not agree with the contents of this policy, please do not access or use DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(305, "p");
            ɵɵtext(306, " This ");
            ɵɵelementStart(307, "a", 24);
            ɵɵelementStart(308, "b");
            ɵɵtext(309, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(310, " should be read in conjunction with the ");
            ɵɵelementStart(311, "strong");
            ɵɵtext(312, "Terms of Use");
            ɵɵelementEnd();
            ɵɵtext(313, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
            ɵɵelementStart(314, "a", 23);
            ɵɵelementStart(315, "b");
            ɵɵtext(316, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(317, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(318, "h4", 11);
            ɵɵtext(319, "Rights of Users:");
            ɵɵelementEnd();
            ɵɵelementStart(320, "ol", 12);
            ɵɵelementStart(321, "li");
            ɵɵtext(322, " Right to fair, transparent and lawful collection of your data and information on DIKSHA ");
            ɵɵelementEnd();
            ɵɵelementStart(323, "li");
            ɵɵtext(324, " Right to be informed about the ways in which your data and information that is collected on DIKSHA will be used ");
            ɵɵelementEnd();
            ɵɵelementStart(325, "li");
            ɵɵtext(326, " Right to receive all the information you need to provide informed consent before collection of your personally identifiable information or sensitive personal data or information on DIKSHA and sharing of the same with relevant Administrators ");
            ɵɵelementEnd();
            ɵɵelementStart(327, "li");
            ɵɵtext(328, "Right to revoke such consent");
            ɵɵelementEnd();
            ɵɵelementStart(329, "li");
            ɵɵtext(330, " Right to privacy and confidentiality regarding your personal data and information ");
            ɵɵelementEnd();
            ɵɵelementStart(331, "li");
            ɵɵtext(332, " Right to proper use of your personal data and information by Administrators for specified and legitimate purposes related to your use of DIKSHA ");
            ɵɵelementEnd();
            ɵɵelementStart(333, "li");
            ɵɵtext(334, " Right to keep your personal information accurate and up to date ");
            ɵɵelementEnd();
            ɵɵelementStart(335, "li");
            ɵɵtext(336, " Right to secure collection, handling and storage of your personal data and information ");
            ɵɵelementEnd();
            ɵɵelementStart(337, "li");
            ɵɵtext(338, " Right to protection from unauthorised or unlawful use of your personal data and information ");
            ɵɵelementEnd();
            ɵɵelementStart(339, "li");
            ɵɵtext(340, "Right to view and access DIKSHA\u2019s privacy policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(341, "h4", 11);
            ɵɵtext(342, "Responsibilities of Administrators with respect to User data and information");
            ɵɵelementEnd();
            ɵɵelementStart(343, "ol", 12);
            ɵɵelementStart(344, "li");
            ɵɵtext(345, "To respect the privacy and data protection rights of Users");
            ɵɵelementEnd();
            ɵɵelementStart(346, "li");
            ɵɵtext(347, " To ensure the security of and use of data (especially any personal information) shared by Registered Users is limited solely to the uses and purposes mentioned here ");
            ɵɵelementEnd();
            ɵɵelementStart(348, "li");
            ɵɵtext(349, " To know that any use of data for purposes outside of the proper use shall be considered violation of the terms of the policies of DIKSHA as well as applicable laws and policies of India and they shall be responsible and liable for such actions and for any loss or damage arising from failure to comply with this obligation ");
            ɵɵelementEnd();
            ɵɵelementStart(350, "li");
            ɵɵtext(351, " To ensure their communication (if any) with Registered Users is explicitly limited and relevant to the purpose of their usage of DIKSHA and meets the Appropriateness standards set out in the ");
            ɵɵelementStart(352, "a", 25);
            ɵɵelementStart(353, "b");
            ɵɵtext(354, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(355, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(356, "li");
            ɵɵtext(357, " To ensure that their Content and programs on DIKSHA are not used for any of the Prohibited Uses set out in the ");
            ɵɵelementStart(358, "a", 23);
            ɵɵelementStart(359, "b");
            ɵɵtext(360, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(361, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(362, "h4", 11);
            ɵɵtext(363, "What User data and information is collected on DIKSHA?");
            ɵɵelementEnd();
            ɵɵelementStart(364, "ol", 12);
            ɵɵelementStart(365, "li");
            ɵɵtext(366, " All ");
            ɵɵelementStart(367, "strong");
            ɵɵtext(368, "Users");
            ɵɵelementEnd();
            ɵɵtext(369, " can expect the following data and information of theirs to be collected on DIKSHA: ");
            ɵɵelementStart(370, "ol", 14);
            ɵɵelementStart(371, "li");
            ɵɵelementStart(372, "strong");
            ɵɵtext(373, "Basic Information");
            ɵɵelementEnd();
            ɵɵtext(374, ": User Type (eg. teacher, student, other) ");
            ɵɵelementEnd();
            ɵɵelementStart(375, "li");
            ɵɵelementStart(376, "strong");
            ɵɵtext(377, "Geographical Information");
            ɵɵelementEnd();
            ɵɵtext(378, ": State and District ");
            ɵɵelementEnd();
            ɵɵelementStart(379, "li");
            ɵɵelementStart(380, "strong");
            ɵɵtext(381, "Preferences: ");
            ɵɵelementEnd();
            ɵɵtext(382, "Board of interest, Medium of instruction, Classes of interest, Subjects of interest ");
            ɵɵelementEnd();
            ɵɵelementStart(383, "li");
            ɵɵelementStart(384, "strong");
            ɵɵtext(385, "DIKSHA Usage: ");
            ɵɵelementEnd();
            ɵɵtext(386, "Usage history, time spent on Content, Content created/ contributed / published and its usage, progress in trackable collections of Content (eg. courses), scores & assessment results, question-wise answers and other telemetry data in relation to usage of DIKSHA, badges generated, certificates issued. ");
            ɵɵelementEnd();
            ɵɵelementStart(387, "li");
            ɵɵelementStart(388, "strong");
            ɵɵtext(389, "IP Address");
            ɵɵelementEnd();
            ɵɵtext(390, ": The IP address of a User is collected once for the limited purpose of determining your approximate location - the State, City and District of origin. The IP address is not stored in the database of Registered Users and the precise location of any User cannot be determined. The User can confirm or modify the State and District details determined on the basis of the IP address. ");
            ɵɵelementEnd();
            ɵɵelementStart(391, "li");
            ɵɵtext(392, " DIKSHA uses hash digest functions and fingerprinting to create unique identifiers for different devices. DIKSHA also uses FCM tokens to enable push notifications to your devices, should you choose to opt for the same. ");
            ɵɵelementEnd();
            ɵɵelementStart(393, "li");
            ɵɵtext(394, " DIKSHA also generates a unique identifier for each device used to access DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(395, "li");
            ɵɵtext(396, " In case of ");
            ɵɵelementStart(397, "strong");
            ɵɵtext(398, "Registered Users");
            ɵɵelementEnd();
            ɵɵtext(399, ", they can expect the following additional information of theirs to be collected on DIKSHA: ");
            ɵɵelementStart(400, "ol", 14);
            ɵɵelementStart(401, "li");
            ɵɵtext(402, "Name");
            ɵɵelementEnd();
            ɵɵelementStart(403, "li");
            ɵɵtext(404, "Email Address / Mobile number, and");
            ɵɵelementEnd();
            ɵɵelementStart(405, "li");
            ɵɵtext(406, "DIKSHA Password");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(407, "li");
            ɵɵelementStart(408, "strong");
            ɵɵtext(409, "Registered Users ");
            ɵɵelementEnd();
            ɵɵtext(410, "have an option to provide the following information of theirs (\"");
            ɵɵelementStart(411, "strong");
            ɵɵtext(412, "Declared Information");
            ɵɵelementEnd();
            ɵɵtext(413, "\"), namely: ");
            ɵɵelementStart(414, "ol", 14);
            ɵɵelementStart(415, "li");
            ɵɵtext(416, "Both Email Address and Mobile Number,");
            ɵɵelementEnd();
            ɵɵelementStart(417, "li");
            ɵɵtext(418, "Block,");
            ɵɵelementEnd();
            ɵɵelementStart(419, "li");
            ɵɵtext(420, "School or Organisation name,");
            ɵɵelementEnd();
            ɵɵelementStart(421, "li");
            ɵɵtext(422, "School U-DISE code or Organisation code / number,");
            ɵɵelementEnd();
            ɵɵelementStart(423, "li");
            ɵɵtext(424, "ID as provided by your state/board/organisation.");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(425, "li");
            ɵɵtext(426, " No other personally identifiable information or sensitive personal data or information of the User is collected. ");
            ɵɵelementEnd();
            ɵɵelementStart(427, "li");
            ɵɵtext(428, " All ");
            ɵɵelementStart(429, "strong");
            ɵɵtext(430, "Users ");
            ɵɵelementEnd();
            ɵɵtext(431, "(using the DIKSHA mobile app to access DIKSHA) have a profile which specifies the User type, Geographical Information and Preferences. They may choose to customise their profile by changing these details at any time as well as providing their name. If Users are using DIKSHA as a guest User, i.e. without registering on DIKSHA, your User type and Preferences are stored locally on your device. Only Registered Users can view their profile on both the DIKSHA mobile app as well as the DIKSHA web portal, and their profiles specify all the additional information provided by such a Registered User. ");
            ɵɵelementEnd();
            ɵɵelementStart(432, "li");
            ɵɵelementStart(433, "strong");
            ɵɵtext(434, "Children as Registered Users");
            ɵɵelementEnd();
            ɵɵtext(435, ": DIKSHA collects the \u2018year of birth\u2019 of a User in order to determine whether a User is below 18 years. In the event a person under 18 years of age is registering on DIKSHA, DIKSHA prompts the User to provide the email address or mobile number of a parent / guardian for the purposes of registration. Children under 18 years of age are neither required to nor encouraged to provide their personal information. ");
            ɵɵelementEnd();
            ɵɵelementStart(436, "li");
            ɵɵtext(437, " You represent to us that the data and information you provide on DIKSHA from time to time is and shall be correct, current and updated and you have all the rights, permissions and consents to provide such data and information. Your providing the information or data and the consequent storage, collection, usage, transfer, access or processing of the same in accordance with the ");
            ɵɵelementStart(438, "a", 23);
            ɵɵelementStart(439, "b");
            ɵɵtext(440, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(441, " and this ");
            ɵɵelementStart(442, "a", 24);
            ɵɵelementStart(443, "b");
            ɵɵtext(444, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(445, " shall not be in violation of any third party agreement, laws, charter documents, judgments, orders and decrees. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(446, "h4", 11);
            ɵɵtext(447, " How is User data and information collected?");
            ɵɵelementEnd();
            ɵɵelementStart(448, "ol", 12);
            ɵɵelementStart(449, "li");
            ɵɵtext(450, " Basic Information, Geographical Information and Preferences are collected when a User accesses and uses DIKSHA for the first time. These details can be updated by the User from their profile. ");
            ɵɵelementEnd();
            ɵɵelementStart(451, "li");
            ɵɵtext(452, " Usage data of Users is collected as and when a User accesses, uses and navigates DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(453, "li");
            ɵɵtext(454, " The additional information provided by Registered Users, namely, (i) Name (ii) Email Address / Mobile Number (iii) Password, is collected when a User creates a registered account on DIKSHA and becomes a Registered User or when a Registered User updates their profile. ");
            ɵɵelementEnd();
            ɵɵelementStart(455, "li");
            ɵɵtext(456, " Declared Information of Registered Users is collected with their explicit consent when they choose to provide the same on DIKSHA, through their profile or otherwise. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(457, "h4", 11);
            ɵɵtext(458, "Who has access to User data and information?");
            ɵɵelementEnd();
            ɵɵelementStart(459, "ol", 12);
            ɵɵelementStart(460, "li");
            ɵɵtext(461, " DIKSHA Usage data (including Usage across the States and Districts) is a part of anonymised and aggregated data sets that is accessible to relevant Administrators of DIKSHA and to the employees, contractors or subcontractors of the technology service providers of DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(462, "li");
            ɵɵtext(463, " If you are a User, your Basic Information, Geographical Information, Preferences, and Usage data is accessible to the employees, contractors or subcontractors of the technology service providers of DIKSHA (under strict confidentiality obligations) if they need to access the data to process it on behalf of DIKSHA or an Administrator or to provide the services available on DIKSHA. For Registered Users, your Name is also accessible in this manner. ");
            ɵɵelementEnd();
            ɵɵelementStart(464, "li");
            ɵɵtext(465, " Registered Users also have an option to explicitly consent to give relevant Administrators access to their Name, Basic Information, Preferences, Usage data, and Declared Information for specified purposes such as implementation of programs on DIKSHA like courses. Note that Institutional Users are required to ensure that their respective Administrators comply with and Administrators are responsible to comply with the relevant policies and guidelines of DIKSHA as applicable from time to time, including the ");
            ɵɵelementStart(466, "a", 23);
            ɵɵelementStart(467, "b");
            ɵɵtext(468, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(469, " and this ");
            ɵɵelementStart(470, "a", 24);
            ɵɵelementStart(471, "b");
            ɵɵtext(472, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(473, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(474, "li");
            ɵɵtext(475, " Usage data which is anonymised and aggregated by State and District is also available publicly on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(476, "li");
            ɵɵtext(477, " In order to provide and improve DIKSHA, a limited number of third-party services require access to some of your personal data and information, eg. FreshDesk, Google PlayStore. Third party services are contractually prohibited from using your information except to provide the service. ");
            ɵɵelementEnd();
            ɵɵelementStart(478, "li");
            ɵɵtext(479, " Your data and information is only accessible outside of the DIKSHA platform when it is necessary to offer the service, comply with law, or with your permission. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(480, "h4", 11);
            ɵɵtext(481, "What is User data and information used for? ");
            ɵɵelementEnd();
            ɵɵelementStart(482, "ol", 12);
            ɵɵelementStart(483, "li");
            ɵɵtext(484, " DIKSHA processes your data and information when necessary for providing access to Content for educational purposes and running programs on DIKSHA. These purposes are legitimate. The uses of your data are set out below: ");
            ɵɵelementStart(485, "ol", 17);
            ɵɵelementStart(486, "li");
            ɵɵtext(487, " To create a profile for you to have a customised experience on DIKSHA, ");
            ɵɵelementEnd();
            ɵɵelementStart(488, "li");
            ɵɵtext(489, " To suggest relevant Content for you to conveniently discover Content based on your preferences, activities on DIKSHA, and Content you are viewing on DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(490, "li");
            ɵɵtext(491, "To enable you to access and use Content on DIKSHA;");
            ɵɵelementEnd();
            ɵɵelementStart(492, "li");
            ɵɵtext(493, " To enable you to participate in programs run by Institutional Users on DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(494, "li");
            ɵɵtext(495, " To provide you push notifications on your hand-held devices, only if you have provided permission for the same during app installation; ");
            ɵɵelementEnd();
            ɵɵelementStart(496, "li");
            ɵɵtext(497, " To track your progress in collections of Content for which progress is tracked / recorded such as courses, TV collections, textbooks; ");
            ɵɵelementEnd();
            ɵɵelementStart(498, "li");
            ɵɵtext(499, " To generate badges for or issue certificates to you upon completion of milestones; ");
            ɵɵelementEnd();
            ɵɵelementStart(500, "li");
            ɵɵtext(501, " To maintain records of your progress and certificates/badges in relation to collections of Content you have accessed and used; ");
            ɵɵelementEnd();
            ɵɵelementStart(502, "li");
            ɵɵtext(503, " To measure interest in the offerings on DIKSHA and to improve DIKSHA over time; ");
            ɵɵelementEnd();
            ɵɵelementStart(504, "li");
            ɵɵtext(505, " To track and analyse usage of Content on DIKSHA by Administrators and Content providers to improve DIKSHA and its offerings over time; ");
            ɵɵelementEnd();
            ɵɵelementStart(506, "li");
            ɵɵtext(507, " To assess, evaluate, validate Content submitted / posted / uploaded by Registered Users; ");
            ɵɵelementEnd();
            ɵɵelementStart(508, "li");
            ɵɵtext(509, " To report anonymised usage of DIKSHA and its Content by Administrators to improve DIKSHA over time; ");
            ɵɵelementEnd();
            ɵɵelementStart(510, "li");
            ɵɵtext(511, " To contact you and deliver information, administrative notices, seek feedback or other communications in connection with your usage of DIKSHA. By accepting the ");
            ɵɵelementStart(512, "a", 23);
            ɵɵelementStart(513, "b");
            ɵɵtext(514, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(515, " including the Privacy Policy, you expressly agree to receive this information; ");
            ɵɵelementEnd();
            ɵɵelementStart(516, "li");
            ɵɵtext(517, " To suggest details for your profile such as your declared State and District; ");
            ɵɵelementEnd();
            ɵɵelementStart(518, "li");
            ɵɵtext(519, " To resolve disputes, troubleshoot problems, detect and protect you against fraud and other criminal activity, enforce the Terms of Use and any other agreements; ");
            ɵɵelementEnd();
            ɵɵelementStart(520, "li");
            ɵɵtext(521, " At times multiple users may be looked at to identify problems or resolve disputes, and in particular may examine your information or data to identify users using multiple User IDs or aliases. Your information or data may be compared or reviewed for errors, omissions and for accuracy; and ");
            ɵɵelementEnd();
            ɵɵelementStart(522, "li");
            ɵɵtext(523, " For any other use that may be described to you at the time of collection. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(524, "li");
            ɵɵtext(525, " The administrators and technology support providers of DIKSHA may use third parties as service providers to facilitate or outsource one or more aspects of service operations that are provided on DIKSHA (e.g., search technology, discussion boards, technical service providers, affiliate) and therefore some of your information or data may be provided directly to these service providers. These service providers are subject to confidentiality and other legal restrictions that prohibit their use of the information provided to them for any purpose other than to facilitate specific website related operations. ");
            ɵɵelementEnd();
            ɵɵelementStart(526, "li");
            ɵɵtext(527, " If we wish to use your data and information for a new purpose, not covered by this Privacy Policy, then we will provide you with a new notice explaining this new use prior to commencing the processing and setting out the relevant purposes and processing conditions. Where and whenever necessary, we will seek your prior consent to the new processing, unless authorized by law. ");
            ɵɵelementEnd();
            ɵɵelementStart(528, "li");
            ɵɵtext(529, " In any event, your data will not be used for any of the following purposes: ");
            ɵɵelementStart(530, "ol", 17);
            ɵɵelementStart(531, "li");
            ɵɵtext(532, "Rent or sale or other commercial purposes;");
            ɵɵelementEnd();
            ɵɵelementStart(533, "li");
            ɵɵtext(534, "Advertising or marketing;");
            ɵɵelementEnd();
            ɵɵelementStart(535, "li");
            ɵɵtext(536, " Phone calls or other forms of unsolicited communication that is not related to your usage of DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(537, "li");
            ɵɵtext(538, " Building a personal profile, other than for educational purposes on DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(539, "li");
            ɵɵtext(540, " Any of the Prohibited Purposes set out in the ");
            ɵɵelementStart(541, "a", 23);
            ɵɵelementStart(542, "b");
            ɵɵtext(543, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(544, "; and ");
            ɵɵelementEnd();
            ɵɵelementStart(545, "li");
            ɵɵtext(546, " Any purpose that is not disclosed in this policy or on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(547, "li");
            ɵɵtext(548, " Administrators are responsible for any use of data and information outside the proper use and shall be held accountable for the violation of the terms and policies of DIKSHA, as well as applicable laws and policies of India for any misuse. Administrators shall be liable for such actions and for any loss or damage arising from failure to comply with the obligation of proper use of your data and information. Should you believe that your data or information is being used in a manner inconsistent with this Privacy Policy, please contact the DIKSHA support team with the details of your concern by sending an email to ");
            ɵɵelementStart(549, "a", 19);
            ɵɵelementStart(550, "b");
            ɵɵtext(551, "support@teamdiksha.org");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(552, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(553, "li");
            ɵɵtext(554, " As a User, you understand, agree and acknowledge that the collection, storage and processing of your information or data on DIKSHA is for a lawful purpose connected with a function or activity of DIKSHA. You further understand, agree and acknowledge that your information or data which is classified as personal information as per applicable laws is considered necessary for us to provide various services on and in relation to DIKSHA to you and for your usage of DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(555, "h4", 11);
            ɵɵtext(556, "How is User data and information stored?");
            ɵɵelementEnd();
            ɵɵelementStart(557, "ol", 12);
            ɵɵelementStart(558, "li");
            ɵɵtext(559, " Reasonable and appropriate security practices and procedures are being adopted to secure your personal data and information in accordance with Indian laws currently in force, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. These measures include administrative, physical security, and technical controls in order to safeguard your personal data and information. ");
            ɵɵelementEnd();
            ɵɵelementStart(560, "li");
            ɵɵtext(561, " Your data, including your Declared Information, any personally identifiable information or sensitive personal data or information is securely stored using Microsoft Azure cloud services which have it\u2019s servers in India. Your data and information will primarily be stored in electronic form however certain data may also be stored in physical form. ");
            ɵɵelementEnd();
            ɵɵelementStart(562, "li");
            ɵɵtext(563, " Third party service providers are engaged to store and process your data. These service providers are contractually bound to follow reasonable security standards to safeguard your data. ");
            ɵɵelementEnd();
            ɵɵelementStart(564, "li");
            ɵɵtext(565, " Your email address and mobile number and any other personally identifiable information is only collected should you choose to provide the same and it is encrypted and stored securely. Personally identifiable information is only shared with Administrators for purposes specified to you, with your explicit consent and under the obligation that the Administrators will use such information only in connection with your usage of DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(566, "li");
            ɵɵtext(567, " Your IP address is only collected once for the limited purpose of ascertaining and suggesting your State and District. Your IP address is not stored on DIKSHA at any time. ");
            ɵɵelementEnd();
            ɵɵelementStart(568, "li");
            ɵɵtext(569, " Additionally, a variety of methods such as network and infrastructure security, encryption and manual security procedures are used to secure your information and data against loss or damage and to help protect the accuracy and security of your personal information / general information / usage data and to prevent unauthorized access or improper use. If you think that DIKSHA or any your personal information / general information / usage data is not secure or that there has been unauthorized access to the website or your personal data, please contact ");
            ɵɵelementStart(570, "a", 19);
            ɵɵelementStart(571, "b");
            ɵɵtext(572, "support@teamdiksha.org");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(573, " immediately. ");
            ɵɵelementEnd();
            ɵɵelementStart(574, "li");
            ɵɵtext(575, " Although DIKSHA strives to protect your personal information and data, it cannot guarantee the security of your data while it is being transmitted to its site; any transmission is at your own risk. Once your information has been received, reasonable procedures and security features are in place to reasonably endeavor to prevent unauthorized access in accordance with Indian law. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(576, "h4", 11);
            ɵɵtext(577, "How long is User data and information stored?");
            ɵɵelementEnd();
            ɵɵelementStart(578, "ol", 12);
            ɵɵelementStart(579, "li");
            ɵɵtext(580, " Your data will not be retained for a period more than necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law or for directly related legitimate purposes. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(581, "h4", 11);
            ɵɵtext(582, "What are the system permissions required by the DIKSHA?");
            ɵɵelementEnd();
            ɵɵelementStart(583, "ol", 12);
            ɵɵelementStart(584, "li");
            ɵɵtext(585, " Microphone - Your system Microphone will be used if voice recording is explicitly requested as part of a Content for the purposes of practice. This voice recording is only stored locally on your system. Your system Microphone will be used if a Registered User creating Content wants to add a voice recording to Content. This voice recording will become part of the Content. ");
            ɵɵelementEnd();
            ɵɵelementStart(586, "li");
            ɵɵtext(587, " Camera - Your system Camera will only be used if you want to scan QR codes to access Content on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(588, "li");
            ɵɵtext(589, " Access to file manager - This is used by the DIKSHA android application to transfer Content to an external storage space. Additionally, on the DIKSHA desktop app, this is used to transfer Content to and from an external storage device like a pendrive or SD card. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(590, "h4", 11);
            ɵɵtext(591, "Cookies: How are they used? What types of cookies are used? How to manage your cookies?");
            ɵɵelementEnd();
            ɵɵelementStart(592, "ol", 12);
            ɵɵelementStart(593, "li");
            ɵɵtext(594, " Out of all the consumption clients, only the DIKSHA web portal uses cookies. DIKSHA only uses session cookies, none of the other types of cookies. DIKSHA session cookies are used to store URLs in order to better redirect users to the right pages. For example, when a User signs-in to DIKSHA from the courses page, they'll need to be redirected back to the courses page at the end of sign-in for a cleaner user experience. Session cookies are also used to store whether to use the Content Delivery Network (CDN) to pull images, plugins and other assets that are shown on the user interface. This is to enable faster loading of the pages the User interacts with. No personal information, or user preferences are stored in cookies. ");
            ɵɵelementEnd();
            ɵɵelementStart(595, "li");
            ɵɵtext(596, " Users can clear their cookies by going to their browser settings and clearing their browsing data (by specifically checking off the option to clear cookies). Doing so, does not impact their user experience on DIKSHA as usage of DIKSHA sets the cookies again. Users can also choose to block cookies from the settings as well. Doing so, will mean that certain things on DIKSHA will not function properly. For eg., images/plugins may take a long time to load and the user will not be taken to the right pages after login. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(597, "h4", 11);
            ɵɵtext(598, "Data and information DIKSHA is not responsible for");
            ɵɵelementEnd();
            ɵɵelementStart(599, "ol", 12);
            ɵɵelementStart(600, "li");
            ɵɵtext(601, " DIKSHA may have Content, webpages, cookies, files, software, data or other information or communication links that are originated, created or posted by third parties that may have the capability to collect, store or use your data or information. The administrators and technology support providers of DIKSHA are not responsible for such data or information collected, stored or used by third parties even if such third parties use DIKSHA to collect, store or use such data or information. ");
            ɵɵelementEnd();
            ɵɵelementStart(602, "li");
            ɵɵtext(603, " If you access DIKSHA through a third party QR code scanner or through a web browser, the administrators and technology support providers of DIKSHA are not responsible for the data or information collected by such third parties. ");
            ɵɵelementEnd();
            ɵɵelementStart(604, "li");
            ɵɵtext(605, " DIKSHA is not responsible for the privacy practices of other websites and users need to be aware of the data privacy practices of such sites should they choose to use these links. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(606, "h4", 11);
            ɵɵtext(607, "Compliance with laws and law enforcement");
            ɵɵelementEnd();
            ɵɵelementStart(608, "ol", 12);
            ɵɵelementStart(609, "li");
            ɵɵtext(610, " The administrators and technology support providers of DIKSHA cooperate with governments and law enforcement agencies or any third party by any order under law for the time being in force to enforce and comply with the law. Any information about you will be disclosed to the government or law enforcement officials or private parties as, in the sole discretion of the administrators and technology support providers, if they believe necessary or appropriate to respond to claims and legal process, to protect their property and rights or a third party, to protect the safety of the public or any person, or to prevent or stop any illegal, unethical or legally actionable activity. ");
            ɵɵelementEnd();
            ɵɵelementStart(611, "li");
            ɵɵtext(612, " Your information or data may also be provided to various tax authorities upon any demand or request from them. You acknowledge that DIKSHA can be accessed from anywhere in the world and it will have users from all over the world and therefore governments, judiciaries or law enforcement authorities in various parts of the world may have or assume jurisdiction over DIKSHA and DIKSHA may be subject to the laws, rules, regulations and judgments of various countries, states, municipalities or provinces where it may not have a direct presence to store, process, collect, use or keep your information or data. You acknowledge that government or law enforcement authorities in the countries where your data or information is stored may have the right to decrypt, collect, monitor or access your data or information, which actions are completely out of the control of the administrators and technology support providers of DIKSHA. The administrators and technology support providers of DIKSHA do not take any responsibility for such actions. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(613, "h4", 11);
            ɵɵtext(614, "Deleting your information");
            ɵɵelementEnd();
            ɵɵelementStart(615, "ol", 12);
            ɵɵelementStart(616, "li");
            ɵɵtext(617, " If you wish to have the information or data that you have provided deleted, you can always do so by sending an email request to ");
            ɵɵelementStart(618, "a", 19);
            ɵɵelementStart(619, "b");
            ɵɵtext(620, "support@teamdiksha.org");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(621, ". You may note that deletion of certain information or data may lead to cancellation of your registration with DIKSHA and your access to certain features of DIKSHA. You also agree and acknowledge that certain data or information cannot be deleted or may be prohibited to be deleted as required under any applicable law, law enforcement requests or under any judicial proceedings. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(622, "h4", 11);
            ɵɵtext(623, "Changes to this Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementStart(624, "ol", 12);
            ɵɵelementStart(625, "li");
            ɵɵtext(626, " DIKSHA reserves the right to modify this privacy statement at any time, so please review it frequently. If a material change is made to the practices regarding your personally identifiable information, you will be notified, by means of a notice on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(627, "h4", 11);
            ɵɵtext(628, "How to contact us?");
            ɵɵelementEnd();
            ɵɵelementStart(629, "ol", 12);
            ɵɵelementStart(630, "li");
            ɵɵtext(631, " If you have any queries, comments, or requests, please contact us by sending an email to ");
            ɵɵelementStart(632, "a", 19);
            ɵɵelementStart(633, "b");
            ɵɵtext(634, "support@teamdiksha.org");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(635, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(636, "div", 26);
            ɵɵelementStart(637, "div", 27);
            ɵɵelementStart(638, "h4");
            ɵɵelementStart(639, "strong");
            ɵɵtext(640, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(641, "label", 10);
            ɵɵelementStart(642, "em");
            ɵɵtext(643, "( Last updated on ");
            ɵɵelementStart(644, "b");
            ɵɵtext(645, "28-04-2021");
            ɵɵelementEnd();
            ɵɵtext(646, " )");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(647, "p");
            ɵɵtext(648, " This Content Policy sets out the guidelines for content to be followed on DIKSHA. The DIKSHA Strategy and Approach Paper clearly articulates one of the intentions of DIKSHA - to create a common repository of open education resources for easy access to teachers across the country. This Content Policy sets out the principles and process to achieve this end. ");
            ɵɵelementEnd();
            ɵɵelementStart(649, "p");
            ɵɵtext(650, " The content creation and curation process on DIKSHA is envisaged to be an open process with low barriers to entry. It celebrates and encourages participation by making it simple to create and share content on the platform. It avoids creating barriers to entry in the form of centralized review workflows and federates that process to the community to police itself. Institutional Users, through their Administrators, being the custodians of DIKSHA, frame the guidelines and curation rules, and delegate the authority to curate to the community. This creates a platform that is open, has low barrier to entry, while the quality of content is ensured by the federated process. ");
            ɵɵelementEnd();
            ɵɵelementStart(651, "p");
            ɵɵtext(652, " Set out below are some common-sense rules that all Users must comply with respect to Content on DIKSHA. These rules are to be taken seriously as Administrators are required to enforce the same strictly. Users are requested not to look for loopholes or ways around these guidelines and respect the spirit in which they have been created. ");
            ɵɵelementEnd();
            ɵɵelementStart(653, "p");
            ɵɵtext(654, " Please read this Content Policy carefully, to learn more about the rules on appropriateness, accuracy, intellectual property rights and licensing that govern Content on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(655, "p");
            ɵɵtext(656, " This Content Policy should be read in conjunction and together with the ");
            ɵɵelementStart(657, "a", 23);
            ɵɵelementStart(658, "b");
            ɵɵtext(659, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(660, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
            ɵɵelementStart(661, "a", 23);
            ɵɵelementStart(662, "b");
            ɵɵtext(663, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(664, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(665, "h4", 11);
            ɵɵtext(666, "Principles for Content on DIKSHA");
            ɵɵelementEnd();
            ɵɵelementStart(667, "ol", 12);
            ɵɵelementStart(668, "li");
            ɵɵtext(669, " Content on the DIKSHA will be contributed by various content contributors across the country. The intent is to enable access to a wide range and diverse content from across the country so as to enable better contextualisation of content and wide access for end users. ");
            ɵɵelementEnd();
            ɵɵelementStart(670, "li");
            ɵɵtext(671, " All content published on DIKSHA belongs to the creators of content be it individuals or organisations that have made content available on the platform, they are responsible for use by open learning platforms and applications therefore, content creators are responsibles for ensuring accuracy and appropriateness of content. ");
            ɵɵelementEnd();
            ɵɵelementStart(672, "li");
            ɵɵtext(673, " Users can make multilingual and diverse content available on DIKSHA ranging from courses for in-service and pre-service teachers to classroom resources to tools for assessment and evaluation both of teachers and learners. ");
            ɵɵelementEnd();
            ɵɵelementStart(674, "li");
            ɵɵtext(675, " Content on DIKSHA means and includes, (i) content that is written, uploaded, submitted, stored, sent, received or shared using DIKSHA, teaching and learning content in the context of school education, courses, lesson plans, worksheets, supplemental materials for classroom and other such learning materials meant for wide user consumption, and (iii) other types of Content described in the ");
            ɵɵelementStart(676, "a", 23);
            ɵɵelementStart(677, "b");
            ɵɵtext(678, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(679, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(680, "li");
            ɵɵtext(681, " Registered Users are solely responsible for the accuracy, appropriateness and violations of any privacy rights, third party rights including intellectual property rights with regards to their Content. ");
            ɵɵelementEnd();
            ɵɵelementStart(682, "li");
            ɵɵtext(683, " Different types of Content are submitted/ posted/ uploaded / published on DIKSHA following different processes and workflows based on the purpose of the Content. Certain Content, such as posts, comments, feedback, submissions, responses, explanations in forums/groups or using project/ survey/ observation tools etc., are directly submitted/ posted/ uploaded. Certain Content contributed by Registered Users that is meant for wider user consumption is published by Institutional Users after following a review process described below. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(684, "h4", 11);
            ɵɵtext(685, "Content Contribution");
            ɵɵelementEnd();
            ɵɵelementStart(686, "p");
            ɵɵtext(687, "Content that is published on DIKSHA for wider user consumption can only be created by Registered Users who are authorised by an Institutional User to have read, write and edit rights to create Content. This authorisation may happen at central level or state level. Each Institutional User has their own guidelines for such authorisation. Registered Users who create Content are responsible for creating and contributing Content that complies with this ");
            ɵɵelementStart(688, "a", 25);
            ɵɵelementStart(689, "b");
            ɵɵtext(690, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(691, ", the ");
            ɵɵelementStart(692, "a", 23);
            ɵɵelementStart(693, "b");
            ɵɵtext(694, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(695, " and ");
            ɵɵelementStart(696, "a", 24);
            ɵɵelementStart(697, "b");
            ɵɵtext(698, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(699, ", and any other policies and guidelines prescribed from time to time. Registered Users shall have exercised reasonable diligence to satisfy themselves that their Content is ready for public consumption prior to being submitted for review and use on DIKSHA.");
            ɵɵelementEnd();
            ɵɵelementStart(700, "h4", 11);
            ɵɵtext(701, "Content Review & Publishing ");
            ɵɵelementEnd();
            ɵɵelementStart(702, "p");
            ɵɵtext(703, "All Content published on DIKSHA for wider user consumption is curated, reviewed and published by Registered Users who are authorised by an Institutional to have read, write and edit rights to curate, review or publish Content. This authorisation may happen at central level or state level. Each Institutional User has their own guidelines for such authorisation. Registered Users who curate, review or publish Content shall ensure that the Content they accept complies with this Content Policy, the ");
            ɵɵelementStart(704, "a", 23);
            ɵɵelementStart(705, "b");
            ɵɵtext(706, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(707, " and ");
            ɵɵelementStart(708, "a", 24);
            ɵɵelementStart(709, "b");
            ɵɵtext(710, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(711, ", and any other policies and guidelines prescribed from time to time. ");
            ɵɵelementEnd();
            ɵɵelementStart(712, "h4", 11);
            ɵɵtext(713, "Accuracy and Appropriateness ");
            ɵɵelementEnd();
            ɵɵtext(714, "- Registered Users must ensure that all the Content they have created, contributed, reviewed or published is appropriate and accurate and meets their pedagogical and usability requirements as prescribed by Institutional Users. Content identified as inappropriate or inaccurate, as per this Content Policy, will not be published and can be unilaterally removed from DIKSHA. ");
            ɵɵelementStart(715, "ol", 12);
            ɵɵelementStart(716, "li");
            ɵɵelementStart(717, "strong");
            ɵɵtext(718, "Accurate Content");
            ɵɵelementEnd();
            ɵɵtext(719, " - All Content must: ");
            ɵɵelementStart(720, "ol", 14);
            ɵɵelementStart(721, "li");
            ɵɵtext(722, "Be factually correct,");
            ɵɵelementEnd();
            ɵɵelementStart(723, "li");
            ɵɵtext(724, " Use language in text, audio, video and interactive materials that is simple and easy to understand, and ");
            ɵɵelementEnd();
            ɵɵelementStart(725, "li");
            ɵɵtext(726, " Be contextual and relevant to the needs of the intended User. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(727, "li");
            ɵɵelementStart(728, "strong");
            ɵɵtext(729, "Inappropriate Content");
            ɵɵelementEnd();
            ɵɵtext(730, " includes, but is not limited to: ");
            ɵɵelementStart(731, "ol", 14);
            ɵɵelementStart(732, "li");
            ɵɵtext(733, " Hate Speech - by words either written or spoken or by signs or by visible representation or otherwise promotes or attempts to promote feelings of enmity, hatred or ill-will against persons of a: ");
            ɵɵelementStart(734, "ul", 17);
            ɵɵelementStart(735, "li");
            ɵɵtext(736, "Caste");
            ɵɵelementEnd();
            ɵɵelementStart(737, "li");
            ɵɵtext(738, "Class");
            ɵɵelementEnd();
            ɵɵelementStart(739, "li");
            ɵɵtext(740, "Tribe");
            ɵɵelementEnd();
            ɵɵelementStart(741, "li");
            ɵɵtext(742, "Race");
            ɵɵelementEnd();
            ɵɵelementStart(743, "li");
            ɵɵtext(744, "Ethnicity");
            ɵɵelementEnd();
            ɵɵelementStart(745, "li");
            ɵɵtext(746, "Sex, gender, or gender identity");
            ɵɵelementEnd();
            ɵɵelementStart(747, "li");
            ɵɵtext(748, "National origin");
            ɵɵelementEnd();
            ɵɵelementStart(749, "li");
            ɵɵtext(750, "Religious affiliation");
            ɵɵelementEnd();
            ɵɵelementStart(751, "li");
            ɵɵtext(752, "Sexual orientation, or");
            ɵɵelementEnd();
            ɵɵelementStart(753, "li");
            ɵɵtext(754, "Disabilities or diseases");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(755, "li");
            ɵɵtext(756, " Sexually explicit content ");
            ɵɵelementStart(757, "ul", 17);
            ɵɵelementStart(758, "li");
            ɵɵtext(759, "Pornography");
            ɵɵelementEnd();
            ɵɵelementStart(760, "li");
            ɵɵtext(761, " Explicit text/images/illustrations/sounds of sexual content ");
            ɵɵelementEnd();
            ɵɵelementStart(762, "li");
            ɵɵtext(763, "Descriptions of sexual acts");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(764, "li");
            ɵɵtext(765, " Depiction of sexual violence and exploitation ");
            ɵɵelementStart(766, "ul", 17);
            ɵɵelementStart(767, "li");
            ɵɵtext(768, " Includes sexual exploitation of minors, and sexual assault. ");
            ɵɵelementEnd();
            ɵɵelementStart(769, "li");
            ɵɵtext(770, " Photographs/ Illustrations/videos depicting incidents of sexual violence ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(771, "li");
            ɵɵtext(772, " Depiction of nudity ");
            ɵɵelementStart(773, "ul", 17);
            ɵɵelementStart(774, "li");
            ɵɵtext(775, " Nudity would mean displaying genitals, breasts or buttocks (clothed or unclothed) for the purpose of sexual gratification. ");
            ɵɵelementEnd();
            ɵɵelementStart(776, "li");
            ɵɵtext(777, " Other than the depiction of body parts which isn\u2019t gratuitously graphic and is educational, documentary, scientific, or artistic - paintings, sculptures, and other art that depicts nude figures, which is posted for educational purposes. Providing context will help users determine the purpose of the content/asset. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(778, "li");
            ɵɵtext(779, " Content that promotes violence, including ");
            ɵɵelementStart(780, "ul", 17);
            ɵɵelementStart(781, "li");
            ɵɵtext(782, " Promoting, encouraging, supporting, praising, or condoning violent actions, activities and behaviour - verbal, physical or emotional. ");
            ɵɵelementEnd();
            ɵɵelementStart(783, "li");
            ɵɵtext(784, " Threatening or inciting others to commit acts of violence ");
            ɵɵelementEnd();
            ɵɵelementStart(785, "li");
            ɵɵtext(786, " Expressing support or praise for groups, people that are involved in violent or criminal behaviour ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(787, "li");
            ɵɵtext(788, " Content that promotes/depicts/reflects discrimination and bullying or encouraging such behaviour, including: ");
            ɵɵelementStart(789, "ul", 17);
            ɵɵelementStart(790, "li");
            ɵɵtext(791, " Targeting individuals with the intention of degrading or shaming them. ");
            ɵɵelementEnd();
            ɵɵelementStart(792, "li");
            ɵɵtext(793, " Illustrations or Images altered to degrade individuals ");
            ɵɵelementEnd();
            ɵɵelementStart(794, "li");
            ɵɵtext(795, "Photos or videos of physical or verbal bullying");
            ɵɵelementEnd();
            ɵɵelementStart(796, "li");
            ɵɵtext(797, "Sharing personal information or harassing people");
            ɵɵelementEnd();
            ɵɵelementStart(798, "li");
            ɵɵtext(799, " Repeatedly targeting other people with unwanted requests or messages. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(800, "li");
            ɵɵtext(801, " Comprises harmful or dangerous content ");
            ɵɵelementStart(802, "ul", 17);
            ɵɵelementStart(803, "li");
            ɵɵtext(804, " which intends to incite violence or encourage dangerous or illegal activities that have an inherent risk of serious physical harm or death. ");
            ɵɵelementEnd();
            ɵɵelementStart(805, "li");
            ɵɵtext(806, " Encourages dangerous or illegal activities for instance - money laundering, gambling, performing stunts, high risk activities, choking games, drug use, or other acts where serious injury or harm may result. Content that depicts dangerous acts may be allowed if the primary purpose is educational, documentary, scientific, or artistic (EDSA), and isn\u2019t gratuitously graphic. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(807, "li");
            ɵɵtext(808, " Other possibilities: ");
            ɵɵelementStart(809, "ul", 17);
            ɵɵelementStart(810, "li");
            ɵɵtext(811, " Content which violates the law for the time being in force, ");
            ɵɵelementEnd();
            ɵɵelementStart(812, "li");
            ɵɵtext(813, " Content which infringes any trademark, copyright, or other intellectual property rights, ");
            ɵɵelementEnd();
            ɵɵelementStart(814, "li");
            ɵɵtext(815, " Content which deceives or misleads the User about the origin of such Content and conveys information which is grossly offensive or menacing, ");
            ɵɵelementEnd();
            ɵɵelementStart(816, "li");
            ɵɵtext(817, " Content which contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource, ");
            ɵɵelementEnd();
            ɵɵelementStart(818, "li");
            ɵɵtext(819, " Content which threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation, ");
            ɵɵelementEnd();
            ɵɵelementStart(820, "li");
            ɵɵtext(821, " Content involvings minors/ children in violence as victims or perpetrators or as forced witnesses to violence, or showing children as being subjected to any form of child abuse, ");
            ɵɵelementEnd();
            ɵɵelementStart(822, "li");
            ɵɵtext(823, " Content involving abuse or ridicule of people with disabilities (physical or mental), ");
            ɵɵelementEnd();
            ɵɵelementStart(824, "li");
            ɵɵtext(825, "Content involving cruelty to, or abuse of animals,");
            ɵɵelementEnd();
            ɵɵelementStart(826, "li");
            ɵɵtext(827, " depiction of violence, cruelty and horror, scenes of violence primarily, ");
            ɵɵelementEnd();
            ɵɵelementStart(828, "li");
            ɵɵtext(829, " Content involving images/text/ illustrations have the effect of encouraging, justifying, glorifying, glamorising alcohol drinking, drugs and substance abuse; consumption of tobacco or smoking, ");
            ɵɵelementEnd();
            ɵɵelementStart(830, "li");
            ɵɵtext(831, " Content involving degrading or denigrating women in any manner, ");
            ɵɵelementEnd();
            ɵɵelementStart(832, "li");
            ɵɵtext(833, " Content involving vulgarity, obscenity or depravity, ");
            ɵɵelementEnd();
            ɵɵelementStart(834, "li");
            ɵɵtext(835, " Content involving dual meaning words as obviously cater to baser instincts, ");
            ɵɵelementEnd();
            ɵɵelementStart(836, "li");
            ɵɵtext(837, " Content involving visuals or words contemptuous of racial, religious or other groups, ");
            ɵɵelementEnd();
            ɵɵelementStart(838, "li");
            ɵɵtext(839, " Content involving visuals or words which promote superstition, communal, obscurantist, anti-scientific attitude, and ");
            ɵɵelementEnd();
            ɵɵelementStart(840, "li");
            ɵɵtext(841, " Content involving visuals or words involving defamation of an individual or a body of individuals. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(842, "h4", 11);
            ɵɵtext(843, "Intellectual Property Rights");
            ɵɵelementEnd();
            ɵɵelementStart(844, "ol", 12);
            ɵɵelementStart(845, "li");
            ɵɵtext(846, " Registered Users are solely responsible for Content they have created, uploaded, sourced, linked, streamed, curated, reviewed, or published on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(847, "li");
            ɵɵtext(848, " Registered Users must ensure that Content (meant for wider user consumption) that they create, upload, source, link, stream, curate, review or publish on DIKSHA accurately reflects: ");
            ɵɵelementStart(849, "ol", 14);
            ɵɵelementStart(850, "li");
            ɵɵtext(851, "Author");
            ɵɵelementEnd();
            ɵɵelementStart(852, "li");
            ɵɵtext(853, "Copyright holder");
            ɵɵelementEnd();
            ɵɵelementStart(854, "li");
            ɵɵtext(855, "Year of copyright");
            ɵɵelementEnd();
            ɵɵelementStart(856, "li");
            ɵɵtext(857, " Attributions to creators whose content has been relied on, used in, or referred to in the Content (if any) and sources and citations. ");
            ɵɵelementEnd();
            ɵɵelementStart(858, "li");
            ɵɵtext(859, "The relevant license, as per the Licensing Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(860, "li");
            ɵɵtext(861, " Registered Users who have copyright in the Content they have contributed, consent to publication of their Content in accordance with the ");
            ɵɵelementStart(862, "a", 23);
            ɵɵelementStart(863, "b");
            ɵɵtext(864, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(865, " and this ");
            ɵɵelementStart(866, "a", 25);
            ɵɵelementStart(867, "b");
            ɵɵtext(868, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(869, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(870, "li");
            ɵɵtext(871, " In relation to Content being contributed by any person other than the copyright holder of the Content, Registered Users must ensure that they have the necessary authorisation, consent, license, or permission to publish such Content in accordance with the ");
            ɵɵelementStart(872, "a", 23);
            ɵɵelementStart(873, "b");
            ɵɵtext(874, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(875, " and this ");
            ɵɵelementStart(876, "a", 25);
            ɵɵelementStart(877, "b");
            ɵɵtext(878, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(879, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(880, "li");
            ɵɵtext(881, " If Content includes copyrighted materials (including text, images, photos, illustrations, sounds, music, videos, audio-visual combinations, etc.), Registered Users (creators, curators, reviewers and publishers) must ensure compliance with the license terms, proper attribution and any other third party intellectual property rights. Infringement of copyright or any other intellectual property rights is not acceptable, the proper attributions and acknowledgement of authors and creators for open education resource community and creative commons community must be respected and upheld at all times. Administrators and technology support providers of DIKSHA will remove any Content if properly notified that such Content infringes on another's intellectual property rights or violates this Content Policy, ");
            ɵɵelementStart(882, "a", 23);
            ɵɵelementStart(883, "b");
            ɵɵtext(884, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(885, " and / or the ");
            ɵɵelementStart(886, "a", 24);
            ɵɵelementStart(887, "b");
            ɵɵtext(888, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(889, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(890, "li");
            ɵɵtext(891, " By submitting / uploading / creating/ publishing Content on DIKSHA and following the open license frameworks adopted by DIKSHA, Registered Users recognise and accept that the Content (including all the elements that such Content comprises such as text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations etc.) is placed in public domain will be accessed and used by any individual, institution or organisation through various platforms, portals and applications in accordance with the license conditions. ");
            ɵɵelementEnd();
            ɵɵelementStart(892, "li");
            ɵɵtext(893, " It shall be the sole responsibility of Registered Users to ensure that proper and correct attributions, acknowledgements and sourcing references are given to the Content and individual(s)/ institution(s) that have been involved in the development and creation of Content and wherever Content has been quoted/used. ");
            ɵɵelementEnd();
            ɵɵelementStart(894, "li");
            ɵɵtext(895, " It shall be the responsibility of Registered Users not to infringe upon any third party rights including but not limited to intellectual property rights such as copyrights or any other legal rights of individual(s)/organisation(s) with regards to Content contributed on DIKSHA. For any legal matter arising out of infringement of such rights by the Registered User, such Registered User shall be solely responsible for any financial or other damages arising out of such violations and disputes. ");
            ɵɵelementEnd();
            ɵɵelementStart(896, "li");
            ɵɵtext(897, " GoI and/or the administrators and technology support providers of DIKSHA are not responsible for the violations of any third party rights including intellectual property rights by any User. ");
            ɵɵelementEnd();
            ɵɵelementStart(898, "li");
            ɵɵtext(899, " Any violations of intellectual property rights will be the responsibility of the concerned Users. Any disputes will be settled by the respective parties. ");
            ɵɵelementEnd();
            ɵɵelementStart(900, "li");
            ɵɵtext(901, " GoI and/or the administrators and technology support providers of DIKSHA do not endorse any Content published on DIKSHA, or any opinion, recommendation, or advice expressed therein, and DIKSHA expressly disclaims any and all liability in connection with Content. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(902, "h4", 11);
            ɵɵtext(903, "Open Licensing Policy - Creative Commons Framework");
            ɵɵelementEnd();
            ɵɵelementStart(904, "ol", 17);
            ɵɵelementStart(905, "li");
            ɵɵtext(906, " DIKSHA follows principles of open access, open licensing and is a platform for open education resources. Registered Users must ensure that they follow these licensing terms. Content which does not follow these licensing terms shall be rejected. ");
            ɵɵelementEnd();
            ɵɵelementStart(907, "li");
            ɵɵtext(908, " Content must be made available under the Creative Commons Licence Framework. Creative Commons licenses provide an easy way to manage the copyright terms that attach automatically to all creative material under copyright. Creative Commons licenses allow that material to be shared and reused under terms that are flexible and legally sound. Creative Commons offers a core suite of six copyright licenses. Anyone can use Creative Commons licensed materials as long as the license conditions are followed. One condition of all Creative Commons licenses is attribution. DIKSHA permits the use of the following licences: ");
            ɵɵelementStart(909, "ol", 14);
            ɵɵelementStart(910, "li");
            ɵɵelementStart(911, "a", 28);
            ɵɵtext(912, "CC BY4.0");
            ɵɵelementEnd();
            ɵɵtext(913, " (Attribution) ");
            ɵɵelementEnd();
            ɵɵelementStart(914, "li");
            ɵɵelementStart(915, "a", 29);
            ɵɵtext(916, "CC BY-SA 4.0");
            ɵɵelementEnd();
            ɵɵtext(917, " (Attribution-ShareAlike) ");
            ɵɵelementEnd();
            ɵɵelementStart(918, "li");
            ɵɵelementStart(919, "a", 30);
            ɵɵtext(920, "CC BY-NC 4.0");
            ɵɵelementEnd();
            ɵɵtext(921, " (Attribution-NonCommercial) ");
            ɵɵelementEnd();
            ɵɵelementStart(922, "li");
            ɵɵelementStart(923, "a", 31);
            ɵɵtext(924, "CC BY-NC-SA 4.0");
            ɵɵelementEnd();
            ɵɵtext(925, " (Attribution-NonCommercial-ShareAlike) ");
            ɵɵelementEnd();
            ɵɵelementStart(926, "li");
            ɵɵelementStart(927, "a", 32);
            ɵɵtext(928, "CC BY-ND 4.0");
            ɵɵelementEnd();
            ɵɵtext(929, " (Attribution-Non-Derivative) ");
            ɵɵelementEnd();
            ɵɵelementStart(930, "li");
            ɵɵtext(931, "YouTube License");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(932, "li");
            ɵɵtext(933, " Registered Users must ensure that the Content submitted to be published on the DIKSHA for wider user consumption specifies: ");
            ɵɵelementStart(934, "ol", 17);
            ɵɵelementStart(935, "li");
            ɵɵtext(936, " the relevant license under which such Content will be available to the Users. ");
            ɵɵelementEnd();
            ɵɵelementStart(937, "li");
            ɵɵtext(938, " That the appropriate license terms and well as attributions relating to such Content are properly followed, including details of the creator and source/ citations; ");
            ɵɵelementEnd();
            ɵɵelementStart(939, "li");
            ɵɵtext(940, " That license options mentioned herein are followed in all cases, and that the relevant license should be compatible with the copyright license applicable to the original piece of content. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(941, "li");
            ɵɵtext(942, " Registered Users acknowledge and accept that since the Content provided herein follows open licensing norms such as creative commons licenses or other open licenses, the use of the Content shall not be limited to specific Institutional Users/ Registered Users that have published the Content and they shall be made available for discovery, access and use by any organisation, institution, platform, application and individual in general. ");
            ɵɵelementEnd();
            ɵɵelementStart(943, "li");
            ɵɵtext(944, " Registered Users recognise and accept that once Content is submitted and placed in the public domain for use, they cannot unilaterally withdraw the Content or change the licensing terms. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(945, "h4", 11);
            ɵɵtext(946, "Bad Practices:");
            ɵɵelementEnd();
            ɵɵtext(947, " Registered Users must not indulge in any of the following bad practices in relation to their Content, including: ");
            ɵɵelementStart(948, "ol", 17);
            ɵɵelementStart(949, "li");
            ɵɵelementStart(950, "em");
            ɵɵtext(951, "Uploading Content (including photos or videos) of individuals without their consent");
            ɵɵelementEnd();
            ɵɵtext(952, ": Photos or videos which include other people who are not the subject of the photo and have not signed a consent / release form to share those photos or videos, are not permitted. Any person that appears in the photo or video (whose face is visible) must have signed a consent / release form where they consent to the sharing of such photo(s) with third parties. If the individual is a child under the age of 18 years, the parents or guardians of such child must have signed such consent/ release form. ");
            ɵɵelementEnd();
            ɵɵelementStart(953, "li");
            ɵɵelementStart(954, "em");
            ɵɵtext(955, "Uploading Content (including photos or videos) with ethical issues: ");
            ɵɵelementEnd();
            ɵɵtext(956, "Photographs or videos containing violent, pornographic, sensitive content or other inappropriate Content described in this Content Policy that could, in some way, offend our Users are not permitted. ");
            ɵɵelementEnd();
            ɵɵelementStart(957, "li");
            ɵɵelementStart(958, "em");
            ɵɵtext(959, "Uploading Content (including photos, videos or documents) which require authorisation from the author / owner: ");
            ɵɵelementEnd();
            ɵɵtext(960, "Certain types of Content (including photographs, videos or documents) require the permission of the author / owner such as copyrighted works (eg. logos, literary or artworks), or confidential documents. It is important that before uploading such Content, appropriate written permissions are taken. ");
            ɵɵelementEnd();
            ɵɵelementStart(961, "li");
            ɵɵelementStart(962, "em");
            ɵɵtext(963, "Uploading Content which doesn\u2019t meet specified technical or visual requirements. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(964, "li");
            ɵɵelementStart(965, "em");
            ɵɵtext(966, "Uploading repeats of the same Content. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(967, "li");
            ɵɵelementStart(968, "em");
            ɵɵtext(969, "Uploading files that contain viruses or malware.");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(970, "h4", 11);
            ɵɵtext(971, "Takedown Policy - ");
            ɵɵelementEnd();
            ɵɵelementStart(972, "ol", 17);
            ɵɵelementStart(973, "li");
            ɵɵtext(974, " If a User believes that certain Content published on DIKSHA is in violation of this Content Policy or any applicable laws please contact us at ");
            ɵɵelementStart(975, "a", 19);
            ɵɵelementStart(976, "b");
            ɵɵtext(977, "support@teamdiksha.org");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(978, " and necessary action will be taken to review and / or remove such content as quickly as possible. ");
            ɵɵelementEnd();
            ɵɵelementStart(979, "li");
            ɵɵtext(980, " Administrators and technology support providers of DIKSHA reserve the right to remove Content from DIKSHA without any prior notice for any violation of the Content Policy, ");
            ɵɵelementStart(981, "a", 24);
            ɵɵelementStart(982, "b");
            ɵɵtext(983, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(984, ", or the ");
            ɵɵelementStart(985, "a", 23);
            ɵɵelementStart(986, "b");
            ɵɵtext(987, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(988, ". They may at their sole and absolute discretion delete, remove, disable access or otherwise deal with information, data or Content to comply with laws currently in force, including the Information Technology Act, 2000. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(989, "p");
            ɵɵelementStart(990, "em");
            ɵɵtext(991, "DISCLAIMER: Though all efforts have been made to ensure the accuracy and currency of the Content on DIKSHA, the same should not be construed as a statement of law or used for any legal purposes. In no event will the Government of India, MoE or NCERT be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of DIKSHA. Links to other websites that have been included on this platform are provided for public convenience only.");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(992, "div", 33);
            ɵɵelementStart(993, "div", 34);
            ɵɵelementStart(994, "h4");
            ɵɵelementStart(995, "strong");
            ɵɵtext(996, "DIKSHA Group Guidelines");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(997, "label", 10);
            ɵɵelementStart(998, "em");
            ɵɵtext(999, "( Last updated on ");
            ɵɵelementStart(1000, "b");
            ɵɵtext(1001, "28-04-2021");
            ɵɵelementEnd();
            ɵɵtext(1002, " )");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1003, "p");
            ɵɵtext(1004, " These Group Guidelines specify the rights and responsibilities of Registered Users who use and participate in Groups. These Group Guidelines should be read in conjunction with the ");
            ɵɵelementStart(1005, "a", 23);
            ɵɵelementStart(1006, "b");
            ɵɵtext(1007, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1008, ", ");
            ɵɵelementStart(1009, "a", 25);
            ɵɵelementStart(1010, "b");
            ɵɵtext(1011, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1012, " and ");
            ɵɵelementStart(1013, "a", 24);
            ɵɵelementStart(1014, "b");
            ɵɵtext(1015, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1016, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
            ɵɵelementStart(1017, "a", 23);
            ɵɵelementStart(1018, "b");
            ɵɵtext(1019, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1020, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(1021, "ol", 35);
            ɵɵelementStart(1022, "h4", 11);
            ɵɵtext(1023, "What is a Group? ");
            ɵɵelementStart(1024, "ol", 12);
            ɵɵelementStart(1025, "li");
            ɵɵtext(1026, "A Group is a set of Registered Users");
            ɵɵelementEnd();
            ɵɵelementStart(1027, "li");
            ɵɵtext(1028, " A Group can be created by a Group Admin and comprises Group Members ");
            ɵɵelementEnd();
            ɵɵelementStart(1029, "li");
            ɵɵtext(1030, " Groups are only visible to the Group Admin who has created the Group and the Group Members assigned to the Group. Groups are not searchable. ");
            ɵɵelementEnd();
            ɵɵelementStart(1031, "li");
            ɵɵtext(1032, " Group Admins can assign activities on DIKSHA to the Group Members (visible on the Group). ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1033, "h4", 11);
            ɵɵtext(1034, "Who is a Group Admin?");
            ɵɵelementEnd();
            ɵɵelementStart(1035, "p");
            ɵɵtext(1036, " A Registered User who has created a Group or has been assigned to be a Group Admin by another Group Admin ");
            ɵɵelementEnd();
            ɵɵelementStart(1037, "h4", 11);
            ɵɵtext(1038, "Who is a Group Member?");
            ɵɵelementEnd();
            ɵɵelementStart(1039, "p");
            ɵɵtext(1040, " A Registered User who has been added to Group as a Group Member by a Group Admin. ");
            ɵɵelementEnd();
            ɵɵelementStart(1041, "h4", 11);
            ɵɵtext(1042, "What can a Group Admin do on DIKSHA?");
            ɵɵelementEnd();
            ɵɵelementStart(1043, "ol", 12);
            ɵɵelementStart(1044, "li");
            ɵɵtext(1045, "Create a Group");
            ɵɵelementEnd();
            ɵɵelementStart(1046, "li");
            ɵɵtext(1047, "Add / Remove Group Members");
            ɵɵelementEnd();
            ɵɵelementStart(1048, "li");
            ɵɵtext(1049, "Mark another Group Member as a Group Admin");
            ɵɵelementEnd();
            ɵɵelementStart(1050, "li");
            ɵɵtext(1051, "View, search and suggest activities on DIKSHA to the Group");
            ɵɵelementEnd();
            ɵɵelementStart(1052, "li");
            ɵɵtext(1053, " View the progress of individual Group Members in relation to activities of the Group ");
            ɵɵelementEnd();
            ɵɵelementStart(1054, "li");
            ɵɵtext(1055, " Communicate with the Group Members (as a Group and individually) ");
            ɵɵelementEnd();
            ɵɵelementStart(1056, "li");
            ɵɵtext(1057, "Delete the Group");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1058, "h4", 11);
            ɵɵtext(1059, "What Registered User data does the Group Admin have access to?");
            ɵɵelementEnd();
            ɵɵelementStart(1060, "ol", 12);
            ɵɵelementStart(1061, "li");
            ɵɵtext(1062, "Name");
            ɵɵelementEnd();
            ɵɵelementStart(1063, "li");
            ɵɵtext(1064, " Progress and milestones achieved by Group Members in relation to the activities of the Group ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1065, "h4", 11);
            ɵɵtext(1066, "What are the responsibilities of the Group Admin?");
            ɵɵelementEnd();
            ɵɵelementStart(1067, "ol", 12);
            ɵɵelementStart(1068, "li");
            ɵɵtext(1069, " To ensure that activities of the Group are in line with the ");
            ɵɵelementStart(1070, "a", 25);
            ɵɵelementStart(1071, "b");
            ɵɵtext(1072, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1073, ", and accordingly meet the Accuracy and Appropriateness standards. ");
            ɵɵelementEnd();
            ɵɵelementStart(1074, "li");
            ɵɵtext(1075, " To use the data and information of Registered Users only for the purposes of tracking the progress of Group Members, and for no other purpose. ");
            ɵɵelementEnd();
            ɵɵelementStart(1076, "li");
            ɵɵtext(1077, " To ensure that any communication with Group Members is relevant to the purpose of the Group and meets the Appropriateness standards set out in the ");
            ɵɵelementStart(1078, "a", 25);
            ɵɵelementStart(1079, "b");
            ɵɵtext(1080, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1081, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(1082, "li");
            ɵɵtext(1083, " To refrain from using the Group for any of the Prohibited Uses set out in the ");
            ɵɵelementStart(1084, "a", 23);
            ɵɵelementStart(1085, "b");
            ɵɵtext(1086, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1087, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1088, "h4", 11);
            ɵɵtext(1089, "What can a Group Member do once assigned to a Group?");
            ɵɵelementEnd();
            ɵɵelementStart(1090, "ol", 12);
            ɵɵelementStart(1091, "li");
            ɵɵtext(1092, " View, participate and communicate in relation to the activities of the Group on DIKSHA ");
            ɵɵelementEnd();
            ɵɵelementStart(1093, "li");
            ɵɵtext(1094, " View their own progress in relation to the activities of the Group on DIKSHA ");
            ɵɵelementEnd();
            ɵɵelementStart(1095, "li");
            ɵɵtext(1096, "View a list of other Group Members");
            ɵɵelementEnd();
            ɵɵelementStart(1097, "li");
            ɵɵtext(1098, "Opt out of any Group");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1099, "h4", 11);
            ɵɵtext(1100, "What are the responsibilities of the Group Member?");
            ɵɵelementEnd();
            ɵɵelementStart(1101, "ol", 12);
            ɵɵelementStart(1102, "li");
            ɵɵtext(1103, " To ensure that any communication with other Group Members or the Group Admin is relevant to the purpose of the Group and meet the Appropriateness standards set out in the ");
            ɵɵelementStart(1104, "a", 25);
            ɵɵelementStart(1105, "b");
            ɵɵtext(1106, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1107, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(1108, "li");
            ɵɵtext(1109, " To refrain from using the Group for any of the Prohibited Uses set out in the ");
            ɵɵelementStart(1110, "a", 23);
            ɵɵelementStart(1111, "b");
            ɵɵtext(1112, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1113, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1114, "div", 36);
            ɵɵelementStart(1115, "div", 37);
            ɵɵelementStart(1116, "h4");
            ɵɵelementStart(1117, "strong");
            ɵɵtext(1118, "DIKSHA Course Terms");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1119, "label", 10);
            ɵɵelementStart(1120, "em");
            ɵɵtext(1121, " ( Last updated on ");
            ɵɵelementStart(1122, "b");
            ɵɵtext(1123, "28-04-2021");
            ɵɵelementEnd();
            ɵɵtext(1124, " )");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1125, "p");
            ɵɵtext(1126, " These Course Terms specify the rights and responsibilities of Registered Users who choose to join a course on DIKSHA and Administrators of courses on DIKSHA. Administrators of a course are Registered Users authorised by Institutional Users to offer courses on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementStart(1127, "h4", 11);
            ɵɵtext(1128, "For Registered Users ");
            ɵɵelementEnd();
            ɵɵelementStart(1129, "ol", 35);
            ɵɵelementStart(1130, "strong");
            ɵɵtext(1131, "A Registered User that chooses to join a course on DIKSHA can:");
            ɵɵelementEnd();
            ɵɵelementStart(1132, "ol", 12);
            ɵɵelementStart(1133, "li");
            ɵɵtext(1134, "Access the course and its Content");
            ɵɵelementEnd();
            ɵɵelementStart(1135, "li");
            ɵɵtext(1136, "View their own progress");
            ɵɵelementEnd();
            ɵɵelementStart(1137, "li");
            ɵɵtext(1138, " Access and download any certificates received on achieving milestones in the course ");
            ɵɵelementEnd();
            ɵɵelementStart(1139, "li");
            ɵɵtext(1140, "Opt out of the course at any time");
            ɵɵelementEnd();
            ɵɵelementStart(1141, "li");
            ɵɵtext(1142, " Provide consent for sharing personal information with Administrators of a course ");
            ɵɵelementEnd();
            ɵɵelementStart(1143, "li");
            ɵɵtext(1144, " Revoke consent for sharing personal information with Administrators of a course ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1145, "strong");
            ɵɵtext(1146, "Access and Revocation of access to data and information of Registered User: ");
            ɵɵelementEnd();
            ɵɵelementStart(1147, "ol", 12);
            ɵɵelementStart(1148, "li");
            ɵɵtext(1149, " By choosing to join a course, the Registered User agrees to give the Administrators of the course access to their Name, State, District, progress in the course and milestones achieved for the purposes of analysing usage of Content to improve content and other offerings. ");
            ɵɵelementEnd();
            ɵɵelementStart(1150, "li");
            ɵɵtext(1151, " Upon joining a course, a Registered User has the option to provide their explicit consent to give the Administrators of the course access to the following additional information, namely: (i) User ID (Teacher ID) (ii) Block (iii) School U-DISE code / Organisation ID or number (iv) School/Organisation name (v) mobile number and (vi) email address. This consent can be given either when prompted by a pop-up or by changing their data sharing settings. This additional information can only be used by the Administrators of the course for the purpose of: ");
            ɵɵelementStart(1152, "ol", 14);
            ɵɵelementStart(1153, "li");
            ɵɵtext(1154, "tracking progress of the Registered User ;");
            ɵɵelementEnd();
            ɵɵelementStart(1155, "li");
            ɵɵtext(1156, " analysing usage to improve the course, Content and other offerings; ");
            ɵɵelementEnd();
            ɵɵelementStart(1157, "li");
            ɵɵtext(1158, "validating contact details;");
            ɵɵelementEnd();
            ɵɵelementStart(1159, "li");
            ɵɵtext(1160, "issuing certificates; and");
            ɵɵelementEnd();
            ɵɵelementStart(1161, "li");
            ɵɵtext(1162, " contacting Registered Users to send relevant information or seek feedback. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1163, "li");
            ɵɵtext(1164, " Registered Users can revoke their consent to sharing additional information at any time by changing their data sharing settings. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1165, "strong");
            ɵɵtext(1166, "Responsibilities of Registered Users: ");
            ɵɵelementEnd();
            ɵɵelementStart(1167, "ol", 12);
            ɵɵelementStart(1168, "li");
            ɵɵtext(1169, " To ensure that any of their communication is relevant to the purpose of the course and meet the Appropriateness standards set out in the ");
            ɵɵelementStart(1170, "a", 25);
            ɵɵelementStart(1171, "b");
            ɵɵtext(1172, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1173, ". ");
            ɵɵelementEnd();
            ɵɵelementStart(1174, "li");
            ɵɵtext(1175, " To ensure that their use of courses does not violate any of the Prohibited Uses set out in the ");
            ɵɵelementStart(1176, "strong");
            ɵɵtext(1177, "Terms of Use");
            ɵɵelementEnd();
            ɵɵtext(1178, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1179, "h4", 11);
            ɵɵtext(1180, "For Administrators of the course");
            ɵɵelementEnd();
            ɵɵelementStart(1181, "strong");
            ɵɵtext(1182, "Administrators of a course on DIKSHA can: ");
            ɵɵelementEnd();
            ɵɵelementStart(1183, "ol", 12);
            ɵɵelementStart(1184, "li");
            ɵɵtext(1185, "Create, review or publish courses on DIKSHA");
            ɵɵelementEnd();
            ɵɵelementStart(1186, "li");
            ɵɵtext(1187, " Access data and information of courses created by or assigned to them, which contain: ");
            ɵɵelementStart(1188, "ol", 14);
            ɵɵelementStart(1189, "li");
            ɵɵtext(1190, " Name, State, District and progress data of the Registered Users who have chosen to join the course, ");
            ɵɵelementEnd();
            ɵɵelementStart(1191, "li");
            ɵɵtext(1192, " User ID (Teacher ID), Block, School U-DISE code / Organisation ID or number, School/Organisation name, mobile number, and email address of Registered Users, only if the Registered Users have given their explicit consent, ");
            ɵɵelementEnd();
            ɵɵelementStart(1193, "li");
            ɵɵtext(1194, " Course usage data such as progress and completion details and other related matters ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1195, "li");
            ɵɵtext(1196, " View and use such data and information. Reports with this additional information will be available only for a limited period of time and will expire in 15 days. ");
            ɵɵelementEnd();
            ɵɵelementStart(1197, "li");
            ɵɵtext(1198, " Use the data and information of the Registered Users only for the purposes of: ");
            ɵɵelementStart(1199, "ol", 14);
            ɵɵelementStart(1200, "li");
            ɵɵtext(1201, "tracking their progress;");
            ɵɵelementEnd();
            ɵɵelementStart(1202, "li");
            ɵɵtext(1203, " analysing usage of Content to improve content and other offerings; ");
            ɵɵelementEnd();
            ɵɵelementStart(1204, "li");
            ɵɵtext(1205, "validating contact details;");
            ɵɵelementEnd();
            ɵɵelementStart(1206, "li");
            ɵɵtext(1207, "issuing certificates; and");
            ɵɵelementEnd();
            ɵɵelementStart(1208, "li");
            ɵɵtext(1209, " contacting Registered Users to send relevant information or seek feedback. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1210, "li");
            ɵɵtext(1211, " Create and issue certificates for Registered Users who have achieved milestones in the course. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1212, "strong");
            ɵɵtext(1213, "Responsibilities of Administrators of a course: ");
            ɵɵelementEnd();
            ɵɵelementStart(1214, "ol", 12);
            ɵɵelementStart(1215, "li");
            ɵɵtext(1216, " To ensure that the courses created, reviewed or published by them are in line with the ");
            ɵɵelementStart(1217, "a", 25);
            ɵɵelementStart(1218, "b");
            ɵɵtext(1219, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1220, ", and accordingly meet the Accuracy and Appropriateness standards. ");
            ɵɵelementEnd();
            ɵɵelementStart(1221, "li");
            ɵɵtext(1222, " To respect the privacy and data protection rights of Registered Users. ");
            ɵɵelementEnd();
            ɵɵelementStart(1223, "li");
            ɵɵtext(1224, " To ensure the security of and use of data (especially personal data) shared by Registered Users is limited solely to the purposes mentioned here. ");
            ɵɵelementEnd();
            ɵɵelementStart(1225, "li");
            ɵɵtext(1226, " To know that any use of data for purposes outside of the proper use shall be considered violation of the terms of the policies of DIKSHA as well as applicable laws and policies of India and they shall be responsible and liable for such actions and for any loss or damage arising from failure to comply with this obligation. ");
            ɵɵelementEnd();
            ɵɵelementStart(1227, "li");
            ɵɵtext(1228, " To ensure that their communication (if any) with Registered Users is explicitly limited and relevant to the purpose of the course and meets the Appropriateness standards set out in the ");
            ɵɵelementStart(1229, "a", 25);
            ɵɵelementStart(1230, "b");
            ɵɵtext(1231, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1232, ". The email address and phone number of Registered Users shall only be used to share information in connection with the course and shall not under any circumstance be used for any other matters. ");
            ɵɵelementEnd();
            ɵɵelementStart(1233, "li");
            ɵɵtext(1234, " To ensure that their courses are not used for any of the Prohibited Uses set out in the ");
            ɵɵelementStart(1235, "a", 23);
            ɵɵelementStart(1236, "b");
            ɵɵtext(1237, "Terms of Use of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1238, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1239, "p");
            ɵɵelementStart(1240, "em");
            ɵɵtext(1241, "These Course Guidelines should be read in conjunction with the policies and guidelines of DIKSHA, including the ");
            ɵɵelementEnd();
            ɵɵelementStart(1242, "strong");
            ɵɵelementStart(1243, "em");
            ɵɵelementStart(1244, "a", 23);
            ɵɵelementStart(1245, "b");
            ɵɵtext(1246, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1247, "em");
            ɵɵtext(1248, ", ");
            ɵɵelementEnd();
            ɵɵelementStart(1249, "strong");
            ɵɵelementStart(1250, "em");
            ɵɵelementStart(1251, "a", 25);
            ɵɵelementStart(1252, "b");
            ɵɵtext(1253, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1254, "em");
            ɵɵtext(1255, " and ");
            ɵɵelementEnd();
            ɵɵelementStart(1256, "strong");
            ɵɵelementStart(1257, "em");
            ɵɵelementStart(1258, "a", 24);
            ɵɵelementStart(1259, "b");
            ɵɵtext(1260, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1261, "em");
            ɵɵtext(1262, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
            ɵɵelementEnd();
            ɵɵelementStart(1263, "strong");
            ɵɵelementStart(1264, "em");
            ɵɵelementStart(1265, "a", 23);
            ɵɵelementStart(1266, "b");
            ɵɵtext(1267, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1268, "em");
            ɵɵtext(1269, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1270, "div", 38);
            ɵɵelementStart(1271, "div", 39);
            ɵɵelementStart(1272, "h4");
            ɵɵelementStart(1273, "strong");
            ɵɵtext(1274, "Administrator Guidelines");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1275, "label", 10);
            ɵɵelementStart(1276, "em");
            ɵɵtext(1277, "( Last updated on ");
            ɵɵelementStart(1278, "b");
            ɵɵtext(1279, "28-04-2021");
            ɵɵelementEnd();
            ɵɵtext(1280, " )");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1281, "p");
            ɵɵtext(1282, " These Administrator Guidelines specify the rights and responsibilities of Registered Users who are Administrators on DIKSHA. Administrators are Registered Users authorised by Institutional Users to be administrators on DIKSHA on their behalf. ");
            ɵɵelementEnd();
            ɵɵelementStart(1283, "h4", 11);
            ɵɵtext(1284, "Administrators on DIKSHA can:");
            ɵɵelementEnd();
            ɵɵelementStart(1285, "strong");
            ɵɵtext(1286, " Access the following data and information of Registered Users:");
            ɵɵelementEnd();
            ɵɵelementStart(1287, "ol", 14);
            ɵɵelementStart(1288, "li");
            ɵɵelementStart(1289, "strong");
            ɵɵelementStart(1290, "em");
            ɵɵtext(1291, "Name");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1292, ", ");
            ɵɵelementStart(1293, "strong");
            ɵɵelementStart(1294, "em");
            ɵɵtext(1295, "State");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1296, ", ");
            ɵɵelementStart(1297, "strong");
            ɵɵelementStart(1298, "em");
            ɵɵtext(1299, "District");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1300, " and ");
            ɵɵelementStart(1301, "strong");
            ɵɵelementStart(1302, "em");
            ɵɵtext(1303, "course progress data");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1304, " of the Registered Users who have chosen to join courses offered by the the Institutional User that the Administrator belongs to, ");
            ɵɵelementEnd();
            ɵɵelementStart(1305, "li");
            ɵɵelementStart(1306, "strong");
            ɵɵelementStart(1307, "em");
            ɵɵtext(1308, "User ID");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1309, " (16 digit randomised system generated identifier for every Registered User), ");
            ɵɵelementStart(1310, "strong");
            ɵɵelementStart(1311, "em");
            ɵɵtext(1312, "external ID");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1313, " (ID entered by the Registered User when they choose to submit additional details from their profile), ");
            ɵɵelementStart(1314, "strong");
            ɵɵelementStart(1315, "em");
            ɵɵtext(1316, "Block");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1317, ", ");
            ɵɵelementStart(1318, "strong");
            ɵɵelementStart(1319, "em");
            ɵɵtext(1320, "School U-DISE code / Organisation ID or number");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1321, ", ");
            ɵɵelementStart(1322, "strong");
            ɵɵelementStart(1323, "em");
            ɵɵtext(1324, "School/Organisation name");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1325, ", ");
            ɵɵelementStart(1326, "strong");
            ɵɵelementStart(1327, "em");
            ɵɵtext(1328, "mobile number(s)");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1329, ", and ");
            ɵɵelementStart(1330, "strong");
            ɵɵelementStart(1331, "em");
            ɵɵtext(1332, "email address(s)");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1333, " linked to the profile of the Registered Users or additionally provided by the Registered User, ");
            ɵɵelementStart(1334, "strong");
            ɵɵtext(1335, "only if");
            ɵɵelementEnd();
            ɵɵtext(1336, " the Registered Users have given their explicit consent to share these details with the Administrators. This Administrator will belong to the same Institutional User that the Registered User belongs to. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1337, "strong");
            ɵɵtext(1338, " Access data and information in relation to usage of DIKSHA and its Content, which includes: ");
            ɵɵelementEnd();
            ɵɵelementStart(1339, "ol", 14);
            ɵɵelementStart(1340, "li");
            ɵɵtext(1341, " Content plays (i.e. any Content played / viewed / used for at least 10 seconds) ");
            ɵɵelementEnd();
            ɵɵelementStart(1342, "li");
            ɵɵtext(1343, "Content play time (in minutes)");
            ɵɵelementEnd();
            ɵɵelementStart(1344, "li");
            ɵɵtext(1345, " QR code scans (including using the DIAL Code directly) and failed scans ");
            ɵɵelementEnd();
            ɵɵelementStart(1346, "li");
            ɵɵtext(1347, "User ratings and feedback for Content");
            ɵɵelementEnd();
            ɵɵelementStart(1348, "li");
            ɵɵtext(1349, "Number and types of unique devices");
            ɵɵelementEnd();
            ɵɵelementStart(1350, "li");
            ɵɵtext(1351, "Transactions per second on DIKSHA");
            ɵɵelementEnd();
            ɵɵelementStart(1352, "li");
            ɵɵtext(1353, " Reports that compile the above mentioned data and information by board, medium, grade, subject, location, creator, device type, number of unique devices, energised textbook so as to enable Administrators to learn about usage of DIKSHA and its Content in different contexts ");
            ɵɵelementEnd();
            ɵɵelementStart(1354, "li");
            ɵɵtext(1355, " Reports that compile the Content provided by Registered Users using tools like surveys, observations, and projects ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1356, "strong");
            ɵɵtext(1357, " Use the data and information only for the purposes of:");
            ɵɵelementEnd();
            ɵɵelementStart(1358, "ol", 14);
            ɵɵelementStart(1359, "li");
            ɵɵtext(1360, " Gaining insights through analysis of data to improve quality, effectiveness, relevance, usage of Content, courses, textbooks, programs and other offerings over time based on Content usage, interest, user feedback, popularity, completion rates, identified misconceptions; ");
            ɵɵelementEnd();
            ɵɵelementStart(1361, "li");
            ɵɵtext(1362, " Assessing, evaluating, validating Content submitted / posted / uploaded / otherwise provided by Registered Users; ");
            ɵɵelementEnd();
            ɵɵelementStart(1363, "li");
            ɵɵtext(1364, " Downloading details submitted and expressly shared by Registered Users only for the purposes mentioned herein and in accordance with the policies of DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1365, "strong");
            ɵɵtext(1366, " Grant or revoke rights to create, curate, review or publish Content on DIKSHA to Registered Users. ");
            ɵɵelementEnd();
            ɵɵelementStart(1367, "h4", 11);
            ɵɵtext(1368, "Responsibilities of Administrators: ");
            ɵɵelementEnd();
            ɵɵelementStart(1369, "ol", 12);
            ɵɵelementStart(1370, "li");
            ɵɵtext(1371, " To ensure that the Content created, reviewed or published by them are in line with the ");
            ɵɵelementStart(1372, "a", 25);
            ɵɵelementStart(1373, "b");
            ɵɵtext(1374, "Content Policy of DIKSHA");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1375, ", and accordingly meet the Accuracy and Appropriateness standards; ");
            ɵɵelementEnd();
            ɵɵelementStart(1376, "li");
            ɵɵtext(1377, " To respect the privacy and data protection rights of Registered Users; ");
            ɵɵelementEnd();
            ɵɵelementStart(1378, "li");
            ɵɵtext(1379, " To ensure the security of and use of data (especially personal data) shared by Registered Users or obtained from DIKSHA is limited solely to the purposes mentioned here and is not used for: ");
            ɵɵelementStart(1380, "ol", 14);
            ɵɵelementStart(1381, "li");
            ɵɵtext(1382, "Sale or other commercial purposes;");
            ɵɵelementEnd();
            ɵɵelementStart(1383, "li");
            ɵɵtext(1384, "Advertising or marketing;");
            ɵɵelementEnd();
            ɵɵelementStart(1385, "li");
            ɵɵtext(1386, " Phone calls or other forms of unsolicited communication that is not related to usage of DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(1387, "li");
            ɵɵtext(1388, " Building a personal profile, other than for educational purposes on DIKSHA; ");
            ɵɵelementEnd();
            ɵɵelementStart(1389, "li");
            ɵɵtext(1390, " Defaming, harassing, abusing, threatening or defrauding any Registered Users, ");
            ɵɵelementEnd();
            ɵɵelementStart(1391, "li");
            ɵɵtext(1392, " Impersonating any person or entity, falsely claiming an affiliation with any person or entity, or accessing DIKSHA accounts without permission, or perform any other fraudulent activity; ");
            ɵɵelementEnd();
            ɵɵelementStart(1393, "li");
            ɵɵtext(1394, " Sending junk mail or spam, informational announcements, charity requests, and petitions for signatures etc. ");
            ɵɵelementEnd();
            ɵɵelementStart(1395, "li");
            ɵɵtext(1396, " Any of the Prohibited Purposes set out in the ");
            ɵɵelementStart(1397, "a", 23);
            ɵɵelementStart(1398, "b");
            ɵɵtext(1399, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1400, "; and ");
            ɵɵelementEnd();
            ɵɵelementStart(1401, "li");
            ɵɵtext(1402, " Any purpose that is not disclosed in this policy or on DIKSHA. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1403, "li");
            ɵɵtext(1404, " To know that any use of data for purposes outside of the proper use shall be considered violation of the terms of the policies of DIKSHA as well as applicable laws and policies of India and they shall be responsible and liable for such actions and for any loss or damage arising from failure to comply with this obligation. ");
            ɵɵelementEnd();
            ɵɵelementStart(1405, "li");
            ɵɵtext(1406, " To ensure that their communication (if any) with Registered Users is explicitly limited and relevant to the purposes specified here and meets the Appropriateness standards set out in the ");
            ɵɵelementStart(1407, "a", 25);
            ɵɵelementStart(1408, "b");
            ɵɵtext(1409, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtext(1410, ". The email address and phone number of Registered Users shall only be used to share information in connection with uses specified here and shall not under any circumstance be used for any other matters. ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1411, "p");
            ɵɵelementStart(1412, "em");
            ɵɵtext(1413, "These Administrator Guidelines should be read in conjunction with the policies and guidelines of DIKSHA, including the ");
            ɵɵelementEnd();
            ɵɵelementStart(1414, "a", 23);
            ɵɵelementStart(1415, "b");
            ɵɵelementStart(1416, "em");
            ɵɵtext(1417, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1418, "em");
            ɵɵtext(1419, ", ");
            ɵɵelementEnd();
            ɵɵelementStart(1420, "a", 25);
            ɵɵelementStart(1421, "b");
            ɵɵelementStart(1422, "em");
            ɵɵtext(1423, "Content Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1424, "em");
            ɵɵtext(1425, " and ");
            ɵɵelementEnd();
            ɵɵelementStart(1426, "a", 24);
            ɵɵelementStart(1427, "b");
            ɵɵelementStart(1428, "em");
            ɵɵtext(1429, "Privacy Policy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1430, "em");
            ɵɵtext(1431, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
            ɵɵelementEnd();
            ɵɵelementStart(1432, "a", 23);
            ɵɵelementStart(1433, "b");
            ɵɵelementStart(1434, "em");
            ɵɵtext(1435, "Terms of Use");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1436, "em");
            ɵɵtext(1437, ". ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(1438, "mat-dialog-actions", 40);
            ɵɵelementStart(1439, "button", 41);
            ɵɵlistener("click", function TermsConditionsComponent_Template_button_click_1439_listener() { return ctx.onCancel(); });
            ɵɵtext(1440, " Cancel ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.termsConditions, " ");
        } }, directives: [MatDialogTitle, MatDialogContent, ɵdd, ɵbi, ɵdf, ɵde, MatDialogActions, MatButton], styles: ["@charset \"UTF-8\";a[_ngcontent-%COMP%], body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], div[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], html[_ngcontent-%COMP%], label[_ngcontent-%COMP%], li[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{font-family:\"Noto Sans\",sans-serif!important}.header[_ngcontent-%COMP%]{border-bottom:.0625rem solid #ccc;position:fixed;top:0;left:0;right:0;z-index:99;transition:.8s,border .1s,box-shadow .1s,padding .1s}.header-fix[_ngcontent-%COMP%]{height:8.5rem}h1.logo[_ngcontent-%COMP%]{margin:0;padding:0}img.logo1[_ngcontent-%COMP%]{height:2.8125rem}img.logo2[_ngcontent-%COMP%]{height:3.75rem;margin-top:.3125rem}#initiatorText[_ngcontent-%COMP%]{display:none!important}.hdrtxt1[_ngcontent-%COMP%], .hdrtxt2[_ngcontent-%COMP%]{line-height:1;color:#333;text-align:center}.hdrtxt1[_ngcontent-%COMP%]{font-size:.875rem;padding-top:.625rem}#initiatorText1[_ngcontent-%COMP%]   .hdrtxt2[_ngcontent-%COMP%]{padding-bottom:.625rem}.hdrtxt2[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;padding-top:.3125rem}.nav-fix[_ngcontent-%COMP%]{height:3.625rem;padding:.3125rem 0;box-shadow:0 .125rem .125rem 0 rgba(0,0,0,.16),0 0 0 .0625rem rgba(0,0,0,.08);border-bottom:0;transition:.8s,border .1s,box-shadow .1s,padding .1s}.nav-fix[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:3rem;transition:.2s ease-in-out}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-bottom:0}.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{transition:color .25s ease-out;padding:.5rem 1rem;font-size:.875rem}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn[_ngcontent-%COMP%]{padding:.625rem .4375rem!important;margin:0}.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:transparent}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-default[_ngcontent-%COMP%]{border-color:#ccc;color:#4a4a4a}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-primary[_ngcontent-%COMP%]{border-color:#2e6da4;background:#337ab7;color:#fff}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-default[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-default[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-primary[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-primary[_ngcontent-%COMP%]:hover{color:#286090;background-color:#fff;border-color:#204d74;transition:none}.header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]{margin:0;padding:1.25rem .9375rem 0;background-color:#fff!important;font-size:1rem}.navbar-collapse.in[_ngcontent-%COMP%]{z-index:2;max-height:85vh}.navbar-collapse[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:.9375rem!important}.nav-tabs[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav-tabs[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#4a90e2}.hash-fix[_ngcontent-%COMP%]:before{display:block;content:\" \";visibility:hidden;margin-top:-3.75rem;height:3.75rem}@media (min-width:480px){.header-fix[_ngcontent-%COMP%]{height:7.5rem}}@media (min-width:768px){.header-fix[_ngcontent-%COMP%]{height:8.625rem}img.logo1[_ngcontent-%COMP%]{height:3.75rem}img.logo2[_ngcontent-%COMP%]{height:4.6875rem}.hdrtxt1[_ngcontent-%COMP%]{font-size:1rem}#initiatorText1[_ngcontent-%COMP%]{display:block!important}.navbar-collapse[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:0!important}}@media (min-width:1200px){.header-fix[_ngcontent-%COMP%]{height:5.125rem}.hdrtxt1[_ngcontent-%COMP%], .hdrtxt2[_ngcontent-%COMP%]{text-align:left}.hdrtxt1[_ngcontent-%COMP%]{padding-top:0}#initiatorText[_ngcontent-%COMP%]{display:block!important;padding-top:1.375rem;padding-bottom:1.375rem}#initiatorText1[_ngcontent-%COMP%]{display:none!important}}@media (min-width:1280px){.hdrtxt1[_ngcontent-%COMP%]{font-size:1.125rem}}.getStartedBtn[_ngcontent-%COMP%]{cursor:pointer}.navbar.bg-white-header[_ngcontent-%COMP%]{transition:.25s ease-in;box-shadow:0 .125rem .875rem .625rem rgba(0,0,0,.1);position:fixed;top:0;left:0;right:0;z-index:999;background:#fff;box-shadow:0 .125rem .875rem .625rem rgba(0,0,0,.1);padding:0 5rem;border-radius:0}.navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header-exp[_ngcontent-%COMP%]{border:.0625rem solid rgba(2,79,157,.4)}.navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header[_ngcontent-%COMP%]{width:9.875rem;color:#024f9d;padding:.25rem .5rem!important;font-size:.875rem;line-height:1.5;border-radius:.1875rem}.navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header.active[_ngcontent-%COMP%], .navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header[_ngcontent-%COMP%]:hover{font-weight:700;box-shadow:none}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]{border:none;position:relative}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;background-color:#024f9d;height:.1875rem;width:1.5625rem;margin-top:.25rem;margin-bottom:.25rem;transform:rotate(0);position:relative;left:0;opacity:1}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1), .navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transition:transform .35s ease-in-out}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:not(.collapsed)   span[_ngcontent-%COMP%]:nth-child(1){position:absolute;left:.75rem;top:.625rem;transform:rotate(135deg);opacity:.9}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:not(.collapsed)   span[_ngcontent-%COMP%]:nth-child(2){height:.75rem;visibility:hidden;background-color:transparent}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:not(.collapsed)   span[_ngcontent-%COMP%]:nth-child(3){position:absolute;left:.75rem;top:.625rem;transform:rotate(-135deg);opacity:.9}.header-img[_ngcontent-%COMP%]{clear:both;display:block;overflow:hidden;padding:.625rem;background:#fff;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.header-img[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{padding:0 .625rem}.section-footer[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{font-size:.875rem;color:#fff;text-align:left;border:none;padding:0 0 .9375rem!important}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{font-size:.875rem;text-align:center}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .app-img[_ngcontent-%COMP%]{width:150px;margin:0 auto}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .app-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:.3125rem}.section-footer[_ngcontent-%COMP%]   .page-view-count[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{font-size:.875rem}.section-footer[_ngcontent-%COMP%]   .page-view-count[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-size:32px}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:left;font-size:.875rem;font-weight:400}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{padding-bottom:1px!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover{color:#fff}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]{text-align:right}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;font-size:.875rem;color:#fff;padding:0!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{opacity:1}.container[_ngcontent-%COMP%]{width:auto;margin-right:auto;margin-left:auto}.header-gap[_ngcontent-%COMP%]{padding-top:60px}*[_ngcontent-%COMP%]{box-sizing:border-box}.tabs-content-wrapper[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:.875rem;line-height:1.5;max-height:calc(80vh - 100px)!important;padding:0 24px!important}.tabs-content-wrapper[_ngcontent-%COMP%]   .ui.secondary.menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{word-break:break-word;font-size:.875rem;margin-bottom:-.0625rem;border:1px solid #dfe1e5;color:#293845;height:3rem;box-shadow:.375rem .375rem .125rem 0 rgba(0,0,0,.1);background:#fff;border-radius:24px;min-height:2rem;cursor:pointer;word-wrap:break-word;white-space:normal;outline:0;transform:rotateZ(0);display:flex;transition:box-shadow .1s,width .1s;justify-content:space-between;align-items:center}.tabs-content-wrapper[_ngcontent-%COMP%]   .ui.secondary.menu[_ngcontent-%COMP%]   .active.item[_ngcontent-%COMP%]{background-color:#024f9d!important;color:#fff!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-size:20.25rem;color:#005da2;font-weight:700;margin-bottom:30px}p[_ngcontent-%COMP%]{font-size:18px;line-height:30px;margin-bottom:1.5625rem}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:700}dl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.625rem 0}.list-circle[_ngcontent-%COMP%]{list-style-type:circle}.lower-roman[_ngcontent-%COMP%]{list-style-type:lower-roman}a[_ngcontent-%COMP%]{text-decoration:none;color:#4a4a4a;cursor:pointer}a.no-underline[_ngcontent-%COMP%]:active, a.no-underline[_ngcontent-%COMP%]:focus, a.no-underline[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:none}a[_ngcontent-%COMP%]:focus{outline:-webkit-focus-ring-color auto .3125rem;outline-offset:-.125rem}li[_ngcontent-%COMP%]{overflow-wrap:break-word}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:circle}@media (min-width:320px){#terms-of-use[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{-webkit-padding-start:2.5rem;padding-inline-start:2.5rem}.container[_ngcontent-%COMP%]{max-width:100%!important;width:100%!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]{text-align:center}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{padding-bottom:.0625rem!important;display:block;text-align:center}}@media (min-width:768px){.container[_ngcontent-%COMP%]{width:45rem!important;max-width:45rem!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{padding-bottom:.0625rem!important;display:inline;text-align:left}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:left}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]{text-align:right}}@media (min-width:992px){.container[_ngcontent-%COMP%]{width:60rem!important;max-width:60rem!important}}@media (min-width:1200px){.container[_ngcontent-%COMP%]{width:71.25rem!important;max-width:71.25rem!important}}.nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:-.0625rem}.sub-heading[_ngcontent-%COMP%]{font-size:1.125rem}.nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:.0625rem solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-link[_ngcontent-%COMP%]{display:block;padding:.5rem 1rem}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:1px solid #dfe1e5;color:#293845;font-size:.875rem;white-space:nowrap}ul#termsAndPoliciesTab[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{height:3rem;font-size:.875rem;background:#fff;color:#008840;border:none;border-radius:24px;min-height:2rem;margin:5px;cursor:pointer;word-wrap:break-word;white-space:normal;outline:0;transform:rotateZ(0);display:flex;transition:box-shadow .1s,width .1s;justify-content:space-between;align-items:center}#terms-of-use[_ngcontent-%COMP%]   #termsAndPolicies[_ngcontent-%COMP%]{margin-top:1.25rem;padding:1.875rem;margin-bottom:1.875rem}#terms-of-use[_ngcontent-%COMP%]   .TermsOfUseClick[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   .TermsOfUseClick[_ngcontent-%COMP%]:hover, #terms-of-use[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer}#terms-of-use[_ngcontent-%COMP%]   .TermsOfUseClick[_ngcontent-%COMP%]:hover, #terms-of-use[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}#terms-of-use[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-word;font-size:.875rem}.arrow-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;position:relative;padding-left:15px}.arrow-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\"\u203A\";font-size:25px;position:absolute;top:-10px;left:-20px;color:#4a4a4a}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]{cursor:pointer}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]   .scrollTopWrapper[_ngcontent-%COMP%]{text-align:center;border-radius:50%;width:3.125rem;height:3.125rem;background:#dfe6ed;position:fixed;padding:.625rem;z-index:1;bottom:.625rem;right:.625rem}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]   .scrollTopWrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;font-size:1.5rem;line-height:.625rem}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]   .scrollTopWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:.875rem}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]{margin-top:8rem;margin-bottom:1.25rem;text-align:center}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:.9375rem;color:#024f9d;font-weight:700}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin-bottom:1.5625rem;border-left:1px solid #dfe1e5}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#024f9d;cursor:pointer}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   sub[_ngcontent-%COMP%]{display:block;color:#333;bottom:-.5em}#terms-of-use[_ngcontent-%COMP%]   .showVersions.active[_ngcontent-%COMP%]{font-size:1.0625rem;font-weight:700}ul#termsAndPoliciesTab[_ngcontent-%COMP%]{-webkit-padding-start:0;padding-inline-start:0;border-bottom:1px solid #dfe1e5;padding-bottom:24px;width:auto}@media only screen and (max-width:769px){#terms-of-use[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{-webkit-padding-start:1.25rem;padding-inline-start:1.25rem}#terms-of-use.container[_ngcontent-%COMP%]{max-width:100%}}.navbar.no-sticky-top[_ngcontent-%COMP%]{position:absolute;background:0 0;z-index:999;width:100%}#terms-of-use[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600}#terms-of-use[_ngcontent-%COMP%]   label.tagLine[_ngcontent-%COMP%]{display:block;font-size:.875rem;margin-bottom:1.875rem}.heading-term[_ngcontent-%COMP%]{color:#4a4a4a;font-size:18px}.pull-right[_ngcontent-%COMP%]{float:right}.text-right[_ngcontent-%COMP%]{text-align:right!important}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{flex-wrap:nowrap;overflow-x:auto}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]::-webkit-scrollbar{width:.5rem;height:.5rem;background-color:#f5f5f5}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:.625rem;-webkit-box-shadow:inset 0 0 .375rem rgba(0,0,0,.5)}.dk-copyright-text[_ngcontent-%COMP%]{font-size:.875rem;color:var(--white);text-align:left;border:none;padding:0!important}ul#termsAndPoliciesTab[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]{background-color:#024f9d!important;color:#fff!important}.first-row-top[_ngcontent-%COMP%]{margin-top:-30px;margin-bottom:30px}"] });
    return TermsConditionsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TermsConditionsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-terms-conditions',
                templateUrl: './terms-conditions.component.html',
                styleUrls: ['./terms-conditions.component.scss']
            }]
    }], function () { return [{ type: GlobalService }, { type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

function TermsConditionConfirmComponent_mat_list_item_12_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-list-item");
    ɵɵelementStart(1, "mat-checkbox", 10);
    ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r9); var list_r6 = ctx.$implicit; return list_r6.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener() { ɵɵrestoreView(_r9); var ctx_r10 = ɵɵnextContext(); return ctx_r10.updateAllChecked(); });
    ɵɵelementStart(2, "div", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var list_r6 = ctx.$implicit;
    var i_r7 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("color", "primary")("name", "appropriateness" + i_r7)("ngModel", list_r6.checks);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", list_r6.text, " ");
} }
function TermsConditionConfirmComponent_mat_list_item_20_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-list-item");
    ɵɵelementStart(1, "mat-checkbox", 10);
    ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r14); var list_r11 = ctx.$implicit; return list_r11.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener() { ɵɵrestoreView(_r14); var ctx_r15 = ɵɵnextContext(); return ctx_r15.updateAllChecked(); });
    ɵɵelementStart(2, "div", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var list_r11 = ctx.$implicit;
    var i_r12 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("color", "primary")("name", "contentDetails" + i_r12)("ngModel", list_r11.checks);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", list_r11.text, " ");
} }
function TermsConditionConfirmComponent_mat_list_item_28_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-list-item");
    ɵɵelementStart(1, "mat-checkbox", 10);
    ɵɵlistener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener($event) { ɵɵrestoreView(_r19); var list_r16 = ctx.$implicit; return list_r16.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener() { ɵɵrestoreView(_r19); var ctx_r20 = ɵɵnextContext(); return ctx_r20.updateAllChecked(); });
    ɵɵelementStart(2, "div", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var list_r16 = ctx.$implicit;
    var i_r17 = ctx.index;
    ɵɵadvance(1);
    ɵɵproperty("color", "primary")("name", "usability" + i_r17)("ngModel", list_r16.checks);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", list_r16.text, " ");
} }
function TermsConditionConfirmComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 12);
    ɵɵelement(2, "div", 13);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function TermsConditionConfirmComponent_ng_template_37_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function TermsConditionConfirmComponent_ng_template_37_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r24); var ctx_r23 = ɵɵnextContext(2); return ctx_r23.onSubmit(true); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r21.allChecked);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r21.resourceService.frmelmnts == null ? null : ctx_r21.resourceService.frmelmnts.btn == null ? null : ctx_r21.resourceService.frmelmnts.btn.submit, " ");
} }
function TermsConditionConfirmComponent_ng_template_37_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function TermsConditionConfirmComponent_ng_template_37_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r26); var ctx_r25 = ɵɵnextContext(2); return ctx_r25.onSubmit(false); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r22 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r22.allChecked);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r22.resourceService.frmelmnts == null ? null : ctx_r22.resourceService.frmelmnts.btn == null ? null : ctx_r22.resourceService.frmelmnts.btn.save, " ");
} }
function TermsConditionConfirmComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, TermsConditionConfirmComponent_ng_template_37_button_0_Template, 2, 2, "button", 14);
    ɵɵtemplate(1, TermsConditionConfirmComponent_ng_template_37_button_1_Template, 2, 2, "button", 14);
} if (rf & 2) {
    var ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r5.isSubmit);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.isSubmit);
} }
var TermsConditionConfirmComponent = /** @class */ (function () {
    function TermsConditionConfirmComponent(globalService, dialogRef, data) {
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
    TermsConditionConfirmComponent.prototype.ngOnInit = function () {
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
    };
    TermsConditionConfirmComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    TermsConditionConfirmComponent.prototype.updateAllChecked = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var allChecked = true;
        try {
            for (var _d = __values(this.Appropriateness), _e = _d.next(); !_e.done; _e = _d.next()) {
                var val = _e.value;
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (allChecked) {
            try {
                for (var _f = __values(this.contentDetails), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var val = _g.value;
                    if (!val.checks) {
                        allChecked = false;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (allChecked) {
            try {
                for (var _h = __values(this.usability), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var val = _j.value;
                    if (!val.checks) {
                        allChecked = false;
                        break;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        this.allChecked = allChecked;
    };
    TermsConditionConfirmComponent.prototype.allCheck = function (isAllCheck) {
        if (isAllCheck === void 0) { isAllCheck = false; }
        this.Appropriateness.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.contentDetails.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.usability.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.allChecked = true;
        if (!isAllCheck) {
            this.dialogRef.close();
        }
    };
    TermsConditionConfirmComponent.prototype.onSubmit = function (event) {
        this.dialogRef.close(event);
    };
    TermsConditionConfirmComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    };
    TermsConditionConfirmComponent.ɵfac = function TermsConditionConfirmComponent_Factory(t) { return new (t || TermsConditionConfirmComponent)(ɵɵdirectiveInject(GlobalService), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    TermsConditionConfirmComponent.ɵcmp = ɵɵdefineComponent({ type: TermsConditionConfirmComponent, selectors: [["lib-terms-condition-confirm"]], decls: 39, vars: 12, consts: [[1, "uci-modal"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "mb-40"], [3, "cols", "resize"], [4, "ngFor", "ngForOf"], [1, "confirm-all-action"], ["mat-raised-button", "", 1, "primary", 3, "click"], ["mat-raised-button", "", 1, "action-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["submitBtn", ""], [3, "color", "name", "ngModel", "ngModelChange"], [1, "confirm-checkbox-label"], ["mat-raised-button", "", 1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], ["mat-raised-button", "", "class", "action-button", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", 1, "action-button", 3, "disabled", "click"]], template: function TermsConditionConfirmComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "section", 0);
            ɵɵelementStart(1, "h1", 1);
            ɵɵtext(2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "div", 2);
            ɵɵelementStart(4, "mat-grid-list", 3);
            ɵɵlistener("resize", function TermsConditionConfirmComponent_Template_mat_grid_list_resize_4_listener($event) { return ctx.onResize($event); }, false, ɵɵresolveWindow);
            ɵɵelementStart(5, "mat-grid-tile");
            ɵɵelementStart(6, "div");
            ɵɵelementStart(7, "mat-list");
            ɵɵelementStart(8, "mat-list-item");
            ɵɵelementStart(9, "h4");
            ɵɵtext(10);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(11, "mat-divider");
            ɵɵtemplate(12, TermsConditionConfirmComponent_mat_list_item_12_Template, 4, 4, "mat-list-item", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(13, "mat-grid-tile");
            ɵɵelementStart(14, "div");
            ɵɵelementStart(15, "mat-list");
            ɵɵelementStart(16, "mat-list-item");
            ɵɵelementStart(17, "h4");
            ɵɵtext(18);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(19, "mat-divider");
            ɵɵtemplate(20, TermsConditionConfirmComponent_mat_list_item_20_Template, 4, 4, "mat-list-item", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(21, "mat-grid-tile");
            ɵɵelementStart(22, "div");
            ɵɵelementStart(23, "mat-list");
            ɵɵelementStart(24, "mat-list-item");
            ɵɵelementStart(25, "h4");
            ɵɵtext(26);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(27, "mat-divider");
            ɵɵtemplate(28, TermsConditionConfirmComponent_mat_list_item_28_Template, 4, 4, "mat-list-item", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(29, "mat-dialog-actions", 5);
            ɵɵelementStart(30, "div");
            ɵɵelementStart(31, "button", 6);
            ɵɵlistener("click", function TermsConditionConfirmComponent_Template_button_click_31_listener() { return ctx.allCheck(true); });
            ɵɵtext(32);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(33, "div");
            ɵɵelementStart(34, "button", 7);
            ɵɵlistener("click", function TermsConditionConfirmComponent_Template_button_click_34_listener() { return ctx.allCheck(false); });
            ɵɵtext(35);
            ɵɵelementEnd();
            ɵɵtemplate(36, TermsConditionConfirmComponent_ng_container_36_Template, 3, 0, "ng-container", 8);
            ɵɵtemplate(37, TermsConditionConfirmComponent_ng_template_37_Template, 2, 2, "ng-template", null, 9, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r4 = ɵɵreference(38);
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.confirmWarning, ": ");
            ɵɵadvance(2);
            ɵɵproperty("cols", ctx.breakpoint);
            ɵɵadvance(6);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.appropriateness);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ctx.Appropriateness);
            ɵɵadvance(6);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.contentDetails);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ctx.contentDetails);
            ɵɵadvance(6);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.usability);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", ctx.usability);
            ɵɵadvance(4);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.confirmAll, " ");
            ɵɵadvance(3);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.cancel, " ");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.isLoaderShow)("ngIfElse", _r4);
        } }, directives: [MatDialogTitle, MatDialogContent, MatGridList, MatGridTile, MatList, MatListItem, MatDivider, NgForOf, MatDialogActions, MatButton, NgIf, MatCheckbox, NgControlStatus, NgModel], styles: [".tabs-content-wrapper[_ngcontent-%COMP%]{padding:0 24px!important}.confirm-all-action[_ngcontent-%COMP%]{justify-content:space-between}.uci-modal[_ngcontent-%COMP%]{background:#fff;padding:20px;max-height:90vh;overflow:auto}.uci-modal[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{max-height:initial!important}.uci-modal[_ngcontent-%COMP%]     .mat-figure{align-items:initial!important}.uci-modal[_ngcontent-%COMP%]   .confirm-checkbox-label[_ngcontent-%COMP%]{white-space:break-spaces}"] });
    return TermsConditionConfirmComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TermsConditionConfirmComponent, [{
        type: Component,
        args: [{
                selector: 'lib-terms-condition-confirm',
                templateUrl: './terms-condition-confirm.component.html',
                styleUrls: ['./terms-condition-confirm.component.scss']
            }]
    }], function () { return [{ type: GlobalService }, { type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

/**
 * Service to show toaster
 *
 */
var ToasterService = /** @class */ (function () {
    /**
       * Constructor to create injected service(s) object
       */
    function ToasterService() {
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
    ToasterService.prototype.success = function (message) {
        this.iziToast.success({
            title: message,
            class: 'sb-toaster sb-toast-success'
        });
    };
    /**
     * Format information message
     * @memberOf Services.toasterService
     * @param {string}  message - Info message
     */
    ToasterService.prototype.info = function (message) {
        this.iziToast.info({
            title: message,
            class: 'sb-toaster sb-toast-info'
        });
    };
    /**
     * Format error message
     * @memberOf Services.toasterService
     * @param {string}  message - Error message
     */
    ToasterService.prototype.error = function (message) {
        this.iziToast.error({
            title: message,
            class: 'sb-toaster sb-toast-error'
        });
    };
    /**
     * Format warning message
     * @memberOf Services.toasterService
     * @param {string}  message - Warning message
     */
    ToasterService.prototype.warning = function (message) {
        this.iziToast.warning({
            title: message,
            class: 'sb-toaster sb-toast-warning'
        });
    };
    /**
     * Custom toaster message to be configured
     * @param config
     */
    ToasterService.prototype.custom = function (config) {
        this.iziToast.show({
            class: config.class,
            message: config.message
        });
    };
    ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(); };
    ToasterService.ɵprov = ɵɵdefineInjectable({ token: ToasterService, factory: ToasterService.ɵfac });
    return ToasterService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToasterService, [{
        type: Injectable
    }], function () { return []; }, null); })();

function ConversationSetupComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.startMessageError, " ");
} }
function ConversationSetupComponent_ng_container_52_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21);
    ɵɵelementStart(1, "div", 22);
    ɵɵelementStart(2, "div", 23);
    ɵɵelementStart(3, "i", 24);
    ɵɵlistener("click", function ConversationSetupComponent_ng_container_52_div_2_Template_i_click_3_listener() { ɵɵrestoreView(_r8); var i_r6 = ctx.index; var ctx_r7 = ɵɵnextContext(2); return ctx_r7.onUserSegmentDelete(i_r6); });
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵelementStart(5, "div", 25);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var userSegment_r5 = ctx.$implicit;
    var ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", userSegment_r5.name, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate2("", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.lbl == null ? null : ctx_r4.resourceService.frmelmnts.lbl.userCount, " ", userSegment_r5.count, "");
} }
function ConversationSetupComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 19);
    ɵɵtemplate(2, ConversationSetupComponent_ng_container_52_div_2_Template, 7, 3, "div", 20);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.userSegments);
} }
var ConversationSetupComponent = /** @class */ (function () {
    function ConversationSetupComponent(fb, uciService, globalService, dialog) {
        this.fb = fb;
        this.uciService = uciService;
        this.globalService = globalService;
        this.dialog = dialog;
        this.starringMessageChange = new EventEmitter();
        this.userSegmentDelete = new EventEmitter();
    }
    ConversationSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matDateBreakpoint = (window.innerWidth <= 1000) ? 1 : 2;
        this.resourceService = this.globalService.getResourceService();
        if (this.conversationForm) {
            // start date and end date value change
            this.conversationForm.get('startDate').valueChanges.subscribe(function (val) {
                if ((_this.conversationForm.value.endDate && moment(_this.conversationForm.value.endDate).isBefore(moment(val))) || !val) {
                    _this.conversationForm.get('endDate').patchValue(null);
                }
                var tempDate = moment(val).format('YYYY-MM-DD');
                _this.endMinDate = new Date(tempDate);
            });
            this.conversationForm.get('startingMessage').valueChanges
                .pipe(debounceTime(1000))
                .subscribe(function (value) {
                _this.onStarringMessageChange();
            });
        }
    };
    ConversationSetupComponent.prototype.onStarringMessageChange = function () {
        this.starringMessageChange.emit({});
    };
    ConversationSetupComponent.prototype.onUserSegmentDelete = function (index) {
        this.userSegmentDelete.emit(index);
    };
    ConversationSetupComponent.ɵfac = function ConversationSetupComponent_Factory(t) { return new (t || ConversationSetupComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(GlobalService), ɵɵdirectiveInject(MatDialog)); };
    ConversationSetupComponent.ɵcmp = ɵɵdefineComponent({ type: ConversationSetupComponent, selectors: [["lib-conversation-setup"]], inputs: { conversationForm: "conversationForm", isStartingMessageExist: "isStartingMessageExist", startMinDate: "startMinDate", userSegments: "userSegments" }, outputs: { starringMessageChange: "starringMessageChange", userSegmentDelete: "userSegmentDelete" }, decls: 53, vars: 21, consts: [[1, "uci-container"], ["cols", "1", "rowHeight", "4rem"], ["colspan", "1", 1, "font-1-2", "font-weight-bold"], [1, "w-100", "text-left"], [3, "formGroup"], ["appearance", "outline", 1, "w-100"], [1, "asterisk", "icon", "asterisk-color"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 3, "placeholder"], ["matInput", "", "rows", "5", "name", "description", "formControlName", "description", 3, "placeholder"], ["matInput", "", "type", "text", "name", "name", "formControlName", "purpose", 3, "placeholder"], ["matInput", "", "type", "text", "name", "startingMessage", "formControlName", "startingMessage", 3, "placeholder"], [4, "ngIf"], ["rowHeight", "6rem", 3, "cols"], ["matInput", "", "formControlName", "startDate", 3, "matDatepicker", "min"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "endDate", 3, "matDatepicker", "min"], ["endPicker", ""], [1, ""], [1, "ui", "three", "column", "grid"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], [1, "ui", "fluid", "card"], [1, "content"], [1, "right", "floated", "icon", "trash", "delete-icon", 3, "click"], [1, "meta"]], template: function ConversationSetupComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "mat-grid-list", 1);
            ɵɵelementStart(2, "mat-grid-tile", 2);
            ɵɵelementStart(3, "div", 3);
            ɵɵtext(4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "form", 4);
            ɵɵelementStart(6, "mat-form-field", 5);
            ɵɵelementStart(7, "mat-label");
            ɵɵtext(8);
            ɵɵelementStart(9, "sup");
            ɵɵelement(10, "i", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(11, "input", 7);
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-form-field", 5);
            ɵɵelementStart(13, "mat-label");
            ɵɵtext(14);
            ɵɵelementEnd();
            ɵɵelementStart(15, "textarea", 8);
            ɵɵtext(16, "            ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(17, "mat-form-field", 5);
            ɵɵelementStart(18, "mat-label");
            ɵɵtext(19);
            ɵɵelementStart(20, "sup");
            ɵɵelement(21, "i", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(22, "input", 9);
            ɵɵelementEnd();
            ɵɵelementStart(23, "mat-form-field", 5);
            ɵɵelementStart(24, "mat-label");
            ɵɵtext(25);
            ɵɵelementStart(26, "sup");
            ɵɵelement(27, "i", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(28, "input", 10);
            ɵɵtemplate(29, ConversationSetupComponent_mat_error_29_Template, 2, 1, "mat-error", 11);
            ɵɵelementEnd();
            ɵɵelementStart(30, "mat-grid-list", 12);
            ɵɵelementStart(31, "mat-grid-tile");
            ɵɵelementStart(32, "div", 3);
            ɵɵelementStart(33, "mat-form-field", 5);
            ɵɵelementStart(34, "mat-label");
            ɵɵtext(35);
            ɵɵelementStart(36, "sup");
            ɵɵelement(37, "i", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(38, "input", 13);
            ɵɵelement(39, "mat-datepicker-toggle", 14);
            ɵɵelement(40, "mat-datepicker", null, 15);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(42, "mat-grid-tile");
            ɵɵelementStart(43, "div", 3);
            ɵɵelementStart(44, "mat-form-field", 5);
            ɵɵelementStart(45, "mat-label");
            ɵɵtext(46);
            ɵɵelementEnd();
            ɵɵelement(47, "input", 16);
            ɵɵelement(48, "mat-datepicker-toggle", 14);
            ɵɵelement(49, "mat-datepicker", null, 17);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(51, "div", 18);
            ɵɵtemplate(52, ConversationSetupComponent_ng_container_52_Template, 3, 1, "ng-container", 11);
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = ɵɵreference(41);
            var _r2 = ɵɵreference(50);
            ɵɵadvance(4);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.addConversation);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.conversationForm);
            ɵɵadvance(3);
            ɵɵtextInterpolate1("", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationName, " ");
            ɵɵadvance(3);
            ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterName);
            ɵɵadvance(3);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationDescription);
            ɵɵadvance(1);
            ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterDescription);
            ɵɵadvance(4);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationPurpose, " ");
            ɵɵadvance(3);
            ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterPurpose);
            ɵɵadvance(3);
            ɵɵtextInterpolate1("", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.startMessage, " ");
            ɵɵadvance(3);
            ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterMessage);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.isStartingMessageExist);
            ɵɵadvance(1);
            ɵɵproperty("cols", ctx.matDateBreakpoint);
            ɵɵadvance(5);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.startDate, " ");
            ɵɵadvance(3);
            ɵɵproperty("matDatepicker", _r1)("min", ctx.startMinDate);
            ɵɵadvance(1);
            ɵɵproperty("for", _r1);
            ɵɵadvance(7);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.endDate, " ");
            ɵɵadvance(1);
            ɵɵproperty("matDatepicker", _r2)("min", ctx.endMinDate);
            ɵɵadvance(1);
            ɵɵproperty("for", _r2);
            ɵɵadvance(4);
            ɵɵproperty("ngIf", ctx.userSegments && ctx.userSegments.length);
        } }, directives: [MatGridList, MatGridTile, ɵangular_packages_forms_forms_y, NgControlStatusGroup, ɵn, FormGroupDirective, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, NgIf, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatError, NgForOf], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.mat-column-action[_ngcontent-%COMP%]{width:5px}"] });
    return ConversationSetupComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConversationSetupComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-setup',
                templateUrl: './conversation-setup.component.html',
                styleUrls: ['./conversation-setup.component.scss']
            }]
    }], function () { return [{ type: FormBuilder }, { type: UciService }, { type: GlobalService }, { type: MatDialog }]; }, { conversationForm: [{
            type: Input
        }], isStartingMessageExist: [{
            type: Input
        }], startMinDate: [{
            type: Input
        }], userSegments: [{
            type: Input
        }], starringMessageChange: [{
            type: Output
        }], userSegmentDelete: [{
            type: Output
        }] }); })();

function AddLogicComponent_mat_grid_tile_23_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-grid-tile", 21);
    ɵɵelementStart(1, "div", 22);
    ɵɵelementStart(2, "a", 23);
    ɵɵlistener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_2_listener() { ɵɵrestoreView(_r6); var ctx_r5 = ɵɵnextContext(); return ctx_r5.manualDownload(); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "a", 24);
    ɵɵlistener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_4_listener() { ɵɵrestoreView(_r6); var ctx_r7 = ɵɵnextContext(); return ctx_r7.sampleODKDownload(); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("matTooltip", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.instructionManual);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.instructionManual, " ");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("matTooltip", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.sampleOdkForm);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.sampleOdkForm, " ");
} }
function AddLogicComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "small", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.fileErrorStatus);
} }
function AddLogicComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 26);
    ɵɵelement(2, "div", 27);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function AddLogicComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function AddLogicComponent_ng_template_33_Template_button_click_0_listener() { ɵɵrestoreView(_r9); var ctx_r8 = ɵɵnextContext(); return ctx_r8.onLogicAdd(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r4.logicForm.invalid);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r4.logicForm.get("id").value ? ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.update : ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.add, " ");
} }
var AddLogicComponent = /** @class */ (function () {
    function AddLogicComponent(uciService, fb, toasterService, globalService, dialogRef, data) {
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
    AddLogicComponent.prototype.initialize = function () {
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.logicForm = this.fb.group({
            id: [null],
            name: ['', Validators.required],
            description: [''],
            formId: ['', Validators.required]
        });
    };
    AddLogicComponent.prototype.patchValue = function (item) {
        this.logicForm.patchValue({
            id: item.id,
            name: item.name,
            description: item.description,
            formId: item.formID
        });
    };
    AddLogicComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    AddLogicComponent.prototype.onLogicAdd = function () {
        this.dialogRef.close(this.logicForm.value);
    };
    AddLogicComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        if (!event.target.files.length) {
            return;
        }
        var file = event.target.files[0];
        var obj = {
            form: file
        };
        this.logicForm.patchValue({ formId: '' });
        this.isModalLoaderShow = true;
        this.uciService.uploadFile(obj).subscribe(function (fileInfo) {
            if (fileInfo.data) {
                _this.logicForm.patchValue({ formId: fileInfo.data });
            }
            _this.isModalLoaderShow = false;
            _this.odkFileAlreadyExist = false;
        }, function (error) {
            _this.isModalLoaderShow = false;
            _this.odkFileAlreadyExist = true;
            _this.fileErrorStatus = error.status;
            if (error.result && error.result.error) {
                _this.toasterService.error(error.result.error);
            }
        });
    };
    AddLogicComponent.prototype.manualDownload = function () {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'UCI%20_%20ODK%20Instruction%20Manual.pdf', '_blank');
    };
    AddLogicComponent.prototype.sampleODKDownload = function () {
        window.open(this.globalService.getBlobUrl().replace('/player', '') + 'Sample_ODK.xlsx', '_blank');
    };
    AddLogicComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    };
    AddLogicComponent.ɵfac = function AddLogicComponent_Factory(t) { return new (t || AddLogicComponent)(ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(GlobalService), ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    AddLogicComponent.ɵcmp = ɵɵdefineComponent({ type: AddLogicComponent, selectors: [["lib-add-logic"]], decls: 37, vars: 15, consts: [[2, "background", "white", "padding", "20px"], [1, "uci-logic-container"], ["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline", 1, "w-100"], [1, "asterisk", "icon", "asterisk-color"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 3, "placeholder"], ["matInput", "", "rows", "3", "name", "description", "formControlName", "description", 3, "placeholder"], ["rowHeight", "3rem", 3, "cols", "resize"], ["colspan", "1", 1, "font-1-2"], [1, "w-100", "text-left"], ["colspan", "2", "class", "font-1-2 computer only", 4, "ngIf"], ["type", "file", "name", "file", "accept", ".xml", 1, "uci-file-input", 3, "change"], ["class", "text-danger", 4, "ngIf"], [1, "mobile", "only", "field", "text-right", "p-0"], [1, "mr-5", "sample-download", 3, "click"], [1, "sample-download", 3, "click"], ["align", "end"], [4, "ngIf", "ngIfElse"], ["modalBtn", ""], ["mat-stroked-button", "", 1, "action-button", 3, "click"], ["colspan", "2", 1, "font-1-2", "computer", "only"], [1, "w-100", "text-right"], [1, "mx-5", "sample-download", 3, "matTooltip", "click"], [1, "ml-1", "sample-download", 3, "matTooltip", "click"], [1, "text-danger"], ["mat-stroked-button", "", 1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], ["mat-stroked-button", "", 1, "action-button", 3, "disabled", "click"]], template: function AddLogicComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "section", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "h1", 2);
            ɵɵtext(3);
            ɵɵelementEnd();
            ɵɵelementStart(4, "mat-dialog-content");
            ɵɵelementStart(5, "form", 3);
            ɵɵelementStart(6, "mat-form-field", 4);
            ɵɵelementStart(7, "mat-label");
            ɵɵtext(8);
            ɵɵelementStart(9, "sup");
            ɵɵelement(10, "i", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(11, "input", 6);
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-form-field", 4);
            ɵɵelementStart(13, "mat-label");
            ɵɵtext(14);
            ɵɵelementEnd();
            ɵɵelement(15, "textarea", 7);
            ɵɵelementEnd();
            ɵɵelementStart(16, "div");
            ɵɵelementStart(17, "mat-grid-list", 8);
            ɵɵlistener("resize", function AddLogicComponent_Template_mat_grid_list_resize_17_listener($event) { return ctx.onResize($event); }, false, ɵɵresolveWindow);
            ɵɵelementStart(18, "mat-grid-tile", 9);
            ɵɵelementStart(19, "div", 10);
            ɵɵtext(20);
            ɵɵelementStart(21, "sup");
            ɵɵelement(22, "i", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(23, AddLogicComponent_mat_grid_tile_23_Template, 6, 4, "mat-grid-tile", 11);
            ɵɵelementEnd();
            ɵɵelementStart(24, "input", 12);
            ɵɵlistener("change", function AddLogicComponent_Template_input_change_24_listener($event) { return ctx.onFileUpload($event); });
            ɵɵelementEnd();
            ɵɵtemplate(25, AddLogicComponent_small_25_Template, 2, 1, "small", 13);
            ɵɵelementStart(26, "div", 14);
            ɵɵelementStart(27, "a", 15);
            ɵɵlistener("click", function AddLogicComponent_Template_a_click_27_listener() { return ctx.manualDownload(); });
            ɵɵtext(28);
            ɵɵelementEnd();
            ɵɵelementStart(29, "a", 16);
            ɵɵlistener("click", function AddLogicComponent_Template_a_click_29_listener() { return ctx.sampleODKDownload(); });
            ɵɵtext(30);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(31, "mat-dialog-actions", 17);
            ɵɵtemplate(32, AddLogicComponent_ng_container_32_Template, 3, 0, "ng-container", 18);
            ɵɵtemplate(33, AddLogicComponent_ng_template_33_Template, 2, 2, "ng-template", null, 19, ɵɵtemplateRefExtractor);
            ɵɵelementStart(35, "button", 20);
            ɵɵlistener("click", function AddLogicComponent_Template_button_click_35_listener() { return ctx.onCancel(); });
            ɵɵtext(36);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r3 = ɵɵreference(34);
            ɵɵadvance(3);
            ɵɵtextInterpolate1(" ", ctx.logicForm.get("id").value ? ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.updateConversationLogic : ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.addConversationLogic, " ");
            ɵɵadvance(2);
            ɵɵproperty("formGroup", ctx.logicForm);
            ɵɵadvance(3);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.name, " ");
            ɵɵadvance(3);
            ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterName);
            ɵɵadvance(3);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.description);
            ɵɵadvance(1);
            ɵɵpropertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterDescription);
            ɵɵadvance(2);
            ɵɵproperty("cols", ctx.breakpoint);
            ɵɵadvance(3);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.uploadOdkForm, " ");
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.breakpoint === 3);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.odkFileAlreadyExist);
            ɵɵadvance(3);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.instructionManual);
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.sampleOdkForm);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.isModalLoaderShow)("ngIfElse", _r3);
            ɵɵadvance(4);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.cancel, " ");
        } }, directives: [MatDialogTitle, MatDialogContent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, ɵn, FormGroupDirective, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, MatGridList, MatGridTile, NgIf, MatDialogActions, MatButton, MatTooltip], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .uci-logic-container{padding:20px}.uci-file-input[_ngcontent-%COMP%]{border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);line-height:1.21428571em;padding:.67857143em 1em;width:100%}.sample-download[_ngcontent-%COMP%]{text-decoration:underline!important;cursor:pointer!important}.mobile[_ngcontent-%COMP%]   .sample-download[_ngcontent-%COMP%]{font-size:.8rem}"] });
    return AddLogicComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddLogicComponent, [{
        type: Component,
        args: [{
                selector: 'lib-add-logic',
                templateUrl: './add-logic.component.html',
                styleUrls: ['./add-logic.component.scss'],
            }]
    }], function () { return [{ type: UciService }, { type: FormBuilder }, { type: ToasterService }, { type: GlobalService }, { type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

function LogicListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function LogicListComponent_button_7_Template_button_click_0_listener() { ɵɵrestoreView(_r5); var ctx_r4 = ɵɵnextContext(); return ctx_r4.openModel(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.btn == null ? null : ctx_r0.resourceService.frmelmnts.btn.addLogic, " ");
} }
function LogicListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-grid-list", 7);
    ɵɵelementStart(2, "div", 11);
    ɵɵelementStart(3, "div", 12);
    ɵɵelementStart(4, "div", 12);
    ɵɵelement(5, "img", 13);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 14);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 15);
    ɵɵlistener("click", function LogicListComponent_ng_container_9_Template_button_click_8_listener() { ɵɵrestoreView(_r7); var ctx_r6 = ɵɵnextContext(); return ctx_r6.openModel(); });
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(7);
    ɵɵtextInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.lbl == null ? null : ctx_r1.resourceService.frmelmnts.lbl.noLogic, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.btn == null ? null : ctx_r1.resourceService.frmelmnts.btn.addLogic, " ");
} }
function LogicListComponent_ng_template_10_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r8.resourceService.frmelmnts == null ? null : ctx_r8.resourceService.frmelmnts.lbl == null ? null : ctx_r8.resourceService.frmelmnts.lbl.step, "");
} }
function LogicListComponent_ng_template_10_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var i_r20 = ctx.index;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", i_r20 + 1, " ");
} }
function LogicListComponent_ng_template_10_th_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r10.resourceService.frmelmnts == null ? null : ctx_r10.resourceService.frmelmnts.lbl == null ? null : ctx_r10.resourceService.frmelmnts.lbl.name, "");
} }
function LogicListComponent_ng_template_10_td_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r21 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r21.name, " ");
} }
function LogicListComponent_ng_template_10_th_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r12.resourceService.frmelmnts == null ? null : ctx_r12.resourceService.frmelmnts.lbl == null ? null : ctx_r12.resourceService.frmelmnts.lbl.description, "");
} }
function LogicListComponent_ng_template_10_td_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r22 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r22.description, " ");
} }
function LogicListComponent_ng_template_10_th_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.action, "");
} }
function LogicListComponent_ng_template_10_td_13_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 31);
    ɵɵelementStart(1, "button", 32);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "more_vert");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-menu", 33, 34);
    ɵɵelementStart(6, "button", 35);
    ɵɵlistener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_6_listener() { ɵɵrestoreView(_r27); var element_r23 = ctx.$implicit; var i_r24 = ctx.index; var ctx_r26 = ɵɵnextContext(2); return ctx_r26.openModel(element_r23, i_r24); });
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 35);
    ɵɵlistener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_8_listener() { ɵɵrestoreView(_r27); var element_r23 = ctx.$implicit; var i_r24 = ctx.index; var ctx_r28 = ɵɵnextContext(2); return ctx_r28.onDelete(element_r23, i_r24); });
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r25 = ɵɵreference(5);
    var ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r25);
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ctx_r15.resourceService.frmelmnts == null ? null : ctx_r15.resourceService.frmelmnts.lbl == null ? null : ctx_r15.resourceService.frmelmnts.lbl.edit, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r15.resourceService.frmelmnts == null ? null : ctx_r15.resourceService.frmelmnts.lbl == null ? null : ctx_r15.resourceService.frmelmnts.lbl.delete, " ");
} }
function LogicListComponent_ng_template_10_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 36);
} }
function LogicListComponent_ng_template_10_tr_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 37);
} }
function LogicListComponent_ng_template_10_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 38);
    ɵɵelementStart(1, "mat-card");
    ɵɵelementStart(2, "mat-card-content");
    ɵɵelementStart(3, "mat-grid-list", 39);
    ɵɵelementStart(4, "mat-grid-tile", 40);
    ɵɵelementStart(5, "div", 3);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-grid-tile", 41);
    ɵɵelementStart(8, "div", 42);
    ɵɵelementStart(9, "h5");
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 43);
    ɵɵelementStart(12, "button", 44);
    ɵɵelementStart(13, "mat-icon");
    ɵɵtext(14, "more_vert");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 45);
    ɵɵelementStart(16, "div", 46);
    ɵɵlistener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_16_listener() { ɵɵrestoreView(_r33); var botLogic_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r32 = ɵɵnextContext(2); return ctx_r32.openModel(botLogic_r30, i_r31); });
    ɵɵtext(17);
    ɵɵelementEnd();
    ɵɵelementStart(18, "div", 46);
    ɵɵlistener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_18_listener() { ɵɵrestoreView(_r33); var botLogic_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r34 = ɵɵnextContext(2); return ctx_r34.onDelete(botLogic_r30, i_r31); });
    ɵɵtext(19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(20, "mat-grid-tile", 40);
    ɵɵelementStart(21, "div", 47);
    ɵɵtext(22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(23, "mat-grid-tile", 48);
    ɵɵelementStart(24, "div", 3);
    ɵɵtext(25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var botLogic_r30 = ctx.$implicit;
    var ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance(6);
    ɵɵtextInterpolate(ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.name);
    ɵɵadvance(4);
    ɵɵtextInterpolate(botLogic_r30.name);
    ɵɵadvance(7);
    ɵɵtextInterpolate1(" ", ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.edit, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.delete, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.description);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", botLogic_r30.description, " ");
} }
function LogicListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "table", 17);
    ɵɵelementContainerStart(2, 18);
    ɵɵtemplate(3, LogicListComponent_ng_template_10_th_3_Template, 2, 1, "th", 19);
    ɵɵtemplate(4, LogicListComponent_ng_template_10_td_4_Template, 2, 1, "td", 20);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(5, 21);
    ɵɵtemplate(6, LogicListComponent_ng_template_10_th_6_Template, 2, 1, "th", 19);
    ɵɵtemplate(7, LogicListComponent_ng_template_10_td_7_Template, 2, 1, "td", 20);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(8, 22);
    ɵɵtemplate(9, LogicListComponent_ng_template_10_th_9_Template, 2, 1, "th", 19);
    ɵɵtemplate(10, LogicListComponent_ng_template_10_td_10_Template, 2, 1, "td", 20);
    ɵɵelementContainerEnd();
    ɵɵelementContainerStart(11, 23);
    ɵɵtemplate(12, LogicListComponent_ng_template_10_th_12_Template, 2, 1, "th", 19);
    ɵɵtemplate(13, LogicListComponent_ng_template_10_td_13_Template, 10, 3, "td", 24);
    ɵɵelementContainerEnd();
    ɵɵtemplate(14, LogicListComponent_ng_template_10_tr_14_Template, 1, 0, "tr", 25);
    ɵɵtemplate(15, LogicListComponent_ng_template_10_tr_15_Template, 1, 0, "tr", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 27);
    ɵɵtemplate(17, LogicListComponent_ng_template_10_div_17_Template, 26, 6, "div", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("dataSource", ctx_r3.datasource);
    ɵɵadvance(13);
    ɵɵproperty("matHeaderRowDef", ctx_r3.displayedColumns);
    ɵɵadvance(1);
    ɵɵproperty("matRowDefColumns", ctx_r3.displayedColumns);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.botLogics);
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
    LogicListComponent.ɵfac = function LogicListComponent_Factory(t) { return new (t || LogicListComponent)(ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(GlobalService), ɵɵdirectiveInject(MatDialog)); };
    LogicListComponent.ɵcmp = ɵɵdefineComponent({ type: LogicListComponent, selectors: [["lib-logic-list"]], inputs: { botLogics: "botLogics" }, outputs: { modify: "modify" }, decls: 12, vars: 4, consts: [[1, "uci-container"], ["cols", "2", "rowHeight", "4rem"], ["colspan", "1", 1, "font-1-2", "font-weight-bold"], [1, "w-100", "text-left"], ["colspan", "1", 1, "right", "aligned"], [1, "w-100", "text-right"], ["mat-raised-button", "", "class", "primary", 3, "click", 4, "ngIf"], ["cols", "1"], [4, "ngIf", "ngIfElse"], ["showTable", ""], ["mat-raised-button", "", 1, "primary", 3, "click"], [1, "text-center", 2, "margin", "auto", "padding", "2rem"], [1, "text-center"], ["alt", "Search Icon", "src", "assets/uci-console/images/empty.svg"], [1, "text-center", "mt-20"], ["mat-raised-button", "", 1, "mt-10", 3, "click"], [1, "computer", "only"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "action"], ["mat-cell", "", "class", "center aligned", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile", "only"], ["class", "mb-5", 4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "center", "aligned"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "uci-list-menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mb-5"], ["cols", "4", "rowHeight", "35"], ["colspan", "1"], ["colspan", "3", 1, "overflow-visible"], [1, "w-100", "d-flex", "justify-between", "align-middle"], ["suiDropdown", "", 1, "ui", "dropdown"], ["mat-icon-button", ""], ["suiDropdownMenu", "", 1, "menu"], [1, "item", 3, "click"], [1, "w-100", "wrap-text", "text-left"], ["colspan", "3"]], template: function LogicListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "mat-grid-list", 1);
            ɵɵelementStart(2, "mat-grid-tile", 2);
            ɵɵelementStart(3, "div", 3);
            ɵɵtext(4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-grid-tile", 4);
            ɵɵelementStart(6, "div", 5);
            ɵɵtemplate(7, LogicListComponent_button_7_Template, 2, 1, "button", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-grid-list", 7);
            ɵɵtemplate(9, LogicListComponent_ng_container_9_Template, 10, 2, "ng-container", 8);
            ɵɵtemplate(10, LogicListComponent_ng_template_10_Template, 18, 4, "ng-template", null, 9, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = ɵɵreference(11);
            ɵɵadvance(4);
            ɵɵtextInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationFlow);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.botLogics && ctx.botLogics.length);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.botLogics && ctx.botLogics.length <= 0)("ngIfElse", _r2);
        } }, directives: [MatGridList, MatGridTile, NgIf, MatButton, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, NgForOf, MatHeaderCell, MatCell, MatMenuTrigger, MatIcon, _MatMenu, MatMenuItem, MatHeaderRow, MatRow, MatCard, MatCardContent, ɵbk, ɵbj, ɵbi], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.mat-column-action[_ngcontent-%COMP%]{width:5px}"] });
    return LogicListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LogicListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-logic-list',
                templateUrl: './logic-list.component.html',
                styleUrls: ['./logic-list.component.scss']
            }]
    }], function () { return [{ type: UciService }, { type: GlobalService }, { type: MatDialog }]; }, { botLogics: [{
            type: Input
        }], modify: [{
            type: Output
        }] }); })();

var _c0$2 = ["verifyAllModal"];
var _c1 = ["horizontalStepper"];
var _c2 = ["verticalStepper"];
function ConversationAddComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "lib-conversation-setup", 17);
    ɵɵlistener("starringMessageChange", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_starringMessageChange_1_listener() { ɵɵrestoreView(_r13); var ctx_r12 = ɵɵnextContext(2); return ctx_r12.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { ɵɵrestoreView(_r13); var ctx_r14 = ɵɵnextContext(2); return ctx_r14.onUserSegmentDelete($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("conversationForm", ctx_r2.conversationForm)("startMinDate", ctx_r2.startMinDate)("userSegments", ctx_r2.userSegments)("isStartingMessageExist", ctx_r2.isStartingMessageExist);
} }
function ConversationAddComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵelementStart(1, "lib-logic-list", 19);
    ɵɵlistener("modify", function ConversationAddComponent_div_1_div_8_Template_lib_logic_list_modify_1_listener($event) { ɵɵrestoreView(_r16); var ctx_r15 = ɵɵnextContext(2); return ctx_r15.onBotLogicModify($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("botLogics", ctx_r3.botLogics);
} }
function ConversationAddComponent_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 20);
    ɵɵelementStart(2, "button", 21);
    ɵɵlistener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_2_listener() { ɵɵrestoreView(_r18); var ctx_r17 = ɵɵnextContext(2); return ctx_r17.onAddCancel(); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 22);
    ɵɵlistener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_4_listener() { ɵɵrestoreView(_r18); var ctx_r19 = ɵɵnextContext(2); return ctx_r19.nextStep(); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.cancel, " ");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r4.conversationForm.invalid || ctx_r4.isStartingMessageExist);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.next, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r26); var ctx_r25 = ɵɵnextContext(3); return ctx_r25.backToStepOne(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r20.resourceService.frmelmnts == null ? null : ctx_r20.resourceService.frmelmnts.btn == null ? null : ctx_r20.resourceService.frmelmnts.btn.back, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_button_2_Template_button_click_0_listener() { ɵɵrestoreView(_r28); var ctx_r27 = ɵɵnextContext(3); return ctx_r27.openItemsVerifyModal(false); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = ɵɵnextContext(3);
    ɵɵproperty("disabled", !ctx_r21.isCheckedTermCondition || !ctx_r21.botLogics.length);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r21.resourceService.frmelmnts == null ? null : ctx_r21.resourceService.frmelmnts.btn == null ? null : ctx_r21.resourceService.frmelmnts.btn.save, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 31);
    ɵɵelement(2, "div", 32);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template_button_click_0_listener() { ɵɵrestoreView(_r30); var ctx_r29 = ɵɵnextContext(3); return ctx_r29.conversationId ? ctx_r29.onSubmit(true) : ctx_r29.openItemsVerifyModal(true); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = ɵɵnextContext(3);
    ɵɵproperty("disabled", !ctx_r24.isCheckedTermCondition || !ctx_r24.botLogics.length);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r24.conversationId ? ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.update : ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.submit, " ");
} }
function ConversationAddComponent_div_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    var _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, ConversationAddComponent_div_1_ng_template_11_button_1_Template, 2, 1, "button", 24);
    ɵɵtemplate(2, ConversationAddComponent_div_1_ng_template_11_button_2_Template, 2, 2, "button", 25);
    ɵɵtemplate(3, ConversationAddComponent_div_1_ng_template_11_ng_container_3_Template, 3, 0, "ng-container", 11);
    ɵɵtemplate(4, ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template, 2, 2, "ng-template", null, 26, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 23);
    ɵɵelementStart(7, "mat-checkbox", 27);
    ɵɵlistener("ngModelChange", function ConversationAddComponent_div_1_ng_template_11_Template_mat_checkbox_ngModelChange_7_listener($event) { ɵɵrestoreView(_r32); var ctx_r31 = ɵɵnextContext(2); return ctx_r31.isCheckedTermCondition = $event; });
    ɵɵelementStart(8, "mat-label", 28);
    ɵɵelementStart(9, "a", 29);
    ɵɵtext(10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r23 = ɵɵreference(5);
    var ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.isLoaderShow);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.isLoaderShow);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.isLoaderShow)("ngIfElse", _r23);
    ɵɵadvance(4);
    ɵɵproperty("color", "primary")("ngModel", ctx_r6.isCheckedTermCondition);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r6.resourceService.frmelmnts == null ? null : ctx_r6.resourceService.frmelmnts.lbl == null ? null : ctx_r6.resourceService.frmelmnts.lbl.aggreeTc, " ");
} }
function ConversationAddComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵelementStart(1, "lib-conversation-setup", 17);
    ɵɵlistener("starringMessageChange", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_starringMessageChange_1_listener() { ɵɵrestoreView(_r34); var ctx_r33 = ɵɵnextContext(2); return ctx_r33.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { ɵɵrestoreView(_r34); var ctx_r35 = ɵɵnextContext(2); return ctx_r35.onUserSegmentDelete($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("conversationForm", ctx_r8.conversationForm)("startMinDate", ctx_r8.startMinDate)("userSegments", ctx_r8.userSegments)("isStartingMessageExist", ctx_r8.isStartingMessageExist);
} }
function ConversationAddComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 20);
    ɵɵelementStart(2, "button", 21);
    ɵɵlistener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_2_listener() { ɵɵrestoreView(_r37); var ctx_r36 = ɵɵnextContext(2); return ctx_r36.onAddCancel(); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 22);
    ɵɵlistener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_4_listener() { ɵɵrestoreView(_r37); var ctx_r38 = ɵɵnextContext(2); return ctx_r38.nextStep(); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.cancel, " ");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r9.conversationForm.invalid || ctx_r9.isStartingMessageExist);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.next, " ");
} }
function ConversationAddComponent_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵelementStart(1, "lib-logic-list", 19);
    ɵɵlistener("modify", function ConversationAddComponent_div_1_div_20_Template_lib_logic_list_modify_1_listener($event) { ɵɵrestoreView(_r40); var ctx_r39 = ɵɵnextContext(2); return ctx_r39.onBotLogicModify($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("botLogics", ctx_r10.botLogics);
} }
function ConversationAddComponent_div_1_div_21_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_button_2_Template_button_click_0_listener() { ɵɵrestoreView(_r47); var ctx_r46 = ɵɵnextContext(3); return ctx_r46.backToStepOne(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r41 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r41.resourceService.frmelmnts == null ? null : ctx_r41.resourceService.frmelmnts.btn == null ? null : ctx_r41.resourceService.frmelmnts.btn.back, " ");
} }
function ConversationAddComponent_div_1_div_21_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r49 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r49); var ctx_r48 = ɵɵnextContext(3); return ctx_r48.openItemsVerifyModal(false); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r42 = ɵɵnextContext(3);
    ɵɵproperty("disabled", !ctx_r42.isCheckedTermCondition || !ctx_r42.botLogics.length);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r42.resourceService.frmelmnts == null ? null : ctx_r42.resourceService.frmelmnts.btn == null ? null : ctx_r42.resourceService.frmelmnts.btn.save, " ");
} }
function ConversationAddComponent_div_1_div_21_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 31);
    ɵɵelement(2, "div", 32);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function ConversationAddComponent_div_1_div_21_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r51 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function ConversationAddComponent_div_1_div_21_ng_template_5_Template_button_click_0_listener() { ɵɵrestoreView(_r51); var ctx_r50 = ɵɵnextContext(3); return ctx_r50.conversationId ? ctx_r50.onSubmit(true) : ctx_r50.openItemsVerifyModal(true); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r45 = ɵɵnextContext(3);
    ɵɵproperty("disabled", !ctx_r45.isCheckedTermCondition || !ctx_r45.botLogics.length);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r45.conversationId ? ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.update : ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.submit, " ");
} }
function ConversationAddComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    var _r53 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 23);
    ɵɵtemplate(2, ConversationAddComponent_div_1_div_21_button_2_Template, 2, 1, "button", 24);
    ɵɵtemplate(3, ConversationAddComponent_div_1_div_21_button_3_Template, 2, 2, "button", 25);
    ɵɵtemplate(4, ConversationAddComponent_div_1_div_21_ng_container_4_Template, 3, 0, "ng-container", 11);
    ɵɵtemplate(5, ConversationAddComponent_div_1_div_21_ng_template_5_Template, 2, 2, "ng-template", null, 26, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 23);
    ɵɵelementStart(8, "mat-checkbox", 27);
    ɵɵlistener("ngModelChange", function ConversationAddComponent_div_1_div_21_Template_mat_checkbox_ngModelChange_8_listener($event) { ɵɵrestoreView(_r53); var ctx_r52 = ɵɵnextContext(2); return ctx_r52.isCheckedTermCondition = $event; });
    ɵɵelementStart(9, "mat-label", 28);
    ɵɵelementStart(10, "a", 29);
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r44 = ɵɵreference(6);
    var ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r11.isLoaderShow);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r11.isLoaderShow);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r11.isLoaderShow)("ngIfElse", _r44);
    ɵɵadvance(4);
    ɵɵproperty("color", "primary")("ngModel", ctx_r11.isCheckedTermCondition);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r11.resourceService.frmelmnts == null ? null : ctx_r11.resourceService.frmelmnts.lbl == null ? null : ctx_r11.resourceService.frmelmnts.lbl.aggreeTc, " ");
} }
function ConversationAddComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵelementStart(3, "mat-horizontal-stepper", 5, 6);
    ɵɵelementStart(5, "mat-step", 7);
    ɵɵtemplate(6, ConversationAddComponent_div_1_div_6_Template, 2, 4, "div", 8);
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-step", 7);
    ɵɵtemplate(8, ConversationAddComponent_div_1_div_8_Template, 2, 1, "div", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 10);
    ɵɵtemplate(10, ConversationAddComponent_div_1_ng_container_10_Template, 6, 3, "ng-container", 11);
    ɵɵtemplate(11, ConversationAddComponent_div_1_ng_template_11_Template, 11, 7, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 13);
    ɵɵelementStart(14, "mat-vertical-stepper", 5, 14);
    ɵɵelementStart(16, "mat-step", 7);
    ɵɵtemplate(17, ConversationAddComponent_div_1_div_17_Template, 2, 4, "div", 8);
    ɵɵtemplate(18, ConversationAddComponent_div_1_div_18_Template, 6, 3, "div", 15);
    ɵɵelementEnd();
    ɵɵelementStart(19, "mat-step", 7);
    ɵɵtemplate(20, ConversationAddComponent_div_1_div_20_Template, 2, 1, "div", 9);
    ɵɵtemplate(21, ConversationAddComponent_div_1_div_21_Template, 12, 7, "div", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r5 = ɵɵreference(12);
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("linear", true);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationSetup);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.stepIndex === 1);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationFlow);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.stepIndex === 2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.stepIndex === 1)("ngIfElse", _r5);
    ɵɵadvance(4);
    ɵɵproperty("linear", true);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationSetup);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.stepIndex === 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.stepIndex === 1);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationFlow);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.stepIndex === 2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.stepIndex === 2);
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
    ConversationAddComponent.ɵfac = function ConversationAddComponent_Factory(t) { return new (t || ConversationAddComponent)(ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(GlobalService), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(MatDialog)); };
    ConversationAddComponent.ɵcmp = ɵɵdefineComponent({ type: ConversationAddComponent, selectors: [["lib-conversation-add"]], viewQuery: function ConversationAddComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$2, true);
            ɵɵviewQuery(_c1, true);
            ɵɵviewQuery(_c2, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.verifyAllModal = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.horizontalStepper = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.verticalStepper = _t.first);
        } }, decls: 2, vars: 2, consts: [[3, "ngSwitch"], ["class", "uci-add-container", 4, "ngSwitchCase"], [1, "uci-add-container"], [1, "computer", "only", "d-flex", "align-items-baseline", "justify-content-between"], [1, "col-3"], [1, "background-transparent", 3, "linear"], ["horizontalStepper", ""], [3, "label"], ["class", "step1-wrapper", 4, "ngIf"], ["class", "step2-wrapper", 4, "ngIf"], [1, "col-1", "text-right"], [4, "ngIf", "ngIfElse"], ["stp2_btn", ""], [1, "mobile", "only"], ["verticalStepper", ""], [4, "ngIf"], [1, "step1-wrapper"], [3, "conversationForm", "startMinDate", "userSegments", "isStartingMessageExist", "starringMessageChange", "userSegmentDelete"], [1, "step2-wrapper"], [3, "botLogics", "modify"], [1, "right-floated", "pt-0"], ["mat-raised-button", "", 1, "mr-10", 3, "click"], ["mat-raised-button", "", 1, "uci-action-button", 3, "disabled", "click"], [1, "pt-0"], ["mat-raised-button", "", "class", "mr-10", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "mr-10 primary", 3, "disabled", "click", 4, "ngIf"], ["submitBtn1", ""], ["name", "isCheckedTermCondition", 3, "color", "ngModel", "ngModelChange"], [1, "font-weight-normal", "t-and-c-title"], ["href", "https://diksha.gov.in/term-of-use.html", "target", "_blank", 1, "tc-tag"], ["mat-raised-button", "", 1, "mr-10", "primary", 3, "disabled", "click"], [1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"]], template: function ConversationAddComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, ConversationAddComponent_div_1_Template, 22, 14, "div", 1);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            ɵɵproperty("ngSwitch", ctx.currentViewState);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "ADD_CONVERSATION");
        } }, directives: [NgSwitch, NgSwitchCase, MatHorizontalStepper, MatStep, NgIf, MatVerticalStepper, ConversationSetupComponent, LogicListComponent, MatButton, MatCheckbox, NgControlStatus, NgModel, MatLabel], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .mat-horizontal-stepper-header{pointer-events:none}  .mat-vertical-stepper-header{pointer-events:none}.filter_search[_ngcontent-%COMP%]{border-radius:25px!important}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.w-50-px[_ngcontent-%COMP%]{width:50px!important}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.ui.form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-weight:400}.action-dropdown[_ngcontent-%COMP%]{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{cursor:pointer}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#f6f6f6}.steps[_ngcontent-%COMP%]{width:20px;height:20px;overflow:hidden;border:1px solid #777;border-radius:10px;display:flex;align-items:center;justify-content:center;background-color:#e2e2e2;color:#000;margin-right:.7rem;font-size:.75rem}.font-0-75[_ngcontent-%COMP%]{font-size:.75rem}.line[_ngcontent-%COMP%]{background-color:#777;width:25%;height:1px}.blue-bg-white-text[_ngcontent-%COMP%]{background-color:#0c5593!important;color:#fff!important}.green-bg-white-text[_ngcontent-%COMP%]{background-color:#3c763d!important;color:#fff!important}.w-25-per[_ngcontent-%COMP%]{width:25%}.delete-icon[_ngcontent-%COMP%]{color:red;font-size:1.5rem}.delete-icon-sec[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]:disabled{background:#89cff0;border-color:#89cff0}.t-and-c-title[_ngcontent-%COMP%]{cursor:pointer!important}.t-and-c-title[_ngcontent-%COMP%]:hover{color:#89cff0!important}.sb-modal.ui.modal[_ngcontent-%COMP%]{box-shadow:none!important}.sb-modal.ui.modal.normal[_ngcontent-%COMP%]{max-width:45rem;height:0!important}.line-height[_ngcontent-%COMP%]{line-height:normal}.allCheckBtn[_ngcontent-%COMP%]{position:absolute;left:1rem}.text-danger[_ngcontent-%COMP%]{color:red!important}.text-success[_ngcontent-%COMP%]{color:green!important}.circular-button[_ngcontent-%COMP%]{height:30px;width:30px;display:flex;align-items:center;justify-content:center}.action-button[_ngcontent-%COMP%]{min-width:95px;border-radius:50px;color:#fff}.tc-tag[_ngcontent-%COMP%]{text-decoration:none}.step2-wrapper[_ngcontent-%COMP%]{min-height:300px}"] });
    return ConversationAddComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConversationAddComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-add',
                templateUrl: './conversation-add.component.html',
                styleUrls: ['./conversation-add.component.scss'],
            }]
    }], function () { return [{ type: UciService }, { type: Router }, { type: ActivatedRoute }, { type: FormBuilder }, { type: GlobalService }, { type: ToasterService }, { type: MatDialog }]; }, { verifyAllModal: [{
            type: ViewChild,
            args: ['verifyAllModal']
        }], horizontalStepper: [{
            type: ViewChild,
            args: ['horizontalStepper']
        }], verticalStepper: [{
            type: ViewChild,
            args: ['verticalStepper']
        }] }); })();

function UserSegmentListComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 21);
    ɵɵelementStart(1, "td", 22);
    ɵɵelementStart(2, "input", 23);
    ɵɵlistener("change", function UserSegmentListComponent_tr_31_Template_input_change_2_listener($event) { ɵɵrestoreView(_r5); var content_r2 = ctx.$implicit; var ctx_r4 = ɵɵnextContext(); return ctx_r4.onCheck($event, content_r2); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "td", 22);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "td", 22);
    ɵɵtext(10);
    ɵɵpipe(11, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var content_r2 = ctx.$implicit;
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("checked", !!ctx_r0.selectedUserSegmentMap[content_r2.id]);
    ɵɵadvance(2);
    ɵɵtextInterpolate(content_r2.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(content_r2 == null ? null : content_r2.category);
    ɵɵadvance(2);
    ɵɵtextInterpolate(content_r2 == null ? null : content_r2.count);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 5, content_r2 == null ? null : content_r2.updated_at));
} }
var _c0$3 = function (a0) { return { active: a0 }; };
function UserSegmentListComponent_div_36_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 25);
    ɵɵlistener("click", function UserSegmentListComponent_div_36_a_5_Template_a_click_0_listener() { ɵɵrestoreView(_r9); var page_r7 = ctx.$implicit; var ctx_r8 = ɵɵnextContext(2); return ctx_r8.navigateToPage(page_r7); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var page_r7 = ctx.$implicit;
    var ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0$3, ctx_r6.pager.currentPage === page_r7));
    ɵɵadvance(1);
    ɵɵtextInterpolate(page_r7);
} }
var _c1$1 = function (a0) { return { disabled: a0 }; };
function UserSegmentListComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 24);
    ɵɵelementStart(1, "a", 25);
    ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_1_listener() { ɵɵrestoreView(_r11); var ctx_r10 = ɵɵnextContext(); return ctx_r10.navigateToPage(1); });
    ɵɵtext(2, "First");
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 25);
    ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_3_listener() { ɵɵrestoreView(_r11); var ctx_r12 = ɵɵnextContext(); return ctx_r12.navigateToPage(ctx_r12.pager.currentPage - 1); });
    ɵɵtext(4, "Previous");
    ɵɵelementEnd();
    ɵɵtemplate(5, UserSegmentListComponent_div_36_a_5_Template, 2, 4, "a", 26);
    ɵɵelementStart(6, "a", 25);
    ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_6_listener() { ɵɵrestoreView(_r11); var ctx_r13 = ɵɵnextContext(); return ctx_r13.navigateToPage(ctx_r13.pager.currentPage + 1); });
    ɵɵtext(7, "Next");
    ɵɵelementEnd();
    ɵɵelementStart(8, "a", 25);
    ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_8_listener() { ɵɵrestoreView(_r11); var ctx_r14 = ɵɵnextContext(); return ctx_r14.navigateToPage(ctx_r14.pager.totalPages); });
    ɵɵtext(9, "Last");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c1$1, ctx_r1.pager.currentPage === 1));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c1$1, ctx_r1.pager.currentPage === 1));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.pager.pages);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c1$1, ctx_r1.pager.currentPage === ctx_r1.pager.totalPages));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c1$1, ctx_r1.pager.currentPage === ctx_r1.pager.totalPages));
} }
var UserSegmentListComponent = /** @class */ (function () {
    function UserSegmentListComponent(uciService, route, globalService) {
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
    UserSegmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService = this.globalService.getResourceService();
        this.selectedUserSegments.forEach(function (selectedUserSegment) {
            _this.selectedUserSegmentMap[selectedUserSegment.id] = selectedUserSegment;
        });
        this.getUserSegment();
    };
    UserSegmentListComponent.prototype.getUserSegment = function () {
        var _this = this;
        var param = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };
        if (this.search) {
            param.name = this.search;
            this.uciService.searchUserSegment(param).subscribe(function (data) { return _this.parseUserSegments(data); });
        }
        else {
            this.uciService.fetchUserSegment(param).subscribe(function (data) { return _this.parseUserSegments(data); });
        }
    };
    UserSegmentListComponent.prototype.parseUserSegments = function (data) {
        this.userSegments = data.data;
        this.pager.totalItems = data.total;
        this.pager.totalPages = Math.ceil(data.total / this.pager.pageSize);
        this.pager.pages = [];
        var i = 1;
        while (i <= Math.ceil(data.total / this.pager.pageSize)) {
            this.pager.pages.push(i);
            i++;
        }
    };
    UserSegmentListComponent.prototype.navigateToPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pageNumber = page;
        this.pager.currentPage = page;
        this.getUserSegment();
    };
    UserSegmentListComponent.prototype.getSearch = function () {
        this.getUserSegment();
    };
    UserSegmentListComponent.prototype.onCancel = function () {
        this.cancel.emit(false);
    };
    UserSegmentListComponent.prototype.onCheck = function (event, userSegment) {
        if (event.target.checked) {
            this.selectedUserSegmentMap[userSegment.id] = userSegment;
        }
        else {
            delete this.selectedUserSegmentMap[userSegment.id];
        }
    };
    UserSegmentListComponent.prototype.onAdd = function () {
        this.add.emit(Object.values(this.selectedUserSegmentMap));
    };
    UserSegmentListComponent.ɵfac = function UserSegmentListComponent_Factory(t) { return new (t || UserSegmentListComponent)(ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(GlobalService)); };
    UserSegmentListComponent.ɵcmp = ɵɵdefineComponent({ type: UserSegmentListComponent, selectors: [["lib-user-segment-list"]], inputs: { selectedUserSegments: "selectedUserSegments" }, outputs: { cancel: "cancel", add: "add" }, decls: 37, vars: 3, consts: [[1, "uci-container"], [1, "ui", "grid"], [1, "seven", "wide", "column", "font-1-2", "font-weight-bold"], [1, "five", "wide", "column"], [1, "right-floated", "pt-0"], [1, "sb-btn", "sb-btn-normal", "sb-btn-outline-primary", "mr-10", 3, "click"], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", 3, "click"], [1, "ten", "wide", "column"], [1, "sb-search-box", "b-0", "ml-0", "large"], ["id", "search-input-container", 1, "input-div", "relative"], ["alt", "Search Icon", "src", "assets/images/search-icon.svg", 1, "search", "icon"], ["id", "keyword", "name", "filter_search", "type", "text", "placeholder", "Search", 1, "sb-search-input", "disabled", "ng-untouched", "ng-pristine", 3, "ngModel", "ngModelChange"], [1, "sb-btn", "sb-btn-normal", "disabled", 3, "click"], [1, "ui", "single", "line", "upForReviewTable", "table"], [1, "one", "wide", "UpReviewTableHeader", "sorted", "bl-0", "w-50-px"], [1, "four", "wide", "UpReviewTableHeader", "sorted", "bl-0"], [1, "two", "wide", "UpReviewTableHeader", "sorted", "bl-0", "center", "aligned"], ["class", "UpForReviewListHover", 4, "ngFor", "ngForOf"], [1, "two", "wide", "column"], [1, "pb-10"], ["class", "ui pagination menu mt-10 right-floated pt-0", 4, "ngIf"], [1, "UpForReviewListHover"], [1, "center", "aligned"], ["type", "checkbox", 3, "checked", "change"], [1, "ui", "pagination", "menu", "mt-10", "right-floated", "pt-0"], [1, "item", 3, "ngClass", "click"], ["class", "item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"]], template: function UserSegmentListComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtext(3, " Select user segment ");
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 3);
            ɵɵelementStart(5, "div", 4);
            ɵɵelementStart(6, "button", 5);
            ɵɵlistener("click", function UserSegmentListComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
            ɵɵtext(7, " Cancel");
            ɵɵelementEnd();
            ɵɵelementStart(8, "button", 6);
            ɵɵlistener("click", function UserSegmentListComponent_Template_button_click_8_listener() { return ctx.onAdd(); });
            ɵɵtext(9, " Add");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "div", 1);
            ɵɵelementStart(11, "div", 7);
            ɵɵelementStart(12, "div", 8);
            ɵɵelementStart(13, "div", 9);
            ɵɵelement(14, "img", 10);
            ɵɵelementStart(15, "input", 11);
            ɵɵlistener("ngModelChange", function UserSegmentListComponent_Template_input_ngModelChange_15_listener($event) { return ctx.search = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(16, "button", 12);
            ɵɵlistener("click", function UserSegmentListComponent_Template_button_click_16_listener() { return ctx.getSearch(); });
            ɵɵtext(17, "Search");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(18, "table", 13);
            ɵɵelementStart(19, "thead");
            ɵɵelementStart(20, "tr");
            ɵɵelement(21, "th", 14);
            ɵɵelementStart(22, "th", 15);
            ɵɵtext(23, " Name ");
            ɵɵelementEnd();
            ɵɵelementStart(24, "th", 15);
            ɵɵtext(25, " Category ");
            ɵɵelementEnd();
            ɵɵelementStart(26, "th", 16);
            ɵɵtext(27, " Total members ");
            ɵɵelementEnd();
            ɵɵelementStart(28, "th", 16);
            ɵɵtext(29, " Last Updated On ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(30, "tbody");
            ɵɵtemplate(31, UserSegmentListComponent_tr_31_Template, 12, 7, "tr", 17);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(32, "div", 1);
            ɵɵelement(33, "div", 18);
            ɵɵelementStart(34, "div", 7);
            ɵɵelementStart(35, "div", 19);
            ɵɵtemplate(36, UserSegmentListComponent_div_36_Template, 10, 13, "div", 20);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(15);
            ɵɵproperty("ngModel", ctx.search);
            ɵɵadvance(16);
            ɵɵproperty("ngForOf", ctx.userSegments);
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.pager.pages);
        } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel, NgForOf, NgIf, ɵbi, NgClass], pipes: [DatePipe], styles: [".filter_search[_ngcontent-%COMP%]{border-radius:25px!important}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.w-50-px[_ngcontent-%COMP%]{width:50px!important}.font-1-5[_ngcontent-%COMP%]{font-size:1.5rem}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}"] });
    return UserSegmentListComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserSegmentListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-user-segment-list',
                templateUrl: './user-segment-list.component.html',
                styleUrls: ['./user-segment-list.component.css']
            }]
    }], function () { return [{ type: UciService }, { type: Router }, { type: GlobalService }]; }, { cancel: [{
            type: Output
        }], add: [{
            type: Output
        }], selectedUserSegments: [{
            type: Input
        }] }); })();

var UciGraphQlService = /** @class */ (function (_super) {
    __extends(UciGraphQlService, _super);
    function UciGraphQlService(http, globalService) {
        var _this = _super.call(this, http, globalService) || this;
        _this.http = http;
        _this.globalService = globalService;
        _this.globalService.baseUrl$.subscribe(function (value) {
            if (value) {
                _this.BASE_URL = value + '/uci-api/gql';
            }
        });
        return _this;
    }
    UciGraphQlService.prototype.getState = function () {
        return this.baseRequest({
            query: "query getListOfStates{\n            organisation(distinct_on:state){\n            state}}"
        });
    };
    UciGraphQlService.prototype.getDistrict = function (param) {
        return this.baseRequest({
            query: "query getListOfDistrictInState($state:String){\n            organisation(where:{state:{_eq:$state}},  distinct_on:district){\n            state\n            district}}",
            variables: param
        });
    };
    UciGraphQlService.prototype.getBlock = function (param) {
        return this.baseRequest({
            query: "query getListOfBlocksUnderDistrict($district:[String!],$state:String){\n            blocks: organisation(where:{state:{_eq:$state},district:{_in:$district}},distinct_on:block){\n            block\n            district\n            state\n            }\n            }",
            variables: param
        });
    };
    UciGraphQlService.prototype.getSchoolDetails = function (param) {
        return this.baseRequest({
            query: "query getListOfSchoolsUnderBlocksAndDistrict($district:[String!],$state:String,$block:[String!]){\n            schools:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}}){\n            school\n            school_code\n            block\n            district\n            state\n            }\n            }",
            variables: param
        });
    };
    UciGraphQlService.prototype.getClusters = function (param) {
        return this.baseRequest({
            query: "query getListOfClustersUnderBlockAndDistrict($block:[String!],$district:[String!],$state:String){\n            clusters:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}},distinct_on:cluster){\n            cluster\n            }\n            }",
            variables: param
        });
    };
    UciGraphQlService.prototype.getRole = function () {
        return this.baseRequest({
            query: "query fetchListOfRoles{\n                   role{\n                   id\n                   name\n                   }\n                   }"
        });
    };
    UciGraphQlService.prototype.getBoards = function () {
        return this.baseRequest({
            query: "query listOfBoards{\n                  board{\n                  id\n                  name}}"
        });
    };
    UciGraphQlService.prototype.baseRequest = function (body) {
        return this.http.post(this.BASE_URL, body, {});
    };
    UciGraphQlService.ɵfac = function UciGraphQlService_Factory(t) { return new (t || UciGraphQlService)(ɵɵinject(HttpClient), ɵɵinject(GlobalService)); };
    UciGraphQlService.ɵprov = ɵɵdefineInjectable({ token: UciGraphQlService, factory: UciGraphQlService.ɵfac, providedIn: 'root' });
    return UciGraphQlService;
}(BaseService));
/*@__PURE__*/ (function () { ɵsetClassMetadata(UciGraphQlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: GlobalService }]; }, null); })();

function UserSegmentAddComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 31);
    ɵɵelement(2, "div", 32);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function UserSegmentAddComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 33);
    ɵɵlistener("click", function UserSegmentAddComponent_ng_template_9_Template_button_click_0_listener() { ɵɵrestoreView(_r17); var ctx_r16 = ɵɵnextContext(); return ctx_r16.onAdd(); });
    ɵɵtext(1, " Add ");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.userSegmentForm.invalid);
} }
function UserSegmentAddComponent_sui_select_option_31_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r18 = ctx.$implicit;
    ɵɵproperty("value", option_r18.district);
} }
function UserSegmentAddComponent_sui_select_option_38_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r19 = ctx.$implicit;
    ɵɵproperty("value", option_r19.block);
} }
function UserSegmentAddComponent_div_40_sui_select_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r22 = ctx.$implicit;
    ɵɵproperty("value", option_r22.cluster);
} }
function UserSegmentAddComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelementStart(1, "label");
    ɵɵtext(2, "Cluster");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 16);
    ɵɵelementStart(4, "sui-multi-select", 35, 36);
    ɵɵtemplate(6, UserSegmentAddComponent_div_40_sui_select_option_6_Template, 1, 1, "sui-select-option", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var _r20 = ɵɵreference(5);
    var ctx_r7 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("options", ctx_r7.clusters);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", _r20.filteredOptions);
} }
function UserSegmentAddComponent_sui_select_option_47_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r23 = ctx.$implicit;
    ɵɵproperty("value", option_r23.school);
} }
function UserSegmentAddComponent_sui_select_option_55_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r24 = ctx.$implicit;
    ɵɵproperty("value", option_r24.name);
} }
function UserSegmentAddComponent_sui_select_option_62_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r25 = ctx.$implicit;
    ɵɵproperty("value", option_r25.name);
} }
function UserSegmentAddComponent_sui_select_option_70_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r26 = ctx.$implicit;
    ɵɵproperty("value", option_r26);
} }
var UserSegmentAddComponent = /** @class */ (function () {
    function UserSegmentAddComponent(uciService, fb, uciGraphQlService, globalService) {
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
    UserSegmentAddComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.userSegmentForm.get('district').valueChanges.subscribe(function (item) {
            if (item) {
                _this.userSegmentForm.get('block').patchValue('');
                _this.blocks = [];
                _this.userSegmentForm.get('cluster').patchValue('');
                _this.userSegmentForm.get('school').patchValue('');
                _this.schools = [];
                _this.clusters = [];
                _this.getUciBlock();
            }
        });
        this.userSegmentForm.get('block').valueChanges.subscribe(function (item) {
            if (item) {
                _this.userSegmentForm.get('cluster').patchValue('');
                _this.userSegmentForm.get('school').patchValue('');
                _this.schools = [];
                _this.clusters = [];
                _this.getUciCluster();
                _this.getUciSchoolDetails();
            }
        });
    };
    UserSegmentAddComponent.prototype.onCancel = function () {
        this.cancel.emit(false);
    };
    UserSegmentAddComponent.prototype.onAdd = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var _this = this;
        if (this.userSegmentForm.invalid) {
            return;
        }
        this.isLoaderShow = true;
        var formValue = this.userSegmentForm.value;
        var locationData = [];
        var blockData = [];
        var districtData = [];
        try {
            for (var _d = __values(this.schools), _e = _d.next(); !_e.done; _e = _d.next()) {
                var school = _e.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (blockData.length < formValue.block.length) {
            try {
                for (var _f = __values(this.blocks), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var block = _g.value;
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (districtData.length < formValue.district.length) {
            try {
                for (var _h = __values(this.districts), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var district = _j.value;
                    if (formValue.district.indexOf(district.district) !== -1 && districtData.indexOf(district.district) === -1) {
                        locationData.push(district);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        var param = {
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
        this.uciService.userSegmentQueryBuilder(param).subscribe(function (response) {
            if (response) {
                var items = __assign(__assign({}, response), { name: formValue.name, description: formValue.description });
                _this.uciService.createUserSegment({ data: items }).subscribe(function (data) {
                    _this.isLoaderShow = false;
                    _this.afterAdd(data.inserted);
                }, function (err) {
                    _this.isLoaderShow = false;
                });
            }
        }, function (error) {
            _this.isLoaderShow = false;
        });
    };
    UserSegmentAddComponent.prototype.afterAdd = function (data) {
        this.add.emit(data);
    };
    UserSegmentAddComponent.prototype.getUciState = function () {
        this.uciGraphQlService.getState().subscribe(function (res) {
        });
    };
    UserSegmentAddComponent.prototype.getUciDistrict = function () {
        var _this = this;
        var params = {
            state: this.state
        };
        this.uciGraphQlService.getDistrict(params).subscribe(function (res) {
            _this.districts = [];
            if (res && res.data && res.data.organisation && res.data.organisation.length) {
                _this.districts = res.data.organisation;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciBlock = function () {
        var _this = this;
        var formVal = this.userSegmentForm.value;
        var params = {
            state: this.state, district: formVal.district
        };
        this.uciGraphQlService.getBlock(params).subscribe(function (res) {
            _this.blocks = [];
            if (res && res.data && res.data.blocks && res.data.blocks.length) {
                _this.blocks = res.data.blocks;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciCluster = function () {
        var _this = this;
        var formVal = this.userSegmentForm.value;
        var params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getClusters(params).subscribe(function (res) {
            _this.clusters = [];
            if (res && res.data && res.data.clusters && res.data.clusters.length) {
                if (res.data.clusters[0].cluster) {
                    _this.clusters = res.data.clusters;
                }
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciSchoolDetails = function () {
        var _this = this;
        var formVal = this.userSegmentForm.value;
        var params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getSchoolDetails(params).subscribe(function (res) {
            _this.schools = [];
            if (res && res.data && res.data.schools && res.data.schools.length) {
                _this.schools = res.data.schools;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciRole = function () {
        var _this = this;
        this.uciGraphQlService.getRole().subscribe(function (res) {
            if (res && res.data && res.data.role && res.data.role.length) {
                _this.roles = res.data.role;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciBoard = function () {
        var _this = this;
        this.uciGraphQlService.getBoards().subscribe(function (res) {
            if (res && res.data && res.data.board && res.data.board.length) {
                _this.boards = res.data.board;
            }
        });
    };
    UserSegmentAddComponent.ɵfac = function UserSegmentAddComponent_Factory(t) { return new (t || UserSegmentAddComponent)(ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(UciGraphQlService), ɵɵdirectiveInject(GlobalService)); };
    UserSegmentAddComponent.ɵcmp = ɵɵdefineComponent({ type: UserSegmentAddComponent, selectors: [["lib-user-segment-add"]], outputs: { cancel: "cancel", add: "add" }, decls: 71, vars: 16, consts: [[1, "uci-add-segment"], [1, "ui", "grid"], [1, "nine", "wide", "column", "font-1-2", "font-weight-bold"], [1, "three", "wide", "column"], [1, "right-floated", "pt-0"], [1, "sb-btn", "sb-btn-normal", "sb-btn-outline-primary", "mr-10", 3, "click"], [4, "ngIf", "ngIfElse"], ["addBtn", ""], [1, "ten", "wide", "column", "font-1-2"], [1, "ui", "form", "user-segment-form", 3, "formGroup"], [1, "field"], [1, "asterisk", "icon", "asterisk-color"], ["type", "text", "name", "name", "placeholder", "Name", "formControlName", "name"], ["name", "description", "formControlName", "description", "placeholder", "Enter description"], [1, "ui", "divider", "mt-30"], [1, "two", "fields"], [1, "ui", "segment", "p-0"], ["formControlName", "district", 1, "selection", "w-100", 3, "options"], ["multiSelectDistrict", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "block", 1, "selection", "w-100", 3, "options"], ["multiSelectBlock", ""], ["class", "field", 4, "ngIf"], ["formControlName", "school", 1, "selection", "w-100", 3, "options"], ["multiSelectSchool", ""], ["formControlName", "role", 1, "selection", "w-100", 3, "options"], ["multiSelectRole", ""], ["formControlName", "board", 1, "selection", "w-100", 3, "options"], ["multiSelectBoard", ""], ["formControlName", "grade", 1, "selection", "w-100", 3, "options"], ["multiSelectGrade", ""], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", 3, "disabled", "click"], [3, "value"], ["formControlName", "cluster", 1, "selection", "w-100", 3, "options"], ["multiSelectCluster", ""]], template: function UserSegmentAddComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtext(3, " Create new segment ");
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 3);
            ɵɵelementStart(5, "div", 4);
            ɵɵelementStart(6, "button", 5);
            ɵɵlistener("click", function UserSegmentAddComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
            ɵɵtext(7, " Cancel ");
            ɵɵelementEnd();
            ɵɵtemplate(8, UserSegmentAddComponent_ng_container_8_Template, 3, 0, "ng-container", 6);
            ɵɵtemplate(9, UserSegmentAddComponent_ng_template_9_Template, 2, 1, "ng-template", null, 7, ɵɵtemplateRefExtractor);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "div", 8);
            ɵɵelementStart(12, "form", 9);
            ɵɵelementStart(13, "div", 10);
            ɵɵelementStart(14, "label");
            ɵɵtext(15, "Name ");
            ɵɵelementStart(16, "sup");
            ɵɵelement(17, "i", 11);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(18, "input", 12);
            ɵɵelementEnd();
            ɵɵelementStart(19, "div", 10);
            ɵɵelementStart(20, "label");
            ɵɵtext(21, "Description");
            ɵɵelementEnd();
            ɵɵelement(22, "textarea", 13);
            ɵɵelementEnd();
            ɵɵelement(23, "div", 14);
            ɵɵelementStart(24, "div", 15);
            ɵɵelementStart(25, "div", 10);
            ɵɵelementStart(26, "label");
            ɵɵtext(27, "District");
            ɵɵelementEnd();
            ɵɵelementStart(28, "div", 16);
            ɵɵelementStart(29, "sui-multi-select", 17, 18);
            ɵɵtemplate(31, UserSegmentAddComponent_sui_select_option_31_Template, 1, 1, "sui-select-option", 19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(32, "div", 10);
            ɵɵelementStart(33, "label");
            ɵɵtext(34, "Block");
            ɵɵelementEnd();
            ɵɵelementStart(35, "div", 16);
            ɵɵelementStart(36, "sui-multi-select", 20, 21);
            ɵɵtemplate(38, UserSegmentAddComponent_sui_select_option_38_Template, 1, 1, "sui-select-option", 19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(39, "div", 15);
            ɵɵtemplate(40, UserSegmentAddComponent_div_40_Template, 7, 2, "div", 22);
            ɵɵelementStart(41, "div", 10);
            ɵɵelementStart(42, "label");
            ɵɵtext(43, "School");
            ɵɵelementEnd();
            ɵɵelementStart(44, "div", 16);
            ɵɵelementStart(45, "sui-multi-select", 23, 24);
            ɵɵtemplate(47, UserSegmentAddComponent_sui_select_option_47_Template, 1, 1, "sui-select-option", 19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(48, "div", 15);
            ɵɵelementStart(49, "div", 10);
            ɵɵelementStart(50, "label");
            ɵɵtext(51, "Role");
            ɵɵelementEnd();
            ɵɵelementStart(52, "div", 16);
            ɵɵelementStart(53, "sui-multi-select", 25, 26);
            ɵɵtemplate(55, UserSegmentAddComponent_sui_select_option_55_Template, 1, 1, "sui-select-option", 19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(56, "div", 10);
            ɵɵelementStart(57, "label");
            ɵɵtext(58, "Board");
            ɵɵelementEnd();
            ɵɵelementStart(59, "div", 16);
            ɵɵelementStart(60, "sui-multi-select", 27, 28);
            ɵɵtemplate(62, UserSegmentAddComponent_sui_select_option_62_Template, 1, 1, "sui-select-option", 19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(63, "div", 15);
            ɵɵelementStart(64, "div", 10);
            ɵɵelementStart(65, "label");
            ɵɵtext(66, "Grade");
            ɵɵelementEnd();
            ɵɵelementStart(67, "div", 16);
            ɵɵelementStart(68, "sui-multi-select", 29, 30);
            ɵɵtemplate(70, UserSegmentAddComponent_sui_select_option_70_Template, 1, 1, "sui-select-option", 19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = ɵɵreference(10);
            var _r3 = ɵɵreference(30);
            var _r5 = ɵɵreference(37);
            var _r8 = ɵɵreference(46);
            var _r10 = ɵɵreference(54);
            var _r12 = ɵɵreference(61);
            var _r14 = ɵɵreference(69);
            ɵɵadvance(8);
            ɵɵproperty("ngIf", ctx.isLoaderShow)("ngIfElse", _r1);
            ɵɵadvance(4);
            ɵɵproperty("formGroup", ctx.userSegmentForm);
            ɵɵadvance(17);
            ɵɵproperty("options", ctx.districts);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", _r3.filteredOptions);
            ɵɵadvance(5);
            ɵɵproperty("options", ctx.blocks);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", _r5.filteredOptions);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.clusters.length);
            ɵɵadvance(5);
            ɵɵproperty("options", ctx.schools);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", _r8.filteredOptions);
            ɵɵadvance(6);
            ɵɵproperty("options", ctx.roles);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", _r10.filteredOptions);
            ɵɵadvance(5);
            ɵɵproperty("options", ctx.boards);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", _r12.filteredOptions);
            ɵɵadvance(6);
            ɵɵproperty("options", ctx.grade);
            ɵɵadvance(2);
            ɵɵproperty("ngForOf", _r14.filteredOptions);
        } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, ɵn, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ɵcs, ɵct, NgForOf, ɵcu], styles: [".font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.user-segment-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400!important}button[_ngcontent-%COMP%]:disabled{background:#89cff0;border-color:#89cff0}"] });
    return UserSegmentAddComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserSegmentAddComponent, [{
        type: Component,
        args: [{
                selector: 'lib-user-segment-add',
                templateUrl: './user-segment-add.component.html',
                styleUrls: ['./user-segment-add.component.css']
            }]
    }], function () { return [{ type: UciService }, { type: FormBuilder }, { type: UciGraphQlService }, { type: GlobalService }]; }, { cancel: [{
            type: Output
        }], add: [{
            type: Output
        }] }); })();

function ConversationSuccessComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵelementStart(2, "strong");
    ɵɵelementStart(3, "span", 11);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.botIdMessage, ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.botId);
} }
var ConversationSuccessComponent = /** @class */ (function () {
    function ConversationSuccessComponent(router, activatedRoute, globalService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.globalService = globalService;
        this.url = '';
        this.botId = '';
    }
    ConversationSuccessComponent.prototype.ngOnInit = function () {
        this.url = Helper.makBotUrl(this.activatedRoute.snapshot.queryParams.text || '', this.globalService.getBotPhoneNumber());
        this.botId = this.activatedRoute.snapshot.queryParams.botId || '';
        this.resourceService = this.globalService.getResourceService();
    };
    ConversationSuccessComponent.prototype.onCopy = function (id) {
        Helper.copyData(id);
    };
    ConversationSuccessComponent.prototype.onClose = function () {
        this.router.navigate(['/uci-admin']);
    };
    ConversationSuccessComponent.ɵfac = function ConversationSuccessComponent_Factory(t) { return new (t || ConversationSuccessComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(GlobalService)); };
    ConversationSuccessComponent.ɵcmp = ɵɵdefineComponent({ type: ConversationSuccessComponent, selectors: [["lib-conversation-success"]], decls: 20, vars: 7, consts: [["cols", "1"], [1, "pt-0", "d-flex", "flex-row", "justify-content-center"], [1, "w-25-per", "text-center", 2, "margin", "auto"], [1, "text-center", "mb-20"], ["alt", "Search Icon", "src", "assets/uci-console/images/success.svg"], [1, "text-center", "p-5"], ["id", "copyUrl"], ["class", "text-center p-5", 4, "ngIf"], [1, "mt-20"], ["mat-raised-button", "", 1, "uci-action-button", "mr-10", 3, "click"], ["mat-raised-button", "", 1, "", 3, "click"], ["id", "copyId"]], template: function ConversationSuccessComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-grid-list", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵelementStart(3, "div", 3);
            ɵɵelement(4, "img", 4);
            ɵɵelementEnd();
            ɵɵelementStart(5, "div", 5);
            ɵɵtext(6);
            ɵɵelementEnd();
            ɵɵelementStart(7, "div", 5);
            ɵɵtext(8);
            ɵɵelementStart(9, "strong");
            ɵɵelementStart(10, "span", 6);
            ɵɵtext(11);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(12, ConversationSuccessComponent_div_12_Template, 5, 2, "div", 7);
            ɵɵelementStart(13, "div", 8);
            ɵɵelementStart(14, "button", 9);
            ɵɵlistener("click", function ConversationSuccessComponent_Template_button_click_14_listener() { return ctx.onCopy("copyUrl"); });
            ɵɵtext(15);
            ɵɵelementEnd();
            ɵɵelementStart(16, "button", 9);
            ɵɵlistener("click", function ConversationSuccessComponent_Template_button_click_16_listener() { return ctx.onCopy("copyId"); });
            ɵɵtext(17);
            ɵɵelementEnd();
            ɵɵelementStart(18, "button", 10);
            ɵɵlistener("click", function ConversationSuccessComponent_Template_button_click_18_listener() { return ctx.onClose(); });
            ɵɵtext(19);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(6);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.botSuccess, " ");
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.botUrlMessage, " : ");
            ɵɵadvance(3);
            ɵɵtextInterpolate(ctx.url);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.botId);
            ɵɵadvance(3);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.copyUrl, " ");
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.copyId, " ");
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.close, " ");
        } }, directives: [MatGridList, NgIf, MatButton], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}"] });
    return ConversationSuccessComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConversationSuccessComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-success',
                templateUrl: './conversation-success.component.html',
                styleUrls: ['./conversation-success.component.scss']
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: GlobalService }]; }, null); })();

var PaginatorIntl = /** @class */ (function (_super) {
    __extends(PaginatorIntl, _super);
    function PaginatorIntl(globalService) {
        var _this = _super.call(this) || this;
        _this.globalService = globalService;
        _this.getRangeLabel = function (page, pageSize, length) {
            var _a, _b;
            // tslint:disable-next-line:max-line-length
            var of = _this.resourceService.frmelmnts && _this.resourceService.frmelmnts.lbl && _this.resourceService.frmelmnts.lbl.of ? (_b = (_a = _this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.of : 'of';
            if (length === 0 || pageSize === 0) {
                return '0 ' + of + ' ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;
            var endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
        };
        _this.globalService.resourceService$.subscribe(function (d) {
            _this.resourceService = d;
            _this.getPaginatorIntl();
            if (_this.globalService.getResourceService() && _this.globalService.getResourceService().languageSelected$) {
                _this.globalService.getResourceService().languageSelected$.subscribe(function (lang) {
                    _this.getPaginatorIntl();
                });
            }
        });
        return _this;
    }
    PaginatorIntl.prototype.getPaginatorIntl = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.itemsPerPageLabel = (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.itemsPerPageLabel;
        this.nextPageLabel = (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.nextPageLabel;
        this.previousPageLabel = (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.lbl) === null || _f === void 0 ? void 0 : _f.previousPageLabel;
        this.firstPageLabel = (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.lbl) === null || _h === void 0 ? void 0 : _h.firstPageLabel;
        this.lastPageLabel = (_k = (_j = this.resourceService.frmelmnts) === null || _j === void 0 ? void 0 : _j.lbl) === null || _k === void 0 ? void 0 : _k.lastPageLabel;
        this.changes.next();
        // this.getRangeLabel = this.getRangeLabel.bind(this);
    };
    PaginatorIntl.ɵfac = function PaginatorIntl_Factory(t) { return new (t || PaginatorIntl)(ɵɵinject(GlobalService)); };
    PaginatorIntl.ɵprov = ɵɵdefineInjectable({ token: PaginatorIntl, factory: PaginatorIntl.ɵfac, providedIn: 'root' });
    return PaginatorIntl;
}(MatPaginatorIntl));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginatorIntl, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: GlobalService }]; }, null); })();

function ExhaustReportComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 29);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var exhaustType_r21 = ctx.$implicit;
    ɵɵproperty("value", exhaustType_r21.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", exhaustType_r21.name, " ");
} }
function ExhaustReportComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Request ID");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r22 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r22.requestid, " ");
} }
function ExhaustReportComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Request Type");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r23 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r23.requesttype, " ");
} }
function ExhaustReportComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Request Date");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r24 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r24.requestdate, " ");
} }
function ExhaustReportComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Conversation ID");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r25 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r25.conversationid, " ");
} }
function ExhaustReportComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Start Date");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r26 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r26.startdate, " ");
} }
function ExhaustReportComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " End Date");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r27 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r27.enddate, " ");
} }
function ExhaustReportComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Status");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r28 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r28.status, " ");
} }
function ExhaustReportComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Report Link");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r29 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r29.reportlink, " ");
} }
function ExhaustReportComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 30);
    ɵɵtext(1, " Generated Date");
    ɵɵelementEnd();
} }
function ExhaustReportComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var element_r30 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r30.generateddate, " ");
} }
function ExhaustReportComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 32);
} }
function ExhaustReportComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 33);
} }
var _c0$4 = function () { return [5, 10, 20]; };
var ExhaustReportComponent = /** @class */ (function () {
    function ExhaustReportComponent(fb, uciService, router, activatedRoute, toasterService, globalService) {
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
    ExhaustReportComponent.prototype.ngOnInit = function () {
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
    };
    ExhaustReportComponent.prototype.getJobList = function () {
        this.uciService.getJobList(this.conversationId, {}).subscribe(function (data) {
            console.log('job list data');
        });
    };
    ExhaustReportComponent.prototype.getJobInfo = function () {
        this.uciService.getJobInfo(this.conversationId, {}).subscribe(function (data) {
            console.log('job Info');
        });
    };
    ExhaustReportComponent.prototype.submitExhaust = function () {
        var exhaustData = {
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
        this.uciService.submitExhaust(exhaustData).subscribe(function (data) {
            console.log('job Info');
        });
    };
    ExhaustReportComponent.ɵfac = function ExhaustReportComponent_Factory(t) { return new (t || ExhaustReportComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(GlobalService)); };
    ExhaustReportComponent.ɵcmp = ɵɵdefineComponent({ type: ExhaustReportComponent, selectors: [["lib-exhaust-report"]], decls: 56, vars: 11, consts: [[1, "header"], [3, "formGroup"], ["cols", "4", "rowHeight", "3rem"], ["colspan", "1"], [1, "w-100", "text-left"], ["appearance", "fill"], ["formControlName", "exhaustType"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ui", "left", "icon", "input"], [1, "calendar", "icon"], ["suiDatepicker", "", "placeholder", "Start Date", "formControlName", "startDate", 3, "pickerMode", "pickerUseNativeOnMobile"], ["suiDatepicker", "", "placeholder", "End Date", "formControlName", "endDate", 3, "pickerMode", "pickerUseNativeOnMobile"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "requestid"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "requesttype"], ["matColumnDef", "requestdate"], ["matColumnDef", "conversationid"], ["matColumnDef", "startdate"], ["matColumnDef", "enddate"], ["matColumnDef", "status"], ["matColumnDef", "reportlink"], ["matColumnDef", "generateddate"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ExhaustReportComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "form", 1);
            ɵɵelementStart(2, "mat-grid-list", 2);
            ɵɵelementStart(3, "mat-grid-tile", 3);
            ɵɵelementStart(4, "div", 4);
            ɵɵelementStart(5, "mat-form-field", 5);
            ɵɵelementStart(6, "mat-label");
            ɵɵtext(7, "Exhaust type");
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-select", 6);
            ɵɵtemplate(9, ExhaustReportComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-grid-tile", 3);
            ɵɵelementStart(11, "div", 4);
            ɵɵelementStart(12, "div", 8);
            ɵɵelement(13, "i", 9);
            ɵɵelement(14, "input", 10);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-grid-tile", 3);
            ɵɵelementStart(16, "div", 4);
            ɵɵelementStart(17, "div", 8);
            ɵɵelement(18, "i", 9);
            ɵɵelement(19, "input", 11);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-grid-tile", 3);
            ɵɵelementStart(21, "div", 4);
            ɵɵelementStart(22, "button", 12);
            ɵɵlistener("click", function ExhaustReportComponent_Template_button_click_22_listener() { return ctx.getJobList(); });
            ɵɵtext(23, "Submit");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(24, "div", 13);
            ɵɵelementStart(25, "table", 14);
            ɵɵelementContainerStart(26, 15);
            ɵɵtemplate(27, ExhaustReportComponent_th_27_Template, 2, 0, "th", 16);
            ɵɵtemplate(28, ExhaustReportComponent_td_28_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(29, 18);
            ɵɵtemplate(30, ExhaustReportComponent_th_30_Template, 2, 0, "th", 16);
            ɵɵtemplate(31, ExhaustReportComponent_td_31_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(32, 19);
            ɵɵtemplate(33, ExhaustReportComponent_th_33_Template, 2, 0, "th", 16);
            ɵɵtemplate(34, ExhaustReportComponent_td_34_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(35, 20);
            ɵɵtemplate(36, ExhaustReportComponent_th_36_Template, 2, 0, "th", 16);
            ɵɵtemplate(37, ExhaustReportComponent_td_37_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(38, 21);
            ɵɵtemplate(39, ExhaustReportComponent_th_39_Template, 2, 0, "th", 16);
            ɵɵtemplate(40, ExhaustReportComponent_td_40_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(41, 22);
            ɵɵtemplate(42, ExhaustReportComponent_th_42_Template, 2, 0, "th", 16);
            ɵɵtemplate(43, ExhaustReportComponent_td_43_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(44, 23);
            ɵɵtemplate(45, ExhaustReportComponent_th_45_Template, 2, 0, "th", 16);
            ɵɵtemplate(46, ExhaustReportComponent_td_46_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(47, 24);
            ɵɵtemplate(48, ExhaustReportComponent_th_48_Template, 2, 0, "th", 16);
            ɵɵtemplate(49, ExhaustReportComponent_td_49_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(50, 25);
            ɵɵtemplate(51, ExhaustReportComponent_th_51_Template, 2, 0, "th", 16);
            ɵɵtemplate(52, ExhaustReportComponent_td_52_Template, 2, 1, "td", 17);
            ɵɵelementContainerEnd();
            ɵɵtemplate(53, ExhaustReportComponent_tr_53_Template, 1, 0, "tr", 26);
            ɵɵtemplate(54, ExhaustReportComponent_tr_54_Template, 1, 0, "tr", 27);
            ɵɵelementEnd();
            ɵɵelement(55, "mat-paginator", 28);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.filterForm);
            ɵɵadvance(8);
            ɵɵproperty("ngForOf", ctx.exhaustTypes);
            ɵɵadvance(5);
            ɵɵproperty("pickerMode", "date")("pickerUseNativeOnMobile", false);
            ɵɵadvance(5);
            ɵɵproperty("pickerMode", "date")("pickerUseNativeOnMobile", false);
            ɵɵadvance(6);
            ɵɵproperty("dataSource", ctx.dataSource);
            ɵɵadvance(28);
            ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("pageSizeOptions", ɵɵpureFunction0(10, _c0$4));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, ɵn, FormGroupDirective, MatGridList, MatGridTile, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlName, NgForOf, ɵx, DefaultValueAccessor, ɵu, ɵv, ɵw, MatButton, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatPaginator, MatOption, MatHeaderCell, MatCell, MatHeaderRow, MatRow], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .uci-logic-container{padding:20px}.sample-download[_ngcontent-%COMP%]{text-decoration:underline!important;cursor:pointer!important}.mobile[_ngcontent-%COMP%]   .sample-download[_ngcontent-%COMP%]{font-size:.8rem}"] });
    return ExhaustReportComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExhaustReportComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exhaust-report',
                templateUrl: './exhaust-report.component.html',
                styleUrls: ['./exhaust-report.component.scss'],
            }]
    }], function () { return [{ type: FormBuilder }, { type: UciService }, { type: Router }, { type: ActivatedRoute }, { type: ToasterService }, { type: GlobalService }]; }, null); })();

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵmod = ɵɵdefineNgModule({ type: ComponentsModule });
    ComponentsModule.ɵinj = ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [
            GlobalService,
            UciService,
            ConfigService,
            UciGraphQlService,
            MatDatepickerModule,
            {
                provide: MatPaginatorIntl, useClass: PaginatorIntl
            }
        ], imports: [[
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
            ]] });
    return ComponentsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ComponentsModule, { declarations: [SidePanelComponent,
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
        ExhaustReportComponent], imports: [CommonModule,
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
        MatFormFieldModule], exports: [SidePanelComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

var LibEntryComponent = /** @class */ (function () {
    function LibEntryComponent(activatedRoute, uciService, configService, location, uciEventsService, telemetryUtils, globalService, router) {
        this.activatedRoute = activatedRoute;
        this.uciService = uciService;
        this.configService = configService;
        this.location = location;
        this.uciEventsService = uciEventsService;
        this.telemetryUtils = telemetryUtils;
        this.globalService = globalService;
        this.router = router;
    }
    LibEntryComponent.prototype.ngOnInit = function () {
        if (this.user) {
            this.globalService.setUser(this.user);
        }
        if (this.baseUrl) {
            this.globalService.setBaseUrl(this.baseUrl);
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
        if (this.router.url === '/uci-admin') {
            this.router.navigate(['uci-admin/home'], { skipLocationChange: true });
        }
    };
    LibEntryComponent.prototype.goBack = function () {
        this.location.back();
    };
    LibEntryComponent.prototype.close = function (event) {
        var eventAction = {
            action: 'DF_CLOSE'
        };
        this.uciEventsService.emitTelemetry(eventAction);
        this.telemetryUtils.logInteract(event, UciData.IPageName.LIB_ENTRY);
    };
    LibEntryComponent.ɵfac = function LibEntryComponent_Factory(t) { return new (t || LibEntryComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(UciService), ɵɵdirectiveInject(ConfigService), ɵɵdirectiveInject(Location), ɵɵdirectiveInject(UciEventsService), ɵɵdirectiveInject(TelemetryUtilsService), ɵɵdirectiveInject(GlobalService), ɵɵdirectiveInject(Router)); };
    LibEntryComponent.ɵcmp = ɵɵdefineComponent({ type: LibEntryComponent, selectors: [["lib-lib-entry"]], inputs: { user: "user", baseUrl: "baseUrl", blobUrl: "blobUrl", botPhoneNumber: "botPhoneNumber", resourceService: "resourceService" }, decls: 14, vars: 1, consts: [[1, "ui"], [1, "relative", "position"], [1, "py-8", "ua-btn-container", "ua-back-btn-container", "px-20", "z-index-2"], [1, "mx-20"], ["mat-raised-button", "", 3, "click"], [1, "uci-admin"], [1, "uci-admin-content"], [1, "uci-admin-left-panel", "ua-side-content", "z-index-2"], [1, "uci-admin-right-panel", "ua-main-content", "z-index-2"]], template: function LibEntryComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵelementStart(3, "div", 3);
            ɵɵelementStart(4, "button", 4);
            ɵɵlistener("click", function LibEntryComponent_Template_button_click_4_listener() { return ctx.goBack(); });
            ɵɵelementStart(5, "mat-icon");
            ɵɵtext(6, "keyboard_backspace");
            ɵɵelementEnd();
            ɵɵtext(7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "div", 5);
            ɵɵelementStart(9, "div", 6);
            ɵɵelementStart(10, "div", 7);
            ɵɵelement(11, "lib-side-panel");
            ɵɵelementEnd();
            ɵɵelementStart(12, "div", 8);
            ɵɵelement(13, "router-outlet");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(7);
            ɵɵtextInterpolate1(" ", (ctx.resourceService == null ? null : ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.back) || "Back", " ");
        } }, directives: [MatButton, MatIcon, SidePanelComponent, RouterOutlet], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.ua-btn-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#fff}.ua-btn-close[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#ef64af}.uci-admin[_ngcontent-%COMP%]{width:100%;min-height:100vh;position:relative;z-index:unset}.uci-admin-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr;margin:0 1.5rem}.uci-admin-left-panel[_ngcontent-%COMP%]{padding:1.5rem;position:relative;z-index:2}.uci-admin-right-panel[_ngcontent-%COMP%]{padding:1.5rem}.ui.loader[_ngcontent-%COMP%]:after{border-color:#fff transparent transparent!important}@media (max-width:768px){.uci-admin[_ngcontent-%COMP%]{padding:0 8px;height:100vh;overflow:auto;background:#e9e8d9}.uci-admin-left-panel[_ngcontent-%COMP%]{padding:1rem 0}.uci-admin-right-panel[_ngcontent-%COMP%]{padding:0 0 48px}}.font-weight-bold[_ngcontent-%COMP%]{font-weight:700}.font-weight-normal[_ngcontent-%COMP%]{font-weight:400}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.z-index-2[_ngcontent-%COMP%]{z-index:2!important}@media screen and (min-width:376px) and (max-width:768px){.uci-admin-content[_ngcontent-%COMP%]{grid-template-columns:1fr;margin:0}}@media screen and (min-width:320px) and (max-width:375px){.uci-admin-content[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(292px,1fr));margin:0}}"] });
    return LibEntryComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LibEntryComponent, [{
        type: Component,
        args: [{
                selector: 'lib-lib-entry',
                templateUrl: './lib-entry.component.html',
                styleUrls: ['./lib-entry.component.scss']
            }]
    }], function () { return [{ type: ActivatedRoute }, { type: UciService }, { type: ConfigService }, { type: Location }, { type: UciEventsService }, { type: TelemetryUtilsService }, { type: GlobalService }, { type: Router }]; }, { user: [{
            type: Input
        }], baseUrl: [{
            type: Input
        }], blobUrl: [{
            type: Input
        }], botPhoneNumber: [{
            type: Input
        }], resourceService: [{
            type: Input
        }] }); })();

var routes = [
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
var UciRoutingModule = /** @class */ (function () {
    function UciRoutingModule() {
    }
    UciRoutingModule.ɵmod = ɵɵdefineNgModule({ type: UciRoutingModule });
    UciRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function UciRoutingModule_Factory(t) { return new (t || UciRoutingModule)(); }, imports: [[
                RouterModule.forChild(routes),
                CommonModule
            ],
            RouterModule] });
    return UciRoutingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UciRoutingModule, { imports: [RouterModule, CommonModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UciRoutingModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    RouterModule.forChild(routes),
                    CommonModule
                ],
                exports: [RouterModule]
            }]
    }], null, null); })();

function provideCsModule() {
    return window['CsModule'];
}
var UciConsoleModule = /** @class */ (function () {
    function UciConsoleModule() {
    }
    UciConsoleModule.ɵmod = ɵɵdefineNgModule({ type: UciConsoleModule });
    UciConsoleModule.ɵinj = ɵɵdefineInjector({ factory: function UciConsoleModule_Factory(t) { return new (t || UciConsoleModule)(); }, providers: [UciEventsService, TelemetryUtilsService, ToasterService, { provide: 'CsModule', useFactory: provideCsModule }], imports: [[
                ComponentsModule,
                UciRoutingModule,
                MatButtonModule,
                MatIconModule
            ]] });
    return UciConsoleModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UciConsoleModule, { declarations: [LibEntryComponent], imports: [ComponentsModule,
        UciRoutingModule,
        MatButtonModule,
        MatIconModule], exports: [LibEntryComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(UciConsoleModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/*
 * Public API Surface of uci-console
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AddLogicComponent, LibEntryComponent, UciConsoleModule, UciEventsService, provideCsModule };
//# sourceMappingURL=samagra-x-uci-console.js.map

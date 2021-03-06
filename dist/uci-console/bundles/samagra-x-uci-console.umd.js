(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/common'), require('rxjs/operators'), require('rxjs'), require('@angular/common/http'), require('lodash'), require('@angular/router'), require('@angular/forms'), require('@angular/material/grid-list'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/table'), require('@angular/material/paginator'), require('@angular/material/menu'), require('@angular/material/card'), require('moment'), require('@angular/material/dialog'), require('ng2-semantic-ui-v9'), require('@angular/material/list'), require('@angular/material/divider'), require('@angular/material/checkbox'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/tooltip'), require('@angular/material/core'), require('@angular/material/select'), require('uuid')) :
    typeof define === 'function' && define.amd ? define('@samagra-x/uci-console', ['exports', '@angular/core', '@angular/material/icon', '@angular/material/button', '@angular/common', 'rxjs/operators', 'rxjs', '@angular/common/http', 'lodash', '@angular/router', '@angular/forms', '@angular/material/grid-list', '@angular/material/form-field', '@angular/material/input', '@angular/material/table', '@angular/material/paginator', '@angular/material/menu', '@angular/material/card', 'moment', '@angular/material/dialog', 'ng2-semantic-ui-v9', '@angular/material/list', '@angular/material/divider', '@angular/material/checkbox', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/tooltip', '@angular/material/core', '@angular/material/select', 'uuid'], factory) :
    (global = global || self, factory((global['samagra-x'] = global['samagra-x'] || {}, global['samagra-x']['uci-console'] = {}), global.ng.core, global.ng.material.icon, global.ng.material.button, global.ng.common, global.rxjs.operators, global.rxjs, global.ng.common.http, global.lodash, global.ng.router, global.ng.forms, global.ng.material.gridList, global.ng.material.formField, global.ng.material.input, global.ng.material.table, global.ng.material.paginator, global.ng.material.menu, global.ng.material.card, global.moment, global.ng.material.dialog, global.ng2SemanticUiV9, global.ng.material.list, global.ng.material.divider, global.ng.material.checkbox, global.ng.material.stepper, global.ng.material.datepicker, global.ng.material.tooltip, global.ng.material.core, global.ng.material.select, global.uuid));
}(this, (function (exports, core, icon, button, common, operators, rxjs, http, lodash, router, forms, gridList, formField, input, table, paginator, menu, card, moment, dialog, ng2SemanticUiV9, list, divider, checkbox, stepper, datepicker, tooltip, core$1, select, uuid) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var PipesModule = /** @class */ (function () {
        function PipesModule() {
        }
        PipesModule.??mod = core.????defineNgModule({ type: PipesModule });
        PipesModule.??inj = core.????defineInjector({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return PipesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.????setNgModuleScope(PipesModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () { core.??setClassMetadata(PipesModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        common.CommonModule
                    ],
                    exports: []
                }]
        }], null, null); })();

    var GlobalService = /** @class */ (function () {
        function GlobalService() {
            this.user = new rxjs.BehaviorSubject(undefined);
            this.user$ = this.user.asObservable();
            this.baseUrl = new rxjs.BehaviorSubject(undefined);
            this.blobUrl = new rxjs.BehaviorSubject(undefined);
            this.botPhoneNumber = new rxjs.BehaviorSubject('');
            this.resourceService = new rxjs.BehaviorSubject({});
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
        GlobalService.??fac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
        GlobalService.??prov = core.????defineInjectable({ token: GlobalService, factory: GlobalService.??fac, providedIn: 'root' });
        return GlobalService;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(GlobalService, [{
            type: core.Injectable,
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
            return this.http.get(url, { params: params, headers: headers }).pipe(operators.map(function (res) {
                return res.result;
            }), operators.catchError(function (err) {
                return _this.handleError(err);
            }));
        };
        BaseService.prototype.postRequest = function (url, data, headers) {
            var _this = this;
            if (data === void 0) { data = {}; }
            if (headers === void 0) { headers = {}; }
            headers = __assign(__assign({}, headers), this.getDefaultHeaders());
            return this.http.post(url, data, { headers: headers }).pipe(operators.map(function (res) {
                return res.result;
            }), operators.catchError(function (err) {
                return _this.handleError(err);
            }));
        };
        BaseService.prototype.handleError = function (error) {
            if (error instanceof ErrorEvent) {
                return rxjs.throwError(error.error.message);
            }
            console.log('=====', error, error.error);
            // this.toasterService.error(this.resourceService.messages.fmsg.m0091);
            return rxjs.throwError(error.error);
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
        BaseService.??fac = function BaseService_Factory(t) { return new (t || BaseService)(core.????inject(http.HttpClient), core.????inject(GlobalService)); };
        BaseService.??prov = core.????defineInjectable({ token: BaseService, factory: BaseService.??fac, providedIn: 'root' });
        return BaseService;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(BaseService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: http.HttpClient }, { type: GlobalService }]; }, null); })();

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
        UciService.??fac = function UciService_Factory(t) { return new (t || UciService)(core.????inject(http.HttpClient), core.????inject(GlobalService)); };
        UciService.??prov = core.????defineInjectable({ token: UciService, factory: UciService.??fac, providedIn: 'root' });
        return UciService;
    }(BaseService));
    /*@__PURE__*/ (function () { core.??setClassMetadata(UciService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: http.HttpClient }, { type: GlobalService }]; }, null); })();

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
                    userName: lodash.get(params, 'userName'),
                    categories: JSON.parse(lodash.get(params, 'categories'))
                };
                _this._config = obj;
            });
        };
        ConfigService.prototype.getConfig = function () {
            return this._config;
        };
        ConfigService.prototype.getCategories = function () {
            this.getParams = this.getConfig();
            return lodash.get(this.getParams, 'categories');
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
        ConfigService.??fac = function ConfigService_Factory(t) { return new (t || ConfigService)(core.????inject(router.ActivatedRoute), core.????inject(UciService)); };
        ConfigService.??prov = core.????defineInjectable({ token: ConfigService, factory: ConfigService.??fac, providedIn: 'root' });
        return ConfigService;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(ConfigService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: router.ActivatedRoute }, { type: UciService }]; }, null); })();

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
            this.telemetryEvent = new rxjs.Subject();
            this.actionEvent = new core.EventEmitter();
        }
        UciEventsService.prototype.emitTelemetry = function (event) {
            // console.log('Lib Event', event);
            if (!lodash.isEmpty(event)) {
                this.telemetryEvent.next(event);
            }
        };
        UciEventsService.??fac = function UciEventsService_Factory(t) { return new (t || UciEventsService)(); };
        UciEventsService.??prov = core.????defineInjectable({ token: UciEventsService, factory: UciEventsService.??fac, providedIn: 'root' });
        return UciEventsService;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(UciEventsService, [{
            type: core.Injectable,
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
            this.currentObj = lodash.last(context);
        };
        TelemetryUtilsService.prototype.uppendContext = function (data) {
            var matchedC = lodash.find(this._context, { id: data.id });
            if (!lodash.isEmpty(data) && !lodash.isEqual(data, matchedC)) {
                this._context.push(data);
            }
            this.currentObj = lodash.last(this._context);
        };
        TelemetryUtilsService.prototype.deleteContext = function (prevTopic) {
            var topic = lodash.find(this._context, prevTopic);
            if (topic) {
                this._context = lodash.reject(this._context, topic);
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
                            id: lodash.get(this.currentObj, 'id').toString(),
                            type: lodash.get(this.currentObj, 'type')
                        }
                    ] };
            }
            this.discussionEvents.emitTelemetry(impressionEvent);
        };
        TelemetryUtilsService.prototype.logInteract = function (event, pageId) {
            var target = lodash.get(event, 'currentTarget.attributes.id') || lodash.get(event, 'target.attributes.id') ||
                lodash.get(event, 'srcElement.attributes.id');
            var interactEvent = {
                eid: 'INTERACT',
                edata: {
                    id: lodash.get(target, 'value') || lodash.get(event, 'action'),
                    type: 'CLICK',
                    pageid: pageId
                }
            };
            if (this.currentObj) {
                var object = {
                    id: lodash.get(this.currentObj, 'id').toString(),
                    type: lodash.get(this.currentObj, 'type'),
                    ver: '1'
                };
                object['rollup'] = this._context.length > 1 ? this.getRollUp() : {};
                interactEvent.context = {
                    cdata: [{
                            id: lodash.get(this.currentObj, 'id').toString(),
                            type: lodash.get(this.currentObj, 'type')
                        }], object: object
                };
            }
            this.discussionEvents.emitTelemetry(interactEvent);
        };
        TelemetryUtilsService.prototype.getRollUp = function () {
            var rollUp = {};
            var data = lodash.reject(this._context, this.currentObj);
            if (this._context.length > 1) {
                data.forEach(function (element, index) {
                    // console.log('rollup', element);
                    rollUp['l' + (index + 1)] = element.toString();
                });
            }
            if (lodash.get(this.currentObj, 'type') !== 'Post') {
                return rollUp;
            }
            return {};
        };
        TelemetryUtilsService.??fac = function TelemetryUtilsService_Factory(t) { return new (t || TelemetryUtilsService)(core.????inject(UciEventsService), core.????inject(router.Router)); };
        TelemetryUtilsService.??prov = core.????defineInjectable({ token: TelemetryUtilsService, factory: TelemetryUtilsService.??fac, providedIn: 'root' });
        return TelemetryUtilsService;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(TelemetryUtilsService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: UciEventsService }, { type: router.Router }]; }, null); })();

    var _c0 = function (a0) { return { "menu-active": a0 }; };
    function SidePanelComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r4 = core.????getCurrentView();
        core.????elementStart(0, "li", 3);
        core.????listener("click", function SidePanelComponent_ul_0_li_1_Template_li_click_0_listener($event) { core.????restoreView(_r4); var d_r2 = ctx.$implicit; var ctx_r3 = core.????nextContext(2); return ctx_r3.navigate(d_r2.route, $event); });
        core.????elementStart(1, "a");
        core.????text(2);
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var d_r2 = ctx.$implicit;
        var ctx_r1 = core.????nextContext(2);
        core.????property("ngClass", core.????pureFunction1(2, _c0, ctx_r1.isActive(d_r2.route)));
        core.????advance(2);
        core.????textInterpolate(d_r2.label);
    } }
    function SidePanelComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "ul", 1);
        core.????template(1, SidePanelComponent_ul_0_li_1_Template, 3, 4, "li", 2);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.????nextContext();
        core.????advance(1);
        core.????property("ngForOf", ctx_r0.menu);
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
        SidePanelComponent.??fac = function SidePanelComponent_Factory(t) { return new (t || SidePanelComponent)(core.????directiveInject(router.Router), core.????directiveInject(UciService), core.????directiveInject(router.ActivatedRoute), core.????directiveInject(TelemetryUtilsService), core.????directiveInject(ConfigService), core.????directiveInject(GlobalService)); };
        SidePanelComponent.??cmp = core.????defineComponent({ type: SidePanelComponent, selectors: [["lib-side-panel"]], decls: 1, vars: 1, consts: [["class", "sb-sidebar-menu pl-0", 4, "ngIf"], [1, "sb-sidebar-menu", "pl-0"], ["class", "ua-sidebar-menu-list", "id", "d.route", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["id", "d.route", 1, "ua-sidebar-menu-list", 3, "ngClass", "click"]], template: function SidePanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.????template(0, SidePanelComponent_ul_0_Template, 2, 1, "ul", 0);
            } if (rf & 2) {
                core.????property("ngIf", !ctx.hideSidePanel);
            } }, directives: [common.NgIf, common.NgForOf, common.NgClass], styles: [".sb-sidebar-menu[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu[_ngcontent-%COMP%]   li.menu-active[_ngcontent-%COMP%]{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.openbtn[_ngcontent-%COMP%], .overlay-sidebar[_ngcontent-%COMP%]{display:none}@media (max-width:768px){.sb-sidebar-menu[_ngcontent-%COMP%]{display:none}.openbtn[_ngcontent-%COMP%]{display:inline;border:none;cursor:pointer;height:40px;width:40px;border-radius:16px;font-size:22px;background-color:#fff;box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:#0245fd}.overlay-sidebar[_ngcontent-%COMP%]{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu[_ngcontent-%COMP%]{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:#f5f6fa;color:rgba(0,0,0,.87);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.sidebar-menu__content[_ngcontent-%COMP%]{padding:0 1rem;height:100%}.closebtn[_ngcontent-%COMP%]{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.ua-sidebar-menu-list[_ngcontent-%COMP%]{margin-bottom:.5rem;position:relative;padding:.675rem;font-size:.875rem}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li.menu-active[_ngcontent-%COMP%]{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--white);font-weight:700;color:#002e50}}"] });
        return SidePanelComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(SidePanelComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-side-panel',
                    templateUrl: './side-panel.component.html',
                    styleUrls: ['./side-panel.component.scss']
                }]
        }], function () { return [{ type: router.Router }, { type: UciService }, { type: router.ActivatedRoute }, { type: TelemetryUtilsService }, { type: ConfigService }, { type: GlobalService }]; }, null); })();

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
        Helper.??fac = function Helper_Factory(t) { return new (t || Helper)(); };
        Helper.??prov = core.????defineInjectable({ token: Helper, factory: Helper.??fac, providedIn: 'root' });
        return Helper;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(Helper, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var _c0$1 = ["botTable"];
    function ConversationListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.lbl == null ? null : ctx_r1.resourceService.frmelmnts.lbl.name, "");
    } }
    function ConversationListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 30);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r18 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r18.name, " ");
    } }
    function ConversationListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r3.resourceService.frmelmnts == null ? null : ctx_r3.resourceService.frmelmnts.lbl == null ? null : ctx_r3.resourceService.frmelmnts.lbl.status, " ");
    } }
    function ConversationListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r19 = ctx.$implicit;
        core.????property("ngClass", "status-" + (element_r19.status ? element_r19.status.toLowerCase() : ""));
        core.????advance(1);
        core.????textInterpolate1(" ", element_r19.status, " ");
    } }
    function ConversationListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r5 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r5.resourceService.frmelmnts == null ? null : ctx_r5.resourceService.frmelmnts.lbl == null ? null : ctx_r5.resourceService.frmelmnts.lbl.description, "");
    } }
    function ConversationListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 30);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r20 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r20.description, " ");
    } }
    function ConversationListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r7 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r7.resourceService.frmelmnts == null ? null : ctx_r7.resourceService.frmelmnts.lbl == null ? null : ctx_r7.resourceService.frmelmnts.lbl.startingMessage, " ");
    } }
    function ConversationListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 30);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r21 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r21.startingMessage, " ");
    } }
    function ConversationListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r9 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.lbl == null ? null : ctx_r9.resourceService.frmelmnts.lbl.botUrl, " ");
    } }
    function ConversationListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
        var _r25 = core.????getCurrentView();
        core.????elementStart(0, "td", 30);
        core.????elementStart(1, "span", 32);
        core.????text(2);
        core.????elementEnd();
        core.????elementStart(3, "button", 33);
        core.????listener("click", function ConversationListComponent_td_30_Template_button_click_3_listener() { core.????restoreView(_r25); var i_r23 = ctx.index; var ctx_r24 = core.????nextContext(); return ctx_r24.onCopy("copyUrl-" + i_r23); });
        core.????text(4);
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var element_r22 = ctx.$implicit;
        var i_r23 = ctx.index;
        var ctx_r10 = core.????nextContext();
        core.????advance(1);
        core.????property("id", "copyUrl-" + i_r23);
        core.????advance(1);
        core.????textInterpolate(element_r22.url);
        core.????advance(2);
        core.????textInterpolate1(" ", ctx_r10.resourceService.frmelmnts == null ? null : ctx_r10.resourceService.frmelmnts.btn == null ? null : ctx_r10.resourceService.frmelmnts.btn.copy, " ");
    } }
    function ConversationListComponent_th_32_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r11 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r11.resourceService.frmelmnts == null ? null : ctx_r11.resourceService.frmelmnts.lbl == null ? null : ctx_r11.resourceService.frmelmnts.lbl.botId, "");
    } }
    function ConversationListComponent_td_33_Template(rf, ctx) { if (rf & 1) {
        var _r29 = core.????getCurrentView();
        core.????elementStart(0, "td", 30);
        core.????elementStart(1, "span", 32);
        core.????text(2);
        core.????elementEnd();
        core.????elementStart(3, "button", 33);
        core.????listener("click", function ConversationListComponent_td_33_Template_button_click_3_listener() { core.????restoreView(_r29); var i_r27 = ctx.index; var ctx_r28 = core.????nextContext(); return ctx_r28.onCopy("copyId-" + i_r27); });
        core.????text(4);
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var element_r26 = ctx.$implicit;
        var i_r27 = ctx.index;
        var ctx_r12 = core.????nextContext();
        core.????advance(1);
        core.????property("id", "copyId-" + i_r27);
        core.????advance(1);
        core.????textInterpolate(element_r26.id);
        core.????advance(2);
        core.????textInterpolate1(" ", ctx_r12.resourceService.frmelmnts == null ? null : ctx_r12.resourceService.frmelmnts.btn == null ? null : ctx_r12.resourceService.frmelmnts.btn.copy, " ");
    } }
    function ConversationListComponent_th_35_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r13 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r13.resourceService.frmelmnts == null ? null : ctx_r13.resourceService.frmelmnts.lbl == null ? null : ctx_r13.resourceService.frmelmnts.lbl.action, "");
    } }
    function ConversationListComponent_td_36_Template(rf, ctx) { if (rf & 1) {
        var _r34 = core.????getCurrentView();
        core.????elementStart(0, "td", 34);
        core.????elementStart(1, "button", 35);
        core.????elementStart(2, "mat-icon");
        core.????text(3, "more_vert");
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(4, "mat-menu", 36, 37);
        core.????elementStart(6, "button", 38);
        core.????listener("click", function ConversationListComponent_td_36_Template_button_click_6_listener() { core.????restoreView(_r34); var element_r30 = ctx.$implicit; var ctx_r33 = core.????nextContext(); return ctx_r33.onEdit(element_r30); });
        core.????text(7);
        core.????elementEnd();
        core.????elementStart(8, "button", 38);
        core.????listener("click", function ConversationListComponent_td_36_Template_button_click_8_listener() { core.????restoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r35 = core.????nextContext(); return ctx_r35.onDelete(element_r30, i_r31); });
        core.????text(9);
        core.????elementEnd();
        core.????elementStart(10, "button", 38);
        core.????listener("click", function ConversationListComponent_td_36_Template_button_click_10_listener() { core.????restoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r36 = core.????nextContext(); return ctx_r36.onStatusChange(element_r30, i_r31); });
        core.????text(11);
        core.????elementEnd();
        core.????elementStart(12, "button", 38);
        core.????listener("click", function ConversationListComponent_td_36_Template_button_click_12_listener() { core.????restoreView(_r34); var element_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r37 = core.????nextContext(); return ctx_r37.onReport(element_r30, i_r31); });
        core.????text(13);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var element_r30 = ctx.$implicit;
        var _r32 = core.????reference(5);
        var ctx_r14 = core.????nextContext();
        core.????advance(1);
        core.????property("matMenuTriggerFor", _r32);
        core.????advance(6);
        core.????textInterpolate1("", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.edit, " ");
        core.????advance(2);
        core.????textInterpolate1("", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.delete, " ");
        core.????advance(2);
        core.????textInterpolate1(" ", element_r30.status === "Live" ? ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.disable : ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.enable, " ");
        core.????advance(2);
        core.????textInterpolate1(" ", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.report, " ");
    } }
    function ConversationListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "tr", 39);
    } }
    function ConversationListComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "tr", 40);
    } }
    function ConversationListComponent_div_40_Template(rf, ctx) { if (rf & 1) {
        var _r43 = core.????getCurrentView();
        core.????elementStart(0, "div", 41);
        core.????elementStart(1, "mat-card");
        core.????elementStart(2, "mat-card-content");
        core.????elementStart(3, "mat-grid-list", 42);
        core.????elementStart(4, "mat-grid-tile", 2);
        core.????elementStart(5, "div", 3);
        core.????text(6);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(7, "mat-grid-tile", 43);
        core.????elementStart(8, "div", 44);
        core.????elementStart(9, "h5");
        core.????text(10);
        core.????elementEnd();
        core.????elementStart(11, "button", 35);
        core.????elementStart(12, "mat-icon");
        core.????text(13, "more_vert");
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(14, "mat-menu", 36, 45);
        core.????elementStart(16, "button", 38);
        core.????listener("click", function ConversationListComponent_div_40_Template_button_click_16_listener() { core.????restoreView(_r43); var chatBot_r39 = ctx.$implicit; var ctx_r42 = core.????nextContext(); return ctx_r42.onEdit(chatBot_r39); });
        core.????text(17);
        core.????elementEnd();
        core.????elementStart(18, "button", 38);
        core.????listener("click", function ConversationListComponent_div_40_Template_button_click_18_listener() { core.????restoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r44 = core.????nextContext(); return ctx_r44.onDelete(chatBot_r39, i_r40); });
        core.????text(19);
        core.????elementEnd();
        core.????elementStart(20, "button", 38);
        core.????listener("click", function ConversationListComponent_div_40_Template_button_click_20_listener() { core.????restoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r45 = core.????nextContext(); return ctx_r45.onStatusChange(chatBot_r39, i_r40); });
        core.????text(21);
        core.????elementEnd();
        core.????elementStart(22, "button", 38);
        core.????listener("click", function ConversationListComponent_div_40_Template_button_click_22_listener() { core.????restoreView(_r43); var chatBot_r39 = ctx.$implicit; var i_r40 = ctx.index; var ctx_r46 = core.????nextContext(); return ctx_r46.onReport(chatBot_r39, i_r40); });
        core.????text(23);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(24, "mat-grid-tile", 2);
        core.????elementStart(25, "div", 3);
        core.????text(26);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(27, "mat-grid-tile", 46);
        core.????elementStart(28, "div", 3);
        core.????text(29);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(30, "mat-grid-tile", 2);
        core.????elementStart(31, "div", 3);
        core.????text(32);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(33, "mat-grid-tile", 46);
        core.????elementStart(34, "div", 44);
        core.????elementStart(35, "span");
        core.????text(36);
        core.????elementEnd();
        core.????elementStart(37, "span");
        core.????elementStart(38, "button", 47);
        core.????text(39);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var chatBot_r39 = ctx.$implicit;
        var _r41 = core.????reference(15);
        var ctx_r17 = core.????nextContext();
        core.????advance(6);
        core.????textInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.name);
        core.????advance(4);
        core.????textInterpolate(chatBot_r39.name);
        core.????advance(1);
        core.????property("matMenuTriggerFor", _r41);
        core.????advance(6);
        core.????textInterpolate1("", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.edit, " ");
        core.????advance(2);
        core.????textInterpolate1("", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.delete, " ");
        core.????advance(2);
        core.????textInterpolate1(" ", chatBot_r39.status === "Live" ? ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.disable : ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.enable, " ");
        core.????advance(2);
        core.????textInterpolate1(" ", ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.report, " ");
        core.????advance(3);
        core.????textInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.description);
        core.????advance(3);
        core.????textInterpolate1(" ", chatBot_r39.description, " ");
        core.????advance(3);
        core.????textInterpolate(ctx_r17.resourceService.frmelmnts == null ? null : ctx_r17.resourceService.frmelmnts.lbl == null ? null : ctx_r17.resourceService.frmelmnts.lbl.startingMessage);
        core.????advance(4);
        core.????textInterpolate(chatBot_r39.startingMessage);
        core.????advance(2);
        core.????property("ngClass", "status-" + (chatBot_r39.status ? chatBot_r39.status.toLowerCase() : ""));
        core.????advance(1);
        core.????textInterpolate1(" ", chatBot_r39.status, " ");
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
        ConversationListComponent.??fac = function ConversationListComponent_Factory(t) { return new (t || ConversationListComponent)(core.????directiveInject(UciService), core.????directiveInject(router.Router), core.????directiveInject(GlobalService)); };
        ConversationListComponent.??cmp = core.????defineComponent({ type: ConversationListComponent, selectors: [["lib-conversation-list"]], viewQuery: function ConversationListComponent_Query(rf, ctx) { if (rf & 1) {
                core.????viewQuery(_c0$1, true);
            } if (rf & 2) {
                var _t;
                core.????queryRefresh(_t = core.????loadQuery()) && (ctx.botTable = _t.first);
            } }, decls: 43, vars: 12, consts: [[1, "uci-container"], ["cols", "2", "rowHeight", "4rem"], ["colspan", "1"], [1, "w-100", "text-left"], ["matInput", "", "type", "text", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter"], ["mat-button", "", "matSuffix", "", "mat-stroked-button", "", "aria-label", "search", 1, "uci-action-button", "computer", "only", 3, "click"], [1, "pb-10", "text-right", "w-100"], [1, "right-floated", "pt-0"], ["mat-raised-button", "", 1, "uci-action-button", 3, "click"], ["cols", "1"], ["mat-table", "", 1, "computer", "only", 3, "dataSource"], ["botTable", ""], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "startingMessage"], ["matColumnDef", "botUrl"], ["matColumnDef", "botId"], ["matColumnDef", "action"], ["mat-cell", "", "class", "center aligned", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile", "only"], ["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "uci-mat-pagination"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "ngClass"], [1, "hide", 3, "id"], ["mat-raised-button", "", 1, "uci-copy-button", 3, "click"], ["mat-cell", "", 1, "center", "aligned"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "uci-list-menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mb-5"], ["cols", "4", "rowHeight", "35"], ["colspan", "3", 1, "overflow-visible"], [1, "w-100", "d-flex", "justify-between", "align-middle"], ["menuMobile", "matMenu"], ["colspan", "3"], ["mat-flat-button", "", 1, "small-btn", 3, "ngClass"]], template: function ConversationListComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "div", 0);
                core.????elementStart(1, "mat-grid-list", 1);
                core.????elementStart(2, "mat-grid-tile", 2);
                core.????elementStart(3, "div", 3);
                core.????elementStart(4, "mat-form-field");
                core.????elementStart(5, "input", 4);
                core.????listener("ngModelChange", function ConversationListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.search = $event; })("keyup.enter", function ConversationListComponent_Template_input_keyup_enter_5_listener() { return ctx.getSearch(); });
                core.????elementEnd();
                core.????elementStart(6, "button", 5);
                core.????listener("click", function ConversationListComponent_Template_button_click_6_listener() { return ctx.getSearch(); });
                core.????text(7);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(8, "mat-grid-tile", 2);
                core.????elementStart(9, "div", 6);
                core.????elementStart(10, "div", 7);
                core.????elementStart(11, "button", 8);
                core.????listener("click", function ConversationListComponent_Template_button_click_11_listener() { return ctx.onAddNew(); });
                core.????text(12);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(13, "mat-grid-list", 9);
                core.????elementStart(14, "table", 10, 11);
                core.????elementContainerStart(16, 12);
                core.????template(17, ConversationListComponent_th_17_Template, 2, 1, "th", 13);
                core.????template(18, ConversationListComponent_td_18_Template, 2, 1, "td", 14);
                core.????elementContainerEnd();
                core.????elementContainerStart(19, 15);
                core.????template(20, ConversationListComponent_th_20_Template, 2, 1, "th", 13);
                core.????template(21, ConversationListComponent_td_21_Template, 2, 2, "td", 16);
                core.????elementContainerEnd();
                core.????elementContainerStart(22, 17);
                core.????template(23, ConversationListComponent_th_23_Template, 2, 1, "th", 13);
                core.????template(24, ConversationListComponent_td_24_Template, 2, 1, "td", 14);
                core.????elementContainerEnd();
                core.????elementContainerStart(25, 18);
                core.????template(26, ConversationListComponent_th_26_Template, 2, 1, "th", 13);
                core.????template(27, ConversationListComponent_td_27_Template, 2, 1, "td", 14);
                core.????elementContainerEnd();
                core.????elementContainerStart(28, 19);
                core.????template(29, ConversationListComponent_th_29_Template, 2, 1, "th", 13);
                core.????template(30, ConversationListComponent_td_30_Template, 5, 3, "td", 14);
                core.????elementContainerEnd();
                core.????elementContainerStart(31, 20);
                core.????template(32, ConversationListComponent_th_32_Template, 2, 1, "th", 13);
                core.????template(33, ConversationListComponent_td_33_Template, 5, 3, "td", 14);
                core.????elementContainerEnd();
                core.????elementContainerStart(34, 21);
                core.????template(35, ConversationListComponent_th_35_Template, 2, 1, "th", 13);
                core.????template(36, ConversationListComponent_td_36_Template, 14, 5, "td", 22);
                core.????elementContainerEnd();
                core.????template(37, ConversationListComponent_tr_37_Template, 1, 0, "tr", 23);
                core.????template(38, ConversationListComponent_tr_38_Template, 1, 0, "tr", 24);
                core.????elementEnd();
                core.????elementStart(39, "div", 25);
                core.????template(40, ConversationListComponent_div_40_Template, 40, 13, "div", 26);
                core.????elementEnd();
                core.????elementStart(41, "div", 27);
                core.????elementStart(42, "mat-paginator", 28);
                core.????listener("page", function ConversationListComponent_Template_mat_paginator_page_42_listener($event) { return ctx.navigateToPage($event); });
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                core.????advance(5);
                core.????property("ngModel", ctx.search)("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.search);
                core.????advance(2);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.search, " ");
                core.????advance(5);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.addNew, " ");
                core.????advance(2);
                core.????property("dataSource", ctx.chatBots);
                core.????advance(23);
                core.????property("matHeaderRowDef", ctx.displayedColumns);
                core.????advance(1);
                core.????property("matRowDefColumns", ctx.displayedColumns);
                core.????advance(2);
                core.????property("ngForOf", ctx.chatBots);
                core.????advance(2);
                core.????property("length", ctx.pager.totalItems)("pageSize", ctx.pager.pageSize)("pageIndex", ctx.pager.currentPage - 1)("pageSizeOptions", ctx.pager.pageSizeOptions);
            } }, directives: [gridList.MatGridList, gridList.MatGridTile, formField.MatFormField, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, button.MatButton, formField.MatSuffix, table.MatTable, table.MatColumnDef, table.MatHeaderCellDef, table.MatCellDef, table.MatHeaderRowDef, table.MatRowDef, common.NgForOf, paginator.MatPaginator, table.MatHeaderCell, table.MatCell, common.NgClass, menu.MatMenuTrigger, icon.MatIcon, menu._MatMenu, menu.MatMenuItem, table.MatHeaderRow, table.MatRow, card.MatCard, card.MatCardContent], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .mat-select-panel-wrap{flex-basis:auto}.mat-column-action[_ngcontent-%COMP%]{width:5px}.uci-list-menu[_ngcontent-%COMP%]{background:red}.uci-container[_ngcontent-%COMP%]     .cdk-overlay-pane{width:auto}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.status-live[_ngcontent-%COMP%]{color:#3c763d}.status-draft[_ngcontent-%COMP%]{color:#ffb300}.status-disabled[_ngcontent-%COMP%]{color:#ff4a2f}.mobile[_ngcontent-%COMP%]   .status-draft[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(241,210,140,.69)}.mobile[_ngcontent-%COMP%]   .status-disabled[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(229,135,126,.63)}.mobile[_ngcontent-%COMP%]   .status-live[_ngcontent-%COMP%]{font-weight:900;background-color:rgba(120,206,122,.58)}.action-dropdown[_ngcontent-%COMP%]{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{cursor:pointer}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#f6f6f6}"] });
        return ConversationListComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(ConversationListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-conversation-list',
                    templateUrl: './conversation-list.component.html',
                    styleUrls: ['./conversation-list.component.scss']
                }]
        }], function () { return [{ type: UciService }, { type: router.Router }, { type: GlobalService }]; }, { botTable: [{
                type: core.ViewChild,
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
        TermsConditionsComponent.??fac = function TermsConditionsComponent_Factory(t) { return new (t || TermsConditionsComponent)(core.????directiveInject(GlobalService), core.????directiveInject(dialog.MatDialogRef), core.????directiveInject(dialog.MAT_DIALOG_DATA)); };
        TermsConditionsComponent.??cmp = core.????defineComponent({ type: TermsConditionsComponent, selectors: [["lib-terms-conditions"]], decls: 1441, vars: 1, consts: [[2, "background", "white", "margin-top", "5%", "padding", "20px"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "tabs-content-wrapper", "mb-40"], [1, "ui", "secondary", "menu"], ["suiTabHeader", "1", 1, "item"], ["suiTabHeader", "2", 1, "item"], ["suiTabHeader", "3", 1, "item"], ["suiTabHeader", "6", 1, "item"], ["suiTabContent", "1", 1, "ui", "segment"], ["id", "termsOfUse", "aria-labelledby", "terms-of-use-tab"], [1, "tagLine"], [1, "sub-heading"], ["type", "a", 1, "arrow-list"], ["href", "https://diksha.gov.in/"], ["type", "i", 1, "arrow-list"], ["type", "A", 1, "arrow-list"], [1, "TermsOfUseClick"], [1, "arrow-list"], ["href", "https://diksha.gov.in/help/getting-started/explore-diksha/index.html", "target", "_blank"], ["href", "mailto:support@teamdiksha.org"], ["suiTabContent", "2", 1, "ui", "segment"], ["id", "privacyPolicy", "aria-labelledby", "privacy-policy-tab"], ["href", "https://diksha.gov.in", "target", "_blank"], ["tabtoshow", "terms-of-use-tab", "tabpanetoshow", "termsOfUse", 1, "TermsOfUseClick"], ["tabtoshow", "privacy-policy-tab", "tabpanetoshow", "privacyPolicy", 1, "TermsOfUseClick"], ["tabtoshow", "content-policy-tab", "tabpanetoshow", "contentPolicy", 1, "TermsOfUseClick"], ["suiTabContent", "3", 1, "ui", "segment"], ["id", "contentPolicy", "aria-labelledby", "content-policy-tab"], ["href", "https://creativecommons.org/licenses/by/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-sa/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-nc/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"], ["href", "https://creativecommons.org/licenses/by-nd/4.0/legalcode"], ["suiTabContent", "4", 1, "ui", "segment"], ["id", "groupGuidelines", "role", "tabpanel", "aria-labelledby", "group-guidelines-tab", 1, "tab-pane", "fade"], ["type", "1", 1, "arrow-list"], ["suiTabContent", "5", 1, "ui", "segment"], ["id", "courseGuidelines", "aria-labelledby", "course-guidelines-tab"], ["suiTabContent", "6", 1, "ui", "segment"], ["id", "administratorGuidelines", "aria-labelledby", "administrator-guidelines-tab"], ["align", "end"], ["mat-stroked-button", "", 1, "action-button", 3, "click"]], template: function TermsConditionsComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "section", 0);
                core.????elementStart(1, "h1", 1);
                core.????text(2);
                core.????elementEnd();
                core.????elementStart(3, "div", 2);
                core.????elementStart(4, "sui-tabset");
                core.????elementStart(5, "div", 3);
                core.????elementStart(6, "a", 4);
                core.????text(7, "Terms of Use");
                core.????elementEnd();
                core.????elementStart(8, "a", 5);
                core.????text(9, "Privacy Policy ");
                core.????elementEnd();
                core.????elementStart(10, "a", 6);
                core.????text(11, "Content Policy ");
                core.????elementEnd();
                core.????elementStart(12, "a", 7);
                core.????text(13, "Administrator Guidelines ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(14, "div", 8);
                core.????elementStart(15, "div", 9);
                core.????elementStart(16, "h4");
                core.????elementStart(17, "strong");
                core.????text(18, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(19, "label", 10);
                core.????elementStart(20, "em");
                core.????text(21, "( Last updated on ");
                core.????elementStart(22, "b");
                core.????text(23, "28-04-2021");
                core.????elementEnd();
                core.????text(24, " )");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(25, "p");
                core.????text(26, " This website is designed, developed and maintained by the National Council for Educational Research and Training (NCERT) (Ministry of Education (MoE), Government of India) (together referred to as \"");
                core.????elementStart(27, "strong");
                core.????text(28, "GoI");
                core.????elementEnd();
                core.????text(29, "\"). ");
                core.????elementEnd();
                core.????elementStart(30, "p");
                core.????text(31, " These terms of use, as amended, govern the usage of DIKSHA (Digital Infrastructure for Knowledge Sharing) by its Users (as defined below) (\"");
                core.????elementStart(32, "strong");
                core.????text(33, "Terms");
                core.????elementEnd();
                core.????text(34, "\"). DIKSHA is an initiative of the GoI. ");
                core.????elementEnd();
                core.????elementStart(35, "p");
                core.????text(36, " By using DIKSHA, you have accepted and agree to be governed by these Terms, as may be amended from time to time. The terms \"you\", \"your\" hereinafter refer to any User of DIKSHA, including Registered Users (as defined below). ");
                core.????elementEnd();
                core.????elementStart(37, "h4", 11);
                core.????text(38, "Definitions");
                core.????elementEnd();
                core.????elementStart(39, "ol", 12);
                core.????elementStart(40, "li");
                core.????text(41, " Administrator means any natural person who is a Registered User and who is authorised to be an administrator by an Institutional User on behalf of such Institutional User. ");
                core.????elementEnd();
                core.????elementStart(42, "li");
                core.????text(43, " Content means and includes, as the context requires, (i) any text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations, interactive content, features and other materials you may view, access or contribute, (ii) all content and postings that are written, uploaded, submitted, stored, sent, received, shared or otherwise provided by Registered Users, such as posts, comments, feedback, submissions, responses, explanation in forums or groups, for teaching and learning materials, and/or using project/ survey/ observation tools, and (iii) all types of learning material created, uploaded or consumed by a User, such as resources (like teaching or learning content consumed by teachers, parents or students), collections (i.e. sets of ordered resources bundled together to be consumed as a whole), books, e-books, lesson plans, questions, assessments, quizzes, challenges, learning activities, projects, courses and other types of teaching and learning materials that is meant for wide user consumption. ");
                core.????elementEnd();
                core.????elementStart(44, "li");
                core.????text(45, " DIKSHA means ");
                core.????elementStart(46, "strong");
                core.????text(47, "D");
                core.????elementEnd();
                core.????text(48, "igital ");
                core.????elementStart(49, "strong");
                core.????text(50, "I");
                core.????elementEnd();
                core.????text(51, "nfrastructure for ");
                core.????elementStart(52, "strong");
                core.????text(53, "K");
                core.????elementEnd();
                core.????text(54, "nowledge ");
                core.????elementStart(55, "strong");
                core.????text(56, "Sha");
                core.????elementEnd();
                core.????text(57, "ring which is the National Platform for School Education, an initiative of the GoI, and is accessible online at ");
                core.????elementStart(58, "a", 13);
                core.????text(59, "https://diksha.gov.in,");
                core.????elementEnd();
                core.????text(60, " through the DIKSHA android application and through the DIKSHA desktop application, and any includes other sub-domains / extended domains of DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(61, "li");
                core.????text(62, " Institutional User means and includes MoE, any Education Departments (of both Central Government and State/UT), National Council for Educational Research and Training (NCERT), any State Council for Educational Research and Training (SCERT) and training statutory body, Government affiliated body, autonomous authority set up by the Government, Boards and Councils of education (Central, State and others), Schools, Universities, Deemed Universities, Autonomous educational institutions, Learning Centres or other such institutions or organisations who are authorised to operate as a tenant on the DIKSHA digital infrastructure. ");
                core.????elementEnd();
                core.????elementStart(63, "li");
                core.????text(64, " Registered Users are (i) Users of DIKSHA, who register themselves as users of DIKSHA in accordance with the requirements specified on DIKSHA, and (ii) Users of DIKSHA who have been registered on DIKSHA by an Administrator with permissions to create, curate, review or publish Content for DIKSHA, and such users can log in to DIKSHA with their registered credentials. ");
                core.????elementEnd();
                core.????elementStart(65, "li");
                core.????text(66, " Users are all natural persons who access DIKSHA and access, view or use Content on DIKSHA, and such Users include Registered Users of DIKSHA. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(67, "h4", 11);
                core.????text(68, "Access and Use");
                core.????elementEnd();
                core.????elementStart(69, "strong");
                core.????text(70, "Users");
                core.????elementEnd();
                core.????text(71, " - ");
                core.????elementStart(72, "ol", 14);
                core.????elementStart(73, "li");
                core.????text(74, " As a User you represent and warrant that you are of legal age and are legally competent to form a binding contract (or if not, you've received your parent's or guardian's permission to use DIKSHA and they have agreed to these Terms on your behalf). ");
                core.????elementEnd();
                core.????elementStart(75, "li");
                core.????text(76, " If you are agreeing to these Terms on behalf of a department, institution, organization or other legal entity (for example, if you\u2019re an Administrator agreeing to the Terms on behalf of your school, institution, organisation, government department, non-profit entity, etc.), you hereby represent and warrant that you are duly authorized to agree to these Terms on behalf of that department, institution, organization or entity and these Terms are binding on them. ");
                core.????elementEnd();
                core.????elementStart(77, "li");
                core.????text(78, " If you are agreeing to this Terms on behalf of a student who is not of legal age, you hereby represent and warrant that you consent / have obtained consent from the parent(s) / legal guardian(s) on behalf of such student, to access, view and use Content on DIKSHA in accordance with these Terms. ");
                core.????elementEnd();
                core.????elementStart(79, "li");
                core.????text(80, " If you are a student who is not of legal age, you are accessing DIKSHA with consent of parent/legal guardian, you can access, view and use Content on DIKSHA without registering yourself on DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(81, "li");
                core.????text(82, " Users can: ");
                core.????elementStart(83, "ol", 15);
                core.????elementStart(84, "li");
                core.????text(85, "access and use Content available on DIKSHA,");
                core.????elementEnd();
                core.????elementStart(86, "li");
                core.????text(87, "create and manage their User profiles, and");
                core.????elementEnd();
                core.????elementStart(88, "li");
                core.????text(89, "share Content with other Users.");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(90, "li");
                core.????text(91, " DIKSHA should be used for learning and educational purposes. As a User, you will be responsible for all your actions and activities in relation to your usage of DIKSHA. All Users must follow the policies and guidelines of DIKSHA as applicable from time to time, such as these ");
                core.????elementStart(92, "a", 16);
                core.????elementStart(93, "b");
                core.????text(94, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(95, ". ");
                core.????elementEnd();
                core.????elementStart(96, "li");
                core.????text(97, " Your access and use of DIKSHA may possibly be disrupted due to technical or operational difficulties, without prior notice of downtime. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(98, "strong");
                core.????text(99, "Registered Users");
                core.????elementEnd();
                core.????text(100, " - ");
                core.????elementStart(101, "ol", 14);
                core.????elementStart(102, "li");
                core.????text(103, " DIKSHA allows Users to register themselves on DIKSHA by: ");
                core.????elementStart(104, "ol", 15);
                core.????elementStart(105, "li");
                core.????text(106, "Self-registration;");
                core.????elementEnd();
                core.????elementStart(107, "li");
                core.????text(108, "State led registration.");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(109, "li");
                core.????text(110, " Depending on your mode of registration, as a Registered User, DIKSHA collects certain data and information about you in accordance with the ");
                core.????elementStart(111, "a", 16);
                core.????elementStart(112, "b");
                core.????text(113, "Privacy Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(114, ". Registered Users may also choose to give their consent for certain of their data and information to be accessed by Administrators for specified purposes in accordance with the relevant policies and guidelines of DIKSHA as applicable from time to time. ");
                core.????elementEnd();
                core.????elementStart(115, "li");
                core.????text(116, " Registered Users can use / participate in a variety of offerings on DIKSHA including: ");
                core.????elementStart(117, "ul", 17);
                core.????elementStart(118, "li");
                core.????text(119, " Submitting / posting / uploading / otherwise providing Content; ");
                core.????elementEnd();
                core.????elementStart(120, "li");
                core.????text(121, "Accessing courses or other collections of Content;");
                core.????elementEnd();
                core.????elementStart(122, "li");
                core.????text(123, "Creating or participating in DIKSHA Groups.");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(124, "li");
                core.????text(125, " All Registered Users (including Administrators) must follow the policies and guidelines of DIKSHA as applicable from time to time, including but not limited to these Terms, the Content Policy of DIKSHA and Privacy Policy of DIKSHA. Some Registered Users may have read, write and edit rights on DIKSHA to create, curate, review or publish Content, such rights are given by Institutional Users. ");
                core.????elementEnd();
                core.????elementStart(126, "li");
                core.????text(127, " Registered Users are responsible for maintaining the confidentiality of their User ID and Password and also responsible for all activities that occur under their User ID and Password. As a Registered User, you agree, ");
                core.????elementStart(128, "em");
                core.????text(129, "inter alia");
                core.????elementEnd();
                core.????text(130, ", to provide true, accurate, current and complete information about yourself as prompted by the DIKSHA registration form or provided by you as a visitor or user of a third party site through which you access DIKSHA. If you provide any information that is untrue, inappropriate, inaccurate, not current or incomplete or there are reasonable grounds to suspect that such information is untrue, inaccurate, inappropriate, not current or incomplete, or not in accordance with these Terms, the administrators and technology support providers of DIKSHA have the right to indefinitely suspend or terminate your registration or block access to and participation in DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(131, "li");
                core.????text(132, " A Registered User may not transfer their registration to anyone else. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(133, "strong");
                core.????text(134, "Institutional Users ");
                core.????elementEnd();
                core.????text(135, "- ");
                core.????elementStart(136, "ol", 14);
                core.????elementStart(137, "li");
                core.????text(138, " Institutional Users can operate as a tenant on the DIKSHA digital infrastructure. ");
                core.????elementEnd();
                core.????elementStart(139, "li");
                core.????text(140, " Institutional Users shall appoint Administrators and shall be responsible for the Administrators\u2019 compliance and enforcement of terms and policies of DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(141, "li");
                core.????text(142, " Institutional Users can authorise Registered Users to create, curate, review or publish Content or collections of Content and shall be responsible for such Registered Users\u2019 compliance with the terms and policies of DIKSHA. For more details on the role of administrators, creators, contributors, reviewers and other roles, please visit the ");
                core.????elementStart(143, "a", 18);
                core.????text(144, "Help Center");
                core.????elementEnd();
                core.????text(145, ". ");
                core.????elementEnd();
                core.????elementStart(146, "li");
                core.????text(147, " Institutional Users may run programs on the DIKSHA digital infrastructure, including (i) to source Content through programs and tools that invite the participation and contributions from the education ecosystem, and (ii) to offer courses, conduct quizzes, competitions, assessments, or other programs using the various tools available including project / survey / observation tools that invite the participation of Users of DIKSHA. Such programs and its participants shall be governed by the terms and policies of DIKSHA, in addition to any specific terms of use prescribed for the same. ");
                core.????elementEnd();
                core.????elementStart(148, "li");
                core.????text(149, " Institutional Users shall be responsible for and shall comply with Indian law currently in force, including but not limited to the (Indian) Information Technology (Reasonable Security Practices and Procedures) Rules, 2011 with respect to any data and personal information that is collected during the course of running such programs. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(150, "h4", 11);
                core.????text(151, "Prohibited Content and Use");
                core.????elementEnd();
                core.????elementStart(152, "p");
                core.????text(153, "Registered Users shall not:");
                core.????elementEnd();
                core.????elementStart(154, "ol", 12);
                core.????elementStart(155, "li");
                core.????text(156, " use DIKSHA for any purpose other than learning and educational purposes; ");
                core.????elementEnd();
                core.????elementStart(157, "li");
                core.????text(158, " post, upload, or distribute any defamatory, libelous, or inaccurate Content or other content on DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(159, "li");
                core.????text(160, " post, upload, or distribute any Content or other content that is unlawful or that a reasonable person could deem to be objectionable, offensive, indecent, pornographic, harassing, threatening, vulgar, hateful, racially or ethnically offensive, or otherwise inappropriate; ");
                core.????elementEnd();
                core.????elementStart(161, "li");
                core.????text(162, " contribute any Content (including any of the elements that such Content comprises such as text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations etc.) that infringes upon any third party rights including but not limited to intellectual property rights such as copyrights or any other legal rights of individual(s)/organisation(s); ");
                core.????elementEnd();
                core.????elementStart(163, "li");
                core.????text(164, " use DIKSHA in any manner that is harmful to minors, or in any manner that violates the extant ");
                core.????elementStart(165, "a", 16);
                core.????elementStart(166, "b");
                core.????text(167, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(168, ", the ");
                core.????elementStart(169, "a", 16);
                core.????elementStart(170, "b");
                core.????text(171, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(172, " and the ");
                core.????elementStart(173, "a", 16);
                core.????elementStart(174, "b");
                core.????text(175, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(176, "; ");
                core.????elementEnd();
                core.????elementStart(177, "li");
                core.????text(178, " impersonate any person or entity, falsely claim an affiliation with any person or entity, or access DIKSHA accounts of others without permission, or perform any other fraudulent activity; ");
                core.????elementEnd();
                core.????elementStart(179, "li");
                core.????text(180, " delete the copyright or other proprietary rights notices on DIKSHA or on any licensed Content; ");
                core.????elementEnd();
                core.????elementStart(181, "li");
                core.????text(182, " assert, or authorize, assist, or encourage any third party to assert, against DIKSHA any intellectual property infringement claim regarding any Content you have used, submitted, or otherwise made available on or through DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(183, "li");
                core.????text(184, " make unsolicited offers, advertisements, proposals, or send junk mail or spam to other Users (including, but not limited to, unsolicited advertising, promotional materials, offerings or other solicitation material, bulk mailing of commercial advertising, chain mail, informational announcements, charity requests, and petitions for signatures); ");
                core.????elementEnd();
                core.????elementStart(185, "li");
                core.????text(186, " use DIKSHA for any illegal purpose, or in violation of any local, state, national, or international law, including, without limitation, laws governing intellectual property and other proprietary rights, and data protection and privacy; ");
                core.????elementEnd();
                core.????elementStart(187, "li");
                core.????text(188, " defame, harass, abuse, threaten or defraud Users, or collect, or attempt to collect, personal information about Users or third parties without their consent; ");
                core.????elementEnd();
                core.????elementStart(189, "li");
                core.????text(190, " remove, circumvent, disable, damage or otherwise interfere with security-related features of DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(191, "li");
                core.????text(192, " modify, adapt, translate or create derivative works based upon Content on DIKSHA or any part thereof, except and only to the extent expressly permitted by the license applicable to such Content; or ");
                core.????elementEnd();
                core.????elementStart(193, "li");
                core.????text(194, " intentionally interfere with or damage operation of DIKSHA or any user's usage of it, by any means, including without limitation by participation in any denial-of-service type attacks or by uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(195, "h4", 11);
                core.????text(196, "Privacy and Personal Information");
                core.????elementEnd();
                core.????elementStart(197, "ol", 12);
                core.????elementStart(198, "li");
                core.????text(199, " DIKSHA takes the privacy of its users very seriously. Please review the entire ");
                core.????elementStart(200, "a", 16);
                core.????elementStart(201, "b");
                core.????text(202, "Privacy Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(203, ". ");
                core.????elementEnd();
                core.????elementStart(204, "li");
                core.????text(205, " By using DIKSHA and/or by providing your information, you consent to the collection and use of the information you disclose on DIKSHA in accordance with the policies and guidelines of DIKSHA as applicable from time to time, including but not limited to the ");
                core.????elementStart(206, "a", 16);
                core.????elementStart(207, "b");
                core.????text(208, "Privacy Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(209, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(210, "h4", 11);
                core.????text(211, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementStart(212, "ol", 17);
                core.????elementStart(213, "li");
                core.????text(214, " DIKSHA is an open content repository that has been built with the purpose to enable greater access to learning and teaching content. When you use DIKSHA, you join a vast community of learners and teachers using DIKSHA which involves a certain level of trust. ");
                core.????elementEnd();
                core.????elementStart(215, "li");
                core.????text(216, " Users are expected to respect that trust and be responsible about their usage of DIKSHA and all its Content and follow all relevant terms, policies and guidelines applicable to Content, including the ");
                core.????elementStart(217, "a", 16);
                core.????elementStart(218, "b");
                core.????text(219, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(220, ". ");
                core.????elementEnd();
                core.????elementStart(221, "li");
                core.????text(222, " By submitting / uploading / creating/ publishing Content on DIKSHA and following the open license frameworks adopted by DIKSHA, Registered Users recognise and accept that the Content will be accessed and used by any individual, institution or organisation through various platforms, portals and applications in accordance with license conditions. ");
                core.????elementEnd();
                core.????elementStart(223, "li");
                core.????text(224, " It shall be the sole responsibility of Registered Users to ensure that proper and correct attributions, acknowledgements and sourcing references are given to the Content and individual(s)/ institution(s) that have been involved in the development and creation of Content and wherever Content has been quoted/used. ");
                core.????elementEnd();
                core.????elementStart(225, "li");
                core.????text(226, " It shall be the responsibility of Registered Users not to infringe upon any third party rights including but not limited to intellectual property rights such as copyrights or any other legal rights of individual(s)/organisation(s) with regards to Content (including all the elements that such Content comprises such as text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations etc.) contributed on DIKSHA. For any legal matter arising out of infringement of such rights by the Registered User, such Registered User shall be solely responsible for any financial or other damages arising out of such violations and disputes. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(227, "h4", 11);
                core.????text(228, "Changes in DIKSHA Policies");
                core.????elementEnd();
                core.????elementStart(229, "p");
                core.????text(230, "These Terms (including any policies, terms and guidelines) may be updated or modified from time to time and the revised Terms will be reflected herein. Your continued use of DIKSHA constitutes acceptance of the then-current Terms. Hence, we encourage you to visit this page periodically to review any changes. ");
                core.????elementEnd();
                core.????elementStart(231, "h4", 11);
                core.????text(232, "Limited Liability");
                core.????elementEnd();
                core.????elementStart(233, "ol", 17);
                core.????elementStart(234, "li");
                core.????text(235, " As a User you shall not collect any personal information or sensitive personal data of other Users through DIKSHA, but if you do collect such information, you must ensure that such collection, storage, transfer and disclosure is in accordance with Indian law currently in force, including but not limited to the (Indian) Information Technology (Reasonable Security Practices and Procedures) Rules, 2011. ");
                core.????elementEnd();
                core.????elementStart(236, "li");
                core.????text(237, " GoI, administrators and technology support providers of DIKSHA and Institutional Users do not guarantee the accuracy of any of the Content made available on the DIKSHA. GoI, administrators and technology support providers of DIKSHA and Institutional Users do not take responsibility for any external websites linked on DIKSHA, including compliance with Indian Government Web Guidelines. ");
                core.????elementEnd();
                core.????elementStart(238, "li");
                core.????text(239, " Registered Users are solely responsible for maintaining the security and confidentiality of the username and password. Any unauthorised use of your username or password or any other breach of security must be notified by sending an email notification to ");
                core.????elementStart(240, "a", 19);
                core.????elementStart(241, "b");
                core.????text(242, "support@teamdiksha.org");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(243, ". GoI, administrators and technology support providers of DIKSHA and Institutional Users will not be liable for any loss or damage arising from failure to comply with this provision. ");
                core.????elementEnd();
                core.????elementStart(244, "li");
                core.????text(245, " Registered Users are responsible for any offensive or unlawful Content posted, transmitted, sent or communicated through DIKSHA. GoI, administrators and technology support providers of DIKSHA and Institutional Users shall not be held responsible for any offensive or unlawful Content posted, uploaded, transmitted, sent and received through DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(246, "li");
                core.????text(247, " In no event will GoI, administrators and technology support providers of DIKSHA or Institutional Users be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the access or use of DIKSHA. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(248, "h4", 11);
                core.????text(249, "Termination");
                core.????elementEnd();
                core.????elementStart(250, "p");
                core.????text(251, "Any violation or breach of these Terms, including while investigating complaints or alleged violation of these Terms, may lead to suspension or termination of your registration and access to DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(252, "h4", 11);
                core.????text(253, "Electronic Agreement");
                core.????elementEnd();
                core.????elementStart(254, "p");
                core.????text(255, "This document is a written agreement, an electronic record and valid and enforceable electronic agreement / contract under Information Technology Act, 2000 (as applicable in Republic of India) and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes under applicable Indian laws. This electronic record is generated by a computer system and does not require any physical or digital signatures. Your usage of DIKSHA shall be your deemed acceptance of these Terms and all the modifications and updates thereto. ");
                core.????elementEnd();
                core.????elementStart(256, "h4", 11);
                core.????text(257, "Governing Law and Dispute Resolution");
                core.????elementEnd();
                core.????elementStart(258, "p");
                core.????text(259, " These Terms shall be governed by and construed in accordance with the Indian law. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India. ");
                core.????elementEnd();
                core.????elementStart(260, "h4", 11);
                core.????text(261, "Disclaimer");
                core.????elementEnd();
                core.????elementStart(262, "p");
                core.????text(263, " DIKSHA IS AVAILABLE ON AN \"AS IS\" BASIS AND THERE ARE NO WARRANTIES OF ANY KIND WITH RESPECT TO DIKSHA. GOI AND THE ADMINISTRATORS AND TECHNOLOGY SUPPORT PROVIDERS OF DIKSHA SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. ACCESS AND USE OF DIKSHA (INCLUDING ANY CONTENT OR INFORMATION) IS ENTIRELY AT YOUR OWN RISK. IN NO EVENT WILL GOI OR THE ADMINISTRATORS AND TECHNOLOGY SUPPORT PROVIDERS OF DIKSHA BE LIABLE FOR ANY EXPENSE, LOSS OR DAMAGE INCLUDING, WITHOUT LIMITATION, INDIRECT OR CONSEQUENTIAL LOSS OR DAMAGE, OR ANY EXPENSE, LOSS OR DAMAGE WHATSOEVER ARISING FROM USE, OR LOSS OF USE, OF DATA, ARISING OUT OF OR IN CONNECTION WITH THE USE OF DIKSHA. WHEN YOU SELECT A LINK TO AN OUTSIDE WEBSITE, YOU ARE LEAVING DIKSHA AND ARE SUBJECT TO THE PRIVACY AND SECURITY POLICIES OF THE OWNERS/SPONSORS OF THE OUTSIDE WEBSITE / DOMAIN. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(264, "div", 20);
                core.????elementStart(265, "div", 21);
                core.????elementStart(266, "h4");
                core.????elementStart(267, "strong");
                core.????text(268, "Privacy Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(269, "label", 10);
                core.????elementStart(270, "em");
                core.????text(271, "( Last updated on ");
                core.????elementStart(272, "b");
                core.????text(273, "28-04-2021");
                core.????elementEnd();
                core.????text(274, " )");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(275, "p");
                core.????text(276, " DIKSHA (Digital Infrastructure for Knowledge Sharing ) is the National Platform for School Education for the benefit of teachers and learners across India. DIKSHA is an initiative of National Council for Educational Research and Training (NCERT) (Ministry of Education (MoE), Government of India). Users of DIKSHA can access content for learning on the web at ");
                core.????elementStart(277, "a", 22);
                core.????text(278, "https://diksha.gov.in");
                core.????elementEnd();
                core.????text(279, ", through the DIKSHA mobile application, and the desktop application. ");
                core.????elementEnd();
                core.????elementStart(280, "p");
                core.????text(281, " The privacy and protection of data of DIKSHA\u2019s Users is of utmost importance and shall be ensured at all times. This Privacy Policy shall cover details of data protection and management on DIKSHA, including how personal data of users of DIKSHA is managed, used and processed. Users are individuals who access and use DIKSHA and broadly comprise (i) users who access and use DIKSHA without registering themselves on DIKSHA (\"");
                core.????elementStart(282, "strong");
                core.????text(283, "Users");
                core.????elementEnd();
                core.????text(284, "\"), (ii) users who access and use DIKSHA after registering themselves on DIKSHA (\"");
                core.????elementStart(285, "strong");
                core.????text(286, "Registered Users");
                core.????elementEnd();
                core.????text(287, "\"), (iii) users who are registered on DIKSHA and are authorised to be administrators on behalf of Institutional Users (such as NCERT, State Education Departments etc.) (\"");
                core.????elementStart(288, "strong");
                core.????text(289, "Administrators");
                core.????elementEnd();
                core.????text(290, "\"). Institutional Users operate as tenants on DIKSHA. More details on the rights and responsibilities of Users and Registered Users are set out in the ");
                core.????elementStart(291, "a", 23);
                core.????elementStart(292, "b");
                core.????text(293, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(294, ". ");
                core.????elementEnd();
                core.????elementStart(295, "p");
                core.????text(296, " By accessing and using DIKSHA, and by providing your information on DIKSHA, you consent to the collection and use of the information you disclose on DIKSHA by DIKSHA and relevant Administrators of DIKSHA in accordance with the policies and guidelines of DIKSHA as applicable from time to time, including the ");
                core.????elementStart(297, "a", 23);
                core.????elementStart(298, "b");
                core.????text(299, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(300, " and this ");
                core.????elementStart(301, "a", 24);
                core.????elementStart(302, "b");
                core.????text(303, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(304, ". If you do not agree with the contents of this policy, please do not access or use DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(305, "p");
                core.????text(306, " This ");
                core.????elementStart(307, "a", 24);
                core.????elementStart(308, "b");
                core.????text(309, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(310, " should be read in conjunction with the ");
                core.????elementStart(311, "strong");
                core.????text(312, "Terms of Use");
                core.????elementEnd();
                core.????text(313, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
                core.????elementStart(314, "a", 23);
                core.????elementStart(315, "b");
                core.????text(316, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(317, ". ");
                core.????elementEnd();
                core.????elementStart(318, "h4", 11);
                core.????text(319, "Rights of Users:");
                core.????elementEnd();
                core.????elementStart(320, "ol", 12);
                core.????elementStart(321, "li");
                core.????text(322, " Right to fair, transparent and lawful collection of your data and information on DIKSHA ");
                core.????elementEnd();
                core.????elementStart(323, "li");
                core.????text(324, " Right to be informed about the ways in which your data and information that is collected on DIKSHA will be used ");
                core.????elementEnd();
                core.????elementStart(325, "li");
                core.????text(326, " Right to receive all the information you need to provide informed consent before collection of your personally identifiable information or sensitive personal data or information on DIKSHA and sharing of the same with relevant Administrators ");
                core.????elementEnd();
                core.????elementStart(327, "li");
                core.????text(328, "Right to revoke such consent");
                core.????elementEnd();
                core.????elementStart(329, "li");
                core.????text(330, " Right to privacy and confidentiality regarding your personal data and information ");
                core.????elementEnd();
                core.????elementStart(331, "li");
                core.????text(332, " Right to proper use of your personal data and information by Administrators for specified and legitimate purposes related to your use of DIKSHA ");
                core.????elementEnd();
                core.????elementStart(333, "li");
                core.????text(334, " Right to keep your personal information accurate and up to date ");
                core.????elementEnd();
                core.????elementStart(335, "li");
                core.????text(336, " Right to secure collection, handling and storage of your personal data and information ");
                core.????elementEnd();
                core.????elementStart(337, "li");
                core.????text(338, " Right to protection from unauthorised or unlawful use of your personal data and information ");
                core.????elementEnd();
                core.????elementStart(339, "li");
                core.????text(340, "Right to view and access DIKSHA\u2019s privacy policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(341, "h4", 11);
                core.????text(342, "Responsibilities of Administrators with respect to User data and information");
                core.????elementEnd();
                core.????elementStart(343, "ol", 12);
                core.????elementStart(344, "li");
                core.????text(345, "To respect the privacy and data protection rights of Users");
                core.????elementEnd();
                core.????elementStart(346, "li");
                core.????text(347, " To ensure the security of and use of data (especially any personal information) shared by Registered Users is limited solely to the uses and purposes mentioned here ");
                core.????elementEnd();
                core.????elementStart(348, "li");
                core.????text(349, " To know that any use of data for purposes outside of the proper use shall be considered violation of the terms of the policies of DIKSHA as well as applicable laws and policies of India and they shall be responsible and liable for such actions and for any loss or damage arising from failure to comply with this obligation ");
                core.????elementEnd();
                core.????elementStart(350, "li");
                core.????text(351, " To ensure their communication (if any) with Registered Users is explicitly limited and relevant to the purpose of their usage of DIKSHA and meets the Appropriateness standards set out in the ");
                core.????elementStart(352, "a", 25);
                core.????elementStart(353, "b");
                core.????text(354, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(355, ". ");
                core.????elementEnd();
                core.????elementStart(356, "li");
                core.????text(357, " To ensure that their Content and programs on DIKSHA are not used for any of the Prohibited Uses set out in the ");
                core.????elementStart(358, "a", 23);
                core.????elementStart(359, "b");
                core.????text(360, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(361, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(362, "h4", 11);
                core.????text(363, "What User data and information is collected on DIKSHA?");
                core.????elementEnd();
                core.????elementStart(364, "ol", 12);
                core.????elementStart(365, "li");
                core.????text(366, " All ");
                core.????elementStart(367, "strong");
                core.????text(368, "Users");
                core.????elementEnd();
                core.????text(369, " can expect the following data and information of theirs to be collected on DIKSHA: ");
                core.????elementStart(370, "ol", 14);
                core.????elementStart(371, "li");
                core.????elementStart(372, "strong");
                core.????text(373, "Basic Information");
                core.????elementEnd();
                core.????text(374, ": User Type (eg. teacher, student, other) ");
                core.????elementEnd();
                core.????elementStart(375, "li");
                core.????elementStart(376, "strong");
                core.????text(377, "Geographical Information");
                core.????elementEnd();
                core.????text(378, ": State and District ");
                core.????elementEnd();
                core.????elementStart(379, "li");
                core.????elementStart(380, "strong");
                core.????text(381, "Preferences: ");
                core.????elementEnd();
                core.????text(382, "Board of interest, Medium of instruction, Classes of interest, Subjects of interest ");
                core.????elementEnd();
                core.????elementStart(383, "li");
                core.????elementStart(384, "strong");
                core.????text(385, "DIKSHA Usage: ");
                core.????elementEnd();
                core.????text(386, "Usage history, time spent on Content, Content created/ contributed / published and its usage, progress in trackable collections of Content (eg. courses), scores & assessment results, question-wise answers and other telemetry data in relation to usage of DIKSHA, badges generated, certificates issued. ");
                core.????elementEnd();
                core.????elementStart(387, "li");
                core.????elementStart(388, "strong");
                core.????text(389, "IP Address");
                core.????elementEnd();
                core.????text(390, ": The IP address of a User is collected once for the limited purpose of determining your approximate location - the State, City and District of origin. The IP address is not stored in the database of Registered Users and the precise location of any User cannot be determined. The User can confirm or modify the State and District details determined on the basis of the IP address. ");
                core.????elementEnd();
                core.????elementStart(391, "li");
                core.????text(392, " DIKSHA uses hash digest functions and fingerprinting to create unique identifiers for different devices. DIKSHA also uses FCM tokens to enable push notifications to your devices, should you choose to opt for the same. ");
                core.????elementEnd();
                core.????elementStart(393, "li");
                core.????text(394, " DIKSHA also generates a unique identifier for each device used to access DIKSHA. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(395, "li");
                core.????text(396, " In case of ");
                core.????elementStart(397, "strong");
                core.????text(398, "Registered Users");
                core.????elementEnd();
                core.????text(399, ", they can expect the following additional information of theirs to be collected on DIKSHA: ");
                core.????elementStart(400, "ol", 14);
                core.????elementStart(401, "li");
                core.????text(402, "Name");
                core.????elementEnd();
                core.????elementStart(403, "li");
                core.????text(404, "Email Address / Mobile number, and");
                core.????elementEnd();
                core.????elementStart(405, "li");
                core.????text(406, "DIKSHA Password");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(407, "li");
                core.????elementStart(408, "strong");
                core.????text(409, "Registered Users ");
                core.????elementEnd();
                core.????text(410, "have an option to provide the following information of theirs (\"");
                core.????elementStart(411, "strong");
                core.????text(412, "Declared Information");
                core.????elementEnd();
                core.????text(413, "\"), namely: ");
                core.????elementStart(414, "ol", 14);
                core.????elementStart(415, "li");
                core.????text(416, "Both Email Address and Mobile Number,");
                core.????elementEnd();
                core.????elementStart(417, "li");
                core.????text(418, "Block,");
                core.????elementEnd();
                core.????elementStart(419, "li");
                core.????text(420, "School or Organisation name,");
                core.????elementEnd();
                core.????elementStart(421, "li");
                core.????text(422, "School U-DISE code or Organisation code / number,");
                core.????elementEnd();
                core.????elementStart(423, "li");
                core.????text(424, "ID as provided by your state/board/organisation.");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(425, "li");
                core.????text(426, " No other personally identifiable information or sensitive personal data or information of the User is collected. ");
                core.????elementEnd();
                core.????elementStart(427, "li");
                core.????text(428, " All ");
                core.????elementStart(429, "strong");
                core.????text(430, "Users ");
                core.????elementEnd();
                core.????text(431, "(using the DIKSHA mobile app to access DIKSHA) have a profile which specifies the User type, Geographical Information and Preferences. They may choose to customise their profile by changing these details at any time as well as providing their name. If Users are using DIKSHA as a guest User, i.e. without registering on DIKSHA, your User type and Preferences are stored locally on your device. Only Registered Users can view their profile on both the DIKSHA mobile app as well as the DIKSHA web portal, and their profiles specify all the additional information provided by such a Registered User. ");
                core.????elementEnd();
                core.????elementStart(432, "li");
                core.????elementStart(433, "strong");
                core.????text(434, "Children as Registered Users");
                core.????elementEnd();
                core.????text(435, ": DIKSHA collects the \u2018year of birth\u2019 of a User in order to determine whether a User is below 18 years. In the event a person under 18 years of age is registering on DIKSHA, DIKSHA prompts the User to provide the email address or mobile number of a parent / guardian for the purposes of registration. Children under 18 years of age are neither required to nor encouraged to provide their personal information. ");
                core.????elementEnd();
                core.????elementStart(436, "li");
                core.????text(437, " You represent to us that the data and information you provide on DIKSHA from time to time is and shall be correct, current and updated and you have all the rights, permissions and consents to provide such data and information. Your providing the information or data and the consequent storage, collection, usage, transfer, access or processing of the same in accordance with the ");
                core.????elementStart(438, "a", 23);
                core.????elementStart(439, "b");
                core.????text(440, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(441, " and this ");
                core.????elementStart(442, "a", 24);
                core.????elementStart(443, "b");
                core.????text(444, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(445, " shall not be in violation of any third party agreement, laws, charter documents, judgments, orders and decrees. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(446, "h4", 11);
                core.????text(447, " How is User data and information collected?");
                core.????elementEnd();
                core.????elementStart(448, "ol", 12);
                core.????elementStart(449, "li");
                core.????text(450, " Basic Information, Geographical Information and Preferences are collected when a User accesses and uses DIKSHA for the first time. These details can be updated by the User from their profile. ");
                core.????elementEnd();
                core.????elementStart(451, "li");
                core.????text(452, " Usage data of Users is collected as and when a User accesses, uses and navigates DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(453, "li");
                core.????text(454, " The additional information provided by Registered Users, namely, (i) Name (ii) Email Address / Mobile Number (iii) Password, is collected when a User creates a registered account on DIKSHA and becomes a Registered User or when a Registered User updates their profile. ");
                core.????elementEnd();
                core.????elementStart(455, "li");
                core.????text(456, " Declared Information of Registered Users is collected with their explicit consent when they choose to provide the same on DIKSHA, through their profile or otherwise. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(457, "h4", 11);
                core.????text(458, "Who has access to User data and information?");
                core.????elementEnd();
                core.????elementStart(459, "ol", 12);
                core.????elementStart(460, "li");
                core.????text(461, " DIKSHA Usage data (including Usage across the States and Districts) is a part of anonymised and aggregated data sets that is accessible to relevant Administrators of DIKSHA and to the employees, contractors or subcontractors of the technology service providers of DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(462, "li");
                core.????text(463, " If you are a User, your Basic Information, Geographical Information, Preferences, and Usage data is accessible to the employees, contractors or subcontractors of the technology service providers of DIKSHA (under strict confidentiality obligations) if they need to access the data to process it on behalf of DIKSHA or an Administrator or to provide the services available on DIKSHA. For Registered Users, your Name is also accessible in this manner. ");
                core.????elementEnd();
                core.????elementStart(464, "li");
                core.????text(465, " Registered Users also have an option to explicitly consent to give relevant Administrators access to their Name, Basic Information, Preferences, Usage data, and Declared Information for specified purposes such as implementation of programs on DIKSHA like courses. Note that Institutional Users are required to ensure that their respective Administrators comply with and Administrators are responsible to comply with the relevant policies and guidelines of DIKSHA as applicable from time to time, including the ");
                core.????elementStart(466, "a", 23);
                core.????elementStart(467, "b");
                core.????text(468, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(469, " and this ");
                core.????elementStart(470, "a", 24);
                core.????elementStart(471, "b");
                core.????text(472, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(473, ". ");
                core.????elementEnd();
                core.????elementStart(474, "li");
                core.????text(475, " Usage data which is anonymised and aggregated by State and District is also available publicly on DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(476, "li");
                core.????text(477, " In order to provide and improve DIKSHA, a limited number of third-party services require access to some of your personal data and information, eg. FreshDesk, Google PlayStore. Third party services are contractually prohibited from using your information except to provide the service. ");
                core.????elementEnd();
                core.????elementStart(478, "li");
                core.????text(479, " Your data and information is only accessible outside of the DIKSHA platform when it is necessary to offer the service, comply with law, or with your permission. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(480, "h4", 11);
                core.????text(481, "What is User data and information used for? ");
                core.????elementEnd();
                core.????elementStart(482, "ol", 12);
                core.????elementStart(483, "li");
                core.????text(484, " DIKSHA processes your data and information when necessary for providing access to Content for educational purposes and running programs on DIKSHA. These purposes are legitimate. The uses of your data are set out below: ");
                core.????elementStart(485, "ol", 17);
                core.????elementStart(486, "li");
                core.????text(487, " To create a profile for you to have a customised experience on DIKSHA, ");
                core.????elementEnd();
                core.????elementStart(488, "li");
                core.????text(489, " To suggest relevant Content for you to conveniently discover Content based on your preferences, activities on DIKSHA, and Content you are viewing on DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(490, "li");
                core.????text(491, "To enable you to access and use Content on DIKSHA;");
                core.????elementEnd();
                core.????elementStart(492, "li");
                core.????text(493, " To enable you to participate in programs run by Institutional Users on DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(494, "li");
                core.????text(495, " To provide you push notifications on your hand-held devices, only if you have provided permission for the same during app installation; ");
                core.????elementEnd();
                core.????elementStart(496, "li");
                core.????text(497, " To track your progress in collections of Content for which progress is tracked / recorded such as courses, TV collections, textbooks; ");
                core.????elementEnd();
                core.????elementStart(498, "li");
                core.????text(499, " To generate badges for or issue certificates to you upon completion of milestones; ");
                core.????elementEnd();
                core.????elementStart(500, "li");
                core.????text(501, " To maintain records of your progress and certificates/badges in relation to collections of Content you have accessed and used; ");
                core.????elementEnd();
                core.????elementStart(502, "li");
                core.????text(503, " To measure interest in the offerings on DIKSHA and to improve DIKSHA over time; ");
                core.????elementEnd();
                core.????elementStart(504, "li");
                core.????text(505, " To track and analyse usage of Content on DIKSHA by Administrators and Content providers to improve DIKSHA and its offerings over time; ");
                core.????elementEnd();
                core.????elementStart(506, "li");
                core.????text(507, " To assess, evaluate, validate Content submitted / posted / uploaded by Registered Users; ");
                core.????elementEnd();
                core.????elementStart(508, "li");
                core.????text(509, " To report anonymised usage of DIKSHA and its Content by Administrators to improve DIKSHA over time; ");
                core.????elementEnd();
                core.????elementStart(510, "li");
                core.????text(511, " To contact you and deliver information, administrative notices, seek feedback or other communications in connection with your usage of DIKSHA. By accepting the ");
                core.????elementStart(512, "a", 23);
                core.????elementStart(513, "b");
                core.????text(514, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(515, " including the Privacy Policy, you expressly agree to receive this information; ");
                core.????elementEnd();
                core.????elementStart(516, "li");
                core.????text(517, " To suggest details for your profile such as your declared State and District; ");
                core.????elementEnd();
                core.????elementStart(518, "li");
                core.????text(519, " To resolve disputes, troubleshoot problems, detect and protect you against fraud and other criminal activity, enforce the Terms of Use and any other agreements; ");
                core.????elementEnd();
                core.????elementStart(520, "li");
                core.????text(521, " At times multiple users may be looked at to identify problems or resolve disputes, and in particular may examine your information or data to identify users using multiple User IDs or aliases. Your information or data may be compared or reviewed for errors, omissions and for accuracy; and ");
                core.????elementEnd();
                core.????elementStart(522, "li");
                core.????text(523, " For any other use that may be described to you at the time of collection. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(524, "li");
                core.????text(525, " The administrators and technology support providers of DIKSHA may use third parties as service providers to facilitate or outsource one or more aspects of service operations that are provided on DIKSHA (e.g., search technology, discussion boards, technical service providers, affiliate) and therefore some of your information or data may be provided directly to these service providers. These service providers are subject to confidentiality and other legal restrictions that prohibit their use of the information provided to them for any purpose other than to facilitate specific website related operations. ");
                core.????elementEnd();
                core.????elementStart(526, "li");
                core.????text(527, " If we wish to use your data and information for a new purpose, not covered by this Privacy Policy, then we will provide you with a new notice explaining this new use prior to commencing the processing and setting out the relevant purposes and processing conditions. Where and whenever necessary, we will seek your prior consent to the new processing, unless authorized by law. ");
                core.????elementEnd();
                core.????elementStart(528, "li");
                core.????text(529, " In any event, your data will not be used for any of the following purposes: ");
                core.????elementStart(530, "ol", 17);
                core.????elementStart(531, "li");
                core.????text(532, "Rent or sale or other commercial purposes;");
                core.????elementEnd();
                core.????elementStart(533, "li");
                core.????text(534, "Advertising or marketing;");
                core.????elementEnd();
                core.????elementStart(535, "li");
                core.????text(536, " Phone calls or other forms of unsolicited communication that is not related to your usage of DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(537, "li");
                core.????text(538, " Building a personal profile, other than for educational purposes on DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(539, "li");
                core.????text(540, " Any of the Prohibited Purposes set out in the ");
                core.????elementStart(541, "a", 23);
                core.????elementStart(542, "b");
                core.????text(543, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(544, "; and ");
                core.????elementEnd();
                core.????elementStart(545, "li");
                core.????text(546, " Any purpose that is not disclosed in this policy or on DIKSHA. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(547, "li");
                core.????text(548, " Administrators are responsible for any use of data and information outside the proper use and shall be held accountable for the violation of the terms and policies of DIKSHA, as well as applicable laws and policies of India for any misuse. Administrators shall be liable for such actions and for any loss or damage arising from failure to comply with the obligation of proper use of your data and information. Should you believe that your data or information is being used in a manner inconsistent with this Privacy Policy, please contact the DIKSHA support team with the details of your concern by sending an email to ");
                core.????elementStart(549, "a", 19);
                core.????elementStart(550, "b");
                core.????text(551, "support@teamdiksha.org");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(552, ". ");
                core.????elementEnd();
                core.????elementStart(553, "li");
                core.????text(554, " As a User, you understand, agree and acknowledge that the collection, storage and processing of your information or data on DIKSHA is for a lawful purpose connected with a function or activity of DIKSHA. You further understand, agree and acknowledge that your information or data which is classified as personal information as per applicable laws is considered necessary for us to provide various services on and in relation to DIKSHA to you and for your usage of DIKSHA. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(555, "h4", 11);
                core.????text(556, "How is User data and information stored?");
                core.????elementEnd();
                core.????elementStart(557, "ol", 12);
                core.????elementStart(558, "li");
                core.????text(559, " Reasonable and appropriate security practices and procedures are being adopted to secure your personal data and information in accordance with Indian laws currently in force, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. These measures include administrative, physical security, and technical controls in order to safeguard your personal data and information. ");
                core.????elementEnd();
                core.????elementStart(560, "li");
                core.????text(561, " Your data, including your Declared Information, any personally identifiable information or sensitive personal data or information is securely stored using Microsoft Azure cloud services which have it\u2019s servers in India. Your data and information will primarily be stored in electronic form however certain data may also be stored in physical form. ");
                core.????elementEnd();
                core.????elementStart(562, "li");
                core.????text(563, " Third party service providers are engaged to store and process your data. These service providers are contractually bound to follow reasonable security standards to safeguard your data. ");
                core.????elementEnd();
                core.????elementStart(564, "li");
                core.????text(565, " Your email address and mobile number and any other personally identifiable information is only collected should you choose to provide the same and it is encrypted and stored securely. Personally identifiable information is only shared with Administrators for purposes specified to you, with your explicit consent and under the obligation that the Administrators will use such information only in connection with your usage of DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(566, "li");
                core.????text(567, " Your IP address is only collected once for the limited purpose of ascertaining and suggesting your State and District. Your IP address is not stored on DIKSHA at any time. ");
                core.????elementEnd();
                core.????elementStart(568, "li");
                core.????text(569, " Additionally, a variety of methods such as network and infrastructure security, encryption and manual security procedures are used to secure your information and data against loss or damage and to help protect the accuracy and security of your personal information / general information / usage data and to prevent unauthorized access or improper use. If you think that DIKSHA or any your personal information / general information / usage data is not secure or that there has been unauthorized access to the website or your personal data, please contact ");
                core.????elementStart(570, "a", 19);
                core.????elementStart(571, "b");
                core.????text(572, "support@teamdiksha.org");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(573, " immediately. ");
                core.????elementEnd();
                core.????elementStart(574, "li");
                core.????text(575, " Although DIKSHA strives to protect your personal information and data, it cannot guarantee the security of your data while it is being transmitted to its site; any transmission is at your own risk. Once your information has been received, reasonable procedures and security features are in place to reasonably endeavor to prevent unauthorized access in accordance with Indian law. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(576, "h4", 11);
                core.????text(577, "How long is User data and information stored?");
                core.????elementEnd();
                core.????elementStart(578, "ol", 12);
                core.????elementStart(579, "li");
                core.????text(580, " Your data will not be retained for a period more than necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law or for directly related legitimate purposes. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(581, "h4", 11);
                core.????text(582, "What are the system permissions required by the DIKSHA?");
                core.????elementEnd();
                core.????elementStart(583, "ol", 12);
                core.????elementStart(584, "li");
                core.????text(585, " Microphone - Your system Microphone will be used if voice recording is explicitly requested as part of a Content for the purposes of practice. This voice recording is only stored locally on your system. Your system Microphone will be used if a Registered User creating Content wants to add a voice recording to Content. This voice recording will become part of the Content. ");
                core.????elementEnd();
                core.????elementStart(586, "li");
                core.????text(587, " Camera - Your system Camera will only be used if you want to scan QR codes to access Content on DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(588, "li");
                core.????text(589, " Access to file manager - This is used by the DIKSHA android application to transfer Content to an external storage space. Additionally, on the DIKSHA desktop app, this is used to transfer Content to and from an external storage device like a pendrive or SD card. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(590, "h4", 11);
                core.????text(591, "Cookies: How are they used? What types of cookies are used? How to manage your cookies?");
                core.????elementEnd();
                core.????elementStart(592, "ol", 12);
                core.????elementStart(593, "li");
                core.????text(594, " Out of all the consumption clients, only the DIKSHA web portal uses cookies. DIKSHA only uses session cookies, none of the other types of cookies. DIKSHA session cookies are used to store URLs in order to better redirect users to the right pages. For example, when a User signs-in to DIKSHA from the courses page, they'll need to be redirected back to the courses page at the end of sign-in for a cleaner user experience. Session cookies are also used to store whether to use the Content Delivery Network (CDN) to pull images, plugins and other assets that are shown on the user interface. This is to enable faster loading of the pages the User interacts with. No personal information, or user preferences are stored in cookies. ");
                core.????elementEnd();
                core.????elementStart(595, "li");
                core.????text(596, " Users can clear their cookies by going to their browser settings and clearing their browsing data (by specifically checking off the option to clear cookies). Doing so, does not impact their user experience on DIKSHA as usage of DIKSHA sets the cookies again. Users can also choose to block cookies from the settings as well. Doing so, will mean that certain things on DIKSHA will not function properly. For eg., images/plugins may take a long time to load and the user will not be taken to the right pages after login. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(597, "h4", 11);
                core.????text(598, "Data and information DIKSHA is not responsible for");
                core.????elementEnd();
                core.????elementStart(599, "ol", 12);
                core.????elementStart(600, "li");
                core.????text(601, " DIKSHA may have Content, webpages, cookies, files, software, data or other information or communication links that are originated, created or posted by third parties that may have the capability to collect, store or use your data or information. The administrators and technology support providers of DIKSHA are not responsible for such data or information collected, stored or used by third parties even if such third parties use DIKSHA to collect, store or use such data or information. ");
                core.????elementEnd();
                core.????elementStart(602, "li");
                core.????text(603, " If you access DIKSHA through a third party QR code scanner or through a web browser, the administrators and technology support providers of DIKSHA are not responsible for the data or information collected by such third parties. ");
                core.????elementEnd();
                core.????elementStart(604, "li");
                core.????text(605, " DIKSHA is not responsible for the privacy practices of other websites and users need to be aware of the data privacy practices of such sites should they choose to use these links. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(606, "h4", 11);
                core.????text(607, "Compliance with laws and law enforcement");
                core.????elementEnd();
                core.????elementStart(608, "ol", 12);
                core.????elementStart(609, "li");
                core.????text(610, " The administrators and technology support providers of DIKSHA cooperate with governments and law enforcement agencies or any third party by any order under law for the time being in force to enforce and comply with the law. Any information about you will be disclosed to the government or law enforcement officials or private parties as, in the sole discretion of the administrators and technology support providers, if they believe necessary or appropriate to respond to claims and legal process, to protect their property and rights or a third party, to protect the safety of the public or any person, or to prevent or stop any illegal, unethical or legally actionable activity. ");
                core.????elementEnd();
                core.????elementStart(611, "li");
                core.????text(612, " Your information or data may also be provided to various tax authorities upon any demand or request from them. You acknowledge that DIKSHA can be accessed from anywhere in the world and it will have users from all over the world and therefore governments, judiciaries or law enforcement authorities in various parts of the world may have or assume jurisdiction over DIKSHA and DIKSHA may be subject to the laws, rules, regulations and judgments of various countries, states, municipalities or provinces where it may not have a direct presence to store, process, collect, use or keep your information or data. You acknowledge that government or law enforcement authorities in the countries where your data or information is stored may have the right to decrypt, collect, monitor or access your data or information, which actions are completely out of the control of the administrators and technology support providers of DIKSHA. The administrators and technology support providers of DIKSHA do not take any responsibility for such actions. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(613, "h4", 11);
                core.????text(614, "Deleting your information");
                core.????elementEnd();
                core.????elementStart(615, "ol", 12);
                core.????elementStart(616, "li");
                core.????text(617, " If you wish to have the information or data that you have provided deleted, you can always do so by sending an email request to ");
                core.????elementStart(618, "a", 19);
                core.????elementStart(619, "b");
                core.????text(620, "support@teamdiksha.org");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(621, ". You may note that deletion of certain information or data may lead to cancellation of your registration with DIKSHA and your access to certain features of DIKSHA. You also agree and acknowledge that certain data or information cannot be deleted or may be prohibited to be deleted as required under any applicable law, law enforcement requests or under any judicial proceedings. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(622, "h4", 11);
                core.????text(623, "Changes to this Privacy Policy");
                core.????elementEnd();
                core.????elementStart(624, "ol", 12);
                core.????elementStart(625, "li");
                core.????text(626, " DIKSHA reserves the right to modify this privacy statement at any time, so please review it frequently. If a material change is made to the practices regarding your personally identifiable information, you will be notified, by means of a notice on DIKSHA. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(627, "h4", 11);
                core.????text(628, "How to contact us?");
                core.????elementEnd();
                core.????elementStart(629, "ol", 12);
                core.????elementStart(630, "li");
                core.????text(631, " If you have any queries, comments, or requests, please contact us by sending an email to ");
                core.????elementStart(632, "a", 19);
                core.????elementStart(633, "b");
                core.????text(634, "support@teamdiksha.org");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(635, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(636, "div", 26);
                core.????elementStart(637, "div", 27);
                core.????elementStart(638, "h4");
                core.????elementStart(639, "strong");
                core.????text(640, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(641, "label", 10);
                core.????elementStart(642, "em");
                core.????text(643, "( Last updated on ");
                core.????elementStart(644, "b");
                core.????text(645, "28-04-2021");
                core.????elementEnd();
                core.????text(646, " )");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(647, "p");
                core.????text(648, " This Content Policy sets out the guidelines for content to be followed on DIKSHA. The DIKSHA Strategy and Approach Paper clearly articulates one of the intentions of DIKSHA - to create a common repository of open education resources for easy access to teachers across the country. This Content Policy sets out the principles and process to achieve this end. ");
                core.????elementEnd();
                core.????elementStart(649, "p");
                core.????text(650, " The content creation and curation process on DIKSHA is envisaged to be an open process with low barriers to entry. It celebrates and encourages participation by making it simple to create and share content on the platform. It avoids creating barriers to entry in the form of centralized review workflows and federates that process to the community to police itself. Institutional Users, through their Administrators, being the custodians of DIKSHA, frame the guidelines and curation rules, and delegate the authority to curate to the community. This creates a platform that is open, has low barrier to entry, while the quality of content is ensured by the federated process. ");
                core.????elementEnd();
                core.????elementStart(651, "p");
                core.????text(652, " Set out below are some common-sense rules that all Users must comply with respect to Content on DIKSHA. These rules are to be taken seriously as Administrators are required to enforce the same strictly. Users are requested not to look for loopholes or ways around these guidelines and respect the spirit in which they have been created. ");
                core.????elementEnd();
                core.????elementStart(653, "p");
                core.????text(654, " Please read this Content Policy carefully, to learn more about the rules on appropriateness, accuracy, intellectual property rights and licensing that govern Content on DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(655, "p");
                core.????text(656, " This Content Policy should be read in conjunction and together with the ");
                core.????elementStart(657, "a", 23);
                core.????elementStart(658, "b");
                core.????text(659, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(660, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
                core.????elementStart(661, "a", 23);
                core.????elementStart(662, "b");
                core.????text(663, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(664, ". ");
                core.????elementEnd();
                core.????elementStart(665, "h4", 11);
                core.????text(666, "Principles for Content on DIKSHA");
                core.????elementEnd();
                core.????elementStart(667, "ol", 12);
                core.????elementStart(668, "li");
                core.????text(669, " Content on the DIKSHA will be contributed by various content contributors across the country. The intent is to enable access to a wide range and diverse content from across the country so as to enable better contextualisation of content and wide access for end users. ");
                core.????elementEnd();
                core.????elementStart(670, "li");
                core.????text(671, " All content published on DIKSHA belongs to the creators of content be it individuals or organisations that have made content available on the platform, they are responsible for use by open learning platforms and applications therefore, content creators are responsibles for ensuring accuracy and appropriateness of content. ");
                core.????elementEnd();
                core.????elementStart(672, "li");
                core.????text(673, " Users can make multilingual and diverse content available on DIKSHA ranging from courses for in-service and pre-service teachers to classroom resources to tools for assessment and evaluation both of teachers and learners. ");
                core.????elementEnd();
                core.????elementStart(674, "li");
                core.????text(675, " Content on DIKSHA means and includes, (i) content that is written, uploaded, submitted, stored, sent, received or shared using DIKSHA, teaching and learning content in the context of school education, courses, lesson plans, worksheets, supplemental materials for classroom and other such learning materials meant for wide user consumption, and (iii) other types of Content described in the ");
                core.????elementStart(676, "a", 23);
                core.????elementStart(677, "b");
                core.????text(678, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(679, ". ");
                core.????elementEnd();
                core.????elementStart(680, "li");
                core.????text(681, " Registered Users are solely responsible for the accuracy, appropriateness and violations of any privacy rights, third party rights including intellectual property rights with regards to their Content. ");
                core.????elementEnd();
                core.????elementStart(682, "li");
                core.????text(683, " Different types of Content are submitted/ posted/ uploaded / published on DIKSHA following different processes and workflows based on the purpose of the Content. Certain Content, such as posts, comments, feedback, submissions, responses, explanations in forums/groups or using project/ survey/ observation tools etc., are directly submitted/ posted/ uploaded. Certain Content contributed by Registered Users that is meant for wider user consumption is published by Institutional Users after following a review process described below. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(684, "h4", 11);
                core.????text(685, "Content Contribution");
                core.????elementEnd();
                core.????elementStart(686, "p");
                core.????text(687, "Content that is published on DIKSHA for wider user consumption can only be created by Registered Users who are authorised by an Institutional User to have read, write and edit rights to create Content. This authorisation may happen at central level or state level. Each Institutional User has their own guidelines for such authorisation. Registered Users who create Content are responsible for creating and contributing Content that complies with this ");
                core.????elementStart(688, "a", 25);
                core.????elementStart(689, "b");
                core.????text(690, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(691, ", the ");
                core.????elementStart(692, "a", 23);
                core.????elementStart(693, "b");
                core.????text(694, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(695, " and ");
                core.????elementStart(696, "a", 24);
                core.????elementStart(697, "b");
                core.????text(698, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(699, ", and any other policies and guidelines prescribed from time to time. Registered Users shall have exercised reasonable diligence to satisfy themselves that their Content is ready for public consumption prior to being submitted for review and use on DIKSHA.");
                core.????elementEnd();
                core.????elementStart(700, "h4", 11);
                core.????text(701, "Content Review & Publishing ");
                core.????elementEnd();
                core.????elementStart(702, "p");
                core.????text(703, "All Content published on DIKSHA for wider user consumption is curated, reviewed and published by Registered Users who are authorised by an Institutional to have read, write and edit rights to curate, review or publish Content. This authorisation may happen at central level or state level. Each Institutional User has their own guidelines for such authorisation. Registered Users who curate, review or publish Content shall ensure that the Content they accept complies with this Content Policy, the ");
                core.????elementStart(704, "a", 23);
                core.????elementStart(705, "b");
                core.????text(706, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(707, " and ");
                core.????elementStart(708, "a", 24);
                core.????elementStart(709, "b");
                core.????text(710, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(711, ", and any other policies and guidelines prescribed from time to time. ");
                core.????elementEnd();
                core.????elementStart(712, "h4", 11);
                core.????text(713, "Accuracy and Appropriateness ");
                core.????elementEnd();
                core.????text(714, "- Registered Users must ensure that all the Content they have created, contributed, reviewed or published is appropriate and accurate and meets their pedagogical and usability requirements as prescribed by Institutional Users. Content identified as inappropriate or inaccurate, as per this Content Policy, will not be published and can be unilaterally removed from DIKSHA. ");
                core.????elementStart(715, "ol", 12);
                core.????elementStart(716, "li");
                core.????elementStart(717, "strong");
                core.????text(718, "Accurate Content");
                core.????elementEnd();
                core.????text(719, " - All Content must: ");
                core.????elementStart(720, "ol", 14);
                core.????elementStart(721, "li");
                core.????text(722, "Be factually correct,");
                core.????elementEnd();
                core.????elementStart(723, "li");
                core.????text(724, " Use language in text, audio, video and interactive materials that is simple and easy to understand, and ");
                core.????elementEnd();
                core.????elementStart(725, "li");
                core.????text(726, " Be contextual and relevant to the needs of the intended User. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(727, "li");
                core.????elementStart(728, "strong");
                core.????text(729, "Inappropriate Content");
                core.????elementEnd();
                core.????text(730, " includes, but is not limited to: ");
                core.????elementStart(731, "ol", 14);
                core.????elementStart(732, "li");
                core.????text(733, " Hate Speech - by words either written or spoken or by signs or by visible representation or otherwise promotes or attempts to promote feelings of enmity, hatred or ill-will against persons of a: ");
                core.????elementStart(734, "ul", 17);
                core.????elementStart(735, "li");
                core.????text(736, "Caste");
                core.????elementEnd();
                core.????elementStart(737, "li");
                core.????text(738, "Class");
                core.????elementEnd();
                core.????elementStart(739, "li");
                core.????text(740, "Tribe");
                core.????elementEnd();
                core.????elementStart(741, "li");
                core.????text(742, "Race");
                core.????elementEnd();
                core.????elementStart(743, "li");
                core.????text(744, "Ethnicity");
                core.????elementEnd();
                core.????elementStart(745, "li");
                core.????text(746, "Sex, gender, or gender identity");
                core.????elementEnd();
                core.????elementStart(747, "li");
                core.????text(748, "National origin");
                core.????elementEnd();
                core.????elementStart(749, "li");
                core.????text(750, "Religious affiliation");
                core.????elementEnd();
                core.????elementStart(751, "li");
                core.????text(752, "Sexual orientation, or");
                core.????elementEnd();
                core.????elementStart(753, "li");
                core.????text(754, "Disabilities or diseases");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(755, "li");
                core.????text(756, " Sexually explicit content ");
                core.????elementStart(757, "ul", 17);
                core.????elementStart(758, "li");
                core.????text(759, "Pornography");
                core.????elementEnd();
                core.????elementStart(760, "li");
                core.????text(761, " Explicit text/images/illustrations/sounds of sexual content ");
                core.????elementEnd();
                core.????elementStart(762, "li");
                core.????text(763, "Descriptions of sexual acts");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(764, "li");
                core.????text(765, " Depiction of sexual violence and exploitation ");
                core.????elementStart(766, "ul", 17);
                core.????elementStart(767, "li");
                core.????text(768, " Includes sexual exploitation of minors, and sexual assault. ");
                core.????elementEnd();
                core.????elementStart(769, "li");
                core.????text(770, " Photographs/ Illustrations/videos depicting incidents of sexual violence ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(771, "li");
                core.????text(772, " Depiction of nudity ");
                core.????elementStart(773, "ul", 17);
                core.????elementStart(774, "li");
                core.????text(775, " Nudity would mean displaying genitals, breasts or buttocks (clothed or unclothed) for the purpose of sexual gratification. ");
                core.????elementEnd();
                core.????elementStart(776, "li");
                core.????text(777, " Other than the depiction of body parts which isn\u2019t gratuitously graphic and is educational, documentary, scientific, or artistic - paintings, sculptures, and other art that depicts nude figures, which is posted for educational purposes. Providing context will help users determine the purpose of the content/asset. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(778, "li");
                core.????text(779, " Content that promotes violence, including ");
                core.????elementStart(780, "ul", 17);
                core.????elementStart(781, "li");
                core.????text(782, " Promoting, encouraging, supporting, praising, or condoning violent actions, activities and behaviour - verbal, physical or emotional. ");
                core.????elementEnd();
                core.????elementStart(783, "li");
                core.????text(784, " Threatening or inciting others to commit acts of violence ");
                core.????elementEnd();
                core.????elementStart(785, "li");
                core.????text(786, " Expressing support or praise for groups, people that are involved in violent or criminal behaviour ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(787, "li");
                core.????text(788, " Content that promotes/depicts/reflects discrimination and bullying or encouraging such behaviour, including: ");
                core.????elementStart(789, "ul", 17);
                core.????elementStart(790, "li");
                core.????text(791, " Targeting individuals with the intention of degrading or shaming them. ");
                core.????elementEnd();
                core.????elementStart(792, "li");
                core.????text(793, " Illustrations or Images altered to degrade individuals ");
                core.????elementEnd();
                core.????elementStart(794, "li");
                core.????text(795, "Photos or videos of physical or verbal bullying");
                core.????elementEnd();
                core.????elementStart(796, "li");
                core.????text(797, "Sharing personal information or harassing people");
                core.????elementEnd();
                core.????elementStart(798, "li");
                core.????text(799, " Repeatedly targeting other people with unwanted requests or messages. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(800, "li");
                core.????text(801, " Comprises harmful or dangerous content ");
                core.????elementStart(802, "ul", 17);
                core.????elementStart(803, "li");
                core.????text(804, " which intends to incite violence or encourage dangerous or illegal activities that have an inherent risk of serious physical harm or death. ");
                core.????elementEnd();
                core.????elementStart(805, "li");
                core.????text(806, " Encourages dangerous or illegal activities for instance - money laundering, gambling, performing stunts, high risk activities, choking games, drug use, or other acts where serious injury or harm may result. Content that depicts dangerous acts may be allowed if the primary purpose is educational, documentary, scientific, or artistic (EDSA), and isn\u2019t gratuitously graphic. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(807, "li");
                core.????text(808, " Other possibilities: ");
                core.????elementStart(809, "ul", 17);
                core.????elementStart(810, "li");
                core.????text(811, " Content which violates the law for the time being in force, ");
                core.????elementEnd();
                core.????elementStart(812, "li");
                core.????text(813, " Content which infringes any trademark, copyright, or other intellectual property rights, ");
                core.????elementEnd();
                core.????elementStart(814, "li");
                core.????text(815, " Content which deceives or misleads the User about the origin of such Content and conveys information which is grossly offensive or menacing, ");
                core.????elementEnd();
                core.????elementStart(816, "li");
                core.????text(817, " Content which contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource, ");
                core.????elementEnd();
                core.????elementStart(818, "li");
                core.????text(819, " Content which threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation, ");
                core.????elementEnd();
                core.????elementStart(820, "li");
                core.????text(821, " Content involvings minors/ children in violence as victims or perpetrators or as forced witnesses to violence, or showing children as being subjected to any form of child abuse, ");
                core.????elementEnd();
                core.????elementStart(822, "li");
                core.????text(823, " Content involving abuse or ridicule of people with disabilities (physical or mental), ");
                core.????elementEnd();
                core.????elementStart(824, "li");
                core.????text(825, "Content involving cruelty to, or abuse of animals,");
                core.????elementEnd();
                core.????elementStart(826, "li");
                core.????text(827, " depiction of violence, cruelty and horror, scenes of violence primarily, ");
                core.????elementEnd();
                core.????elementStart(828, "li");
                core.????text(829, " Content involving images/text/ illustrations have the effect of encouraging, justifying, glorifying, glamorising alcohol drinking, drugs and substance abuse; consumption of tobacco or smoking, ");
                core.????elementEnd();
                core.????elementStart(830, "li");
                core.????text(831, " Content involving degrading or denigrating women in any manner, ");
                core.????elementEnd();
                core.????elementStart(832, "li");
                core.????text(833, " Content involving vulgarity, obscenity or depravity, ");
                core.????elementEnd();
                core.????elementStart(834, "li");
                core.????text(835, " Content involving dual meaning words as obviously cater to baser instincts, ");
                core.????elementEnd();
                core.????elementStart(836, "li");
                core.????text(837, " Content involving visuals or words contemptuous of racial, religious or other groups, ");
                core.????elementEnd();
                core.????elementStart(838, "li");
                core.????text(839, " Content involving visuals or words which promote superstition, communal, obscurantist, anti-scientific attitude, and ");
                core.????elementEnd();
                core.????elementStart(840, "li");
                core.????text(841, " Content involving visuals or words involving defamation of an individual or a body of individuals. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(842, "h4", 11);
                core.????text(843, "Intellectual Property Rights");
                core.????elementEnd();
                core.????elementStart(844, "ol", 12);
                core.????elementStart(845, "li");
                core.????text(846, " Registered Users are solely responsible for Content they have created, uploaded, sourced, linked, streamed, curated, reviewed, or published on DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(847, "li");
                core.????text(848, " Registered Users must ensure that Content (meant for wider user consumption) that they create, upload, source, link, stream, curate, review or publish on DIKSHA accurately reflects: ");
                core.????elementStart(849, "ol", 14);
                core.????elementStart(850, "li");
                core.????text(851, "Author");
                core.????elementEnd();
                core.????elementStart(852, "li");
                core.????text(853, "Copyright holder");
                core.????elementEnd();
                core.????elementStart(854, "li");
                core.????text(855, "Year of copyright");
                core.????elementEnd();
                core.????elementStart(856, "li");
                core.????text(857, " Attributions to creators whose content has been relied on, used in, or referred to in the Content (if any) and sources and citations. ");
                core.????elementEnd();
                core.????elementStart(858, "li");
                core.????text(859, "The relevant license, as per the Licensing Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(860, "li");
                core.????text(861, " Registered Users who have copyright in the Content they have contributed, consent to publication of their Content in accordance with the ");
                core.????elementStart(862, "a", 23);
                core.????elementStart(863, "b");
                core.????text(864, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(865, " and this ");
                core.????elementStart(866, "a", 25);
                core.????elementStart(867, "b");
                core.????text(868, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(869, ". ");
                core.????elementEnd();
                core.????elementStart(870, "li");
                core.????text(871, " In relation to Content being contributed by any person other than the copyright holder of the Content, Registered Users must ensure that they have the necessary authorisation, consent, license, or permission to publish such Content in accordance with the ");
                core.????elementStart(872, "a", 23);
                core.????elementStart(873, "b");
                core.????text(874, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(875, " and this ");
                core.????elementStart(876, "a", 25);
                core.????elementStart(877, "b");
                core.????text(878, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(879, ". ");
                core.????elementEnd();
                core.????elementStart(880, "li");
                core.????text(881, " If Content includes copyrighted materials (including text, images, photos, illustrations, sounds, music, videos, audio-visual combinations, etc.), Registered Users (creators, curators, reviewers and publishers) must ensure compliance with the license terms, proper attribution and any other third party intellectual property rights. Infringement of copyright or any other intellectual property rights is not acceptable, the proper attributions and acknowledgement of authors and creators for open education resource community and creative commons community must be respected and upheld at all times. Administrators and technology support providers of DIKSHA will remove any Content if properly notified that such Content infringes on another's intellectual property rights or violates this Content Policy, ");
                core.????elementStart(882, "a", 23);
                core.????elementStart(883, "b");
                core.????text(884, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(885, " and / or the ");
                core.????elementStart(886, "a", 24);
                core.????elementStart(887, "b");
                core.????text(888, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(889, ". ");
                core.????elementEnd();
                core.????elementStart(890, "li");
                core.????text(891, " By submitting / uploading / creating/ publishing Content on DIKSHA and following the open license frameworks adopted by DIKSHA, Registered Users recognise and accept that the Content (including all the elements that such Content comprises such as text, scripts, graphics, photos, sounds, music, videos, audio-visual combinations etc.) is placed in public domain will be accessed and used by any individual, institution or organisation through various platforms, portals and applications in accordance with the license conditions. ");
                core.????elementEnd();
                core.????elementStart(892, "li");
                core.????text(893, " It shall be the sole responsibility of Registered Users to ensure that proper and correct attributions, acknowledgements and sourcing references are given to the Content and individual(s)/ institution(s) that have been involved in the development and creation of Content and wherever Content has been quoted/used. ");
                core.????elementEnd();
                core.????elementStart(894, "li");
                core.????text(895, " It shall be the responsibility of Registered Users not to infringe upon any third party rights including but not limited to intellectual property rights such as copyrights or any other legal rights of individual(s)/organisation(s) with regards to Content contributed on DIKSHA. For any legal matter arising out of infringement of such rights by the Registered User, such Registered User shall be solely responsible for any financial or other damages arising out of such violations and disputes. ");
                core.????elementEnd();
                core.????elementStart(896, "li");
                core.????text(897, " GoI and/or the administrators and technology support providers of DIKSHA are not responsible for the violations of any third party rights including intellectual property rights by any User. ");
                core.????elementEnd();
                core.????elementStart(898, "li");
                core.????text(899, " Any violations of intellectual property rights will be the responsibility of the concerned Users. Any disputes will be settled by the respective parties. ");
                core.????elementEnd();
                core.????elementStart(900, "li");
                core.????text(901, " GoI and/or the administrators and technology support providers of DIKSHA do not endorse any Content published on DIKSHA, or any opinion, recommendation, or advice expressed therein, and DIKSHA expressly disclaims any and all liability in connection with Content. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(902, "h4", 11);
                core.????text(903, "Open Licensing Policy - Creative Commons Framework");
                core.????elementEnd();
                core.????elementStart(904, "ol", 17);
                core.????elementStart(905, "li");
                core.????text(906, " DIKSHA follows principles of open access, open licensing and is a platform for open education resources. Registered Users must ensure that they follow these licensing terms. Content which does not follow these licensing terms shall be rejected. ");
                core.????elementEnd();
                core.????elementStart(907, "li");
                core.????text(908, " Content must be made available under the Creative Commons Licence Framework. Creative Commons licenses provide an easy way to manage the copyright terms that attach automatically to all creative material under copyright. Creative Commons licenses allow that material to be shared and reused under terms that are flexible and legally sound. Creative Commons offers a core suite of six copyright licenses. Anyone can use Creative Commons licensed materials as long as the license conditions are followed. One condition of all Creative Commons licenses is attribution. DIKSHA permits the use of the following licences: ");
                core.????elementStart(909, "ol", 14);
                core.????elementStart(910, "li");
                core.????elementStart(911, "a", 28);
                core.????text(912, "CC BY4.0");
                core.????elementEnd();
                core.????text(913, " (Attribution) ");
                core.????elementEnd();
                core.????elementStart(914, "li");
                core.????elementStart(915, "a", 29);
                core.????text(916, "CC BY-SA 4.0");
                core.????elementEnd();
                core.????text(917, " (Attribution-ShareAlike) ");
                core.????elementEnd();
                core.????elementStart(918, "li");
                core.????elementStart(919, "a", 30);
                core.????text(920, "CC BY-NC 4.0");
                core.????elementEnd();
                core.????text(921, " (Attribution-NonCommercial) ");
                core.????elementEnd();
                core.????elementStart(922, "li");
                core.????elementStart(923, "a", 31);
                core.????text(924, "CC BY-NC-SA 4.0");
                core.????elementEnd();
                core.????text(925, " (Attribution-NonCommercial-ShareAlike) ");
                core.????elementEnd();
                core.????elementStart(926, "li");
                core.????elementStart(927, "a", 32);
                core.????text(928, "CC BY-ND 4.0");
                core.????elementEnd();
                core.????text(929, " (Attribution-Non-Derivative) ");
                core.????elementEnd();
                core.????elementStart(930, "li");
                core.????text(931, "YouTube License");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(932, "li");
                core.????text(933, " Registered Users must ensure that the Content submitted to be published on the DIKSHA for wider user consumption specifies: ");
                core.????elementStart(934, "ol", 17);
                core.????elementStart(935, "li");
                core.????text(936, " the relevant license under which such Content will be available to the Users. ");
                core.????elementEnd();
                core.????elementStart(937, "li");
                core.????text(938, " That the appropriate license terms and well as attributions relating to such Content are properly followed, including details of the creator and source/ citations; ");
                core.????elementEnd();
                core.????elementStart(939, "li");
                core.????text(940, " That license options mentioned herein are followed in all cases, and that the relevant license should be compatible with the copyright license applicable to the original piece of content. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(941, "li");
                core.????text(942, " Registered Users acknowledge and accept that since the Content provided herein follows open licensing norms such as creative commons licenses or other open licenses, the use of the Content shall not be limited to specific Institutional Users/ Registered Users that have published the Content and they shall be made available for discovery, access and use by any organisation, institution, platform, application and individual in general. ");
                core.????elementEnd();
                core.????elementStart(943, "li");
                core.????text(944, " Registered Users recognise and accept that once Content is submitted and placed in the public domain for use, they cannot unilaterally withdraw the Content or change the licensing terms. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(945, "h4", 11);
                core.????text(946, "Bad Practices:");
                core.????elementEnd();
                core.????text(947, " Registered Users must not indulge in any of the following bad practices in relation to their Content, including: ");
                core.????elementStart(948, "ol", 17);
                core.????elementStart(949, "li");
                core.????elementStart(950, "em");
                core.????text(951, "Uploading Content (including photos or videos) of individuals without their consent");
                core.????elementEnd();
                core.????text(952, ": Photos or videos which include other people who are not the subject of the photo and have not signed a consent / release form to share those photos or videos, are not permitted. Any person that appears in the photo or video (whose face is visible) must have signed a consent / release form where they consent to the sharing of such photo(s) with third parties. If the individual is a child under the age of 18 years, the parents or guardians of such child must have signed such consent/ release form. ");
                core.????elementEnd();
                core.????elementStart(953, "li");
                core.????elementStart(954, "em");
                core.????text(955, "Uploading Content (including photos or videos) with ethical issues: ");
                core.????elementEnd();
                core.????text(956, "Photographs or videos containing violent, pornographic, sensitive content or other inappropriate Content described in this Content Policy that could, in some way, offend our Users are not permitted. ");
                core.????elementEnd();
                core.????elementStart(957, "li");
                core.????elementStart(958, "em");
                core.????text(959, "Uploading Content (including photos, videos or documents) which require authorisation from the author / owner: ");
                core.????elementEnd();
                core.????text(960, "Certain types of Content (including photographs, videos or documents) require the permission of the author / owner such as copyrighted works (eg. logos, literary or artworks), or confidential documents. It is important that before uploading such Content, appropriate written permissions are taken. ");
                core.????elementEnd();
                core.????elementStart(961, "li");
                core.????elementStart(962, "em");
                core.????text(963, "Uploading Content which doesn\u2019t meet specified technical or visual requirements. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(964, "li");
                core.????elementStart(965, "em");
                core.????text(966, "Uploading repeats of the same Content. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(967, "li");
                core.????elementStart(968, "em");
                core.????text(969, "Uploading files that contain viruses or malware.");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(970, "h4", 11);
                core.????text(971, "Takedown Policy - ");
                core.????elementEnd();
                core.????elementStart(972, "ol", 17);
                core.????elementStart(973, "li");
                core.????text(974, " If a User believes that certain Content published on DIKSHA is in violation of this Content Policy or any applicable laws please contact us at ");
                core.????elementStart(975, "a", 19);
                core.????elementStart(976, "b");
                core.????text(977, "support@teamdiksha.org");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(978, " and necessary action will be taken to review and / or remove such content as quickly as possible. ");
                core.????elementEnd();
                core.????elementStart(979, "li");
                core.????text(980, " Administrators and technology support providers of DIKSHA reserve the right to remove Content from DIKSHA without any prior notice for any violation of the Content Policy, ");
                core.????elementStart(981, "a", 24);
                core.????elementStart(982, "b");
                core.????text(983, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(984, ", or the ");
                core.????elementStart(985, "a", 23);
                core.????elementStart(986, "b");
                core.????text(987, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(988, ". They may at their sole and absolute discretion delete, remove, disable access or otherwise deal with information, data or Content to comply with laws currently in force, including the Information Technology Act, 2000. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(989, "p");
                core.????elementStart(990, "em");
                core.????text(991, "DISCLAIMER: Though all efforts have been made to ensure the accuracy and currency of the Content on DIKSHA, the same should not be construed as a statement of law or used for any legal purposes. In no event will the Government of India, MoE or NCERT be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of DIKSHA. Links to other websites that have been included on this platform are provided for public convenience only.");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(992, "div", 33);
                core.????elementStart(993, "div", 34);
                core.????elementStart(994, "h4");
                core.????elementStart(995, "strong");
                core.????text(996, "DIKSHA Group Guidelines");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(997, "label", 10);
                core.????elementStart(998, "em");
                core.????text(999, "( Last updated on ");
                core.????elementStart(1000, "b");
                core.????text(1001, "28-04-2021");
                core.????elementEnd();
                core.????text(1002, " )");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1003, "p");
                core.????text(1004, " These Group Guidelines specify the rights and responsibilities of Registered Users who use and participate in Groups. These Group Guidelines should be read in conjunction with the ");
                core.????elementStart(1005, "a", 23);
                core.????elementStart(1006, "b");
                core.????text(1007, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1008, ", ");
                core.????elementStart(1009, "a", 25);
                core.????elementStart(1010, "b");
                core.????text(1011, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1012, " and ");
                core.????elementStart(1013, "a", 24);
                core.????elementStart(1014, "b");
                core.????text(1015, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1016, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
                core.????elementStart(1017, "a", 23);
                core.????elementStart(1018, "b");
                core.????text(1019, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1020, ". ");
                core.????elementEnd();
                core.????elementStart(1021, "ol", 35);
                core.????elementStart(1022, "h4", 11);
                core.????text(1023, "What is a Group? ");
                core.????elementStart(1024, "ol", 12);
                core.????elementStart(1025, "li");
                core.????text(1026, "A Group is a set of Registered Users");
                core.????elementEnd();
                core.????elementStart(1027, "li");
                core.????text(1028, " A Group can be created by a Group Admin and comprises Group Members ");
                core.????elementEnd();
                core.????elementStart(1029, "li");
                core.????text(1030, " Groups are only visible to the Group Admin who has created the Group and the Group Members assigned to the Group. Groups are not searchable. ");
                core.????elementEnd();
                core.????elementStart(1031, "li");
                core.????text(1032, " Group Admins can assign activities on DIKSHA to the Group Members (visible on the Group). ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1033, "h4", 11);
                core.????text(1034, "Who is a Group Admin?");
                core.????elementEnd();
                core.????elementStart(1035, "p");
                core.????text(1036, " A Registered User who has created a Group or has been assigned to be a Group Admin by another Group Admin ");
                core.????elementEnd();
                core.????elementStart(1037, "h4", 11);
                core.????text(1038, "Who is a Group Member?");
                core.????elementEnd();
                core.????elementStart(1039, "p");
                core.????text(1040, " A Registered User who has been added to Group as a Group Member by a Group Admin. ");
                core.????elementEnd();
                core.????elementStart(1041, "h4", 11);
                core.????text(1042, "What can a Group Admin do on DIKSHA?");
                core.????elementEnd();
                core.????elementStart(1043, "ol", 12);
                core.????elementStart(1044, "li");
                core.????text(1045, "Create a Group");
                core.????elementEnd();
                core.????elementStart(1046, "li");
                core.????text(1047, "Add / Remove Group Members");
                core.????elementEnd();
                core.????elementStart(1048, "li");
                core.????text(1049, "Mark another Group Member as a Group Admin");
                core.????elementEnd();
                core.????elementStart(1050, "li");
                core.????text(1051, "View, search and suggest activities on DIKSHA to the Group");
                core.????elementEnd();
                core.????elementStart(1052, "li");
                core.????text(1053, " View the progress of individual Group Members in relation to activities of the Group ");
                core.????elementEnd();
                core.????elementStart(1054, "li");
                core.????text(1055, " Communicate with the Group Members (as a Group and individually) ");
                core.????elementEnd();
                core.????elementStart(1056, "li");
                core.????text(1057, "Delete the Group");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1058, "h4", 11);
                core.????text(1059, "What Registered User data does the Group Admin have access to?");
                core.????elementEnd();
                core.????elementStart(1060, "ol", 12);
                core.????elementStart(1061, "li");
                core.????text(1062, "Name");
                core.????elementEnd();
                core.????elementStart(1063, "li");
                core.????text(1064, " Progress and milestones achieved by Group Members in relation to the activities of the Group ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1065, "h4", 11);
                core.????text(1066, "What are the responsibilities of the Group Admin?");
                core.????elementEnd();
                core.????elementStart(1067, "ol", 12);
                core.????elementStart(1068, "li");
                core.????text(1069, " To ensure that activities of the Group are in line with the ");
                core.????elementStart(1070, "a", 25);
                core.????elementStart(1071, "b");
                core.????text(1072, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1073, ", and accordingly meet the Accuracy and Appropriateness standards. ");
                core.????elementEnd();
                core.????elementStart(1074, "li");
                core.????text(1075, " To use the data and information of Registered Users only for the purposes of tracking the progress of Group Members, and for no other purpose. ");
                core.????elementEnd();
                core.????elementStart(1076, "li");
                core.????text(1077, " To ensure that any communication with Group Members is relevant to the purpose of the Group and meets the Appropriateness standards set out in the ");
                core.????elementStart(1078, "a", 25);
                core.????elementStart(1079, "b");
                core.????text(1080, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1081, ". ");
                core.????elementEnd();
                core.????elementStart(1082, "li");
                core.????text(1083, " To refrain from using the Group for any of the Prohibited Uses set out in the ");
                core.????elementStart(1084, "a", 23);
                core.????elementStart(1085, "b");
                core.????text(1086, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1087, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1088, "h4", 11);
                core.????text(1089, "What can a Group Member do once assigned to a Group?");
                core.????elementEnd();
                core.????elementStart(1090, "ol", 12);
                core.????elementStart(1091, "li");
                core.????text(1092, " View, participate and communicate in relation to the activities of the Group on DIKSHA ");
                core.????elementEnd();
                core.????elementStart(1093, "li");
                core.????text(1094, " View their own progress in relation to the activities of the Group on DIKSHA ");
                core.????elementEnd();
                core.????elementStart(1095, "li");
                core.????text(1096, "View a list of other Group Members");
                core.????elementEnd();
                core.????elementStart(1097, "li");
                core.????text(1098, "Opt out of any Group");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1099, "h4", 11);
                core.????text(1100, "What are the responsibilities of the Group Member?");
                core.????elementEnd();
                core.????elementStart(1101, "ol", 12);
                core.????elementStart(1102, "li");
                core.????text(1103, " To ensure that any communication with other Group Members or the Group Admin is relevant to the purpose of the Group and meet the Appropriateness standards set out in the ");
                core.????elementStart(1104, "a", 25);
                core.????elementStart(1105, "b");
                core.????text(1106, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1107, ". ");
                core.????elementEnd();
                core.????elementStart(1108, "li");
                core.????text(1109, " To refrain from using the Group for any of the Prohibited Uses set out in the ");
                core.????elementStart(1110, "a", 23);
                core.????elementStart(1111, "b");
                core.????text(1112, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1113, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1114, "div", 36);
                core.????elementStart(1115, "div", 37);
                core.????elementStart(1116, "h4");
                core.????elementStart(1117, "strong");
                core.????text(1118, "DIKSHA Course Terms");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1119, "label", 10);
                core.????elementStart(1120, "em");
                core.????text(1121, " ( Last updated on ");
                core.????elementStart(1122, "b");
                core.????text(1123, "28-04-2021");
                core.????elementEnd();
                core.????text(1124, " )");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1125, "p");
                core.????text(1126, " These Course Terms specify the rights and responsibilities of Registered Users who choose to join a course on DIKSHA and Administrators of courses on DIKSHA. Administrators of a course are Registered Users authorised by Institutional Users to offer courses on DIKSHA. ");
                core.????elementEnd();
                core.????elementStart(1127, "h4", 11);
                core.????text(1128, "For Registered Users ");
                core.????elementEnd();
                core.????elementStart(1129, "ol", 35);
                core.????elementStart(1130, "strong");
                core.????text(1131, "A Registered User that chooses to join a course on DIKSHA can:");
                core.????elementEnd();
                core.????elementStart(1132, "ol", 12);
                core.????elementStart(1133, "li");
                core.????text(1134, "Access the course and its Content");
                core.????elementEnd();
                core.????elementStart(1135, "li");
                core.????text(1136, "View their own progress");
                core.????elementEnd();
                core.????elementStart(1137, "li");
                core.????text(1138, " Access and download any certificates received on achieving milestones in the course ");
                core.????elementEnd();
                core.????elementStart(1139, "li");
                core.????text(1140, "Opt out of the course at any time");
                core.????elementEnd();
                core.????elementStart(1141, "li");
                core.????text(1142, " Provide consent for sharing personal information with Administrators of a course ");
                core.????elementEnd();
                core.????elementStart(1143, "li");
                core.????text(1144, " Revoke consent for sharing personal information with Administrators of a course ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1145, "strong");
                core.????text(1146, "Access and Revocation of access to data and information of Registered User: ");
                core.????elementEnd();
                core.????elementStart(1147, "ol", 12);
                core.????elementStart(1148, "li");
                core.????text(1149, " By choosing to join a course, the Registered User agrees to give the Administrators of the course access to their Name, State, District, progress in the course and milestones achieved for the purposes of analysing usage of Content to improve content and other offerings. ");
                core.????elementEnd();
                core.????elementStart(1150, "li");
                core.????text(1151, " Upon joining a course, a Registered User has the option to provide their explicit consent to give the Administrators of the course access to the following additional information, namely: (i) User ID (Teacher ID) (ii) Block (iii) School U-DISE code / Organisation ID or number (iv) School/Organisation name (v) mobile number and (vi) email address. This consent can be given either when prompted by a pop-up or by changing their data sharing settings. This additional information can only be used by the Administrators of the course for the purpose of: ");
                core.????elementStart(1152, "ol", 14);
                core.????elementStart(1153, "li");
                core.????text(1154, "tracking progress of the Registered User ;");
                core.????elementEnd();
                core.????elementStart(1155, "li");
                core.????text(1156, " analysing usage to improve the course, Content and other offerings; ");
                core.????elementEnd();
                core.????elementStart(1157, "li");
                core.????text(1158, "validating contact details;");
                core.????elementEnd();
                core.????elementStart(1159, "li");
                core.????text(1160, "issuing certificates; and");
                core.????elementEnd();
                core.????elementStart(1161, "li");
                core.????text(1162, " contacting Registered Users to send relevant information or seek feedback. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1163, "li");
                core.????text(1164, " Registered Users can revoke their consent to sharing additional information at any time by changing their data sharing settings. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1165, "strong");
                core.????text(1166, "Responsibilities of Registered Users: ");
                core.????elementEnd();
                core.????elementStart(1167, "ol", 12);
                core.????elementStart(1168, "li");
                core.????text(1169, " To ensure that any of their communication is relevant to the purpose of the course and meet the Appropriateness standards set out in the ");
                core.????elementStart(1170, "a", 25);
                core.????elementStart(1171, "b");
                core.????text(1172, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1173, ". ");
                core.????elementEnd();
                core.????elementStart(1174, "li");
                core.????text(1175, " To ensure that their use of courses does not violate any of the Prohibited Uses set out in the ");
                core.????elementStart(1176, "strong");
                core.????text(1177, "Terms of Use");
                core.????elementEnd();
                core.????text(1178, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1179, "h4", 11);
                core.????text(1180, "For Administrators of the course");
                core.????elementEnd();
                core.????elementStart(1181, "strong");
                core.????text(1182, "Administrators of a course on DIKSHA can: ");
                core.????elementEnd();
                core.????elementStart(1183, "ol", 12);
                core.????elementStart(1184, "li");
                core.????text(1185, "Create, review or publish courses on DIKSHA");
                core.????elementEnd();
                core.????elementStart(1186, "li");
                core.????text(1187, " Access data and information of courses created by or assigned to them, which contain: ");
                core.????elementStart(1188, "ol", 14);
                core.????elementStart(1189, "li");
                core.????text(1190, " Name, State, District and progress data of the Registered Users who have chosen to join the course, ");
                core.????elementEnd();
                core.????elementStart(1191, "li");
                core.????text(1192, " User ID (Teacher ID), Block, School U-DISE code / Organisation ID or number, School/Organisation name, mobile number, and email address of Registered Users, only if the Registered Users have given their explicit consent, ");
                core.????elementEnd();
                core.????elementStart(1193, "li");
                core.????text(1194, " Course usage data such as progress and completion details and other related matters ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1195, "li");
                core.????text(1196, " View and use such data and information. Reports with this additional information will be available only for a limited period of time and will expire in 15 days. ");
                core.????elementEnd();
                core.????elementStart(1197, "li");
                core.????text(1198, " Use the data and information of the Registered Users only for the purposes of: ");
                core.????elementStart(1199, "ol", 14);
                core.????elementStart(1200, "li");
                core.????text(1201, "tracking their progress;");
                core.????elementEnd();
                core.????elementStart(1202, "li");
                core.????text(1203, " analysing usage of Content to improve content and other offerings; ");
                core.????elementEnd();
                core.????elementStart(1204, "li");
                core.????text(1205, "validating contact details;");
                core.????elementEnd();
                core.????elementStart(1206, "li");
                core.????text(1207, "issuing certificates; and");
                core.????elementEnd();
                core.????elementStart(1208, "li");
                core.????text(1209, " contacting Registered Users to send relevant information or seek feedback. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1210, "li");
                core.????text(1211, " Create and issue certificates for Registered Users who have achieved milestones in the course. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1212, "strong");
                core.????text(1213, "Responsibilities of Administrators of a course: ");
                core.????elementEnd();
                core.????elementStart(1214, "ol", 12);
                core.????elementStart(1215, "li");
                core.????text(1216, " To ensure that the courses created, reviewed or published by them are in line with the ");
                core.????elementStart(1217, "a", 25);
                core.????elementStart(1218, "b");
                core.????text(1219, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1220, ", and accordingly meet the Accuracy and Appropriateness standards. ");
                core.????elementEnd();
                core.????elementStart(1221, "li");
                core.????text(1222, " To respect the privacy and data protection rights of Registered Users. ");
                core.????elementEnd();
                core.????elementStart(1223, "li");
                core.????text(1224, " To ensure the security of and use of data (especially personal data) shared by Registered Users is limited solely to the purposes mentioned here. ");
                core.????elementEnd();
                core.????elementStart(1225, "li");
                core.????text(1226, " To know that any use of data for purposes outside of the proper use shall be considered violation of the terms of the policies of DIKSHA as well as applicable laws and policies of India and they shall be responsible and liable for such actions and for any loss or damage arising from failure to comply with this obligation. ");
                core.????elementEnd();
                core.????elementStart(1227, "li");
                core.????text(1228, " To ensure that their communication (if any) with Registered Users is explicitly limited and relevant to the purpose of the course and meets the Appropriateness standards set out in the ");
                core.????elementStart(1229, "a", 25);
                core.????elementStart(1230, "b");
                core.????text(1231, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1232, ". The email address and phone number of Registered Users shall only be used to share information in connection with the course and shall not under any circumstance be used for any other matters. ");
                core.????elementEnd();
                core.????elementStart(1233, "li");
                core.????text(1234, " To ensure that their courses are not used for any of the Prohibited Uses set out in the ");
                core.????elementStart(1235, "a", 23);
                core.????elementStart(1236, "b");
                core.????text(1237, "Terms of Use of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1238, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1239, "p");
                core.????elementStart(1240, "em");
                core.????text(1241, "These Course Guidelines should be read in conjunction with the policies and guidelines of DIKSHA, including the ");
                core.????elementEnd();
                core.????elementStart(1242, "strong");
                core.????elementStart(1243, "em");
                core.????elementStart(1244, "a", 23);
                core.????elementStart(1245, "b");
                core.????text(1246, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1247, "em");
                core.????text(1248, ", ");
                core.????elementEnd();
                core.????elementStart(1249, "strong");
                core.????elementStart(1250, "em");
                core.????elementStart(1251, "a", 25);
                core.????elementStart(1252, "b");
                core.????text(1253, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1254, "em");
                core.????text(1255, " and ");
                core.????elementEnd();
                core.????elementStart(1256, "strong");
                core.????elementStart(1257, "em");
                core.????elementStart(1258, "a", 24);
                core.????elementStart(1259, "b");
                core.????text(1260, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1261, "em");
                core.????text(1262, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
                core.????elementEnd();
                core.????elementStart(1263, "strong");
                core.????elementStart(1264, "em");
                core.????elementStart(1265, "a", 23);
                core.????elementStart(1266, "b");
                core.????text(1267, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1268, "em");
                core.????text(1269, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1270, "div", 38);
                core.????elementStart(1271, "div", 39);
                core.????elementStart(1272, "h4");
                core.????elementStart(1273, "strong");
                core.????text(1274, "Administrator Guidelines");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1275, "label", 10);
                core.????elementStart(1276, "em");
                core.????text(1277, "( Last updated on ");
                core.????elementStart(1278, "b");
                core.????text(1279, "28-04-2021");
                core.????elementEnd();
                core.????text(1280, " )");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1281, "p");
                core.????text(1282, " These Administrator Guidelines specify the rights and responsibilities of Registered Users who are Administrators on DIKSHA. Administrators are Registered Users authorised by Institutional Users to be administrators on DIKSHA on their behalf. ");
                core.????elementEnd();
                core.????elementStart(1283, "h4", 11);
                core.????text(1284, "Administrators on DIKSHA can:");
                core.????elementEnd();
                core.????elementStart(1285, "strong");
                core.????text(1286, " Access the following data and information of Registered Users:");
                core.????elementEnd();
                core.????elementStart(1287, "ol", 14);
                core.????elementStart(1288, "li");
                core.????elementStart(1289, "strong");
                core.????elementStart(1290, "em");
                core.????text(1291, "Name");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1292, ", ");
                core.????elementStart(1293, "strong");
                core.????elementStart(1294, "em");
                core.????text(1295, "State");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1296, ", ");
                core.????elementStart(1297, "strong");
                core.????elementStart(1298, "em");
                core.????text(1299, "District");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1300, " and ");
                core.????elementStart(1301, "strong");
                core.????elementStart(1302, "em");
                core.????text(1303, "course progress data");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1304, " of the Registered Users who have chosen to join courses offered by the the Institutional User that the Administrator belongs to, ");
                core.????elementEnd();
                core.????elementStart(1305, "li");
                core.????elementStart(1306, "strong");
                core.????elementStart(1307, "em");
                core.????text(1308, "User ID");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1309, " (16 digit randomised system generated identifier for every Registered User), ");
                core.????elementStart(1310, "strong");
                core.????elementStart(1311, "em");
                core.????text(1312, "external ID");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1313, " (ID entered by the Registered User when they choose to submit additional details from their profile), ");
                core.????elementStart(1314, "strong");
                core.????elementStart(1315, "em");
                core.????text(1316, "Block");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1317, ", ");
                core.????elementStart(1318, "strong");
                core.????elementStart(1319, "em");
                core.????text(1320, "School U-DISE code / Organisation ID or number");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1321, ", ");
                core.????elementStart(1322, "strong");
                core.????elementStart(1323, "em");
                core.????text(1324, "School/Organisation name");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1325, ", ");
                core.????elementStart(1326, "strong");
                core.????elementStart(1327, "em");
                core.????text(1328, "mobile number(s)");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1329, ", and ");
                core.????elementStart(1330, "strong");
                core.????elementStart(1331, "em");
                core.????text(1332, "email address(s)");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1333, " linked to the profile of the Registered Users or additionally provided by the Registered User, ");
                core.????elementStart(1334, "strong");
                core.????text(1335, "only if");
                core.????elementEnd();
                core.????text(1336, " the Registered Users have given their explicit consent to share these details with the Administrators. This Administrator will belong to the same Institutional User that the Registered User belongs to. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1337, "strong");
                core.????text(1338, " Access data and information in relation to usage of DIKSHA and its Content, which includes: ");
                core.????elementEnd();
                core.????elementStart(1339, "ol", 14);
                core.????elementStart(1340, "li");
                core.????text(1341, " Content plays (i.e. any Content played / viewed / used for at least 10 seconds) ");
                core.????elementEnd();
                core.????elementStart(1342, "li");
                core.????text(1343, "Content play time (in minutes)");
                core.????elementEnd();
                core.????elementStart(1344, "li");
                core.????text(1345, " QR code scans (including using the DIAL Code directly) and failed scans ");
                core.????elementEnd();
                core.????elementStart(1346, "li");
                core.????text(1347, "User ratings and feedback for Content");
                core.????elementEnd();
                core.????elementStart(1348, "li");
                core.????text(1349, "Number and types of unique devices");
                core.????elementEnd();
                core.????elementStart(1350, "li");
                core.????text(1351, "Transactions per second on DIKSHA");
                core.????elementEnd();
                core.????elementStart(1352, "li");
                core.????text(1353, " Reports that compile the above mentioned data and information by board, medium, grade, subject, location, creator, device type, number of unique devices, energised textbook so as to enable Administrators to learn about usage of DIKSHA and its Content in different contexts ");
                core.????elementEnd();
                core.????elementStart(1354, "li");
                core.????text(1355, " Reports that compile the Content provided by Registered Users using tools like surveys, observations, and projects ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1356, "strong");
                core.????text(1357, " Use the data and information only for the purposes of:");
                core.????elementEnd();
                core.????elementStart(1358, "ol", 14);
                core.????elementStart(1359, "li");
                core.????text(1360, " Gaining insights through analysis of data to improve quality, effectiveness, relevance, usage of Content, courses, textbooks, programs and other offerings over time based on Content usage, interest, user feedback, popularity, completion rates, identified misconceptions; ");
                core.????elementEnd();
                core.????elementStart(1361, "li");
                core.????text(1362, " Assessing, evaluating, validating Content submitted / posted / uploaded / otherwise provided by Registered Users; ");
                core.????elementEnd();
                core.????elementStart(1363, "li");
                core.????text(1364, " Downloading details submitted and expressly shared by Registered Users only for the purposes mentioned herein and in accordance with the policies of DIKSHA; ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1365, "strong");
                core.????text(1366, " Grant or revoke rights to create, curate, review or publish Content on DIKSHA to Registered Users. ");
                core.????elementEnd();
                core.????elementStart(1367, "h4", 11);
                core.????text(1368, "Responsibilities of Administrators: ");
                core.????elementEnd();
                core.????elementStart(1369, "ol", 12);
                core.????elementStart(1370, "li");
                core.????text(1371, " To ensure that the Content created, reviewed or published by them are in line with the ");
                core.????elementStart(1372, "a", 25);
                core.????elementStart(1373, "b");
                core.????text(1374, "Content Policy of DIKSHA");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1375, ", and accordingly meet the Accuracy and Appropriateness standards; ");
                core.????elementEnd();
                core.????elementStart(1376, "li");
                core.????text(1377, " To respect the privacy and data protection rights of Registered Users; ");
                core.????elementEnd();
                core.????elementStart(1378, "li");
                core.????text(1379, " To ensure the security of and use of data (especially personal data) shared by Registered Users or obtained from DIKSHA is limited solely to the purposes mentioned here and is not used for: ");
                core.????elementStart(1380, "ol", 14);
                core.????elementStart(1381, "li");
                core.????text(1382, "Sale or other commercial purposes;");
                core.????elementEnd();
                core.????elementStart(1383, "li");
                core.????text(1384, "Advertising or marketing;");
                core.????elementEnd();
                core.????elementStart(1385, "li");
                core.????text(1386, " Phone calls or other forms of unsolicited communication that is not related to usage of DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(1387, "li");
                core.????text(1388, " Building a personal profile, other than for educational purposes on DIKSHA; ");
                core.????elementEnd();
                core.????elementStart(1389, "li");
                core.????text(1390, " Defaming, harassing, abusing, threatening or defrauding any Registered Users, ");
                core.????elementEnd();
                core.????elementStart(1391, "li");
                core.????text(1392, " Impersonating any person or entity, falsely claiming an affiliation with any person or entity, or accessing DIKSHA accounts without permission, or perform any other fraudulent activity; ");
                core.????elementEnd();
                core.????elementStart(1393, "li");
                core.????text(1394, " Sending junk mail or spam, informational announcements, charity requests, and petitions for signatures etc. ");
                core.????elementEnd();
                core.????elementStart(1395, "li");
                core.????text(1396, " Any of the Prohibited Purposes set out in the ");
                core.????elementStart(1397, "a", 23);
                core.????elementStart(1398, "b");
                core.????text(1399, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1400, "; and ");
                core.????elementEnd();
                core.????elementStart(1401, "li");
                core.????text(1402, " Any purpose that is not disclosed in this policy or on DIKSHA. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1403, "li");
                core.????text(1404, " To know that any use of data for purposes outside of the proper use shall be considered violation of the terms of the policies of DIKSHA as well as applicable laws and policies of India and they shall be responsible and liable for such actions and for any loss or damage arising from failure to comply with this obligation. ");
                core.????elementEnd();
                core.????elementStart(1405, "li");
                core.????text(1406, " To ensure that their communication (if any) with Registered Users is explicitly limited and relevant to the purposes specified here and meets the Appropriateness standards set out in the ");
                core.????elementStart(1407, "a", 25);
                core.????elementStart(1408, "b");
                core.????text(1409, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????text(1410, ". The email address and phone number of Registered Users shall only be used to share information in connection with uses specified here and shall not under any circumstance be used for any other matters. ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1411, "p");
                core.????elementStart(1412, "em");
                core.????text(1413, "These Administrator Guidelines should be read in conjunction with the policies and guidelines of DIKSHA, including the ");
                core.????elementEnd();
                core.????elementStart(1414, "a", 23);
                core.????elementStart(1415, "b");
                core.????elementStart(1416, "em");
                core.????text(1417, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1418, "em");
                core.????text(1419, ", ");
                core.????elementEnd();
                core.????elementStart(1420, "a", 25);
                core.????elementStart(1421, "b");
                core.????elementStart(1422, "em");
                core.????text(1423, "Content Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1424, "em");
                core.????text(1425, " and ");
                core.????elementEnd();
                core.????elementStart(1426, "a", 24);
                core.????elementStart(1427, "b");
                core.????elementStart(1428, "em");
                core.????text(1429, "Privacy Policy");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1430, "em");
                core.????text(1431, ". Defined terms used but not defined herein shall have the meaning ascribed to them in the ");
                core.????elementEnd();
                core.????elementStart(1432, "a", 23);
                core.????elementStart(1433, "b");
                core.????elementStart(1434, "em");
                core.????text(1435, "Terms of Use");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1436, "em");
                core.????text(1437, ". ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(1438, "mat-dialog-actions", 40);
                core.????elementStart(1439, "button", 41);
                core.????listener("click", function TermsConditionsComponent_Template_button_click_1439_listener() { return ctx.onCancel(); });
                core.????text(1440, " Cancel ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                core.????advance(2);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.termsConditions, " ");
            } }, directives: [dialog.MatDialogTitle, dialog.MatDialogContent, ng2SemanticUiV9.??dd, ng2SemanticUiV9.??bi, ng2SemanticUiV9.??df, ng2SemanticUiV9.??de, dialog.MatDialogActions, button.MatButton], styles: ["@charset \"UTF-8\";a[_ngcontent-%COMP%], body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], div[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], html[_ngcontent-%COMP%], label[_ngcontent-%COMP%], li[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{font-family:\"Noto Sans\",sans-serif!important}.header[_ngcontent-%COMP%]{border-bottom:.0625rem solid #ccc;position:fixed;top:0;left:0;right:0;z-index:99;transition:.8s,border .1s,box-shadow .1s,padding .1s}.header-fix[_ngcontent-%COMP%]{height:8.5rem}h1.logo[_ngcontent-%COMP%]{margin:0;padding:0}img.logo1[_ngcontent-%COMP%]{height:2.8125rem}img.logo2[_ngcontent-%COMP%]{height:3.75rem;margin-top:.3125rem}#initiatorText[_ngcontent-%COMP%]{display:none!important}.hdrtxt1[_ngcontent-%COMP%], .hdrtxt2[_ngcontent-%COMP%]{line-height:1;color:#333;text-align:center}.hdrtxt1[_ngcontent-%COMP%]{font-size:.875rem;padding-top:.625rem}#initiatorText1[_ngcontent-%COMP%]   .hdrtxt2[_ngcontent-%COMP%]{padding-bottom:.625rem}.hdrtxt2[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;padding-top:.3125rem}.nav-fix[_ngcontent-%COMP%]{height:3.625rem;padding:.3125rem 0;box-shadow:0 .125rem .125rem 0 rgba(0,0,0,.16),0 0 0 .0625rem rgba(0,0,0,.08);border-bottom:0;transition:.8s,border .1s,box-shadow .1s,padding .1s}.nav-fix[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:3rem;transition:.2s ease-in-out}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-bottom:0}.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{transition:color .25s ease-out;padding:.5rem 1rem;font-size:.875rem}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn[_ngcontent-%COMP%]{padding:.625rem .4375rem!important;margin:0}.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{background-color:transparent}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-default[_ngcontent-%COMP%]{border-color:#ccc;color:#4a4a4a}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-primary[_ngcontent-%COMP%]{border-color:#2e6da4;background:#337ab7;color:#fff}.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-default[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-default[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-primary[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.btn-primary[_ngcontent-%COMP%]:hover{color:#286090;background-color:#fff;border-color:#204d74;transition:none}.header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]{margin:0;padding:1.25rem .9375rem 0;background-color:#fff!important;font-size:1rem}.navbar-collapse.in[_ngcontent-%COMP%]{z-index:2;max-height:85vh}.navbar-collapse[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:.9375rem!important}.nav-tabs[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav-tabs[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#4a90e2}.hash-fix[_ngcontent-%COMP%]:before{display:block;content:\" \";visibility:hidden;margin-top:-3.75rem;height:3.75rem}@media (min-width:480px){.header-fix[_ngcontent-%COMP%]{height:7.5rem}}@media (min-width:768px){.header-fix[_ngcontent-%COMP%]{height:8.625rem}img.logo1[_ngcontent-%COMP%]{height:3.75rem}img.logo2[_ngcontent-%COMP%]{height:4.6875rem}.hdrtxt1[_ngcontent-%COMP%]{font-size:1rem}#initiatorText1[_ngcontent-%COMP%]{display:block!important}.navbar-collapse[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-bottom:0!important}}@media (min-width:1200px){.header-fix[_ngcontent-%COMP%]{height:5.125rem}.hdrtxt1[_ngcontent-%COMP%], .hdrtxt2[_ngcontent-%COMP%]{text-align:left}.hdrtxt1[_ngcontent-%COMP%]{padding-top:0}#initiatorText[_ngcontent-%COMP%]{display:block!important;padding-top:1.375rem;padding-bottom:1.375rem}#initiatorText1[_ngcontent-%COMP%]{display:none!important}}@media (min-width:1280px){.hdrtxt1[_ngcontent-%COMP%]{font-size:1.125rem}}.getStartedBtn[_ngcontent-%COMP%]{cursor:pointer}.navbar.bg-white-header[_ngcontent-%COMP%]{transition:.25s ease-in;box-shadow:0 .125rem .875rem .625rem rgba(0,0,0,.1);position:fixed;top:0;left:0;right:0;z-index:999;background:#fff;box-shadow:0 .125rem .875rem .625rem rgba(0,0,0,.1);padding:0 5rem;border-radius:0}.navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header-exp[_ngcontent-%COMP%]{border:.0625rem solid rgba(2,79,157,.4)}.navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header[_ngcontent-%COMP%]{width:9.875rem;color:#024f9d;padding:.25rem .5rem!important;font-size:.875rem;line-height:1.5;border-radius:.1875rem}.navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header.active[_ngcontent-%COMP%], .navbar.bg-white-header[_ngcontent-%COMP%]   .btn-header[_ngcontent-%COMP%]:hover{font-weight:700;box-shadow:none}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]{border:none;position:relative}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;background-color:#024f9d;height:.1875rem;width:1.5625rem;margin-top:.25rem;margin-bottom:.25rem;transform:rotate(0);position:relative;left:0;opacity:1}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1), .navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transition:transform .35s ease-in-out}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:not(.collapsed)   span[_ngcontent-%COMP%]:nth-child(1){position:absolute;left:.75rem;top:.625rem;transform:rotate(135deg);opacity:.9}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:not(.collapsed)   span[_ngcontent-%COMP%]:nth-child(2){height:.75rem;visibility:hidden;background-color:transparent}.navbar.bg-white-header[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:not(.collapsed)   span[_ngcontent-%COMP%]:nth-child(3){position:absolute;left:.75rem;top:.625rem;transform:rotate(-135deg);opacity:.9}.header-img[_ngcontent-%COMP%]{clear:both;display:block;overflow:hidden;padding:.625rem;background:#fff;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.header-img[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{padding:0 .625rem}.section-footer[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{font-size:.875rem;color:#fff;text-align:left;border:none;padding:0 0 .9375rem!important}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{font-size:.875rem;text-align:center}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .app-img[_ngcontent-%COMP%]{width:150px;margin:0 auto}.section-footer[_ngcontent-%COMP%]   .footer-app-details[_ngcontent-%COMP%]   .app-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:.3125rem}.section-footer[_ngcontent-%COMP%]   .page-view-count[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{font-size:.875rem}.section-footer[_ngcontent-%COMP%]   .page-view-count[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{font-size:32px}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:left;font-size:.875rem;font-weight:400}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{padding-bottom:1px!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover{color:#fff}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]{text-align:right}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;font-size:.875rem;color:#fff;padding:0!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{opacity:1}.container[_ngcontent-%COMP%]{width:auto;margin-right:auto;margin-left:auto}.header-gap[_ngcontent-%COMP%]{padding-top:60px}*[_ngcontent-%COMP%]{box-sizing:border-box}.tabs-content-wrapper[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:.875rem;line-height:1.5;max-height:calc(80vh - 100px)!important;padding:0 24px!important}.tabs-content-wrapper[_ngcontent-%COMP%]   .ui.secondary.menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{word-break:break-word;font-size:.875rem;margin-bottom:-.0625rem;border:1px solid #dfe1e5;color:#293845;height:3rem;box-shadow:.375rem .375rem .125rem 0 rgba(0,0,0,.1);background:#fff;border-radius:24px;min-height:2rem;cursor:pointer;word-wrap:break-word;white-space:normal;outline:0;transform:rotateZ(0);display:flex;transition:box-shadow .1s,width .1s;justify-content:space-between;align-items:center}.tabs-content-wrapper[_ngcontent-%COMP%]   .ui.secondary.menu[_ngcontent-%COMP%]   .active.item[_ngcontent-%COMP%]{background-color:#024f9d!important;color:#fff!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{font-size:20.25rem;color:#005da2;font-weight:700;margin-bottom:30px}p[_ngcontent-%COMP%]{font-size:18px;line-height:30px;margin-bottom:1.5625rem}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:700}dl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.625rem 0}.list-circle[_ngcontent-%COMP%]{list-style-type:circle}.lower-roman[_ngcontent-%COMP%]{list-style-type:lower-roman}a[_ngcontent-%COMP%]{text-decoration:none;color:#4a4a4a;cursor:pointer}a.no-underline[_ngcontent-%COMP%]:active, a.no-underline[_ngcontent-%COMP%]:focus, a.no-underline[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{text-decoration:none}a[_ngcontent-%COMP%]:focus{outline:-webkit-focus-ring-color auto .3125rem;outline-offset:-.125rem}li[_ngcontent-%COMP%]{overflow-wrap:break-word}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:circle}@media (min-width:320px){#terms-of-use[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{-webkit-padding-start:2.5rem;padding-inline-start:2.5rem}.container[_ngcontent-%COMP%]{max-width:100%!important;width:100%!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]{text-align:center}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{padding-bottom:.0625rem!important;display:block;text-align:center}}@media (min-width:768px){.container[_ngcontent-%COMP%]{width:45rem!important;max-width:45rem!important}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]{padding-bottom:.0625rem!important;display:inline;text-align:left}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .contact-txt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:left}.section-footer[_ngcontent-%COMP%]   .contact-div[_ngcontent-%COMP%]   .terms-of-use-txt[_ngcontent-%COMP%]{text-align:right}}@media (min-width:992px){.container[_ngcontent-%COMP%]{width:60rem!important;max-width:60rem!important}}@media (min-width:1200px){.container[_ngcontent-%COMP%]{width:71.25rem!important;max-width:71.25rem!important}}.nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-bottom:-.0625rem}.sub-heading[_ngcontent-%COMP%]{font-size:1.125rem}.nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:.0625rem solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-link[_ngcontent-%COMP%]{display:block;padding:.5rem 1rem}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:1px solid #dfe1e5;color:#293845;font-size:.875rem;white-space:nowrap}ul#termsAndPoliciesTab[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{height:3rem;font-size:.875rem;background:#fff;color:#008840;border:none;border-radius:24px;min-height:2rem;margin:5px;cursor:pointer;word-wrap:break-word;white-space:normal;outline:0;transform:rotateZ(0);display:flex;transition:box-shadow .1s,width .1s;justify-content:space-between;align-items:center}#terms-of-use[_ngcontent-%COMP%]   #termsAndPolicies[_ngcontent-%COMP%]{margin-top:1.25rem;padding:1.875rem;margin-bottom:1.875rem}#terms-of-use[_ngcontent-%COMP%]   .TermsOfUseClick[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   .TermsOfUseClick[_ngcontent-%COMP%]:hover, #terms-of-use[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer}#terms-of-use[_ngcontent-%COMP%]   .TermsOfUseClick[_ngcontent-%COMP%]:hover, #terms-of-use[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}#terms-of-use[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-break:break-word;font-size:.875rem}.arrow-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;position:relative;padding-left:15px}.arrow-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\"\u203A\";font-size:25px;position:absolute;top:-10px;left:-20px;color:#4a4a4a}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]{cursor:pointer}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]   .scrollTopWrapper[_ngcontent-%COMP%]{text-align:center;border-radius:50%;width:3.125rem;height:3.125rem;background:#dfe6ed;position:fixed;padding:.625rem;z-index:1;bottom:.625rem;right:.625rem}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]   .scrollTopWrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;font-size:1.5rem;line-height:.625rem}#terms-of-use[_ngcontent-%COMP%]   .scrollToTop[_ngcontent-%COMP%]   .scrollTopWrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:.875rem}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]{margin-top:8rem;margin-bottom:1.25rem;text-align:center}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:.9375rem;color:#024f9d;font-weight:700}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin-bottom:1.5625rem;border-left:1px solid #dfe1e5}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#024f9d;cursor:pointer}#terms-of-use[_ngcontent-%COMP%]   .early-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   sub[_ngcontent-%COMP%]{display:block;color:#333;bottom:-.5em}#terms-of-use[_ngcontent-%COMP%]   .showVersions.active[_ngcontent-%COMP%]{font-size:1.0625rem;font-weight:700}ul#termsAndPoliciesTab[_ngcontent-%COMP%]{-webkit-padding-start:0;padding-inline-start:0;border-bottom:1px solid #dfe1e5;padding-bottom:24px;width:auto}@media only screen and (max-width:769px){#terms-of-use[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], #terms-of-use[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{-webkit-padding-start:1.25rem;padding-inline-start:1.25rem}#terms-of-use.container[_ngcontent-%COMP%]{max-width:100%}}.navbar.no-sticky-top[_ngcontent-%COMP%]{position:absolute;background:0 0;z-index:999;width:100%}#terms-of-use[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600}#terms-of-use[_ngcontent-%COMP%]   label.tagLine[_ngcontent-%COMP%]{display:block;font-size:.875rem;margin-bottom:1.875rem}.heading-term[_ngcontent-%COMP%]{color:#4a4a4a;font-size:18px}.pull-right[_ngcontent-%COMP%]{float:right}.text-right[_ngcontent-%COMP%]{text-align:right!important}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{flex-wrap:nowrap;overflow-x:auto}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]::-webkit-scrollbar{width:.5rem;height:.5rem;background-color:#f5f5f5}#terms-of-use[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:.625rem;-webkit-box-shadow:inset 0 0 .375rem rgba(0,0,0,.5)}.dk-copyright-text[_ngcontent-%COMP%]{font-size:.875rem;color:var(--white);text-align:left;border:none;padding:0!important}ul#termsAndPoliciesTab[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]{background-color:#024f9d!important;color:#fff!important}.first-row-top[_ngcontent-%COMP%]{margin-top:-30px;margin-bottom:30px}"] });
        return TermsConditionsComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(TermsConditionsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-terms-conditions',
                    templateUrl: './terms-conditions.component.html',
                    styleUrls: ['./terms-conditions.component.scss']
                }]
        }], function () { return [{ type: GlobalService }, { type: dialog.MatDialogRef }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }]; }, null); })();

    function TermsConditionConfirmComponent_mat_list_item_12_Template(rf, ctx) { if (rf & 1) {
        var _r9 = core.????getCurrentView();
        core.????elementStart(0, "mat-list-item");
        core.????elementStart(1, "mat-checkbox", 10);
        core.????listener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener($event) { core.????restoreView(_r9); var list_r6 = ctx.$implicit; return list_r6.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_12_Template_mat_checkbox_ngModelChange_1_listener() { core.????restoreView(_r9); var ctx_r10 = core.????nextContext(); return ctx_r10.updateAllChecked(); });
        core.????elementStart(2, "div", 11);
        core.????text(3);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var list_r6 = ctx.$implicit;
        var i_r7 = ctx.index;
        core.????advance(1);
        core.????property("color", "primary")("name", "appropriateness" + i_r7)("ngModel", list_r6.checks);
        core.????advance(2);
        core.????textInterpolate1(" ", list_r6.text, " ");
    } }
    function TermsConditionConfirmComponent_mat_list_item_20_Template(rf, ctx) { if (rf & 1) {
        var _r14 = core.????getCurrentView();
        core.????elementStart(0, "mat-list-item");
        core.????elementStart(1, "mat-checkbox", 10);
        core.????listener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener($event) { core.????restoreView(_r14); var list_r11 = ctx.$implicit; return list_r11.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_20_Template_mat_checkbox_ngModelChange_1_listener() { core.????restoreView(_r14); var ctx_r15 = core.????nextContext(); return ctx_r15.updateAllChecked(); });
        core.????elementStart(2, "div", 11);
        core.????text(3);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var list_r11 = ctx.$implicit;
        var i_r12 = ctx.index;
        core.????advance(1);
        core.????property("color", "primary")("name", "contentDetails" + i_r12)("ngModel", list_r11.checks);
        core.????advance(2);
        core.????textInterpolate1(" ", list_r11.text, " ");
    } }
    function TermsConditionConfirmComponent_mat_list_item_28_Template(rf, ctx) { if (rf & 1) {
        var _r19 = core.????getCurrentView();
        core.????elementStart(0, "mat-list-item");
        core.????elementStart(1, "mat-checkbox", 10);
        core.????listener("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener($event) { core.????restoreView(_r19); var list_r16 = ctx.$implicit; return list_r16.checks = $event; })("ngModelChange", function TermsConditionConfirmComponent_mat_list_item_28_Template_mat_checkbox_ngModelChange_1_listener() { core.????restoreView(_r19); var ctx_r20 = core.????nextContext(); return ctx_r20.updateAllChecked(); });
        core.????elementStart(2, "div", 11);
        core.????text(3);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var list_r16 = ctx.$implicit;
        var i_r17 = ctx.index;
        core.????advance(1);
        core.????property("color", "primary")("name", "usability" + i_r17)("ngModel", list_r16.checks);
        core.????advance(2);
        core.????textInterpolate1(" ", list_r16.text, " ");
    } }
    function TermsConditionConfirmComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
        core.????elementContainerStart(0);
        core.????elementStart(1, "button", 12);
        core.????element(2, "div", 13);
        core.????elementEnd();
        core.????elementContainerEnd();
    } }
    function TermsConditionConfirmComponent_ng_template_37_button_0_Template(rf, ctx) { if (rf & 1) {
        var _r24 = core.????getCurrentView();
        core.????elementStart(0, "button", 15);
        core.????listener("click", function TermsConditionConfirmComponent_ng_template_37_button_0_Template_button_click_0_listener() { core.????restoreView(_r24); var ctx_r23 = core.????nextContext(2); return ctx_r23.onSubmit(true); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r21 = core.????nextContext(2);
        core.????property("disabled", !ctx_r21.allChecked);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r21.resourceService.frmelmnts == null ? null : ctx_r21.resourceService.frmelmnts.btn == null ? null : ctx_r21.resourceService.frmelmnts.btn.submit, " ");
    } }
    function TermsConditionConfirmComponent_ng_template_37_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r26 = core.????getCurrentView();
        core.????elementStart(0, "button", 15);
        core.????listener("click", function TermsConditionConfirmComponent_ng_template_37_button_1_Template_button_click_0_listener() { core.????restoreView(_r26); var ctx_r25 = core.????nextContext(2); return ctx_r25.onSubmit(false); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r22 = core.????nextContext(2);
        core.????property("disabled", !ctx_r22.allChecked);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r22.resourceService.frmelmnts == null ? null : ctx_r22.resourceService.frmelmnts.btn == null ? null : ctx_r22.resourceService.frmelmnts.btn.save, " ");
    } }
    function TermsConditionConfirmComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
        core.????template(0, TermsConditionConfirmComponent_ng_template_37_button_0_Template, 2, 2, "button", 14);
        core.????template(1, TermsConditionConfirmComponent_ng_template_37_button_1_Template, 2, 2, "button", 14);
    } if (rf & 2) {
        var ctx_r5 = core.????nextContext();
        core.????property("ngIf", ctx_r5.isSubmit);
        core.????advance(1);
        core.????property("ngIf", !ctx_r5.isSubmit);
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
        TermsConditionConfirmComponent.??fac = function TermsConditionConfirmComponent_Factory(t) { return new (t || TermsConditionConfirmComponent)(core.????directiveInject(GlobalService), core.????directiveInject(dialog.MatDialogRef), core.????directiveInject(dialog.MAT_DIALOG_DATA)); };
        TermsConditionConfirmComponent.??cmp = core.????defineComponent({ type: TermsConditionConfirmComponent, selectors: [["lib-terms-condition-confirm"]], decls: 39, vars: 12, consts: [[1, "uci-modal"], ["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "mb-40"], [3, "cols", "resize"], [4, "ngFor", "ngForOf"], [1, "confirm-all-action"], ["mat-raised-button", "", 1, "primary", 3, "click"], ["mat-raised-button", "", 1, "action-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["submitBtn", ""], [3, "color", "name", "ngModel", "ngModelChange"], [1, "confirm-checkbox-label"], ["mat-raised-button", "", 1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], ["mat-raised-button", "", "class", "action-button", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", 1, "action-button", 3, "disabled", "click"]], template: function TermsConditionConfirmComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "section", 0);
                core.????elementStart(1, "h1", 1);
                core.????text(2);
                core.????elementEnd();
                core.????elementStart(3, "div", 2);
                core.????elementStart(4, "mat-grid-list", 3);
                core.????listener("resize", function TermsConditionConfirmComponent_Template_mat_grid_list_resize_4_listener($event) { return ctx.onResize($event); }, false, core.????resolveWindow);
                core.????elementStart(5, "mat-grid-tile");
                core.????elementStart(6, "div");
                core.????elementStart(7, "mat-list");
                core.????elementStart(8, "mat-list-item");
                core.????elementStart(9, "h4");
                core.????text(10);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(11, "mat-divider");
                core.????template(12, TermsConditionConfirmComponent_mat_list_item_12_Template, 4, 4, "mat-list-item", 4);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(13, "mat-grid-tile");
                core.????elementStart(14, "div");
                core.????elementStart(15, "mat-list");
                core.????elementStart(16, "mat-list-item");
                core.????elementStart(17, "h4");
                core.????text(18);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(19, "mat-divider");
                core.????template(20, TermsConditionConfirmComponent_mat_list_item_20_Template, 4, 4, "mat-list-item", 4);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(21, "mat-grid-tile");
                core.????elementStart(22, "div");
                core.????elementStart(23, "mat-list");
                core.????elementStart(24, "mat-list-item");
                core.????elementStart(25, "h4");
                core.????text(26);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(27, "mat-divider");
                core.????template(28, TermsConditionConfirmComponent_mat_list_item_28_Template, 4, 4, "mat-list-item", 4);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(29, "mat-dialog-actions", 5);
                core.????elementStart(30, "div");
                core.????elementStart(31, "button", 6);
                core.????listener("click", function TermsConditionConfirmComponent_Template_button_click_31_listener() { return ctx.allCheck(true); });
                core.????text(32);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(33, "div");
                core.????elementStart(34, "button", 7);
                core.????listener("click", function TermsConditionConfirmComponent_Template_button_click_34_listener() { return ctx.allCheck(false); });
                core.????text(35);
                core.????elementEnd();
                core.????template(36, TermsConditionConfirmComponent_ng_container_36_Template, 3, 0, "ng-container", 8);
                core.????template(37, TermsConditionConfirmComponent_ng_template_37_Template, 2, 2, "ng-template", null, 9, core.????templateRefExtractor);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                var _r4 = core.????reference(38);
                core.????advance(2);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.confirmWarning, ": ");
                core.????advance(2);
                core.????property("cols", ctx.breakpoint);
                core.????advance(6);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.appropriateness);
                core.????advance(2);
                core.????property("ngForOf", ctx.Appropriateness);
                core.????advance(6);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.contentDetails);
                core.????advance(2);
                core.????property("ngForOf", ctx.contentDetails);
                core.????advance(6);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.usability);
                core.????advance(2);
                core.????property("ngForOf", ctx.usability);
                core.????advance(4);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.confirmAll, " ");
                core.????advance(3);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.cancel, " ");
                core.????advance(1);
                core.????property("ngIf", ctx.isLoaderShow)("ngIfElse", _r4);
            } }, directives: [dialog.MatDialogTitle, dialog.MatDialogContent, gridList.MatGridList, gridList.MatGridTile, list.MatList, list.MatListItem, divider.MatDivider, common.NgForOf, dialog.MatDialogActions, button.MatButton, common.NgIf, checkbox.MatCheckbox, forms.NgControlStatus, forms.NgModel], styles: [".tabs-content-wrapper[_ngcontent-%COMP%]{padding:0 24px!important}.confirm-all-action[_ngcontent-%COMP%]{justify-content:space-between}.uci-modal[_ngcontent-%COMP%]{background:#fff;padding:20px;max-height:90vh;overflow:auto}.uci-modal[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{max-height:initial!important}.uci-modal[_ngcontent-%COMP%]     .mat-figure{align-items:initial!important}.uci-modal[_ngcontent-%COMP%]   .confirm-checkbox-label[_ngcontent-%COMP%]{white-space:break-spaces}"] });
        return TermsConditionConfirmComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(TermsConditionConfirmComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-terms-condition-confirm',
                    templateUrl: './terms-condition-confirm.component.html',
                    styleUrls: ['./terms-condition-confirm.component.scss']
                }]
        }], function () { return [{ type: GlobalService }, { type: dialog.MatDialogRef }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
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
        ToasterService.??fac = function ToasterService_Factory(t) { return new (t || ToasterService)(); };
        ToasterService.??prov = core.????defineInjectable({ token: ToasterService, factory: ToasterService.??fac });
        return ToasterService;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(ToasterService, [{
            type: core.Injectable
        }], function () { return []; }, null); })();

    function ConversationSetupComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "mat-error");
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.startMessageError, " ");
    } }
    function ConversationSetupComponent_ng_container_52_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r8 = core.????getCurrentView();
        core.????elementStart(0, "div", 21);
        core.????elementStart(1, "div", 22);
        core.????elementStart(2, "div", 23);
        core.????elementStart(3, "i", 24);
        core.????listener("click", function ConversationSetupComponent_ng_container_52_div_2_Template_i_click_3_listener() { core.????restoreView(_r8); var i_r6 = ctx.index; var ctx_r7 = core.????nextContext(2); return ctx_r7.onUserSegmentDelete(i_r6); });
        core.????elementEnd();
        core.????text(4);
        core.????elementStart(5, "div", 25);
        core.????text(6);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var userSegment_r5 = ctx.$implicit;
        var ctx_r4 = core.????nextContext(2);
        core.????advance(4);
        core.????textInterpolate1(" ", userSegment_r5.name, " ");
        core.????advance(2);
        core.????textInterpolate2("", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.lbl == null ? null : ctx_r4.resourceService.frmelmnts.lbl.userCount, " ", userSegment_r5.count, "");
    } }
    function ConversationSetupComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
        core.????elementContainerStart(0);
        core.????elementStart(1, "div", 19);
        core.????template(2, ConversationSetupComponent_ng_container_52_div_2_Template, 7, 3, "div", 20);
        core.????elementEnd();
        core.????elementContainerEnd();
    } if (rf & 2) {
        var ctx_r3 = core.????nextContext();
        core.????advance(2);
        core.????property("ngForOf", ctx_r3.userSegments);
    } }
    var ConversationSetupComponent = /** @class */ (function () {
        function ConversationSetupComponent(fb, uciService, globalService, dialog) {
            this.fb = fb;
            this.uciService = uciService;
            this.globalService = globalService;
            this.dialog = dialog;
            this.starringMessageChange = new core.EventEmitter();
            this.userSegmentDelete = new core.EventEmitter();
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
                    .pipe(operators.debounceTime(1000))
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
        ConversationSetupComponent.??fac = function ConversationSetupComponent_Factory(t) { return new (t || ConversationSetupComponent)(core.????directiveInject(forms.FormBuilder), core.????directiveInject(UciService), core.????directiveInject(GlobalService), core.????directiveInject(dialog.MatDialog)); };
        ConversationSetupComponent.??cmp = core.????defineComponent({ type: ConversationSetupComponent, selectors: [["lib-conversation-setup"]], inputs: { conversationForm: "conversationForm", isStartingMessageExist: "isStartingMessageExist", startMinDate: "startMinDate", userSegments: "userSegments" }, outputs: { starringMessageChange: "starringMessageChange", userSegmentDelete: "userSegmentDelete" }, decls: 53, vars: 21, consts: [[1, "uci-container"], ["cols", "1", "rowHeight", "4rem"], ["colspan", "1", 1, "font-1-2", "font-weight-bold"], [1, "w-100", "text-left"], [3, "formGroup"], ["appearance", "outline", 1, "w-100"], [1, "asterisk", "icon", "asterisk-color"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 3, "placeholder"], ["matInput", "", "rows", "5", "name", "description", "formControlName", "description", 3, "placeholder"], ["matInput", "", "type", "text", "name", "name", "formControlName", "purpose", 3, "placeholder"], ["matInput", "", "type", "text", "name", "startingMessage", "formControlName", "startingMessage", 3, "placeholder"], [4, "ngIf"], ["rowHeight", "6rem", 3, "cols"], ["matInput", "", "formControlName", "startDate", 3, "matDatepicker", "min"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "endDate", 3, "matDatepicker", "min"], ["endPicker", ""], [1, ""], [1, "ui", "three", "column", "grid"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "column"], [1, "ui", "fluid", "card"], [1, "content"], [1, "right", "floated", "icon", "trash", "delete-icon", 3, "click"], [1, "meta"]], template: function ConversationSetupComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "div", 0);
                core.????elementStart(1, "mat-grid-list", 1);
                core.????elementStart(2, "mat-grid-tile", 2);
                core.????elementStart(3, "div", 3);
                core.????text(4);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(5, "form", 4);
                core.????elementStart(6, "mat-form-field", 5);
                core.????elementStart(7, "mat-label");
                core.????text(8);
                core.????elementStart(9, "sup");
                core.????element(10, "i", 6);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(11, "input", 7);
                core.????elementEnd();
                core.????elementStart(12, "mat-form-field", 5);
                core.????elementStart(13, "mat-label");
                core.????text(14);
                core.????elementEnd();
                core.????elementStart(15, "textarea", 8);
                core.????text(16, "            ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(17, "mat-form-field", 5);
                core.????elementStart(18, "mat-label");
                core.????text(19);
                core.????elementStart(20, "sup");
                core.????element(21, "i", 6);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(22, "input", 9);
                core.????elementEnd();
                core.????elementStart(23, "mat-form-field", 5);
                core.????elementStart(24, "mat-label");
                core.????text(25);
                core.????elementStart(26, "sup");
                core.????element(27, "i", 6);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(28, "input", 10);
                core.????template(29, ConversationSetupComponent_mat_error_29_Template, 2, 1, "mat-error", 11);
                core.????elementEnd();
                core.????elementStart(30, "mat-grid-list", 12);
                core.????elementStart(31, "mat-grid-tile");
                core.????elementStart(32, "div", 3);
                core.????elementStart(33, "mat-form-field", 5);
                core.????elementStart(34, "mat-label");
                core.????text(35);
                core.????elementStart(36, "sup");
                core.????element(37, "i", 6);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(38, "input", 13);
                core.????element(39, "mat-datepicker-toggle", 14);
                core.????element(40, "mat-datepicker", null, 15);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(42, "mat-grid-tile");
                core.????elementStart(43, "div", 3);
                core.????elementStart(44, "mat-form-field", 5);
                core.????elementStart(45, "mat-label");
                core.????text(46);
                core.????elementEnd();
                core.????element(47, "input", 16);
                core.????element(48, "mat-datepicker-toggle", 14);
                core.????element(49, "mat-datepicker", null, 17);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(51, "div", 18);
                core.????template(52, ConversationSetupComponent_ng_container_52_Template, 3, 1, "ng-container", 11);
                core.????elementEnd();
            } if (rf & 2) {
                var _r1 = core.????reference(41);
                var _r2 = core.????reference(50);
                core.????advance(4);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.addConversation);
                core.????advance(1);
                core.????property("formGroup", ctx.conversationForm);
                core.????advance(3);
                core.????textInterpolate1("", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationName, " ");
                core.????advance(3);
                core.????propertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterName);
                core.????advance(3);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationDescription);
                core.????advance(1);
                core.????propertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterDescription);
                core.????advance(4);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationPurpose, " ");
                core.????advance(3);
                core.????propertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterPurpose);
                core.????advance(3);
                core.????textInterpolate1("", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.startMessage, " ");
                core.????advance(3);
                core.????propertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterMessage);
                core.????advance(1);
                core.????property("ngIf", ctx.isStartingMessageExist);
                core.????advance(1);
                core.????property("cols", ctx.matDateBreakpoint);
                core.????advance(5);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.startDate, " ");
                core.????advance(3);
                core.????property("matDatepicker", _r1)("min", ctx.startMinDate);
                core.????advance(1);
                core.????property("for", _r1);
                core.????advance(7);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.endDate, " ");
                core.????advance(1);
                core.????property("matDatepicker", _r2)("min", ctx.endMinDate);
                core.????advance(1);
                core.????property("for", _r2);
                core.????advance(4);
                core.????property("ngIf", ctx.userSegments && ctx.userSegments.length);
            } }, directives: [gridList.MatGridList, gridList.MatGridTile, forms.??angular_packages_forms_forms_y, forms.NgControlStatusGroup, ng2SemanticUiV9.??n, forms.FormGroupDirective, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, common.NgIf, datepicker.MatDatepickerInput, datepicker.MatDatepickerToggle, formField.MatSuffix, datepicker.MatDatepicker, formField.MatError, common.NgForOf], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.mat-column-action[_ngcontent-%COMP%]{width:5px}"] });
        return ConversationSetupComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(ConversationSetupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-conversation-setup',
                    templateUrl: './conversation-setup.component.html',
                    styleUrls: ['./conversation-setup.component.scss']
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: UciService }, { type: GlobalService }, { type: dialog.MatDialog }]; }, { conversationForm: [{
                type: core.Input
            }], isStartingMessageExist: [{
                type: core.Input
            }], startMinDate: [{
                type: core.Input
            }], userSegments: [{
                type: core.Input
            }], starringMessageChange: [{
                type: core.Output
            }], userSegmentDelete: [{
                type: core.Output
            }] }); })();

    function AddLogicComponent_mat_grid_tile_23_Template(rf, ctx) { if (rf & 1) {
        var _r6 = core.????getCurrentView();
        core.????elementStart(0, "mat-grid-tile", 21);
        core.????elementStart(1, "div", 22);
        core.????elementStart(2, "a", 23);
        core.????listener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_2_listener() { core.????restoreView(_r6); var ctx_r5 = core.????nextContext(); return ctx_r5.manualDownload(); });
        core.????text(3);
        core.????elementEnd();
        core.????elementStart(4, "a", 24);
        core.????listener("click", function AddLogicComponent_mat_grid_tile_23_Template_a_click_4_listener() { core.????restoreView(_r6); var ctx_r7 = core.????nextContext(); return ctx_r7.sampleODKDownload(); });
        core.????text(5);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.????nextContext();
        core.????advance(2);
        core.????propertyInterpolate("matTooltip", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.instructionManual);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.instructionManual, " ");
        core.????advance(1);
        core.????propertyInterpolate("matTooltip", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.sampleOdkForm);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.sampleOdkForm, " ");
    } }
    function AddLogicComponent_small_25_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "small", 25);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate(ctx_r1.fileErrorStatus);
    } }
    function AddLogicComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
        core.????elementContainerStart(0);
        core.????elementStart(1, "button", 26);
        core.????element(2, "div", 27);
        core.????elementEnd();
        core.????elementContainerEnd();
    } }
    function AddLogicComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
        var _r9 = core.????getCurrentView();
        core.????elementStart(0, "button", 28);
        core.????listener("click", function AddLogicComponent_ng_template_33_Template_button_click_0_listener() { core.????restoreView(_r9); var ctx_r8 = core.????nextContext(); return ctx_r8.onLogicAdd(); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.????nextContext();
        core.????property("disabled", ctx_r4.logicForm.invalid);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r4.logicForm.get("id").value ? ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.update : ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.add, " ");
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
                name: ['', forms.Validators.required],
                description: [''],
                formId: ['', forms.Validators.required]
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
        AddLogicComponent.??fac = function AddLogicComponent_Factory(t) { return new (t || AddLogicComponent)(core.????directiveInject(UciService), core.????directiveInject(forms.FormBuilder), core.????directiveInject(ToasterService), core.????directiveInject(GlobalService), core.????directiveInject(dialog.MatDialogRef), core.????directiveInject(dialog.MAT_DIALOG_DATA)); };
        AddLogicComponent.??cmp = core.????defineComponent({ type: AddLogicComponent, selectors: [["lib-add-logic"]], decls: 37, vars: 15, consts: [[2, "background", "white", "padding", "20px"], [1, "uci-logic-container"], ["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline", 1, "w-100"], [1, "asterisk", "icon", "asterisk-color"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 3, "placeholder"], ["matInput", "", "rows", "3", "name", "description", "formControlName", "description", 3, "placeholder"], ["rowHeight", "3rem", 3, "cols", "resize"], ["colspan", "1", 1, "font-1-2"], [1, "w-100", "text-left"], ["colspan", "2", "class", "font-1-2 computer only", 4, "ngIf"], ["type", "file", "name", "file", "accept", ".xml", 1, "uci-file-input", 3, "change"], ["class", "text-danger", 4, "ngIf"], [1, "mobile", "only", "field", "text-right", "p-0"], [1, "mr-5", "sample-download", 3, "click"], [1, "sample-download", 3, "click"], ["align", "end"], [4, "ngIf", "ngIfElse"], ["modalBtn", ""], ["mat-stroked-button", "", 1, "action-button", 3, "click"], ["colspan", "2", 1, "font-1-2", "computer", "only"], [1, "w-100", "text-right"], [1, "mx-5", "sample-download", 3, "matTooltip", "click"], [1, "ml-1", "sample-download", 3, "matTooltip", "click"], [1, "text-danger"], ["mat-stroked-button", "", 1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], ["mat-stroked-button", "", 1, "action-button", 3, "disabled", "click"]], template: function AddLogicComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "section", 0);
                core.????elementStart(1, "div", 1);
                core.????elementStart(2, "h1", 2);
                core.????text(3);
                core.????elementEnd();
                core.????elementStart(4, "mat-dialog-content");
                core.????elementStart(5, "form", 3);
                core.????elementStart(6, "mat-form-field", 4);
                core.????elementStart(7, "mat-label");
                core.????text(8);
                core.????elementStart(9, "sup");
                core.????element(10, "i", 5);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(11, "input", 6);
                core.????elementEnd();
                core.????elementStart(12, "mat-form-field", 4);
                core.????elementStart(13, "mat-label");
                core.????text(14);
                core.????elementEnd();
                core.????element(15, "textarea", 7);
                core.????elementEnd();
                core.????elementStart(16, "div");
                core.????elementStart(17, "mat-grid-list", 8);
                core.????listener("resize", function AddLogicComponent_Template_mat_grid_list_resize_17_listener($event) { return ctx.onResize($event); }, false, core.????resolveWindow);
                core.????elementStart(18, "mat-grid-tile", 9);
                core.????elementStart(19, "div", 10);
                core.????text(20);
                core.????elementStart(21, "sup");
                core.????element(22, "i", 5);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????template(23, AddLogicComponent_mat_grid_tile_23_Template, 6, 4, "mat-grid-tile", 11);
                core.????elementEnd();
                core.????elementStart(24, "input", 12);
                core.????listener("change", function AddLogicComponent_Template_input_change_24_listener($event) { return ctx.onFileUpload($event); });
                core.????elementEnd();
                core.????template(25, AddLogicComponent_small_25_Template, 2, 1, "small", 13);
                core.????elementStart(26, "div", 14);
                core.????elementStart(27, "a", 15);
                core.????listener("click", function AddLogicComponent_Template_a_click_27_listener() { return ctx.manualDownload(); });
                core.????text(28);
                core.????elementEnd();
                core.????elementStart(29, "a", 16);
                core.????listener("click", function AddLogicComponent_Template_a_click_29_listener() { return ctx.sampleODKDownload(); });
                core.????text(30);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(31, "mat-dialog-actions", 17);
                core.????template(32, AddLogicComponent_ng_container_32_Template, 3, 0, "ng-container", 18);
                core.????template(33, AddLogicComponent_ng_template_33_Template, 2, 2, "ng-template", null, 19, core.????templateRefExtractor);
                core.????elementStart(35, "button", 20);
                core.????listener("click", function AddLogicComponent_Template_button_click_35_listener() { return ctx.onCancel(); });
                core.????text(36);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                var _r3 = core.????reference(34);
                core.????advance(3);
                core.????textInterpolate1(" ", ctx.logicForm.get("id").value ? ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.updateConversationLogic : ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.addConversationLogic, " ");
                core.????advance(2);
                core.????property("formGroup", ctx.logicForm);
                core.????advance(3);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.name, " ");
                core.????advance(3);
                core.????propertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterName);
                core.????advance(3);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.description);
                core.????advance(1);
                core.????propertyInterpolate("placeholder", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.enterDescription);
                core.????advance(2);
                core.????property("cols", ctx.breakpoint);
                core.????advance(3);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.uploadOdkForm, " ");
                core.????advance(3);
                core.????property("ngIf", ctx.breakpoint === 3);
                core.????advance(2);
                core.????property("ngIf", ctx.odkFileAlreadyExist);
                core.????advance(3);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.instructionManual);
                core.????advance(2);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.sampleOdkForm);
                core.????advance(2);
                core.????property("ngIf", ctx.isModalLoaderShow)("ngIfElse", _r3);
                core.????advance(4);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.cancel, " ");
            } }, directives: [dialog.MatDialogTitle, dialog.MatDialogContent, forms.??angular_packages_forms_forms_y, forms.NgControlStatusGroup, ng2SemanticUiV9.??n, forms.FormGroupDirective, formField.MatFormField, formField.MatLabel, input.MatInput, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, gridList.MatGridList, gridList.MatGridTile, common.NgIf, dialog.MatDialogActions, button.MatButton, tooltip.MatTooltip], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .uci-logic-container{padding:20px}.uci-file-input[_ngcontent-%COMP%]{border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);line-height:1.21428571em;padding:.67857143em 1em;width:100%}.sample-download[_ngcontent-%COMP%]{text-decoration:underline!important;cursor:pointer!important}.mobile[_ngcontent-%COMP%]   .sample-download[_ngcontent-%COMP%]{font-size:.8rem}"] });
        return AddLogicComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(AddLogicComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-add-logic',
                    templateUrl: './add-logic.component.html',
                    styleUrls: ['./add-logic.component.scss'],
                }]
        }], function () { return [{ type: UciService }, { type: forms.FormBuilder }, { type: ToasterService }, { type: GlobalService }, { type: dialog.MatDialogRef }, { type: undefined, decorators: [{
                    type: core.Inject,
                    args: [dialog.MAT_DIALOG_DATA]
                }] }]; }, null); })();

    function LogicListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
        var _r5 = core.????getCurrentView();
        core.????elementStart(0, "button", 10);
        core.????listener("click", function LogicListComponent_button_7_Template_button_click_0_listener() { core.????restoreView(_r5); var ctx_r4 = core.????nextContext(); return ctx_r4.openModel(); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.btn == null ? null : ctx_r0.resourceService.frmelmnts.btn.addLogic, " ");
    } }
    function LogicListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
        var _r7 = core.????getCurrentView();
        core.????elementContainerStart(0);
        core.????elementStart(1, "mat-grid-list", 7);
        core.????elementStart(2, "div", 11);
        core.????elementStart(3, "div", 12);
        core.????elementStart(4, "div", 12);
        core.????element(5, "img", 13);
        core.????elementEnd();
        core.????elementStart(6, "div", 14);
        core.????text(7);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(8, "button", 15);
        core.????listener("click", function LogicListComponent_ng_container_9_Template_button_click_8_listener() { core.????restoreView(_r7); var ctx_r6 = core.????nextContext(); return ctx_r6.openModel(); });
        core.????text(9);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementContainerEnd();
    } if (rf & 2) {
        var ctx_r1 = core.????nextContext();
        core.????advance(7);
        core.????textInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.lbl == null ? null : ctx_r1.resourceService.frmelmnts.lbl.noLogic, " ");
        core.????advance(2);
        core.????textInterpolate1(" ", ctx_r1.resourceService.frmelmnts == null ? null : ctx_r1.resourceService.frmelmnts.btn == null ? null : ctx_r1.resourceService.frmelmnts.btn.addLogic, " ");
    } }
    function LogicListComponent_ng_template_10_th_3_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r8 = core.????nextContext(2);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r8.resourceService.frmelmnts == null ? null : ctx_r8.resourceService.frmelmnts.lbl == null ? null : ctx_r8.resourceService.frmelmnts.lbl.step, "");
    } }
    function LogicListComponent_ng_template_10_td_4_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 30);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var i_r20 = ctx.index;
        core.????advance(1);
        core.????textInterpolate1(" ", i_r20 + 1, " ");
    } }
    function LogicListComponent_ng_template_10_th_6_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r10 = core.????nextContext(2);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r10.resourceService.frmelmnts == null ? null : ctx_r10.resourceService.frmelmnts.lbl == null ? null : ctx_r10.resourceService.frmelmnts.lbl.name, "");
    } }
    function LogicListComponent_ng_template_10_td_7_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 30);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r21 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r21.name, " ");
    } }
    function LogicListComponent_ng_template_10_th_9_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r12 = core.????nextContext(2);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r12.resourceService.frmelmnts == null ? null : ctx_r12.resourceService.frmelmnts.lbl == null ? null : ctx_r12.resourceService.frmelmnts.lbl.description, "");
    } }
    function LogicListComponent_ng_template_10_td_10_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 30);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r22 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r22.description, " ");
    } }
    function LogicListComponent_ng_template_10_th_12_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r14 = core.????nextContext(2);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r14.resourceService.frmelmnts == null ? null : ctx_r14.resourceService.frmelmnts.lbl == null ? null : ctx_r14.resourceService.frmelmnts.lbl.action, "");
    } }
    function LogicListComponent_ng_template_10_td_13_Template(rf, ctx) { if (rf & 1) {
        var _r27 = core.????getCurrentView();
        core.????elementStart(0, "td", 31);
        core.????elementStart(1, "button", 32);
        core.????elementStart(2, "mat-icon");
        core.????text(3, "more_vert");
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(4, "mat-menu", 33, 34);
        core.????elementStart(6, "button", 35);
        core.????listener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_6_listener() { core.????restoreView(_r27); var element_r23 = ctx.$implicit; var i_r24 = ctx.index; var ctx_r26 = core.????nextContext(2); return ctx_r26.openModel(element_r23, i_r24); });
        core.????text(7);
        core.????elementEnd();
        core.????elementStart(8, "button", 35);
        core.????listener("click", function LogicListComponent_ng_template_10_td_13_Template_button_click_8_listener() { core.????restoreView(_r27); var element_r23 = ctx.$implicit; var i_r24 = ctx.index; var ctx_r28 = core.????nextContext(2); return ctx_r28.onDelete(element_r23, i_r24); });
        core.????text(9);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var _r25 = core.????reference(5);
        var ctx_r15 = core.????nextContext(2);
        core.????advance(1);
        core.????property("matMenuTriggerFor", _r25);
        core.????advance(6);
        core.????textInterpolate1(" ", ctx_r15.resourceService.frmelmnts == null ? null : ctx_r15.resourceService.frmelmnts.lbl == null ? null : ctx_r15.resourceService.frmelmnts.lbl.edit, " ");
        core.????advance(2);
        core.????textInterpolate1(" ", ctx_r15.resourceService.frmelmnts == null ? null : ctx_r15.resourceService.frmelmnts.lbl == null ? null : ctx_r15.resourceService.frmelmnts.lbl.delete, " ");
    } }
    function LogicListComponent_ng_template_10_tr_14_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "tr", 36);
    } }
    function LogicListComponent_ng_template_10_tr_15_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "tr", 37);
    } }
    function LogicListComponent_ng_template_10_div_17_Template(rf, ctx) { if (rf & 1) {
        var _r33 = core.????getCurrentView();
        core.????elementStart(0, "div", 38);
        core.????elementStart(1, "mat-card");
        core.????elementStart(2, "mat-card-content");
        core.????elementStart(3, "mat-grid-list", 39);
        core.????elementStart(4, "mat-grid-tile", 40);
        core.????elementStart(5, "div", 3);
        core.????text(6);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(7, "mat-grid-tile", 41);
        core.????elementStart(8, "div", 42);
        core.????elementStart(9, "h5");
        core.????text(10);
        core.????elementEnd();
        core.????elementStart(11, "div", 43);
        core.????elementStart(12, "button", 44);
        core.????elementStart(13, "mat-icon");
        core.????text(14, "more_vert");
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(15, "div", 45);
        core.????elementStart(16, "div", 46);
        core.????listener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_16_listener() { core.????restoreView(_r33); var botLogic_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r32 = core.????nextContext(2); return ctx_r32.openModel(botLogic_r30, i_r31); });
        core.????text(17);
        core.????elementEnd();
        core.????elementStart(18, "div", 46);
        core.????listener("click", function LogicListComponent_ng_template_10_div_17_Template_div_click_18_listener() { core.????restoreView(_r33); var botLogic_r30 = ctx.$implicit; var i_r31 = ctx.index; var ctx_r34 = core.????nextContext(2); return ctx_r34.onDelete(botLogic_r30, i_r31); });
        core.????text(19);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(20, "mat-grid-tile", 40);
        core.????elementStart(21, "div", 47);
        core.????text(22);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(23, "mat-grid-tile", 48);
        core.????elementStart(24, "div", 3);
        core.????text(25);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var botLogic_r30 = ctx.$implicit;
        var ctx_r18 = core.????nextContext(2);
        core.????advance(6);
        core.????textInterpolate(ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.name);
        core.????advance(4);
        core.????textInterpolate(botLogic_r30.name);
        core.????advance(7);
        core.????textInterpolate1(" ", ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.edit, " ");
        core.????advance(2);
        core.????textInterpolate1(" ", ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.delete, " ");
        core.????advance(3);
        core.????textInterpolate(ctx_r18.resourceService.frmelmnts == null ? null : ctx_r18.resourceService.frmelmnts.lbl == null ? null : ctx_r18.resourceService.frmelmnts.lbl.description);
        core.????advance(3);
        core.????textInterpolate1(" ", botLogic_r30.description, " ");
    } }
    function LogicListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "div", 16);
        core.????elementStart(1, "table", 17);
        core.????elementContainerStart(2, 18);
        core.????template(3, LogicListComponent_ng_template_10_th_3_Template, 2, 1, "th", 19);
        core.????template(4, LogicListComponent_ng_template_10_td_4_Template, 2, 1, "td", 20);
        core.????elementContainerEnd();
        core.????elementContainerStart(5, 21);
        core.????template(6, LogicListComponent_ng_template_10_th_6_Template, 2, 1, "th", 19);
        core.????template(7, LogicListComponent_ng_template_10_td_7_Template, 2, 1, "td", 20);
        core.????elementContainerEnd();
        core.????elementContainerStart(8, 22);
        core.????template(9, LogicListComponent_ng_template_10_th_9_Template, 2, 1, "th", 19);
        core.????template(10, LogicListComponent_ng_template_10_td_10_Template, 2, 1, "td", 20);
        core.????elementContainerEnd();
        core.????elementContainerStart(11, 23);
        core.????template(12, LogicListComponent_ng_template_10_th_12_Template, 2, 1, "th", 19);
        core.????template(13, LogicListComponent_ng_template_10_td_13_Template, 10, 3, "td", 24);
        core.????elementContainerEnd();
        core.????template(14, LogicListComponent_ng_template_10_tr_14_Template, 1, 0, "tr", 25);
        core.????template(15, LogicListComponent_ng_template_10_tr_15_Template, 1, 0, "tr", 26);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(16, "div", 27);
        core.????template(17, LogicListComponent_ng_template_10_div_17_Template, 26, 6, "div", 28);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.????nextContext();
        core.????advance(1);
        core.????property("dataSource", ctx_r3.datasource);
        core.????advance(13);
        core.????property("matHeaderRowDef", ctx_r3.displayedColumns);
        core.????advance(1);
        core.????property("matRowDefColumns", ctx_r3.displayedColumns);
        core.????advance(2);
        core.????property("ngForOf", ctx_r3.botLogics);
    } }
    var LogicListComponent = /** @class */ (function () {
        function LogicListComponent(uciService, globalService, dialog) {
            this.uciService = uciService;
            this.globalService = globalService;
            this.dialog = dialog;
            this.botLogics = [];
            this.modify = new core.EventEmitter();
            this.datasource = new table.MatTableDataSource([]);
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
        LogicListComponent.??fac = function LogicListComponent_Factory(t) { return new (t || LogicListComponent)(core.????directiveInject(UciService), core.????directiveInject(GlobalService), core.????directiveInject(dialog.MatDialog)); };
        LogicListComponent.??cmp = core.????defineComponent({ type: LogicListComponent, selectors: [["lib-logic-list"]], inputs: { botLogics: "botLogics" }, outputs: { modify: "modify" }, decls: 12, vars: 4, consts: [[1, "uci-container"], ["cols", "2", "rowHeight", "4rem"], ["colspan", "1", 1, "font-1-2", "font-weight-bold"], [1, "w-100", "text-left"], ["colspan", "1", 1, "right", "aligned"], [1, "w-100", "text-right"], ["mat-raised-button", "", "class", "primary", 3, "click", 4, "ngIf"], ["cols", "1"], [4, "ngIf", "ngIfElse"], ["showTable", ""], ["mat-raised-button", "", 1, "primary", 3, "click"], [1, "text-center", 2, "margin", "auto", "padding", "2rem"], [1, "text-center"], ["alt", "Search Icon", "src", "assets/uci-console/images/empty.svg"], [1, "text-center", "mt-20"], ["mat-raised-button", "", 1, "mt-10", 3, "click"], [1, "computer", "only"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "action"], ["mat-cell", "", "class", "center aligned", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "mobile", "only"], ["class", "mb-5", 4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "center", "aligned"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "uci-list-menu"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mb-5"], ["cols", "4", "rowHeight", "35"], ["colspan", "1"], ["colspan", "3", 1, "overflow-visible"], [1, "w-100", "d-flex", "justify-between", "align-middle"], ["suiDropdown", "", 1, "ui", "dropdown"], ["mat-icon-button", ""], ["suiDropdownMenu", "", 1, "menu"], [1, "item", 3, "click"], [1, "w-100", "wrap-text", "text-left"], ["colspan", "3"]], template: function LogicListComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "div", 0);
                core.????elementStart(1, "mat-grid-list", 1);
                core.????elementStart(2, "mat-grid-tile", 2);
                core.????elementStart(3, "div", 3);
                core.????text(4);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(5, "mat-grid-tile", 4);
                core.????elementStart(6, "div", 5);
                core.????template(7, LogicListComponent_button_7_Template, 2, 1, "button", 6);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(8, "mat-grid-list", 7);
                core.????template(9, LogicListComponent_ng_container_9_Template, 10, 2, "ng-container", 8);
                core.????template(10, LogicListComponent_ng_template_10_Template, 18, 4, "ng-template", null, 9, core.????templateRefExtractor);
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                var _r2 = core.????reference(11);
                core.????advance(4);
                core.????textInterpolate(ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.conversationFlow);
                core.????advance(3);
                core.????property("ngIf", ctx.botLogics && ctx.botLogics.length);
                core.????advance(2);
                core.????property("ngIf", ctx.botLogics && ctx.botLogics.length <= 0)("ngIfElse", _r2);
            } }, directives: [gridList.MatGridList, gridList.MatGridTile, common.NgIf, button.MatButton, table.MatTable, table.MatColumnDef, table.MatHeaderCellDef, table.MatCellDef, table.MatHeaderRowDef, table.MatRowDef, common.NgForOf, table.MatHeaderCell, table.MatCell, menu.MatMenuTrigger, icon.MatIcon, menu._MatMenu, menu.MatMenuItem, table.MatHeaderRow, table.MatRow, card.MatCard, card.MatCardContent, ng2SemanticUiV9.??bk, ng2SemanticUiV9.??bj, ng2SemanticUiV9.??bi], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.mat-column-action[_ngcontent-%COMP%]{width:5px}"] });
        return LogicListComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(LogicListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-logic-list',
                    templateUrl: './logic-list.component.html',
                    styleUrls: ['./logic-list.component.scss']
                }]
        }], function () { return [{ type: UciService }, { type: GlobalService }, { type: dialog.MatDialog }]; }, { botLogics: [{
                type: core.Input
            }], modify: [{
                type: core.Output
            }] }); })();

    var _c0$2 = ["verifyAllModal"];
    var _c1 = ["horizontalStepper"];
    var _c2 = ["verticalStepper"];
    function ConversationAddComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
        var _r13 = core.????getCurrentView();
        core.????elementStart(0, "div", 16);
        core.????elementStart(1, "lib-conversation-setup", 17);
        core.????listener("starringMessageChange", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_starringMessageChange_1_listener() { core.????restoreView(_r13); var ctx_r12 = core.????nextContext(2); return ctx_r12.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_6_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { core.????restoreView(_r13); var ctx_r14 = core.????nextContext(2); return ctx_r14.onUserSegmentDelete($event); });
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r2 = core.????nextContext(2);
        core.????advance(1);
        core.????property("conversationForm", ctx_r2.conversationForm)("startMinDate", ctx_r2.startMinDate)("userSegments", ctx_r2.userSegments)("isStartingMessageExist", ctx_r2.isStartingMessageExist);
    } }
    function ConversationAddComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
        var _r16 = core.????getCurrentView();
        core.????elementStart(0, "div", 18);
        core.????elementStart(1, "lib-logic-list", 19);
        core.????listener("modify", function ConversationAddComponent_div_1_div_8_Template_lib_logic_list_modify_1_listener($event) { core.????restoreView(_r16); var ctx_r15 = core.????nextContext(2); return ctx_r15.onBotLogicModify($event); });
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.????nextContext(2);
        core.????advance(1);
        core.????property("botLogics", ctx_r3.botLogics);
    } }
    function ConversationAddComponent_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        var _r18 = core.????getCurrentView();
        core.????elementContainerStart(0);
        core.????elementStart(1, "div", 20);
        core.????elementStart(2, "button", 21);
        core.????listener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_2_listener() { core.????restoreView(_r18); var ctx_r17 = core.????nextContext(2); return ctx_r17.onAddCancel(); });
        core.????text(3);
        core.????elementEnd();
        core.????elementStart(4, "button", 22);
        core.????listener("click", function ConversationAddComponent_div_1_ng_container_10_Template_button_click_4_listener() { core.????restoreView(_r18); var ctx_r19 = core.????nextContext(2); return ctx_r19.nextStep(); });
        core.????text(5);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementContainerEnd();
    } if (rf & 2) {
        var ctx_r4 = core.????nextContext(2);
        core.????advance(3);
        core.????textInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.cancel, " ");
        core.????advance(1);
        core.????property("disabled", ctx_r4.conversationForm.invalid || ctx_r4.isStartingMessageExist);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r4.resourceService.frmelmnts == null ? null : ctx_r4.resourceService.frmelmnts.btn == null ? null : ctx_r4.resourceService.frmelmnts.btn.next, " ");
    } }
    function ConversationAddComponent_div_1_ng_template_11_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r26 = core.????getCurrentView();
        core.????elementStart(0, "button", 21);
        core.????listener("click", function ConversationAddComponent_div_1_ng_template_11_button_1_Template_button_click_0_listener() { core.????restoreView(_r26); var ctx_r25 = core.????nextContext(3); return ctx_r25.backToStepOne(); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r20 = core.????nextContext(3);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r20.resourceService.frmelmnts == null ? null : ctx_r20.resourceService.frmelmnts.btn == null ? null : ctx_r20.resourceService.frmelmnts.btn.back, " ");
    } }
    function ConversationAddComponent_div_1_ng_template_11_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r28 = core.????getCurrentView();
        core.????elementStart(0, "button", 30);
        core.????listener("click", function ConversationAddComponent_div_1_ng_template_11_button_2_Template_button_click_0_listener() { core.????restoreView(_r28); var ctx_r27 = core.????nextContext(3); return ctx_r27.openItemsVerifyModal(false); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r21 = core.????nextContext(3);
        core.????property("disabled", !ctx_r21.isCheckedTermCondition || !ctx_r21.botLogics.length);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r21.resourceService.frmelmnts == null ? null : ctx_r21.resourceService.frmelmnts.btn == null ? null : ctx_r21.resourceService.frmelmnts.btn.save, " ");
    } }
    function ConversationAddComponent_div_1_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.????elementContainerStart(0);
        core.????elementStart(1, "button", 31);
        core.????element(2, "div", 32);
        core.????elementEnd();
        core.????elementContainerEnd();
    } }
    function ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        var _r30 = core.????getCurrentView();
        core.????elementStart(0, "button", 22);
        core.????listener("click", function ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template_button_click_0_listener() { core.????restoreView(_r30); var ctx_r29 = core.????nextContext(3); return ctx_r29.conversationId ? ctx_r29.onSubmit(true) : ctx_r29.openItemsVerifyModal(true); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r24 = core.????nextContext(3);
        core.????property("disabled", !ctx_r24.isCheckedTermCondition || !ctx_r24.botLogics.length);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r24.conversationId ? ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.update : ctx_r24.resourceService.frmelmnts == null ? null : ctx_r24.resourceService.frmelmnts.btn == null ? null : ctx_r24.resourceService.frmelmnts.btn.submit, " ");
    } }
    function ConversationAddComponent_div_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
        var _r32 = core.????getCurrentView();
        core.????elementStart(0, "div", 23);
        core.????template(1, ConversationAddComponent_div_1_ng_template_11_button_1_Template, 2, 1, "button", 24);
        core.????template(2, ConversationAddComponent_div_1_ng_template_11_button_2_Template, 2, 2, "button", 25);
        core.????template(3, ConversationAddComponent_div_1_ng_template_11_ng_container_3_Template, 3, 0, "ng-container", 11);
        core.????template(4, ConversationAddComponent_div_1_ng_template_11_ng_template_4_Template, 2, 2, "ng-template", null, 26, core.????templateRefExtractor);
        core.????elementEnd();
        core.????elementStart(6, "div", 23);
        core.????elementStart(7, "mat-checkbox", 27);
        core.????listener("ngModelChange", function ConversationAddComponent_div_1_ng_template_11_Template_mat_checkbox_ngModelChange_7_listener($event) { core.????restoreView(_r32); var ctx_r31 = core.????nextContext(2); return ctx_r31.isCheckedTermCondition = $event; });
        core.????elementStart(8, "mat-label", 28);
        core.????elementStart(9, "a", 29);
        core.????text(10);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var _r23 = core.????reference(5);
        var ctx_r6 = core.????nextContext(2);
        core.????advance(1);
        core.????property("ngIf", !ctx_r6.isLoaderShow);
        core.????advance(1);
        core.????property("ngIf", !ctx_r6.isLoaderShow);
        core.????advance(1);
        core.????property("ngIf", ctx_r6.isLoaderShow)("ngIfElse", _r23);
        core.????advance(4);
        core.????property("color", "primary")("ngModel", ctx_r6.isCheckedTermCondition);
        core.????advance(3);
        core.????textInterpolate1(" ", ctx_r6.resourceService.frmelmnts == null ? null : ctx_r6.resourceService.frmelmnts.lbl == null ? null : ctx_r6.resourceService.frmelmnts.lbl.aggreeTc, " ");
    } }
    function ConversationAddComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
        var _r34 = core.????getCurrentView();
        core.????elementStart(0, "div", 16);
        core.????elementStart(1, "lib-conversation-setup", 17);
        core.????listener("starringMessageChange", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_starringMessageChange_1_listener() { core.????restoreView(_r34); var ctx_r33 = core.????nextContext(2); return ctx_r33.onStarringMessageChange(); })("userSegmentDelete", function ConversationAddComponent_div_1_div_17_Template_lib_conversation_setup_userSegmentDelete_1_listener($event) { core.????restoreView(_r34); var ctx_r35 = core.????nextContext(2); return ctx_r35.onUserSegmentDelete($event); });
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r8 = core.????nextContext(2);
        core.????advance(1);
        core.????property("conversationForm", ctx_r8.conversationForm)("startMinDate", ctx_r8.startMinDate)("userSegments", ctx_r8.userSegments)("isStartingMessageExist", ctx_r8.isStartingMessageExist);
    } }
    function ConversationAddComponent_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
        var _r37 = core.????getCurrentView();
        core.????elementStart(0, "div");
        core.????elementStart(1, "div", 20);
        core.????elementStart(2, "button", 21);
        core.????listener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_2_listener() { core.????restoreView(_r37); var ctx_r36 = core.????nextContext(2); return ctx_r36.onAddCancel(); });
        core.????text(3);
        core.????elementEnd();
        core.????elementStart(4, "button", 22);
        core.????listener("click", function ConversationAddComponent_div_1_div_18_Template_button_click_4_listener() { core.????restoreView(_r37); var ctx_r38 = core.????nextContext(2); return ctx_r38.nextStep(); });
        core.????text(5);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r9 = core.????nextContext(2);
        core.????advance(3);
        core.????textInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.cancel, " ");
        core.????advance(1);
        core.????property("disabled", ctx_r9.conversationForm.invalid || ctx_r9.isStartingMessageExist);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r9.resourceService.frmelmnts == null ? null : ctx_r9.resourceService.frmelmnts.btn == null ? null : ctx_r9.resourceService.frmelmnts.btn.next, " ");
    } }
    function ConversationAddComponent_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
        var _r40 = core.????getCurrentView();
        core.????elementStart(0, "div", 18);
        core.????elementStart(1, "lib-logic-list", 19);
        core.????listener("modify", function ConversationAddComponent_div_1_div_20_Template_lib_logic_list_modify_1_listener($event) { core.????restoreView(_r40); var ctx_r39 = core.????nextContext(2); return ctx_r39.onBotLogicModify($event); });
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r10 = core.????nextContext(2);
        core.????advance(1);
        core.????property("botLogics", ctx_r10.botLogics);
    } }
    function ConversationAddComponent_div_1_div_21_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r47 = core.????getCurrentView();
        core.????elementStart(0, "button", 21);
        core.????listener("click", function ConversationAddComponent_div_1_div_21_button_2_Template_button_click_0_listener() { core.????restoreView(_r47); var ctx_r46 = core.????nextContext(3); return ctx_r46.backToStepOne(); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r41 = core.????nextContext(3);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r41.resourceService.frmelmnts == null ? null : ctx_r41.resourceService.frmelmnts.btn == null ? null : ctx_r41.resourceService.frmelmnts.btn.back, " ");
    } }
    function ConversationAddComponent_div_1_div_21_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r49 = core.????getCurrentView();
        core.????elementStart(0, "button", 30);
        core.????listener("click", function ConversationAddComponent_div_1_div_21_button_3_Template_button_click_0_listener() { core.????restoreView(_r49); var ctx_r48 = core.????nextContext(3); return ctx_r48.openItemsVerifyModal(false); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r42 = core.????nextContext(3);
        core.????property("disabled", !ctx_r42.isCheckedTermCondition || !ctx_r42.botLogics.length);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r42.resourceService.frmelmnts == null ? null : ctx_r42.resourceService.frmelmnts.btn == null ? null : ctx_r42.resourceService.frmelmnts.btn.save, " ");
    } }
    function ConversationAddComponent_div_1_div_21_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.????elementContainerStart(0);
        core.????elementStart(1, "button", 31);
        core.????element(2, "div", 32);
        core.????elementEnd();
        core.????elementContainerEnd();
    } }
    function ConversationAddComponent_div_1_div_21_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        var _r51 = core.????getCurrentView();
        core.????elementStart(0, "button", 22);
        core.????listener("click", function ConversationAddComponent_div_1_div_21_ng_template_5_Template_button_click_0_listener() { core.????restoreView(_r51); var ctx_r50 = core.????nextContext(3); return ctx_r50.conversationId ? ctx_r50.onSubmit(true) : ctx_r50.openItemsVerifyModal(true); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r45 = core.????nextContext(3);
        core.????property("disabled", !ctx_r45.isCheckedTermCondition || !ctx_r45.botLogics.length);
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r45.conversationId ? ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.update : ctx_r45.resourceService.frmelmnts == null ? null : ctx_r45.resourceService.frmelmnts.btn == null ? null : ctx_r45.resourceService.frmelmnts.btn.submit, " ");
    } }
    function ConversationAddComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
        var _r53 = core.????getCurrentView();
        core.????elementStart(0, "div");
        core.????elementStart(1, "div", 23);
        core.????template(2, ConversationAddComponent_div_1_div_21_button_2_Template, 2, 1, "button", 24);
        core.????template(3, ConversationAddComponent_div_1_div_21_button_3_Template, 2, 2, "button", 25);
        core.????template(4, ConversationAddComponent_div_1_div_21_ng_container_4_Template, 3, 0, "ng-container", 11);
        core.????template(5, ConversationAddComponent_div_1_div_21_ng_template_5_Template, 2, 2, "ng-template", null, 26, core.????templateRefExtractor);
        core.????elementEnd();
        core.????elementStart(7, "div", 23);
        core.????elementStart(8, "mat-checkbox", 27);
        core.????listener("ngModelChange", function ConversationAddComponent_div_1_div_21_Template_mat_checkbox_ngModelChange_8_listener($event) { core.????restoreView(_r53); var ctx_r52 = core.????nextContext(2); return ctx_r52.isCheckedTermCondition = $event; });
        core.????elementStart(9, "mat-label", 28);
        core.????elementStart(10, "a", 29);
        core.????text(11);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var _r44 = core.????reference(6);
        var ctx_r11 = core.????nextContext(2);
        core.????advance(2);
        core.????property("ngIf", !ctx_r11.isLoaderShow);
        core.????advance(1);
        core.????property("ngIf", !ctx_r11.isLoaderShow);
        core.????advance(1);
        core.????property("ngIf", ctx_r11.isLoaderShow)("ngIfElse", _r44);
        core.????advance(4);
        core.????property("color", "primary")("ngModel", ctx_r11.isCheckedTermCondition);
        core.????advance(3);
        core.????textInterpolate1(" ", ctx_r11.resourceService.frmelmnts == null ? null : ctx_r11.resourceService.frmelmnts.lbl == null ? null : ctx_r11.resourceService.frmelmnts.lbl.aggreeTc, " ");
    } }
    function ConversationAddComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "div", 2);
        core.????elementStart(1, "div", 3);
        core.????elementStart(2, "div", 4);
        core.????elementStart(3, "mat-horizontal-stepper", 5, 6);
        core.????elementStart(5, "mat-step", 7);
        core.????template(6, ConversationAddComponent_div_1_div_6_Template, 2, 4, "div", 8);
        core.????elementEnd();
        core.????elementStart(7, "mat-step", 7);
        core.????template(8, ConversationAddComponent_div_1_div_8_Template, 2, 1, "div", 9);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(9, "div", 10);
        core.????template(10, ConversationAddComponent_div_1_ng_container_10_Template, 6, 3, "ng-container", 11);
        core.????template(11, ConversationAddComponent_div_1_ng_template_11_Template, 11, 7, "ng-template", null, 12, core.????templateRefExtractor);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(13, "div", 13);
        core.????elementStart(14, "mat-vertical-stepper", 5, 14);
        core.????elementStart(16, "mat-step", 7);
        core.????template(17, ConversationAddComponent_div_1_div_17_Template, 2, 4, "div", 8);
        core.????template(18, ConversationAddComponent_div_1_div_18_Template, 6, 3, "div", 15);
        core.????elementEnd();
        core.????elementStart(19, "mat-step", 7);
        core.????template(20, ConversationAddComponent_div_1_div_20_Template, 2, 1, "div", 9);
        core.????template(21, ConversationAddComponent_div_1_div_21_Template, 12, 7, "div", 15);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var _r5 = core.????reference(12);
        var ctx_r0 = core.????nextContext();
        core.????advance(3);
        core.????property("linear", true);
        core.????advance(2);
        core.????propertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationSetup);
        core.????advance(1);
        core.????property("ngIf", ctx_r0.stepIndex === 1);
        core.????advance(1);
        core.????propertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationFlow);
        core.????advance(1);
        core.????property("ngIf", ctx_r0.stepIndex === 2);
        core.????advance(2);
        core.????property("ngIf", ctx_r0.stepIndex === 1)("ngIfElse", _r5);
        core.????advance(4);
        core.????property("linear", true);
        core.????advance(2);
        core.????propertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationSetup);
        core.????advance(1);
        core.????property("ngIf", ctx_r0.stepIndex === 1);
        core.????advance(1);
        core.????property("ngIf", ctx_r0.stepIndex === 1);
        core.????advance(1);
        core.????propertyInterpolate("label", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.conversationFlow);
        core.????advance(1);
        core.????property("ngIf", ctx_r0.stepIndex === 2);
        core.????advance(1);
        core.????property("ngIf", ctx_r0.stepIndex === 2);
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
                name: ['', forms.Validators.required],
                description: [''],
                purpose: ['', forms.Validators.required],
                startingMessage: ['', forms.Validators.required],
                startDate: [null, forms.Validators.required],
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
        ConversationAddComponent.??fac = function ConversationAddComponent_Factory(t) { return new (t || ConversationAddComponent)(core.????directiveInject(UciService), core.????directiveInject(router.Router), core.????directiveInject(router.ActivatedRoute), core.????directiveInject(forms.FormBuilder), core.????directiveInject(GlobalService), core.????directiveInject(ToasterService), core.????directiveInject(dialog.MatDialog)); };
        ConversationAddComponent.??cmp = core.????defineComponent({ type: ConversationAddComponent, selectors: [["lib-conversation-add"]], viewQuery: function ConversationAddComponent_Query(rf, ctx) { if (rf & 1) {
                core.????viewQuery(_c0$2, true);
                core.????viewQuery(_c1, true);
                core.????viewQuery(_c2, true);
            } if (rf & 2) {
                var _t;
                core.????queryRefresh(_t = core.????loadQuery()) && (ctx.verifyAllModal = _t.first);
                core.????queryRefresh(_t = core.????loadQuery()) && (ctx.horizontalStepper = _t.first);
                core.????queryRefresh(_t = core.????loadQuery()) && (ctx.verticalStepper = _t.first);
            } }, decls: 2, vars: 2, consts: [[3, "ngSwitch"], ["class", "uci-add-container", 4, "ngSwitchCase"], [1, "uci-add-container"], [1, "computer", "only", "d-flex", "align-items-baseline", "justify-content-between"], [1, "col-3"], [1, "background-transparent", 3, "linear"], ["horizontalStepper", ""], [3, "label"], ["class", "step1-wrapper", 4, "ngIf"], ["class", "step2-wrapper", 4, "ngIf"], [1, "col-1", "text-right"], [4, "ngIf", "ngIfElse"], ["stp2_btn", ""], [1, "mobile", "only"], ["verticalStepper", ""], [4, "ngIf"], [1, "step1-wrapper"], [3, "conversationForm", "startMinDate", "userSegments", "isStartingMessageExist", "starringMessageChange", "userSegmentDelete"], [1, "step2-wrapper"], [3, "botLogics", "modify"], [1, "right-floated", "pt-0"], ["mat-raised-button", "", 1, "mr-10", 3, "click"], ["mat-raised-button", "", 1, "uci-action-button", 3, "disabled", "click"], [1, "pt-0"], ["mat-raised-button", "", "class", "mr-10", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "mr-10 primary", 3, "disabled", "click", 4, "ngIf"], ["submitBtn1", ""], ["name", "isCheckedTermCondition", 3, "color", "ngModel", "ngModelChange"], [1, "font-weight-normal", "t-and-c-title"], ["href", "https://diksha.gov.in/term-of-use.html", "target", "_blank", 1, "tc-tag"], ["mat-raised-button", "", 1, "mr-10", "primary", 3, "disabled", "click"], [1, "action-button", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"]], template: function ConversationAddComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementContainerStart(0, 0);
                core.????template(1, ConversationAddComponent_div_1_Template, 22, 14, "div", 1);
                core.????elementContainerEnd();
            } if (rf & 2) {
                core.????property("ngSwitch", ctx.currentViewState);
                core.????advance(1);
                core.????property("ngSwitchCase", "ADD_CONVERSATION");
            } }, directives: [common.NgSwitch, common.NgSwitchCase, stepper.MatHorizontalStepper, stepper.MatStep, common.NgIf, stepper.MatVerticalStepper, ConversationSetupComponent, LogicListComponent, button.MatButton, checkbox.MatCheckbox, forms.NgControlStatus, forms.NgModel, formField.MatLabel], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .mat-horizontal-stepper-header{pointer-events:none}  .mat-vertical-stepper-header{pointer-events:none}.filter_search[_ngcontent-%COMP%]{border-radius:25px!important}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.w-50-px[_ngcontent-%COMP%]{width:50px!important}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.ui.form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-weight:400}.action-dropdown[_ngcontent-%COMP%]{top:2px;left:-56px;z-index:2;position:absolute}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{cursor:pointer}.action-dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background-color:#f6f6f6}.steps[_ngcontent-%COMP%]{width:20px;height:20px;overflow:hidden;border:1px solid #777;border-radius:10px;display:flex;align-items:center;justify-content:center;background-color:#e2e2e2;color:#000;margin-right:.7rem;font-size:.75rem}.font-0-75[_ngcontent-%COMP%]{font-size:.75rem}.line[_ngcontent-%COMP%]{background-color:#777;width:25%;height:1px}.blue-bg-white-text[_ngcontent-%COMP%]{background-color:#0c5593!important;color:#fff!important}.green-bg-white-text[_ngcontent-%COMP%]{background-color:#3c763d!important;color:#fff!important}.w-25-per[_ngcontent-%COMP%]{width:25%}.delete-icon[_ngcontent-%COMP%]{color:red;font-size:1.5rem}.delete-icon-sec[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]:disabled{background:#89cff0;border-color:#89cff0}.t-and-c-title[_ngcontent-%COMP%]{cursor:pointer!important}.t-and-c-title[_ngcontent-%COMP%]:hover{color:#89cff0!important}.sb-modal.ui.modal[_ngcontent-%COMP%]{box-shadow:none!important}.sb-modal.ui.modal.normal[_ngcontent-%COMP%]{max-width:45rem;height:0!important}.line-height[_ngcontent-%COMP%]{line-height:normal}.allCheckBtn[_ngcontent-%COMP%]{position:absolute;left:1rem}.text-danger[_ngcontent-%COMP%]{color:red!important}.text-success[_ngcontent-%COMP%]{color:green!important}.circular-button[_ngcontent-%COMP%]{height:30px;width:30px;display:flex;align-items:center;justify-content:center}.action-button[_ngcontent-%COMP%]{min-width:95px;border-radius:50px;color:#fff}.tc-tag[_ngcontent-%COMP%]{text-decoration:none}.step2-wrapper[_ngcontent-%COMP%]{min-height:300px}"] });
        return ConversationAddComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(ConversationAddComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-conversation-add',
                    templateUrl: './conversation-add.component.html',
                    styleUrls: ['./conversation-add.component.scss'],
                }]
        }], function () { return [{ type: UciService }, { type: router.Router }, { type: router.ActivatedRoute }, { type: forms.FormBuilder }, { type: GlobalService }, { type: ToasterService }, { type: dialog.MatDialog }]; }, { verifyAllModal: [{
                type: core.ViewChild,
                args: ['verifyAllModal']
            }], horizontalStepper: [{
                type: core.ViewChild,
                args: ['horizontalStepper']
            }], verticalStepper: [{
                type: core.ViewChild,
                args: ['verticalStepper']
            }] }); })();

    function UserSegmentListComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
        var _r5 = core.????getCurrentView();
        core.????elementStart(0, "tr", 21);
        core.????elementStart(1, "td", 22);
        core.????elementStart(2, "input", 23);
        core.????listener("change", function UserSegmentListComponent_tr_31_Template_input_change_2_listener($event) { core.????restoreView(_r5); var content_r2 = ctx.$implicit; var ctx_r4 = core.????nextContext(); return ctx_r4.onCheck($event, content_r2); });
        core.????elementEnd();
        core.????elementEnd();
        core.????elementStart(3, "td");
        core.????text(4);
        core.????elementEnd();
        core.????elementStart(5, "td");
        core.????text(6);
        core.????elementEnd();
        core.????elementStart(7, "td", 22);
        core.????text(8);
        core.????elementEnd();
        core.????elementStart(9, "td", 22);
        core.????text(10);
        core.????pipe(11, "date");
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var content_r2 = ctx.$implicit;
        var ctx_r0 = core.????nextContext();
        core.????advance(2);
        core.????property("checked", !!ctx_r0.selectedUserSegmentMap[content_r2.id]);
        core.????advance(2);
        core.????textInterpolate(content_r2.name);
        core.????advance(2);
        core.????textInterpolate(content_r2 == null ? null : content_r2.category);
        core.????advance(2);
        core.????textInterpolate(content_r2 == null ? null : content_r2.count);
        core.????advance(2);
        core.????textInterpolate(core.????pipeBind1(11, 5, content_r2 == null ? null : content_r2.updated_at));
    } }
    var _c0$3 = function (a0) { return { active: a0 }; };
    function UserSegmentListComponent_div_36_a_5_Template(rf, ctx) { if (rf & 1) {
        var _r9 = core.????getCurrentView();
        core.????elementStart(0, "a", 25);
        core.????listener("click", function UserSegmentListComponent_div_36_a_5_Template_a_click_0_listener() { core.????restoreView(_r9); var page_r7 = ctx.$implicit; var ctx_r8 = core.????nextContext(2); return ctx_r8.navigateToPage(page_r7); });
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var page_r7 = ctx.$implicit;
        var ctx_r6 = core.????nextContext(2);
        core.????property("ngClass", core.????pureFunction1(2, _c0$3, ctx_r6.pager.currentPage === page_r7));
        core.????advance(1);
        core.????textInterpolate(page_r7);
    } }
    var _c1$1 = function (a0) { return { disabled: a0 }; };
    function UserSegmentListComponent_div_36_Template(rf, ctx) { if (rf & 1) {
        var _r11 = core.????getCurrentView();
        core.????elementStart(0, "div", 24);
        core.????elementStart(1, "a", 25);
        core.????listener("click", function UserSegmentListComponent_div_36_Template_a_click_1_listener() { core.????restoreView(_r11); var ctx_r10 = core.????nextContext(); return ctx_r10.navigateToPage(1); });
        core.????text(2, "First");
        core.????elementEnd();
        core.????elementStart(3, "a", 25);
        core.????listener("click", function UserSegmentListComponent_div_36_Template_a_click_3_listener() { core.????restoreView(_r11); var ctx_r12 = core.????nextContext(); return ctx_r12.navigateToPage(ctx_r12.pager.currentPage - 1); });
        core.????text(4, "Previous");
        core.????elementEnd();
        core.????template(5, UserSegmentListComponent_div_36_a_5_Template, 2, 4, "a", 26);
        core.????elementStart(6, "a", 25);
        core.????listener("click", function UserSegmentListComponent_div_36_Template_a_click_6_listener() { core.????restoreView(_r11); var ctx_r13 = core.????nextContext(); return ctx_r13.navigateToPage(ctx_r13.pager.currentPage + 1); });
        core.????text(7, "Next");
        core.????elementEnd();
        core.????elementStart(8, "a", 25);
        core.????listener("click", function UserSegmentListComponent_div_36_Template_a_click_8_listener() { core.????restoreView(_r11); var ctx_r14 = core.????nextContext(); return ctx_r14.navigateToPage(ctx_r14.pager.totalPages); });
        core.????text(9, "Last");
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.????nextContext();
        core.????advance(1);
        core.????property("ngClass", core.????pureFunction1(5, _c1$1, ctx_r1.pager.currentPage === 1));
        core.????advance(2);
        core.????property("ngClass", core.????pureFunction1(7, _c1$1, ctx_r1.pager.currentPage === 1));
        core.????advance(2);
        core.????property("ngForOf", ctx_r1.pager.pages);
        core.????advance(1);
        core.????property("ngClass", core.????pureFunction1(9, _c1$1, ctx_r1.pager.currentPage === ctx_r1.pager.totalPages));
        core.????advance(2);
        core.????property("ngClass", core.????pureFunction1(11, _c1$1, ctx_r1.pager.currentPage === ctx_r1.pager.totalPages));
    } }
    var UserSegmentListComponent = /** @class */ (function () {
        function UserSegmentListComponent(uciService, route, globalService) {
            this.uciService = uciService;
            this.route = route;
            this.globalService = globalService;
            this.cancel = new core.EventEmitter();
            this.add = new core.EventEmitter();
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
        UserSegmentListComponent.??fac = function UserSegmentListComponent_Factory(t) { return new (t || UserSegmentListComponent)(core.????directiveInject(UciService), core.????directiveInject(router.Router), core.????directiveInject(GlobalService)); };
        UserSegmentListComponent.??cmp = core.????defineComponent({ type: UserSegmentListComponent, selectors: [["lib-user-segment-list"]], inputs: { selectedUserSegments: "selectedUserSegments" }, outputs: { cancel: "cancel", add: "add" }, decls: 37, vars: 3, consts: [[1, "uci-container"], [1, "ui", "grid"], [1, "seven", "wide", "column", "font-1-2", "font-weight-bold"], [1, "five", "wide", "column"], [1, "right-floated", "pt-0"], [1, "sb-btn", "sb-btn-normal", "sb-btn-outline-primary", "mr-10", 3, "click"], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", 3, "click"], [1, "ten", "wide", "column"], [1, "sb-search-box", "b-0", "ml-0", "large"], ["id", "search-input-container", 1, "input-div", "relative"], ["alt", "Search Icon", "src", "assets/images/search-icon.svg", 1, "search", "icon"], ["id", "keyword", "name", "filter_search", "type", "text", "placeholder", "Search", 1, "sb-search-input", "disabled", "ng-untouched", "ng-pristine", 3, "ngModel", "ngModelChange"], [1, "sb-btn", "sb-btn-normal", "disabled", 3, "click"], [1, "ui", "single", "line", "upForReviewTable", "table"], [1, "one", "wide", "UpReviewTableHeader", "sorted", "bl-0", "w-50-px"], [1, "four", "wide", "UpReviewTableHeader", "sorted", "bl-0"], [1, "two", "wide", "UpReviewTableHeader", "sorted", "bl-0", "center", "aligned"], ["class", "UpForReviewListHover", 4, "ngFor", "ngForOf"], [1, "two", "wide", "column"], [1, "pb-10"], ["class", "ui pagination menu mt-10 right-floated pt-0", 4, "ngIf"], [1, "UpForReviewListHover"], [1, "center", "aligned"], ["type", "checkbox", 3, "checked", "change"], [1, "ui", "pagination", "menu", "mt-10", "right-floated", "pt-0"], [1, "item", 3, "ngClass", "click"], ["class", "item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"]], template: function UserSegmentListComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "div", 0);
                core.????elementStart(1, "div", 1);
                core.????elementStart(2, "div", 2);
                core.????text(3, " Select user segment ");
                core.????elementEnd();
                core.????elementStart(4, "div", 3);
                core.????elementStart(5, "div", 4);
                core.????elementStart(6, "button", 5);
                core.????listener("click", function UserSegmentListComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
                core.????text(7, " Cancel");
                core.????elementEnd();
                core.????elementStart(8, "button", 6);
                core.????listener("click", function UserSegmentListComponent_Template_button_click_8_listener() { return ctx.onAdd(); });
                core.????text(9, " Add");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(10, "div", 1);
                core.????elementStart(11, "div", 7);
                core.????elementStart(12, "div", 8);
                core.????elementStart(13, "div", 9);
                core.????element(14, "img", 10);
                core.????elementStart(15, "input", 11);
                core.????listener("ngModelChange", function UserSegmentListComponent_Template_input_ngModelChange_15_listener($event) { return ctx.search = $event; });
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(16, "button", 12);
                core.????listener("click", function UserSegmentListComponent_Template_button_click_16_listener() { return ctx.getSearch(); });
                core.????text(17, "Search");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(18, "table", 13);
                core.????elementStart(19, "thead");
                core.????elementStart(20, "tr");
                core.????element(21, "th", 14);
                core.????elementStart(22, "th", 15);
                core.????text(23, " Name ");
                core.????elementEnd();
                core.????elementStart(24, "th", 15);
                core.????text(25, " Category ");
                core.????elementEnd();
                core.????elementStart(26, "th", 16);
                core.????text(27, " Total members ");
                core.????elementEnd();
                core.????elementStart(28, "th", 16);
                core.????text(29, " Last Updated On ");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(30, "tbody");
                core.????template(31, UserSegmentListComponent_tr_31_Template, 12, 7, "tr", 17);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(32, "div", 1);
                core.????element(33, "div", 18);
                core.????elementStart(34, "div", 7);
                core.????elementStart(35, "div", 19);
                core.????template(36, UserSegmentListComponent_div_36_Template, 10, 13, "div", 20);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                core.????advance(15);
                core.????property("ngModel", ctx.search);
                core.????advance(16);
                core.????property("ngForOf", ctx.userSegments);
                core.????advance(5);
                core.????property("ngIf", ctx.pager.pages);
            } }, directives: [forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgForOf, common.NgIf, ng2SemanticUiV9.??bi, common.NgClass], pipes: [common.DatePipe], styles: [".filter_search[_ngcontent-%COMP%]{border-radius:25px!important}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.w-50-px[_ngcontent-%COMP%]{width:50px!important}.font-1-5[_ngcontent-%COMP%]{font-size:1.5rem}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}"] });
        return UserSegmentListComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(UserSegmentListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-user-segment-list',
                    templateUrl: './user-segment-list.component.html',
                    styleUrls: ['./user-segment-list.component.css']
                }]
        }], function () { return [{ type: UciService }, { type: router.Router }, { type: GlobalService }]; }, { cancel: [{
                type: core.Output
            }], add: [{
                type: core.Output
            }], selectedUserSegments: [{
                type: core.Input
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
        UciGraphQlService.??fac = function UciGraphQlService_Factory(t) { return new (t || UciGraphQlService)(core.????inject(http.HttpClient), core.????inject(GlobalService)); };
        UciGraphQlService.??prov = core.????defineInjectable({ token: UciGraphQlService, factory: UciGraphQlService.??fac, providedIn: 'root' });
        return UciGraphQlService;
    }(BaseService));
    /*@__PURE__*/ (function () { core.??setClassMetadata(UciGraphQlService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: http.HttpClient }, { type: GlobalService }]; }, null); })();

    function UserSegmentAddComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
        core.????elementContainerStart(0);
        core.????elementStart(1, "button", 31);
        core.????element(2, "div", 32);
        core.????elementEnd();
        core.????elementContainerEnd();
    } }
    function UserSegmentAddComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
        var _r17 = core.????getCurrentView();
        core.????elementStart(0, "button", 33);
        core.????listener("click", function UserSegmentAddComponent_ng_template_9_Template_button_click_0_listener() { core.????restoreView(_r17); var ctx_r16 = core.????nextContext(); return ctx_r16.onAdd(); });
        core.????text(1, " Add ");
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r2 = core.????nextContext();
        core.????property("disabled", ctx_r2.userSegmentForm.invalid);
    } }
    function UserSegmentAddComponent_sui_select_option_31_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "sui-select-option", 34);
    } if (rf & 2) {
        var option_r18 = ctx.$implicit;
        core.????property("value", option_r18.district);
    } }
    function UserSegmentAddComponent_sui_select_option_38_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "sui-select-option", 34);
    } if (rf & 2) {
        var option_r19 = ctx.$implicit;
        core.????property("value", option_r19.block);
    } }
    function UserSegmentAddComponent_div_40_sui_select_option_6_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "sui-select-option", 34);
    } if (rf & 2) {
        var option_r22 = ctx.$implicit;
        core.????property("value", option_r22.cluster);
    } }
    function UserSegmentAddComponent_div_40_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "div", 10);
        core.????elementStart(1, "label");
        core.????text(2, "Cluster");
        core.????elementEnd();
        core.????elementStart(3, "div", 16);
        core.????elementStart(4, "sui-multi-select", 35, 36);
        core.????template(6, UserSegmentAddComponent_div_40_sui_select_option_6_Template, 1, 1, "sui-select-option", 19);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var _r20 = core.????reference(5);
        var ctx_r7 = core.????nextContext();
        core.????advance(4);
        core.????property("options", ctx_r7.clusters);
        core.????advance(2);
        core.????property("ngForOf", _r20.filteredOptions);
    } }
    function UserSegmentAddComponent_sui_select_option_47_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "sui-select-option", 34);
    } if (rf & 2) {
        var option_r23 = ctx.$implicit;
        core.????property("value", option_r23.school);
    } }
    function UserSegmentAddComponent_sui_select_option_55_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "sui-select-option", 34);
    } if (rf & 2) {
        var option_r24 = ctx.$implicit;
        core.????property("value", option_r24.name);
    } }
    function UserSegmentAddComponent_sui_select_option_62_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "sui-select-option", 34);
    } if (rf & 2) {
        var option_r25 = ctx.$implicit;
        core.????property("value", option_r25.name);
    } }
    function UserSegmentAddComponent_sui_select_option_70_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "sui-select-option", 34);
    } if (rf & 2) {
        var option_r26 = ctx.$implicit;
        core.????property("value", option_r26);
    } }
    var UserSegmentAddComponent = /** @class */ (function () {
        function UserSegmentAddComponent(uciService, fb, uciGraphQlService, globalService) {
            this.uciService = uciService;
            this.fb = fb;
            this.uciGraphQlService = uciGraphQlService;
            this.globalService = globalService;
            this.cancel = new core.EventEmitter();
            this.add = new core.EventEmitter();
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
                name: ['', forms.Validators.required],
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
        UserSegmentAddComponent.??fac = function UserSegmentAddComponent_Factory(t) { return new (t || UserSegmentAddComponent)(core.????directiveInject(UciService), core.????directiveInject(forms.FormBuilder), core.????directiveInject(UciGraphQlService), core.????directiveInject(GlobalService)); };
        UserSegmentAddComponent.??cmp = core.????defineComponent({ type: UserSegmentAddComponent, selectors: [["lib-user-segment-add"]], outputs: { cancel: "cancel", add: "add" }, decls: 71, vars: 16, consts: [[1, "uci-add-segment"], [1, "ui", "grid"], [1, "nine", "wide", "column", "font-1-2", "font-weight-bold"], [1, "three", "wide", "column"], [1, "right-floated", "pt-0"], [1, "sb-btn", "sb-btn-normal", "sb-btn-outline-primary", "mr-10", 3, "click"], [4, "ngIf", "ngIfElse"], ["addBtn", ""], [1, "ten", "wide", "column", "font-1-2"], [1, "ui", "form", "user-segment-form", 3, "formGroup"], [1, "field"], [1, "asterisk", "icon", "asterisk-color"], ["type", "text", "name", "name", "placeholder", "Name", "formControlName", "name"], ["name", "description", "formControlName", "description", "placeholder", "Enter description"], [1, "ui", "divider", "mt-30"], [1, "two", "fields"], [1, "ui", "segment", "p-0"], ["formControlName", "district", 1, "selection", "w-100", 3, "options"], ["multiSelectDistrict", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "block", 1, "selection", "w-100", 3, "options"], ["multiSelectBlock", ""], ["class", "field", 4, "ngIf"], ["formControlName", "school", 1, "selection", "w-100", 3, "options"], ["multiSelectSchool", ""], ["formControlName", "role", 1, "selection", "w-100", 3, "options"], ["multiSelectRole", ""], ["formControlName", "board", 1, "selection", "w-100", 3, "options"], ["multiSelectBoard", ""], ["formControlName", "grade", 1, "selection", "w-100", 3, "options"], ["multiSelectGrade", ""], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", 3, "disabled", "click"], [3, "value"], ["formControlName", "cluster", 1, "selection", "w-100", 3, "options"], ["multiSelectCluster", ""]], template: function UserSegmentAddComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "div", 0);
                core.????elementStart(1, "div", 1);
                core.????elementStart(2, "div", 2);
                core.????text(3, " Create new segment ");
                core.????elementEnd();
                core.????elementStart(4, "div", 3);
                core.????elementStart(5, "div", 4);
                core.????elementStart(6, "button", 5);
                core.????listener("click", function UserSegmentAddComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
                core.????text(7, " Cancel ");
                core.????elementEnd();
                core.????template(8, UserSegmentAddComponent_ng_container_8_Template, 3, 0, "ng-container", 6);
                core.????template(9, UserSegmentAddComponent_ng_template_9_Template, 2, 1, "ng-template", null, 7, core.????templateRefExtractor);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(11, "div", 8);
                core.????elementStart(12, "form", 9);
                core.????elementStart(13, "div", 10);
                core.????elementStart(14, "label");
                core.????text(15, "Name ");
                core.????elementStart(16, "sup");
                core.????element(17, "i", 11);
                core.????elementEnd();
                core.????elementEnd();
                core.????element(18, "input", 12);
                core.????elementEnd();
                core.????elementStart(19, "div", 10);
                core.????elementStart(20, "label");
                core.????text(21, "Description");
                core.????elementEnd();
                core.????element(22, "textarea", 13);
                core.????elementEnd();
                core.????element(23, "div", 14);
                core.????elementStart(24, "div", 15);
                core.????elementStart(25, "div", 10);
                core.????elementStart(26, "label");
                core.????text(27, "District");
                core.????elementEnd();
                core.????elementStart(28, "div", 16);
                core.????elementStart(29, "sui-multi-select", 17, 18);
                core.????template(31, UserSegmentAddComponent_sui_select_option_31_Template, 1, 1, "sui-select-option", 19);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(32, "div", 10);
                core.????elementStart(33, "label");
                core.????text(34, "Block");
                core.????elementEnd();
                core.????elementStart(35, "div", 16);
                core.????elementStart(36, "sui-multi-select", 20, 21);
                core.????template(38, UserSegmentAddComponent_sui_select_option_38_Template, 1, 1, "sui-select-option", 19);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(39, "div", 15);
                core.????template(40, UserSegmentAddComponent_div_40_Template, 7, 2, "div", 22);
                core.????elementStart(41, "div", 10);
                core.????elementStart(42, "label");
                core.????text(43, "School");
                core.????elementEnd();
                core.????elementStart(44, "div", 16);
                core.????elementStart(45, "sui-multi-select", 23, 24);
                core.????template(47, UserSegmentAddComponent_sui_select_option_47_Template, 1, 1, "sui-select-option", 19);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(48, "div", 15);
                core.????elementStart(49, "div", 10);
                core.????elementStart(50, "label");
                core.????text(51, "Role");
                core.????elementEnd();
                core.????elementStart(52, "div", 16);
                core.????elementStart(53, "sui-multi-select", 25, 26);
                core.????template(55, UserSegmentAddComponent_sui_select_option_55_Template, 1, 1, "sui-select-option", 19);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(56, "div", 10);
                core.????elementStart(57, "label");
                core.????text(58, "Board");
                core.????elementEnd();
                core.????elementStart(59, "div", 16);
                core.????elementStart(60, "sui-multi-select", 27, 28);
                core.????template(62, UserSegmentAddComponent_sui_select_option_62_Template, 1, 1, "sui-select-option", 19);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(63, "div", 15);
                core.????elementStart(64, "div", 10);
                core.????elementStart(65, "label");
                core.????text(66, "Grade");
                core.????elementEnd();
                core.????elementStart(67, "div", 16);
                core.????elementStart(68, "sui-multi-select", 29, 30);
                core.????template(70, UserSegmentAddComponent_sui_select_option_70_Template, 1, 1, "sui-select-option", 19);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                var _r1 = core.????reference(10);
                var _r3 = core.????reference(30);
                var _r5 = core.????reference(37);
                var _r8 = core.????reference(46);
                var _r10 = core.????reference(54);
                var _r12 = core.????reference(61);
                var _r14 = core.????reference(69);
                core.????advance(8);
                core.????property("ngIf", ctx.isLoaderShow)("ngIfElse", _r1);
                core.????advance(4);
                core.????property("formGroup", ctx.userSegmentForm);
                core.????advance(17);
                core.????property("options", ctx.districts);
                core.????advance(2);
                core.????property("ngForOf", _r3.filteredOptions);
                core.????advance(5);
                core.????property("options", ctx.blocks);
                core.????advance(2);
                core.????property("ngForOf", _r5.filteredOptions);
                core.????advance(2);
                core.????property("ngIf", ctx.clusters.length);
                core.????advance(5);
                core.????property("options", ctx.schools);
                core.????advance(2);
                core.????property("ngForOf", _r8.filteredOptions);
                core.????advance(6);
                core.????property("options", ctx.roles);
                core.????advance(2);
                core.????property("ngForOf", _r10.filteredOptions);
                core.????advance(5);
                core.????property("options", ctx.boards);
                core.????advance(2);
                core.????property("ngForOf", _r12.filteredOptions);
                core.????advance(6);
                core.????property("options", ctx.grade);
                core.????advance(2);
                core.????property("ngForOf", _r14.filteredOptions);
            } }, directives: [common.NgIf, forms.??angular_packages_forms_forms_y, forms.NgControlStatusGroup, ng2SemanticUiV9.??n, forms.FormGroupDirective, forms.DefaultValueAccessor, forms.NgControlStatus, forms.FormControlName, ng2SemanticUiV9.??cs, ng2SemanticUiV9.??ct, common.NgForOf, ng2SemanticUiV9.??cu], styles: [".font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.user-segment-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400!important}button[_ngcontent-%COMP%]:disabled{background:#89cff0;border-color:#89cff0}"] });
        return UserSegmentAddComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(UserSegmentAddComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-user-segment-add',
                    templateUrl: './user-segment-add.component.html',
                    styleUrls: ['./user-segment-add.component.css']
                }]
        }], function () { return [{ type: UciService }, { type: forms.FormBuilder }, { type: UciGraphQlService }, { type: GlobalService }]; }, { cancel: [{
                type: core.Output
            }], add: [{
                type: core.Output
            }] }); })();

    function ConversationSuccessComponent_div_12_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "div", 5);
        core.????text(1);
        core.????elementStart(2, "strong");
        core.????elementStart(3, "span", 11);
        core.????text(4);
        core.????elementEnd();
        core.????elementEnd();
        core.????elementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.????nextContext();
        core.????advance(1);
        core.????textInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.botIdMessage, ": ");
        core.????advance(3);
        core.????textInterpolate(ctx_r0.botId);
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
        ConversationSuccessComponent.??fac = function ConversationSuccessComponent_Factory(t) { return new (t || ConversationSuccessComponent)(core.????directiveInject(router.Router), core.????directiveInject(router.ActivatedRoute), core.????directiveInject(GlobalService)); };
        ConversationSuccessComponent.??cmp = core.????defineComponent({ type: ConversationSuccessComponent, selectors: [["lib-conversation-success"]], decls: 20, vars: 7, consts: [["cols", "1"], [1, "pt-0", "d-flex", "flex-row", "justify-content-center"], [1, "w-25-per", "text-center", 2, "margin", "auto"], [1, "text-center", "mb-20"], ["alt", "Search Icon", "src", "assets/uci-console/images/success.svg"], [1, "text-center", "p-5"], ["id", "copyUrl"], ["class", "text-center p-5", 4, "ngIf"], [1, "mt-20"], ["mat-raised-button", "", 1, "uci-action-button", "mr-10", 3, "click"], ["mat-raised-button", "", 1, "", 3, "click"], ["id", "copyId"]], template: function ConversationSuccessComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "mat-grid-list", 0);
                core.????elementStart(1, "div", 1);
                core.????elementStart(2, "div", 2);
                core.????elementStart(3, "div", 3);
                core.????element(4, "img", 4);
                core.????elementEnd();
                core.????elementStart(5, "div", 5);
                core.????text(6);
                core.????elementEnd();
                core.????elementStart(7, "div", 5);
                core.????text(8);
                core.????elementStart(9, "strong");
                core.????elementStart(10, "span", 6);
                core.????text(11);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????template(12, ConversationSuccessComponent_div_12_Template, 5, 2, "div", 7);
                core.????elementStart(13, "div", 8);
                core.????elementStart(14, "button", 9);
                core.????listener("click", function ConversationSuccessComponent_Template_button_click_14_listener() { return ctx.onCopy("copyUrl"); });
                core.????text(15);
                core.????elementEnd();
                core.????elementStart(16, "button", 9);
                core.????listener("click", function ConversationSuccessComponent_Template_button_click_16_listener() { return ctx.onCopy("copyId"); });
                core.????text(17);
                core.????elementEnd();
                core.????elementStart(18, "button", 10);
                core.????listener("click", function ConversationSuccessComponent_Template_button_click_18_listener() { return ctx.onClose(); });
                core.????text(19);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                core.????advance(6);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.botSuccess, " ");
                core.????advance(2);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.botUrlMessage, " : ");
                core.????advance(3);
                core.????textInterpolate(ctx.url);
                core.????advance(1);
                core.????property("ngIf", ctx.botId);
                core.????advance(3);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.copyUrl, " ");
                core.????advance(2);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.copyId, " ");
                core.????advance(2);
                core.????textInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.close, " ");
            } }, directives: [gridList.MatGridList, common.NgIf, button.MatButton], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}"] });
        return ConversationSuccessComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(ConversationSuccessComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-conversation-success',
                    templateUrl: './conversation-success.component.html',
                    styleUrls: ['./conversation-success.component.scss']
                }]
        }], function () { return [{ type: router.Router }, { type: router.ActivatedRoute }, { type: GlobalService }]; }, null); })();

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
        PaginatorIntl.??fac = function PaginatorIntl_Factory(t) { return new (t || PaginatorIntl)(core.????inject(GlobalService)); };
        PaginatorIntl.??prov = core.????defineInjectable({ token: PaginatorIntl, factory: PaginatorIntl.??fac, providedIn: 'root' });
        return PaginatorIntl;
    }(paginator.MatPaginatorIntl));
    /*@__PURE__*/ (function () { core.??setClassMetadata(PaginatorIntl, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: GlobalService }]; }, null); })();

    function ExhaustReportComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "mat-option", 29);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var exhaustType_r21 = ctx.$implicit;
        core.????property("value", exhaustType_r21.value);
        core.????advance(1);
        core.????textInterpolate1(" ", exhaustType_r21.name, " ");
    } }
    function ExhaustReportComponent_th_27_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Request ID");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_28_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r22 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r22.requestid, " ");
    } }
    function ExhaustReportComponent_th_30_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Request Type");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_31_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r23 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r23.requesttype, " ");
    } }
    function ExhaustReportComponent_th_33_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Request Date");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_34_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r24 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r24.requestdate, " ");
    } }
    function ExhaustReportComponent_th_36_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Conversation ID");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_37_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r25 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r25.conversationid, " ");
    } }
    function ExhaustReportComponent_th_39_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Start Date");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_40_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r26 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r26.startdate, " ");
    } }
    function ExhaustReportComponent_th_42_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " End Date");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_43_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r27 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r27.enddate, " ");
    } }
    function ExhaustReportComponent_th_45_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Status");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_46_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r28 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r28.status, " ");
    } }
    function ExhaustReportComponent_th_48_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Report Link");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_49_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r29 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r29.reportlink, " ");
    } }
    function ExhaustReportComponent_th_51_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "th", 30);
        core.????text(1, " Generated Date");
        core.????elementEnd();
    } }
    function ExhaustReportComponent_td_52_Template(rf, ctx) { if (rf & 1) {
        core.????elementStart(0, "td", 31);
        core.????text(1);
        core.????elementEnd();
    } if (rf & 2) {
        var element_r30 = ctx.$implicit;
        core.????advance(1);
        core.????textInterpolate1(" ", element_r30.generateddate, " ");
    } }
    function ExhaustReportComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "tr", 32);
    } }
    function ExhaustReportComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
        core.????element(0, "tr", 33);
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
                    tag: uuid.v4(),
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
        ExhaustReportComponent.??fac = function ExhaustReportComponent_Factory(t) { return new (t || ExhaustReportComponent)(core.????directiveInject(forms.FormBuilder), core.????directiveInject(UciService), core.????directiveInject(router.Router), core.????directiveInject(router.ActivatedRoute), core.????directiveInject(ToasterService), core.????directiveInject(GlobalService)); };
        ExhaustReportComponent.??cmp = core.????defineComponent({ type: ExhaustReportComponent, selectors: [["lib-exhaust-report"]], decls: 56, vars: 11, consts: [[1, "header"], [3, "formGroup"], ["cols", "4", "rowHeight", "3rem"], ["colspan", "1"], [1, "w-100", "text-left"], ["appearance", "fill"], ["formControlName", "exhaustType"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ui", "left", "icon", "input"], [1, "calendar", "icon"], ["suiDatepicker", "", "placeholder", "Start Date", "formControlName", "startDate", 3, "pickerMode", "pickerUseNativeOnMobile"], ["suiDatepicker", "", "placeholder", "End Date", "formControlName", "endDate", 3, "pickerMode", "pickerUseNativeOnMobile"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "requestid"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "requesttype"], ["matColumnDef", "requestdate"], ["matColumnDef", "conversationid"], ["matColumnDef", "startdate"], ["matColumnDef", "enddate"], ["matColumnDef", "status"], ["matColumnDef", "reportlink"], ["matColumnDef", "generateddate"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ExhaustReportComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "div", 0);
                core.????elementStart(1, "form", 1);
                core.????elementStart(2, "mat-grid-list", 2);
                core.????elementStart(3, "mat-grid-tile", 3);
                core.????elementStart(4, "div", 4);
                core.????elementStart(5, "mat-form-field", 5);
                core.????elementStart(6, "mat-label");
                core.????text(7, "Exhaust type");
                core.????elementEnd();
                core.????elementStart(8, "mat-select", 6);
                core.????template(9, ExhaustReportComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(10, "mat-grid-tile", 3);
                core.????elementStart(11, "div", 4);
                core.????elementStart(12, "div", 8);
                core.????element(13, "i", 9);
                core.????element(14, "input", 10);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(15, "mat-grid-tile", 3);
                core.????elementStart(16, "div", 4);
                core.????elementStart(17, "div", 8);
                core.????element(18, "i", 9);
                core.????element(19, "input", 11);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(20, "mat-grid-tile", 3);
                core.????elementStart(21, "div", 4);
                core.????elementStart(22, "button", 12);
                core.????listener("click", function ExhaustReportComponent_Template_button_click_22_listener() { return ctx.getJobList(); });
                core.????text(23, "Submit");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(24, "div", 13);
                core.????elementStart(25, "table", 14);
                core.????elementContainerStart(26, 15);
                core.????template(27, ExhaustReportComponent_th_27_Template, 2, 0, "th", 16);
                core.????template(28, ExhaustReportComponent_td_28_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(29, 18);
                core.????template(30, ExhaustReportComponent_th_30_Template, 2, 0, "th", 16);
                core.????template(31, ExhaustReportComponent_td_31_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(32, 19);
                core.????template(33, ExhaustReportComponent_th_33_Template, 2, 0, "th", 16);
                core.????template(34, ExhaustReportComponent_td_34_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(35, 20);
                core.????template(36, ExhaustReportComponent_th_36_Template, 2, 0, "th", 16);
                core.????template(37, ExhaustReportComponent_td_37_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(38, 21);
                core.????template(39, ExhaustReportComponent_th_39_Template, 2, 0, "th", 16);
                core.????template(40, ExhaustReportComponent_td_40_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(41, 22);
                core.????template(42, ExhaustReportComponent_th_42_Template, 2, 0, "th", 16);
                core.????template(43, ExhaustReportComponent_td_43_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(44, 23);
                core.????template(45, ExhaustReportComponent_th_45_Template, 2, 0, "th", 16);
                core.????template(46, ExhaustReportComponent_td_46_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(47, 24);
                core.????template(48, ExhaustReportComponent_th_48_Template, 2, 0, "th", 16);
                core.????template(49, ExhaustReportComponent_td_49_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????elementContainerStart(50, 25);
                core.????template(51, ExhaustReportComponent_th_51_Template, 2, 0, "th", 16);
                core.????template(52, ExhaustReportComponent_td_52_Template, 2, 1, "td", 17);
                core.????elementContainerEnd();
                core.????template(53, ExhaustReportComponent_tr_53_Template, 1, 0, "tr", 26);
                core.????template(54, ExhaustReportComponent_tr_54_Template, 1, 0, "tr", 27);
                core.????elementEnd();
                core.????element(55, "mat-paginator", 28);
                core.????elementEnd();
            } if (rf & 2) {
                core.????advance(1);
                core.????property("formGroup", ctx.filterForm);
                core.????advance(8);
                core.????property("ngForOf", ctx.exhaustTypes);
                core.????advance(5);
                core.????property("pickerMode", "date")("pickerUseNativeOnMobile", false);
                core.????advance(5);
                core.????property("pickerMode", "date")("pickerUseNativeOnMobile", false);
                core.????advance(6);
                core.????property("dataSource", ctx.dataSource);
                core.????advance(28);
                core.????property("matHeaderRowDef", ctx.displayedColumns);
                core.????advance(1);
                core.????property("matRowDefColumns", ctx.displayedColumns);
                core.????advance(1);
                core.????property("pageSizeOptions", core.????pureFunction0(10, _c0$4));
            } }, directives: [forms.??angular_packages_forms_forms_y, forms.NgControlStatusGroup, ng2SemanticUiV9.??n, forms.FormGroupDirective, gridList.MatGridList, gridList.MatGridTile, formField.MatFormField, formField.MatLabel, select.MatSelect, forms.NgControlStatus, forms.FormControlName, common.NgForOf, ng2SemanticUiV9.??x, forms.DefaultValueAccessor, ng2SemanticUiV9.??u, ng2SemanticUiV9.??v, ng2SemanticUiV9.??w, button.MatButton, table.MatTable, table.MatColumnDef, table.MatHeaderCellDef, table.MatCellDef, table.MatHeaderRowDef, table.MatRowDef, paginator.MatPaginator, core$1.MatOption, table.MatHeaderCell, table.MatCell, table.MatHeaderRow, table.MatRow], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}  .uci-logic-container{padding:20px}.sample-download[_ngcontent-%COMP%]{text-decoration:underline!important;cursor:pointer!important}.mobile[_ngcontent-%COMP%]   .sample-download[_ngcontent-%COMP%]{font-size:.8rem}"] });
        return ExhaustReportComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(ExhaustReportComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-exhaust-report',
                    templateUrl: './exhaust-report.component.html',
                    styleUrls: ['./exhaust-report.component.scss'],
                }]
        }], function () { return [{ type: forms.FormBuilder }, { type: UciService }, { type: router.Router }, { type: router.ActivatedRoute }, { type: ToasterService }, { type: GlobalService }]; }, null); })();

    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.??mod = core.????defineNgModule({ type: ComponentsModule });
        ComponentsModule.??inj = core.????defineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [
                GlobalService,
                UciService,
                ConfigService,
                UciGraphQlService,
                datepicker.MatDatepickerModule,
                {
                    provide: paginator.MatPaginatorIntl, useClass: PaginatorIntl
                }
            ], imports: [[
                    common.CommonModule,
                    http.HttpClientModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    PipesModule,
                    ng2SemanticUiV9.SuiModule,
                    button.MatButtonModule,
                    input.MatInputModule,
                    gridList.MatGridListModule,
                    checkbox.MatCheckboxModule,
                    dialog.MatDialogModule,
                    table.MatTableModule,
                    paginator.MatPaginatorModule,
                    icon.MatIconModule,
                    menu.MatMenuModule,
                    datepicker.MatDatepickerModule,
                    core$1.MatNativeDateModule,
                    card.MatCardModule,
                    stepper.MatStepperModule,
                    list.MatListModule,
                    tooltip.MatTooltipModule,
                    select.MatSelectModule,
                    formField.MatFormFieldModule,
                ]] });
        return ComponentsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.????setNgModuleScope(ComponentsModule, { declarations: [SidePanelComponent,
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
            ExhaustReportComponent], imports: [common.CommonModule,
            http.HttpClientModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            PipesModule,
            ng2SemanticUiV9.SuiModule,
            button.MatButtonModule,
            input.MatInputModule,
            gridList.MatGridListModule,
            checkbox.MatCheckboxModule,
            dialog.MatDialogModule,
            table.MatTableModule,
            paginator.MatPaginatorModule,
            icon.MatIconModule,
            menu.MatMenuModule,
            datepicker.MatDatepickerModule,
            core$1.MatNativeDateModule,
            card.MatCardModule,
            stepper.MatStepperModule,
            list.MatListModule,
            tooltip.MatTooltipModule,
            select.MatSelectModule,
            formField.MatFormFieldModule], exports: [SidePanelComponent] }); })();
    /*@__PURE__*/ (function () { core.??setClassMetadata(ComponentsModule, [{
            type: core.NgModule,
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
                        common.CommonModule,
                        http.HttpClientModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        PipesModule,
                        ng2SemanticUiV9.SuiModule,
                        button.MatButtonModule,
                        input.MatInputModule,
                        gridList.MatGridListModule,
                        checkbox.MatCheckboxModule,
                        dialog.MatDialogModule,
                        table.MatTableModule,
                        paginator.MatPaginatorModule,
                        icon.MatIconModule,
                        menu.MatMenuModule,
                        datepicker.MatDatepickerModule,
                        core$1.MatNativeDateModule,
                        card.MatCardModule,
                        stepper.MatStepperModule,
                        list.MatListModule,
                        tooltip.MatTooltipModule,
                        select.MatSelectModule,
                        formField.MatFormFieldModule,
                    ],
                    exports: [
                        SidePanelComponent,
                    ],
                    providers: [
                        GlobalService,
                        UciService,
                        ConfigService,
                        UciGraphQlService,
                        datepicker.MatDatepickerModule,
                        {
                            provide: paginator.MatPaginatorIntl, useClass: PaginatorIntl
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
        LibEntryComponent.??fac = function LibEntryComponent_Factory(t) { return new (t || LibEntryComponent)(core.????directiveInject(router.ActivatedRoute), core.????directiveInject(UciService), core.????directiveInject(ConfigService), core.????directiveInject(common.Location), core.????directiveInject(UciEventsService), core.????directiveInject(TelemetryUtilsService), core.????directiveInject(GlobalService), core.????directiveInject(router.Router)); };
        LibEntryComponent.??cmp = core.????defineComponent({ type: LibEntryComponent, selectors: [["lib-lib-entry"]], inputs: { user: "user", baseUrl: "baseUrl", blobUrl: "blobUrl", botPhoneNumber: "botPhoneNumber", resourceService: "resourceService" }, decls: 14, vars: 1, consts: [[1, "ui"], [1, "relative", "position"], [1, "py-8", "ua-btn-container", "ua-back-btn-container", "px-20", "z-index-2"], [1, "mx-20"], ["mat-raised-button", "", 3, "click"], [1, "uci-admin"], [1, "uci-admin-content"], [1, "uci-admin-left-panel", "ua-side-content", "z-index-2"], [1, "uci-admin-right-panel", "ua-main-content", "z-index-2"]], template: function LibEntryComponent_Template(rf, ctx) { if (rf & 1) {
                core.????elementStart(0, "div", 0);
                core.????elementStart(1, "div", 1);
                core.????elementStart(2, "div", 2);
                core.????elementStart(3, "div", 3);
                core.????elementStart(4, "button", 4);
                core.????listener("click", function LibEntryComponent_Template_button_click_4_listener() { return ctx.goBack(); });
                core.????elementStart(5, "mat-icon");
                core.????text(6, "keyboard_backspace");
                core.????elementEnd();
                core.????text(7);
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementStart(8, "div", 5);
                core.????elementStart(9, "div", 6);
                core.????elementStart(10, "div", 7);
                core.????element(11, "lib-side-panel");
                core.????elementEnd();
                core.????elementStart(12, "div", 8);
                core.????element(13, "router-outlet");
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
                core.????elementEnd();
            } if (rf & 2) {
                core.????advance(7);
                core.????textInterpolate1(" ", (ctx.resourceService == null ? null : ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.back) || "Back", " ");
            } }, directives: [button.MatButton, icon.MatIcon, SidePanelComponent, router.RouterOutlet], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.ua-btn-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#fff}.ua-btn-close[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#ef64af}.uci-admin[_ngcontent-%COMP%]{width:100%;min-height:100vh;position:relative;z-index:unset}.uci-admin-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr;margin:0 1.5rem}.uci-admin-left-panel[_ngcontent-%COMP%]{padding:1.5rem;position:relative;z-index:2}.uci-admin-right-panel[_ngcontent-%COMP%]{padding:1.5rem}.ui.loader[_ngcontent-%COMP%]:after{border-color:#fff transparent transparent!important}@media (max-width:768px){.uci-admin[_ngcontent-%COMP%]{padding:0 8px;height:100vh;overflow:auto;background:#e9e8d9}.uci-admin-left-panel[_ngcontent-%COMP%]{padding:1rem 0}.uci-admin-right-panel[_ngcontent-%COMP%]{padding:0 0 48px}}.font-weight-bold[_ngcontent-%COMP%]{font-weight:700}.font-weight-normal[_ngcontent-%COMP%]{font-weight:400}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.z-index-2[_ngcontent-%COMP%]{z-index:2!important}@media screen and (min-width:376px) and (max-width:768px){.uci-admin-content[_ngcontent-%COMP%]{grid-template-columns:1fr;margin:0}}@media screen and (min-width:320px) and (max-width:375px){.uci-admin-content[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(292px,1fr));margin:0}}"] });
        return LibEntryComponent;
    }());
    /*@__PURE__*/ (function () { core.??setClassMetadata(LibEntryComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-lib-entry',
                    templateUrl: './lib-entry.component.html',
                    styleUrls: ['./lib-entry.component.scss']
                }]
        }], function () { return [{ type: router.ActivatedRoute }, { type: UciService }, { type: ConfigService }, { type: common.Location }, { type: UciEventsService }, { type: TelemetryUtilsService }, { type: GlobalService }, { type: router.Router }]; }, { user: [{
                type: core.Input
            }], baseUrl: [{
                type: core.Input
            }], blobUrl: [{
                type: core.Input
            }], botPhoneNumber: [{
                type: core.Input
            }], resourceService: [{
                type: core.Input
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
        UciRoutingModule.??mod = core.????defineNgModule({ type: UciRoutingModule });
        UciRoutingModule.??inj = core.????defineInjector({ factory: function UciRoutingModule_Factory(t) { return new (t || UciRoutingModule)(); }, imports: [[
                    router.RouterModule.forChild(routes),
                    common.CommonModule
                ],
                router.RouterModule] });
        return UciRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.????setNgModuleScope(UciRoutingModule, { imports: [router.RouterModule, common.CommonModule], exports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.??setClassMetadata(UciRoutingModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        router.RouterModule.forChild(routes),
                        common.CommonModule
                    ],
                    exports: [router.RouterModule]
                }]
        }], null, null); })();

    function provideCsModule() {
        return window['CsModule'];
    }
    var UciConsoleModule = /** @class */ (function () {
        function UciConsoleModule() {
        }
        UciConsoleModule.??mod = core.????defineNgModule({ type: UciConsoleModule });
        UciConsoleModule.??inj = core.????defineInjector({ factory: function UciConsoleModule_Factory(t) { return new (t || UciConsoleModule)(); }, providers: [UciEventsService, TelemetryUtilsService, ToasterService, { provide: 'CsModule', useFactory: provideCsModule }], imports: [[
                    ComponentsModule,
                    UciRoutingModule,
                    button.MatButtonModule,
                    icon.MatIconModule
                ]] });
        return UciConsoleModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.????setNgModuleScope(UciConsoleModule, { declarations: [LibEntryComponent], imports: [ComponentsModule,
            UciRoutingModule,
            button.MatButtonModule,
            icon.MatIconModule], exports: [LibEntryComponent] }); })();
    /*@__PURE__*/ (function () { core.??setClassMetadata(UciConsoleModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        LibEntryComponent
                    ],
                    imports: [
                        ComponentsModule,
                        UciRoutingModule,
                        button.MatButtonModule,
                        icon.MatIconModule
                    ],
                    exports: [
                        LibEntryComponent
                    ],
                    providers: [UciEventsService, TelemetryUtilsService, ToasterService, { provide: 'CsModule', useFactory: provideCsModule }]
                }]
        }], null, null); })();

    exports.AddLogicComponent = AddLogicComponent;
    exports.LibEntryComponent = LibEntryComponent;
    exports.UciConsoleModule = UciConsoleModule;
    exports.UciEventsService = UciEventsService;
    exports.provideCsModule = provideCsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=samagra-x-uci-console.umd.js.map

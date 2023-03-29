import { __assign, __decorate, __values } from "tslib";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./global.service";
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
        if (user.token) {
            headers['admin-token'] = user.token;
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
    BaseService.prototype.postSegmentRequest = function (url, data, headers) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (headers === void 0) { headers = {}; }
        headers = __assign(__assign({}, headers), this.getDefaultHeaders());
        return this.http.post(url, data, { headers: headers }).pipe(map(function (res) {
            return res.result ? res.result : res;
        }), catchError(function (err) {
            return _this.handleError(err);
        }));
    };
    BaseService.prototype.patchRequest = function (url, data, headers) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (headers === void 0) { headers = {}; }
        headers = __assign(__assign({}, headers), this.getDefaultHeaders());
        return this.http.patch(url, data, { headers: headers }).pipe(map(function (res) {
            return res.result;
        }), catchError(function (err) {
            return _this.handleError(err);
        }));
    };
    BaseService.prototype.deleteRequest = function (url, headers) {
        var _this = this;
        if (headers === void 0) { headers = {}; }
        headers = __assign(__assign({}, headers), this.getDefaultHeaders());
        return this.http.delete(url, { headers: headers }).pipe(map(function (res) {
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
    BaseService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: GlobalService }
    ]; };
    BaseService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseService_Factory() { return new BaseService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GlobalService)); }, token: BaseService, providedIn: "root" });
    BaseService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], BaseService);
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFLaEM7SUFDSSxxQkFBbUIsSUFBZ0IsRUFBUyxhQUE0QjtRQUFyRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDeEUsQ0FBQztJQUVPLHVDQUFpQixHQUF6QjtRQUNJLElBQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDakIsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNyQztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTSxnQ0FBVSxH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RyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQy9COzs7Ozs7Ozs7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOztnQkF0SHdCLFVBQVU7Z0JBQXdCLGFBQWE7OztJQUQvRCxXQUFXO1FBSHZCLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBd0h2QjtzQkFsSUQ7Q0FrSUMsQUF4SEQsSUF3SEM7U0F4SFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREZWZhdWx0SGVhZGVycygpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyczogYW55ID0ge307XG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0VXNlcigpO1xuICAgICAgICBpZiAodXNlciAmJiB1c2VyLmlkKSB7XG4gICAgICAgICAgICBoZWFkZXJzLm93bmVySUQgPSB1c2VyLmlkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VyICYmIHVzZXIucm9vdE9yZ0lkKSB7XG4gICAgICAgICAgICBoZWFkZXJzLm93bmVyT3JnSUQgPSB1c2VyLnJvb3RPcmdJZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlci50b2tlbikge1xuICAgICAgICAgIGhlYWRlcnNbJ2FkbWluLXRva2VuJ10gPSB1c2VyLnRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlcXVlc3QodXJsLCBwYXJhbXM6IGFueSA9IHt9LCBoZWFkZXJzOiBhbnkgPSB7fSkge1xuICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgLi4uaGVhZGVycyxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhlYWRlcnMoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwge3BhcmFtcywgaGVhZGVyc30pLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5yZXN1bHQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdFJlcXVlc3QodXJsLCBkYXRhID0ge30sIGhlYWRlcnM6IGFueSA9IHt9KSB7XG4gICAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SGVhZGVycygpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSwge2hlYWRlcnN9KS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3RTZWdtZW50UmVxdWVzdCh1cmwsIGRhdGEgPSB7fSwgaGVhZGVyczogYW55ID0ge30pIHtcbiAgICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRIZWFkZXJzKClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7aGVhZGVyc30pLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5yZXN1bHQgPyByZXMucmVzdWx0IDogcmVzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdGNoUmVxdWVzdCh1cmwsIGRhdGEgPSB7fSwgaGVhZGVyczogYW55ID0ge30pIHtcbiAgICAgICAgaGVhZGVycyA9IHtcbiAgICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRIZWFkZXJzKClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHVybCwgZGF0YSwge2hlYWRlcnN9KS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVJlcXVlc3QodXJsLCBoZWFkZXJzOiBhbnkgPSB7fSkge1xuICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgLi4uaGVhZGVycyxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhlYWRlcnMoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge2hlYWRlcnN9KS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PScsIGVycm9yLCBlcnJvci5lcnJvcik7XG4gICAgICAgIC8vIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IodGhpcy5yZXNvdXJjZVNlcnZpY2UubWVzc2FnZXMuZm1zZy5tMDA5MSk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9Gb3JtRGF0YTxUPihmb3JtVmFsdWU6IFQpIHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhmb3JtVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1WYWx1ZVtrZXldO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cbn1cbiJdfQ==
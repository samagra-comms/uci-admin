import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./global.service";
export class BaseService {
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
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GlobalService)); };
BaseService.ɵprov = i0.ɵɵdefineInjectable({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BaseService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFLaEMsTUFBTSxPQUFPLFdBQVc7SUFDcEIsWUFBbUIsSUFBZ0IsRUFBUyxhQUE0QjtRQUFyRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDeEUsQ0FBQztJQUVPLGlCQUFpQjtRQUNyQixNQUFNLE9BQU8sR0FBUSxFQUFFLENBQUM7UUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBYyxFQUFFLEVBQUUsVUFBZSxFQUFFO1FBQ3RELE9BQU8sbUNBQ0EsT0FBTyxHQUNQLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUM5QixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ2IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxVQUFlLEVBQUU7UUFDaEQsT0FBTyxtQ0FDQSxPQUFPLEdBQ1AsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQzlCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBR00sV0FBVyxDQUFDLEtBQXdCO1FBQ3ZDLElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtZQUM3QixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6Qyx1RUFBdUU7UUFDdkUsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxVQUFVLENBQUksU0FBWTtRQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBRWhDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0I7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOztzRUFwRVEsV0FBVzttREFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGUixNQUFNO2tEQUVULFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldERlZmF1bHRIZWFkZXJzKCkge1xuICAgICAgICBjb25zdCBoZWFkZXJzOiBhbnkgPSB7fTtcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIGlmICh1c2VyICYmIHVzZXIuaWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMub3duZXJJRCA9IHVzZXIuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5yb290T3JnSWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMub3duZXJPcmdJRCA9IHVzZXIucm9vdE9yZ0lkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlcXVlc3QodXJsLCBwYXJhbXM6IGFueSA9IHt9LCBoZWFkZXJzOiBhbnkgPSB7fSkge1xuICAgICAgICBoZWFkZXJzID0ge1xuICAgICAgICAgICAgLi4uaGVhZGVycyxcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhlYWRlcnMoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwge3BhcmFtcywgaGVhZGVyc30pLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5yZXN1bHQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdFJlcXVlc3QodXJsLCBkYXRhID0ge30sIGhlYWRlcnM6IGFueSA9IHt9KSB7XG4gICAgICAgIGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SGVhZGVycygpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSwge2hlYWRlcnN9KS5waXBlKFxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PScsIGVycm9yLCBlcnJvci5lcnJvcik7XG4gICAgICAgIC8vIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IodGhpcy5yZXNvdXJjZVNlcnZpY2UubWVzc2FnZXMuZm1zZy5tMDA5MSk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9Gb3JtRGF0YTxUPihmb3JtVmFsdWU6IFQpIHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhmb3JtVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1WYWx1ZVtrZXldO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cbn1cbiJdfQ==
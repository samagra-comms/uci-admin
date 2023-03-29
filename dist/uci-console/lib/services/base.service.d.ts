import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GlobalService } from './global.service';
import * as ɵngcc0 from '@angular/core';
export declare class BaseService {
    http: HttpClient;
    globalService: GlobalService;
    constructor(http: HttpClient, globalService: GlobalService);
    private getDefaultHeaders;
    getRequest(url: any, params?: any, headers?: any): import("rxjs").Observable<any>;
    postRequest(url: any, data?: {}, headers?: any): import("rxjs").Observable<any>;
    postSegmentRequest(url: any, data?: {}, headers?: any): import("rxjs").Observable<any>;
    patchRequest(url: any, data?: {}, headers?: any): import("rxjs").Observable<any>;
    deleteRequest(url: any, headers?: any): import("rxjs").Observable<any>;
    handleError(error: HttpErrorResponse): import("rxjs").Observable<never>;
    toFormData<T>(formValue: T): FormData;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImJhc2Uuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi9nbG9iYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCYXNlU2VydmljZSB7XG4gICAgaHR0cDogSHR0cENsaWVudDtcbiAgICBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpO1xuICAgIHByaXZhdGUgZ2V0RGVmYXVsdEhlYWRlcnM7XG4gICAgZ2V0UmVxdWVzdCh1cmw6IGFueSwgcGFyYW1zPzogYW55LCBoZWFkZXJzPzogYW55KTogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPGFueT47XG4gICAgcG9zdFJlcXVlc3QodXJsOiBhbnksIGRhdGE/OiB7fSwgaGVhZGVycz86IGFueSk6IGltcG9ydChcInJ4anNcIikuT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHBvc3RTZWdtZW50UmVxdWVzdCh1cmw6IGFueSwgZGF0YT86IHt9LCBoZWFkZXJzPzogYW55KTogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPGFueT47XG4gICAgcGF0Y2hSZXF1ZXN0KHVybDogYW55LCBkYXRhPzoge30sIGhlYWRlcnM/OiBhbnkpOiBpbXBvcnQoXCJyeGpzXCIpLk9ic2VydmFibGU8YW55PjtcbiAgICBkZWxldGVSZXF1ZXN0KHVybDogYW55LCBoZWFkZXJzPzogYW55KTogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPGFueT47XG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKTogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPG5ldmVyPjtcbiAgICB0b0Zvcm1EYXRhPFQ+KGZvcm1WYWx1ZTogVCk6IEZvcm1EYXRhO1xufVxuIl19
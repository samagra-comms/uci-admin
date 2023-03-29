import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { GlobalService } from './global.service';
import * as ɵngcc0 from '@angular/core';
export declare class UciGraphQlService extends BaseService {
    http: HttpClient;
    globalService: GlobalService;
    BASE_URL: any;
    constructor(http: HttpClient, globalService: GlobalService);
    getState(): import("rxjs").Observable<Object>;
    getDistrict(param: any): import("rxjs").Observable<Object>;
    getBlock(param: any): import("rxjs").Observable<Object>;
    getSchoolDetails(param: any): import("rxjs").Observable<Object>;
    getClusters(param: any): import("rxjs").Observable<Object>;
    getRole(): import("rxjs").Observable<Object>;
    getBoards(): import("rxjs").Observable<Object>;
    private baseRequest;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UciGraphQlService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWdyYXBoLXFsLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidWNpLWdyYXBoLXFsLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi9nbG9iYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVY2lHcmFwaFFsU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcbiAgICBodHRwOiBIdHRwQ2xpZW50O1xuICAgIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2U7XG4gICAgQkFTRV9VUkw6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKTtcbiAgICBnZXRTdGF0ZSgpOiBpbXBvcnQoXCJyeGpzXCIpLk9ic2VydmFibGU8T2JqZWN0PjtcbiAgICBnZXREaXN0cmljdChwYXJhbTogYW55KTogaW1wb3J0KFwicnhqc1wiKS5PYnNlcnZhYmxlPE9iamVjdD47XG4gICAgZ2V0QmxvY2socGFyYW06IGFueSk6IGltcG9ydChcInJ4anNcIikuT2JzZXJ2YWJsZTxPYmplY3Q+O1xuICAgIGdldFNjaG9vbERldGFpbHMocGFyYW06IGFueSk6IGltcG9ydChcInJ4anNcIikuT2JzZXJ2YWJsZTxPYmplY3Q+O1xuICAgIGdldENsdXN0ZXJzKHBhcmFtOiBhbnkpOiBpbXBvcnQoXCJyeGpzXCIpLk9ic2VydmFibGU8T2JqZWN0PjtcbiAgICBnZXRSb2xlKCk6IGltcG9ydChcInJ4anNcIikuT2JzZXJ2YWJsZTxPYmplY3Q+O1xuICAgIGdldEJvYXJkcygpOiBpbXBvcnQoXCJyeGpzXCIpLk9ic2VydmFibGU8T2JqZWN0PjtcbiAgICBwcml2YXRlIGJhc2VSZXF1ZXN0O1xufVxuIl19
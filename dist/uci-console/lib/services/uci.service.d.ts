import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import * as ɵngcc0 from '@angular/core';
export declare class UciService extends BaseService {
    http: HttpClient;
    globalService: GlobalService;
    BASE_URL: any;
    BASE_URL_V1: any;
    BASE_URL_V2: any;
    NL_BASE_URL: any;
    DATASET_URL: any;
    FORM_BASE_URL: string;
    constructor(http: HttpClient, globalService: GlobalService);
    fetchConversation(params: any): Observable<any>;
    searchConversation(params: any): Observable<any>;
    pauseConversation(botId: any): Observable<any>;
    startConversation(botId: any): Observable<any>;
    deleteConversation(botId: any): Observable<any>;
    getBotDetails(id: any): Observable<any>;
    getCheckStartingMessage(param: any): Observable<any>;
    botCreate(data: any): Observable<any>;
    botUpdate(id: any, data: any): Observable<any>;
    fetchUserSegment(params: any): Observable<any>;
    searchUserSegment(params: any): Observable<any>;
    createUserSegment(data: any): Observable<any>;
    userSegmentQueryBuilder(data: any): Observable<any>;
    createLogic(data: any): Observable<any>;
    updateLogic(id: any, data: any): Observable<any>;
    deleteLogic(id: any): Observable<any>;
    uploadFile(obj: any): Observable<any>;
    readForm(data: any): Observable<any>;
    getJobList(id: any, params: any): Observable<any>;
    getJobInfo(id: any, params: any): Observable<any>;
    submitExhaust(data: any): Observable<any>;
    nlSegmentBotMapping(data: any): Observable<any>;
    submitSegmentData(data: any): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UciService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidWNpLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi9nbG9iYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVY2lTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xuICAgIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZTtcbiAgICBCQVNFX1VSTDogYW55O1xuICAgIEJBU0VfVVJMX1YxOiBhbnk7XG4gICAgQkFTRV9VUkxfVjI6IGFueTtcbiAgICBOTF9CQVNFX1VSTDogYW55O1xuICAgIERBVEFTRVRfVVJMOiBhbnk7XG4gICAgRk9STV9CQVNFX1VSTDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpO1xuICAgIGZldGNoQ29udmVyc2F0aW9uKHBhcmFtczogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHNlYXJjaENvbnZlcnNhdGlvbihwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PjtcbiAgICBwYXVzZUNvbnZlcnNhdGlvbihib3RJZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHN0YXJ0Q29udmVyc2F0aW9uKGJvdElkOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZGVsZXRlQ29udmVyc2F0aW9uKGJvdElkOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZ2V0Qm90RGV0YWlscyhpZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGdldENoZWNrU3RhcnRpbmdNZXNzYWdlKHBhcmFtOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgYm90Q3JlYXRlKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PjtcbiAgICBib3RVcGRhdGUoaWQ6IGFueSwgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGZldGNoVXNlclNlZ21lbnQocGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgc2VhcmNoVXNlclNlZ21lbnQocGFyYW1zOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgY3JlYXRlVXNlclNlZ21lbnQoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHVzZXJTZWdtZW50UXVlcnlCdWlsZGVyKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PjtcbiAgICBjcmVhdGVMb2dpYyhkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgdXBkYXRlTG9naWMoaWQ6IGFueSwgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGRlbGV0ZUxvZ2ljKGlkOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgdXBsb2FkRmlsZShvYmo6IGFueSk6IE9ic2VydmFibGU8YW55PjtcbiAgICByZWFkRm9ybShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZ2V0Sm9iTGlzdChpZDogYW55LCBwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PjtcbiAgICBnZXRKb2JJbmZvKGlkOiBhbnksIHBhcmFtczogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHN1Ym1pdEV4aGF1c3QoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIG5sU2VnbWVudEJvdE1hcHBpbmcoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHN1Ym1pdFNlZ21lbnREYXRhKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55Pjtcbn1cbiJdfQ==
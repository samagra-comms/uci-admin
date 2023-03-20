import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {GlobalService} from './global.service';

@Injectable({
    providedIn: 'root'
})
export class UciService extends BaseService {
    BASE_URL;
    BASE_URL_V1;
    BASE_URL_V2;

    NL_BASE_URL;
    DATASET_URL;
    FORM_BASE_URL = 'https://dev.sunbirded.org/';

    constructor(public http: HttpClient, public globalService: GlobalService) {
        super(http, globalService);
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

    fetchConversation(params): Observable<any> {
        return this.getRequest(this.BASE_URL + 'bot/search', params, {asset: 'bot'});
    }

    searchConversation(params): Observable<any> {
        return this.getRequest(this.BASE_URL + 'bot/search', params, {asset: 'bot'});
    }

    pauseConversation(botId): Observable<any> {
        return this.getRequest(this.BASE_URL + `bot/pause/${botId}`, {}, {asset: 'bot'});
    }

    startConversation(botId): Observable<any> {
        return this.getRequest(this.BASE_URL + `bot/start/${botId}`, {}, {asset: 'bot'});
    }

    deleteConversation(botId): Observable<any> {
        return this.getRequest(this.BASE_URL + `bot/delete/${botId}`, {}, {asset: 'bot'});
    }

    getBotDetails(id) {
        return this.getRequest(this.BASE_URL + `bot/get/${id}`, {}, {asset: 'bot'});
    }

    getCheckStartingMessage(param) {
        return this.getRequest(this.BASE_URL + `bot/getByParam`, param, {asset: 'bot'});
    }

    botCreate(data) {
        return this.postRequest(this.BASE_URL + 'bot', data, {asset: 'bot'});
    }

    botUpdate(id, data) {
        return this.postRequest(this.BASE_URL + `bot/update/${id}`, data, {asset: 'bot'});
    }

    // User Segment APIs
    fetchUserSegment(params): Observable<any> {
        return this.getRequest(this.BASE_URL + 'userSegment/get', params, {asset: 'userSegment'});
    }

    searchUserSegment(params): Observable<any> {
        return this.getRequest(this.BASE_URL + 'userSegment/search', params, {asset: 'userSegment'});
    }

    createUserSegment(data) {
        return this.postRequest(this.BASE_URL + 'userSegment/create', data, {asset: 'userSegment'});
    }

    userSegmentQueryBuilder(data) {
        return this.postRequest(this.BASE_URL + 'userSegment/queryBuilder', data, {asset: 'userSegment'});
    }

    // Conversation APIs
    createLogic(data) {
        return this.postRequest(this.BASE_URL + 'conversationLogic', data, {asset: 'conversationLogic'});
    }

    updateLogic(id, data) {
        return this.patchRequest(this.BASE_URL + `conversationLogic/${id}`, data, {asset: 'conversationLogic'});
    }

    deleteLogic(id) {
        return this.deleteRequest(this.BASE_URL + `conversationLogic/${id}`, {asset: 'conversationLogic'});
    }

    // Mis APIs
    uploadFile(obj): Observable<any> {
        return this.postRequest(this.BASE_URL + 'form/upload', this.toFormData(obj));
    }

    readForm(data) {
        return this.postRequest(this.FORM_BASE_URL + 'api/data/v1/form/read', data);
    }

    // Exhaust API
    getJobList(id, params) {
        return this.getRequest(this.DATASET_URL + `request/list/${id}`, params, {asset: 'conversationLogic'});
    }

    getJobInfo(id, params) {
        return this.getRequest(this.DATASET_URL + `request/read/${id}`, params, {asset: 'conversationLogic'});
    }

    submitExhaust(data) {
        return this.postRequest(this.DATASET_URL + `request/submit`, data, {asset: 'conversationLogic'});
    }

    nlSegmentBotMapping(data) {
        return this.postRequest(this.NL_BASE_URL + `segment-bot-mapping`, data);
    }

    notificationCreate(data) {
        return this.postRequest(this.DATASET_URL + `admin/v1/conversationLogic/create`, data, {asset: 'conversationLogic'});
    }
}

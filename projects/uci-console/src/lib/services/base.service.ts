import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

import {GlobalService} from './global.service';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(public http: HttpClient, public globalService: GlobalService) {
    }

    private getDefaultHeaders() {
        const headers: any = {};
        const user = this.globalService.getUser();
        if (user && user.id) {
            headers.ownerID = user.id;
        }
        if (user && user.rootOrgId) {
            headers.ownerOrgID = user.rootOrgId;
        }

        return headers;
    }

    public getRequest(url, params: any = {}, headers: any = {}) {
        headers = {
            ...headers,
            ...this.getDefaultHeaders()
        };

        return this.http.get(url, {params, headers}).pipe(
            map((res: any) => {
                return res.result;
            }),
            catchError(err => {
                return this.handleError(err);
            })
        );
    }

    public postRequest(url, data = {}, headers: any = {}) {
        headers = {
            ...headers,
            ...this.getDefaultHeaders()
        };

        return this.http.post(url, data, {headers}).pipe(
            map((res: any) => {
                return res.result;
            }),
            catchError(err => {
                return this.handleError(err);
            })
        );
    }


    public handleError(error: HttpErrorResponse) {
        if (error instanceof ErrorEvent) {
            return throwError(error.error.message);
        }
        console.log('=====', error, error.error);
        // this.toasterService.error(this.resourceService.messages.fmsg.m0091);
        return throwError(error.error);
    }

    public toFormData<T>(formValue: T) {
        const formData = new FormData();

        for (const key of Object.keys(formValue)) {
            const value = formValue[key];
            formData.append(key, value);
        }

        return formData;
    }
}

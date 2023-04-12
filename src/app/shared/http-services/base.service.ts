import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(public http: HttpClient) {
    }

    private getDefaultHeaders() {
        const headers: any = {};

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

    public postSegmentRequest(url, data = {}, headers: any = {}) {
        headers = {
            ...headers,
            ...this.getDefaultHeaders()
        };

        return this.http.post(url, data, {headers}).pipe(
            map((res: any) => {
                return res.result ? res.result : res;
            }),
            catchError(err => {
                return this.handleError(err);
            })
        );
    }

    public patchRequest(url, data = {}, headers: any = {}) {
        headers = {
            ...headers,
            ...this.getDefaultHeaders()
        };

        return this.http.patch(url, data, {headers}).pipe(
            map((res: any) => {
                return res.result;
            }),
            catchError(err => {
                return this.handleError(err);
            })
        );
    }

    public deleteRequest(url, headers: any = {}) {
        headers = {
            ...headers,
            ...this.getDefaultHeaders()
        };

        return this.http.delete(url, {headers}).pipe(
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
            return throwError(error);
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

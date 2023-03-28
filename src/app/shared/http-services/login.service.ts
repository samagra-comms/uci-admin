import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
  })

  export class LoginService extends BaseService{
    constructor(public http: HttpClient){
        super(http);
    }

    authenticate(data: any) : Observable<any>{
        const url = environment.nlLoginUrl+ '/api/login';
        return this.postRequest(url, data, {'Authorization': environment.nlLoginToken});
      }
  }

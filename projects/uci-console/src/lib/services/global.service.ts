import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    private user: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public readonly user$ = this.user.asObservable();
    private baseUrl: BehaviorSubject<any> = new BehaviorSubject(undefined);
    private blobUrl: BehaviorSubject<any> = new BehaviorSubject(undefined);
    private botPhoneNumber: BehaviorSubject<any> = new BehaviorSubject('');
    private resourceService: BehaviorSubject<any> = new BehaviorSubject({});
    public readonly baseUrl$ = this.baseUrl.asObservable();
    public readonly resourceService$ = this.resourceService.asObservable();

    constructor() {
    }

    setUser(user) {
        this.user.next(user);
    }

    getUser() {
        return this.user.value;
    }

    setBaseUrl(baseUrl) {
        this.baseUrl.next(baseUrl);
    }

    getBaseUrl() {
        return this.baseUrl.value;
    }

    setBlobUrl(baseUrl) {
        this.blobUrl.next(baseUrl);
    }

    getBlobUrl() {
        return this.blobUrl.value;
    }

    setBotPhoneNumber(phoneNumber) {
        this.botPhoneNumber.next(phoneNumber);
    }

    getBotPhoneNumber() {
        return this.botPhoneNumber.value;
    }

    setResourceService(resourceService) {
        this.resourceService.next(resourceService);
    }

    getResourceService() {
        return this.resourceService.value;
    }
}

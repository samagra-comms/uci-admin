import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlobalService {
    constructor() {
        this.user = new BehaviorSubject(undefined);
        this.user$ = this.user.asObservable();
        this.baseUrl = new BehaviorSubject(undefined);
        this.blobUrl = new BehaviorSubject(undefined);
        this.botPhoneNumber = new BehaviorSubject('');
        this.resourceService = new BehaviorSubject({});
        this.baseUrl$ = this.baseUrl.asObservable();
        this.resourceService$ = this.resourceService.asObservable();
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
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = i0.ɵɵdefineInjectable({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GlobalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFLckMsTUFBTSxPQUFPLGFBQWE7SUFVdEI7UUFUUSxTQUFJLEdBQXlCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELFVBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLFlBQU8sR0FBeUIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsWUFBTyxHQUF5QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxtQkFBYyxHQUF5QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRCxvQkFBZSxHQUF5QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RCxhQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3ZFLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQU87UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFXO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxlQUFlO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7OzBFQW5EUSxhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZWLE1BQU07a0RBRVQsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgdXNlcjogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gICAgcHVibGljIHJlYWRvbmx5IHVzZXIkID0gdGhpcy51c2VyLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgYmFzZVVybDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gICAgcHJpdmF0ZSBibG9iVXJsOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgICBwcml2YXRlIGJvdFBob25lTnVtYmVyOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICAgIHByaXZhdGUgcmVzb3VyY2VTZXJ2aWNlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICAgIHB1YmxpYyByZWFkb25seSBiYXNlVXJsJCA9IHRoaXMuYmFzZVVybC5hc09ic2VydmFibGUoKTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVzb3VyY2VTZXJ2aWNlJCA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgc2V0VXNlcih1c2VyKSB7XG4gICAgICAgIHRoaXMudXNlci5uZXh0KHVzZXIpO1xuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXIudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0QmFzZVVybChiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMuYmFzZVVybC5uZXh0KGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmwudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0QmxvYlVybChiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMuYmxvYlVybC5uZXh0KGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGdldEJsb2JVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2JVcmwudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0Qm90UGhvbmVOdW1iZXIocGhvbmVOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5ib3RQaG9uZU51bWJlci5uZXh0KHBob25lTnVtYmVyKTtcbiAgICB9XG5cbiAgICBnZXRCb3RQaG9uZU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm90UGhvbmVOdW1iZXIudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0UmVzb3VyY2VTZXJ2aWNlKHJlc291cmNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZS5uZXh0KHJlc291cmNlU2VydmljZSk7XG4gICAgfVxuXG4gICAgZ2V0UmVzb3VyY2VTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVNlcnZpY2UudmFsdWU7XG4gICAgfVxufVxuIl19
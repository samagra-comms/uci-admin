import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.user = new BehaviorSubject(undefined);
        this.user$ = this.user.asObservable();
        this.baseUrl = new BehaviorSubject(undefined);
        this.blobUrl = new BehaviorSubject(undefined);
        this.botPhoneNumber = new BehaviorSubject('');
        this.resourceService = new BehaviorSubject({});
        this.baseUrl$ = this.baseUrl.asObservable();
        this.resourceService$ = this.resourceService.asObservable();
    }
    GlobalService.prototype.setUser = function (user) {
        this.user.next(user);
    };
    GlobalService.prototype.getUser = function () {
        return this.user.value;
    };
    GlobalService.prototype.setBaseUrl = function (baseUrl) {
        this.baseUrl.next(baseUrl);
    };
    GlobalService.prototype.getBaseUrl = function () {
        return this.baseUrl.value;
    };
    GlobalService.prototype.setBlobUrl = function (baseUrl) {
        this.blobUrl.next(baseUrl);
    };
    GlobalService.prototype.getBlobUrl = function () {
        return this.blobUrl.value;
    };
    GlobalService.prototype.setBotPhoneNumber = function (phoneNumber) {
        this.botPhoneNumber.next(phoneNumber);
    };
    GlobalService.prototype.getBotPhoneNumber = function () {
        return this.botPhoneNumber.value;
    };
    GlobalService.prototype.setResourceService = function (resourceService) {
        this.resourceService.next(resourceService);
    };
    GlobalService.prototype.getResourceService = function () {
        return this.resourceService.value;
    };
    GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
    GlobalService.ɵprov = i0.ɵɵdefineInjectable({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
    return GlobalService;
}());
export { GlobalService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GlobalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFckM7SUFhSTtRQVRRLFNBQUksR0FBeUIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsVUFBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsWUFBTyxHQUF5QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxZQUFPLEdBQXlCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELG1CQUFjLEdBQXlCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELG9CQUFlLEdBQXlCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELGFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHdkUsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLE9BQU87UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixXQUFXO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsZUFBZTtRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDOzhFQW5EUSxhQUFhO3lEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZWLE1BQU07d0JBSnRCO0NBMERDLEFBdkRELElBdURDO1NBcERZLGFBQWE7a0RBQWIsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgdXNlcjogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gICAgcHVibGljIHJlYWRvbmx5IHVzZXIkID0gdGhpcy51c2VyLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgYmFzZVVybDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XG4gICAgcHJpdmF0ZSBibG9iVXJsOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgICBwcml2YXRlIGJvdFBob25lTnVtYmVyOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICAgIHByaXZhdGUgcmVzb3VyY2VTZXJ2aWNlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICAgIHB1YmxpYyByZWFkb25seSBiYXNlVXJsJCA9IHRoaXMuYmFzZVVybC5hc09ic2VydmFibGUoKTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVzb3VyY2VTZXJ2aWNlJCA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgc2V0VXNlcih1c2VyKSB7XG4gICAgICAgIHRoaXMudXNlci5uZXh0KHVzZXIpO1xuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXIudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0QmFzZVVybChiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMuYmFzZVVybC5uZXh0KGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGdldEJhc2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmwudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0QmxvYlVybChiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMuYmxvYlVybC5uZXh0KGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGdldEJsb2JVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2JVcmwudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0Qm90UGhvbmVOdW1iZXIocGhvbmVOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5ib3RQaG9uZU51bWJlci5uZXh0KHBob25lTnVtYmVyKTtcbiAgICB9XG5cbiAgICBnZXRCb3RQaG9uZU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm90UGhvbmVOdW1iZXIudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0UmVzb3VyY2VTZXJ2aWNlKHJlc291cmNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZS5uZXh0KHJlc291cmNlU2VydmljZSk7XG4gICAgfVxuXG4gICAgZ2V0UmVzb3VyY2VTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVNlcnZpY2UudmFsdWU7XG4gICAgfVxufVxuIl19
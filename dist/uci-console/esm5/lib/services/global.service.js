import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.user = new BehaviorSubject(undefined);
        this.user$ = this.user.asObservable();
        this.baseUrl = new BehaviorSubject(undefined);
        this.nlBaseUrl = new BehaviorSubject(undefined);
        this.blobUrl = new BehaviorSubject(undefined);
        this.botPhoneNumber = new BehaviorSubject('');
        this.resourceService = new BehaviorSubject({});
        this.broadcastAdapterId = new BehaviorSubject('');
        this.adapterId = new BehaviorSubject('');
        this.baseUrl$ = this.baseUrl.asObservable();
        this.nlBaseUrl$ = this.nlBaseUrl.asObservable();
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
    GlobalService.prototype.setNlBaseUrl = function (baseUrl) {
        this.nlBaseUrl.next(baseUrl);
    };
    GlobalService.prototype.getNlBaseUrl = function () {
        return this.nlBaseUrl.value;
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
    GlobalService.prototype.setBroadcastAdapterId = function (broadcastAdapterId) {
        this.broadcastAdapterId.next(broadcastAdapterId);
    };
    GlobalService.prototype.getBroadcastAdapterId = function () {
        return this.broadcastAdapterId.value;
    };
    GlobalService.prototype.setAdapterId = function (broadcastAdapterId) {
        this.adapterId.next(broadcastAdapterId);
    };
    GlobalService.prototype.getAdapterId = function () {
        return this.adapterId.value;
    };
    GlobalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlobalService_Factory() { return new GlobalService(); }, token: GlobalService, providedIn: "root" });
    GlobalService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlobalService);
    return GlobalService;
}());
export { GlobalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBS3JDO0lBY0k7UUFiUSxTQUFJLEdBQXlCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELFVBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLFlBQU8sR0FBeUIsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsY0FBUyxHQUF5QixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxZQUFPLEdBQXlCLElBQUksZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELG1CQUFjLEdBQXlCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELG9CQUFlLEdBQXlCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLHVCQUFrQixHQUF5QixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRSxjQUFTLEdBQXlCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELGFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHdkUsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLE9BQU87UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLFdBQVc7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELDBDQUFrQixHQUFsQixVQUFtQixlQUFlO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw2Q0FBcUIsR0FBckIsVUFBc0Isa0JBQWtCO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNkNBQXFCLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsa0JBQWtCO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2hDLENBQUM7O0lBL0VRLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztPQUNXLGFBQWEsQ0FnRnpCO3dCQXRGRDtDQXNGQyxBQWhGRCxJQWdGQztTQWhGWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHVzZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuICAgIHB1YmxpYyByZWFkb25seSB1c2VyJCA9IHRoaXMudXNlci5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIGJhc2VVcmw6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuICAgIHByaXZhdGUgbmxCYXNlVXJsOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgICBwcml2YXRlIGJsb2JVcmw6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuICAgIHByaXZhdGUgYm90UGhvbmVOdW1iZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gICAgcHJpdmF0ZSByZXNvdXJjZVNlcnZpY2U6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gICAgcHJpdmF0ZSBicm9hZGNhc3RBZGFwdGVySWQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gICAgcHJpdmF0ZSBhZGFwdGVySWQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gICAgcHVibGljIHJlYWRvbmx5IGJhc2VVcmwkID0gdGhpcy5iYXNlVXJsLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHB1YmxpYyByZWFkb25seSBubEJhc2VVcmwkID0gdGhpcy5ubEJhc2VVcmwuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHVibGljIHJlYWRvbmx5IHJlc291cmNlU2VydmljZSQgPSB0aGlzLnJlc291cmNlU2VydmljZS5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHNldFVzZXIodXNlcikge1xuICAgICAgICB0aGlzLnVzZXIubmV4dCh1c2VyKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyLnZhbHVlO1xuICAgIH1cblxuICAgIHNldEJhc2VVcmwoYmFzZVVybCkge1xuICAgICAgICB0aGlzLmJhc2VVcmwubmV4dChiYXNlVXJsKTtcbiAgICB9XG5cbiAgICBnZXRCYXNlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsLnZhbHVlO1xuICAgIH1cblxuICAgIHNldE5sQmFzZVVybChiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMubmxCYXNlVXJsLm5leHQoYmFzZVVybCk7XG4gICAgfVxuXG4gICAgZ2V0TmxCYXNlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ubEJhc2VVcmwudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0QmxvYlVybChiYXNlVXJsKSB7XG4gICAgICAgIHRoaXMuYmxvYlVybC5uZXh0KGJhc2VVcmwpO1xuICAgIH1cblxuICAgIGdldEJsb2JVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2JVcmwudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0Qm90UGhvbmVOdW1iZXIocGhvbmVOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5ib3RQaG9uZU51bWJlci5uZXh0KHBob25lTnVtYmVyKTtcbiAgICB9XG5cbiAgICBnZXRCb3RQaG9uZU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm90UGhvbmVOdW1iZXIudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0UmVzb3VyY2VTZXJ2aWNlKHJlc291cmNlU2VydmljZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZS5uZXh0KHJlc291cmNlU2VydmljZSk7XG4gICAgfVxuXG4gICAgZ2V0UmVzb3VyY2VTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVNlcnZpY2UudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0QnJvYWRjYXN0QWRhcHRlcklkKGJyb2FkY2FzdEFkYXB0ZXJJZCkge1xuICAgICAgICB0aGlzLmJyb2FkY2FzdEFkYXB0ZXJJZC5uZXh0KGJyb2FkY2FzdEFkYXB0ZXJJZCk7XG4gICAgfVxuXG4gICAgZ2V0QnJvYWRjYXN0QWRhcHRlcklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5icm9hZGNhc3RBZGFwdGVySWQudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0QWRhcHRlcklkKGJyb2FkY2FzdEFkYXB0ZXJJZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJJZC5uZXh0KGJyb2FkY2FzdEFkYXB0ZXJJZCk7XG4gICAgfVxuXG4gICAgZ2V0QWRhcHRlcklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVySWQudmFsdWU7XG4gICAgfVxufVxuIl19
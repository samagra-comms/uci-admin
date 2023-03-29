import { __decorate } from "tslib";
import { UciData } from '../../models/uci.model';
import { TelemetryUtilsService } from '../../telemetry-utils.service';
import { UciService } from '../../services/uci.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/* tslint:disable */
import { ConfigService } from '../../services/config.service';
import { GlobalService } from '../../services/global.service';
/* tslint:enable */
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(router, uciService, activatedRoute, telemetryUtils, configService, globalService) {
        this.router = router;
        this.uciService = uciService;
        this.activatedRoute = activatedRoute;
        this.telemetryUtils = telemetryUtils;
        this.configService = configService;
        this.globalService = globalService;
        this.defaultPage = 'categories';
        this.menu = [];
        this.showSideMenu = true;
    }
    SidePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService = this.globalService.getResourceService();
        // TODO: loader or spinner
        this.telemetryUtils.setContext([]);
        this.hideSidePanel = document.body.classList.contains('widget');
        this.telemetryUtils.logImpression(UciData.IPageName.HOME);
        this.setMenu();
        if (this.globalService.getResourceService() && this.globalService.getResourceService().languageSelected$) {
            this.globalService.getResourceService().languageSelected$.subscribe(function (lang) {
                _this.menu = [];
                _this.setMenu();
            });
        }
    };
    SidePanelComponent.prototype.setMenu = function () {
        var _a, _b;
        this.menu = [
            {
                route: '',
                label: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.conversations,
                enable: true
            }
        ];
    };
    SidePanelComponent.prototype.isActive = function (selectedItem) {
        if (this.router.url.indexOf("/" + selectedItem) > -1 || this.selectedTab === selectedItem) {
            if (!this.selectedTab) {
                this.selectedTab = selectedItem;
            }
            return true;
        }
        else if (selectedItem === 'categories' && !this.selectedTab) {
            return true;
        }
        return false;
    };
    SidePanelComponent.prototype.navigate = function (pageName, event) {
        this.selectedTab = pageName;
        this.telemetryUtils.setContext([]);
        if (event) {
            this.telemetryUtils.logInteract(event, UciData.IPageName.HOME);
        }
        this.router.navigate(["uci-admin"]);
        this.closeNav();
    };
    SidePanelComponent.prototype.ngOnDestroy = function () {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    };
    SidePanelComponent.prototype.showMenuButton = function () {
        this.showSideMenu = !this.showSideMenu;
    };
    SidePanelComponent.prototype.closeNav = function () {
        this.showSideMenu = !this.showSideMenu;
    };
    SidePanelComponent.ctorParameters = function () { return [
        { type: Router },
        { type: UciService },
        { type: ActivatedRoute },
        { type: TelemetryUtilsService },
        { type: ConfigService },
        { type: GlobalService }
    ]; };
    SidePanelComponent = __decorate([
        Component({
            selector: 'lib-side-panel',
            template: "<ul class=\"sb-sidebar-menu pl-0\" *ngIf=\"!hideSidePanel\">\n    <li *ngFor='let d of menu' class=\"ua-sidebar-menu-list\" [ngClass]=\"{'menu-active': isActive(d.route)}\"\n        (click)=\"navigate(d.route, $event)\" id=\"d.route\"><a>{{d.label}}</a></li>\n</ul>\n\n<!-- for mobile-view -->\n<!--<button type=\"button\" class=\"openbtn\" (click)=\"showMenuButton()\">\u2630</button>\n<div class=\"overlay-sidebar\" *ngIf=\"!showSideMenu\">\n    <div class=\"overlay-sidebar__menu\">\n        <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n        <div class=\"sidebar-menu__content\">\n            <ul class=\"sb-sidebar-menu-mob pl-0\">\n                <li class=\"ua-sidebar-menu-list\" *ngIf=\"false\" (click)=\"navigate('', $event)\" id=\"all-discussions\"><a>Bots</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n",
            styles: [".sb-sidebar-menu{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu li{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu li.menu-active{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.openbtn,.overlay-sidebar{display:none}@media (max-width:768px){.sb-sidebar-menu{display:none}.openbtn{display:inline;border:none;cursor:pointer;height:40px;width:40px;border-radius:16px;font-size:22px;background-color:#fff;box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:#0245fd}.overlay-sidebar{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:#f5f6fa;color:rgba(0,0,0,.87);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.sidebar-menu__content{padding:0 1rem;height:100%}.closebtn{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.ua-sidebar-menu-list{margin-bottom:.5rem;position:relative;padding:.675rem;font-size:.875rem}.sb-sidebar-menu-mob li{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob li.menu-active{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.sb-sidebar-menu-mob li:hover{background-color:var(--white);font-weight:700;color:#002e50}}"]
        })
    ], SidePanelComponent);
    return SidePanelComponent;
}());
export { SidePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZELG9CQUFvQjtBQUNwQixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFFNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRTVELG1CQUFtQjtBQU9uQjtJQWVJLDRCQUNXLE1BQWMsRUFDZCxVQUFzQixFQUN0QixjQUE4QixFQUM3QixjQUFxQyxFQUNyQyxhQUE0QixFQUM1QixhQUE0QjtRQUw3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZnhDLGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBSTNCLFNBQUksR0FBd0IsRUFBRSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO0lBVzdCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsZUFBZSxHQUFH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QVEsRUFBRSxnQkFBZ0I7WUFDMUIsODRCQUEwQzs7U0FFN0MsQ0FBQztPQUNXLGtCQUFrQixDQXdGOUI7SUFBRCx5QkFBQztDQUFBLEFBeEZELElBd0ZDO1NBeEZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VWNpRGF0YX0gZnJvbSAnLi4vLi4vbW9kZWxzL3VjaS5tb2RlbCc7XG5pbXBvcnQge1RlbGVtZXRyeVV0aWxzU2VydmljZX0gZnJvbSAnLi4vLi4vdGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuLyogdHNsaW50OmRpc2FibGUgKi9cbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtJZGlzY3Vzc2lvbkNvbmZpZywgSU1lbnVPcHRpb25zfSBmcm9tICcuLi8uLi9tb2RlbHMvdWNpLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcblxuLyogdHNsaW50OmVuYWJsZSAqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1zaWRlLXBhbmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2lkZS1wYW5lbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHBhcmFtc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgdXNlck5hbWU6IHN0cmluZztcblxuICAgIGRlZmF1bHRQYWdlID0gJ2NhdGVnb3JpZXMnO1xuXG4gICAgZGF0YTogSWRpc2N1c3Npb25Db25maWc7XG4gICAgaGlkZVNpZGVQYW5lbDogYm9vbGVhbjtcbiAgICBtZW51OiBBcnJheTxJTWVudU9wdGlvbnM+ID0gW107XG4gICAgc2VsZWN0ZWRUYWI6IHN0cmluZztcbiAgICBzaG93U2lkZU1lbnU6IEJvb2xlYW4gPSB0cnVlO1xuICAgIHJlc291cmNlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHRlbGVtZXRyeVV0aWxzOiBUZWxlbWV0cnlVdGlsc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICAvLyBUT0RPOiBsb2FkZXIgb3Igc3Bpbm5lclxuICAgICAgICB0aGlzLnRlbGVtZXRyeVV0aWxzLnNldENvbnRleHQoW10pO1xuICAgICAgICB0aGlzLmhpZGVTaWRlUGFuZWwgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd2lkZ2V0Jyk7XG4gICAgICAgIHRoaXMudGVsZW1ldHJ5VXRpbHMubG9nSW1wcmVzc2lvbihVY2lEYXRhLklQYWdlTmFtZS5IT01FKTtcbiAgICAgICAgdGhpcy5zZXRNZW51KCk7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCkgJiYgdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpLmxhbmd1YWdlU2VsZWN0ZWQkKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCkubGFuZ3VhZ2VTZWxlY3RlZCQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGxhbmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNZW51KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1lbnUoKSB7XG4gICAgICAgIHRoaXMubWVudSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZTogJycsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb252ZXJzYXRpb25zLFxuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGlzQWN0aXZlKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoYC8ke3NlbGVjdGVkSXRlbX1gKSA+IC0xIHx8IHRoaXMuc2VsZWN0ZWRUYWIgPT09IHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkVGFiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHNlbGVjdGVkSXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSXRlbSA9PT0gJ2NhdGVnb3JpZXMnICYmICF0aGlzLnNlbGVjdGVkVGFiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUocGFnZU5hbWU6IHN0cmluZywgZXZlbnQ/KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBwYWdlTmFtZTtcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlVdGlscy5zZXRDb250ZXh0KFtdKTtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRlbGVtZXRyeVV0aWxzLmxvZ0ludGVyYWN0KGV2ZW50LCBVY2lEYXRhLklQYWdlTmFtZS5IT01FKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYHVjaS1hZG1pbmBdKTtcbiAgICAgICAgdGhpcy5jbG9zZU5hdigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbXNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TWVudUJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5zaG93U2lkZU1lbnUgPSAhdGhpcy5zaG93U2lkZU1lbnU7XG4gICAgfVxuXG4gICAgY2xvc2VOYXYoKSB7XG4gICAgICAgIHRoaXMuc2hvd1NpZGVNZW51ID0gIXRoaXMuc2hvd1NpZGVNZW51O1xuICAgIH1cblxufVxuIl19
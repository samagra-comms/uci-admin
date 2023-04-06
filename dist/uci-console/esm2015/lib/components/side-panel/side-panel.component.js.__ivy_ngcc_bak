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
let SidePanelComponent = class SidePanelComponent {
    constructor(router, uciService, activatedRoute, telemetryUtils, configService, globalService) {
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
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        // TODO: loader or spinner
        this.telemetryUtils.setContext([]);
        this.hideSidePanel = document.body.classList.contains('widget');
        this.telemetryUtils.logImpression(UciData.IPageName.HOME);
        this.setMenu();
        if (this.globalService.getResourceService() && this.globalService.getResourceService().languageSelected$) {
            this.globalService.getResourceService().languageSelected$.subscribe(lang => {
                this.menu = [];
                this.setMenu();
            });
        }
    }
    setMenu() {
        var _a, _b;
        this.menu = [
            {
                route: '',
                label: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.conversations,
                enable: true
            }
        ];
    }
    isActive(selectedItem) {
        if (this.router.url.indexOf(`/${selectedItem}`) > -1 || this.selectedTab === selectedItem) {
            if (!this.selectedTab) {
                this.selectedTab = selectedItem;
            }
            return true;
        }
        else if (selectedItem === 'categories' && !this.selectedTab) {
            return true;
        }
        return false;
    }
    navigate(pageName, event) {
        this.selectedTab = pageName;
        this.telemetryUtils.setContext([]);
        if (event) {
            this.telemetryUtils.logInteract(event, UciData.IPageName.HOME);
        }
        this.router.navigate([`uci-admin`]);
        this.closeNav();
    }
    ngOnDestroy() {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }
    showMenuButton() {
        this.showSideMenu = !this.showSideMenu;
    }
    closeNav() {
        this.showSideMenu = !this.showSideMenu;
    }
};
SidePanelComponent.ctorParameters = () => [
    { type: Router },
    { type: UciService },
    { type: ActivatedRoute },
    { type: TelemetryUtilsService },
    { type: ConfigService },
    { type: GlobalService }
];
SidePanelComponent = __decorate([
    Component({
        selector: 'lib-side-panel',
        template: "<ul class=\"sb-sidebar-menu pl-0\" *ngIf=\"!hideSidePanel\">\n    <li *ngFor='let d of menu' class=\"ua-sidebar-menu-list\" [ngClass]=\"{'menu-active': isActive(d.route)}\"\n        (click)=\"navigate(d.route, $event)\" id=\"d.route\"><a>{{d.label}}</a></li>\n</ul>\n\n<!-- for mobile-view -->\n<!--<button type=\"button\" class=\"openbtn\" (click)=\"showMenuButton()\">\u2630</button>\n<div class=\"overlay-sidebar\" *ngIf=\"!showSideMenu\">\n    <div class=\"overlay-sidebar__menu\">\n        <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n        <div class=\"sidebar-menu__content\">\n            <ul class=\"sb-sidebar-menu-mob pl-0\">\n                <li class=\"ua-sidebar-menu-list\" *ngIf=\"false\" (click)=\"navigate('', $event)\" id=\"all-discussions\"><a>Bots</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n",
        styles: [".sb-sidebar-menu{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu li{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu li.menu-active{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.openbtn,.overlay-sidebar{display:none}@media (max-width:768px){.sb-sidebar-menu{display:none}.openbtn{display:inline;border:none;cursor:pointer;height:40px;width:40px;border-radius:16px;font-size:22px;background-color:#fff;box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:#0245fd}.overlay-sidebar{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:#f5f6fa;color:rgba(0,0,0,.87);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.sidebar-menu__content{padding:0 1rem;height:100%}.closebtn{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.ua-sidebar-menu-list{margin-bottom:.5rem;position:relative;padding:.675rem;font-size:.875rem}.sb-sidebar-menu-mob li{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob li.menu-active{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.sb-sidebar-menu-mob li:hover{background-color:var(--white);font-weight:700;color:#002e50}}"]
    })
], SidePanelComponent);
export { SidePanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZELG9CQUFvQjtBQUNwQixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFFNUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRTVELG1CQUFtQjtBQU9uQixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWUzQixZQUNXLE1BQWMsRUFDZCxVQUFzQixFQUN0QixjQUE4QixFQUM3QixjQUFxQyxFQUNyQyxhQUE0QixFQUM1QixhQUE0QjtRQUw3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZnhDLGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBSTNCLFNBQUksR0FBd0IsRUFBRSxDQUFDO1FBRS9CLGlCQUFZLEdBQVksSUFBSSxDQUFDO0lBVzdCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxD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QkFBZ0I7UUFDMUIsODRCQUEwQzs7S0FFN0MsQ0FBQztHQUNXLGtCQUFrQixDQXdGOUI7U0F4Rlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVY2lEYXRhfSBmcm9tICcuLi8uLi9tb2RlbHMvdWNpLm1vZGVsJztcbmltcG9ydCB7VGVsZW1ldHJ5VXRpbHNTZXJ2aWNlfSBmcm9tICcuLi8uLi90ZWxlbWV0cnktdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQge0lkaXNjdXNzaW9uQ29uZmlnLCBJTWVudU9wdGlvbnN9IGZyb20gJy4uLy4uL21vZGVscy91Y2ktY29uZmlnLm1vZGVsJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXNpZGUtcGFuZWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcGFyYW1zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuXG4gICAgZGVmYXVsdFBhZ2UgPSAnY2F0ZWdvcmllcyc7XG5cbiAgICBkYXRhOiBJZGlzY3Vzc2lvbkNvbmZpZztcbiAgICBoaWRlU2lkZVBhbmVsOiBib29sZWFuO1xuICAgIG1lbnU6IEFycmF5PElNZW51T3B0aW9ucz4gPSBbXTtcbiAgICBzZWxlY3RlZFRhYjogc3RyaW5nO1xuICAgIHNob3dTaWRlTWVudTogQm9vbGVhbiA9IHRydWU7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdGVsZW1ldHJ5VXRpbHM6IFRlbGVtZXRyeVV0aWxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIC8vIFRPRE86IGxvYWRlciBvciBzcGlubmVyXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5VXRpbHMuc2V0Q29udGV4dChbXSk7XG4gICAgICAgIHRoaXMuaGlkZVNpZGVQYW5lbCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aWRnZXQnKTtcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlVdGlscy5sb2dJbXByZXNzaW9uKFVjaURhdGEuSVBhZ2VOYW1lLkhPTUUpO1xuICAgICAgICB0aGlzLnNldE1lbnUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKSAmJiB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCkubGFuZ3VhZ2VTZWxlY3RlZCQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKS5sYW5ndWFnZVNlbGVjdGVkJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbGFuZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1lbnUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TWVudSgpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdXRlOiAnJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnZlcnNhdGlvbnMsXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgaXNBY3RpdmUoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlci51cmwuaW5kZXhPZihgLyR7c2VsZWN0ZWRJdGVtfWApID4gLTEgfHwgdGhpcy5zZWxlY3RlZFRhYiA9PT0gc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJdGVtID09PSAnY2F0ZWdvcmllcycgJiYgIXRoaXMuc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYWdlTmFtZTogc3RyaW5nLCBldmVudD8pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHBhZ2VOYW1lO1xuICAgICAgICB0aGlzLnRlbGVtZXRyeVV0aWxzLnNldENvbnRleHQoW10pO1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGVsZW1ldHJ5VXRpbHMubG9nSW50ZXJhY3QoZXZlbnQsIFVjaURhdGEuSVBhZ2VOYW1lLkhPTUUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgdWNpLWFkbWluYF0pO1xuICAgICAgICB0aGlzLmNsb3NlTmF2KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51QnV0dG9uKCkge1xuICAgICAgICB0aGlzLnNob3dTaWRlTWVudSA9ICF0aGlzLnNob3dTaWRlTWVudTtcbiAgICB9XG5cbiAgICBjbG9zZU5hdigpIHtcbiAgICAgICAgdGhpcy5zaG93U2lkZU1lbnUgPSAhdGhpcy5zaG93U2lkZU1lbnU7XG4gICAgfVxuXG59XG4iXX0=
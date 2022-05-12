import { UciData } from '../../models/uci.model';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/uci.service";
import * as i3 from "../../telemetry-utils.service";
import * as i4 from "../../services/config.service";
import * as i5 from "../../services/global.service";
import * as i6 from "@angular/common";
var _c0 = function (a0) { return { "menu-active": a0 }; };
function SidePanelComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3);
    i0.ɵɵlistener("click", function SidePanelComponent_ul_0_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r4); var d_r2 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.navigate(d_r2.route, $event); });
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var d_r2 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r1.isActive(d_r2.route)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r2.label);
} }
function SidePanelComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 1);
    i0.ɵɵtemplate(1, SidePanelComponent_ul_0_li_1_Template, 3, 4, "li", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.menu);
} }
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
    SidePanelComponent.ɵfac = function SidePanelComponent_Factory(t) { return new (t || SidePanelComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UciService), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i3.TelemetryUtilsService), i0.ɵɵdirectiveInject(i4.ConfigService), i0.ɵɵdirectiveInject(i5.GlobalService)); };
    SidePanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SidePanelComponent, selectors: [["lib-side-panel"]], decls: 1, vars: 1, consts: [["class", "sb-sidebar-menu pl-0", 4, "ngIf"], [1, "sb-sidebar-menu", "pl-0"], ["class", "ua-sidebar-menu-list", "id", "d.route", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["id", "d.route", 1, "ua-sidebar-menu-list", 3, "ngClass", "click"]], template: function SidePanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidePanelComponent_ul_0_Template, 2, 1, "ul", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.hideSidePanel);
        } }, directives: [i6.NgIf, i6.NgForOf, i6.NgClass], styles: [".sb-sidebar-menu[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob[_ngcontent-%COMP%]{list-style-type:none;margin-bottom:0;height:100%;display:inline}.sb-sidebar-menu[_ngcontent-%COMP%]   li.menu-active[_ngcontent-%COMP%]{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.openbtn[_ngcontent-%COMP%], .overlay-sidebar[_ngcontent-%COMP%]{display:none}@media (max-width:768px){.sb-sidebar-menu[_ngcontent-%COMP%]{display:none}.openbtn[_ngcontent-%COMP%]{display:inline;border:none;cursor:pointer;height:40px;width:40px;border-radius:16px;font-size:22px;background-color:#fff;box-shadow:3px 3px 2px 0 rgba(0,0,0,.1);color:#0245fd}.overlay-sidebar[_ngcontent-%COMP%]{height:100vh;width:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0;bottom:0;position:absolute;display:inline;z-index:3;transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}.overlay-sidebar__menu[_ngcontent-%COMP%]{position:relative;top:0;height:100%;width:15rem;right:0;z-index:100000;overflow-y:auto;overflow-x:hidden;background-color:#f5f6fa;color:rgba(0,0,0,.87);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px #000}.sidebar-menu__content[_ngcontent-%COMP%]{padding:0 1rem;height:100%}.closebtn[_ngcontent-%COMP%]{font-size:2.5rem;display:flex;justify-content:flex-end;padding-right:1rem;cursor:pointer}.ua-sidebar-menu-list[_ngcontent-%COMP%]{margin-bottom:.5rem;position:relative;padding:.675rem;font-size:.875rem}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:0;padding:.75rem 1rem;font-size:14px;color:#333;border-left:.125rem solid transparent;cursor:pointer}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li.menu-active[_ngcontent-%COMP%]{background-color:var(--white);font-weight:700;border-left:3px solid #005391;color:#002e50;border-bottom:0}.sb-sidebar-menu-mob[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--white);font-weight:700;color:#002e50}}"] });
    return SidePanelComponent;
}());
export { SidePanelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidePanelComponent, [{
        type: Component,
        args: [{
                selector: 'lib-side-panel',
                templateUrl: './side-panel.component.html',
                styleUrls: ['./side-panel.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.UciService }, { type: i1.ActivatedRoute }, { type: i3.TelemetryUtilsService }, { type: i4.ConfigService }, { type: i5.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHL0MsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lDRnZELDZCQUNxRDtJQUFqRCxxT0FBbUM7SUFBYyx5QkFBRztJQUFBLFlBQVc7SUFBQSxpQkFBSTtJQUFBLGlCQUFLOzs7O0lBRHBCLGlGQUE4QztJQUM5QyxlQUFXO0lBQVgsZ0NBQVc7OztJQUZ2RSw2QkFDSTtJQUFBLHNFQUNxRDtJQUN6RCxpQkFBSzs7O0lBRkcsZUFBc0I7SUFBdEIscUNBQXNCOztBRFU5QixtQkFBbUI7QUFFbkI7SUFvQkksNEJBQ1csTUFBYyxFQUNkLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzdCLGNBQXFDLEVBQ3JDLGFBQTRCLEVBQzVCLGFBQTRCO1FBTDdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM3QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFmeEMsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFJM0IsU0FBSSxHQUF3QixFQUFFLENBQUM7UUFFL0IsaUJBQVksR0FBWSxJQUFJLENBQUM7SUFXN0IsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFB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U0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVY2lEYXRhfSBmcm9tICcuLi8uLi9tb2RlbHMvdWNpLm1vZGVsJztcbmltcG9ydCB7VGVsZW1ldHJ5VXRpbHNTZXJ2aWNlfSBmcm9tICcuLi8uLi90ZWxlbWV0cnktdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQge0lkaXNjdXNzaW9uQ29uZmlnLCBJTWVudU9wdGlvbnN9IGZyb20gJy4uLy4uL21vZGVscy91Y2ktY29uZmlnLm1vZGVsJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXNpZGUtcGFuZWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcGFyYW1zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuXG4gICAgZGVmYXVsdFBhZ2UgPSAnY2F0ZWdvcmllcyc7XG5cbiAgICBkYXRhOiBJZGlzY3Vzc2lvbkNvbmZpZztcbiAgICBoaWRlU2lkZVBhbmVsOiBib29sZWFuO1xuICAgIG1lbnU6IEFycmF5PElNZW51T3B0aW9ucz4gPSBbXTtcbiAgICBzZWxlY3RlZFRhYjogc3RyaW5nO1xuICAgIHNob3dTaWRlTWVudTogQm9vbGVhbiA9IHRydWU7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdGVsZW1ldHJ5VXRpbHM6IFRlbGVtZXRyeVV0aWxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIC8vIFRPRE86IGxvYWRlciBvciBzcGlubmVyXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5VXRpbHMuc2V0Q29udGV4dChbXSk7XG4gICAgICAgIHRoaXMuaGlkZVNpZGVQYW5lbCA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aWRnZXQnKTtcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlVdGlscy5sb2dJbXByZXNzaW9uKFVjaURhdGEuSVBhZ2VOYW1lLkhPTUUpO1xuICAgICAgICB0aGlzLnNldE1lbnUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKSAmJiB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCkubGFuZ3VhZ2VTZWxlY3RlZCQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKS5sYW5ndWFnZVNlbGVjdGVkJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbGFuZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1lbnUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TWVudSgpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvdXRlOiAnJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnZlcnNhdGlvbnMsXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgaXNBY3RpdmUoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlci51cmwuaW5kZXhPZihgLyR7c2VsZWN0ZWRJdGVtfWApID4gLTEgfHwgdGhpcy5zZWxlY3RlZFRhYiA9PT0gc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJdGVtID09PSAnY2F0ZWdvcmllcycgJiYgIXRoaXMuc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYWdlTmFtZTogc3RyaW5nLCBldmVudD8pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IHBhZ2VOYW1lO1xuICAgICAgICB0aGlzLnRlbGVtZXRyeVV0aWxzLnNldENvbnRleHQoW10pO1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGVsZW1ldHJ5VXRpbHMubG9nSW50ZXJhY3QoZXZlbnQsIFVjaURhdGEuSVBhZ2VOYW1lLkhPTUUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgdWNpLWFkbWluYF0pO1xuICAgICAgICB0aGlzLmNsb3NlTmF2KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51QnV0dG9uKCkge1xuICAgICAgICB0aGlzLnNob3dTaWRlTWVudSA9ICF0aGlzLnNob3dTaWRlTWVudTtcbiAgICB9XG5cbiAgICBjbG9zZU5hdigpIHtcbiAgICAgICAgdGhpcy5zaG93U2lkZU1lbnUgPSAhdGhpcy5zaG93U2lkZU1lbnU7XG4gICAgfVxuXG59XG4iLCI8dWwgY2xhc3M9XCJzYi1zaWRlYmFyLW1lbnUgcGwtMFwiICpuZ0lmPVwiIWhpZGVTaWRlUGFuZWxcIj5cbiAgICA8bGkgKm5nRm9yPSdsZXQgZCBvZiBtZW51JyBjbGFzcz1cInVhLXNpZGViYXItbWVudS1saXN0XCIgW25nQ2xhc3NdPVwieydtZW51LWFjdGl2ZSc6IGlzQWN0aXZlKGQucm91dGUpfVwiXG4gICAgICAgIChjbGljayk9XCJuYXZpZ2F0ZShkLnJvdXRlLCAkZXZlbnQpXCIgaWQ9XCJkLnJvdXRlXCI+PGE+e3tkLmxhYmVsfX08L2E+PC9saT5cbjwvdWw+XG5cbjwhLS0gZm9yIG1vYmlsZS12aWV3IC0tPlxuPCEtLTxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwib3BlbmJ0blwiIChjbGljayk9XCJzaG93TWVudUJ1dHRvbigpXCI+4piwPC9idXR0b24+XG48ZGl2IGNsYXNzPVwib3ZlcmxheS1zaWRlYmFyXCIgKm5nSWY9XCIhc2hvd1NpZGVNZW51XCI+XG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktc2lkZWJhcl9fbWVudVwiPlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJjbG9zZWJ0blwiIChjbGljayk9XCJjbG9zZU5hdigpXCI+JnRpbWVzOzwvYT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItbWVudV9fY29udGVudFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic2Itc2lkZWJhci1tZW51LW1vYiBwbC0wXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidWEtc2lkZWJhci1tZW51LWxpc3RcIiAqbmdJZj1cImZhbHNlXCIgKGNsaWNrKT1cIm5hdmlnYXRlKCcnLCAkZXZlbnQpXCIgaWQ9XCJhbGwtZGlzY3Vzc2lvbnNcIj48YT5Cb3RzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2Pi0tPlxuIl19
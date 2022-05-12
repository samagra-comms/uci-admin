import { Component, Input } from '@angular/core';
import { UciData } from '../../models/uci.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/uci.service";
import * as i3 from "../../services/config.service";
import * as i4 from "@angular/common";
import * as i5 from "../../uci-events.service";
import * as i6 from "../../telemetry-utils.service";
import * as i7 from "../../services/global.service";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "../side-panel/side-panel.component";
var LibEntryComponent = /** @class */ (function () {
    function LibEntryComponent(activatedRoute, uciService, configService, location, uciEventsService, telemetryUtils, globalService, router) {
        this.activatedRoute = activatedRoute;
        this.uciService = uciService;
        this.configService = configService;
        this.location = location;
        this.uciEventsService = uciEventsService;
        this.telemetryUtils = telemetryUtils;
        this.globalService = globalService;
        this.router = router;
    }
    LibEntryComponent.prototype.ngOnInit = function () {
        if (this.user) {
            this.globalService.setUser(this.user);
        }
        if (this.baseUrl) {
            this.globalService.setBaseUrl(this.baseUrl);
        }
        if (this.blobUrl) {
            this.globalService.setBlobUrl(this.blobUrl);
        }
        if (this.botPhoneNumber) {
            this.globalService.setBotPhoneNumber(this.botPhoneNumber);
        }
        if (this.resourceService) {
            this.globalService.setResourceService(this.resourceService);
        }
        if (this.router.url === '/uci-admin') {
            this.router.navigate(['uci-admin/home'], { skipLocationChange: true });
        }
    };
    LibEntryComponent.prototype.goBack = function () {
        this.location.back();
    };
    LibEntryComponent.prototype.close = function (event) {
        var eventAction = {
            action: 'DF_CLOSE'
        };
        this.uciEventsService.emitTelemetry(eventAction);
        this.telemetryUtils.logInteract(event, UciData.IPageName.LIB_ENTRY);
    };
    LibEntryComponent.ɵfac = function LibEntryComponent_Factory(t) { return new (t || LibEntryComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.UciService), i0.ɵɵdirectiveInject(i3.ConfigService), i0.ɵɵdirectiveInject(i4.Location), i0.ɵɵdirectiveInject(i5.UciEventsService), i0.ɵɵdirectiveInject(i6.TelemetryUtilsService), i0.ɵɵdirectiveInject(i7.GlobalService), i0.ɵɵdirectiveInject(i1.Router)); };
    LibEntryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LibEntryComponent, selectors: [["lib-lib-entry"]], inputs: { user: "user", baseUrl: "baseUrl", blobUrl: "blobUrl", botPhoneNumber: "botPhoneNumber", resourceService: "resourceService" }, decls: 14, vars: 1, consts: [[1, "ui"], [1, "relative", "position"], [1, "py-8", "ua-btn-container", "ua-back-btn-container", "px-20", "z-index-2"], [1, "mx-20"], ["mat-raised-button", "", 3, "click"], [1, "uci-admin"], [1, "uci-admin-content"], [1, "uci-admin-left-panel", "ua-side-content", "z-index-2"], [1, "uci-admin-right-panel", "ua-main-content", "z-index-2"]], template: function LibEntryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "button", 4);
            i0.ɵɵlistener("click", function LibEntryComponent_Template_button_click_4_listener() { return ctx.goBack(); });
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵtext(6, "keyboard_backspace");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵelementStart(10, "div", 7);
            i0.ɵɵelement(11, "lib-side-panel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 8);
            i0.ɵɵelement(13, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", (ctx.resourceService == null ? null : ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.back) || "Back", " ");
        } }, directives: [i8.MatButton, i9.MatIcon, i10.SidePanelComponent, i1.RouterOutlet], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}.ua-btn-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#fff}.ua-btn-close[_ngcontent-%COMP%]{color:#000;font-weight:700;background:#ef64af}.uci-admin[_ngcontent-%COMP%]{width:100%;min-height:100vh;position:relative;z-index:unset}.uci-admin-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr;margin:0 1.5rem}.uci-admin-left-panel[_ngcontent-%COMP%]{padding:1.5rem;position:relative;z-index:2}.uci-admin-right-panel[_ngcontent-%COMP%]{padding:1.5rem}.ui.loader[_ngcontent-%COMP%]:after{border-color:#fff transparent transparent!important}@media (max-width:768px){.uci-admin[_ngcontent-%COMP%]{padding:0 8px;height:100vh;overflow:auto;background:#e9e8d9}.uci-admin-left-panel[_ngcontent-%COMP%]{padding:1rem 0}.uci-admin-right-panel[_ngcontent-%COMP%]{padding:0 0 48px}}.font-weight-bold[_ngcontent-%COMP%]{font-weight:700}.font-weight-normal[_ngcontent-%COMP%]{font-weight:400}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.z-index-2[_ngcontent-%COMP%]{z-index:2!important}@media screen and (min-width:376px) and (max-width:768px){.uci-admin-content[_ngcontent-%COMP%]{grid-template-columns:1fr;margin:0}}@media screen and (min-width:320px) and (max-width:375px){.uci-admin-content[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(292px,1fr));margin:0}}"] });
    return LibEntryComponent;
}());
export { LibEntryComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LibEntryComponent, [{
        type: Component,
        args: [{
                selector: 'lib-lib-entry',
                templateUrl: './lib-entry.component.html',
                styleUrls: ['./lib-entry.component.scss']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.UciService }, { type: i3.ConfigService }, { type: i4.Location }, { type: i5.UciEventsService }, { type: i6.TelemetryUtilsService }, { type: i7.GlobalService }, { type: i1.Router }]; }, { user: [{
            type: Input
        }], baseUrl: [{
            type: Input
        }], blobUrl: [{
            type: Input
        }], botPhoneNumber: [{
            type: Input
        }], resourceService: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saWItZW50cnkvbGliLWVudHJ5LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2xpYi1lbnRyeS9saWItZW50cnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7QUFHL0M7SUFZSSwyQkFDVyxjQUE4QixFQUM3QixVQUFzQixFQUN0QixhQUE0QixFQUM1QixRQUFrQixFQUNsQixnQkFBa0MsRUFDbEMsY0FBcUMsRUFDckMsYUFBNEIsRUFDNUIsTUFBYztRQVBmLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUUxQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssWUFBWSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxLQUFLO1FBQ1AsSUFBTSxXQUFXLEdBQUc7WUFDaEIsTUFBTSxFQUFFLFVBQVU7U0FDckIsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztzRkFsRFEsaUJBQWlCOzBEQUFqQixpQkFBaUI7WUNoQjlCLDhCQUNJO1lBQUEsOEJBQ0k7WUFBQSw4QkFDRztZQUFBLDhCQUNJO1lBQUEsaUNBQ0k7WUFEc0IsOEZBQVMsWUFBUSxJQUFDO1lBQ3hDLGdDQUFVO1lBQUEsa0NBQWtCO1lBQUEsaUJBQVc7WUFDdkMsWUFDSjtZQUFBLGlCQUFTO1lBQ2IsaUJBQU07WUFDVCxpQkFBTTtZQUNWLGlCQUFNO1lBQ04sOEJBQ0k7WUFBQSw4QkFDSTtZQUFBLCtCQUNJO1lBQUEsa0NBQWlDO1lBQ3JDLGlCQUFNO1lBQ04sK0JBQ0k7WUFBQSxpQ0FBK0I7WUFDbkMsaUJBQU07WUFDVixpQkFBTTtZQUNWLGlCQUFNO1lBQ1YsaUJBQU07O1lBZmEsZUFDSjtZQURJLDBOQUNKOzs0QkRQZjtDQW1FQyxBQXhERCxJQXdEQztTQW5EWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzVDOztrQkFFSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VWNpRXZlbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vdWNpLWV2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7SWRpc2N1c3Npb25Db25maWd9IGZyb20gJy4uLy4uL21vZGVscy91Y2ktY29uZmlnLm1vZGVsJztcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge1RlbGVtZXRyeVV0aWxzU2VydmljZX0gZnJvbSAnLi4vLi4vdGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lEYXRhfSBmcm9tICcuLi8uLi9tb2RlbHMvdWNpLm1vZGVsJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1saWItZW50cnknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saWItZW50cnkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xpYi1lbnRyeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpYkVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB1c2VyO1xuICAgIEBJbnB1dCgpIGJhc2VVcmw7XG4gICAgQElucHV0KCkgYmxvYlVybDtcbiAgICBASW5wdXQoKSBib3RQaG9uZU51bWJlcjtcbiAgICBASW5wdXQoKSByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICBwcml2YXRlIHVjaUV2ZW50c1NlcnZpY2U6IFVjaUV2ZW50c1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdGVsZW1ldHJ5VXRpbHM6IFRlbGVtZXRyeVV0aWxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRVc2VyKHRoaXMudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmFzZVVybCkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldEJhc2VVcmwodGhpcy5iYXNlVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ibG9iVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uuc2V0QmxvYlVybCh0aGlzLmJsb2JVcmwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdFBob25lTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uuc2V0Qm90UGhvbmVOdW1iZXIodGhpcy5ib3RQaG9uZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uuc2V0UmVzb3VyY2VTZXJ2aWNlKHRoaXMucmVzb3VyY2VTZXJ2aWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSAnL3VjaS1hZG1pbicpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluL2hvbWUnXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV2ZW50QWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnREZfQ0xPU0UnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudWNpRXZlbnRzU2VydmljZS5lbWl0VGVsZW1ldHJ5KGV2ZW50QWN0aW9uKTtcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlVdGlscy5sb2dJbnRlcmFjdChldmVudCwgVWNpRGF0YS5JUGFnZU5hbWUuTElCX0VOVFJZKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidWlcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgcG9zaXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTggdWEtYnRuLWNvbnRhaW5lciB1YS1iYWNrLWJ0bi1jb250YWluZXIgcHgtMjAgei1pbmRleC0yXCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC0yMFwiPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZ29CYWNrKClcIj5cbiAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+a2V5Ym9hcmRfYmFja3NwYWNlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZT8uZnJtZWxtbnRzPy5idG4/LmJhY2sgfHwgJ0JhY2snfX1cbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInVjaS1hZG1pblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWNpLWFkbWluLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1Y2ktYWRtaW4tbGVmdC1wYW5lbCB1YS1zaWRlLWNvbnRlbnQgei1pbmRleC0yXCI+XG4gICAgICAgICAgICAgICAgPGxpYi1zaWRlLXBhbmVsPjwvbGliLXNpZGUtcGFuZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1Y2ktYWRtaW4tcmlnaHQtcGFuZWwgdWEtbWFpbi1jb250ZW50IHotaW5kZXgtMlwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19
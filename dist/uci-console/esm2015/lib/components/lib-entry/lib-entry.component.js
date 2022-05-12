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
export class LibEntryComponent {
    constructor(activatedRoute, uciService, configService, location, uciEventsService, telemetryUtils, globalService, router) {
        this.activatedRoute = activatedRoute;
        this.uciService = uciService;
        this.configService = configService;
        this.location = location;
        this.uciEventsService = uciEventsService;
        this.telemetryUtils = telemetryUtils;
        this.globalService = globalService;
        this.router = router;
    }
    ngOnInit() {
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
    }
    goBack() {
        this.location.back();
    }
    close(event) {
        const eventAction = {
            action: 'DF_CLOSE'
        };
        this.uciEventsService.emitTelemetry(eventAction);
        this.telemetryUtils.logInteract(event, UciData.IPageName.LIB_ENTRY);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saWItZW50cnkvbGliLWVudHJ5LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2xpYi1lbnRyeS9saWItZW50cnkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7QUFRL0MsTUFBTSxPQUFPLGlCQUFpQjtJQU8xQixZQUNXLGNBQThCLEVBQzdCLFVBQXNCLEVBQ3RCLGFBQTRCLEVBQzVCLFFBQWtCLEVBQ2xCLGdCQUFrQyxFQUNsQyxjQUFxQyxFQUNyQyxhQUE0QixFQUM1QixNQUFjO1FBUGYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRTFCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxZQUFZLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUNMLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDUCxNQUFNLFdBQVcsR0FBRztZQUNoQixNQUFNLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDOztrRkFsRFEsaUJBQWlCO3NEQUFqQixpQkFBaUI7UUNoQjlCLDhCQUNJO1FBQUEsOEJBQ0k7UUFBQSw4QkFDRztRQUFBLDhCQUNJO1FBQUEsaUNBQ0k7UUFEc0IsOEZBQVMsWUFBUSxJQUFDO1FBQ3hDLGdDQUFVO1FBQUEsa0NBQWtCO1FBQUEsaUJBQVc7UUFDdkMsWUFDSjtRQUFBLGlCQUFTO1FBQ2IsaUJBQU07UUFDVCxpQkFBTTtRQUNWLGlCQUFNO1FBQ04sOEJBQ0k7UUFBQSw4QkFDSTtRQUFBLCtCQUNJO1FBQUEsa0NBQWlDO1FBQ3JDLGlCQUFNO1FBQ04sK0JBQ0k7UUFBQSxpQ0FBK0I7UUFDbkMsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQU07O1FBZmEsZUFDSjtRQURJLDBOQUNKOztrRERTRixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUM1Qzs7a0JBRUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1VjaUV2ZW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3VjaS1ldmVudHMuc2VydmljZSc7XG5pbXBvcnQge0lkaXNjdXNzaW9uQ29uZmlnfSBmcm9tICcuLi8uLi9tb2RlbHMvdWNpLWNvbmZpZy5tb2RlbCc7XG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtUZWxlbWV0cnlVdGlsc1NlcnZpY2V9IGZyb20gJy4uLy4uL3RlbGVtZXRyeS11dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7VWNpRGF0YX0gZnJvbSAnLi4vLi4vbW9kZWxzL3VjaS5tb2RlbCc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItbGliLWVudHJ5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGliLWVudHJ5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9saWItZW50cnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJFbnRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgdXNlcjtcbiAgICBASW5wdXQoKSBiYXNlVXJsO1xuICAgIEBJbnB1dCgpIGJsb2JVcmw7XG4gICAgQElucHV0KCkgYm90UGhvbmVOdW1iZXI7XG4gICAgQElucHV0KCkgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgcHJpdmF0ZSB1Y2lFdmVudHNTZXJ2aWNlOiBVY2lFdmVudHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRlbGVtZXRyeVV0aWxzOiBUZWxlbWV0cnlVdGlsc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJhc2VVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRCYXNlVXJsKHRoaXMuYmFzZVVybCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmxvYlVybCkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldEJsb2JVcmwodGhpcy5ibG9iVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3RQaG9uZU51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldEJvdFBob25lTnVtYmVyKHRoaXMuYm90UGhvbmVOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldFJlc291cmNlU2VydmljZSh0aGlzLnJlc291cmNlU2VydmljZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gJy91Y2ktYWRtaW4nKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbi9ob21lJ10sIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG5cbiAgICBjbG9zZShldmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBldmVudEFjdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ0RGX0NMT1NFJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaUV2ZW50c1NlcnZpY2UuZW1pdFRlbGVtZXRyeShldmVudEFjdGlvbik7XG4gICAgICAgIHRoaXMudGVsZW1ldHJ5VXRpbHMubG9nSW50ZXJhY3QoZXZlbnQsIFVjaURhdGEuSVBhZ2VOYW1lLkxJQl9FTlRSWSk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVpXCI+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHBvc2l0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJweS04IHVhLWJ0bi1jb250YWluZXIgdWEtYmFjay1idG4tY29udGFpbmVyIHB4LTIwIHotaW5kZXgtMlwiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXgtMjBcIj5cbiAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImdvQmFjaygpXCI+XG4gICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmtleWJvYXJkX2JhY2tzcGFjZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2U/LmZybWVsbW50cz8uYnRuPy5iYWNrIHx8ICdCYWNrJ319XG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ1Y2ktYWRtaW5cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVjaS1hZG1pbi1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWNpLWFkbWluLWxlZnQtcGFuZWwgdWEtc2lkZS1jb250ZW50IHotaW5kZXgtMlwiPlxuICAgICAgICAgICAgICAgIDxsaWItc2lkZS1wYW5lbD48L2xpYi1zaWRlLXBhbmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWNpLWFkbWluLXJpZ2h0LXBhbmVsIHVhLW1haW4tY29udGVudCB6LWluZGV4LTJcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==
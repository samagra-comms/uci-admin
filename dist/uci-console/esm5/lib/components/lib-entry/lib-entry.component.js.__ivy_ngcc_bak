import { __decorate } from "tslib";
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { UciEventsService } from '../../uci-events.service';
import { ConfigService } from '../../services/config.service';
import { UciService } from '../../services/uci.service';
import { TelemetryUtilsService } from '../../telemetry-utils.service';
import { UciData } from '../../models/uci.model';
import { GlobalService } from '../../services/global.service';
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
        if (this.nlBaseUrl) {
            this.globalService.setNlBaseUrl(this.nlBaseUrl);
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
        if (this.adapterId) {
            this.globalService.setAdapterId(this.adapterId);
        }
        if (this.broadcastAdapterId) {
            this.globalService.setBroadcastAdapterId(this.broadcastAdapterId);
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
    LibEntryComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: UciService },
        { type: ConfigService },
        { type: Location },
        { type: UciEventsService },
        { type: TelemetryUtilsService },
        { type: GlobalService },
        { type: Router }
    ]; };
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "user", void 0);
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "baseUrl", void 0);
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "nlBaseUrl", void 0);
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "blobUrl", void 0);
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "botPhoneNumber", void 0);
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "resourceService", void 0);
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "adapterId", void 0);
    __decorate([
        Input()
    ], LibEntryComponent.prototype, "broadcastAdapterId", void 0);
    LibEntryComponent = __decorate([
        Component({
            selector: 'lib-lib-entry',
            template: "<div class=\"ui\">\n    <div class=\"relative position\">\n        <div class=\"py-8 ua-btn-container ua-back-btn-container px-20 z-index-2\">\n           <div class=\"mx-20\">\n               <button mat-raised-button (click)=\"goBack()\">\n                   <mat-icon>keyboard_backspace</mat-icon>\n                   {{resourceService?.frmelmnts?.btn?.back || 'Back'}}\n               </button>\n           </div>\n        </div>\n    </div>\n    <div class=\"uci-admin\">\n        <div class=\"uci-admin-content\">\n            <div class=\"uci-admin-left-panel ua-side-content z-index-2\">\n                <lib-side-panel></lib-side-panel>\n            </div>\n            <div class=\"uci-admin-right-panel ua-main-content z-index-2\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}.ua-btn-container{display:flex;align-items:center;justify-content:space-between;background:#fff}.ua-btn-close{color:#000;font-weight:700;background:#ef64af}.uci-admin{width:100%;min-height:100vh;position:relative;z-index:unset}.uci-admin-content{display:grid;grid-template-columns:1fr 4fr;margin:0 1.5rem}.uci-admin-left-panel{padding:1.5rem;position:relative;z-index:2}.uci-admin-right-panel{padding:1.5rem}.ui.loader:after{border-color:#fff transparent transparent!important}@media (max-width:768px){.uci-admin{padding:0 8px;height:100vh;overflow:auto;background:#e9e8d9}.uci-admin-left-panel{padding:1rem 0}.uci-admin-right-panel{padding:0 0 48px}}.font-weight-bold{font-weight:700}.font-weight-normal{font-weight:400}.font-1-2{font-size:1.2rem}.z-index-2{z-index:2!important}@media screen and (min-width:376px) and (max-width:768px){.uci-admin-content{grid-template-columns:1fr;margin:0}}@media screen and (min-width:320px) and (max-width:375px){.uci-admin-content{grid-template-columns:repeat(auto-fill,minmax(292px,1fr));margin:0}}"]
        })
    ], LibEntryComponent);
    return LibEntryComponent;
}());
export { LibEntryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saWItZW50cnkvbGliLWVudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBTzVEO0lBVUksMkJBQ1csY0FBOEIsRUFDN0IsVUFBc0IsRUFDdEIsYUFBNEIsRUFDNUIsUUFBa0IsRUFDbEIsZ0JBQWtDLEVBQ2xDLGNBQXFDLEVBQ3JDLGFBQTRCLEVBQzVCLE1BQWM7UUFQZixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFMUIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLFlBQVksRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQ0FBSyxHQUFMLFVBQU0sS0FBSztRQUNQLElBQU0sV0FBVyxHQUFHO1lBQ2hCLE1BQU0sRUFBRSxVQUFVO1NBQ3JCLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQW5EMEIsY0FBYztnQkFDakIsVUFBVTtnQkFDUCxhQUFhO2dCQUNsQixRQUFRO2dCQUNBLGdCQUFnQjtnQkFDbEIscUJBQXFCO2dCQUN0QixhQUFhO2dCQUNwQixNQUFNOztJQWpCakI7UUFBUixLQUFLLEVBQUU7bURBQU07SUFDTDtRQUFSLEtBQUssRUFBRTtzREFBUztJQUNSO1FBQVIsS0FBSyxFQUFFO3dEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7c0RBQVM7SUFDUjtRQUFSLEtBQUssRUFBRTs2REFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs4REFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7d0RBQVc7SUFDVjtRQUFSLEtBQUssRUFBRTtpRUFBb0I7SUFSbkIsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDgxQkFBeUM7O1NBRTVDLENBQUM7T0FDVyxpQkFBaUIsQ0ErRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQS9ERCxJQStEQztTQS9EWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtVY2lFdmVudHNTZXJ2aWNlfSBmcm9tICcuLi8uLi91Y2ktZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtJZGlzY3Vzc2lvbkNvbmZpZ30gZnJvbSAnLi4vLi4vbW9kZWxzL3VjaS1jb25maWcubW9kZWwnO1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7VGVsZW1ldHJ5VXRpbHNTZXJ2aWNlfSBmcm9tICcuLi8uLi90ZWxlbWV0cnktdXRpbHMuc2VydmljZSc7XG5pbXBvcnQge1VjaURhdGF9IGZyb20gJy4uLy4uL21vZGVscy91Y2kubW9kZWwnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWxpYi1lbnRyeScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpYi1lbnRyeS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGliLWVudHJ5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGliRW50cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHVzZXI7XG4gICAgQElucHV0KCkgYmFzZVVybDtcbiAgICBASW5wdXQoKSBubEJhc2VVcmw7XG4gICAgQElucHV0KCkgYmxvYlVybDtcbiAgICBASW5wdXQoKSBib3RQaG9uZU51bWJlcjtcbiAgICBASW5wdXQoKSByZXNvdXJjZVNlcnZpY2U7XG4gICAgQElucHV0KCkgYWRhcHRlcklkO1xuICAgIEBJbnB1dCgpIGJyb2FkY2FzdEFkYXB0ZXJJZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgICAgIHByaXZhdGUgdWNpRXZlbnRzU2VydmljZTogVWNpRXZlbnRzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0ZWxlbWV0cnlVdGlsczogVGVsZW1ldHJ5VXRpbHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldFVzZXIodGhpcy51c2VyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iYXNlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uuc2V0QmFzZVVybCh0aGlzLmJhc2VVcmwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5sQmFzZVVybCkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldE5sQmFzZVVybCh0aGlzLm5sQmFzZVVybCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmxvYlVybCkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldEJsb2JVcmwodGhpcy5ibG9iVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3RQaG9uZU51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldEJvdFBob25lTnVtYmVyKHRoaXMuYm90UGhvbmVOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc291cmNlU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldFJlc291cmNlU2VydmljZSh0aGlzLnJlc291cmNlU2VydmljZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcklkKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uuc2V0QWRhcHRlcklkKHRoaXMuYWRhcHRlcklkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5icm9hZGNhc3RBZGFwdGVySWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRCcm9hZGNhc3RBZGFwdGVySWQodGhpcy5icm9hZGNhc3RBZGFwdGVySWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJvdXRlci51cmwgPT09ICcvdWNpLWFkbWluJykge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4vaG9tZSddLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZXZlbnRBY3Rpb24gPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdERl9DTE9TRSdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lFdmVudHNTZXJ2aWNlLmVtaXRUZWxlbWV0cnkoZXZlbnRBY3Rpb24pO1xuICAgICAgICB0aGlzLnRlbGVtZXRyeVV0aWxzLmxvZ0ludGVyYWN0KGV2ZW50LCBVY2lEYXRhLklQYWdlTmFtZS5MSUJfRU5UUlkpO1xuICAgIH1cbn1cbiJdfQ==
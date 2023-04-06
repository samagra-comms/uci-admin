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
let LibEntryComponent = class LibEntryComponent {
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
};
LibEntryComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: UciService },
    { type: ConfigService },
    { type: Location },
    { type: UciEventsService },
    { type: TelemetryUtilsService },
    { type: GlobalService },
    { type: Router }
];
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
export { LibEntryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWVudHJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9saWItZW50cnkvbGliLWVudHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBTzVELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBVTFCLFlBQ1csY0FBOEIsRUFDN0IsVUFBc0IsRUFDdEIsYUFBNEIsRUFDNUIsUUFBa0IsRUFDbEIsZ0JBQWtDLEVBQ2xDLGNBQXFDLEVBQ3JDLGFBQTRCLEVBQzVCLE1BQWM7UUFQZixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFMUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLFlBQVksRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNQLE1BQU0sV0FBVyxHQUFHO1lBQ2hCLE1BQU0sRUFBRSxVQUFVO1NBQ3JCLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDSixDQUFBOztZQXBEOEIsY0FBYztZQUNqQixVQUFVO1lBQ1AsYUFBYTtZQUNsQixRQUFRO1lBQ0EsZ0JBQWdCO1lBQ2xCLHFCQUFxQjtZQUN0QixhQUFhO1lBQ3BCLE1BQU07O0FBakJqQjtJQUFSLEtBQUssRUFBRTsrQ0FBTTtBQUNMO0lBQVIsS0FBSyxFQUFFO2tEQUFTO0FBQ1I7SUFBUixLQUFLLEVBQUU7b0RBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTtrREFBUztBQUNSO0lBQVIsS0FBSyxFQUFFO3lEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOzBEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTtvREFBVztBQUNWO0lBQVIsS0FBSyxFQUFFOzZEQUFvQjtBQVJuQixpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsODFCQUF5Qzs7S0FFNUMsQ0FBQztHQUNXLGlCQUFpQixDQStEN0I7U0EvRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VWNpRXZlbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vdWNpLWV2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7SWRpc2N1c3Npb25Db25maWd9IGZyb20gJy4uLy4uL21vZGVscy91Y2ktY29uZmlnLm1vZGVsJztcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge1RlbGVtZXRyeVV0aWxzU2VydmljZX0gZnJvbSAnLi4vLi4vdGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lEYXRhfSBmcm9tICcuLi8uLi9tb2RlbHMvdWNpLm1vZGVsJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1saWItZW50cnknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saWItZW50cnkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xpYi1lbnRyeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpYkVudHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB1c2VyO1xuICAgIEBJbnB1dCgpIGJhc2VVcmw7XG4gICAgQElucHV0KCkgbmxCYXNlVXJsO1xuICAgIEBJbnB1dCgpIGJsb2JVcmw7XG4gICAgQElucHV0KCkgYm90UGhvbmVOdW1iZXI7XG4gICAgQElucHV0KCkgcmVzb3VyY2VTZXJ2aWNlO1xuICAgIEBJbnB1dCgpIGFkYXB0ZXJJZDtcbiAgICBASW5wdXQoKSBicm9hZGNhc3RBZGFwdGVySWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICBwcml2YXRlIHVjaUV2ZW50c1NlcnZpY2U6IFVjaUV2ZW50c1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdGVsZW1ldHJ5VXRpbHM6IFRlbGVtZXRyeVV0aWxzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRVc2VyKHRoaXMudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmFzZVVybCkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldEJhc2VVcmwodGhpcy5iYXNlVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ubEJhc2VVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRObEJhc2VVcmwodGhpcy5ubEJhc2VVcmwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJsb2JVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRCbG9iVXJsKHRoaXMuYmxvYlVybCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm90UGhvbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRCb3RQaG9uZU51bWJlcih0aGlzLmJvdFBob25lTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXNvdXJjZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5zZXRSZXNvdXJjZVNlcnZpY2UodGhpcy5yZXNvdXJjZVNlcnZpY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnNldEFkYXB0ZXJJZCh0aGlzLmFkYXB0ZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYnJvYWRjYXN0QWRhcHRlcklkKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2Uuc2V0QnJvYWRjYXN0QWRhcHRlcklkKHRoaXMuYnJvYWRjYXN0QWRhcHRlcklkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSAnL3VjaS1hZG1pbicpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsndWNpLWFkbWluL2hvbWUnXSwgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cblxuICAgIGNsb3NlKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV2ZW50QWN0aW9uID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnREZfQ0xPU0UnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudWNpRXZlbnRzU2VydmljZS5lbWl0VGVsZW1ldHJ5KGV2ZW50QWN0aW9uKTtcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlVdGlscy5sb2dJbnRlcmFjdChldmVudCwgVWNpRGF0YS5JUGFnZU5hbWUuTElCX0VOVFJZKTtcbiAgICB9XG59XG4iXX0=
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from './components/components.module';
import { UciRoutingModule } from './uci-routing/uci-routing.module';
import { UciEventsService } from './uci-events.service';
import { ToasterService } from './services/toaster.service';
import { LibEntryComponent } from './components/lib-entry/lib-entry.component';
import { TelemetryUtilsService } from './telemetry-utils.service';
import * as i0 from "@angular/core";
export function provideCsModule() {
    return window['CsModule'];
}
var UciConsoleModule = /** @class */ (function () {
    function UciConsoleModule() {
    }
    UciConsoleModule.ɵmod = i0.ɵɵdefineNgModule({ type: UciConsoleModule });
    UciConsoleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UciConsoleModule_Factory(t) { return new (t || UciConsoleModule)(); }, providers: [UciEventsService, TelemetryUtilsService, ToasterService, { provide: 'CsModule', useFactory: provideCsModule }], imports: [[
                ComponentsModule,
                UciRoutingModule,
                MatButtonModule,
                MatIconModule
            ]] });
    return UciConsoleModule;
}());
export { UciConsoleModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UciConsoleModule, { declarations: [LibEntryComponent], imports: [ComponentsModule,
        UciRoutingModule,
        MatButtonModule,
        MatIconModule], exports: [LibEntryComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UciConsoleModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LibEntryComponent
                ],
                imports: [
                    ComponentsModule,
                    UciRoutingModule,
                    MatButtonModule,
                    MatIconModule
                ],
                exports: [
                    LibEntryComponent
                ],
                providers: [UciEventsService, TelemetryUtilsService, ToasterService, { provide: 'CsModule', useFactory: provideCsModule }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWNvbnNvbGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91Y2ktY29uc29sZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFaEUsTUFBTSxVQUFVLGVBQWU7SUFDN0IsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVEO0lBQUE7S0FlaUM7d0RBQXBCLGdCQUFnQjttSEFBaEIsZ0JBQWdCLG1CQUZoQixDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBQyxDQUFDLFlBVC9HO2dCQUNQLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGFBQWE7YUFDZDsyQkF4Qkg7Q0E4QmlDLEFBZmpDLElBZWlDO1NBQXBCLGdCQUFnQjt3RkFBaEIsZ0JBQWdCLG1CQWJ6QixpQkFBaUIsYUFHakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsYUFBYSxhQUdiLGlCQUFpQjtrREFJUixnQkFBZ0I7Y0FmNUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBQyxDQUFDO2FBQ3pIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVjaUNvbnNvbGVDb21wb25lbnQgfSBmcm9tICcuL3VjaS1jb25zb2xlLmNvbXBvbmVudCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge0NvbXBvbmVudHNNb2R1bGV9IGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZSc7XG5pbXBvcnQge1VjaVJvdXRpbmdNb2R1bGV9IGZyb20gJy4vdWNpLXJvdXRpbmcvdWNpLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7VWNpRXZlbnRzU2VydmljZX0gZnJvbSAnLi91Y2ktZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMaWJFbnRyeUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xpYi1lbnRyeS9saWItZW50cnkuY29tcG9uZW50JztcbmltcG9ydCB7VGVsZW1ldHJ5VXRpbHNTZXJ2aWNlfSBmcm9tICcuL3RlbGVtZXRyeS11dGlscy5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDc01vZHVsZSgpIHtcbiAgcmV0dXJuIHdpbmRvd1snQ3NNb2R1bGUnXTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGliRW50cnlDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbXBvbmVudHNNb2R1bGUsXG4gICAgVWNpUm91dGluZ01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTGliRW50cnlDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVWNpRXZlbnRzU2VydmljZSwgVGVsZW1ldHJ5VXRpbHNTZXJ2aWNlLCBUb2FzdGVyU2VydmljZSwge3Byb3ZpZGU6ICdDc01vZHVsZScsIHVzZUZhY3Rvcnk6IHByb3ZpZGVDc01vZHVsZX1dXG59KVxuZXhwb3J0IGNsYXNzIFVjaUNvbnNvbGVNb2R1bGUgeyB9XG4iXX0=
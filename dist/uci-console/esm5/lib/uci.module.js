import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from './components/components.module';
import { UciRoutingModule } from './uci-routing/uci-routing.module';
import { UciEventsService } from './uci-events.service';
import { ToasterService } from './services/toaster.service';
import { LibEntryComponent } from './components/lib-entry/lib-entry.component';
import { TelemetryUtilsService } from './telemetry-utils.service';
export function provideCsModule() {
    return window['CsModule'];
}
var UciModule = /** @class */ (function () {
    function UciModule() {
    }
    UciModule = __decorate([
        NgModule({
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
        })
    ], UciModule);
    return UciModule;
}());
export { UciModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvdWNpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUVoRSxNQUFNLFVBQVUsZUFBZTtJQUM3QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBaUJEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFmckIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixhQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsaUJBQWlCO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFDLENBQUM7U0FDekgsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7U0FBYixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7Q29tcG9uZW50c01vZHVsZX0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlJztcbmltcG9ydCB7VWNpUm91dGluZ01vZHVsZX0gZnJvbSAnLi91Y2ktcm91dGluZy91Y2ktcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHtVY2lFdmVudHNTZXJ2aWNlfSBmcm9tICcuL3VjaS1ldmVudHMuc2VydmljZSc7XG5pbXBvcnQge1RvYXN0ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3RvYXN0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xpYkVudHJ5Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGliLWVudHJ5L2xpYi1lbnRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHtUZWxlbWV0cnlVdGlsc1NlcnZpY2V9IGZyb20gJy4vdGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNzTW9kdWxlKCkge1xuICByZXR1cm4gd2luZG93WydDc01vZHVsZSddO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMaWJFbnRyeUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tcG9uZW50c01vZHVsZSxcbiAgICBVY2lSb3V0aW5nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMaWJFbnRyeUNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtVY2lFdmVudHNTZXJ2aWNlLCBUZWxlbWV0cnlVdGlsc1NlcnZpY2UsIFRvYXN0ZXJTZXJ2aWNlLCB7cHJvdmlkZTogJ0NzTW9kdWxlJywgdXNlRmFjdG9yeTogcHJvdmlkZUNzTW9kdWxlfV1cbn0pXG5leHBvcnQgY2xhc3MgVWNpTW9kdWxlIHsgfVxuIl19
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
let UciModule = class UciModule {
};
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
export { UciModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvdWNpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUVoRSxNQUFNLFVBQVUsZUFBZTtJQUM3QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBaUJELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBSSxDQUFBO0FBQWIsU0FBUztJQWZyQixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixhQUFhO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7U0FDbEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUMsQ0FBQztLQUN6SCxDQUFDO0dBQ1csU0FBUyxDQUFJO1NBQWIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge0NvbXBvbmVudHNNb2R1bGV9IGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZSc7XG5pbXBvcnQge1VjaVJvdXRpbmdNb2R1bGV9IGZyb20gJy4vdWNpLXJvdXRpbmcvdWNpLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7VWNpRXZlbnRzU2VydmljZX0gZnJvbSAnLi91Y2ktZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMaWJFbnRyeUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2xpYi1lbnRyeS9saWItZW50cnkuY29tcG9uZW50JztcbmltcG9ydCB7VGVsZW1ldHJ5VXRpbHNTZXJ2aWNlfSBmcm9tICcuL3RlbGVtZXRyeS11dGlscy5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDc01vZHVsZSgpIHtcbiAgcmV0dXJuIHdpbmRvd1snQ3NNb2R1bGUnXTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGliRW50cnlDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbXBvbmVudHNNb2R1bGUsXG4gICAgVWNpUm91dGluZ01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTGliRW50cnlDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVWNpRXZlbnRzU2VydmljZSwgVGVsZW1ldHJ5VXRpbHNTZXJ2aWNlLCBUb2FzdGVyU2VydmljZSwge3Byb3ZpZGU6ICdDc01vZHVsZScsIHVzZUZhY3Rvcnk6IHByb3ZpZGVDc01vZHVsZX1dXG59KVxuZXhwb3J0IGNsYXNzIFVjaU1vZHVsZSB7IH1cbiJdfQ==
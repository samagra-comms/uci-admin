import { __decorate } from "tslib";
import { LibEntryComponent } from '../components/lib-entry/lib-entry.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConversationListComponent } from '../components/conversation-list/conversation-list.component';
import { ConversationAddComponent } from '../components/conversation-add/conversation-add.component';
import { ConversationSuccessComponent } from '../components/conversation-success/conversation-success.component';
import { ExhaustReportComponent } from '../components/exhaust-report/exhaust-report.component';
const routes = [
    {
        path: '',
        component: LibEntryComponent,
        children: [
            {
                path: 'home',
                pathMatch: 'full',
                component: ConversationListComponent
            },
            {
                path: 'add',
                pathMatch: 'full',
                component: ConversationAddComponent,
            },
            {
                path: ':id/edit',
                pathMatch: 'full',
                component: ConversationAddComponent,
            },
            {
                path: 'success',
                pathMatch: 'full',
                component: ConversationSuccessComponent,
            },
            {
                path: ':id/reports',
                pathMatch: 'full',
                component: ExhaustReportComponent,
            },
        ]
    }
];
let UciRoutingModule = class UciRoutingModule {
};
UciRoutingModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(routes),
            CommonModule
        ],
        exports: [RouterModule]
    })
], UciRoutingModule);
export { UciRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91Y2ktcm91dGluZy91Y2ktcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxZQUFZLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNuRyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxtRUFBbUUsQ0FBQztBQUMvRyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUc3RixNQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsTUFBTTtnQkFDakIsU0FBUyxFQUFFLHlCQUF5QjthQUN2QztZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixTQUFTLEVBQUUsd0JBQXdCO2FBQ3RDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixTQUFTLEVBQUUsd0JBQXdCO2FBQ3RDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFNBQVMsRUFBRSw0QkFBNEI7YUFDMUM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFNBQVMsRUFBRSxzQkFBc0I7YUFDcEM7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQVVGLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQzVCLENBQUE7QUFEWSxnQkFBZ0I7SUFSNUIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFFO1lBQ0wsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0IsWUFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxnQkFBZ0IsQ0FDNUI7U0FEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpYkVudHJ5Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2xpYi1lbnRyeS9saWItZW50cnkuY29tcG9uZW50JztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlck1vZHVsZSwgUm91dGVzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb252ZXJzYXRpb25MaXN0Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1saXN0L2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnZlcnNhdGlvbkFkZENvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb252ZXJzYXRpb24tYWRkL2NvbnZlcnNhdGlvbi1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7Q29udmVyc2F0aW9uU3VjY2Vzc0NvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb252ZXJzYXRpb24tc3VjY2Vzcy9jb252ZXJzYXRpb24tc3VjY2Vzcy5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGhhdXN0UmVwb3J0Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBMaWJFbnRyeUNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb252ZXJzYXRpb25MaXN0Q29tcG9uZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdhZGQnLFxuICAgICAgICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29udmVyc2F0aW9uQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnOmlkL2VkaXQnLFxuICAgICAgICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29udmVyc2F0aW9uQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb252ZXJzYXRpb25TdWNjZXNzQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnOmlkL3JlcG9ydHMnLFxuICAgICAgICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogRXhoYXVzdFJlcG9ydENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBVY2lSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==
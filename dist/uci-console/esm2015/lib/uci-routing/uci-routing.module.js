import { LibEntryComponent } from '../components/lib-entry/lib-entry.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConversationListComponent } from '../components/conversation-list/conversation-list.component';
import { ConversationAddComponent } from '../components/conversation-add/conversation-add.component';
import { ConversationSuccessComponent } from '../components/conversation-success/conversation-success.component';
import { ExhaustReportComponent } from '../components/exhaust-report/exhaust-report.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
export class UciRoutingModule {
}
UciRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: UciRoutingModule });
UciRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UciRoutingModule_Factory(t) { return new (t || UciRoutingModule)(); }, imports: [[
            RouterModule.forChild(routes),
            CommonModule
        ],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UciRoutingModule, { imports: [i1.RouterModule, CommonModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UciRoutingModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    RouterModule.forChild(routes),
                    CommonModule
                ],
                exports: [RouterModule]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91Y2ktcm91dGluZy91Y2ktcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQ3RHLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOzs7QUFHN0YsTUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFNBQVMsRUFBRSx5QkFBeUI7YUFDdkM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsS0FBSztnQkFDWCxTQUFTLEVBQUUsTUFBTTtnQkFDakIsU0FBUyxFQUFFLHdCQUF3QjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsTUFBTTtnQkFDakIsU0FBUyxFQUFFLHdCQUF3QjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixTQUFTLEVBQUUsNEJBQTRCO2FBQzFDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixTQUFTLEVBQUUsc0JBQXNCO2FBQ3BDO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFVRixNQUFNLE9BQU8sZ0JBQWdCOztvREFBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0Isa0JBTmhCO1lBQ0wsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0IsWUFBWTtTQUNmO1FBQ1MsWUFBWTt3RkFFYixnQkFBZ0IsK0JBSnJCLFlBQVksYUFFTixZQUFZO2tEQUViLGdCQUFnQjtjQVI1QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDTCxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsWUFBWTtpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpYkVudHJ5Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2xpYi1lbnRyeS9saWItZW50cnkuY29tcG9uZW50JztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlck1vZHVsZSwgUm91dGVzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb252ZXJzYXRpb25MaXN0Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1saXN0L2NvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnZlcnNhdGlvbkFkZENvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb252ZXJzYXRpb24tYWRkL2NvbnZlcnNhdGlvbi1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7Q29udmVyc2F0aW9uU3VjY2Vzc0NvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb252ZXJzYXRpb24tc3VjY2Vzcy9jb252ZXJzYXRpb24tc3VjY2Vzcy5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGhhdXN0UmVwb3J0Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBMaWJFbnRyeUNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnaG9tZScsXG4gICAgICAgICAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb252ZXJzYXRpb25MaXN0Q29tcG9uZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdhZGQnLFxuICAgICAgICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29udmVyc2F0aW9uQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnOmlkL2VkaXQnLFxuICAgICAgICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29udmVyc2F0aW9uQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDb252ZXJzYXRpb25TdWNjZXNzQ29tcG9uZW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnOmlkL3JlcG9ydHMnLFxuICAgICAgICAgICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogRXhoYXVzdFJlcG9ydENvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBVY2lSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==
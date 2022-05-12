import { PipesModule } from '../pipes/pipes.module';
import { UciService } from '../services/uci.service';
import { ConfigService } from '../services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ConversationAddComponent } from './conversation-add/conversation-add.component';
import { UserSegmentListComponent } from './user-segment-list/user-segment-list.component';
import { UserSegmentAddComponent } from './user-segment-add/user-segment-add.component';
import { SuiModule } from 'ng2-semantic-ui-v9';
import { ConversationSuccessComponent } from './conversation-success/conversation-success.component';
import { UciGraphQlService } from '../services/uci-graph-ql.service';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { TermsConditionConfirmComponent } from './terms-condition-confirm/terms-condition-confirm.component';
import { AddLogicComponent } from './add-logic/add-logic.component';
//material-ui
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LogicListComponent } from './logic-list/logic-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { ConversationSetupComponent } from './conversation-setup/conversation-setup.component';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GlobalService } from '../services/global.service';
import { PaginatorIntl } from '../services/paginator-intl.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExhaustReportComponent } from './exhaust-report/exhaust-report.component';
import * as i0 from "@angular/core";
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ComponentsModule });
    ComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [
            GlobalService,
            UciService,
            ConfigService,
            UciGraphQlService,
            MatDatepickerModule,
            {
                provide: MatPaginatorIntl, useClass: PaginatorIntl
            }
        ], imports: [[
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                PipesModule,
                SuiModule,
                MatButtonModule,
                MatInputModule,
                MatGridListModule,
                MatCheckboxModule,
                MatDialogModule,
                MatTableModule,
                MatPaginatorModule,
                MatIconModule,
                MatMenuModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatCardModule,
                MatStepperModule,
                MatListModule,
                MatTooltipModule,
                MatSelectModule,
                MatFormFieldModule,
            ]] });
    return ComponentsModule;
}());
export { ComponentsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ComponentsModule, { declarations: [SidePanelComponent,
        ConversationListComponent,
        ConversationAddComponent,
        UserSegmentListComponent,
        UserSegmentAddComponent,
        TermsConditionsComponent,
        TermsConditionConfirmComponent,
        ConversationSuccessComponent,
        AddLogicComponent,
        LogicListComponent,
        ConversationSetupComponent,
        ExhaustReportComponent], imports: [CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule,
        SuiModule,
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatStepperModule,
        MatListModule,
        MatTooltipModule,
        MatSelectModule,
        MatFormFieldModule], exports: [SidePanelComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SidePanelComponent,
                    ConversationListComponent,
                    ConversationAddComponent,
                    UserSegmentListComponent,
                    UserSegmentAddComponent,
                    TermsConditionsComponent,
                    TermsConditionConfirmComponent,
                    ConversationSuccessComponent,
                    AddLogicComponent,
                    LogicListComponent,
                    ConversationSetupComponent,
                    ExhaustReportComponent
                ],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    PipesModule,
                    SuiModule,
                    MatButtonModule,
                    MatInputModule,
                    MatGridListModule,
                    MatCheckboxModule,
                    MatDialogModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatIconModule,
                    MatMenuModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatCardModule,
                    MatStepperModule,
                    MatListModule,
                    MatTooltipModule,
                    MatSelectModule,
                    MatFormFieldModule,
                ],
                exports: [
                    SidePanelComponent,
                ],
                providers: [
                    GlobalService,
                    UciService,
                    ConfigService,
                    UciGraphQlService,
                    MatDatepickerModule,
                    {
                        provide: MatPaginatorIntl, useClass: PaginatorIntl
                    }
                ],
                entryComponents: [
                    AddLogicComponent,
                    TermsConditionsComponent,
                    TermsConditionConfirmComponent
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzFGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUMsOEJBQThCLEVB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QkFDRCxlQUFlLEVBQUU7b0JBQ2IsaUJBQWlCO29CQUNqQix3QkFBd0I7b0JBQ3hCLDhCQUE4QjtpQkFDakM7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZXNNb2R1bGV9IGZyb20gJy4uL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTaWRlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbnZlcnNhdGlvbkxpc3RDb21wb25lbnR9IGZyb20gJy4vY29udmVyc2F0aW9uLWxpc3QvY29udmVyc2F0aW9uLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Q29udmVyc2F0aW9uQWRkQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNhdGlvbi1hZGQvY29udmVyc2F0aW9uLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyU2VnbWVudExpc3RDb21wb25lbnR9IGZyb20gJy4vdXNlci1zZWdtZW50LWxpc3QvdXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7VXNlclNlZ21lbnRBZGRDb21wb25lbnR9IGZyb20gJy4vdXNlci1zZWdtZW50LWFkZC91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudCc7XG5pbXBvcnQge1N1aU1vZHVsZX0gZnJvbSAnbmcyLXNlbWFudGljLXVpLXY5JztcbmltcG9ydCB7Q29udmVyc2F0aW9uU3VjY2Vzc0NvbXBvbmVudH0gZnJvbSAnLi9jb252ZXJzYXRpb24tc3VjY2Vzcy9jb252ZXJzYXRpb24tc3VjY2Vzcy5jb21wb25lbnQnO1xuaW1wb3J0IHtVY2lHcmFwaFFsU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdWNpLWdyYXBoLXFsLnNlcnZpY2UnO1xuaW1wb3J0IHtUZXJtc0NvbmRpdGlvbnNDb21wb25lbnR9IGZyb20gJy4vdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rlcm1zQ29uZGl0aW9uQ29uZmlybUNvbXBvbmVudH0gZnJvbSAnLi90ZXJtcy1jb25kaXRpb24tY29uZmlybS90ZXJtcy1jb25kaXRpb24tY29uZmlybS5jb21wb25lbnQnO1xuaW1wb3J0IHtBZGRMb2dpY0NvbXBvbmVudH0gZnJvbSAnLi9hZGQtbG9naWMvYWRkLWxvZ2ljLmNvbXBvbmVudCc7XG4vL21hdGVyaWFsLXVpXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0R3JpZExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bCwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXROYXRpdmVEYXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TG9naWNMaXN0Q29tcG9uZW50fSBmcm9tICcuL2xvZ2ljLWxpc3QvbG9naWMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge0NvbnZlcnNhdGlvblNldHVwQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNhdGlvbi1zZXR1cC9jb252ZXJzYXRpb24tc2V0dXAuY29tcG9uZW50JztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge1BhZ2luYXRvckludGx9IGZyb20gJy4uL3NlcnZpY2VzL3BhZ2luYXRvci1pbnRsLnNlcnZpY2UnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge0V4aGF1c3RSZXBvcnRDb21wb25lbnR9IGZyb20gJy4vZXhoYXVzdC1yZXBvcnQvZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgICAgICBDb252ZXJzYXRpb25MaXN0Q29tcG9uZW50LFxuICAgICAgICBDb252ZXJzYXRpb25BZGRDb21wb25lbnQsXG4gICAgICAgIFVzZXJTZWdtZW50TGlzdENvbXBvbmVudCxcbiAgICAgICAgVXNlclNlZ21lbnRBZGRDb21wb25lbnQsXG4gICAgICAgIFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgVGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50LFxuICAgICAgICBDb252ZXJzYXRpb25TdWNjZXNzQ29tcG9uZW50LFxuICAgICAgICBBZGRMb2dpY0NvbXBvbmVudCxcbiAgICAgICAgTG9naWNMaXN0Q29tcG9uZW50LFxuICAgICAgICBDb252ZXJzYXRpb25TZXR1cENvbXBvbmVudCxcbiAgICAgICAgRXhoYXVzdFJlcG9ydENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBQaXBlc01vZHVsZSxcbiAgICAgICAgU3VpTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFNpZGVQYW5lbENvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBVY2lTZXJ2aWNlLFxuICAgICAgICBDb25maWdTZXJ2aWNlLFxuICAgICAgICBVY2lHcmFwaFFsU2VydmljZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTWF0UGFnaW5hdG9ySW50bCwgdXNlQ2xhc3M6IFBhZ2luYXRvckludGxcbiAgICAgICAgfVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEFkZExvZ2ljQ29tcG9uZW50LFxuICAgICAgICBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQsXG4gICAgICAgIFRlcm1zQ29uZGl0aW9uQ29uZmlybUNvbXBvbmVudFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge1xufVxuIl19
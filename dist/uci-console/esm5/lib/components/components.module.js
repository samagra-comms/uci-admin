import { __decorate } from "tslib";
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
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
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
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbkcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLDhCQUE4QixF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Q2pCLHdCQUF3QjtnQkFDeEIsOEJBQThCO2FBQ2pDO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlc01vZHVsZX0gZnJvbSAnLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1NpZGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29udmVyc2F0aW9uTGlzdENvbXBvbmVudH0gZnJvbSAnLi9jb252ZXJzYXRpb24tbGlzdC9jb252ZXJzYXRpb24tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb252ZXJzYXRpb25BZGRDb21wb25lbnR9IGZyb20gJy4vY29udmVyc2F0aW9uLWFkZC9jb252ZXJzYXRpb24tYWRkLmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJTZWdtZW50TGlzdENvbXBvbmVudH0gZnJvbSAnLi91c2VyLXNlZ21lbnQtbGlzdC91c2VyLXNlZ21lbnQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2VyU2VnbWVudEFkZENvbXBvbmVudH0gZnJvbSAnLi91c2VyLXNlZ21lbnQtYWRkL3VzZXItc2VnbWVudC1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7U3VpTW9kdWxlfSBmcm9tICduZzItc2VtYW50aWMtdWktdjknO1xuaW1wb3J0IHtDb252ZXJzYXRpb25TdWNjZXNzQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNhdGlvbi1zdWNjZXNzL2NvbnZlcnNhdGlvbi1zdWNjZXNzLmNvbXBvbmVudCc7XG5pbXBvcnQge1VjaUdyYXBoUWxTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy91Y2ktZ3JhcGgtcWwuc2VydmljZSc7XG5pbXBvcnQge1Rlcm1zQ29uZGl0aW9uc0NvbXBvbmVudH0gZnJvbSAnLi90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7VGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50fSBmcm9tICcuL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudCc7XG5pbXBvcnQge0FkZExvZ2ljQ29tcG9uZW50fSBmcm9tICcuL2FkZC1sb2dpYy9hZGQtbG9naWMuY29tcG9uZW50Jztcbi8vbWF0ZXJpYWwtdWlcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRHcmlkTGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JJbnRsLCBNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtMb2dpY0xpc3RDb21wb25lbnR9IGZyb20gJy4vbG9naWMtbGlzdC9sb2dpYy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcbmltcG9ydCB7Q29udmVyc2F0aW9uU2V0dXBDb21wb25lbnR9IGZyb20gJy4vY29udmVyc2F0aW9uLXNldHVwL2NvbnZlcnNhdGlvbi1zZXR1cC5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7UGFnaW5hdG9ySW50bH0gZnJvbSAnLi4vc2VydmljZXMvcGFnaW5hdG9yLWludGwuc2VydmljZSc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7RXhoYXVzdFJlcG9ydENvbXBvbmVudH0gZnJvbSAnLi9leGhhdXN0LXJlcG9ydC9leGhhdXN0LXJlcG9ydC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgICAgIENvbnZlcnNhdGlvbkxpc3RDb21wb25lbnQsXG4gICAgICAgIENvbnZlcnNhdGlvbkFkZENvbXBvbmVudCxcbiAgICAgICAgVXNlclNlZ21lbnRMaXN0Q29tcG9uZW50LFxuICAgICAgICBVc2VyU2VnbWVudEFkZENvbXBvbmVudCxcbiAgICAgICAgVGVybXNDb25kaXRpb25zQ29tcG9uZW50LFxuICAgICAgICBUZXJtc0NvbmRpdGlvbkNvbmZpcm1Db21wb25lbnQsXG4gICAgICAgIENvbnZlcnNhdGlvblN1Y2Nlc3NDb21wb25lbnQsXG4gICAgICAgIEFkZExvZ2ljQ29tcG9uZW50LFxuICAgICAgICBMb2dpY0xpc3RDb21wb25lbnQsXG4gICAgICAgIENvbnZlcnNhdGlvblNldHVwQ29tcG9uZW50LFxuICAgICAgICBFeGhhdXN0UmVwb3J0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlLFxuICAgICAgICBTdWlNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgICAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRNZW51TW9kdWxlLFxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgICAgICBNYXRMaXN0TW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIFVjaVNlcnZpY2UsXG4gICAgICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgICAgIFVjaUdyYXBoUWxTZXJ2aWNlLFxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBNYXRQYWdpbmF0b3JJbnRsLCB1c2VDbGFzczogUGFnaW5hdG9ySW50bFxuICAgICAgICB9XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgQWRkTG9naWNDb21wb25lbnQsXG4gICAgICAgIFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgVGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50XG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7XG59XG4iXX0=
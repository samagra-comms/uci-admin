import {PipesModule} from '../pipes/pipes.module';
import {UciService} from '../services/uci.service';
import {ConfigService} from '../services/config.service';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidePanelComponent} from './side-panel/side-panel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConversationListComponent} from './conversation-list/conversation-list.component';
import {ConversationAddComponent} from './conversation-add/conversation-add.component';
import {UserSegmentListComponent} from './user-segment-list/user-segment-list.component';
import {UserSegmentAddComponent} from './user-segment-add/user-segment-add.component';
import {SuiModule} from 'ng2-semantic-ui-v9';
import {ConversationSuccessComponent} from './conversation-success/conversation-success.component';
import {UciGraphQlService} from '../services/uci-graph-ql.service';
import {TermsConditionsComponent} from './terms-conditions/terms-conditions.component';
import {TermsConditionConfirmComponent} from './terms-condition-confirm/terms-condition-confirm.component';
import {AddLogicComponent} from './add-logic/add-logic.component';
//material-ui
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {LogicListComponent} from './logic-list/logic-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {ConversationSetupComponent} from './conversation-setup/conversation-setup.component';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {GlobalService} from '../services/global.service';
import {PaginatorIntl} from '../services/paginator-intl.service';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ExhaustReportComponent} from './exhaust-report/exhaust-report.component';

@NgModule({
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
export class ComponentsModule {
}

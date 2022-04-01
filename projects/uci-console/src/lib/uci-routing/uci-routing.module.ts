import {LibEntryComponent} from '../components/lib-entry/lib-entry.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConversationListComponent} from '../components/conversation-list/conversation-list.component';
import {ConversationAddComponent} from '../components/conversation-add/conversation-add.component';
import {ConversationSuccessComponent} from '../components/conversation-success/conversation-success.component';
import {ExhaustReportComponent} from '../components/exhaust-report/exhaust-report.component';


const routes: Routes = [
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

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class UciRoutingModule {
}

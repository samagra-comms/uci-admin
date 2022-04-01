import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UciAdminComponent} from './uci-admin.component';


const routes: Routes = [
  {path: '', component: UciAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UciAdminRoutingModule {
}

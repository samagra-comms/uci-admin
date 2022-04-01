import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'uci-admin',
    // loadChildren: './uci-admin/uci-admin.module#UciAdminModule'
    loadChildren: () => import('./uci-admin/uci-admin.module').then(m => m.UciAdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

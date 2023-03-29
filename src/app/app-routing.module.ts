import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guards/auth-guard.service';
import {MainComponent} from './main/main.component';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'uci-admin'
  },
  {
    path: 'uci-admin',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./uci-admin/uci-admin.module').then(m => m.UciAdminModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.loginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UciAdminRoutingModule } from './uci-admin-routing.module';
import {UciAdminComponent} from './uci-admin.component';
import {UciModule} from '../../../projects/uci-console/src/lib/uci.module';


@NgModule({
  declarations: [
    UciAdminComponent
  ],
  imports: [
    CommonModule,
    UciAdminRoutingModule,
    UciModule
  ]
})
export class UciAdminModule { }

import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ComponentsModule} from './components/components.module';
import {UciRoutingModule} from './uci-routing/uci-routing.module';
import {UciEventsService} from './uci-events.service';
import {ToasterService} from './services/toaster.service';
import {LibEntryComponent} from './components/lib-entry/lib-entry.component';
import {TelemetryUtilsService} from './telemetry-utils.service';

export function provideCsModule() {
  return window['CsModule'];
}

@NgModule({
  declarations: [
    LibEntryComponent
  ],
  imports: [
    ComponentsModule,
    UciRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LibEntryComponent
  ],
  providers: [UciEventsService, TelemetryUtilsService, ToasterService, {provide: 'CsModule', useFactory: provideCsModule}]
})
export class UciModule { }

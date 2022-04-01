import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {UciModule} from '../../projects/uci-console/src/lib/uci.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    UciModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

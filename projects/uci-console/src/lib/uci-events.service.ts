import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
/* tslint:disable */
import * as _ from 'lodash'
/* tslint:enable */
@Injectable({
  providedIn: 'root'
})
export class UciEventsService {

  public telemetryEvent = new Subject<any>();
  public actionEvent = new EventEmitter<any>();

  constructor() { }

  emitTelemetry(event) {
    // console.log('Lib Event', event);
    if (!_.isEmpty(event)) {
      this.telemetryEvent.next(event);
    }
  }
}

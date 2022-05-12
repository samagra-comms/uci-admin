import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
/* tslint:disable */
import * as _ from 'lodash';
import * as i0 from "@angular/core";
/* tslint:enable */
export class UciEventsService {
    constructor() {
        this.telemetryEvent = new Subject();
        this.actionEvent = new EventEmitter();
    }
    emitTelemetry(event) {
        // console.log('Lib Event', event);
        if (!_.isEmpty(event)) {
            this.telemetryEvent.next(event);
        }
    }
}
UciEventsService.ɵfac = function UciEventsService_Factory(t) { return new (t || UciEventsService)(); };
UciEventsService.ɵprov = i0.ɵɵdefineInjectable({ token: UciEventsService, factory: UciEventsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UciEventsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91Y2ktZXZlbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixvQkFBb0I7QUFDcEIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7O0FBQzNCLG1CQUFtQjtBQUluQixNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCO1FBSE8sbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUU3QixDQUFDO0lBRWpCLGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7O2dGQVpVLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGZixNQUFNO2tEQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbi8qIHRzbGludDplbmFibGUgKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVjaUV2ZW50c1NlcnZpY2Uge1xuXG4gIHB1YmxpYyB0ZWxlbWV0cnlFdmVudCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIGFjdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBlbWl0VGVsZW1ldHJ5KGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0xpYiBFdmVudCcsIGV2ZW50KTtcbiAgICBpZiAoIV8uaXNFbXB0eShldmVudCkpIHtcbiAgICAgIHRoaXMudGVsZW1ldHJ5RXZlbnQubmV4dChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
/* tslint:disable */
import * as _ from 'lodash';
import * as i0 from "@angular/core";
/* tslint:enable */
var UciEventsService = /** @class */ (function () {
    function UciEventsService() {
        this.telemetryEvent = new Subject();
        this.actionEvent = new EventEmitter();
    }
    UciEventsService.prototype.emitTelemetry = function (event) {
        // console.log('Lib Event', event);
        if (!_.isEmpty(event)) {
            this.telemetryEvent.next(event);
        }
    };
    UciEventsService.ɵfac = function UciEventsService_Factory(t) { return new (t || UciEventsService)(); };
    UciEventsService.ɵprov = i0.ɵɵdefineInjectable({ token: UciEventsService, factory: UciEventsService.ɵfac, providedIn: 'root' });
    return UciEventsService;
}());
export { UciEventsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UciEventsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91Y2ktZXZlbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixvQkFBb0I7QUFDcEIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7O0FBQzNCLG1CQUFtQjtBQUNuQjtJQVFFO1FBSE8sbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUU3QixDQUFDO0lBRWpCLHdDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7b0ZBWlUsZ0JBQWdCOzREQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07MkJBTnBCO0NBcUJDLEFBaEJELElBZ0JDO1NBYlksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVY2lFdmVudHNTZXJ2aWNlIHtcblxuICBwdWJsaWMgdGVsZW1ldHJ5RXZlbnQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHB1YmxpYyBhY3Rpb25FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZW1pdFRlbGVtZXRyeShldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdMaWIgRXZlbnQnLCBldmVudCk7XG4gICAgaWYgKCFfLmlzRW1wdHkoZXZlbnQpKSB7XG4gICAgICB0aGlzLnRlbGVtZXRyeUV2ZW50Lm5leHQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19
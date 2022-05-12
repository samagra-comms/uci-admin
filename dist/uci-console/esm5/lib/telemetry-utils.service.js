import { Injectable } from '@angular/core';
/* tslint:disable */
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "./uci-events.service";
import * as i2 from "@angular/router";
var TelemetryUtilsService = /** @class */ (function () {
    function TelemetryUtilsService(discussionEvents, router) {
        this.discussionEvents = discussionEvents;
        this.router = router;
        this._context = [];
        this.currentObj = {};
    }
    TelemetryUtilsService.prototype.setContext = function (context) {
        this._context = context;
        this.currentObj = _.last(context);
    };
    TelemetryUtilsService.prototype.uppendContext = function (data) {
        var matchedC = _.find(this._context, { id: data.id });
        if (!_.isEmpty(data) && !_.isEqual(data, matchedC)) {
            this._context.push(data);
        }
        this.currentObj = _.last(this._context);
    };
    TelemetryUtilsService.prototype.deleteContext = function (prevTopic) {
        var topic = _.find(this._context, prevTopic);
        if (topic) {
            this._context = _.reject(this._context, topic);
        }
    };
    TelemetryUtilsService.prototype.getContext = function () {
        return this._context;
    };
    TelemetryUtilsService.prototype.logImpression = function (pageId) {
        this.discussionEvents.emitTelemetry({});
        var impressionEvent = {
            eid: 'IMPRESSION',
            edata: {
                type: 'view',
                pageid: pageId,
                uri: this.router.url
            }
        };
        if (this.currentObj) {
            impressionEvent.context = { cdata: [{
                        id: _.get(this.currentObj, 'id').toString(),
                        type: _.get(this.currentObj, 'type')
                    }
                ] };
        }
        this.discussionEvents.emitTelemetry(impressionEvent);
    };
    TelemetryUtilsService.prototype.logInteract = function (event, pageId) {
        var target = _.get(event, 'currentTarget.attributes.id') || _.get(event, 'target.attributes.id') ||
            _.get(event, 'srcElement.attributes.id');
        var interactEvent = {
            eid: 'INTERACT',
            edata: {
                id: _.get(target, 'value') || _.get(event, 'action'),
                type: 'CLICK',
                pageid: pageId
            }
        };
        if (this.currentObj) {
            var object = {
                id: _.get(this.currentObj, 'id').toString(),
                type: _.get(this.currentObj, 'type'),
                ver: '1'
            };
            object['rollup'] = this._context.length > 1 ? this.getRollUp() : {};
            interactEvent.context = {
                cdata: [{
                        id: _.get(this.currentObj, 'id').toString(),
                        type: _.get(this.currentObj, 'type')
                    }], object: object
            };
        }
        this.discussionEvents.emitTelemetry(interactEvent);
    };
    TelemetryUtilsService.prototype.getRollUp = function () {
        var rollUp = {};
        var data = _.reject(this._context, this.currentObj);
        if (this._context.length > 1) {
            data.forEach(function (element, index) {
                // console.log('rollup', element);
                rollUp['l' + (index + 1)] = element.toString();
            });
        }
        if (_.get(this.currentObj, 'type') !== 'Post') {
            return rollUp;
        }
        return {};
    };
    TelemetryUtilsService.ɵfac = function TelemetryUtilsService_Factory(t) { return new (t || TelemetryUtilsService)(i0.ɵɵinject(i1.UciEventsService), i0.ɵɵinject(i2.Router)); };
    TelemetryUtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: TelemetryUtilsService, factory: TelemetryUtilsService.ɵfac, providedIn: 'root' });
    return TelemetryUtilsService;
}());
export { TelemetryUtilsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TelemetryUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UciEventsService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3RlbGVtZXRyeS11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0Msb0JBQW9CO0FBQ3BCLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7O0FBUTNCO0lBUUUsK0JBQ1UsZ0JBQWtDLEVBQ2xDLE1BQWM7UUFEZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMeEIsYUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNiLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFLWixDQUFDO0lBRUwsMENBQVUsR0FBVixVQUFXLE9BQU87UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7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QU0sQ0FBQztxQkFDckMsQ0FBQyxFQUFFLE1BQU0sUUFBQTthQUNYLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFFSSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7Z0JBQzFCLGtDQUFrQztnQkFDbEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQzdDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUVkLENBQUM7OEZBckdVLHFCQUFxQjtpRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGcEIsTUFBTTtnQ0FkcEI7Q0F1SEMsQUExR0QsSUEwR0M7U0F2R1kscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBVY2lFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi91Y2ktZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbi8qIHRzbGludDplbmFibGUgKi9cbmludGVyZmFjZSBJVGVsZW1ldHJ5T2JqIHtcbiAgZWlkOiBzdHJpbmcsXG4gIGVkYXRhOiB7fSxcbiAgY29udGV4dD86IHt9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlbGVtZXRyeVV0aWxzU2VydmljZSB7XG5cbiAgX2NvbnRleHQgPSBbXVxuICBjdXJyZW50T2JqID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNjdXNzaW9uRXZlbnRzOiBVY2lFdmVudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBzZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmN1cnJlbnRPYmogPSBfLmxhc3QoY29udGV4dCk7XG4gIH1cblxuICB1cHBlbmRDb250ZXh0KGRhdGEpIHtcbiAgICBjb25zdCBtYXRjaGVkQyA9IF8uZmluZCh0aGlzLl9jb250ZXh0LCB7IGlkOiBkYXRhLmlkIH0pO1xuICAgIGlmICghXy5pc0VtcHR5KGRhdGEpICYmICFfLmlzRXF1YWwoZGF0YSwgbWF0Y2hlZEMpKSB7XG4gICAgICB0aGlzLl9jb250ZXh0LnB1c2goZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudE9iaiA9IF8ubGFzdCh0aGlzLl9jb250ZXh0KTtcbiAgfVxuXG4gIGRlbGV0ZUNvbnRleHQocHJldlRvcGljKSB7XG4gICAgY29uc3QgdG9waWMgPSBfLmZpbmQodGhpcy5fY29udGV4dCwgcHJldlRvcGljKTtcbiAgICBpZiAodG9waWMpIHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSBfLnJlamVjdCh0aGlzLl9jb250ZXh0LCB0b3BpYyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIGxvZ0ltcHJlc3Npb24ocGFnZUlkKSB7XG4gICAgdGhpcy5kaXNjdXNzaW9uRXZlbnRzLmVtaXRUZWxlbWV0cnkoe30pO1xuICAgIGNvbnN0IGltcHJlc3Npb25FdmVudDogSVRlbGVtZXRyeU9iaiA9IHtcbiAgICAgIGVpZDogJ0lNUFJFU1NJT04nLFxuICAgICAgZWRhdGE6IHtcbiAgICAgICAgdHlwZTogJ3ZpZXcnLFxuICAgICAgICBwYWdlaWQ6IHBhZ2VJZCxcbiAgICAgICAgdXJpOiB0aGlzLnJvdXRlci51cmxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudE9iaikge1xuICAgICAgaW1wcmVzc2lvbkV2ZW50LmNvbnRleHQgPSB7IGNkYXRhOiBbe1xuICAgICAgICBpZDogXy5nZXQodGhpcy5jdXJyZW50T2JqLCAnaWQnKS50b1N0cmluZygpLFxuICAgICAgICB0eXBlOiBfLmdldCh0aGlzLmN1cnJlbnRPYmosICd0eXBlJykgfVxuICAgICAgXX07XG4gICAgfVxuICAgIHRoaXMuZGlzY3Vzc2lvbkV2ZW50cy5lbWl0VGVsZW1ldHJ5KGltcHJlc3Npb25FdmVudCk7XG4gIH1cblxuICBsb2dJbnRlcmFjdChldmVudCwgcGFnZUlkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gXy5nZXQoZXZlbnQsICdjdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuaWQnKSB8fCAgXy5nZXQoZXZlbnQsICd0YXJnZXQuYXR0cmlidXRlcy5pZCcpIHx8XG4gICAgIF8uZ2V0KGV2ZW50LCAnc3JjRWxlbWVudC5hdHRyaWJ1dGVzLmlkJyk7XG4gICAgY29uc3QgaW50ZXJhY3RFdmVudDogSVRlbGVtZXRyeU9iaiA9IHtcbiAgICAgIGVpZDogJ0lOVEVSQUNUJyxcbiAgICAgIGVkYXRhOiB7XG4gICAgICAgIGlkOiBfLmdldCh0YXJnZXQsICd2YWx1ZScpIHx8IF8uZ2V0KGV2ZW50LCAnYWN0aW9uJyksXG4gICAgICAgIHR5cGU6ICdDTElDSycsXG4gICAgICAgIHBhZ2VpZDogcGFnZUlkXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRPYmopIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IHtcbiAgICAgICAgaWQ6IF8uZ2V0KHRoaXMuY3VycmVudE9iaiwgJ2lkJykudG9TdHJpbmcoKSxcbiAgICAgICAgdHlwZTogXy5nZXQodGhpcy5jdXJyZW50T2JqLCAndHlwZScpLFxuICAgICAgICB2ZXI6ICcxJ1xuICAgICAgfTtcbiAgICAgIG9iamVjdFsncm9sbHVwJ10gPSB0aGlzLl9jb250ZXh0Lmxlbmd0aCA+IDEgPyAgdGhpcy5nZXRSb2xsVXAoKSA6IHt9O1xuICAgICAgaW50ZXJhY3RFdmVudC5jb250ZXh0ID0ge1xuICAgICAgICBjZGF0YTogW3tcbiAgICAgICAgICBpZDogXy5nZXQodGhpcy5jdXJyZW50T2JqLCAnaWQnKS50b1N0cmluZygpLFxuICAgICAgICAgIHR5cGU6IF8uZ2V0KHRoaXMuY3VycmVudE9iaiwgJ3R5cGUnKVxuICAgICAgICB9XSwgb2JqZWN0XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZGlzY3Vzc2lvbkV2ZW50cy5lbWl0VGVsZW1ldHJ5KGludGVyYWN0RXZlbnQpO1xuICB9XG5cbiAgZ2V0Um9sbFVwKCkge1xuXG4gICAgICBjb25zdCByb2xsVXAgPSB7fTtcbiAgICAgIGNvbnN0IGRhdGEgPSBfLnJlamVjdCh0aGlzLl9jb250ZXh0LCB0aGlzLmN1cnJlbnRPYmopO1xuXG4gICAgICBpZiAodGhpcy5fY29udGV4dC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncm9sbHVwJywgZWxlbWVudCk7XG4gICAgICAgICAgcm9sbFVwWydsJyArIChpbmRleCArIDEpXSA9IGVsZW1lbnQudG9TdHJpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfLmdldCh0aGlzLmN1cnJlbnRPYmosICd0eXBlJykgIT09ICdQb3N0Jykge1xuICAgICAgICByZXR1cm4gcm9sbFVwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG5cbiAgfVxuXG59XG4iXX0=
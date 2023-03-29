import { __decorate } from "tslib";
import { UciEventsService } from './uci-events.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    TelemetryUtilsService.ctorParameters = function () { return [
        { type: UciEventsService },
        { type: Router }
    ]; };
    TelemetryUtilsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TelemetryUtilsService_Factory() { return new TelemetryUtilsService(i0.ɵɵinject(i1.UciEventsService), i0.ɵɵinject(i2.Router)); }, token: TelemetryUtilsService, providedIn: "root" });
    TelemetryUtilsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], TelemetryUtilsService);
    return TelemetryUtilsService;
}());
export { TelemetryUtilsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3RlbGVtZXRyeS11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxvQkFBb0I7QUFDcEIsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7QUFXM0I7SUFLRSwrQkFDVSxnQkFBa0MsRUFDbEMsTUFBYztRQURkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUx4QixhQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2IsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQUtaLENBQUM7SUFFTCwwQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDZDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElB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bnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbi8qIHRzbGludDplbmFibGUgKi9cbmludGVyZmFjZSBJVGVsZW1ldHJ5T2JqIHtcbiAgZWlkOiBzdHJpbmcsXG4gIGVkYXRhOiB7fSxcbiAgY29udGV4dD86IHt9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRlbGVtZXRyeVV0aWxzU2VydmljZSB7XG5cbiAgX2NvbnRleHQgPSBbXVxuICBjdXJyZW50T2JqID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXNjdXNzaW9uRXZlbnRzOiBVY2lFdmVudHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBzZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmN1cnJlbnRPYmogPSBfLmxhc3QoY29udGV4dCk7XG4gIH1cblxuICB1cHBlbmRDb250ZXh0KGRhdGEpIHtcbiAgICBjb25zdCBtYXRjaGVkQyA9IF8uZmluZCh0aGlzLl9jb250ZXh0LCB7IGlkOiBkYXRhLmlkIH0pO1xuICAgIGlmICghXy5pc0VtcHR5KGRhdGEpICYmICFfLmlzRXF1YWwoZGF0YSwgbWF0Y2hlZEMpKSB7XG4gICAgICB0aGlzLl9jb250ZXh0LnB1c2goZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudE9iaiA9IF8ubGFzdCh0aGlzLl9jb250ZXh0KTtcbiAgfVxuXG4gIGRlbGV0ZUNvbnRleHQocHJldlRvcGljKSB7XG4gICAgY29uc3QgdG9waWMgPSBfLmZpbmQodGhpcy5fY29udGV4dCwgcHJldlRvcGljKTtcbiAgICBpZiAodG9waWMpIHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSBfLnJlamVjdCh0aGlzLl9jb250ZXh0LCB0b3BpYyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgfVxuXG4gIGxvZ0ltcHJlc3Npb24ocGFnZUlkKSB7XG4gICAgdGhpcy5kaXNjdXNzaW9uRXZlbnRzLmVtaXRUZWxlbWV0cnkoe30pO1xuICAgIGNvbnN0IGltcHJlc3Npb25FdmVudDogSVRlbGVtZXRyeU9iaiA9IHtcbiAgICAgIGVpZDogJ0lNUFJFU1NJT04nLFxuICAgICAgZWRhdGE6IHtcbiAgICAgICAgdHlwZTogJ3ZpZXcnLFxuICAgICAgICBwYWdlaWQ6IHBhZ2VJZCxcbiAgICAgICAgdXJpOiB0aGlzLnJvdXRlci51cmxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudE9iaikge1xuICAgICAgaW1wcmVzc2lvbkV2ZW50LmNvbnRleHQgPSB7IGNkYXRhOiBbe1xuICAgICAgICBpZDogXy5nZXQodGhpcy5jdXJyZW50T2JqLCAnaWQnKS50b1N0cmluZygpLFxuICAgICAgICB0eXBlOiBfLmdldCh0aGlzLmN1cnJlbnRPYmosICd0eXBlJykgfVxuICAgICAgXX07XG4gICAgfVxuICAgIHRoaXMuZGlzY3Vzc2lvbkV2ZW50cy5lbWl0VGVsZW1ldHJ5KGltcHJlc3Npb25FdmVudCk7XG4gIH1cblxuICBsb2dJbnRlcmFjdChldmVudCwgcGFnZUlkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gXy5nZXQoZXZlbnQsICdjdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuaWQnKSB8fCAgXy5nZXQoZXZlbnQsICd0YXJnZXQuYXR0cmlidXRlcy5pZCcpIHx8XG4gICAgIF8uZ2V0KGV2ZW50LCAnc3JjRWxlbWVudC5hdHRyaWJ1dGVzLmlkJyk7XG4gICAgY29uc3QgaW50ZXJhY3RFdmVudDogSVRlbGVtZXRyeU9iaiA9IHtcbiAgICAgIGVpZDogJ0lOVEVSQUNUJyxcbiAgICAgIGVkYXRhOiB7XG4gICAgICAgIGlkOiBfLmdldCh0YXJnZXQsICd2YWx1ZScpIHx8IF8uZ2V0KGV2ZW50LCAnYWN0aW9uJyksXG4gICAgICAgIHR5cGU6ICdDTElDSycsXG4gICAgICAgIHBhZ2VpZDogcGFnZUlkXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRPYmopIHtcbiAgICAgIGNvbnN0IG9iamVjdCA9IHtcbiAgICAgICAgaWQ6IF8uZ2V0KHRoaXMuY3VycmVudE9iaiwgJ2lkJykudG9TdHJpbmcoKSxcbiAgICAgICAgdHlwZTogXy5nZXQodGhpcy5jdXJyZW50T2JqLCAndHlwZScpLFxuICAgICAgICB2ZXI6ICcxJ1xuICAgICAgfTtcbiAgICAgIG9iamVjdFsncm9sbHVwJ10gPSB0aGlzLl9jb250ZXh0Lmxlbmd0aCA+IDEgPyAgdGhpcy5nZXRSb2xsVXAoKSA6IHt9O1xuICAgICAgaW50ZXJhY3RFdmVudC5jb250ZXh0ID0ge1xuICAgICAgICBjZGF0YTogW3tcbiAgICAgICAgICBpZDogXy5nZXQodGhpcy5jdXJyZW50T2JqLCAnaWQnKS50b1N0cmluZygpLFxuICAgICAgICAgIHR5cGU6IF8uZ2V0KHRoaXMuY3VycmVudE9iaiwgJ3R5cGUnKVxuICAgICAgICB9XSwgb2JqZWN0XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuZGlzY3Vzc2lvbkV2ZW50cy5lbWl0VGVsZW1ldHJ5KGludGVyYWN0RXZlbnQpO1xuICB9XG5cbiAgZ2V0Um9sbFVwKCkge1xuXG4gICAgICBjb25zdCByb2xsVXAgPSB7fTtcbiAgICAgIGNvbnN0IGRhdGEgPSBfLnJlamVjdCh0aGlzLl9jb250ZXh0LCB0aGlzLmN1cnJlbnRPYmopO1xuXG4gICAgICBpZiAodGhpcy5fY29udGV4dC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncm9sbHVwJywgZWxlbWVudCk7XG4gICAgICAgICAgcm9sbFVwWydsJyArIChpbmRleCArIDEpXSA9IGVsZW1lbnQudG9TdHJpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfLmdldCh0aGlzLmN1cnJlbnRPYmosICd0eXBlJykgIT09ICdQb3N0Jykge1xuICAgICAgICByZXR1cm4gcm9sbFVwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG5cbiAgfVxuXG59XG4iXX0=
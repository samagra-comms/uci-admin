import { UciEventsService } from './uci-events.service';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export declare class TelemetryUtilsService {
    private discussionEvents;
    private router;
    _context: any[];
    currentObj: {};
    constructor(discussionEvents: UciEventsService, router: Router);
    setContext(context: any): void;
    uppendContext(data: any): void;
    deleteContext(prevTopic: any): void;
    getContext(): any[];
    logImpression(pageId: any): void;
    logInteract(event: any, pageId: any): void;
    getRollUp(): {};
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TelemetryUtilsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidGVsZW1ldHJ5LXV0aWxzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWNpRXZlbnRzU2VydmljZSB9IGZyb20gJy4vdWNpLWV2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUZWxlbWV0cnlVdGlsc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgZGlzY3Vzc2lvbkV2ZW50cztcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICBfY29udGV4dDogYW55W107XG4gICAgY3VycmVudE9iajoge307XG4gICAgY29uc3RydWN0b3IoZGlzY3Vzc2lvbkV2ZW50czogVWNpRXZlbnRzU2VydmljZSwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIHNldENvbnRleHQoY29udGV4dDogYW55KTogdm9pZDtcbiAgICB1cHBlbmRDb250ZXh0KGRhdGE6IGFueSk6IHZvaWQ7XG4gICAgZGVsZXRlQ29udGV4dChwcmV2VG9waWM6IGFueSk6IHZvaWQ7XG4gICAgZ2V0Q29udGV4dCgpOiBhbnlbXTtcbiAgICBsb2dJbXByZXNzaW9uKHBhZ2VJZDogYW55KTogdm9pZDtcbiAgICBsb2dJbnRlcmFjdChldmVudDogYW55LCBwYWdlSWQ6IGFueSk6IHZvaWQ7XG4gICAgZ2V0Um9sbFVwKCk6IHt9O1xufVxuIl19
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import * as ɵngcc0 from '@angular/core';
export declare class ConversationSuccessComponent implements OnInit {
    private router;
    private activatedRoute;
    private globalService;
    url: string;
    botId: string;
    resourceService: any;
    constructor(router: Router, activatedRoute: ActivatedRoute, globalService: GlobalService);
    ngOnInit(): void;
    onCopy(id: any): void;
    onClose(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConversationSuccessComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConversationSuccessComponent, "lib-conversation-success", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLXN1Y2Nlc3MuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1zdWNjZXNzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29udmVyc2F0aW9uU3VjY2Vzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgYm90SWQ6IHN0cmluZztcbiAgICByZXNvdXJjZVNlcnZpY2U6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uQ29weShpZDogYW55KTogdm9pZDtcbiAgICBvbkNsb3NlKCk6IHZvaWQ7XG59XG4iXX0=
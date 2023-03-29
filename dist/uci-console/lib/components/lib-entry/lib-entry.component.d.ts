import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UciEventsService } from '../../uci-events.service';
import { ConfigService } from '../../services/config.service';
import { UciService } from '../../services/uci.service';
import { TelemetryUtilsService } from '../../telemetry-utils.service';
import { GlobalService } from '../../services/global.service';
import * as ɵngcc0 from '@angular/core';
export declare class LibEntryComponent implements OnInit {
    activatedRoute: ActivatedRoute;
    private uciService;
    private configService;
    private location;
    private uciEventsService;
    private telemetryUtils;
    private globalService;
    private router;
    user: any;
    baseUrl: any;
    nlBaseUrl: any;
    blobUrl: any;
    botPhoneNumber: any;
    resourceService: any;
    adapterId: any;
    broadcastAdapterId: any;
    constructor(activatedRoute: ActivatedRoute, uciService: UciService, configService: ConfigService, location: Location, uciEventsService: UciEventsService, telemetryUtils: TelemetryUtilsService, globalService: GlobalService, router: Router);
    ngOnInit(): void;
    goBack(): void;
    close(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LibEntryComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LibEntryComponent, "lib-lib-entry", never, { "user": "user"; "baseUrl": "baseUrl"; "nlBaseUrl": "nlBaseUrl"; "blobUrl": "blobUrl"; "botPhoneNumber": "botPhoneNumber"; "resourceService": "resourceService"; "adapterId": "adapterId"; "broadcastAdapterId": "broadcastAdapterId"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWVudHJ5LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJsaWItZW50cnkuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFVjaUV2ZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi91Y2ktZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFVjaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQgeyBUZWxlbWV0cnlVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi90ZWxlbWV0cnktdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGliRW50cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcml2YXRlIHVjaVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlO1xuICAgIHByaXZhdGUgbG9jYXRpb247XG4gICAgcHJpdmF0ZSB1Y2lFdmVudHNTZXJ2aWNlO1xuICAgIHByaXZhdGUgdGVsZW1ldHJ5VXRpbHM7XG4gICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGVyO1xuICAgIHVzZXI6IGFueTtcbiAgICBiYXNlVXJsOiBhbnk7XG4gICAgbmxCYXNlVXJsOiBhbnk7XG4gICAgYmxvYlVybDogYW55O1xuICAgIGJvdFBob25lTnVtYmVyOiBhbnk7XG4gICAgcmVzb3VyY2VTZXJ2aWNlOiBhbnk7XG4gICAgYWRhcHRlcklkOiBhbnk7XG4gICAgYnJvYWRjYXN0QWRhcHRlcklkOiBhbnk7XG4gICAgY29uc3RydWN0b3IoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLCBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLCBsb2NhdGlvbjogTG9jYXRpb24sIHVjaUV2ZW50c1NlcnZpY2U6IFVjaUV2ZW50c1NlcnZpY2UsIHRlbGVtZXRyeVV0aWxzOiBUZWxlbWV0cnlVdGlsc1NlcnZpY2UsIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsIHJvdXRlcjogUm91dGVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGdvQmFjaygpOiB2b2lkO1xuICAgIGNsb3NlKGV2ZW50OiBhbnkpOiB2b2lkO1xufVxuIl19
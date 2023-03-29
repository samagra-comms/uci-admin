import { OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export declare class ExhaustReportComponent implements OnInit {
    private fb;
    private uciService;
    private router;
    private activatedRoute;
    private toasterService;
    private globalService;
    resourceService: any;
    user: any;
    conversationId: any;
    exhaustTypes: {
        name: string;
        value: string;
    }[];
    filterForm: FormGroup;
    filters: {
        startDate: any;
        endDate: any;
        exhaustType: any;
    };
    displayedColumns: string[];
    dataSource: {
        requestid: string;
        requesttype: string;
        requestdate: string;
        conversationid: string;
        startdate: string;
        enddate: string;
        status: string;
        reportlink: string;
        generateddate: string;
    }[];
    constructor(fb: FormBuilder, uciService: UciService, router: Router, activatedRoute: ActivatedRoute, toasterService: ToasterService, globalService: GlobalService);
    ngOnInit(): void;
    getJobList(): void;
    getJobInfo(): void;
    submitExhaust(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExhaustReportComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ExhaustReportComponent, "lib-exhaust-report", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImV4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVWNpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXhoYXVzdFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcml2YXRlIHVjaVNlcnZpY2U7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTtcbiAgICByZXNvdXJjZVNlcnZpY2U6IGFueTtcbiAgICB1c2VyOiBhbnk7XG4gICAgY29udmVyc2F0aW9uSWQ6IGFueTtcbiAgICBleGhhdXN0VHlwZXM6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gICAgZmlsdGVyczoge1xuICAgICAgICBzdGFydERhdGU6IGFueTtcbiAgICAgICAgZW5kRGF0ZTogYW55O1xuICAgICAgICBleGhhdXN0VHlwZTogYW55O1xuICAgIH07XG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gICAgZGF0YVNvdXJjZToge1xuICAgICAgICByZXF1ZXN0aWQ6IHN0cmluZztcbiAgICAgICAgcmVxdWVzdHR5cGU6IHN0cmluZztcbiAgICAgICAgcmVxdWVzdGRhdGU6IHN0cmluZztcbiAgICAgICAgY29udmVyc2F0aW9uaWQ6IHN0cmluZztcbiAgICAgICAgc3RhcnRkYXRlOiBzdHJpbmc7XG4gICAgICAgIGVuZGRhdGU6IHN0cmluZztcbiAgICAgICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgICAgIHJlcG9ydGxpbms6IHN0cmluZztcbiAgICAgICAgZ2VuZXJhdGVkZGF0ZTogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsIHJvdXRlcjogUm91dGVyLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSwgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBnZXRKb2JMaXN0KCk6IHZvaWQ7XG4gICAgZ2V0Sm9iSW5mbygpOiB2b2lkO1xuICAgIHN1Ym1pdEV4aGF1c3QoKTogdm9pZDtcbn1cbiJdfQ==
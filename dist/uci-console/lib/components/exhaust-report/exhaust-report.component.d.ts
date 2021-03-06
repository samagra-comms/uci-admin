import { OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<ExhaustReportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ExhaustReportComponent, "lib-exhaust-report", never, {}, {}, never, never>;
}

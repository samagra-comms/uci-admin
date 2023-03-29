import { EventEmitter, OnInit } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { UciGraphQlService } from '../../services/uci-graph-ql.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import * as ɵngcc0 from '@angular/core';
export declare class UserSegmentAddComponent implements OnInit {
    private uciService;
    private fb;
    private uciGraphQlService;
    private globalService;
    cancel: EventEmitter<boolean>;
    add: EventEmitter<any>;
    formFieldProperties: Array<any>;
    userSegment: any;
    isLoaderShow: boolean;
    districts: any[];
    blocks: any[];
    schools: any[];
    clusters: any[];
    roles: any[];
    boards: any[];
    grade: number[];
    subjects: any[];
    userSegmentForm: FormGroup;
    state: string;
    resourceService: any;
    constructor(uciService: UciService, fb: FormBuilder, uciGraphQlService: UciGraphQlService, globalService: GlobalService);
    ngOnInit(): void;
    onCancel(): void;
    onAdd(): void;
    afterAdd(data: any): void;
    getUciState(): void;
    getUciDistrict(): void;
    getUciBlock(): void;
    getUciCluster(): void;
    getUciSchoolDetails(): void;
    getUciRole(): void;
    getUciBoard(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserSegmentAddComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UserSegmentAddComponent, "lib-user-segment-add", never, {}, { "cancel": "cancel"; "add": "add"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVWNpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7IFVjaUdyYXBoUWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLWdyYXBoLXFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyU2VnbWVudEFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJpdmF0ZSB1Y2lHcmFwaFFsU2VydmljZTtcbiAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U7XG4gICAgY2FuY2VsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgYWRkOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICBmb3JtRmllbGRQcm9wZXJ0aWVzOiBBcnJheTxhbnk+O1xuICAgIHVzZXJTZWdtZW50OiBhbnk7XG4gICAgaXNMb2FkZXJTaG93OiBib29sZWFuO1xuICAgIGRpc3RyaWN0czogYW55W107XG4gICAgYmxvY2tzOiBhbnlbXTtcbiAgICBzY2hvb2xzOiBhbnlbXTtcbiAgICBjbHVzdGVyczogYW55W107XG4gICAgcm9sZXM6IGFueVtdO1xuICAgIGJvYXJkczogYW55W107XG4gICAgZ3JhZGU6IG51bWJlcltdO1xuICAgIHN1YmplY3RzOiBhbnlbXTtcbiAgICB1c2VyU2VnbWVudEZvcm06IEZvcm1Hcm91cDtcbiAgICBzdGF0ZTogc3RyaW5nO1xuICAgIHJlc291cmNlU2VydmljZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgdWNpR3JhcGhRbFNlcnZpY2U6IFVjaUdyYXBoUWxTZXJ2aWNlLCBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgb25BZGQoKTogdm9pZDtcbiAgICBhZnRlckFkZChkYXRhOiBhbnkpOiB2b2lkO1xuICAgIGdldFVjaVN0YXRlKCk6IHZvaWQ7XG4gICAgZ2V0VWNpRGlzdHJpY3QoKTogdm9pZDtcbiAgICBnZXRVY2lCbG9jaygpOiB2b2lkO1xuICAgIGdldFVjaUNsdXN0ZXIoKTogdm9pZDtcbiAgICBnZXRVY2lTY2hvb2xEZXRhaWxzKCk6IHZvaWQ7XG4gICAgZ2V0VWNpUm9sZSgpOiB2b2lkO1xuICAgIGdldFVjaUJvYXJkKCk6IHZvaWQ7XG59XG4iXX0=
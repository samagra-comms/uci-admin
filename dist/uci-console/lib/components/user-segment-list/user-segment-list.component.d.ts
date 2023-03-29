import { EventEmitter, OnInit } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import * as ɵngcc0 from '@angular/core';
export declare class UserSegmentListComponent implements OnInit {
    private uciService;
    private route;
    private globalService;
    cancel: EventEmitter<boolean>;
    add: EventEmitter<any>;
    selectedUserSegments: any[];
    userSegments: any[];
    selectedUserSegmentMap: {};
    pager: any;
    pageNumber: number;
    column: string;
    reverse: boolean;
    queryParams: any;
    search: any;
    resourceService: any;
    constructor(uciService: UciService, route: Router, globalService: GlobalService);
    ngOnInit(): void;
    getUserSegment(): void;
    parseUserSegments(data: any): void;
    navigateToPage(page: number): undefined | void;
    getSearch(): void;
    onCancel(): void;
    onCheck(event: any, userSegment: any): void;
    onAdd(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserSegmentListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UserSegmentListComponent, "lib-user-segment-list", never, { "selectedUserSegments": "selectedUserSegments"; }, { "cancel": "cancel"; "add": "add"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVzZXItc2VnbWVudC1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVY2lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyU2VnbWVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgdWNpU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRlO1xuICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTtcbiAgICBjYW5jZWw6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICBhZGQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIHNlbGVjdGVkVXNlclNlZ21lbnRzOiBhbnlbXTtcbiAgICB1c2VyU2VnbWVudHM6IGFueVtdO1xuICAgIHNlbGVjdGVkVXNlclNlZ21lbnRNYXA6IHt9O1xuICAgIHBhZ2VyOiBhbnk7XG4gICAgcGFnZU51bWJlcjogbnVtYmVyO1xuICAgIGNvbHVtbjogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG4gICAgcXVlcnlQYXJhbXM6IGFueTtcbiAgICBzZWFyY2g6IGFueTtcbiAgICByZXNvdXJjZVNlcnZpY2U6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcih1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLCByb3V0ZTogUm91dGVyLCBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGdldFVzZXJTZWdtZW50KCk6IHZvaWQ7XG4gICAgcGFyc2VVc2VyU2VnbWVudHMoZGF0YTogYW55KTogdm9pZDtcbiAgICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpOiB1bmRlZmluZWQgfCB2b2lkO1xuICAgIGdldFNlYXJjaCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgb25DaGVjayhldmVudDogYW55LCB1c2VyU2VnbWVudDogYW55KTogdm9pZDtcbiAgICBvbkFkZCgpOiB2b2lkO1xufVxuIl19
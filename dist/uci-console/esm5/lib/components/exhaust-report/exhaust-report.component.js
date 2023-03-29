import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
var ExhaustReportComponent = /** @class */ (function () {
    function ExhaustReportComponent(fb, uciService, router, activatedRoute, toasterService, globalService) {
        this.fb = fb;
        this.uciService = uciService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toasterService = toasterService;
        this.globalService = globalService;
        this.exhaustTypes = [
            { name: 'Response Exhaust', value: 'uci-response-exhaust' },
            { name: 'Private Exhaust', value: 'uci-private-exhaust' },
        ];
        this.filters = {
            startDate: null,
            endDate: null,
            exhaustType: null,
        };
        this.displayedColumns = ['requestid', 'requesttype', 'requestdate', 'conversationid', 'startdate', 'enddate', 'status', 'reportlink', 'generateddate'];
        this.dataSource = [
            {
                requestid: 'dhheb1234',
                requesttype: 'Response Exhaust',
                requestdate: '14 / 03 / 2022',
                conversationid: 'uik123',
                startdate: '10 / 03 / 2022',
                enddate: '11/03/2022',
                status: 'Submitted',
                reportlink: '-',
                generateddate: '-'
            },
            {
                requestid: 'dhheb9876',
                requesttype: 'Private Exhaust',
                requestdate: '14 / 03 / 2022',
                conversationid: 'uik123',
                startdate: '10 / 03 / 2022',
                enddate: '11/03/2022',
                status: 'Success',
                reportlink: '-',
                generateddate: '15 / 03 / 2022'
            },
        ];
        this.resourceService = this.globalService.getResourceService();
    }
    ExhaustReportComponent.prototype.ngOnInit = function () {
        this.user = this.globalService.getUser();
        this.resourceService = this.globalService.getResourceService();
        if (!this.user) {
            this.router.navigate(['uci-admin']);
            return;
        }
        this.filterForm = this.fb.group({
            startDate: [''],
            endDate: [''],
            exhaustType: [this.exhaustTypes[0].value],
        });
        // this.filters.exhaustType = this.exhaustTypes[0].value;
        this.conversationId = this.activatedRoute.snapshot.paramMap.get('id');
        this.getJobList();
    };
    ExhaustReportComponent.prototype.getJobList = function () {
        this.uciService.getJobList(this.conversationId, {}).subscribe(function (data) {
            console.log('job list data');
        });
    };
    ExhaustReportComponent.prototype.getJobInfo = function () {
        this.uciService.getJobInfo(this.conversationId, {}).subscribe(function (data) {
            console.log('job Info');
        });
    };
    ExhaustReportComponent.prototype.submitExhaust = function () {
        var exhaustData = {
            request: {
                dataset: this.filters.exhaustType,
                tag: uuidv4(),
                requestedBy: 'user_id',
                requestedChannel: '01309282781705830427',
                datasetConfig: {
                    type: this.filters.exhaustType,
                    conversationId: this.conversationId,
                    startDate: '2022-02-06',
                    endDate: '2022-02-10'
                },
                output_format: 'csv'
            }
        };
        this.uciService.submitExhaust(exhaustData).subscribe(function (data) {
            console.log('job Info');
        });
    };
    ExhaustReportComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: UciService },
        { type: Router },
        { type: ActivatedRoute },
        { type: ToasterService },
        { type: GlobalService }
    ]; };
    ExhaustReportComponent = __decorate([
        Component({
            selector: 'lib-exhaust-report',
            template: "<div class=\"header\">\n    <form [formGroup]=\"filterForm\">\n        <mat-grid-list cols=\"4\" rowHeight=\"3rem\">\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <mat-form-field appearance=\"fill\">\n                        <mat-label>Exhaust type</mat-label>\n                        <mat-select formControlName=\"exhaustType\">\n                            <mat-option *ngFor=\"let exhaustType of exhaustTypes\" [value]=\"exhaustType.value\">\n                                {{ exhaustType.name }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <!--<mat-form-field appearance=\"fill\">\n                        <mat-label>Start date</mat-label>\n                        <input matInput [matDatepicker]=\"startPicker\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #startPicker></mat-datepicker>\n                        </mat-form-field>-->\n                    <div class=\"ui left icon input\">\n                        <i class=\"calendar icon\"></i>\n                        <input suiDatepicker\n                               placeholder=\"Start Date\"\n                               formControlName=\"startDate\"\n                               [pickerMode]=\"'date'\"\n                               [pickerUseNativeOnMobile]=\"false\">\n                    </div>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <!--<mat-form-field appearance=\"fill\">\n                    <mat-label>End date</mat-label>\n                    <input matInput [matDatepicker]=\"endPicker\">\n                    <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #endPicker></mat-datepicker>\n                    </mat-form-field>-->\n                    <div class=\"ui left icon input\">\n                        <i class=\"calendar icon\"></i>\n                        <input suiDatepicker\n                               placeholder=\"End Date\"\n                               formControlName=\"endDate\"\n                               [pickerMode]=\"'date'\"\n                               [pickerUseNativeOnMobile]=\"false\">\n                    </div>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <button mat-raised-button color=\"primary\" (click)=\"getJobList()\">Submit</button>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </form>\n</div>\n<div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n        <!-- Request ID Column -->\n        <ng-container matColumnDef=\"requestid\">\n            <th mat-header-cell *matHeaderCellDef> Request ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requestid}} </td>\n        </ng-container>\n\n        <!-- Request Type Column -->\n        <ng-container matColumnDef=\"requesttype\">\n            <th mat-header-cell *matHeaderCellDef> Request Type</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requesttype}} </td>\n        </ng-container>\n\n        <!-- Request Date Column -->\n        <ng-container matColumnDef=\"requestdate\">\n            <th mat-header-cell *matHeaderCellDef> Request Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requestdate}} </td>\n        </ng-container>\n\n        <!-- Conversation ID Column -->\n        <ng-container matColumnDef=\"conversationid\">\n            <th mat-header-cell *matHeaderCellDef> Conversation ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.conversationid}} </td>\n        </ng-container>\n\n        <!-- Start Date Column -->\n        <ng-container matColumnDef=\"startdate\">\n            <th mat-header-cell *matHeaderCellDef> Start Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.startdate}} </td>\n        </ng-container>\n\n        <!-- End Date Column -->\n        <ng-container matColumnDef=\"enddate\">\n            <th mat-header-cell *matHeaderCellDef> End Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.enddate}} </td>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef> Status</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n        </ng-container>\n\n        <!-- Report Link  Column -->\n        <ng-container matColumnDef=\"reportlink\">\n            <th mat-header-cell *matHeaderCellDef> Report Link</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.reportlink}} </td>\n        </ng-container>\n\n        <!--Generated Date Column -->\n        <ng-container matColumnDef=\"generateddate\">\n            <th mat-header-cell *matHeaderCellDef> Generated Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.generateddate}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"\n                   showFirstLastButtons\n                   aria-label=\"Select page of periodic elements\">\n    </mat-paginator>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .uci-logic-container{padding:20px}.sample-download{text-decoration:underline!important;cursor:pointer!important}.mobile .sample-download{font-size:.8rem}"]
        })
    ], ExhaustReportComponent);
    return ExhaustReportComponent;
}());
export { ExhaustReportComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxFQUFFLElBQUksTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPdkQ7SUF3Q0ksZ0NBQ1ksRUFBZSxFQUNmLFVBQXNCLEVBQ3RCLE1BQWMsRUFDZCxjQUE4QixFQUM5QixjQUE4QixFQUM5QixhQUE0QjtRQUw1QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTFDeEMsaUJBQVksR0FBRztZQUNYLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBQztZQUN6RCxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUM7U0FDMUQsQ0FBQztRQUVGLFlB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V0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLGdCQUFnQixFQUFFLHNCQUFzQjtnQkFDeEMsYUFBYSxFQUFFO29CQUNYLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7b0JBQzlCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztvQkFDbkMsU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLE9BQU8sRUFBRSxZQUFZO2lCQUN4QjtnQkFDRCxhQUFhLEVBQUUsS0FBSzthQUN2QjtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQ2hELFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDOztnQkEvRGUsV0FBVztnQkFDSCxVQUFVO2dCQUNkLE1BQU07Z0JBQ0UsY0FBYztnQkFDZCxjQUFjO2dCQUNmLGFBQWE7O0lBOUMvQixzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qiw4dkxBQThDOztTQUVqRCxDQUFDO09BQ1csc0JBQXNCLENBMkdsQztJQUFELDZCQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0EzR1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtVY2lTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQge1RvYXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1leGhhdXN0LXJlcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9leGhhdXN0LXJlcG9ydC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeGhhdXN0UmVwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG4gICAgdXNlcjtcbiAgICBjb252ZXJzYXRpb25JZDtcbiAgICBleGhhdXN0VHlwZXMgPSBbXG4gICAgICAgIHtuYW1lOiAnUmVzcG9uc2UgRXhoYXVzdCcsIHZhbHVlOiAndWNpLXJlc3BvbnNlLWV4aGF1c3QnfSxcbiAgICAgICAge25hbWU6ICdQcml2YXRlIEV4aGF1c3QnLCB2YWx1ZTogJ3VjaS1wcml2YXRlLWV4aGF1c3QnfSxcbiAgICBdO1xuICAgIGZpbHRlckZvcm06IEZvcm1Hcm91cDtcbiAgICBmaWx0ZXJzID0ge1xuICAgICAgICBzdGFydERhdGU6IG51bGwsXG4gICAgICAgIGVuZERhdGU6IG51bGwsXG4gICAgICAgIGV4aGF1c3RUeXBlOiBudWxsLFxuICAgIH07XG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3JlcXVlc3RpZCcsICdyZXF1ZXN0dHlwZScsICdyZXF1ZXN0ZGF0ZScsICdjb252ZXJzYXRpb25pZCcsICdzdGFydGRhdGUnLCAnZW5kZGF0ZScsICdzdGF0dXMnLCAncmVwb3J0bGluaycsICdnZW5lcmF0ZWRkYXRlJ107XG4gICAgZGF0YVNvdXJjZSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdGlkOiAnZGhoZWIxMjM0JyxcbiAgICAgICAgICAgIHJlcXVlc3R0eXBlOiAnUmVzcG9uc2UgRXhoYXVzdCcsXG4gICAgICAgICAgICByZXF1ZXN0ZGF0ZTogJzE0IC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbmlkOiAndWlrMTIzJyxcbiAgICAgICAgICAgIHN0YXJ0ZGF0ZTogJzEwIC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGVuZGRhdGU6ICcxMS8wMy8yMDIyJyxcbiAgICAgICAgICAgIHN0YXR1czogJ1N1Ym1pdHRlZCcsXG4gICAgICAgICAgICByZXBvcnRsaW5rOiAnLScsXG4gICAgICAgICAgICBnZW5lcmF0ZWRkYXRlOiAnLSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVxdWVzdGlkOiAnZGhoZWI5ODc2JyxcbiAgICAgICAgICAgIHJlcXVlc3R0eXBlOiAnUHJpdmF0ZSBFeGhhdXN0JyxcbiAgICAgICAgICAgIHJlcXVlc3RkYXRlOiAnMTQgLyAwMyAvIDIwMjInLFxuICAgICAgICAgICAgY29udmVyc2F0aW9uaWQ6ICd1aWsxMjMnLFxuICAgICAgICAgICAgc3RhcnRkYXRlOiAnMTAgLyAwMyAvIDIwMjInLFxuICAgICAgICAgICAgZW5kZGF0ZTogJzExLzAzLzIwMjInLFxuICAgICAgICAgICAgc3RhdHVzOiAnU3VjY2VzcycsXG4gICAgICAgICAgICByZXBvcnRsaW5rOiAnLScsXG4gICAgICAgICAgICBnZW5lcmF0ZWRkYXRlOiAnMTUgLyAwMyAvIDIwMjInXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFVzZXIoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIGlmICghdGhpcy51c2VyKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VjaS1hZG1pbiddKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogWycnXSxcbiAgICAgICAgICAgIGVuZERhdGU6IFsnJ10sXG4gICAgICAgICAgICBleGhhdXN0VHlwZTogW3RoaXMuZXhoYXVzdFR5cGVzWzBdLnZhbHVlXSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVycy5leGhhdXN0VHlwZSA9IHRoaXMuZXhoYXVzdFR5cGVzWzBdLnZhbHVlO1xuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbklkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgICAgIHRoaXMuZ2V0Sm9iTGlzdCgpO1xuICAgIH1cblxuICAgIGdldEpvYkxpc3QoKSB7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS5nZXRKb2JMaXN0KHRoaXMuY29udmVyc2F0aW9uSWQsIHt9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnam9iIGxpc3QgZGF0YScpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEpvYkluZm8oKSB7XG4gICAgICAgIHRoaXMudWNpU2VydmljZS5nZXRKb2JJbmZvKHRoaXMuY29udmVyc2F0aW9uSWQsIHt9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnam9iIEluZm8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdWJtaXRFeGhhdXN0KCkge1xuICAgICAgICBjb25zdCBleGhhdXN0RGF0YSA9IHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICBkYXRhc2V0OiB0aGlzLmZpbHRlcnMuZXhoYXVzdFR5cGUsXG4gICAgICAgICAgICAgICAgdGFnOiB1dWlkdjQoKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0ZWRCeTogJ3VzZXJfaWQnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RlZENoYW5uZWw6ICcwMTMwOTI4Mjc4MTcwNTgzMDQyNycsXG4gICAgICAgICAgICAgICAgZGF0YXNldENvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmZpbHRlcnMuZXhoYXVzdFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiB0aGlzLmNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6ICcyMDIyLTAyLTA2JyxcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogJzIwMjItMDItMTAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvdXRwdXRfZm9ybWF0OiAnY3N2J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2Uuc3VibWl0RXhoYXVzdChleGhhdXN0RGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYiBJbmZvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
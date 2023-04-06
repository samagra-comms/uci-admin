import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
let ExhaustReportComponent = class ExhaustReportComponent {
    constructor(fb, uciService, router, activatedRoute, toasterService, globalService) {
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
    ngOnInit() {
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
    }
    getJobList() {
        this.uciService.getJobList(this.conversationId, {}).subscribe(data => {
            console.log('job list data');
        });
    }
    getJobInfo() {
        this.uciService.getJobInfo(this.conversationId, {}).subscribe(data => {
            console.log('job Info');
        });
    }
    submitExhaust() {
        const exhaustData = {
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
        this.uciService.submitExhaust(exhaustData).subscribe(data => {
            console.log('job Info');
        });
    }
};
ExhaustReportComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UciService },
    { type: Router },
    { type: ActivatedRoute },
    { type: ToasterService },
    { type: GlobalService }
];
ExhaustReportComponent = __decorate([
    Component({
        selector: 'lib-exhaust-report',
        template: "<div class=\"header\">\n    <form [formGroup]=\"filterForm\">\n        <mat-grid-list cols=\"4\" rowHeight=\"3rem\">\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <mat-form-field appearance=\"fill\">\n                        <mat-label>Exhaust type</mat-label>\n                        <mat-select formControlName=\"exhaustType\">\n                            <mat-option *ngFor=\"let exhaustType of exhaustTypes\" [value]=\"exhaustType.value\">\n                                {{ exhaustType.name }}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <!--<mat-form-field appearance=\"fill\">\n                        <mat-label>Start date</mat-label>\n                        <input matInput [matDatepicker]=\"startPicker\" />\n                        <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #startPicker></mat-datepicker>\n                        </mat-form-field>-->\n                    <div class=\"ui left icon input\">\n                        <i class=\"calendar icon\"></i>\n                        <input suiDatepicker\n                               placeholder=\"Start Date\"\n                               formControlName=\"startDate\"\n                               [pickerMode]=\"'date'\"\n                               [pickerUseNativeOnMobile]=\"false\">\n                    </div>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <!--<mat-form-field appearance=\"fill\">\n                    <mat-label>End date</mat-label>\n                    <input matInput [matDatepicker]=\"endPicker\">\n                    <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n                    <mat-datepicker #endPicker></mat-datepicker>\n                    </mat-form-field>-->\n                    <div class=\"ui left icon input\">\n                        <i class=\"calendar icon\"></i>\n                        <input suiDatepicker\n                               placeholder=\"End Date\"\n                               formControlName=\"endDate\"\n                               [pickerMode]=\"'date'\"\n                               [pickerUseNativeOnMobile]=\"false\">\n                    </div>\n                </div>\n            </mat-grid-tile>\n            <mat-grid-tile colspan=\"1\">\n                <div class=\"w-100 text-left\">\n                    <button mat-raised-button color=\"primary\" (click)=\"getJobList()\">Submit</button>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </form>\n</div>\n<div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n        <!-- Request ID Column -->\n        <ng-container matColumnDef=\"requestid\">\n            <th mat-header-cell *matHeaderCellDef> Request ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requestid}} </td>\n        </ng-container>\n\n        <!-- Request Type Column -->\n        <ng-container matColumnDef=\"requesttype\">\n            <th mat-header-cell *matHeaderCellDef> Request Type</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requesttype}} </td>\n        </ng-container>\n\n        <!-- Request Date Column -->\n        <ng-container matColumnDef=\"requestdate\">\n            <th mat-header-cell *matHeaderCellDef> Request Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.requestdate}} </td>\n        </ng-container>\n\n        <!-- Conversation ID Column -->\n        <ng-container matColumnDef=\"conversationid\">\n            <th mat-header-cell *matHeaderCellDef> Conversation ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.conversationid}} </td>\n        </ng-container>\n\n        <!-- Start Date Column -->\n        <ng-container matColumnDef=\"startdate\">\n            <th mat-header-cell *matHeaderCellDef> Start Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.startdate}} </td>\n        </ng-container>\n\n        <!-- End Date Column -->\n        <ng-container matColumnDef=\"enddate\">\n            <th mat-header-cell *matHeaderCellDef> End Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.enddate}} </td>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef> Status</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n        </ng-container>\n\n        <!-- Report Link  Column -->\n        <ng-container matColumnDef=\"reportlink\">\n            <th mat-header-cell *matHeaderCellDef> Report Link</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.reportlink}} </td>\n        </ng-container>\n\n        <!--Generated Date Column -->\n        <ng-container matColumnDef=\"generateddate\">\n            <th mat-header-cell *matHeaderCellDef> Generated Date</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.generateddate}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"\n                   showFirstLastButtons\n                   aria-label=\"Select page of periodic elements\">\n    </mat-paginator>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table{width:100%}.mat-header-cell{font-weight:700;color:#000}.uci-action-button{background-color:#005a9e;color:#fff}.uci-copy-button{background-color:#e0e1e2;color:#000}.hide{display:none}.asterisk-color{color:red}.uci-mat-pagination{text-align:right}.small-btn{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100{width:100%}.justify-between{justify-content:space-between}.align-middle{align-items:center}.overflow-visible{overflow:visible!important}.background-transparent{background:0 0!important}.wrap-text{word-wrap:break-word}.col-3{flex-grow:3}.col-1{flex-grow:1}.d-flex{display:flex}.flex-row{flex-flow:row!important}.flex-column{flex-flow:column!important}.justify-content-center{justify-content:center!important}.justify-content-start{justify-content:start!important}.justify-content-end{justify-content:end!important}.justify-content-around{justify-content:space-around!important}.justify-content-between{justify-content:space-between!important}.align-items-center{align-items:center!important}.align-items-start{align-items:start!important}.align-items-baseline{align-items:baseline!important}.align-items-end{align-items:end!important}.text-center{text-align:center!important}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-right .margin-auto{margin:auto!important}::ng-deep .uci-logic-container{padding:20px}.sample-download{text-decoration:underline!important;cursor:pointer!important}.mobile .sample-download{font-size:.8rem}"]
    })
], ExhaustReportComponent);
export { ExhaustReportComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2V4aGF1c3QtcmVwb3J0L2V4aGF1c3QtcmVwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxFQUFFLElBQUksTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPdkQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUF3Qy9CLFlBQ1ksRUFBZSxFQUNmLFVBQXNCLEVBQ3RCLE1BQWMsRUFDZCxjQUE4QixFQUM5QixjQUE4QixFQUM5QixhQUE0QjtRQUw1QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTFDeEMsaUJBQVksR0FBRztZQUNYLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBQztZQUN6RCxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUM7U0FDMUQsQ0FBQztRQUVGLFlBQU8sR0FBRztZQUNOLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUk7WUFDYixXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDO1FBQ0YscUJBQWdCLEdBQWEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDNUosZUFBVSxHQUFHO1lBQ1Q7Z0JBQ0ksU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLFdBQVcsRUFBRSxrQkFBa0I7Z0JBQy9CLFdBQVcsRUFBRSxnQkFBZ0I7Z0JBQzdCLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxHQUFHO2FBQ3JCO1lBQ0Q7Z0JBQ0ksU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLFdBQVcsRUFBRSxpQkFBaUI7Z0JBQzlCLFdBQVcsRUFBRSxnQkFBZ0I7Z0JBQzdCLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLGFBQWEsRUFBRSxnQkFBZ0I7YUFDbEM7U0FDSixDQUFDO1FBU0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM1QyxDQUFDLENBQUM7UUFDSCx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUN6RCxJQUFJLENBQUMsRUFBRTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUN6RCxJQUFJLENBQUMsRUFBRTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sV0FBVyxHQUFHO1lBQ2hCLE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO2dCQUNqQyxHQUFHLEVBQUUsTUFBTSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixnQkFBZ0IsRUFBRSxzQkFBc0I7Z0JBQ3hDLGFBQWEsRUFBRTtvQkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO29CQUM5QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7b0JBQ25DLFNBQVMsRUFBRSxZQUFZO29CQUN2QixPQUFPLEVBQUUsWUFBWTtpQkFDeEI7Z0JBQ0QsYUFBYSxFQUFFLEtBQUs7YUFDdkI7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUNoRCxJQUFJLENBQUMsRUFBRTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0NBR0osQ0FBQTs7WUFsRW1CLFdBQVc7WUFDSCxVQUFVO1lBQ2QsTUFBTTtZQUNFLGNBQWM7WUFDZCxjQUFjO1lBQ2YsYUFBYTs7QUE5Qy9CLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDh2TEFBOEM7O0tBRWpELENBQUM7R0FDVyxzQkFBc0IsQ0EyR2xDO1NBM0dZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItZXhoYXVzdC1yZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9leGhhdXN0LXJlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXhoYXVzdC1yZXBvcnQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhoYXVzdFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuICAgIHVzZXI7XG4gICAgY29udmVyc2F0aW9uSWQ7XG4gICAgZXhoYXVzdFR5cGVzID0gW1xuICAgICAgICB7bmFtZTogJ1Jlc3BvbnNlIEV4aGF1c3QnLCB2YWx1ZTogJ3VjaS1yZXNwb25zZS1leGhhdXN0J30sXG4gICAgICAgIHtuYW1lOiAnUHJpdmF0ZSBFeGhhdXN0JywgdmFsdWU6ICd1Y2ktcHJpdmF0ZS1leGhhdXN0J30sXG4gICAgXTtcbiAgICBmaWx0ZXJGb3JtOiBGb3JtR3JvdXA7XG4gICAgZmlsdGVycyA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBudWxsLFxuICAgICAgICBlbmREYXRlOiBudWxsLFxuICAgICAgICBleGhhdXN0VHlwZTogbnVsbCxcbiAgICB9O1xuICAgIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydyZXF1ZXN0aWQnLCAncmVxdWVzdHR5cGUnLCAncmVxdWVzdGRhdGUnLCAnY29udmVyc2F0aW9uaWQnLCAnc3RhcnRkYXRlJywgJ2VuZGRhdGUnLCAnc3RhdHVzJywgJ3JlcG9ydGxpbmsnLCAnZ2VuZXJhdGVkZGF0ZSddO1xuICAgIGRhdGFTb3VyY2UgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3RpZDogJ2RoaGViMTIzNCcsXG4gICAgICAgICAgICByZXF1ZXN0dHlwZTogJ1Jlc3BvbnNlIEV4aGF1c3QnLFxuICAgICAgICAgICAgcmVxdWVzdGRhdGU6ICcxNCAvIDAzIC8gMjAyMicsXG4gICAgICAgICAgICBjb252ZXJzYXRpb25pZDogJ3VpazEyMycsXG4gICAgICAgICAgICBzdGFydGRhdGU6ICcxMCAvIDAzIC8gMjAyMicsXG4gICAgICAgICAgICBlbmRkYXRlOiAnMTEvMDMvMjAyMicsXG4gICAgICAgICAgICBzdGF0dXM6ICdTdWJtaXR0ZWQnLFxuICAgICAgICAgICAgcmVwb3J0bGluazogJy0nLFxuICAgICAgICAgICAgZ2VuZXJhdGVkZGF0ZTogJy0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVlc3RpZDogJ2RoaGViOTg3NicsXG4gICAgICAgICAgICByZXF1ZXN0dHlwZTogJ1ByaXZhdGUgRXhoYXVzdCcsXG4gICAgICAgICAgICByZXF1ZXN0ZGF0ZTogJzE0IC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbmlkOiAndWlrMTIzJyxcbiAgICAgICAgICAgIHN0YXJ0ZGF0ZTogJzEwIC8gMDMgLyAyMDIyJyxcbiAgICAgICAgICAgIGVuZGRhdGU6ICcxMS8wMy8yMDIyJyxcbiAgICAgICAgICAgIHN0YXR1czogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgcmVwb3J0bGluazogJy0nLFxuICAgICAgICAgICAgZ2VuZXJhdGVkZGF0ZTogJzE1IC8gMDMgLyAyMDIyJ1xuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRVc2VyKCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICBpZiAoIXRoaXMudXNlcikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1Y2ktYWRtaW4nXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBzdGFydERhdGU6IFsnJ10sXG4gICAgICAgICAgICBlbmREYXRlOiBbJyddLFxuICAgICAgICAgICAgZXhoYXVzdFR5cGU6IFt0aGlzLmV4aGF1c3RUeXBlc1swXS52YWx1ZV0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmZpbHRlcnMuZXhoYXVzdFR5cGUgPSB0aGlzLmV4aGF1c3RUeXBlc1swXS52YWx1ZTtcbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25JZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xuICAgICAgICB0aGlzLmdldEpvYkxpc3QoKTtcbiAgICB9XG5cbiAgICBnZXRKb2JMaXN0KCkge1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZ2V0Sm9iTGlzdCh0aGlzLmNvbnZlcnNhdGlvbklkLCB7fSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYiBsaXN0IGRhdGEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRKb2JJbmZvKCkge1xuICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZ2V0Sm9iSW5mbyh0aGlzLmNvbnZlcnNhdGlvbklkLCB7fSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYiBJbmZvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3VibWl0RXhoYXVzdCgpIHtcbiAgICAgICAgY29uc3QgZXhoYXVzdERhdGEgPSB7XG4gICAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgZGF0YXNldDogdGhpcy5maWx0ZXJzLmV4aGF1c3RUeXBlLFxuICAgICAgICAgICAgICAgIHRhZzogdXVpZHY0KCksXG4gICAgICAgICAgICAgICAgcmVxdWVzdGVkQnk6ICd1c2VyX2lkJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0ZWRDaGFubmVsOiAnMDEzMDkyODI3ODE3MDU4MzA0MjcnLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5maWx0ZXJzLmV4aGF1c3RUeXBlLFxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25JZDogdGhpcy5jb252ZXJzYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiAnMjAyMi0wMi0wNicsXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGU6ICcyMDIyLTAyLTEwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3V0cHV0X2Zvcm1hdDogJ2NzdidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lTZXJ2aWNlLnN1Ym1pdEV4aGF1c3QoZXhoYXVzdERhdGEpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqb2IgSW5mbycpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG59XG4iXX0=
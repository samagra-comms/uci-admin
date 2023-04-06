import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
let TermsConditionConfirmComponent = class TermsConditionConfirmComponent {
    constructor(globalService, dialogRef, data) {
        this.globalService = globalService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isLoaderShow = false;
        this.isSubmit = false;
        this.Appropriateness = [];
        this.contentDetails = [];
        this.usability = [];
        if (data && data.isSubmit) {
            this.isSubmit = data.isSubmit;
        }
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
        this.resourceService = this.globalService.getResourceService();
        this.Appropriateness = [
            {
                text: (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.appropriatenessHate,
                checks: false
            },
            {
                text: (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.appropriatenessAbusive,
                checks: false
            },
            {
                text: (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.lbl) === null || _f === void 0 ? void 0 : _f.appropriatenessDiscrimination,
                checks: false
            },
            {
                text: (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.lbl) === null || _h === void 0 ? void 0 : _h.appropriatenessChild,
                checks: false
            }
        ];
        this.contentDetails = [
            {
                text: (_k = (_j = this.resourceService.frmelmnts) === null || _j === void 0 ? void 0 : _j.lbl) === null || _k === void 0 ? void 0 : _k.contentDetailDescription,
                checks: false
            },
            {
                text: (_m = (_l = this.resourceService.frmelmnts) === null || _l === void 0 ? void 0 : _l.lbl) === null || _m === void 0 ? void 0 : _m.contentDetailCorrect,
                checks: false
            },
            {
                text: (_p = (_o = this.resourceService.frmelmnts) === null || _o === void 0 ? void 0 : _o.lbl) === null || _p === void 0 ? void 0 : _p.contentDetailAppropriate,
                checks: false
            },
            {
                text: (_r = (_q = this.resourceService.frmelmnts) === null || _q === void 0 ? void 0 : _q.lbl) === null || _r === void 0 ? void 0 : _r.contentDetailRelevant,
                checks: false
            }
        ];
        this.usability = [
            {
                text: (_t = (_s = this.resourceService.frmelmnts) === null || _s === void 0 ? void 0 : _s.lbl) === null || _t === void 0 ? void 0 : _t.usabilityContent,
                checks: false
            },
            {
                text: (_v = (_u = this.resourceService.frmelmnts) === null || _u === void 0 ? void 0 : _u.lbl) === null || _v === void 0 ? void 0 : _v.usabilityClear,
                checks: false
            },
            {
                text: (_x = (_w = this.resourceService.frmelmnts) === null || _w === void 0 ? void 0 : _w.lbl) === null || _x === void 0 ? void 0 : _x.usabilityAudio,
                checks: false
            },
            {
                text: (_z = (_y = this.resourceService.frmelmnts) === null || _y === void 0 ? void 0 : _y.lbl) === null || _z === void 0 ? void 0 : _z.usabilityNoMistakes,
                checks: false
            },
            {
                text: (_1 = (_0 = this.resourceService.frmelmnts) === null || _0 === void 0 ? void 0 : _0.lbl) === null || _1 === void 0 ? void 0 : _1.usabilitySimple,
                checks: false
            }
        ];
    }
    onCancel() {
        this.dialogRef.close();
    }
    updateAllChecked() {
        let allChecked = true;
        for (const val of this.Appropriateness) {
            if (!val.checks) {
                allChecked = false;
                break;
            }
        }
        if (allChecked) {
            for (const val of this.contentDetails) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        if (allChecked) {
            for (const val of this.usability) {
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        this.allChecked = allChecked;
    }
    allCheck(isAllCheck = false) {
        this.Appropriateness.forEach(val => {
            val.checks = isAllCheck;
        });
        this.contentDetails.forEach(val => {
            val.checks = isAllCheck;
        });
        this.usability.forEach(val => {
            val.checks = isAllCheck;
        });
        this.allChecked = true;
        if (!isAllCheck) {
            this.dialogRef.close();
        }
    }
    onSubmit(event) {
        this.dialogRef.close(event);
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    }
};
TermsConditionConfirmComponent.ctorParameters = () => [
    { type: GlobalService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
TermsConditionConfirmComponent = __decorate([
    Component({
        selector: 'lib-terms-condition-confirm',
        template: "<section class=\"uci-modal\">\n    <h1 mat-dialog-title>\n        {{resourceService.frmelmnts?.lbl?.confirmWarning}}:\n    </h1>\n\n    <div mat-dialog-content class=\"mb-40\">\n        <mat-grid-list [cols]=\"breakpoint\" (window:resize)=\"onResize($event)\">\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.appropriateness}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of Appropriateness; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'appropriateness' + i\"\n                                          [(ngModel)]=\"list.checks\" (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.contentDetails}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of contentDetails; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'contentDetails' + i\" [(ngModel)]=\"list.checks\"\n                                          (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.usability}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of usability; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'usability' + i\" [(ngModel)]=\"list.checks\"\n                                          (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n\n    <mat-dialog-actions class=\"confirm-all-action\">\n        <div>\n            <button mat-raised-button class=\"primary\" (click)=\"allCheck(true)\">\n                {{resourceService.frmelmnts?.btn?.confirmAll}}\n            </button>\n        </div>\n\n        <div>\n            <button mat-raised-button class=\"action-button\"\n                    (click)=\"allCheck(false);\">\n                {{resourceService.frmelmnts?.btn?.cancel}}\n            </button>\n            <ng-container *ngIf=\"isLoaderShow; else submitBtn\">\n                <button mat-raised-button class=\"action-button p-0\">\n                    <div class=\"ui active tiny inline loader\"></div>\n                </button>\n            </ng-container>\n            <ng-template #submitBtn>\n                <button mat-raised-button *ngIf=\"isSubmit\" class=\"action-button\"\n                        [disabled]=\"!this.allChecked\"\n                        (click)=\"onSubmit(true);\">\n                    {{resourceService.frmelmnts?.btn?.submit}}\n                </button>\n                <button mat-raised-button *ngIf=\"!isSubmit\" class=\"action-button\"\n                        [disabled]=\"!this.allChecked\"\n                        (click)=\"onSubmit(false);\">\n                    {{resourceService.frmelmnts?.btn?.save}}\n                </button>\n            </ng-template>\n        </div>\n    </mat-dialog-actions>\n</section>\n",
        styles: [".tabs-content-wrapper{padding:0 24px!important}.confirm-all-action{justify-content:space-between}.uci-modal{background:#fff;padding:20px;max-height:90vh;overflow:auto}.uci-modal .mat-dialog-content{max-height:initial!important}.uci-modal ::ng-deep .mat-figure{align-items:initial!important}.uci-modal .confirm-checkbox-label{white-space:break-spaces}"]
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], TermsConditionConfirmComponent);
export { TermsConditionConfirmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFPdkUsSUFBYSw4QkFBOEIsR0FBM0MsTUFBYSw4QkFBOEI7SUFVdkMsWUFDWSxhQUE0QixFQUM3QixTQUF1RCxFQUM5QixJQUFTO1FBRmpDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQThDO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQUs7UUFWN0MsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBT1gsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsUUFBUTs7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJ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QztDQUNKLENBQUE7O1lBN0g4QixhQUFhO1lBQ2xCLFlBQVk7NENBQzdCLE1BQU0sU0FBQyxlQUFlOztBQWJsQiw4QkFBOEI7SUFMMUMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxnL0lBQXVEOztLQUUxRCxDQUFDO0lBY08sV0FBQSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7R0FibkIsOEJBQThCLENBd0kxQztTQXhJWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi10ZXJtcy1jb25kaXRpb24tY29uZmlybScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90ZXJtcy1jb25kaXRpb24tY29uZmlybS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRlcm1zQ29uZGl0aW9uQ29uZmlybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuICAgIGFsbENoZWNrZWQ6IGJvb2xlYW47XG4gICAgaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgaXNTdWJtaXQgPSBmYWxzZTtcbiAgICBBcHByb3ByaWF0ZW5lc3MgPSBbXTtcbiAgICBjb250ZW50RGV0YWlscyA9IFtdO1xuICAgIHVzYWJpbGl0eSA9IFtdO1xuICAgIGJyZWFrcG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pc1N1Ym1pdCkge1xuICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGRhdGEuaXNTdWJtaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50ID0gKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMDApID8gMSA6IDM7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLkFwcHJvcHJpYXRlbmVzcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYXBwcm9wcmlhdGVuZXNzSGF0ZSxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hcHByb3ByaWF0ZW5lc3NBYnVzaXZlLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFwcHJvcHJpYXRlbmVzc0Rpc2NyaW1pbmF0aW9uLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFwcHJvcHJpYXRlbmVzc0NoaWxkLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb250ZW50RGV0YWlscyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udGVudERldGFpbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnRlbnREZXRhaWxDb3JyZWN0LFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnRlbnREZXRhaWxBcHByb3ByaWF0ZSxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb250ZW50RGV0YWlsUmVsZXZhbnQsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnVzYWJpbGl0eSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXNhYmlsaXR5Q29udGVudCxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlDbGVhcixcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlBdWRpbyxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlOb01pc3Rha2VzLFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVzYWJpbGl0eVNpbXBsZSxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWxsQ2hlY2tlZCgpIHtcbiAgICAgICAgbGV0IGFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLkFwcHJvcHJpYXRlbmVzcykge1xuICAgICAgICAgICAgaWYgKCF2YWwuY2hlY2tzKSB7XG4gICAgICAgICAgICAgICAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxDaGVja2VkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLmNvbnRlbnREZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWwuY2hlY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxDaGVja2VkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLnVzYWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIGlmICghdmFsLmNoZWNrcykge1xuICAgICAgICAgICAgICAgICAgICBhbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSBhbGxDaGVja2VkO1xuICAgIH1cblxuICAgIGFsbENoZWNrKGlzQWxsQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLkFwcHJvcHJpYXRlbmVzcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICB2YWwuY2hlY2tzID0gaXNBbGxDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGVudERldGFpbHMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgdmFsLmNoZWNrcyA9IGlzQWxsQ2hlY2s7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVzYWJpbGl0eS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICB2YWwuY2hlY2tzID0gaXNBbGxDaGVjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICghaXNBbGxDaGVjaykge1xuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPD0gMTAwMCkgPyAxIDogMztcbiAgICB9XG59XG4iXX0=
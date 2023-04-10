import { __decorate, __param, __values } from "tslib";
import { Component, Inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
var TermsConditionConfirmComponent = /** @class */ (function () {
    function TermsConditionConfirmComponent(globalService, dialogRef, data) {
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
    TermsConditionConfirmComponent.prototype.ngOnInit = function () {
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
    };
    TermsConditionConfirmComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    TermsConditionConfirmComponent.prototype.updateAllChecked = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var allChecked = true;
        try {
            for (var _d = __values(this.Appropriateness), _e = _d.next(); !_e.done; _e = _d.next()) {
                var val = _e.value;
                if (!val.checks) {
                    allChecked = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (allChecked) {
            try {
                for (var _f = __values(this.contentDetails), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var val = _g.value;
                    if (!val.checks) {
                        allChecked = false;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (allChecked) {
            try {
                for (var _h = __values(this.usability), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var val = _j.value;
                    if (!val.checks) {
                        allChecked = false;
                        break;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        this.allChecked = allChecked;
    };
    TermsConditionConfirmComponent.prototype.allCheck = function (isAllCheck) {
        if (isAllCheck === void 0) { isAllCheck = false; }
        this.Appropriateness.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.contentDetails.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.usability.forEach(function (val) {
            val.checks = isAllCheck;
        });
        this.allChecked = true;
        if (!isAllCheck) {
            this.dialogRef.close();
        }
    };
    TermsConditionConfirmComponent.prototype.onSubmit = function (event) {
        this.dialogRef.close(event);
    };
    TermsConditionConfirmComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    };
    TermsConditionConfirmComponent.ctorParameters = function () { return [
        { type: GlobalService },
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    TermsConditionConfirmComponent = __decorate([
        Component({
            selector: 'lib-terms-condition-confirm',
            template: "<section class=\"uci-modal\">\n    <h1 mat-dialog-title>\n        {{resourceService.frmelmnts?.lbl?.confirmWarning}}:\n    </h1>\n\n    <div mat-dialog-content class=\"mb-40\">\n        <mat-grid-list [cols]=\"breakpoint\" (window:resize)=\"onResize($event)\">\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.appropriateness}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of Appropriateness; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'appropriateness' + i\"\n                                          [(ngModel)]=\"list.checks\" (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.contentDetails}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of contentDetails; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'contentDetails' + i\" [(ngModel)]=\"list.checks\"\n                                          (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n\n            <mat-grid-tile>\n                <div>\n                    <mat-list>\n                        <mat-list-item>\n                            <h4>{{resourceService.frmelmnts?.lbl?.usability}}</h4>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n\n                        <mat-list-item *ngFor=\"let list of usability; let i = index\">\n                            <mat-checkbox [color]=\"'primary'\" [name]=\"'usability' + i\" [(ngModel)]=\"list.checks\"\n                                          (ngModelChange)=\"updateAllChecked()\">\n                                <div class=\"confirm-checkbox-label\">\n                                    {{list.text}}\n                                </div>\n                            </mat-checkbox>\n                        </mat-list-item>\n                    </mat-list>\n                </div>\n            </mat-grid-tile>\n        </mat-grid-list>\n    </div>\n\n    <mat-dialog-actions class=\"confirm-all-action\">\n        <div>\n            <button mat-raised-button class=\"primary\" (click)=\"allCheck(true)\">\n                {{resourceService.frmelmnts?.btn?.confirmAll}}\n            </button>\n        </div>\n\n        <div>\n            <button mat-raised-button class=\"action-button\"\n                    (click)=\"allCheck(false);\">\n                {{resourceService.frmelmnts?.btn?.cancel}}\n            </button>\n            <ng-container *ngIf=\"isLoaderShow; else submitBtn\">\n                <button mat-raised-button class=\"action-button p-0\">\n                    <div class=\"ui active tiny inline loader\"></div>\n                </button>\n            </ng-container>\n            <ng-template #submitBtn>\n                <button mat-raised-button *ngIf=\"isSubmit\" class=\"action-button\"\n                        [disabled]=\"!this.allChecked\"\n                        (click)=\"onSubmit(true);\">\n                    {{resourceService.frmelmnts?.btn?.submit}}\n                </button>\n                <button mat-raised-button *ngIf=\"!isSubmit\" class=\"action-button\"\n                        [disabled]=\"!this.allChecked\"\n                        (click)=\"onSubmit(false);\">\n                    {{resourceService.frmelmnts?.btn?.save}}\n                </button>\n            </ng-template>\n        </div>\n    </mat-dialog-actions>\n</section>\n",
            styles: [".tabs-content-wrapper{padding:0 24px!important}.confirm-all-action{justify-content:space-between}.uci-modal{background:#fff;padding:20px;max-height:90vh;overflow:auto}.uci-modal .mat-dialog-content{max-height:initial!important}.uci-modal ::ng-deep .mat-figure{align-items:initial!important}.uci-modal .confirm-checkbox-label{white-space:break-spaces}"]
        }),
        __param(2, Inject(MAT_DIALOG_DATA))
    ], TermsConditionConfirmComponent);
    return TermsConditionConfirmComponent;
}());
export { TermsConditionConfirmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtL3Rlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFPdkU7SUFVSSx3Q0FDWSxhQUE0QixFQUM3QixTQUF1RCxFQUM5QixJQUFTO1FBRmpDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQThDO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQUs7UUFWN0MsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBT1gsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsaURBQVEsR0FBUjs7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixF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LGlEQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkE1SDBCLGFBQWE7Z0JBQ2xCLFlBQVk7Z0RBQzdCLE1BQU0sU0FBQyxlQUFlOztJQWJsQiw4QkFBOEI7UUFMMUMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxnL0lBQXVEOztTQUUxRCxDQUFDO1FBY08sV0FBQSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7T0FibkIsOEJBQThCLENBd0kxQztJQUFELHFDQUFDO0NBQUEsQUF4SUQsSUF3SUM7U0F4SVksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItdGVybXMtY29uZGl0aW9uLWNvbmZpcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZXJtcy1jb25kaXRpb24tY29uZmlybS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXJtc0NvbmRpdGlvbkNvbmZpcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHJlc291cmNlU2VydmljZTtcbiAgICBhbGxDaGVja2VkOiBib29sZWFuO1xuICAgIGlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgIGlzU3VibWl0ID0gZmFsc2U7XG4gICAgQXBwcm9wcmlhdGVuZXNzID0gW107XG4gICAgY29udGVudERldGFpbHMgPSBbXTtcbiAgICB1c2FiaWxpdHkgPSBbXTtcbiAgICBicmVha3BvaW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSxcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRlcm1zQ29uZGl0aW9uQ29uZmlybUNvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuaXNTdWJtaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSBkYXRhLmlzU3VibWl0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYnJlYWtwb2ludCA9ICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDAwKSA/IDEgOiAzO1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5BcHByb3ByaWF0ZW5lc3MgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmFwcHJvcHJpYXRlbmVzc0hhdGUsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYXBwcm9wcmlhdGVuZXNzQWJ1c2l2ZSxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hcHByb3ByaWF0ZW5lc3NEaXNjcmltaW5hdGlvbixcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5hcHByb3ByaWF0ZW5lc3NDaGlsZCxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29udGVudERldGFpbHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmNvbnRlbnREZXRhaWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb250ZW50RGV0YWlsQ29ycmVjdCxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5jb250ZW50RGV0YWlsQXBwcm9wcmlhdGUsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uY29udGVudERldGFpbFJlbGV2YW50LFxuICAgICAgICAgICAgICAgIGNoZWNrczogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy51c2FiaWxpdHkgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnVzYWJpbGl0eUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXNhYmlsaXR5Q2xlYXIsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXNhYmlsaXR5QXVkaW8sXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8udXNhYmlsaXR5Tm9NaXN0YWtlcyxcbiAgICAgICAgICAgICAgICBjaGVja3M6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy51c2FiaWxpdHlTaW1wbGUsXG4gICAgICAgICAgICAgICAgY2hlY2tzOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFsbENoZWNrZWQoKSB7XG4gICAgICAgIGxldCBhbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5BcHByb3ByaWF0ZW5lc3MpIHtcbiAgICAgICAgICAgIGlmICghdmFsLmNoZWNrcykge1xuICAgICAgICAgICAgICAgIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxsQ2hlY2tlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5jb250ZW50RGV0YWlscykge1xuICAgICAgICAgICAgICAgIGlmICghdmFsLmNoZWNrcykge1xuICAgICAgICAgICAgICAgICAgICBhbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxsQ2hlY2tlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy51c2FiaWxpdHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbC5jaGVja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbGxDaGVja2VkID0gYWxsQ2hlY2tlZDtcbiAgICB9XG5cbiAgICBhbGxDaGVjayhpc0FsbENoZWNrOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5BcHByb3ByaWF0ZW5lc3MuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgdmFsLmNoZWNrcyA9IGlzQWxsQ2hlY2s7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRlbnREZXRhaWxzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIHZhbC5jaGVja3MgPSBpc0FsbENoZWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2FiaWxpdHkuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgdmFsLmNoZWNrcyA9IGlzQWxsQ2hlY2s7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIWlzQWxsQ2hlY2spIHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdChldmVudCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShldmVudCk7XG4gICAgfVxuXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5icmVha3BvaW50ID0gKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoIDw9IDEwMDApID8gMSA6IDM7XG4gICAgfVxufVxuIl19
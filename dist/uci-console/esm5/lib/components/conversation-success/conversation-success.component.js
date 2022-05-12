import { Component } from '@angular/core';
import { Helper } from '../../utils/helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/global.service";
import * as i3 from "@angular/material/grid-list";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
function ConversationSuccessComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.resourceService.frmelmnts == null ? null : ctx_r0.resourceService.frmelmnts.lbl == null ? null : ctx_r0.resourceService.frmelmnts.lbl.botIdMessage, ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.botId);
} }
var ConversationSuccessComponent = /** @class */ (function () {
    function ConversationSuccessComponent(router, activatedRoute, globalService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.globalService = globalService;
        this.url = '';
        this.botId = '';
    }
    ConversationSuccessComponent.prototype.ngOnInit = function () {
        this.url = Helper.makBotUrl(this.activatedRoute.snapshot.queryParams.text || '', this.globalService.getBotPhoneNumber());
        this.botId = this.activatedRoute.snapshot.queryParams.botId || '';
        this.resourceService = this.globalService.getResourceService();
    };
    ConversationSuccessComponent.prototype.onCopy = function (id) {
        Helper.copyData(id);
    };
    ConversationSuccessComponent.prototype.onClose = function () {
        this.router.navigate(['/uci-admin']);
    };
    ConversationSuccessComponent.ɵfac = function ConversationSuccessComponent_Factory(t) { return new (t || ConversationSuccessComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.GlobalService)); };
    ConversationSuccessComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ConversationSuccessComponent, selectors: [["lib-conversation-success"]], decls: 20, vars: 7, consts: [["cols", "1"], [1, "pt-0", "d-flex", "flex-row", "justify-content-center"], [1, "w-25-per", "text-center", 2, "margin", "auto"], [1, "text-center", "mb-20"], ["alt", "Search Icon", "src", "assets/uci-console/images/success.svg"], [1, "text-center", "p-5"], ["id", "copyUrl"], ["class", "text-center p-5", 4, "ngIf"], [1, "mt-20"], ["mat-raised-button", "", 1, "uci-action-button", "mr-10", 3, "click"], ["mat-raised-button", "", 1, "", 3, "click"], ["id", "copyId"]], template: function ConversationSuccessComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-list", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementStart(9, "strong");
            i0.ɵɵelementStart(10, "span", 6);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, ConversationSuccessComponent_div_12_Template, 5, 2, "div", 7);
            i0.ɵɵelementStart(13, "div", 8);
            i0.ɵɵelementStart(14, "button", 9);
            i0.ɵɵlistener("click", function ConversationSuccessComponent_Template_button_click_14_listener() { return ctx.onCopy("copyUrl"); });
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 9);
            i0.ɵɵlistener("click", function ConversationSuccessComponent_Template_button_click_16_listener() { return ctx.onCopy("copyId"); });
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 10);
            i0.ɵɵlistener("click", function ConversationSuccessComponent_Template_button_click_18_listener() { return ctx.onClose(); });
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.botSuccess, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.lbl == null ? null : ctx.resourceService.frmelmnts.lbl.botUrlMessage, " : ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.url);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.botId);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.copyUrl, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.copyId, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.resourceService.frmelmnts == null ? null : ctx.resourceService.frmelmnts.btn == null ? null : ctx.resourceService.frmelmnts.btn.close, " ");
        } }, directives: [i3.MatGridList, i4.NgIf, i5.MatButton], styles: ["@import url(https://fonts.googleapis.com/css?family=Material+Icons);.uci-container[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{background-color:#fff;border-radius:5px}.mat-table[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{font-weight:700;color:#000}.uci-action-button[_ngcontent-%COMP%]{background-color:#005a9e;color:#fff}.uci-copy-button[_ngcontent-%COMP%]{background-color:#e0e1e2;color:#000}.hide[_ngcontent-%COMP%]{display:none}.asterisk-color[_ngcontent-%COMP%]{color:red}.uci-mat-pagination[_ngcontent-%COMP%]{text-align:right}.small-btn[_ngcontent-%COMP%]{padding:6px 14px;font-size:12px;line-height:1;min-width:auto}.w-100[_ngcontent-%COMP%]{width:100%}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.align-middle[_ngcontent-%COMP%]{align-items:center}.overflow-visible[_ngcontent-%COMP%]{overflow:visible!important}.background-transparent[_ngcontent-%COMP%]{background:0 0!important}.wrap-text[_ngcontent-%COMP%]{word-wrap:break-word}.col-3[_ngcontent-%COMP%]{flex-grow:3}.col-1[_ngcontent-%COMP%]{flex-grow:1}.d-flex[_ngcontent-%COMP%]{display:flex}.flex-row[_ngcontent-%COMP%]{flex-flow:row!important}.flex-column[_ngcontent-%COMP%]{flex-flow:column!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:end!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-start[_ngcontent-%COMP%]{align-items:start!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-end[_ngcontent-%COMP%]{align-items:end!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.text-right[_ngcontent-%COMP%]   .margin-auto[_ngcontent-%COMP%]{margin:auto!important}"] });
    return ConversationSuccessComponent;
}());
export { ConversationSuccessComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConversationSuccessComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conversation-success',
                templateUrl: './conversation-success.component.html',
                styleUrls: ['./conversation-success.component.scss']
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLXN1Y2Nlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1zdWNjZXNzL2NvbnZlcnNhdGlvbi1zdWNjZXNzLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NvbnZlcnNhdGlvbi1zdWNjZXNzL2NvbnZlcnNhdGlvbi1zdWNjZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztJQ2M5Qiw4QkFDSTtJQUFBLFlBQ0E7SUFBQSw4QkFBUTtJQUFBLGdDQUFrQjtJQUFBLFlBQVM7SUFBQSxpQkFBTztJQUFBLGlCQUFTO0lBQ3ZELGlCQUFNOzs7SUFGRixlQUNBO0lBREEsMkxBQ0E7SUFBMEIsZUFBUztJQUFULGtDQUFTOztBRGJuRDtJQVVJLHNDQUFvQixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsYUFBNEI7UUFGNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5oRCxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQU1YLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQUVELDZDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsOENBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDOzRHQXRCUSw0QkFBNEI7cUVBQTVCLDRCQUE0QjtZQ1Z6Qyx3Q0FDSTtZQUFBLDhCQUNJO1lBQUEsOEJBQ0k7WUFBQSw4QkFDSTtZQUFBLHlCQUNKO1lBQUEsaUJBQU07WUFFTiw4QkFDSTtZQUFBLFlBQ0o7WUFBQSxpQkFBTTtZQUVOLDhCQUNJO1lBQUEsWUFDQTtZQUFBLDhCQUFRO1lBQUEsZ0NBQW1CO1lBQUEsYUFBTztZQUFBLGlCQUFPO1lBQUEsaUJBQVM7WUFDdEQsaUJBQU07WUFFTiwrRUFDSTtZQUlKLCtCQUNJO1lBQUEsa0NBQ0k7WUFEc0QsMEdBQVMsV0FBTyxTQUFTLENBQUMsSUFBQztZQUNqRixhQUNKO1lBQUEsaUJBQVM7WUFDVCxrQ0FDSTtZQURzRCwwR0FBUyxXQUFPLFFBQVEsQ0FBQyxJQUFDO1lBQ2hGLGFBQ0o7WUFBQSxpQkFBUztZQUNULG1DQUNJO1lBRCtCLDBHQUFTLGFBQVMsSUFBQztZQUNsRCxhQUNKO1lBQUEsaUJBQVM7WUFDYixpQkFBTTtZQUNWLGlCQUFNO1lBQ1YsaUJBQU07WUFDVixpQkFBZ0I7O1lBMUJBLGVBQ0o7WUFESSwrS0FDSjtZQUdJLGVBQ0E7WUFEQSxvTEFDQTtZQUEyQixlQUFPO1lBQVAsNkJBQU87WUFHVCxlQUFhO1lBQWIsZ0NBQWE7WUFPbEMsZUFDSjtZQURJLDRLQUNKO1lBRUksZUFDSjtZQURJLDJLQUNKO1lBRUksZUFDSjtZQURJLDBLQUNKOzt1Q0Q5QmhCO0NBa0NDLEFBN0JELElBNkJDO1NBeEJZLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUN2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtIZWxwZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcic7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItY29udmVyc2F0aW9uLXN1Y2Nlc3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb252ZXJzYXRpb24tc3VjY2Vzcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29udmVyc2F0aW9uLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25TdWNjZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1cmwgPSAnJztcbiAgICBib3RJZCA9ICcnO1xuICAgIHJlc291cmNlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXJsID0gSGVscGVyLm1ha0JvdFVybCh0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zLnRleHQgfHwgJycsIHRoaXMuZ2xvYmFsU2VydmljZS5nZXRCb3RQaG9uZU51bWJlcigpKTtcbiAgICAgICAgdGhpcy5ib3RJZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucXVlcnlQYXJhbXMuYm90SWQgfHwgJyc7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgIH1cblxuICAgIG9uQ29weShpZCkge1xuICAgICAgICBIZWxwZXIuY29weURhdGEoaWQpO1xuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3VjaS1hZG1pbiddKTtcbiAgICB9XG5cbn1cbiIsIjxtYXQtZ3JpZC1saXN0IGNvbHM9XCIxXCI+XG4gICAgPGRpdiBjbGFzcz1cInB0LTAgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctMjUtcGVyIHRleHQtY2VudGVyXCIgc3R5bGU9XCJtYXJnaW46IGF1dG87XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbWItMjBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlNlYXJjaCBJY29uXCIgc3JjPVwiYXNzZXRzL3VjaS1jb25zb2xlL2ltYWdlcy9zdWNjZXNzLnN2Z1wiPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uYm90U3VjY2Vzc319XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHAtNVwiPlxuICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5ib3RVcmxNZXNzYWdlfX0gOlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+PHNwYW4gaWQ9XCJjb3B5VXJsXCI+e3t1cmx9fTwvc3Bhbj48L3N0cm9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcC01XCIgKm5nSWY9XCJib3RJZFwiPlxuICAgICAgICAgICAgICAgIHt7cmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5ib3RJZE1lc3NhZ2V9fTpcbiAgICAgICAgICAgICAgICA8c3Ryb25nPjxzcGFuIGlkPVwiY29weUlkXCI+e3tib3RJZH19PC9zcGFuPjwvc3Ryb25nPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0yMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJ1Y2ktYWN0aW9uLWJ1dHRvbiBtci0xMFwiIChjbGljayk9XCJvbkNvcHkoJ2NvcHlVcmwnKVwiPlxuICAgICAgICAgICAgICAgICAgICB7e3Jlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmJ0bj8uY29weVVybH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cInVjaS1hY3Rpb24tYnV0dG9uIG1yLTEwXCIgKGNsaWNrKT1cIm9uQ29weSgnY29weUlkJylcIj5cbiAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmNvcHlJZH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cIlwiIChjbGljayk9XCJvbkNsb3NlKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3tyZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5idG4/LmNsb3NlfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==
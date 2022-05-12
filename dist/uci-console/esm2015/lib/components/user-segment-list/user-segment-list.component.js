import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/uci.service";
import * as i2 from "@angular/router";
import * as i3 from "../../services/global.service";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "ng2-semantic-ui-v9";
function UserSegmentListComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 21);
    i0.ɵɵelementStart(1, "td", 22);
    i0.ɵɵelementStart(2, "input", 23);
    i0.ɵɵlistener("change", function UserSegmentListComponent_tr_31_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r5); const content_r2 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onCheck($event, content_r2); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 22);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 22);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const content_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", !!ctx_r0.selectedUserSegmentMap[content_r2.id]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(content_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(content_r2 == null ? null : content_r2.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(content_r2 == null ? null : content_r2.count);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 5, content_r2 == null ? null : content_r2.updated_at));
} }
const _c0 = function (a0) { return { active: a0 }; };
function UserSegmentListComponent_div_36_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵlistener("click", function UserSegmentListComponent_div_36_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); const page_r7 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.navigateToPage(page_r7); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r6.pager.currentPage === page_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r7);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function UserSegmentListComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "a", 25);
    i0.ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.navigateToPage(1); });
    i0.ɵɵtext(2, "First");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 25);
    i0.ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.navigateToPage(ctx_r12.pager.currentPage - 1); });
    i0.ɵɵtext(4, "Previous");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, UserSegmentListComponent_div_36_a_5_Template, 2, 4, "a", 26);
    i0.ɵɵelementStart(6, "a", 25);
    i0.ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.navigateToPage(ctx_r13.pager.currentPage + 1); });
    i0.ɵɵtext(7, "Next");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "a", 25);
    i0.ɵɵlistener("click", function UserSegmentListComponent_div_36_Template_a_click_8_listener() { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.navigateToPage(ctx_r14.pager.totalPages); });
    i0.ɵɵtext(9, "Last");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r1.pager.currentPage === 1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r1.pager.currentPage === 1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.pager.pages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ctx_r1.pager.currentPage === ctx_r1.pager.totalPages));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx_r1.pager.currentPage === ctx_r1.pager.totalPages));
} }
export class UserSegmentListComponent {
    constructor(uciService, route, globalService) {
        this.uciService = uciService;
        this.route = route;
        this.globalService = globalService;
        this.cancel = new EventEmitter();
        this.add = new EventEmitter();
        this.selectedUserSegments = [];
        this.userSegments = [];
        this.selectedUserSegmentMap = {};
        this.pager = {
            totalItems: 0,
            currentPage: 1,
            pageSize: 10,
            totalPages: 0,
            startPage: 0,
            endPage: 0,
            startIndex: 0,
            endIndex: 0,
            pages: []
        };
        this.pageNumber = 1;
        this.column = '';
        this.reverse = false;
    }
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        this.selectedUserSegments.forEach(selectedUserSegment => {
            this.selectedUserSegmentMap[selectedUserSegment.id] = selectedUserSegment;
        });
        this.getUserSegment();
    }
    getUserSegment() {
        const param = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };
        if (this.search) {
            param.name = this.search;
            this.uciService.searchUserSegment(param).subscribe(data => this.parseUserSegments(data));
        }
        else {
            this.uciService.fetchUserSegment(param).subscribe(data => this.parseUserSegments(data));
        }
    }
    parseUserSegments(data) {
        this.userSegments = data.data;
        this.pager.totalItems = data.total;
        this.pager.totalPages = Math.ceil(data.total / this.pager.pageSize);
        this.pager.pages = [];
        let i = 1;
        while (i <= Math.ceil(data.total / this.pager.pageSize)) {
            this.pager.pages.push(i);
            i++;
        }
    }
    navigateToPage(page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pageNumber = page;
        this.pager.currentPage = page;
        this.getUserSegment();
    }
    getSearch() {
        this.getUserSegment();
    }
    onCancel() {
        this.cancel.emit(false);
    }
    onCheck(event, userSegment) {
        if (event.target.checked) {
            this.selectedUserSegmentMap[userSegment.id] = userSegment;
        }
        else {
            delete this.selectedUserSegmentMap[userSegment.id];
        }
    }
    onAdd() {
        this.add.emit(Object.values(this.selectedUserSegmentMap));
    }
}
UserSegmentListComponent.ɵfac = function UserSegmentListComponent_Factory(t) { return new (t || UserSegmentListComponent)(i0.ɵɵdirectiveInject(i1.UciService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.GlobalService)); };
UserSegmentListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserSegmentListComponent, selectors: [["lib-user-segment-list"]], inputs: { selectedUserSegments: "selectedUserSegments" }, outputs: { cancel: "cancel", add: "add" }, decls: 37, vars: 3, consts: [[1, "uci-container"], [1, "ui", "grid"], [1, "seven", "wide", "column", "font-1-2", "font-weight-bold"], [1, "five", "wide", "column"], [1, "right-floated", "pt-0"], [1, "sb-btn", "sb-btn-normal", "sb-btn-outline-primary", "mr-10", 3, "click"], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", 3, "click"], [1, "ten", "wide", "column"], [1, "sb-search-box", "b-0", "ml-0", "large"], ["id", "search-input-container", 1, "input-div", "relative"], ["alt", "Search Icon", "src", "assets/images/search-icon.svg", 1, "search", "icon"], ["id", "keyword", "name", "filter_search", "type", "text", "placeholder", "Search", 1, "sb-search-input", "disabled", "ng-untouched", "ng-pristine", 3, "ngModel", "ngModelChange"], [1, "sb-btn", "sb-btn-normal", "disabled", 3, "click"], [1, "ui", "single", "line", "upForReviewTable", "table"], [1, "one", "wide", "UpReviewTableHeader", "sorted", "bl-0", "w-50-px"], [1, "four", "wide", "UpReviewTableHeader", "sorted", "bl-0"], [1, "two", "wide", "UpReviewTableHeader", "sorted", "bl-0", "center", "aligned"], ["class", "UpForReviewListHover", 4, "ngFor", "ngForOf"], [1, "two", "wide", "column"], [1, "pb-10"], ["class", "ui pagination menu mt-10 right-floated pt-0", 4, "ngIf"], [1, "UpForReviewListHover"], [1, "center", "aligned"], ["type", "checkbox", 3, "checked", "change"], [1, "ui", "pagination", "menu", "mt-10", "right-floated", "pt-0"], [1, "item", 3, "ngClass", "click"], ["class", "item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"]], template: function UserSegmentListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3, " Select user segment ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "button", 5);
        i0.ɵɵlistener("click", function UserSegmentListComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
        i0.ɵɵtext(7, " Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 6);
        i0.ɵɵlistener("click", function UserSegmentListComponent_Template_button_click_8_listener() { return ctx.onAdd(); });
        i0.ɵɵtext(9, " Add");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 1);
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "div", 8);
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelement(14, "img", 10);
        i0.ɵɵelementStart(15, "input", 11);
        i0.ɵɵlistener("ngModelChange", function UserSegmentListComponent_Template_input_ngModelChange_15_listener($event) { return ctx.search = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 12);
        i0.ɵɵlistener("click", function UserSegmentListComponent_Template_button_click_16_listener() { return ctx.getSearch(); });
        i0.ɵɵtext(17, "Search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "table", 13);
        i0.ɵɵelementStart(19, "thead");
        i0.ɵɵelementStart(20, "tr");
        i0.ɵɵelement(21, "th", 14);
        i0.ɵɵelementStart(22, "th", 15);
        i0.ɵɵtext(23, " Name ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "th", 15);
        i0.ɵɵtext(25, " Category ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "th", 16);
        i0.ɵɵtext(27, " Total members ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "th", 16);
        i0.ɵɵtext(29, " Last Updated On ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "tbody");
        i0.ɵɵtemplate(31, UserSegmentListComponent_tr_31_Template, 12, 7, "tr", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div", 1);
        i0.ɵɵelement(33, "div", 18);
        i0.ɵɵelementStart(34, "div", 7);
        i0.ɵɵelementStart(35, "div", 19);
        i0.ɵɵtemplate(36, UserSegmentListComponent_div_36_Template, 10, 13, "div", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("ngModel", ctx.search);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("ngForOf", ctx.userSegments);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.pager.pages);
    } }, directives: [i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.NgForOf, i5.NgIf, i6.ɵbi, i5.NgClass], pipes: [i5.DatePipe], styles: [".filter_search[_ngcontent-%COMP%]{border-radius:25px!important}.ellipsis-icon[_ngcontent-%COMP%]{font-size:1.2rem}.w-50-px[_ngcontent-%COMP%]{width:50px!important}.font-1-5[_ngcontent-%COMP%]{font-size:1.5rem}.font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserSegmentListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-user-segment-list',
                templateUrl: './user-segment-list.component.html',
                styleUrls: ['./user-segment-list.component.css']
            }]
    }], function () { return [{ type: i1.UciService }, { type: i2.Router }, { type: i3.GlobalService }]; }, { cancel: [{
            type: Output
        }], add: [{
            type: Output
        }], selectedUserSegments: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXItc2VnbWVudC1saXN0L3VzZXItc2VnbWVudC1saXN0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXItc2VnbWVudC1saXN0L3VzZXItc2VnbWVudC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUM2Q3JFLDhCQUNJO0lBQUEsOEJBQ0k7SUFBQSxpQ0FDSjtJQUQ0RSxvUEFBbUM7SUFBM0csaUJBQ0o7SUFBQSxpQkFBSztJQUNMLDBCQUFJO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSztJQUN6QiwwQkFBSTtJQUFBLFlBQXFCO0lBQUEsaUJBQUs7SUFDOUIsOEJBQTJCO0lBQUEsWUFBa0I7SUFBQSxpQkFBSztJQUNsRCw4QkFBMkI7SUFBQSxhQUE4Qjs7SUFBQSxpQkFBSztJQUNsRSxpQkFBSzs7OztJQU4wQixlQUFnRDtJQUFoRCx3RUFBZ0Q7SUFFdkUsZUFBZ0I7SUFBaEIscUNBQWdCO0lBQ2hCLGVBQXFCO0lBQXJCLHFFQUFxQjtJQUNFLGVBQWtCO0lBQWxCLGtFQUFrQjtJQUNsQixlQUE4QjtJQUE5Qiw4RkFBOEI7Ozs7O0lBYWpELDZCQUMrQztJQUE1Qyx1T0FBOEI7SUFBYyxZQUFRO0lBQUEsaUJBQUk7Ozs7SUFEdkIsMEZBQTZDO0lBQ2xDLGVBQVE7SUFBUiw2QkFBUTs7Ozs7SUFOM0QsK0JBQ0k7SUFBQSw2QkFDZ0M7SUFBN0IsMExBQXdCLENBQUMsS0FBRztJQUFDLHFCQUFLO0lBQUEsaUJBQUk7SUFDekMsNkJBQ21EO0lBQWhELHNOQUE0QyxDQUFDLEtBQUU7SUFBQyx3QkFB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b0Q7UUFBcEQsMENBQW9EO1FBZXBCLGVBQW1CO1FBQW5CLHNDQUFtQjs7a0REbEQvRSx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ25EOztrQkFFSSxNQUFNOztrQkFDTixNQUFNOztrQkFDTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItdXNlci1zZWdtZW50LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLXNlZ21lbnQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZWdtZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQElucHV0KCkgc2VsZWN0ZWRVc2VyU2VnbWVudHMgPSBbXTtcblxuICAgIHVzZXJTZWdtZW50cyA9IFtdO1xuICAgIHNlbGVjdGVkVXNlclNlZ21lbnRNYXAgPSB7fTtcbiAgICBwYWdlcjogYW55ID0ge1xuICAgICAgICB0b3RhbEl0ZW1zOiAwLFxuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICB0b3RhbFBhZ2VzOiAwLFxuICAgICAgICBzdGFydFBhZ2U6IDAsXG4gICAgICAgIGVuZFBhZ2U6IDAsXG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXG4gICAgICAgIGVuZEluZGV4OiAwLFxuICAgICAgICBwYWdlczogW11cbiAgICB9O1xuICAgIHBhZ2VOdW1iZXIgPSAxO1xuICAgIGNvbHVtbiA9ICcnO1xuICAgIHJldmVyc2UgPSBmYWxzZTtcbiAgICBxdWVyeVBhcmFtczogYW55O1xuICAgIHNlYXJjaDtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJTZWdtZW50cy5mb3JFYWNoKHNlbGVjdGVkVXNlclNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJTZWdtZW50TWFwW3NlbGVjdGVkVXNlclNlZ21lbnQuaWRdID0gc2VsZWN0ZWRVc2VyU2VnbWVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRVc2VyU2VnbWVudCgpO1xuICAgIH1cblxuICAgIGdldFVzZXJTZWdtZW50KCkge1xuICAgICAgICBjb25zdCBwYXJhbTogYW55ID0ge1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlci5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHBlclBhZ2U6IHRoaXMucGFnZXIucGFnZVNpemVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICAgIHBhcmFtLm5hbWUgPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5zZWFyY2hVc2VyU2VnbWVudChwYXJhbSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVVzZXJTZWdtZW50cyhkYXRhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5mZXRjaFVzZXJTZWdtZW50KHBhcmFtKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVXNlclNlZ21lbnRzKGRhdGEpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VVc2VyU2VnbWVudHMoZGF0YSkge1xuICAgICAgICB0aGlzLnVzZXJTZWdtZW50cyA9IGRhdGEuZGF0YTtcbiAgICAgICAgdGhpcy5wYWdlci50b3RhbEl0ZW1zID0gZGF0YS50b3RhbDtcbiAgICAgICAgdGhpcy5wYWdlci50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEudG90YWwgLyB0aGlzLnBhZ2VyLnBhZ2VTaXplKTtcbiAgICAgICAgdGhpcy5wYWdlci5wYWdlcyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgIHdoaWxlIChpIDw9IE1hdGguY2VpbChkYXRhLnRvdGFsIC8gdGhpcy5wYWdlci5wYWdlU2l6ZSkpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZXIucGFnZXMucHVzaChpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9QYWdlKHBhZ2U6IG51bWJlcik6IHVuZGVmaW5lZCB8IHZvaWQge1xuICAgICAgICBpZiAocGFnZSA8IDEgfHwgcGFnZSA+IHRoaXMucGFnZXIudG90YWxQYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZXIuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLmdldFVzZXJTZWdtZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoKCkge1xuICAgICAgICB0aGlzLmdldFVzZXJTZWdtZW50KCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQ2hlY2soZXZlbnQsIHVzZXJTZWdtZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJTZWdtZW50TWFwW3VzZXJTZWdtZW50LmlkXSA9IHVzZXJTZWdtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRVc2VyU2VnbWVudE1hcFt1c2VyU2VnbWVudC5pZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZCgpIHtcbiAgICAgICAgdGhpcy5hZGQuZW1pdChPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWRVc2VyU2VnbWVudE1hcCkpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ1Y2ktY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNldmVuIHdpZGUgY29sdW1uIGZvbnQtMS0yIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgIFNlbGVjdCB1c2VyIHNlZ21lbnRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaXZlIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtZmxvYXRlZCBwdC0wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNiLWJ0biBzYi1idG4tbm9ybWFsIHNiLWJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMTBcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPiBDYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ItYnRuIHNiLWJ0bi1ub3JtYWwgc2ItYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25BZGQoKVwiPiBBZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGVuIHdpZGUgY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Itc2VhcmNoLWJveCBiLTAgbWwtMCBsYXJnZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1kaXYgcmVsYXRpdmVcIiBpZD1cInNlYXJjaC1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJTZWFyY2ggSWNvblwiIGNsYXNzPVwic2VhcmNoIGljb25cIiBzcmM9XCJhc3NldHMvaW1hZ2VzL3NlYXJjaC1pY29uLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzYi1zZWFyY2gtaW5wdXQgZGlzYWJsZWQgbmctdW50b3VjaGVkIG5nLXByaXN0aW5lXCIgaWQ9XCJrZXl3b3JkXCIgbmFtZT1cImZpbHRlcl9zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNiLWJ0biBzYi1idG4tbm9ybWFsIGRpc2FibGVkXCIgKGNsaWNrKT1cImdldFNlYXJjaCgpXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHRhYmxlIGNsYXNzPVwidWkgc2luZ2xlIGxpbmUgdXBGb3JSZXZpZXdUYWJsZSB0YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cIm9uZSB3aWRlIFVwUmV2aWV3VGFibGVIZWFkZXIgc29ydGVkIGJsLTAgdy01MC1weFwiPlxuXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiZm91ciB3aWRlIFVwUmV2aWV3VGFibGVIZWFkZXIgc29ydGVkIGJsLTBcIj5cbiAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiZm91ciB3aWRlIFVwUmV2aWV3VGFibGVIZWFkZXIgc29ydGVkIGJsLTBcIj5cbiAgICAgICAgICAgICAgICBDYXRlZ29yeVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInR3byB3aWRlIFVwUmV2aWV3VGFibGVIZWFkZXIgc29ydGVkIGJsLTAgY2VudGVyIGFsaWduZWRcIj5cbiAgICAgICAgICAgICAgICBUb3RhbCBtZW1iZXJzXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwidHdvIHdpZGUgVXBSZXZpZXdUYWJsZUhlYWRlciBzb3J0ZWQgYmwtMCBjZW50ZXIgYWxpZ25lZFwiPlxuICAgICAgICAgICAgICAgIExhc3QgVXBkYXRlZCBPblxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgY2xhc3M9XCJVcEZvclJldmlld0xpc3RIb3ZlclwiICpuZ0Zvcj1cImxldCBjb250ZW50IG9mIHVzZXJTZWdtZW50czsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNlbnRlciBhbGlnbmVkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cIiEhc2VsZWN0ZWRVc2VyU2VnbWVudE1hcFtjb250ZW50LmlkXVwiIChjaGFuZ2UpPVwib25DaGVjaygkZXZlbnQsIGNvbnRlbnQpXCI+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPnt7Y29udGVudC5uYW1lfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7Y29udGVudD8uY2F0ZWdvcnl9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJjZW50ZXIgYWxpZ25lZFwiPnt7Y29udGVudD8uY291bnR9fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJjZW50ZXIgYWxpZ25lZFwiPnt7Y29udGVudD8udXBkYXRlZF9hdCB8IGRhdGV9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICA8ZGl2IGNsYXNzPVwidWkgZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdvIHdpZGUgY29sdW1uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW4gd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBwYWdpbmF0aW9uIG1lbnUgbXQtMTAgcmlnaHQtZmxvYXRlZCBwdC0wXCIgKm5nSWY9XCJwYWdlci5wYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2U9PT0xIH1cIiBjbGFzcz1cIml0ZW0gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5hdmlnYXRlVG9QYWdlKDEpIFwiPkZpcnN0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2U9PT0xIH1cIiBjbGFzcz1cIml0ZW0gXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5hdmlnYXRlVG9QYWdlKHBhZ2VyLmN1cnJlbnRQYWdlIC0gMSlcIj5QcmV2aW91czwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXIucGFnZXNcIiBbbmdDbGFzc109XCJ7YWN0aXZlOnBhZ2VyLmN1cnJlbnRQYWdlPT09cGFnZX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmF2aWdhdGVUb1BhZ2UocGFnZSlcIiBjbGFzcz1cIml0ZW1cIj57e3BhZ2V9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwie2Rpc2FibGVkOnBhZ2VyLmN1cnJlbnRQYWdlPT09IHBhZ2VyLnRvdGFsUGFnZXN9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm5hdmlnYXRlVG9QYWdlKHBhZ2VyLmN1cnJlbnRQYWdlICsgMSlcIiBjbGFzcz1cIml0ZW1cIj5OZXh0PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2U9PT0gcGFnZXIudG90YWxQYWdlc31cIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmF2aWdhdGVUb1BhZ2UocGFnZXIudG90YWxQYWdlcylcIiBjbGFzcz1cIml0ZW0gXCI+TGFzdDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG4iXX0=
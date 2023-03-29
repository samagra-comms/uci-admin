import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
var UserSegmentListComponent = /** @class */ (function () {
    function UserSegmentListComponent(uciService, route, globalService) {
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
    UserSegmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService = this.globalService.getResourceService();
        this.selectedUserSegments.forEach(function (selectedUserSegment) {
            _this.selectedUserSegmentMap[selectedUserSegment.id] = selectedUserSegment;
        });
        this.getUserSegment();
    };
    UserSegmentListComponent.prototype.getUserSegment = function () {
        var _this = this;
        var param = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };
        if (this.search) {
            param.name = this.search;
            this.uciService.searchUserSegment(param).subscribe(function (data) { return _this.parseUserSegments(data); });
        }
        else {
            this.uciService.fetchUserSegment(param).subscribe(function (data) { return _this.parseUserSegments(data); });
        }
    };
    UserSegmentListComponent.prototype.parseUserSegments = function (data) {
        this.userSegments = data.data;
        this.pager.totalItems = data.total;
        this.pager.totalPages = Math.ceil(data.total / this.pager.pageSize);
        this.pager.pages = [];
        var i = 1;
        while (i <= Math.ceil(data.total / this.pager.pageSize)) {
            this.pager.pages.push(i);
            i++;
        }
    };
    UserSegmentListComponent.prototype.navigateToPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pageNumber = page;
        this.pager.currentPage = page;
        this.getUserSegment();
    };
    UserSegmentListComponent.prototype.getSearch = function () {
        this.getUserSegment();
    };
    UserSegmentListComponent.prototype.onCancel = function () {
        this.cancel.emit(false);
    };
    UserSegmentListComponent.prototype.onCheck = function (event, userSegment) {
        if (event.target.checked) {
            this.selectedUserSegmentMap[userSegment.id] = userSegment;
        }
        else {
            delete this.selectedUserSegmentMap[userSegment.id];
        }
    };
    UserSegmentListComponent.prototype.onAdd = function () {
        this.add.emit(Object.values(this.selectedUserSegmentMap));
    };
    UserSegmentListComponent.ctorParameters = function () { return [
        { type: UciService },
        { type: Router },
        { type: GlobalService }
    ]; };
    __decorate([
        Output()
    ], UserSegmentListComponent.prototype, "cancel", void 0);
    __decorate([
        Output()
    ], UserSegmentListComponent.prototype, "add", void 0);
    __decorate([
        Input()
    ], UserSegmentListComponent.prototype, "selectedUserSegments", void 0);
    UserSegmentListComponent = __decorate([
        Component({
            selector: 'lib-user-segment-list',
            template: "<div class=\"uci-container\">\n    <div class=\"ui grid\">\n        <div class=\"seven wide column font-1-2 font-weight-bold\">\n            Select user segment\n        </div>\n        <div class=\"five wide column\">\n            <div class=\"right-floated pt-0\">\n                <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary mr-10\" (click)=\"onCancel()\"> Cancel</button>\n                <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"onAdd()\"> Add</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"ui grid\">\n        <div class=\"ten wide column\">\n            <div class=\"sb-search-box b-0 ml-0 large\">\n                <div class=\"input-div relative\" id=\"search-input-container\">\n                    <img alt=\"Search Icon\" class=\"search icon\" src=\"assets/images/search-icon.svg\">\n                    <input class=\"sb-search-input disabled ng-untouched ng-pristine\" id=\"keyword\" name=\"filter_search\"\n                           [(ngModel)]=\"search\" type=\"text\" placeholder=\"Search\">\n                </div>\n                <button class=\"sb-btn sb-btn-normal disabled\" (click)=\"getSearch()\">Search</button>\n            </div>\n        </div>\n    </div>\n    <table class=\"ui single line upForReviewTable table\">\n        <thead>\n        <tr>\n            <th class=\"one wide UpReviewTableHeader sorted bl-0 w-50-px\">\n\n            </th>\n            <th class=\"four wide UpReviewTableHeader sorted bl-0\">\n                Name\n            </th>\n            <th class=\"four wide UpReviewTableHeader sorted bl-0\">\n                Category\n            </th>\n            <th class=\"two wide UpReviewTableHeader sorted bl-0 center aligned\">\n                Total members\n            </th>\n            <th class=\"two wide UpReviewTableHeader sorted bl-0 center aligned\">\n                Last Updated On\n            </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr class=\"UpForReviewListHover\" *ngFor=\"let content of userSegments; let i = index;\">\n            <td class=\"center aligned\">\n                <input type=\"checkbox\" [checked]=\"!!selectedUserSegmentMap[content.id]\" (change)=\"onCheck($event, content)\">\n            </td>\n            <td>{{content.name}}</td>\n            <td>{{content?.category}}</td>\n            <td class=\"center aligned\">{{content?.count}}</td>\n            <td class=\"center aligned\">{{content?.updated_at | date}}</td>\n        </tr>\n        </tbody>\n    </table>\n    <div class=\"ui grid\">\n        <div class=\"two wide column\"></div>\n        <div class=\"ten wide column\">\n            <div class=\"pb-10\">\n                <div class=\"ui pagination menu mt-10 right-floated pt-0\" *ngIf=\"pager.pages\">\n                    <a [ngClass]=\"{disabled:pager.currentPage===1 }\" class=\"item \"\n                       (click)=\"navigateToPage(1) \">First</a>\n                    <a [ngClass]=\"{disabled:pager.currentPage===1 }\" class=\"item \"\n                       (click)=\"navigateToPage(pager.currentPage - 1)\">Previous</a>\n                    <a *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage===page}\"\n                       (click)=\"navigateToPage(page)\" class=\"item\">{{page}}</a>\n                    <a [ngClass]=\"{disabled:pager.currentPage=== pager.totalPages}\"\n                       (click)=\"navigateToPage(pager.currentPage + 1)\" class=\"item\">Next</a>\n                    <a [ngClass]=\"{disabled:pager.currentPage=== pager.totalPages}\"\n                       (click)=\"navigateToPage(pager.totalPages)\" class=\"item \">Last</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n",
            styles: [".filter_search{border-radius:25px!important}.ellipsis-icon{font-size:1.2rem}.w-50-px{width:50px!important}.font-1-5{font-size:1.5rem}.font-1-2{font-size:1.2rem}"]
        })
    ], UserSegmentListComponent);
    return UserSegmentListComponent;
}());
export { UserSegmentListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXItc2VnbWVudC1saXN0L3VzZXItc2VnbWVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQU81RDtJQXlCSSxrQ0FDWSxVQUFzQixFQUN0QixLQUFhLEVBQ2IsYUFBNEI7UUFGNUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUEzQjlCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3JDLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUVuQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFRO1lBQ1QsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLENBQUM7WUFDYixTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFLENBQUM7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNGLGVBQVUsR0FBRyxD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QUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO1NBQzdEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEQ7SUFDTCxDQUFDO0lBRUQsd0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkF4RXVCLFVBQVU7Z0JBQ2YsTUFBTTtnQkFDRSxhQUFhOztJQTNCOUI7UUFBVCxNQUFNLEVBQUU7NERBQXNDO0lBQ3JDO1FBQVQsTUFBTSxFQUFFO3lEQUErQjtJQUMvQjtRQUFSLEtBQUssRUFBRTswRUFBMkI7SUFIMUIsd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsOHNIQUFpRDs7U0FFcEQsQ0FBQztPQUNXLHdCQUF3QixDQW1HcEM7SUFBRCwrQkFBQztDQUFBLEFBbkdELElBbUdDO1NBbkdZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXVzZXItc2VnbWVudC1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXItc2VnbWVudC1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyU2VnbWVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkVXNlclNlZ21lbnRzID0gW107XG5cbiAgICB1c2VyU2VnbWVudHMgPSBbXTtcbiAgICBzZWxlY3RlZFVzZXJTZWdtZW50TWFwID0ge307XG4gICAgcGFnZXI6IGFueSA9IHtcbiAgICAgICAgdG90YWxJdGVtczogMCxcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgdG90YWxQYWdlczogMCxcbiAgICAgICAgc3RhcnRQYWdlOiAwLFxuICAgICAgICBlbmRQYWdlOiAwLFxuICAgICAgICBzdGFydEluZGV4OiAwLFxuICAgICAgICBlbmRJbmRleDogMCxcbiAgICAgICAgcGFnZXM6IFtdXG4gICAgfTtcbiAgICBwYWdlTnVtYmVyID0gMTtcbiAgICBjb2x1bW4gPSAnJztcbiAgICByZXZlcnNlID0gZmFsc2U7XG4gICAgcXVlcnlQYXJhbXM6IGFueTtcbiAgICBzZWFyY2g7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyU2VnbWVudHMuZm9yRWFjaChzZWxlY3RlZFVzZXJTZWdtZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyU2VnbWVudE1hcFtzZWxlY3RlZFVzZXJTZWdtZW50LmlkXSA9IHNlbGVjdGVkVXNlclNlZ21lbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0VXNlclNlZ21lbnQoKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyU2VnbWVudCgpIHtcbiAgICAgICAgY29uc3QgcGFyYW06IGFueSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZXIuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwZXJQYWdlOiB0aGlzLnBhZ2VyLnBhZ2VTaXplXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgICBwYXJhbS5uYW1lID0gdGhpcy5zZWFyY2g7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2Uuc2VhcmNoVXNlclNlZ21lbnQocGFyYW0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VVc2VyU2VnbWVudHMoZGF0YSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UuZmV0Y2hVc2VyU2VnbWVudChwYXJhbSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVVzZXJTZWdtZW50cyhkYXRhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlVXNlclNlZ21lbnRzKGRhdGEpIHtcbiAgICAgICAgdGhpcy51c2VyU2VnbWVudHMgPSBkYXRhLmRhdGE7XG4gICAgICAgIHRoaXMucGFnZXIudG90YWxJdGVtcyA9IGRhdGEudG90YWw7XG4gICAgICAgIHRoaXMucGFnZXIudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnRvdGFsIC8gdGhpcy5wYWdlci5wYWdlU2l6ZSk7XG4gICAgICAgIHRoaXMucGFnZXIucGFnZXMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICB3aGlsZSAoaSA8PSBNYXRoLmNlaWwoZGF0YS50b3RhbCAvIHRoaXMucGFnZXIucGFnZVNpemUpKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VyLnBhZ2VzLnB1c2goaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpOiB1bmRlZmluZWQgfCB2b2lkIHtcbiAgICAgICAgaWYgKHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLnBhZ2VyLnRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VyLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5nZXRVc2VyU2VnbWVudCgpO1xuICAgIH1cblxuICAgIGdldFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5nZXRVc2VyU2VnbWVudCgpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLmNhbmNlbC5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBvbkNoZWNrKGV2ZW50LCB1c2VyU2VnbWVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyU2VnbWVudE1hcFt1c2VyU2VnbWVudC5pZF0gPSB1c2VyU2VnbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkVXNlclNlZ21lbnRNYXBbdXNlclNlZ21lbnQuaWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZGQoKSB7XG4gICAgICAgIHRoaXMuYWRkLmVtaXQoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkVXNlclNlZ21lbnRNYXApKTtcbiAgICB9XG59XG4iXX0=
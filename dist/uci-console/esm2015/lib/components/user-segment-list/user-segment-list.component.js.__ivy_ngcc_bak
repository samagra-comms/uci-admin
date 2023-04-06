import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
let UserSegmentListComponent = class UserSegmentListComponent {
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
};
UserSegmentListComponent.ctorParameters = () => [
    { type: UciService },
    { type: Router },
    { type: GlobalService }
];
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
export { UserSegmentListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3VzZXItc2VnbWVudC1saXN0L3VzZXItc2VnbWVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQU81RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQXlCakMsWUFDWSxVQUFzQixFQUN0QixLQUFhLEVBQ2IsYUFBNEI7UUFGNUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUEzQjlCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3JDLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUVuQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFRO1lBQ1QsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLENBQUM7WUFDYixTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFLENBQUM7WUFDYixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxF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LENBQUMsR0FBRyxXQUFXLENBQUM7U0FDN0Q7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDSixDQUFBOztZQXpFMkIsVUFBVTtZQUNmLE1BQU07WUFDRSxhQUFhOztBQTNCOUI7SUFBVCxNQUFNLEVBQUU7d0RBQXNDO0FBQ3JDO0lBQVQsTUFBTSxFQUFFO3FEQUErQjtBQUMvQjtJQUFSLEtBQUssRUFBRTtzRUFBMkI7QUFIMUIsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsOHNIQUFpRDs7S0FFcEQsQ0FBQztHQUNXLHdCQUF3QixDQW1HcEM7U0FuR1ksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItdXNlci1zZWdtZW50LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLXNlZ21lbnQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdXNlci1zZWdtZW50LWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZWdtZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQElucHV0KCkgc2VsZWN0ZWRVc2VyU2VnbWVudHMgPSBbXTtcblxuICAgIHVzZXJTZWdtZW50cyA9IFtdO1xuICAgIHNlbGVjdGVkVXNlclNlZ21lbnRNYXAgPSB7fTtcbiAgICBwYWdlcjogYW55ID0ge1xuICAgICAgICB0b3RhbEl0ZW1zOiAwLFxuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICB0b3RhbFBhZ2VzOiAwLFxuICAgICAgICBzdGFydFBhZ2U6IDAsXG4gICAgICAgIGVuZFBhZ2U6IDAsXG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXG4gICAgICAgIGVuZEluZGV4OiAwLFxuICAgICAgICBwYWdlczogW11cbiAgICB9O1xuICAgIHBhZ2VOdW1iZXIgPSAxO1xuICAgIGNvbHVtbiA9ICcnO1xuICAgIHJldmVyc2UgPSBmYWxzZTtcbiAgICBxdWVyeVBhcmFtczogYW55O1xuICAgIHNlYXJjaDtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJTZWdtZW50cy5mb3JFYWNoKHNlbGVjdGVkVXNlclNlZ21lbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJTZWdtZW50TWFwW3NlbGVjdGVkVXNlclNlZ21lbnQuaWRdID0gc2VsZWN0ZWRVc2VyU2VnbWVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRVc2VyU2VnbWVudCgpO1xuICAgIH1cblxuICAgIGdldFVzZXJTZWdtZW50KCkge1xuICAgICAgICBjb25zdCBwYXJhbTogYW55ID0ge1xuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlci5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHBlclBhZ2U6IHRoaXMucGFnZXIucGFnZVNpemVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICAgIHBhcmFtLm5hbWUgPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5zZWFyY2hVc2VyU2VnbWVudChwYXJhbSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVVzZXJTZWdtZW50cyhkYXRhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5mZXRjaFVzZXJTZWdtZW50KHBhcmFtKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVXNlclNlZ21lbnRzKGRhdGEpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VVc2VyU2VnbWVudHMoZGF0YSkge1xuICAgICAgICB0aGlzLnVzZXJTZWdtZW50cyA9IGRhdGEuZGF0YTtcbiAgICAgICAgdGhpcy5wYWdlci50b3RhbEl0ZW1zID0gZGF0YS50b3RhbDtcbiAgICAgICAgdGhpcy5wYWdlci50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEudG90YWwgLyB0aGlzLnBhZ2VyLnBhZ2VTaXplKTtcbiAgICAgICAgdGhpcy5wYWdlci5wYWdlcyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgIHdoaWxlIChpIDw9IE1hdGguY2VpbChkYXRhLnRvdGFsIC8gdGhpcy5wYWdlci5wYWdlU2l6ZSkpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZXIucGFnZXMucHVzaChpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlVG9QYWdlKHBhZ2U6IG51bWJlcik6IHVuZGVmaW5lZCB8IHZvaWQge1xuICAgICAgICBpZiAocGFnZSA8IDEgfHwgcGFnZSA+IHRoaXMucGFnZXIudG90YWxQYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZXIuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLmdldFVzZXJTZWdtZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0U2VhcmNoKCkge1xuICAgICAgICB0aGlzLmdldFVzZXJTZWdtZW50KCk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQ2hlY2soZXZlbnQsIHVzZXJTZWdtZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXJTZWdtZW50TWFwW3VzZXJTZWdtZW50LmlkXSA9IHVzZXJTZWdtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRVc2VyU2VnbWVudE1hcFt1c2VyU2VnbWVudC5pZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZCgpIHtcbiAgICAgICAgdGhpcy5hZGQuZW1pdChPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWRVc2VyU2VnbWVudE1hcCkpO1xuICAgIH1cbn1cbiJdfQ==
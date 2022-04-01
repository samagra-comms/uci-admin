import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UciService} from '../../services/uci.service';
import {Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';

@Component({
    selector: 'lib-user-segment-list',
    templateUrl: './user-segment-list.component.html',
    styleUrls: ['./user-segment-list.component.css']
})
export class UserSegmentListComponent implements OnInit {
    @Output() cancel = new EventEmitter<boolean>();
    @Output() add = new EventEmitter<any>();
    @Input() selectedUserSegments = [];

    userSegments = [];
    selectedUserSegmentMap = {};
    pager: any = {
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
    pageNumber = 1;
    column = '';
    reverse = false;
    queryParams: any;
    search;
    resourceService;

    constructor(
        private uciService: UciService,
        private route: Router,
        private globalService: GlobalService
    ) {
    }

    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        this.selectedUserSegments.forEach(selectedUserSegment => {
            this.selectedUserSegmentMap[selectedUserSegment.id] = selectedUserSegment;
        });

        this.getUserSegment();
    }

    getUserSegment() {
        const param: any = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };

        if (this.search) {
            param.name = this.search;
            this.uciService.searchUserSegment(param).subscribe(
                data => this.parseUserSegments(data)
            );
        } else {
            this.uciService.fetchUserSegment(param).subscribe(
                data => this.parseUserSegments(data)
            );
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

    navigateToPage(page: number): undefined | void {
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
        } else {
            delete this.selectedUserSegmentMap[userSegment.id];
        }
    }

    onAdd() {
        this.add.emit(Object.values(this.selectedUserSegmentMap));
    }
}

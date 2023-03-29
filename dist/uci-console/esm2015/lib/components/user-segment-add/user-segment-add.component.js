import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { UciGraphQlService } from '../../services/uci-graph-ql.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
let UserSegmentAddComponent = class UserSegmentAddComponent {
    constructor(uciService, fb, uciGraphQlService, globalService) {
        this.uciService = uciService;
        this.fb = fb;
        this.uciGraphQlService = uciGraphQlService;
        this.globalService = globalService;
        this.cancel = new EventEmitter();
        this.add = new EventEmitter();
        this.userSegment = {};
        this.isLoaderShow = false;
        this.districts = [];
        this.blocks = [];
        this.schools = [];
        this.clusters = [];
        this.roles = [];
        this.boards = [];
        this.grade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
        this.subjects = [];
        this.state = 'Haryana';
    }
    ngOnInit() {
        this.resourceService = this.globalService.getResourceService();
        this.getUciDistrict();
        this.getUciRole();
        this.getUciBoard();
        this.userSegmentForm = this.fb.group({
            name: ['', Validators.required],
            description: [''],
            district: [''],
            block: [''],
            cluster: [''],
            school: [''],
            role: [''],
            board: [''],
            grade: [''],
            subject: ['']
        });
        this.userSegmentForm.get('district').valueChanges.subscribe(item => {
            if (item) {
                this.userSegmentForm.get('block').patchValue('');
                this.blocks = [];
                this.userSegmentForm.get('cluster').patchValue('');
                this.userSegmentForm.get('school').patchValue('');
                this.schools = [];
                this.clusters = [];
                this.getUciBlock();
            }
        });
        this.userSegmentForm.get('block').valueChanges.subscribe(item => {
            if (item) {
                this.userSegmentForm.get('cluster').patchValue('');
                this.userSegmentForm.get('school').patchValue('');
                this.schools = [];
                this.clusters = [];
                this.getUciCluster();
                this.getUciSchoolDetails();
            }
        });
    }
    onCancel() {
        this.cancel.emit(false);
    }
    onAdd() {
        if (this.userSegmentForm.invalid) {
            return;
        }
        this.isLoaderShow = true;
        const formValue = this.userSegmentForm.value;
        const locationData = [];
        const blockData = [];
        const districtData = [];
        for (const school of this.schools) {
            if (formValue.school.indexOf(school.school) !== -1) {
                locationData.push(school);
                if (blockData.indexOf(school.block) === -1) {
                    blockData.push(school.block);
                    districtData.push(school.district);
                }
            }
            if (locationData.length === formValue.school) {
                break;
            }
        }
        if (blockData.length < formValue.block.length) {
            for (const block of this.blocks) {
                if (formValue.block.indexOf(block.block) !== -1 && blockData.indexOf(block.block) === -1) {
                    locationData.push(block);
                    blockData.push(block.block);
                    districtData.push(block.district);
                }
                if (blockData.length === formValue.block) {
                    break;
                }
            }
        }
        if (districtData.length < formValue.district.length) {
            for (const district of this.districts) {
                if (formValue.district.indexOf(district.district) !== -1 && districtData.indexOf(district.district) === -1) {
                    locationData.push(district);
                }
            }
        }
        const param = {
            data: {
                userLocation: locationData,
                roles: formValue.role,
                userType: {
                    type: 'student'
                },
                framework: {
                    board: formValue.board,
                    gradeLevel: formValue.grade
                }
            }
        };
        this.uciService.userSegmentQueryBuilder(param).subscribe(response => {
            if (response) {
                const items = Object.assign(Object.assign({}, response), { name: formValue.name, description: formValue.description });
                this.uciService.createUserSegment({ data: items }).subscribe((data) => {
                    this.isLoaderShow = false;
                    this.afterAdd(data.inserted);
                }, err => {
                    this.isLoaderShow = false;
                });
            }
        }, error => {
            this.isLoaderShow = false;
        });
    }
    afterAdd(data) {
        this.add.emit(data);
    }
    getUciState() {
        this.uciGraphQlService.getState().subscribe(res => {
        });
    }
    getUciDistrict() {
        const params = {
            state: this.state
        };
        this.uciGraphQlService.getDistrict(params).subscribe((res) => {
            this.districts = [];
            if (res && res.data && res.data.organisation && res.data.organisation.length) {
                this.districts = res.data.organisation;
            }
        });
    }
    getUciBlock() {
        const formVal = this.userSegmentForm.value;
        const params = {
            state: this.state, district: formVal.district
        };
        this.uciGraphQlService.getBlock(params).subscribe((res) => {
            this.blocks = [];
            if (res && res.data && res.data.blocks && res.data.blocks.length) {
                this.blocks = res.data.blocks;
            }
        });
    }
    getUciCluster() {
        const formVal = this.userSegmentForm.value;
        const params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getClusters(params).subscribe((res) => {
            this.clusters = [];
            if (res && res.data && res.data.clusters && res.data.clusters.length) {
                if (res.data.clusters[0].cluster) {
                    this.clusters = res.data.clusters;
                }
            }
        });
    }
    getUciSchoolDetails() {
        const formVal = this.userSegmentForm.value;
        const params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getSchoolDetails(params).subscribe((res) => {
            this.schools = [];
            if (res && res.data && res.data.schools && res.data.schools.length) {
                this.schools = res.data.schools;
            }
        });
    }
    getUciRole() {
        this.uciGraphQlService.getRole().subscribe((res) => {
            if (res && res.data && res.data.role && res.data.role.length) {
                this.roles = res.data.role;
            }
        });
    }
    getUciBoard() {
        this.uciGraphQlService.getBoards().subscribe((res) => {
            if (res && res.data && res.data.board && res.data.board.length) {
                this.boards = res.data.board;
            }
        });
    }
};
UserSegmentAddComponent.ctorParameters = () => [
    { type: UciService },
    { type: FormBuilder },
    { type: UciGraphQlService },
    { type: GlobalService }
];
__decorate([
    Output()
], UserSegmentAddComponent.prototype, "cancel", void 0);
__decorate([
    Output()
], UserSegmentAddComponent.prototype, "add", void 0);
UserSegmentAddComponent = __decorate([
    Component({
        selector: 'lib-user-segment-add',
        template: "<div class=\"uci-add-segment\">\n    <div class=\"ui grid\">\n        <div class=\"nine wide column font-1-2 font-weight-bold\">\n            Create new segment\n        </div>\n        <div class=\"three wide column\">\n            <div class=\"right-floated pt-0\">\n                <button class=\"sb-btn sb-btn-normal sb-btn-outline-primary mr-10\" (click)=\"onCancel()\">\n                    Cancel\n                </button>\n                <ng-container *ngIf=\"isLoaderShow; else addBtn\">\n                    <button class=\"sb-btn sb-btn-normal sb-btn-primary p-0\">\n                        <div class=\"ui active tiny inline loader\"></div>\n                    </button>\n                </ng-container>\n                <ng-template #addBtn>\n                    <button class=\"sb-btn sb-btn-normal sb-btn-primary\" (click)=\"onAdd()\"\n                            [disabled]=\"userSegmentForm.invalid\">\n                        Add\n                    </button>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"ten wide column font-1-2\">\n        <form class=\"ui form user-segment-form\" [formGroup]=\"userSegmentForm\">\n            <div class=\"field\">\n                <label>Name <sup><i class=\"asterisk icon asterisk-color\"></i></sup></label>\n                <input type=\"text\" name=\"name\" placeholder=\"Name\" formControlName=\"name\">\n            </div>\n            <div class=\"field\">\n                <label>Description</label>\n                <textarea name=\"description\" formControlName=\"description\" placeholder=\"Enter description\"></textarea>\n            </div>\n            <div class=\"ui divider mt-30\"></div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                    <label>District</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"district\"\n                                          [options]=\"districts\"\n                                          #multiSelectDistrict>\n                            <sui-select-option *ngFor=\"let option of multiSelectDistrict.filteredOptions\"\n                                               [value]=\"option.district\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n\n                </div>\n                <div class=\"field\">\n                    <label>Block</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"block\"\n                                          [options]=\"blocks\"\n                                          #multiSelectBlock>\n                            <sui-select-option *ngFor=\"let option of multiSelectBlock.filteredOptions\"\n                                               [value]=\"option.block\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\" *ngIf=\"clusters.length\">\n                    <label>Cluster</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"cluster\"\n                                          [options]=\"clusters\"\n                                          #multiSelectCluster>\n                            <sui-select-option *ngFor=\"let option of multiSelectCluster.filteredOptions\"\n                                               [value]=\"option.cluster\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <label>School</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"school\"\n                                          [options]=\"schools\"\n                                          #multiSelectSchool>\n                            <sui-select-option *ngFor=\"let option of multiSelectSchool.filteredOptions\"\n                                               [value]=\"option.school\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                    <label>Role</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"role\"\n                                          [options]=\"roles\"\n                                          #multiSelectRole>\n                            <sui-select-option *ngFor=\"let option of multiSelectRole.filteredOptions\"\n                                               [value]=\"option.name\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n                <div class=\"field\">\n                    <label>Board</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"board\"\n                                          [options]=\"boards\"\n                                          #multiSelectBoard>\n                            <sui-select-option *ngFor=\"let option of multiSelectBoard.filteredOptions\"\n                                               [value]=\"option.name\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"two fields\">\n                <div class=\"field\">\n                    <label>Grade</label>\n                    <div class=\"ui segment p-0\">\n                        <sui-multi-select class=\"selection w-100\"\n                                          formControlName=\"grade\"\n                                          [options]=\"grade\"\n                                          #multiSelectGrade>\n                            <sui-select-option *ngFor=\"let option of multiSelectGrade.filteredOptions\"\n                                               [value]=\"option\">\n                            </sui-select-option>\n                        </sui-multi-select>\n                    </div>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n",
        styles: [".font-1-2{font-size:1.2rem}.user-segment-form label{font-weight:400!important}button:disabled{background:#89cff0;border-color:#89cff0}"]
    })
], UserSegmentAddComponent);
export { UserSegmentAddComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1zZWdtZW50LWFkZC91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFPNUQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFrQmhDLFlBQW9CLFVBQXNCLEVBQ3RCLEVBQWUsRUFDZixpQkFBb0MsRUFDcEMsYUFBNEI7UUFINUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXBCdEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDckMsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEMsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBRyxFQUFFLENB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SUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RELElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTs7WUEzTW1DLFVBQVU7WUFDbEIsV0FBVztZQUNJLGlCQUFpQjtZQUNyQixhQUFhOztBQXBCdEM7SUFBVCxNQUFNLEVBQUU7dURBQXNDO0FBQ3JDO0lBQVQsTUFBTSxFQUFFO29EQUErQjtBQUYvQix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQywyOU5BQWdEOztLQUVuRCxDQUFDO0dBQ1csdUJBQXVCLENBNk5uQztTQTdOWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7VWNpR3JhcGhRbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS1ncmFwaC1xbC5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXVzZXItc2VnbWVudC1hZGQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyU2VnbWVudEFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgZm9ybUZpZWxkUHJvcGVydGllczogQXJyYXk8YW55PjtcbiAgICB1c2VyU2VnbWVudDogYW55ID0ge307XG4gICAgaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgZGlzdHJpY3RzID0gW107XG4gICAgYmxvY2tzID0gW107XG4gICAgc2Nob29scyA9IFtdO1xuICAgIGNsdXN0ZXJzID0gW107XG4gICAgcm9sZXMgPSBbXTtcbiAgICBib2FyZHMgPSBbXTtcbiAgICBncmFkZSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTJdO1xuICAgIHN1YmplY3RzID0gW107XG4gICAgdXNlclNlZ21lbnRGb3JtOiBGb3JtR3JvdXA7XG4gICAgc3RhdGUgPSAnSGFyeWFuYSc7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdWNpR3JhcGhRbFNlcnZpY2U6IFVjaUdyYXBoUWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5nZXRVY2lEaXN0cmljdCgpO1xuICAgICAgICB0aGlzLmdldFVjaVJvbGUoKTtcbiAgICAgICAgdGhpcy5nZXRVY2lCb2FyZCgpO1xuICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgICAgICAgZGlzdHJpY3Q6IFsnJ10sXG4gICAgICAgICAgICBibG9jazogWycnXSxcbiAgICAgICAgICAgIGNsdXN0ZXI6IFsnJ10sXG4gICAgICAgICAgICBzY2hvb2w6IFsnJ10sXG4gICAgICAgICAgICByb2xlOiBbJyddLFxuICAgICAgICAgICAgYm9hcmQ6IFsnJ10sXG4gICAgICAgICAgICBncmFkZTogWycnXSxcbiAgICAgICAgICAgIHN1YmplY3Q6IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdkaXN0cmljdCcpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnYmxvY2snKS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnY2x1c3RlcicpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnc2Nob29sJykucGF0Y2hWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hvb2xzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWNpQmxvY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnYmxvY2snKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybS5nZXQoJ2NsdXN0ZXInKS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybS5nZXQoJ3NjaG9vbCcpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nob29scyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVjaUNsdXN0ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVjaVNjaG9vbERldGFpbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQWRkKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyU2VnbWVudEZvcm0uaW52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gdGhpcy51c2VyU2VnbWVudEZvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IFtdO1xuICAgICAgICBjb25zdCBibG9ja0RhdGEgPSBbXTtcbiAgICAgICAgY29uc3QgZGlzdHJpY3REYXRhID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2Nob29sIG9mIHRoaXMuc2Nob29scykge1xuICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZS5zY2hvb2wuaW5kZXhPZihzY2hvb2wuc2Nob29sKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkRhdGEucHVzaChzY2hvb2wpO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0RhdGEuaW5kZXhPZihzY2hvb2wuYmxvY2spID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBibG9ja0RhdGEucHVzaChzY2hvb2wuYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdERhdGEucHVzaChzY2hvb2wuZGlzdHJpY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb2NhdGlvbkRhdGEubGVuZ3RoID09PSBmb3JtVmFsdWUuc2Nob29sKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2NrRGF0YS5sZW5ndGggPCBmb3JtVmFsdWUuYmxvY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZS5ibG9jay5pbmRleE9mKGJsb2NrLmJsb2NrKSAhPT0gLTEgJiYgYmxvY2tEYXRhLmluZGV4T2YoYmxvY2suYmxvY2spID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkRhdGEucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YS5wdXNoKGJsb2NrLmJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJpY3REYXRhLnB1c2goYmxvY2suZGlzdHJpY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tEYXRhLmxlbmd0aCA9PT0gZm9ybVZhbHVlLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlzdHJpY3REYXRhLmxlbmd0aCA8IGZvcm1WYWx1ZS5kaXN0cmljdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGlzdHJpY3Qgb2YgdGhpcy5kaXN0cmljdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybVZhbHVlLmRpc3RyaWN0LmluZGV4T2YoZGlzdHJpY3QuZGlzdHJpY3QpICE9PSAtMSAmJiBkaXN0cmljdERhdGEuaW5kZXhPZihkaXN0cmljdC5kaXN0cmljdCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5wdXNoKGRpc3RyaWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlckxvY2F0aW9uOiBsb2NhdGlvbkRhdGEsXG4gICAgICAgICAgICAgICAgcm9sZXM6IGZvcm1WYWx1ZS5yb2xlLFxuICAgICAgICAgICAgICAgIHVzZXJUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHVkZW50J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrOiB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkOiBmb3JtVmFsdWUuYm9hcmQsXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlTGV2ZWw6IGZvcm1WYWx1ZS5ncmFkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVjaVNlcnZpY2UudXNlclNlZ21lbnRRdWVyeUJ1aWxkZXIocGFyYW0pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1WYWx1ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybVZhbHVlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UuY3JlYXRlVXNlclNlZ21lbnQoe2RhdGE6IGl0ZW1zfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlckFkZChkYXRhLmluc2VydGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZnRlckFkZChkYXRhKSB7XG4gICAgICAgIHRoaXMuYWRkLmVtaXQoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpU3RhdGUoKSB7XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0U3RhdGUoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpRGlzdHJpY3QoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0RGlzdHJpY3QocGFyYW1zKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3RyaWN0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSAmJiByZXMuZGF0YS5vcmdhbmlzYXRpb24gJiYgcmVzLmRhdGEub3JnYW5pc2F0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpY3RzID0gcmVzLmRhdGEub3JnYW5pc2F0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lCbG9jaygpIHtcbiAgICAgICAgY29uc3QgZm9ybVZhbCA9IHRoaXMudXNlclNlZ21lbnRGb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSwgZGlzdHJpY3Q6IGZvcm1WYWwuZGlzdHJpY3RcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRCbG9jayhwYXJhbXMpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLmJsb2NrcyAmJiByZXMuZGF0YS5ibG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSByZXMuZGF0YS5ibG9ja3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaUNsdXN0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1WYWwgPSB0aGlzLnVzZXJTZWdtZW50Rm9ybS52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsIGRpc3RyaWN0OiBmb3JtVmFsLmRpc3RyaWN0LCBibG9jazogZm9ybVZhbC5ibG9ja1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldENsdXN0ZXJzKHBhcmFtcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSAmJiByZXMuZGF0YS5jbHVzdGVycyAmJiByZXMuZGF0YS5jbHVzdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY2x1c3RlcnNbMF0uY2x1c3Rlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJzID0gcmVzLmRhdGEuY2x1c3RlcnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lTY2hvb2xEZXRhaWxzKCkge1xuICAgICAgICBjb25zdCBmb3JtVmFsID0gdGhpcy51c2VyU2VnbWVudEZvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLCBkaXN0cmljdDogZm9ybVZhbC5kaXN0cmljdCwgYmxvY2s6IGZvcm1WYWwuYmxvY2tcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRTY2hvb2xEZXRhaWxzKHBhcmFtcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2hvb2xzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLnNjaG9vbHMgJiYgcmVzLmRhdGEuc2Nob29scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaG9vbHMgPSByZXMuZGF0YS5zY2hvb2xzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lSb2xlKCkge1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldFJvbGUoKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLnJvbGUgJiYgcmVzLmRhdGEucm9sZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzID0gcmVzLmRhdGEucm9sZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpQm9hcmQoKSB7XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0Qm9hcmRzKCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSAmJiByZXMuZGF0YS5ib2FyZCAmJiByZXMuZGF0YS5ib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkcyA9IHJlcy5kYXRhLmJvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
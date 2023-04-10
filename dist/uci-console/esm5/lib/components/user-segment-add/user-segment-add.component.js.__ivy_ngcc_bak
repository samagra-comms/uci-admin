import { __assign, __decorate, __values } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { UciGraphQlService } from '../../services/uci-graph-ql.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
var UserSegmentAddComponent = /** @class */ (function () {
    function UserSegmentAddComponent(uciService, fb, uciGraphQlService, globalService) {
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
    UserSegmentAddComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.userSegmentForm.get('district').valueChanges.subscribe(function (item) {
            if (item) {
                _this.userSegmentForm.get('block').patchValue('');
                _this.blocks = [];
                _this.userSegmentForm.get('cluster').patchValue('');
                _this.userSegmentForm.get('school').patchValue('');
                _this.schools = [];
                _this.clusters = [];
                _this.getUciBlock();
            }
        });
        this.userSegmentForm.get('block').valueChanges.subscribe(function (item) {
            if (item) {
                _this.userSegmentForm.get('cluster').patchValue('');
                _this.userSegmentForm.get('school').patchValue('');
                _this.schools = [];
                _this.clusters = [];
                _this.getUciCluster();
                _this.getUciSchoolDetails();
            }
        });
    };
    UserSegmentAddComponent.prototype.onCancel = function () {
        this.cancel.emit(false);
    };
    UserSegmentAddComponent.prototype.onAdd = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var _this = this;
        if (this.userSegmentForm.invalid) {
            return;
        }
        this.isLoaderShow = true;
        var formValue = this.userSegmentForm.value;
        var locationData = [];
        var blockData = [];
        var districtData = [];
        try {
            for (var _d = __values(this.schools), _e = _d.next(); !_e.done; _e = _d.next()) {
                var school = _e.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (blockData.length < formValue.block.length) {
            try {
                for (var _f = __values(this.blocks), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var block = _g.value;
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (districtData.length < formValue.district.length) {
            try {
                for (var _h = __values(this.districts), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var district = _j.value;
                    if (formValue.district.indexOf(district.district) !== -1 && districtData.indexOf(district.district) === -1) {
                        locationData.push(district);
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
        var param = {
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
        this.uciService.userSegmentQueryBuilder(param).subscribe(function (response) {
            if (response) {
                var items = __assign(__assign({}, response), { name: formValue.name, description: formValue.description });
                _this.uciService.createUserSegment({ data: items }).subscribe(function (data) {
                    _this.isLoaderShow = false;
                    _this.afterAdd(data.inserted);
                }, function (err) {
                    _this.isLoaderShow = false;
                });
            }
        }, function (error) {
            _this.isLoaderShow = false;
        });
    };
    UserSegmentAddComponent.prototype.afterAdd = function (data) {
        this.add.emit(data);
    };
    UserSegmentAddComponent.prototype.getUciState = function () {
        this.uciGraphQlService.getState().subscribe(function (res) {
        });
    };
    UserSegmentAddComponent.prototype.getUciDistrict = function () {
        var _this = this;
        var params = {
            state: this.state
        };
        this.uciGraphQlService.getDistrict(params).subscribe(function (res) {
            _this.districts = [];
            if (res && res.data && res.data.organisation && res.data.organisation.length) {
                _this.districts = res.data.organisation;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciBlock = function () {
        var _this = this;
        var formVal = this.userSegmentForm.value;
        var params = {
            state: this.state, district: formVal.district
        };
        this.uciGraphQlService.getBlock(params).subscribe(function (res) {
            _this.blocks = [];
            if (res && res.data && res.data.blocks && res.data.blocks.length) {
                _this.blocks = res.data.blocks;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciCluster = function () {
        var _this = this;
        var formVal = this.userSegmentForm.value;
        var params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getClusters(params).subscribe(function (res) {
            _this.clusters = [];
            if (res && res.data && res.data.clusters && res.data.clusters.length) {
                if (res.data.clusters[0].cluster) {
                    _this.clusters = res.data.clusters;
                }
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciSchoolDetails = function () {
        var _this = this;
        var formVal = this.userSegmentForm.value;
        var params = {
            state: this.state, district: formVal.district, block: formVal.block
        };
        this.uciGraphQlService.getSchoolDetails(params).subscribe(function (res) {
            _this.schools = [];
            if (res && res.data && res.data.schools && res.data.schools.length) {
                _this.schools = res.data.schools;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciRole = function () {
        var _this = this;
        this.uciGraphQlService.getRole().subscribe(function (res) {
            if (res && res.data && res.data.role && res.data.role.length) {
                _this.roles = res.data.role;
            }
        });
    };
    UserSegmentAddComponent.prototype.getUciBoard = function () {
        var _this = this;
        this.uciGraphQlService.getBoards().subscribe(function (res) {
            if (res && res.data && res.data.board && res.data.board.length) {
                _this.boards = res.data.board;
            }
        });
    };
    UserSegmentAddComponent.ctorParameters = function () { return [
        { type: UciService },
        { type: FormBuilder },
        { type: UciGraphQlService },
        { type: GlobalService }
    ]; };
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
    return UserSegmentAddComponent;
}());
export { UserSegmentAddComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1zZWdtZW50LWFkZC91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFPNUQ7SUFrQkksaUNBQW9CLFVBQXNCLEVBQ3RCLEVBQWUsRUFDZixpQkFBb0MsRUFDcEMsYUFBNEI7UUFINUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXBCdEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDckMsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEMsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lHcmFwaFFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLWdyYXBoLXFsLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItdXNlci1zZWdtZW50LWFkZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItc2VnbWVudC1hZGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXItc2VnbWVudC1hZGQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZWdtZW50QWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBmb3JtRmllbGRQcm9wZXJ0aWVzOiBBcnJheTxhbnk+O1xuICAgIHVzZXJTZWdtZW50OiBhbnkgPSB7fTtcbiAgICBpc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICBkaXN0cmljdHMgPSBbXTtcbiAgICBibG9ja3MgPSBbXTtcbiAgICBzY2hvb2xzID0gW107XG4gICAgY2x1c3RlcnMgPSBbXTtcbiAgICByb2xlcyA9IFtdO1xuICAgIGJvYXJkcyA9IFtdO1xuICAgIGdyYWRlID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl07XG4gICAgc3ViamVjdHMgPSBbXTtcbiAgICB1c2VyU2VnbWVudEZvcm06IEZvcm1Hcm91cDtcbiAgICBzdGF0ZSA9ICdIYXJ5YW5hJztcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1Y2lHcmFwaFFsU2VydmljZTogVWNpR3JhcGhRbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLmdldFVjaURpc3RyaWN0KCk7XG4gICAgICAgIHRoaXMuZ2V0VWNpUm9sZSgpO1xuICAgICAgICB0aGlzLmdldFVjaUJvYXJkKCk7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJ10sXG4gICAgICAgICAgICBkaXN0cmljdDogWycnXSxcbiAgICAgICAgICAgIGJsb2NrOiBbJyddLFxuICAgICAgICAgICAgY2x1c3RlcjogWycnXSxcbiAgICAgICAgICAgIHNjaG9vbDogWycnXSxcbiAgICAgICAgICAgIHJvbGU6IFsnJ10sXG4gICAgICAgICAgICBib2FyZDogWycnXSxcbiAgICAgICAgICAgIGdyYWRlOiBbJyddLFxuICAgICAgICAgICAgc3ViamVjdDogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybS5nZXQoJ2Rpc3RyaWN0JykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdibG9jaycpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdjbHVzdGVyJykucGF0Y2hWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdzY2hvb2wnKS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaG9vbHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVY2lCbG9jaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdibG9jaycpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnY2x1c3RlcicpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnc2Nob29sJykucGF0Y2hWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hvb2xzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWNpQ2x1c3RlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWNpU2Nob29sRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWwuZW1pdChmYWxzZSk7XG4gICAgfVxuXG4gICAgb25BZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJTZWdtZW50Rm9ybS5pbnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSB0cnVlO1xuICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLnVzZXJTZWdtZW50Rm9ybS52YWx1ZTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25EYXRhID0gW107XG4gICAgICAgIGNvbnN0IGJsb2NrRGF0YSA9IFtdO1xuICAgICAgICBjb25zdCBkaXN0cmljdERhdGEgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzY2hvb2wgb2YgdGhpcy5zY2hvb2xzKSB7XG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlLnNjaG9vbC5pbmRleE9mKHNjaG9vbC5zY2hvb2wpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5wdXNoKHNjaG9vbCk7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRGF0YS5pbmRleE9mKHNjaG9vbC5ibG9jaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YS5wdXNoKHNjaG9vbC5ibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RyaWN0RGF0YS5wdXNoKHNjaG9vbC5kaXN0cmljdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uRGF0YS5sZW5ndGggPT09IGZvcm1WYWx1ZS5zY2hvb2wpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvY2tEYXRhLmxlbmd0aCA8IGZvcm1WYWx1ZS5ibG9jay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybVZhbHVlLmJsb2NrLmluZGV4T2YoYmxvY2suYmxvY2spICE9PSAtMSAmJiBibG9ja0RhdGEuaW5kZXhPZihibG9jay5ibG9jaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tEYXRhLnB1c2goYmxvY2suYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdERhdGEucHVzaChibG9jay5kaXN0cmljdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChibG9ja0RhdGEubGVuZ3RoID09PSBmb3JtVmFsdWUuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXN0cmljdERhdGEubGVuZ3RoIDwgZm9ybVZhbHVlLmRpc3RyaWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkaXN0cmljdCBvZiB0aGlzLmRpc3RyaWN0cykge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtVmFsdWUuZGlzdHJpY3QuaW5kZXhPZihkaXN0cmljdC5kaXN0cmljdCkgIT09IC0xICYmIGRpc3RyaWN0RGF0YS5pbmRleE9mKGRpc3RyaWN0LmRpc3RyaWN0KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhLnB1c2goZGlzdHJpY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VyTG9jYXRpb246IGxvY2F0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICByb2xlczogZm9ybVZhbHVlLnJvbGUsXG4gICAgICAgICAgICAgICAgdXNlclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0dWRlbnQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmcmFtZXdvcms6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQ6IGZvcm1WYWx1ZS5ib2FyZCxcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGVMZXZlbDogZm9ybVZhbHVlLmdyYWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudWNpU2VydmljZS51c2VyU2VnbWVudFF1ZXJ5QnVpbGRlcihwYXJhbSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZm9ybVZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtVmFsdWUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5jcmVhdGVVc2VyU2VnbWVudCh7ZGF0YTogaXRlbXN9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyQWRkKGRhdGEuaW5zZXJ0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFmdGVyQWRkKGRhdGEpIHtcbiAgICAgICAgdGhpcy5hZGQuZW1pdChkYXRhKTtcbiAgICB9XG5cbiAgICBnZXRVY2lTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRTdGF0ZSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lEaXN0cmljdCgpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXREaXN0cmljdChwYXJhbXMpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzdHJpY3RzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLm9yZ2FuaXNhdGlvbiAmJiByZXMuZGF0YS5vcmdhbmlzYXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0cmljdHMgPSByZXMuZGF0YS5vcmdhbmlzYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaUJsb2NrKCkge1xuICAgICAgICBjb25zdCBmb3JtVmFsID0gdGhpcy51c2VyU2VnbWVudEZvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLCBkaXN0cmljdDogZm9ybVZhbC5kaXN0cmljdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldEJsb2NrKHBhcmFtcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSBbXTtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEgJiYgcmVzLmRhdGEuYmxvY2tzICYmIHJlcy5kYXRhLmJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrcyA9IHJlcy5kYXRhLmJsb2NrcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpQ2x1c3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9ybVZhbCA9IHRoaXMudXNlclNlZ21lbnRGb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSwgZGlzdHJpY3Q6IGZvcm1WYWwuZGlzdHJpY3QsIGJsb2NrOiBmb3JtVmFsLmJsb2NrXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0Q2x1c3RlcnMocGFyYW1zKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsdXN0ZXJzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLmNsdXN0ZXJzICYmIHJlcy5kYXRhLmNsdXN0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jbHVzdGVyc1swXS5jbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlcnMgPSByZXMuZGF0YS5jbHVzdGVycztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaVNjaG9vbERldGFpbHMoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1WYWwgPSB0aGlzLnVzZXJTZWdtZW50Rm9ybS52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsIGRpc3RyaWN0OiBmb3JtVmFsLmRpc3RyaWN0LCBibG9jazogZm9ybVZhbC5ibG9ja1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldFNjaG9vbERldGFpbHMocGFyYW1zKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjaG9vbHMgPSBbXTtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEgJiYgcmVzLmRhdGEuc2Nob29scyAmJiByZXMuZGF0YS5zY2hvb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nob29scyA9IHJlcy5kYXRhLnNjaG9vbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaVJvbGUoKSB7XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0Um9sZSgpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEgJiYgcmVzLmRhdGEucm9sZSAmJiByZXMuZGF0YS5yb2xlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMgPSByZXMuZGF0YS5yb2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lCb2FyZCgpIHtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRCb2FyZHMoKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLmJvYXJkICYmIHJlcy5kYXRhLmJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRzID0gcmVzLmRhdGEuYm9hcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
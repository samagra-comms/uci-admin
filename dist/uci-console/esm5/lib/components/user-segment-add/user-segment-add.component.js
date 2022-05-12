import { __assign, __values } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../services/uci.service";
import * as i2 from "@angular/forms";
import * as i3 from "../../services/uci-graph-ql.service";
import * as i4 from "../../services/global.service";
import * as i5 from "@angular/common";
import * as i6 from "ng2-semantic-ui-v9";
function UserSegmentAddComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 31);
    i0.ɵɵelement(2, "div", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function UserSegmentAddComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function UserSegmentAddComponent_ng_template_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onAdd(); });
    i0.ɵɵtext(1, " Add ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.userSegmentForm.invalid);
} }
function UserSegmentAddComponent_sui_select_option_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r18.district);
} }
function UserSegmentAddComponent_sui_select_option_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r19.block);
} }
function UserSegmentAddComponent_div_40_sui_select_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r22.cluster);
} }
function UserSegmentAddComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2, "Cluster");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16);
    i0.ɵɵelementStart(4, "sui-multi-select", 35, 36);
    i0.ɵɵtemplate(6, UserSegmentAddComponent_div_40_sui_select_option_6_Template, 1, 1, "sui-select-option", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r20 = i0.ɵɵreference(5);
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r7.clusters);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", _r20.filteredOptions);
} }
function UserSegmentAddComponent_sui_select_option_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r23 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r23.school);
} }
function UserSegmentAddComponent_sui_select_option_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r24 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r24.name);
} }
function UserSegmentAddComponent_sui_select_option_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r25 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r25.name);
} }
function UserSegmentAddComponent_sui_select_option_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    var option_r26 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r26);
} }
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
    UserSegmentAddComponent.ɵfac = function UserSegmentAddComponent_Factory(t) { return new (t || UserSegmentAddComponent)(i0.ɵɵdirectiveInject(i1.UciService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.UciGraphQlService), i0.ɵɵdirectiveInject(i4.GlobalService)); };
    UserSegmentAddComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserSegmentAddComponent, selectors: [["lib-user-segment-add"]], outputs: { cancel: "cancel", add: "add" }, decls: 71, vars: 16, consts: [[1, "uci-add-segment"], [1, "ui", "grid"], [1, "nine", "wide", "column", "font-1-2", "font-weight-bold"], [1, "three", "wide", "column"], [1, "right-floated", "pt-0"], [1, "sb-btn", "sb-btn-normal", "sb-btn-outline-primary", "mr-10", 3, "click"], [4, "ngIf", "ngIfElse"], ["addBtn", ""], [1, "ten", "wide", "column", "font-1-2"], [1, "ui", "form", "user-segment-form", 3, "formGroup"], [1, "field"], [1, "asterisk", "icon", "asterisk-color"], ["type", "text", "name", "name", "placeholder", "Name", "formControlName", "name"], ["name", "description", "formControlName", "description", "placeholder", "Enter description"], [1, "ui", "divider", "mt-30"], [1, "two", "fields"], [1, "ui", "segment", "p-0"], ["formControlName", "district", 1, "selection", "w-100", 3, "options"], ["multiSelectDistrict", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "block", 1, "selection", "w-100", 3, "options"], ["multiSelectBlock", ""], ["class", "field", 4, "ngIf"], ["formControlName", "school", 1, "selection", "w-100", 3, "options"], ["multiSelectSchool", ""], ["formControlName", "role", 1, "selection", "w-100", 3, "options"], ["multiSelectRole", ""], ["formControlName", "board", 1, "selection", "w-100", 3, "options"], ["multiSelectBoard", ""], ["formControlName", "grade", 1, "selection", "w-100", 3, "options"], ["multiSelectGrade", ""], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", "p-0"], [1, "ui", "active", "tiny", "inline", "loader"], [1, "sb-btn", "sb-btn-normal", "sb-btn-primary", 3, "disabled", "click"], [3, "value"], ["formControlName", "cluster", 1, "selection", "w-100", 3, "options"], ["multiSelectCluster", ""]], template: function UserSegmentAddComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3, " Create new segment ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelementStart(6, "button", 5);
            i0.ɵɵlistener("click", function UserSegmentAddComponent_Template_button_click_6_listener() { return ctx.onCancel(); });
            i0.ɵɵtext(7, " Cancel ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, UserSegmentAddComponent_ng_container_8_Template, 3, 0, "ng-container", 6);
            i0.ɵɵtemplate(9, UserSegmentAddComponent_ng_template_9_Template, 2, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 8);
            i0.ɵɵelementStart(12, "form", 9);
            i0.ɵɵelementStart(13, "div", 10);
            i0.ɵɵelementStart(14, "label");
            i0.ɵɵtext(15, "Name ");
            i0.ɵɵelementStart(16, "sup");
            i0.ɵɵelement(17, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 10);
            i0.ɵɵelementStart(20, "label");
            i0.ɵɵtext(21, "Description");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "textarea", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "div", 14);
            i0.ɵɵelementStart(24, "div", 15);
            i0.ɵɵelementStart(25, "div", 10);
            i0.ɵɵelementStart(26, "label");
            i0.ɵɵtext(27, "District");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 16);
            i0.ɵɵelementStart(29, "sui-multi-select", 17, 18);
            i0.ɵɵtemplate(31, UserSegmentAddComponent_sui_select_option_31_Template, 1, 1, "sui-select-option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 10);
            i0.ɵɵelementStart(33, "label");
            i0.ɵɵtext(34, "Block");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 16);
            i0.ɵɵelementStart(36, "sui-multi-select", 20, 21);
            i0.ɵɵtemplate(38, UserSegmentAddComponent_sui_select_option_38_Template, 1, 1, "sui-select-option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "div", 15);
            i0.ɵɵtemplate(40, UserSegmentAddComponent_div_40_Template, 7, 2, "div", 22);
            i0.ɵɵelementStart(41, "div", 10);
            i0.ɵɵelementStart(42, "label");
            i0.ɵɵtext(43, "School");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 16);
            i0.ɵɵelementStart(45, "sui-multi-select", 23, 24);
            i0.ɵɵtemplate(47, UserSegmentAddComponent_sui_select_option_47_Template, 1, 1, "sui-select-option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 15);
            i0.ɵɵelementStart(49, "div", 10);
            i0.ɵɵelementStart(50, "label");
            i0.ɵɵtext(51, "Role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 16);
            i0.ɵɵelementStart(53, "sui-multi-select", 25, 26);
            i0.ɵɵtemplate(55, UserSegmentAddComponent_sui_select_option_55_Template, 1, 1, "sui-select-option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "div", 10);
            i0.ɵɵelementStart(57, "label");
            i0.ɵɵtext(58, "Board");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "div", 16);
            i0.ɵɵelementStart(60, "sui-multi-select", 27, 28);
            i0.ɵɵtemplate(62, UserSegmentAddComponent_sui_select_option_62_Template, 1, 1, "sui-select-option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "div", 15);
            i0.ɵɵelementStart(64, "div", 10);
            i0.ɵɵelementStart(65, "label");
            i0.ɵɵtext(66, "Grade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "div", 16);
            i0.ɵɵelementStart(68, "sui-multi-select", 29, 30);
            i0.ɵɵtemplate(70, UserSegmentAddComponent_sui_select_option_70_Template, 1, 1, "sui-select-option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(10);
            var _r3 = i0.ɵɵreference(30);
            var _r5 = i0.ɵɵreference(37);
            var _r8 = i0.ɵɵreference(46);
            var _r10 = i0.ɵɵreference(54);
            var _r12 = i0.ɵɵreference(61);
            var _r14 = i0.ɵɵreference(69);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.isLoaderShow)("ngIfElse", _r1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.userSegmentForm);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("options", ctx.districts);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r3.filteredOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.blocks);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r5.filteredOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.clusters.length);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.schools);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r8.filteredOptions);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("options", ctx.roles);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r10.filteredOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.boards);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r12.filteredOptions);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("options", ctx.grade);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", _r14.filteredOptions);
        } }, directives: [i5.NgIf, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i6.ɵn, i2.FormGroupDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i6.ɵcs, i6.ɵct, i5.NgForOf, i6.ɵcu], styles: [".font-1-2[_ngcontent-%COMP%]{font-size:1.2rem}.user-segment-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400!important}button[_ngcontent-%COMP%]:disabled{background:#89cff0;border-color:#89cff0}"] });
    return UserSegmentAddComponent;
}());
export { UserSegmentAddComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserSegmentAddComponent, [{
        type: Component,
        args: [{
                selector: 'lib-user-segment-add',
                templateUrl: './user-segment-add.component.html',
                styleUrls: ['./user-segment-add.component.css']
            }]
    }], function () { return [{ type: i1.UciService }, { type: i2.FormBuilder }, { type: i3.UciGraphQlService }, { type: i4.GlobalService }]; }, { cancel: [{
            type: Output
        }], add: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1zZWdtZW50LWFkZC91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXItc2VnbWVudC1hZGQvdXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3RFLE9BQU8sRUFBeUIsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ09sRCw2QkFDSTtJQUFBLGtDQUNJO0lBQUEsMEJBQWdEO0lBQ3BELGlCQUFTO0lBQ2IsMEJBQWU7Ozs7SUFFWCxrQ0FFSTtJQUZnRCwrTEFBaUI7SUFFakUscUJBQ0o7SUFBQSxpQkFBUzs7O0lBRkQseURBQW9DOzs7SUEyQnBDLHdDQUVvQjs7O0lBREQsMkNBQXlCOzs7SUFhNUMsd0NBRW9COzs7SUFERCx3Q0FBc0I7OztJQWN6Qyx3Q0FFb0I7OztJQURELDBDQUF3Qjs7O0lBUnZELCtCQUNJO0lBQUEsNkJBQU87SUFBQSx1QkFBTztJQUFBLGlCQUFRO0lBQ3RCLCtCQUNJO0lBQUEsZ0RBSUk7SUFBQSw0R0FFQTtJQUNKLGlCQUFtQjtJQUN2QixpQkFBTTtJQUNWLGlCQUFNOzs7O0lBUG9CLGVBQW9CO0lBQXBCLHlDQUFvQjtJQUVmLGVBQXlEO0lBQXpELDhDQUF5RDs7O0lBYTVFLHdDQUVvQjs7O0lBREQseUNBQXVCOzs7SUFjMUMsd0NBRW9COzs7SUFERCx1Q0FBcUI7OztJQVl4Qyx3Q0FFb0I7OztJQURELHVDQUFxQjs7O0lBY3hDLHdDQUVvQjs7O0lBREQsa0NBQWdCOztBRDVIL0Q7SUF1QkksaUNBQW9CLFVBQXNCLEVBQ3RC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QXdPQyxBQWxPRCxJQWtPQztTQTdOWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDbEQ7O2tCQUVJLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VjaVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS5zZXJ2aWNlJztcbmltcG9ydCB7VWNpR3JhcGhRbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VjaS1ncmFwaC1xbC5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXVzZXItc2VnbWVudC1hZGQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyU2VnbWVudEFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgZm9ybUZpZWxkUHJvcGVydGllczogQXJyYXk8YW55PjtcbiAgICB1c2VyU2VnbWVudDogYW55ID0ge307XG4gICAgaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgZGlzdHJpY3RzID0gW107XG4gICAgYmxvY2tzID0gW107XG4gICAgc2Nob29scyA9IFtdO1xuICAgIGNsdXN0ZXJzID0gW107XG4gICAgcm9sZXMgPSBbXTtcbiAgICBib2FyZHMgPSBbXTtcbiAgICBncmFkZSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTJdO1xuICAgIHN1YmplY3RzID0gW107XG4gICAgdXNlclNlZ21lbnRGb3JtOiBGb3JtR3JvdXA7XG4gICAgc3RhdGUgPSAnSGFyeWFuYSc7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdWNpR3JhcGhRbFNlcnZpY2U6IFVjaUdyYXBoUWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5nZXRVY2lEaXN0cmljdCgpO1xuICAgICAgICB0aGlzLmdldFVjaVJvbGUoKTtcbiAgICAgICAgdGhpcy5nZXRVY2lCb2FyZCgpO1xuICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbJyddLFxuICAgICAgICAgICAgZGlzdHJpY3Q6IFsnJ10sXG4gICAgICAgICAgICBibG9jazogWycnXSxcbiAgICAgICAgICAgIGNsdXN0ZXI6IFsnJ10sXG4gICAgICAgICAgICBzY2hvb2w6IFsnJ10sXG4gICAgICAgICAgICByb2xlOiBbJyddLFxuICAgICAgICAgICAgYm9hcmQ6IFsnJ10sXG4gICAgICAgICAgICBncmFkZTogWycnXSxcbiAgICAgICAgICAgIHN1YmplY3Q6IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdkaXN0cmljdCcpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnYmxvY2snKS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnY2x1c3RlcicpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnc2Nob29sJykucGF0Y2hWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hvb2xzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWNpQmxvY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnYmxvY2snKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybS5nZXQoJ2NsdXN0ZXInKS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybS5nZXQoJ3NjaG9vbCcpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nob29scyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVjaUNsdXN0ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVjaVNjaG9vbERldGFpbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsLmVtaXQoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQWRkKCkge1xuICAgICAgICBpZiAodGhpcy51c2VyU2VnbWVudEZvcm0uaW52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gdGhpcy51c2VyU2VnbWVudEZvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IFtdO1xuICAgICAgICBjb25zdCBibG9ja0RhdGEgPSBbXTtcbiAgICAgICAgY29uc3QgZGlzdHJpY3REYXRhID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2Nob29sIG9mIHRoaXMuc2Nob29scykge1xuICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZS5zY2hvb2wuaW5kZXhPZihzY2hvb2wuc2Nob29sKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkRhdGEucHVzaChzY2hvb2wpO1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0RhdGEuaW5kZXhPZihzY2hvb2wuYmxvY2spID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBibG9ja0RhdGEucHVzaChzY2hvb2wuYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdERhdGEucHVzaChzY2hvb2wuZGlzdHJpY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb2NhdGlvbkRhdGEubGVuZ3RoID09PSBmb3JtVmFsdWUuc2Nob29sKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2NrRGF0YS5sZW5ndGggPCBmb3JtVmFsdWUuYmxvY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZS5ibG9jay5pbmRleE9mKGJsb2NrLmJsb2NrKSAhPT0gLTEgJiYgYmxvY2tEYXRhLmluZGV4T2YoYmxvY2suYmxvY2spID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbkRhdGEucHVzaChibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YS5wdXNoKGJsb2NrLmJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzdHJpY3REYXRhLnB1c2goYmxvY2suZGlzdHJpY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tEYXRhLmxlbmd0aCA9PT0gZm9ybVZhbHVlLmJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlzdHJpY3REYXRhLmxlbmd0aCA8IGZvcm1WYWx1ZS5kaXN0cmljdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGlzdHJpY3Qgb2YgdGhpcy5kaXN0cmljdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybVZhbHVlLmRpc3RyaWN0LmluZGV4T2YoZGlzdHJpY3QuZGlzdHJpY3QpICE9PSAtMSAmJiBkaXN0cmljdERhdGEuaW5kZXhPZihkaXN0cmljdC5kaXN0cmljdCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5wdXNoKGRpc3RyaWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdXNlckxvY2F0aW9uOiBsb2NhdGlvbkRhdGEsXG4gICAgICAgICAgICAgICAgcm9sZXM6IGZvcm1WYWx1ZS5yb2xlLFxuICAgICAgICAgICAgICAgIHVzZXJUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHVkZW50J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnJhbWV3b3JrOiB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkOiBmb3JtVmFsdWUuYm9hcmQsXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlTGV2ZWw6IGZvcm1WYWx1ZS5ncmFkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVjaVNlcnZpY2UudXNlclNlZ21lbnRRdWVyeUJ1aWxkZXIocGFyYW0pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1WYWx1ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybVZhbHVlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnVjaVNlcnZpY2UuY3JlYXRlVXNlclNlZ21lbnQoe2RhdGE6IGl0ZW1zfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlckFkZChkYXRhLmluc2VydGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVyU2hvdyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZnRlckFkZChkYXRhKSB7XG4gICAgICAgIHRoaXMuYWRkLmVtaXQoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpU3RhdGUoKSB7XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0U3RhdGUoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpRGlzdHJpY3QoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0RGlzdHJpY3QocGFyYW1zKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3RyaWN0cyA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSAmJiByZXMuZGF0YS5vcmdhbmlzYXRpb24gJiYgcmVzLmRhdGEub3JnYW5pc2F0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpY3RzID0gcmVzLmRhdGEub3JnYW5pc2F0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lCbG9jaygpIHtcbiAgICAgICAgY29uc3QgZm9ybVZhbCA9IHRoaXMudXNlclNlZ21lbnRGb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSwgZGlzdHJpY3Q6IGZvcm1WYWwuZGlzdHJpY3RcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRCbG9jayhwYXJhbXMpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLmJsb2NrcyAmJiByZXMuZGF0YS5ibG9ja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSByZXMuZGF0YS5ibG9ja3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaUNsdXN0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1WYWwgPSB0aGlzLnVzZXJTZWdtZW50Rm9ybS52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsIGRpc3RyaWN0OiBmb3JtVmFsLmRpc3RyaWN0LCBibG9jazogZm9ybVZhbC5ibG9ja1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldENsdXN0ZXJzKHBhcmFtcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSAmJiByZXMuZGF0YS5jbHVzdGVycyAmJiByZXMuZGF0YS5jbHVzdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY2x1c3RlcnNbMF0uY2x1c3Rlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJzID0gcmVzLmRhdGEuY2x1c3RlcnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lTY2hvb2xEZXRhaWxzKCkge1xuICAgICAgICBjb25zdCBmb3JtVmFsID0gdGhpcy51c2VyU2VnbWVudEZvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLCBkaXN0cmljdDogZm9ybVZhbC5kaXN0cmljdCwgYmxvY2s6IGZvcm1WYWwuYmxvY2tcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRTY2hvb2xEZXRhaWxzKHBhcmFtcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2hvb2xzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLnNjaG9vbHMgJiYgcmVzLmRhdGEuc2Nob29scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaG9vbHMgPSByZXMuZGF0YS5zY2hvb2xzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lSb2xlKCkge1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldFJvbGUoKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLnJvbGUgJiYgcmVzLmRhdGEucm9sZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzID0gcmVzLmRhdGEucm9sZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpQm9hcmQoKSB7XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0Qm9hcmRzKCkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSAmJiByZXMuZGF0YS5ib2FyZCAmJiByZXMuZGF0YS5ib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkcyA9IHJlcy5kYXRhLmJvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidWNpLWFkZC1zZWdtZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInVpIGdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5pbmUgd2lkZSBjb2x1bW4gZm9udC0xLTIgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgQ3JlYXRlIG5ldyBzZWdtZW50XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWUgd2lkZSBjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1mbG9hdGVkIHB0LTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ItYnRuIHNiLWJ0bi1ub3JtYWwgc2ItYnRuLW91dGxpbmUtcHJpbWFyeSBtci0xMFwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xvYWRlclNob3c7IGVsc2UgYWRkQnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzYi1idG4gc2ItYnRuLW5vcm1hbCBzYi1idG4tcHJpbWFyeSBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBhY3RpdmUgdGlueSBpbmxpbmUgbG9hZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjYWRkQnRuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2ItYnRuIHNiLWJ0bi1ub3JtYWwgc2ItYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25BZGQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInVzZXJTZWdtZW50Rm9ybS5pbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0ZW4gd2lkZSBjb2x1bW4gZm9udC0xLTJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtIHVzZXItc2VnbWVudC1mb3JtXCIgW2Zvcm1Hcm91cF09XCJ1c2VyU2VnbWVudEZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lIDxzdXA+PGkgY2xhc3M9XCJhc3RlcmlzayBpY29uIGFzdGVyaXNrLWNvbG9yXCI+PC9pPjwvc3VwPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGZvcm1Db250cm9sTmFtZT1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBkaXZpZGVyIG10LTMwXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdvIGZpZWxkc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGlzdHJpY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktbXVsdGktc2VsZWN0IGNsYXNzPVwic2VsZWN0aW9uIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRpc3RyaWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImRpc3RyaWN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbXVsdGlTZWxlY3REaXN0cmljdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VpLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBtdWx0aVNlbGVjdERpc3RyaWN0LmZpbHRlcmVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24uZGlzdHJpY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktbXVsdGktc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QmxvY2s8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktbXVsdGktc2VsZWN0IGNsYXNzPVwic2VsZWN0aW9uIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImJsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbXVsdGlTZWxlY3RCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VpLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBtdWx0aVNlbGVjdEJsb2NrLmZpbHRlcmVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24uYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktbXVsdGktc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3byBmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAqbmdJZj1cImNsdXN0ZXJzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2x1c3RlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzZWdtZW50IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1tdWx0aS1zZWxlY3QgY2xhc3M9XCJzZWxlY3Rpb24gdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY2x1c3RlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJjbHVzdGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbXVsdGlTZWxlY3RDbHVzdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG11bHRpU2VsZWN0Q2x1c3Rlci5maWx0ZXJlZE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLmNsdXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktbXVsdGktc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNjaG9vbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzZWdtZW50IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1tdWx0aS1zZWxlY3QgY2xhc3M9XCJzZWxlY3Rpb24gdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2Nob29sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cInNjaG9vbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI211bHRpU2VsZWN0U2Nob29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG11bHRpU2VsZWN0U2Nob29sLmZpbHRlcmVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24uc2Nob29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLW11bHRpLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d28gZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Sb2xlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHNlZ21lbnQgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3VpLW11bHRpLXNlbGVjdCBjbGFzcz1cInNlbGVjdGlvbiB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJyb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cInJvbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtdWx0aVNlbGVjdFJvbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbXVsdGlTZWxlY3RSb2xlLmZpbHRlcmVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1tdWx0aS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Qm9hcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktbXVsdGktc2VsZWN0IGNsYXNzPVwic2VsZWN0aW9uIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImJvYXJkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbXVsdGlTZWxlY3RCb2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VpLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBtdWx0aVNlbGVjdEJvYXJkLmZpbHRlcmVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1tdWx0aS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdvIGZpZWxkc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+R3JhZGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktbXVsdGktc2VsZWN0IGNsYXNzPVwic2VsZWN0aW9uIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImdyYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImdyYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtdWx0aVNlbGVjdEdyYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG11bHRpU2VsZWN0R3JhZGUuZmlsdGVyZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1tdWx0aS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=
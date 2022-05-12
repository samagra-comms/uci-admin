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
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function UserSegmentAddComponent_ng_template_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onAdd(); });
    i0.ɵɵtext(1, " Add ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r2.userSegmentForm.invalid);
} }
function UserSegmentAddComponent_sui_select_option_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r18.district);
} }
function UserSegmentAddComponent_sui_select_option_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r19.block);
} }
function UserSegmentAddComponent_div_40_sui_select_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
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
    const _r20 = i0.ɵɵreference(5);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r7.clusters);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", _r20.filteredOptions);
} }
function UserSegmentAddComponent_sui_select_option_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r23.school);
} }
function UserSegmentAddComponent_sui_select_option_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r24.name);
} }
function UserSegmentAddComponent_sui_select_option_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r25.name);
} }
function UserSegmentAddComponent_sui_select_option_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-select-option", 34);
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r26);
} }
export class UserSegmentAddComponent {
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
}
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
        const _r1 = i0.ɵɵreference(10);
        const _r3 = i0.ɵɵreference(30);
        const _r5 = i0.ɵɵreference(37);
        const _r8 = i0.ɵɵreference(46);
        const _r10 = i0.ɵɵreference(54);
        const _r12 = i0.ɵɵreference(61);
        const _r14 = i0.ɵɵreference(69);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1zZWdtZW50LWFkZC91c2VyLXNlZ21lbnQtYWRkLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXItc2VnbWVudC1hZGQvdXNlci1zZWdtZW50LWFkZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHdEUsT0FBTyxFQUF5QixVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDT2xELDZCQUNJO0lBQUEsa0NBQ0k7SUFBQSwwQkFBZ0Q7SUFDcEQsaUJBQVM7SUFDYiwwQkFBZTs7OztJQUVYLGtDQUVJO0lBRmdELGlNQUFpQjtJQUVqRSxxQkFDSjtJQUFBLGlCQUFTOzs7SUFGRCx5REFBb0M7OztJQTJCcEMsd0NBRW9COzs7SUFERCwyQ0FBeUI7OztJQWE1Qyx3Q0FFb0I7OztJQURELHdDQUFzQjs7O0lBY3pDLHdDQUVvQjs7O0lBREQsMENBQXdCOzs7SUFSdkQsK0JBQ0k7SUFBQSw2QkFBTztJQUFBLHVCQUFPO0lBQUEsaUJBQVE7SUFDdEIsK0JBQ0k7SUFBQSxnREFJSTtJQUFBLDRHQUVBO0lBQ0osaUJBQW1CO0lBQ3ZCLGlCQUFNO0lBQ1YsaUJBQU07Ozs7SUFQb0IsZUFBb0I7SUFBcEIseUNBQW9CO0lBRWYsZUFBeUQ7SUFBekQsOENBQXlEOzs7SUFhNUUsd0NBRW9COzs7SUFERCx5Q0FBdUI7OztJQWMxQyx3Q0FFb0I7OztJQURELHVDQUFxQjs7O0lBWXhDLHdDQUVvQjs7O0lBREQsdUNBQXFCOzs7SUFjeEMsd0NBRW9COzs7SUFERCxrQ0FBZ0I7O0FEdkgvRCxNQUFNLE9BQU8sdUJBQXVCO0lBa0JoQyxZ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aXR0ZXIsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VWNpU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHtVY2lHcmFwaFFsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLWdyYXBoLXFsLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItdXNlci1zZWdtZW50LWFkZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItc2VnbWVudC1hZGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXItc2VnbWVudC1hZGQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZWdtZW50QWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBmb3JtRmllbGRQcm9wZXJ0aWVzOiBBcnJheTxhbnk+O1xuICAgIHVzZXJTZWdtZW50OiBhbnkgPSB7fTtcbiAgICBpc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICBkaXN0cmljdHMgPSBbXTtcbiAgICBibG9ja3MgPSBbXTtcbiAgICBzY2hvb2xzID0gW107XG4gICAgY2x1c3RlcnMgPSBbXTtcbiAgICByb2xlcyA9IFtdO1xuICAgIGJvYXJkcyA9IFtdO1xuICAgIGdyYWRlID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl07XG4gICAgc3ViamVjdHMgPSBbXTtcbiAgICB1c2VyU2VnbWVudEZvcm06IEZvcm1Hcm91cDtcbiAgICBzdGF0ZSA9ICdIYXJ5YW5hJztcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1Y2lHcmFwaFFsU2VydmljZTogVWNpR3JhcGhRbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpO1xuICAgICAgICB0aGlzLmdldFVjaURpc3RyaWN0KCk7XG4gICAgICAgIHRoaXMuZ2V0VWNpUm9sZSgpO1xuICAgICAgICB0aGlzLmdldFVjaUJvYXJkKCk7XG4gICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFsnJ10sXG4gICAgICAgICAgICBkaXN0cmljdDogWycnXSxcbiAgICAgICAgICAgIGJsb2NrOiBbJyddLFxuICAgICAgICAgICAgY2x1c3RlcjogWycnXSxcbiAgICAgICAgICAgIHNjaG9vbDogWycnXSxcbiAgICAgICAgICAgIHJvbGU6IFsnJ10sXG4gICAgICAgICAgICBib2FyZDogWycnXSxcbiAgICAgICAgICAgIGdyYWRlOiBbJyddLFxuICAgICAgICAgICAgc3ViamVjdDogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXJTZWdtZW50Rm9ybS5nZXQoJ2Rpc3RyaWN0JykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdibG9jaycpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdjbHVzdGVyJykucGF0Y2hWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdzY2hvb2wnKS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaG9vbHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsdXN0ZXJzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVY2lCbG9jaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51c2VyU2VnbWVudEZvcm0uZ2V0KCdibG9jaycpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnY2x1c3RlcicpLnBhdGNoVmFsdWUoJycpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlZ21lbnRGb3JtLmdldCgnc2Nob29sJykucGF0Y2hWYWx1ZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hvb2xzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5jbHVzdGVycyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWNpQ2x1c3RlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWNpU2Nob29sRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWwuZW1pdChmYWxzZSk7XG4gICAgfVxuXG4gICAgb25BZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJTZWdtZW50Rm9ybS5pbnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSB0cnVlO1xuICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSB0aGlzLnVzZXJTZWdtZW50Rm9ybS52YWx1ZTtcbiAgICAgICAgY29uc3QgbG9jYXRpb25EYXRhID0gW107XG4gICAgICAgIGNvbnN0IGJsb2NrRGF0YSA9IFtdO1xuICAgICAgICBjb25zdCBkaXN0cmljdERhdGEgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzY2hvb2wgb2YgdGhpcy5zY2hvb2xzKSB7XG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlLnNjaG9vbC5pbmRleE9mKHNjaG9vbC5zY2hvb2wpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5wdXNoKHNjaG9vbCk7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRGF0YS5pbmRleE9mKHNjaG9vbC5ibG9jaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YS5wdXNoKHNjaG9vbC5ibG9jayk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RyaWN0RGF0YS5wdXNoKHNjaG9vbC5kaXN0cmljdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uRGF0YS5sZW5ndGggPT09IGZvcm1WYWx1ZS5zY2hvb2wpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvY2tEYXRhLmxlbmd0aCA8IGZvcm1WYWx1ZS5ibG9jay5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybVZhbHVlLmJsb2NrLmluZGV4T2YoYmxvY2suYmxvY2spICE9PSAtMSAmJiBibG9ja0RhdGEuaW5kZXhPZihibG9jay5ibG9jaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5wdXNoKGJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tEYXRhLnB1c2goYmxvY2suYmxvY2spO1xuICAgICAgICAgICAgICAgICAgICBkaXN0cmljdERhdGEucHVzaChibG9jay5kaXN0cmljdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChibG9ja0RhdGEubGVuZ3RoID09PSBmb3JtVmFsdWUuYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXN0cmljdERhdGEubGVuZ3RoIDwgZm9ybVZhbHVlLmRpc3RyaWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkaXN0cmljdCBvZiB0aGlzLmRpc3RyaWN0cykge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtVmFsdWUuZGlzdHJpY3QuaW5kZXhPZihkaXN0cmljdC5kaXN0cmljdCkgIT09IC0xICYmIGRpc3RyaWN0RGF0YS5pbmRleE9mKGRpc3RyaWN0LmRpc3RyaWN0KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25EYXRhLnB1c2goZGlzdHJpY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VyTG9jYXRpb246IGxvY2F0aW9uRGF0YSxcbiAgICAgICAgICAgICAgICByb2xlczogZm9ybVZhbHVlLnJvbGUsXG4gICAgICAgICAgICAgICAgdXNlclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0dWRlbnQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmcmFtZXdvcms6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQ6IGZvcm1WYWx1ZS5ib2FyZCxcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGVMZXZlbDogZm9ybVZhbHVlLmdyYWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudWNpU2VydmljZS51c2VyU2VnbWVudFF1ZXJ5QnVpbGRlcihwYXJhbSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5yZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZm9ybVZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtVmFsdWUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMudWNpU2VydmljZS5jcmVhdGVVc2VyU2VnbWVudCh7ZGF0YTogaXRlbXN9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyQWRkKGRhdGEuaW5zZXJ0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlclNob3cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZXJTaG93ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFmdGVyQWRkKGRhdGEpIHtcbiAgICAgICAgdGhpcy5hZGQuZW1pdChkYXRhKTtcbiAgICB9XG5cbiAgICBnZXRVY2lTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRTdGF0ZSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lEaXN0cmljdCgpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXREaXN0cmljdChwYXJhbXMpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzdHJpY3RzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLm9yZ2FuaXNhdGlvbiAmJiByZXMuZGF0YS5vcmdhbmlzYXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0cmljdHMgPSByZXMuZGF0YS5vcmdhbmlzYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaUJsb2NrKCkge1xuICAgICAgICBjb25zdCBmb3JtVmFsID0gdGhpcy51c2VyU2VnbWVudEZvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLCBkaXN0cmljdDogZm9ybVZhbC5kaXN0cmljdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldEJsb2NrKHBhcmFtcykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ibG9ja3MgPSBbXTtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEgJiYgcmVzLmRhdGEuYmxvY2tzICYmIHJlcy5kYXRhLmJsb2Nrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrcyA9IHJlcy5kYXRhLmJsb2NrcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VWNpQ2x1c3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9ybVZhbCA9IHRoaXMudXNlclNlZ21lbnRGb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSwgZGlzdHJpY3Q6IGZvcm1WYWwuZGlzdHJpY3QsIGJsb2NrOiBmb3JtVmFsLmJsb2NrXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0Q2x1c3RlcnMocGFyYW1zKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsdXN0ZXJzID0gW107XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLmNsdXN0ZXJzICYmIHJlcy5kYXRhLmNsdXN0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jbHVzdGVyc1swXS5jbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1c3RlcnMgPSByZXMuZGF0YS5jbHVzdGVycztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaVNjaG9vbERldGFpbHMoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1WYWwgPSB0aGlzLnVzZXJTZWdtZW50Rm9ybS52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsIGRpc3RyaWN0OiBmb3JtVmFsLmRpc3RyaWN0LCBibG9jazogZm9ybVZhbC5ibG9ja1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVjaUdyYXBoUWxTZXJ2aWNlLmdldFNjaG9vbERldGFpbHMocGFyYW1zKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjaG9vbHMgPSBbXTtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEgJiYgcmVzLmRhdGEuc2Nob29scyAmJiByZXMuZGF0YS5zY2hvb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nob29scyA9IHJlcy5kYXRhLnNjaG9vbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVjaVJvbGUoKSB7XG4gICAgICAgIHRoaXMudWNpR3JhcGhRbFNlcnZpY2UuZ2V0Um9sZSgpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEgJiYgcmVzLmRhdGEucm9sZSAmJiByZXMuZGF0YS5yb2xlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMgPSByZXMuZGF0YS5yb2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRVY2lCb2FyZCgpIHtcbiAgICAgICAgdGhpcy51Y2lHcmFwaFFsU2VydmljZS5nZXRCb2FyZHMoKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLmJvYXJkICYmIHJlcy5kYXRhLmJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRzID0gcmVzLmRhdGEuYm9hcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ1Y2ktYWRkLXNlZ21lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwidWkgZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmluZSB3aWRlIGNvbHVtbiBmb250LTEtMiBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICBDcmVhdGUgbmV3IHNlZ21lbnRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZSB3aWRlIGNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWZsb2F0ZWQgcHQtMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzYi1idG4gc2ItYnRuLW5vcm1hbCBzYi1idG4tb3V0bGluZS1wcmltYXJ5IG1yLTEwXCIgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTG9hZGVyU2hvdzsgZWxzZSBhZGRCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNiLWJ0biBzYi1idG4tbm9ybWFsIHNiLWJ0bi1wcmltYXJ5IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGFjdGl2ZSB0aW55IGlubGluZSBsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNhZGRCdG4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzYi1idG4gc2ItYnRuLW5vcm1hbCBzYi1idG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkFkZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwidXNlclNlZ21lbnRGb3JtLmludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRlbiB3aWRlIGNvbHVtbiBmb250LTEtMlwiPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cInVpIGZvcm0gdXNlci1zZWdtZW50LWZvcm1cIiBbZm9ybUdyb3VwXT1cInVzZXJTZWdtZW50Rm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWUgPHN1cD48aSBjbGFzcz1cImFzdGVyaXNrIGljb24gYXN0ZXJpc2stY29sb3JcIj48L2k+PC9zdXA+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXIgbXQtMzBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d28gZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EaXN0cmljdDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzZWdtZW50IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1tdWx0aS1zZWxlY3QgY2xhc3M9XCJzZWxlY3Rpb24gdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZGlzdHJpY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiZGlzdHJpY3RzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtdWx0aVNlbGVjdERpc3RyaWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG11bHRpU2VsZWN0RGlzdHJpY3QuZmlsdGVyZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi5kaXN0cmljdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1tdWx0aS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CbG9jazwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzZWdtZW50IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1tdWx0aS1zZWxlY3QgY2xhc3M9XCJzZWxlY3Rpb24gdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtdWx0aVNlbGVjdEJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG11bHRpU2VsZWN0QmxvY2suZmlsdGVyZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi5ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1tdWx0aS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHdvIGZpZWxkc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICpuZ0lmPVwiY2x1c3RlcnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DbHVzdGVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHNlZ21lbnQgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3VpLW11bHRpLXNlbGVjdCBjbGFzcz1cInNlbGVjdGlvbiB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjbHVzdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImNsdXN0ZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtdWx0aVNlbGVjdENsdXN0ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbXVsdGlTZWxlY3RDbHVzdGVyLmZpbHRlcmVkT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24uY2x1c3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1tdWx0aS1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2Nob29sPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHNlZ21lbnQgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3VpLW11bHRpLXNlbGVjdCBjbGFzcz1cInNlbGVjdGlvbiB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzY2hvb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwic2Nob29sc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjbXVsdGlTZWxlY3RTY2hvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbXVsdGlTZWxlY3RTY2hvb2wuZmlsdGVyZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi5zY2hvb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N1aS1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktbXVsdGktc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3byBmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJvbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgc2VnbWVudCBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktbXVsdGktc2VsZWN0IGNsYXNzPVwic2VsZWN0aW9uIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwicm9sZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI211bHRpU2VsZWN0Um9sZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VpLXNlbGVjdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBtdWx0aVNlbGVjdFJvbGUuZmlsdGVyZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLW11bHRpLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Cb2FyZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzZWdtZW50IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1tdWx0aS1zZWxlY3QgY2xhc3M9XCJzZWxlY3Rpb24gdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiYm9hcmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNtdWx0aVNlbGVjdEJvYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWktc2VsZWN0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG11bHRpU2VsZWN0Qm9hcmQuZmlsdGVyZWRPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLW11bHRpLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d28gZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5HcmFkZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzZWdtZW50IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1tdWx0aS1zZWxlY3QgY2xhc3M9XCJzZWxlY3Rpb24gdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZ3JhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiZ3JhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI211bHRpU2VsZWN0R3JhZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1aS1zZWxlY3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbXVsdGlTZWxlY3RHcmFkZS5maWx0ZXJlZE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWktc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3VpLW11bHRpLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==
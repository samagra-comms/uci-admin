import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UciService} from '../../services/uci.service';
import {UciGraphQlService} from '../../services/uci-graph-ql.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../services/global.service';

@Component({
    selector: 'lib-user-segment-add',
    templateUrl: './user-segment-add.component.html',
    styleUrls: ['./user-segment-add.component.css']
})
export class UserSegmentAddComponent implements OnInit {
    @Output() cancel = new EventEmitter<boolean>();
    @Output() add = new EventEmitter<any>();
    formFieldProperties: Array<any>;
    userSegment: any = {};
    isLoaderShow = false;
    districts = [];
    blocks = [];
    schools = [];
    clusters = [];
    roles = [];
    boards = [];
    grade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
    subjects = [];
    userSegmentForm: FormGroup;
    state = 'Haryana';
    resourceService;

    constructor(private uciService: UciService,
                private fb: FormBuilder,
                private uciGraphQlService: UciGraphQlService,
                private globalService: GlobalService) {
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
                const items = {
                    ...response,
                    name: formValue.name,
                    description: formValue.description
                };
                this.uciService.createUserSegment({data: items}).subscribe(
                    (data: any) => {
                        this.isLoaderShow = false;
                        this.afterAdd(data.inserted);
                    }, err => {
                        this.isLoaderShow = false;
                    }
                );
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
        this.uciGraphQlService.getDistrict(params).subscribe((res: any) => {
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
        this.uciGraphQlService.getBlock(params).subscribe((res: any) => {
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
        this.uciGraphQlService.getClusters(params).subscribe((res: any) => {
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
        this.uciGraphQlService.getSchoolDetails(params).subscribe((res: any) => {
            this.schools = [];
            if (res && res.data && res.data.schools && res.data.schools.length) {
                this.schools = res.data.schools;
            }
        });
    }

    getUciRole() {
        this.uciGraphQlService.getRole().subscribe((res: any) => {
            if (res && res.data && res.data.role && res.data.role.length) {
                this.roles = res.data.role;
            }
        });
    }

    getUciBoard() {
        this.uciGraphQlService.getBoards().subscribe((res: any) => {
            if (res && res.data && res.data.board && res.data.board.length) {
                this.boards = res.data.board;
            }
        });
    }
}

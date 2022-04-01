import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UciService} from '../../services/uci.service';
import {ToasterService} from '../../services/toaster.service';
import {v4 as uuidv4} from 'uuid';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'lib-exhaust-report',
    templateUrl: './exhaust-report.component.html',
    styleUrls: ['./exhaust-report.component.scss'],
})
export class ExhaustReportComponent implements OnInit {
    resourceService;
    user;
    conversationId;
    exhaustTypes = [
        {name: 'Response Exhaust', value: 'uci-response-exhaust'},
        {name: 'Private Exhaust', value: 'uci-private-exhaust'},
    ];
    filterForm: FormGroup;
    filters = {
        startDate: null,
        endDate: null,
        exhaustType: null,
    };
    displayedColumns: string[] = ['requestid', 'requesttype', 'requestdate', 'conversationid', 'startdate', 'enddate', 'status', 'reportlink', 'generateddate'];
    dataSource = [
        {
            requestid: 'dhheb1234',
            requesttype: 'Response Exhaust',
            requestdate: '14 / 03 / 2022',
            conversationid: 'uik123',
            startdate: '10 / 03 / 2022',
            enddate: '11/03/2022',
            status: 'Submitted',
            reportlink: '-',
            generateddate: '-'
        },
        {
            requestid: 'dhheb9876',
            requesttype: 'Private Exhaust',
            requestdate: '14 / 03 / 2022',
            conversationid: 'uik123',
            startdate: '10 / 03 / 2022',
            enddate: '11/03/2022',
            status: 'Success',
            reportlink: '-',
            generateddate: '15 / 03 / 2022'
        },
    ];

    constructor(
        private fb: FormBuilder,
        private uciService: UciService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toasterService: ToasterService,
        private globalService: GlobalService) {
        this.resourceService = this.globalService.getResourceService();
    }

    ngOnInit() {
        this.user = this.globalService.getUser();
        this.resourceService = this.globalService.getResourceService();
        if (!this.user) {
            this.router.navigate(['uci-admin']);
            return;
        }
        this.filterForm = this.fb.group({
            startDate: [''],
            endDate: [''],
            exhaustType: [this.exhaustTypes[0].value],
        });
        // this.filters.exhaustType = this.exhaustTypes[0].value;
        this.conversationId = this.activatedRoute.snapshot.paramMap.get('id');
        this.getJobList();
    }

    getJobList() {
        this.uciService.getJobList(this.conversationId, {}).subscribe(
            data => {
                console.log('job list data');
            }
        );
    }

    getJobInfo() {
        this.uciService.getJobInfo(this.conversationId, {}).subscribe(
            data => {
                console.log('job Info');
            }
        );
    }

    submitExhaust() {
        const exhaustData = {
            request: {
                dataset: this.filters.exhaustType,
                tag: uuidv4(),
                requestedBy: 'user_id',
                requestedChannel: '01309282781705830427',
                datasetConfig: {
                    type: this.filters.exhaustType,
                    conversationId: this.conversationId,
                    startDate: '2022-02-06',
                    endDate: '2022-02-10'
                },
                output_format: 'csv'
            }
        };
        this.uciService.submitExhaust(exhaustData).subscribe(
            data => {
                console.log('job Info');
            }
        );
    }


}

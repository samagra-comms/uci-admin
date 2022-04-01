import {ActivatedRoute, Router} from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {UciEventsService} from '../../uci-events.service';
import {IdiscussionConfig} from '../../models/uci-config.model';
import {ConfigService} from '../../services/config.service';
import {UciService} from '../../services/uci.service';
import {TelemetryUtilsService} from '../../telemetry-utils.service';
import {UciData} from '../../models/uci.model';
import {GlobalService} from '../../services/global.service';

@Component({
    selector: 'lib-lib-entry',
    templateUrl: './lib-entry.component.html',
    styleUrls: ['./lib-entry.component.scss']
})
export class LibEntryComponent implements OnInit {
    @Input() user;
    @Input() baseUrl;
    @Input() blobUrl;
    @Input() botPhoneNumber;
    @Input() resourceService;

    constructor(
        public activatedRoute: ActivatedRoute,
        private uciService: UciService,
        private configService: ConfigService,
        private location: Location,
        private uciEventsService: UciEventsService,
        private telemetryUtils: TelemetryUtilsService,
        private globalService: GlobalService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        if (this.user) {
            this.globalService.setUser(this.user);
        }
        if (this.baseUrl) {
            this.globalService.setBaseUrl(this.baseUrl);
        }
        if (this.blobUrl) {
            this.globalService.setBlobUrl(this.blobUrl);
        }
        if (this.botPhoneNumber) {
            this.globalService.setBotPhoneNumber(this.botPhoneNumber);
        }
        if (this.resourceService) {
            this.globalService.setResourceService(this.resourceService);
        }
        if (this.router.url === '/uci-admin') {
            this.router.navigate(['uci-admin/home'], { skipLocationChange: true });
        }
    }

    goBack(): void {
        this.location.back();
    }

    close(event): void {
        const eventAction = {
            action: 'DF_CLOSE'
        };
        this.uciEventsService.emitTelemetry(eventAction);
        this.telemetryUtils.logInteract(event, UciData.IPageName.LIB_ENTRY);
    }
}

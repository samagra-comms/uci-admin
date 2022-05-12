import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import * as i0 from "@angular/core";
export declare class ConversationSuccessComponent implements OnInit {
    private router;
    private activatedRoute;
    private globalService;
    url: string;
    botId: string;
    resourceService: any;
    constructor(router: Router, activatedRoute: ActivatedRoute, globalService: GlobalService);
    ngOnInit(): void;
    onCopy(id: any): void;
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDef<ConversationSuccessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ConversationSuccessComponent, "lib-conversation-success", never, {}, {}, never, never>;
}

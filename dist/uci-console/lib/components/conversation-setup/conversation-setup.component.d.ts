import { EventEmitter, OnInit } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { GlobalService } from '../../services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ConversationSetupComponent implements OnInit {
    private fb;
    private uciService;
    private globalService;
    dialog: MatDialog;
    conversationForm: FormGroup;
    isStartingMessageExist: any;
    startMinDate: any;
    userSegments: any;
    starringMessageChange: EventEmitter<any>;
    userSegmentDelete: EventEmitter<any>;
    matDateBreakpoint: any;
    endMinDate: any;
    resourceService: any;
    constructor(fb: FormBuilder, uciService: UciService, globalService: GlobalService, dialog: MatDialog);
    ngOnInit(): void;
    onStarringMessageChange(): void;
    onUserSegmentDelete(index: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ConversationSetupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ConversationSetupComponent, "lib-conversation-setup", never, { "conversationForm": "conversationForm"; "isStartingMessageExist": "isStartingMessageExist"; "startMinDate": "startMinDate"; "userSegments": "userSegments"; }, { "starringMessageChange": "starringMessageChange"; "userSegmentDelete": "userSegmentDelete"; }, never, never>;
}

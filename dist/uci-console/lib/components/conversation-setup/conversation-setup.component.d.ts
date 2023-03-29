import { EventEmitter, OnInit } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { GlobalService } from '../../services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConversationSetupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConversationSetupComponent, "lib-conversation-setup", never, { "conversationForm": "conversationForm"; "isStartingMessageExist": "isStartingMessageExist"; "startMinDate": "startMinDate"; "userSegments": "userSegments"; }, { "starringMessageChange": "starringMessageChange"; "userSegmentDelete": "userSegmentDelete"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLXNldHVwLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjb252ZXJzYXRpb24tc2V0dXAuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVjaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91Y2kuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb252ZXJzYXRpb25TZXR1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcml2YXRlIHVjaVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlO1xuICAgIGRpYWxvZzogTWF0RGlhbG9nO1xuICAgIGNvbnZlcnNhdGlvbkZvcm06IEZvcm1Hcm91cDtcbiAgICBpc1N0YXJ0aW5nTWVzc2FnZUV4aXN0OiBhbnk7XG4gICAgc3RhcnRNaW5EYXRlOiBhbnk7XG4gICAgdXNlclNlZ21lbnRzOiBhbnk7XG4gICAgc3RhcnJpbmdNZXNzYWdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgICB1c2VyU2VnbWVudERlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgbWF0RGF0ZUJyZWFrcG9pbnQ6IGFueTtcbiAgICBlbmRNaW5EYXRlOiBhbnk7XG4gICAgcmVzb3VyY2VTZXJ2aWNlOiBhbnk7XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCB1Y2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLCBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlLCBkaWFsb2c6IE1hdERpYWxvZyk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBvblN0YXJyaW5nTWVzc2FnZUNoYW5nZSgpOiB2b2lkO1xuICAgIG9uVXNlclNlZ21lbnREZWxldGUoaW5kZXg6IGFueSk6IHZvaWQ7XG59XG4iXX0=
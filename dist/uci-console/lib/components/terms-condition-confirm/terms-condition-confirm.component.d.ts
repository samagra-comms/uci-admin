import { OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class TermsConditionConfirmComponent implements OnInit {
    private globalService;
    dialogRef: MatDialogRef<TermsConditionConfirmComponent>;
    data: any;
    resourceService: any;
    allChecked: boolean;
    isLoaderShow: boolean;
    isSubmit: boolean;
    Appropriateness: any[];
    contentDetails: any[];
    usability: any[];
    breakpoint: any;
    constructor(globalService: GlobalService, dialogRef: MatDialogRef<TermsConditionConfirmComponent>, data: any);
    ngOnInit(): void;
    onCancel(): void;
    updateAllChecked(): void;
    allCheck(isAllCheck?: boolean): void;
    onSubmit(event: any): void;
    onResize(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<TermsConditionConfirmComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TermsConditionConfirmComponent, "lib-terms-condition-confirm", never, {}, {}, never, never>;
}

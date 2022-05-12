import { OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class TermsConditionsComponent implements OnInit {
    private globalService;
    dialogRef: MatDialogRef<TermsConditionsComponent>;
    data: any;
    resourceService: any;
    constructor(globalService: GlobalService, dialogRef: MatDialogRef<TermsConditionsComponent>, data: any);
    ngOnInit(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDef<TermsConditionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TermsConditionsComponent, "lib-terms-conditions", never, {}, {}, never, never>;
}

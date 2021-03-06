import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
import * as i0 from "@angular/core";
export declare class AddLogicComponent {
    private uciService;
    private fb;
    private toasterService;
    private globalService;
    dialogRef: MatDialogRef<AddLogicComponent>;
    data: any;
    resourceService: any;
    isModalLoaderShow: boolean;
    logicForm: FormGroup;
    odkFileAlreadyExist: boolean;
    fileErrorStatus: any;
    breakpoint: any;
    constructor(uciService: UciService, fb: FormBuilder, toasterService: ToasterService, globalService: GlobalService, dialogRef: MatDialogRef<AddLogicComponent>, data: any);
    initialize(): void;
    patchValue(item: any): void;
    onCancel(): void;
    onLogicAdd(): void;
    onFileUpload(event: any): void;
    manualDownload(): void;
    sampleODKDownload(): void;
    onResize(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<AddLogicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AddLogicComponent, "lib-add-logic", never, {}, {}, never, never>;
}

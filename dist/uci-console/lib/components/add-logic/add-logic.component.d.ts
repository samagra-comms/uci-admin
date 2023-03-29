import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UciService } from '../../services/uci.service';
import { ToasterService } from '../../services/toaster.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddLogicComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddLogicComponent, "lib-add-logic", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWxvZ2ljLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGQtbG9naWMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgR2xvYmFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVY2lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkTG9naWNDb21wb25lbnQge1xuICAgIHByaXZhdGUgdWNpU2VydmljZTtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlO1xuICAgIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFkZExvZ2ljQ29tcG9uZW50PjtcbiAgICBkYXRhOiBhbnk7XG4gICAgcmVzb3VyY2VTZXJ2aWNlOiBhbnk7XG4gICAgaXNNb2RhbExvYWRlclNob3c6IGJvb2xlYW47XG4gICAgbG9naWNGb3JtOiBGb3JtR3JvdXA7XG4gICAgb2RrRmlsZUFscmVhZHlFeGlzdDogYm9vbGVhbjtcbiAgICBmaWxlRXJyb3JTdGF0dXM6IGFueTtcbiAgICBicmVha3BvaW50OiBhbnk7XG4gICAgY29uc3RydWN0b3IodWNpU2VydmljZTogVWNpU2VydmljZSwgZmI6IEZvcm1CdWlsZGVyLCB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UsIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFkZExvZ2ljQ29tcG9uZW50PiwgZGF0YTogYW55KTtcbiAgICBpbml0aWFsaXplKCk6IHZvaWQ7XG4gICAgcGF0Y2hWYWx1ZShpdGVtOiBhbnkpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgb25Mb2dpY0FkZCgpOiB2b2lkO1xuICAgIG9uRmlsZVVwbG9hZChldmVudDogYW55KTogdm9pZDtcbiAgICBtYW51YWxEb3dubG9hZCgpOiB2b2lkO1xuICAgIHNhbXBsZU9ES0Rvd25sb2FkKCk6IHZvaWQ7XG4gICAgb25SZXNpemUoZXZlbnQ6IGFueSk6IHZvaWQ7XG59XG4iXX0=
import { OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MatDialogRef } from '@angular/material/dialog';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TermsConditionConfirmComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TermsConditionConfirmComponent, "lib-terms-condition-confirm", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9uLWNvbmZpcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbi1jb25maXJtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U7XG4gICAgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50PjtcbiAgICBkYXRhOiBhbnk7XG4gICAgcmVzb3VyY2VTZXJ2aWNlOiBhbnk7XG4gICAgYWxsQ2hlY2tlZDogYm9vbGVhbjtcbiAgICBpc0xvYWRlclNob3c6IGJvb2xlYW47XG4gICAgaXNTdWJtaXQ6IGJvb2xlYW47XG4gICAgQXBwcm9wcmlhdGVuZXNzOiBhbnlbXTtcbiAgICBjb250ZW50RGV0YWlsczogYW55W107XG4gICAgdXNhYmlsaXR5OiBhbnlbXTtcbiAgICBicmVha3BvaW50OiBhbnk7XG4gICAgY29uc3RydWN0b3IoZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSwgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGVybXNDb25kaXRpb25Db25maXJtQ29tcG9uZW50PiwgZGF0YTogYW55KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgdXBkYXRlQWxsQ2hlY2tlZCgpOiB2b2lkO1xuICAgIGFsbENoZWNrKGlzQWxsQ2hlY2s/OiBib29sZWFuKTogdm9pZDtcbiAgICBvblN1Ym1pdChldmVudDogYW55KTogdm9pZDtcbiAgICBvblJlc2l6ZShldmVudDogYW55KTogdm9pZDtcbn1cbiJdfQ==
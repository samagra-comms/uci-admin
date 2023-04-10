import { OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { MatDialogRef } from '@angular/material/dialog';
import * as ɵngcc0 from '@angular/core';
export declare class TermsConditionsComponent implements OnInit {
    private globalService;
    dialogRef: MatDialogRef<TermsConditionsComponent>;
    data: any;
    resourceService: any;
    constructor(globalService: GlobalService, dialogRef: MatDialogRef<TermsConditionsComponent>, data: any);
    ngOnInit(): void;
    onCancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TermsConditionsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TermsConditionsComponent, "lib-terms-conditions", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGVybXNDb25kaXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U7XG4gICAgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGVybXNDb25kaXRpb25zQ29tcG9uZW50PjtcbiAgICBkYXRhOiBhbnk7XG4gICAgcmVzb3VyY2VTZXJ2aWNlOiBhbnk7XG4gICAgY29uc3RydWN0b3IoZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSwgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGVybXNDb25kaXRpb25zQ29tcG9uZW50PiwgZGF0YTogYW55KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG59XG4iXX0=
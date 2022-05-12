import * as i0 from "@angular/core";
export declare class GlobalService {
    private user;
    readonly user$: import("rxjs").Observable<any>;
    private baseUrl;
    private blobUrl;
    private botPhoneNumber;
    private resourceService;
    readonly baseUrl$: import("rxjs").Observable<any>;
    readonly resourceService$: import("rxjs").Observable<any>;
    constructor();
    setUser(user: any): void;
    getUser(): any;
    setBaseUrl(baseUrl: any): void;
    getBaseUrl(): any;
    setBlobUrl(baseUrl: any): void;
    getBlobUrl(): any;
    setBotPhoneNumber(phoneNumber: any): void;
    getBotPhoneNumber(): any;
    setResourceService(resourceService: any): void;
    getResourceService(): any;
    static ɵfac: i0.ɵɵFactoryDef<GlobalService, never>;
    static ɵprov: i0.ɵɵInjectableDef<GlobalService>;
}

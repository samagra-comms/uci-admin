import * as i0 from "@angular/core";
/**
 * Service to show toaster
 *
 */
export declare class ToasterService {
    /**
     * To show toaster messages
     */
    iziToast: any;
    /**
       * Constructor to create injected service(s) object
       */
    constructor();
    /**
     * Format success message
     * @memberOf Services.toasterService
     * @param {string}  message - Success message
     */
    success(message: string): void;
    /**
     * Format information message
     * @memberOf Services.toasterService
     * @param {string}  message - Info message
     */
    info(message: string): void;
    /**
     * Format error message
     * @memberOf Services.toasterService
     * @param {string}  message - Error message
     */
    error(message: string): void;
    /**
     * Format warning message
     * @memberOf Services.toasterService
     * @param {string}  message - Warning message
     */
    warning(message: string): void;
    /**
     * Custom toaster message to be configured
     * @param config
     */
    custom(config: any): void;
    static ɵfac: i0.ɵɵFactoryDef<ToasterService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ToasterService>;
}

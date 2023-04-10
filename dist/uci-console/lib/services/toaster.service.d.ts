/**
 * Service to show toaster
 *
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToasterService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ToasterService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInRvYXN0ZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTZXJ2aWNlIHRvIHNob3cgdG9hc3RlclxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVG9hc3RlclNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIFRvIHNob3cgdG9hc3RlciBtZXNzYWdlc1xuICAgICAqL1xuICAgIGl6aVRvYXN0OiBhbnk7XG4gICAgLyoqXG4gICAgICAgKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgaW5qZWN0ZWQgc2VydmljZShzKSBvYmplY3RcbiAgICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgLyoqXG4gICAgICogRm9ybWF0IHN1Y2Nlc3MgbWVzc2FnZVxuICAgICAqIEBtZW1iZXJPZiBTZXJ2aWNlcy50b2FzdGVyU2VydmljZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgbWVzc2FnZSAtIFN1Y2Nlc3MgbWVzc2FnZVxuICAgICAqL1xuICAgIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBGb3JtYXQgaW5mb3JtYXRpb24gbWVzc2FnZVxuICAgICAqIEBtZW1iZXJPZiBTZXJ2aWNlcy50b2FzdGVyU2VydmljZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgbWVzc2FnZSAtIEluZm8gbWVzc2FnZVxuICAgICAqL1xuICAgIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBGb3JtYXQgZXJyb3IgbWVzc2FnZVxuICAgICAqIEBtZW1iZXJPZiBTZXJ2aWNlcy50b2FzdGVyU2VydmljZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgbWVzc2FnZSAtIEVycm9yIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZvcm1hdCB3YXJuaW5nIG1lc3NhZ2VcbiAgICAgKiBAbWVtYmVyT2YgU2VydmljZXMudG9hc3RlclNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIG1lc3NhZ2UgLSBXYXJuaW5nIG1lc3NhZ2VcbiAgICAgKi9cbiAgICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3VzdG9tIHRvYXN0ZXIgbWVzc2FnZSB0byBiZSBjb25maWd1cmVkXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGN1c3RvbShjb25maWc6IGFueSk6IHZvaWQ7XG59XG4iXX0=
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service to show toaster
 *
 */
export class ToasterService {
    /**
       * Constructor to create injected service(s) object
       */
    constructor() {
        this.iziToast = iziToast; // global object
        this.iziToast.settings({
            position: 'topCenter',
            titleSize: '18'
        });
    }
    /**
     * Format success message
     * @memberOf Services.toasterService
     * @param {string}  message - Success message
     */
    success(message) {
        this.iziToast.success({
            title: message,
            class: 'sb-toaster sb-toast-success'
        });
    }
    /**
     * Format information message
     * @memberOf Services.toasterService
     * @param {string}  message - Info message
     */
    info(message) {
        this.iziToast.info({
            title: message,
            class: 'sb-toaster sb-toast-info'
        });
    }
    /**
     * Format error message
     * @memberOf Services.toasterService
     * @param {string}  message - Error message
     */
    error(message) {
        this.iziToast.error({
            title: message,
            class: 'sb-toaster sb-toast-error'
        });
    }
    /**
     * Format warning message
     * @memberOf Services.toasterService
     * @param {string}  message - Warning message
     */
    warning(message) {
        this.iziToast.warning({
            title: message,
            class: 'sb-toaster sb-toast-warning'
        });
    }
    /**
     * Custom toaster message to be configured
     * @param config
     */
    custom(config) {
        this.iziToast.show({
            class: config.class,
            message: config.message
        });
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(); };
ToasterService.ɵprov = i0.ɵɵdefineInjectable({ token: ToasterService, factory: ToasterService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToasterService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7OztHQUdHO0FBRUgsTUFBTSxPQUFPLGNBQWM7SUFPekI7O1NBRUU7SUFDRjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsZ0JBQWdCO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLE9BQWU7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDcEIsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsNkJBQTZCO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLE9BQWU7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsMEJBQTBCO1NBQ2xDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE9BQWU7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEIsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsMkJBQTJCO1NBQ25DLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLE9BQWU7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDcEIsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsNkJBQTZCO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7OzRFQTNFVSxjQUFjO3NEQUFkLGNBQWMsV0FBZCxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgY29uc3QgaXppVG9hc3Q6IGFueTtcbi8qKlxuICogU2VydmljZSB0byBzaG93IHRvYXN0ZXJcbiAqXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdGVyU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIFRvIHNob3cgdG9hc3RlciBtZXNzYWdlc1xuICAgKi9cbiAgcHVibGljIGl6aVRvYXN0OiBhbnk7XG5cbiAgLyoqXG5cdCAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBpbmplY3RlZCBzZXJ2aWNlKHMpIG9iamVjdFxuXHQgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pemlUb2FzdCA9IGl6aVRvYXN0OyAvLyBnbG9iYWwgb2JqZWN0XG4gICAgdGhpcy5pemlUb2FzdC5zZXR0aW5ncyh7XG4gICAgICBwb3NpdGlvbjogJ3RvcENlbnRlcicsXG4gICAgICB0aXRsZVNpemU6ICcxOCdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgc3VjY2VzcyBtZXNzYWdlXG4gICAqIEBtZW1iZXJPZiBTZXJ2aWNlcy50b2FzdGVyU2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG1lc3NhZ2UgLSBTdWNjZXNzIG1lc3NhZ2VcbiAgICovXG4gIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pemlUb2FzdC5zdWNjZXNzKHtcbiAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgY2xhc3M6ICdzYi10b2FzdGVyIHNiLXRvYXN0LXN1Y2Nlc3MnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGluZm9ybWF0aW9uIG1lc3NhZ2VcbiAgICogQG1lbWJlck9mIFNlcnZpY2VzLnRvYXN0ZXJTZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgbWVzc2FnZSAtIEluZm8gbWVzc2FnZVxuICAgKi9cbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLml6aVRvYXN0LmluZm8oe1xuICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICBjbGFzczogJ3NiLXRvYXN0ZXIgc2ItdG9hc3QtaW5mbydcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgZXJyb3IgbWVzc2FnZVxuICAgKiBAbWVtYmVyT2YgU2VydmljZXMudG9hc3RlclNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBtZXNzYWdlIC0gRXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pemlUb2FzdC5lcnJvcih7XG4gICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgIGNsYXNzOiAnc2ItdG9hc3RlciBzYi10b2FzdC1lcnJvcidcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgd2FybmluZyBtZXNzYWdlXG4gICAqIEBtZW1iZXJPZiBTZXJ2aWNlcy50b2FzdGVyU2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG1lc3NhZ2UgLSBXYXJuaW5nIG1lc3NhZ2VcbiAgICovXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pemlUb2FzdC53YXJuaW5nKHtcbiAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgY2xhc3M6ICdzYi10b2FzdGVyIHNiLXRvYXN0LXdhcm5pbmcnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIHRvYXN0ZXIgbWVzc2FnZSB0byBiZSBjb25maWd1cmVkXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGN1c3RvbShjb25maWc6IGFueSkge1xuICAgIHRoaXMuaXppVG9hc3Quc2hvdyh7XG4gICAgICBjbGFzczogY29uZmlnLmNsYXNzLFxuICAgICAgbWVzc2FnZTogY29uZmlnLm1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufVxuIl19
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service to show toaster
 *
 */
var ToasterService = /** @class */ (function () {
    /**
       * Constructor to create injected service(s) object
       */
    function ToasterService() {
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
    ToasterService.prototype.success = function (message) {
        this.iziToast.success({
            title: message,
            class: 'sb-toaster sb-toast-success'
        });
    };
    /**
     * Format information message
     * @memberOf Services.toasterService
     * @param {string}  message - Info message
     */
    ToasterService.prototype.info = function (message) {
        this.iziToast.info({
            title: message,
            class: 'sb-toaster sb-toast-info'
        });
    };
    /**
     * Format error message
     * @memberOf Services.toasterService
     * @param {string}  message - Error message
     */
    ToasterService.prototype.error = function (message) {
        this.iziToast.error({
            title: message,
            class: 'sb-toaster sb-toast-error'
        });
    };
    /**
     * Format warning message
     * @memberOf Services.toasterService
     * @param {string}  message - Warning message
     */
    ToasterService.prototype.warning = function (message) {
        this.iziToast.warning({
            title: message,
            class: 'sb-toaster sb-toast-warning'
        });
    };
    /**
     * Custom toaster message to be configured
     * @param config
     */
    ToasterService.prototype.custom = function (config) {
        this.iziToast.show({
            class: config.class,
            message: config.message
        });
    };
    ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(); };
    ToasterService.ɵprov = i0.ɵɵdefineInjectable({ token: ToasterService, factory: ToasterService.ɵfac });
    return ToasterService;
}());
export { ToasterService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToasterService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7OztHQUdHO0FBQ0g7SUFRRTs7U0FFRTtJQUNGO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0I7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDckIsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQ0FBTyxHQUFQLFVBQVEsT0FBZTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNwQixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSw2QkFBNkI7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBSSxHQUFKLFVBQUssT0FBZTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSwwQkFBMEI7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBSyxHQUFMLFVBQU0sT0FBZTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNsQixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSwyQkFBMkI7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQ0FBTyxHQUFQLFVBQVEsT0FBZTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNwQixLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSw2QkFBNkI7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtCQUFNLEdBQU4sVUFBTyxNQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztnRkEzRVUsY0FBYzswREFBZCxjQUFjLFdBQWQsY0FBYzt5QkFQM0I7Q0FtRkMsQUE3RUQsSUE2RUM7U0E1RVksY0FBYztrREFBZCxjQUFjO2NBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGNvbnN0IGl6aVRvYXN0OiBhbnk7XG4vKipcbiAqIFNlcnZpY2UgdG8gc2hvdyB0b2FzdGVyXG4gKlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RlclNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBUbyBzaG93IHRvYXN0ZXIgbWVzc2FnZXNcbiAgICovXG4gIHB1YmxpYyBpemlUb2FzdDogYW55O1xuXG4gIC8qKlxuXHQgKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgaW5qZWN0ZWQgc2VydmljZShzKSBvYmplY3Rcblx0ICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXppVG9hc3QgPSBpemlUb2FzdDsgLy8gZ2xvYmFsIG9iamVjdFxuICAgIHRoaXMuaXppVG9hc3Quc2V0dGluZ3Moe1xuICAgICAgcG9zaXRpb246ICd0b3BDZW50ZXInLFxuICAgICAgdGl0bGVTaXplOiAnMTgnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IHN1Y2Nlc3MgbWVzc2FnZVxuICAgKiBAbWVtYmVyT2YgU2VydmljZXMudG9hc3RlclNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBtZXNzYWdlIC0gU3VjY2VzcyBtZXNzYWdlXG4gICAqL1xuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuaXppVG9hc3Quc3VjY2Vzcyh7XG4gICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgIGNsYXNzOiAnc2ItdG9hc3RlciBzYi10b2FzdC1zdWNjZXNzJ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBpbmZvcm1hdGlvbiBtZXNzYWdlXG4gICAqIEBtZW1iZXJPZiBTZXJ2aWNlcy50b2FzdGVyU2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG1lc3NhZ2UgLSBJbmZvIG1lc3NhZ2VcbiAgICovXG4gIGluZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pemlUb2FzdC5pbmZvKHtcbiAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgY2xhc3M6ICdzYi10b2FzdGVyIHNiLXRvYXN0LWluZm8nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGVycm9yIG1lc3NhZ2VcbiAgICogQG1lbWJlck9mIFNlcnZpY2VzLnRvYXN0ZXJTZXJ2aWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgbWVzc2FnZSAtIEVycm9yIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuaXppVG9hc3QuZXJyb3Ioe1xuICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICBjbGFzczogJ3NiLXRvYXN0ZXIgc2ItdG9hc3QtZXJyb3InXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IHdhcm5pbmcgbWVzc2FnZVxuICAgKiBAbWVtYmVyT2YgU2VydmljZXMudG9hc3RlclNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBtZXNzYWdlIC0gV2FybmluZyBtZXNzYWdlXG4gICAqL1xuICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuaXppVG9hc3Qud2FybmluZyh7XG4gICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgIGNsYXNzOiAnc2ItdG9hc3RlciBzYi10b2FzdC13YXJuaW5nJ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSB0b2FzdGVyIG1lc3NhZ2UgdG8gYmUgY29uZmlndXJlZFxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBjdXN0b20oY29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLml6aVRvYXN0LnNob3coe1xuICAgICAgY2xhc3M6IGNvbmZpZy5jbGFzcyxcbiAgICAgIG1lc3NhZ2U6IGNvbmZpZy5tZXNzYWdlXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
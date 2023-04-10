import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "./global.service";
var PaginatorIntl = /** @class */ (function (_super) {
    __extends(PaginatorIntl, _super);
    function PaginatorIntl(globalService) {
        var _this = _super.call(this) || this;
        _this.globalService = globalService;
        _this.getRangeLabel = function (page, pageSize, length) {
            var _a, _b;
            // tslint:disable-next-line:max-line-length
            var of = _this.resourceService.frmelmnts && _this.resourceService.frmelmnts.lbl && _this.resourceService.frmelmnts.lbl.of ? (_b = (_a = _this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.of : 'of';
            if (length === 0 || pageSize === 0) {
                return '0 ' + of + ' ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;
            var endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
        };
        _this.globalService.resourceService$.subscribe(function (d) {
            _this.resourceService = d;
            _this.getPaginatorIntl();
            if (_this.globalService.getResourceService() && _this.globalService.getResourceService().languageSelected$) {
                _this.globalService.getResourceService().languageSelected$.subscribe(function (lang) {
                    _this.getPaginatorIntl();
                });
            }
        });
        return _this;
    }
    PaginatorIntl.prototype.getPaginatorIntl = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.itemsPerPageLabel = (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.itemsPerPageLabel;
        this.nextPageLabel = (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.nextPageLabel;
        this.previousPageLabel = (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.lbl) === null || _f === void 0 ? void 0 : _f.previousPageLabel;
        this.firstPageLabel = (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.lbl) === null || _h === void 0 ? void 0 : _h.firstPageLabel;
        this.lastPageLabel = (_k = (_j = this.resourceService.frmelmnts) === null || _j === void 0 ? void 0 : _j.lbl) === null || _k === void 0 ? void 0 : _k.lastPageLabel;
        this.changes.next();
        // this.getRangeLabel = this.getRangeLabel.bind(this);
    };
    PaginatorIntl.ctorParameters = function () { return [
        { type: GlobalService }
    ]; };
    PaginatorIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaginatorIntl_Factory() { return new PaginatorIntl(i0.ɵɵinject(i1.GlobalService)); }, token: PaginatorIntl, providedIn: "root" });
    PaginatorIntl = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PaginatorIntl);
    return PaginatorIntl;
}(MatPaginatorIntl));
export { PaginatorIntl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcGFnaW5hdG9yLWludGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7OztBQUs3RDtJQUFtQyxpQ0FBZ0I7SUFHL0MsdUJBQW1CLGFBQTRCO1FBQS9DLFlBQ0ksaUJBQU8sU0FZVjtRQWJrQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXlCL0MsbUJBQWEsR0FBRyxVQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE1BQWM7O1lBQzNELDJDQUEyQztZQUMzQyxJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLEdBQUcsMENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUssSUFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBQ25DO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUU5RyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDekQsT0FBTyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ3ZFLENBQUMsQ0FBQTtRQWxDRyxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDM0MsS0FBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFO2dCQUN0RyxLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUMvRCxVQUFBLElBQUk7b0JBQ0EsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzVCLENBQUMsQ0FDSixDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCOztRQUNJLElBQUksQ0FBQyxpQkFBaUIsZUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsMENBQUUsR0FBRywwQ0FBRSxpQkFBaUIsQ0FBQztRQUNoRixJQUFJLENBQUMsYUFBYSxlQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUywwQ0FBRSxHQUFHLDBDQUFFLGFBQWEsQ0FBQztRQUN4RSxJQUFJLENBQUMsaUJBQWlCLGVBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLEdBQUcsMENBQUUsaUJBQWlCLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsZUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsMENBQUUsR0FBRywwQ0FBRSxjQUFjLENBQUM7UUFDMUUsSUFBSSxDQUFDLGFBQWEsZUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsMENBQUUsR0FBRywwQ0FBRSxhQUFhLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixzREFBc0Q7SUFDMUQsQ0FBQzs7Z0JBdkJpQyxhQUFhOzs7SUFIdEMsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO09BQ1csYUFBYSxDQXdDekI7d0JBL0NEO0NBK0NDLEFBeENELENBQW1DLGdCQUFnQixHQXdDbEQ7U0F4Q1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4vZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JJbnRsfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvckludGwgZXh0ZW5kcyBNYXRQYWdpbmF0b3JJbnRsIHtcbiAgICByZXNvdXJjZVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2UucmVzb3VyY2VTZXJ2aWNlJC5zdWJzY3JpYmUoZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlU2VydmljZSA9IGQ7XG4gICAgICAgICAgICB0aGlzLmdldFBhZ2luYXRvckludGwoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCkgJiYgdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpLmxhbmd1YWdlU2VsZWN0ZWQkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpLmxhbmd1YWdlU2VsZWN0ZWQkLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgbGFuZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2luYXRvckludGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFBhZ2luYXRvckludGwoKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlTGFiZWwgPSB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uaXRlbXNQZXJQYWdlTGFiZWw7XG4gICAgICAgIHRoaXMubmV4dFBhZ2VMYWJlbCA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5uZXh0UGFnZUxhYmVsO1xuICAgICAgICB0aGlzLnByZXZpb3VzUGFnZUxhYmVsID0gdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LnByZXZpb3VzUGFnZUxhYmVsO1xuICAgICAgICB0aGlzLmZpcnN0UGFnZUxhYmVsID0gdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/LmZpcnN0UGFnZUxhYmVsO1xuICAgICAgICB0aGlzLmxhc3RQYWdlTGFiZWwgPSB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ubGFzdFBhZ2VMYWJlbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VzLm5leHQoKTtcbiAgICAgICAgLy8gdGhpcy5nZXRSYW5nZUxhYmVsID0gdGhpcy5nZXRSYW5nZUxhYmVsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0UmFuZ2VMYWJlbCA9IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBjb25zdCBvZiA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cyAmJiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHMubGJsICYmIHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cy5sYmwub2YgPyB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ub2YgOiAnb2YnO1xuICAgICAgICBpZiAobGVuZ3RoID09PSAwIHx8IHBhZ2VTaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJzAgJyArIG9mICsgJyAnICsgbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemUgPiBsZW5ndGggPyAoTWF0aC5jZWlsKGxlbmd0aCAvIHBhZ2VTaXplKSAtIDEpICogcGFnZVNpemUgOiBwYWdlICogcGFnZVNpemU7XG5cbiAgICAgICAgY29uc3QgZW5kSW5kZXggPSBNYXRoLm1pbihzdGFydEluZGV4ICsgcGFnZVNpemUsIGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBzdGFydEluZGV4ICsgMSArICcgLSAnICsgZW5kSW5kZXggKyAnICcgKyBvZiArICcgJyArIGxlbmd0aDtcbiAgICB9XG59XG4iXX0=
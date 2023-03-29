import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "./global.service";
let PaginatorIntl = class PaginatorIntl extends MatPaginatorIntl {
    constructor(globalService) {
        super();
        this.globalService = globalService;
        this.getRangeLabel = (page, pageSize, length) => {
            var _a, _b;
            // tslint:disable-next-line:max-line-length
            const of = this.resourceService.frmelmnts && this.resourceService.frmelmnts.lbl && this.resourceService.frmelmnts.lbl.of ? (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.of : 'of';
            if (length === 0 || pageSize === 0) {
                return '0 ' + of + ' ' + length;
            }
            length = Math.max(length, 0);
            const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;
            const endIndex = Math.min(startIndex + pageSize, length);
            return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
        };
        this.globalService.resourceService$.subscribe(d => {
            this.resourceService = d;
            this.getPaginatorIntl();
            if (this.globalService.getResourceService() && this.globalService.getResourceService().languageSelected$) {
                this.globalService.getResourceService().languageSelected$.subscribe(lang => {
                    this.getPaginatorIntl();
                });
            }
        });
    }
    getPaginatorIntl() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.itemsPerPageLabel = (_b = (_a = this.resourceService.frmelmnts) === null || _a === void 0 ? void 0 : _a.lbl) === null || _b === void 0 ? void 0 : _b.itemsPerPageLabel;
        this.nextPageLabel = (_d = (_c = this.resourceService.frmelmnts) === null || _c === void 0 ? void 0 : _c.lbl) === null || _d === void 0 ? void 0 : _d.nextPageLabel;
        this.previousPageLabel = (_f = (_e = this.resourceService.frmelmnts) === null || _e === void 0 ? void 0 : _e.lbl) === null || _f === void 0 ? void 0 : _f.previousPageLabel;
        this.firstPageLabel = (_h = (_g = this.resourceService.frmelmnts) === null || _g === void 0 ? void 0 : _g.lbl) === null || _h === void 0 ? void 0 : _h.firstPageLabel;
        this.lastPageLabel = (_k = (_j = this.resourceService.frmelmnts) === null || _j === void 0 ? void 0 : _j.lbl) === null || _k === void 0 ? void 0 : _k.lastPageLabel;
        this.changes.next();
        // this.getRangeLabel = this.getRangeLabel.bind(this);
    }
};
PaginatorIntl.ctorParameters = () => [
    { type: GlobalService }
];
PaginatorIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaginatorIntl_Factory() { return new PaginatorIntl(i0.ɵɵinject(i1.GlobalService)); }, token: PaginatorIntl, providedIn: "root" });
PaginatorIntl = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PaginatorIntl);
export { PaginatorIntl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcGFnaW5hdG9yLWludGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7OztBQUs3RCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsZ0JBQWdCO0lBRy9DLFlBQW1CLGFBQTRCO1FBQzNDLEtBQUssRUFBRSxDQUFDO1FBRE8sa0JBQWEsR0FBYixhQUFhLENBQWU7UUF5Qi9DLGtCQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQVUsRUFBRTs7WUFDdkUsMkNBQTJDO1lBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsMENBQUUsR0FBRywwQ0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxSyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7YUFDbkM7WUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBRTlHLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6RCxPQUFPLFVBQVUsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDdkUsQ0FBQyxDQUFBO1FBbENHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FDL0QsSUFBSSxDQUFDLEVBQUU7b0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzVCLENBQUMsQ0FDSixDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQkFBZ0I7O1FBQ1osSUFBSSxDQUFDLGlCQUFpQixlQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUywwQ0FBRSxHQUFHLDBDQUFFLGlCQUFpQixDQUFDO1FBQ2hGLElBQUksQ0FBQyxhQUFhLGVBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLEdBQUcsMENBQUUsYUFBYSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxpQkFBaUIsZUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsMENBQUUsR0FBRywwQ0FBRSxpQkFBaUIsQ0FBQztRQUNoRixJQUFJLENBQUMsY0FBYyxlQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUywwQ0FBRSxHQUFHLDBDQUFFLGNBQWMsQ0FBQztRQUMxRSxJQUFJLENBQUMsYUFBYSxlQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUywwQ0FBRSxHQUFHLDBDQUFFLGFBQWEsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLHNEQUFzRDtJQUMxRCxDQUFDO0NBY0osQ0FBQTs7WUFyQ3FDLGFBQWE7OztBQUh0QyxhQUFhO0lBSHpCLFVBQVUsQ0FBQztRQUNSLFVBQVUsRUFBRSxNQUFNO0tBQ3JCLENBQUM7R0FDVyxhQUFhLENBd0N6QjtTQXhDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R2xvYmFsU2VydmljZX0gZnJvbSAnLi9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvckludGx9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9ySW50bCBleHRlbmRzIE1hdFBhZ2luYXRvckludGwge1xuICAgIHJlc291cmNlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5yZXNvdXJjZVNlcnZpY2UkLnN1YnNjcmliZShkID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VTZXJ2aWNlID0gZDtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnaW5hdG9ySW50bCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKSAmJiB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCkubGFuZ3VhZ2VTZWxlY3RlZCQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2UuZ2V0UmVzb3VyY2VTZXJ2aWNlKCkubGFuZ3VhZ2VTZWxlY3RlZCQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBsYW5nID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnaW5hdG9ySW50bCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0UGFnaW5hdG9ySW50bCgpIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2VMYWJlbCA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5pdGVtc1BlclBhZ2VMYWJlbDtcbiAgICAgICAgdGhpcy5uZXh0UGFnZUxhYmVsID0gdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lm5leHRQYWdlTGFiZWw7XG4gICAgICAgIHRoaXMucHJldmlvdXNQYWdlTGFiZWwgPSB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ucHJldmlvdXNQYWdlTGFiZWw7XG4gICAgICAgIHRoaXMuZmlyc3RQYWdlTGFiZWwgPSB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8uZmlyc3RQYWdlTGFiZWw7XG4gICAgICAgIHRoaXMubGFzdFBhZ2VMYWJlbCA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5sYXN0UGFnZUxhYmVsO1xuICAgICAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xuICAgICAgICAvLyB0aGlzLmdldFJhbmdlTGFiZWwgPSB0aGlzLmdldFJhbmdlTGFiZWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRSYW5nZUxhYmVsID0gKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIGNvbnN0IG9mID0gdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzICYmIHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cy5sYmwgJiYgdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzLmxibC5vZiA/IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5vZiA6ICdvZic7XG4gICAgICAgIGlmIChsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnMCAnICsgb2YgKyAnICcgKyBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCAwKTtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhZ2UgKiBwYWdlU2l6ZSA+IGxlbmd0aCA/IChNYXRoLmNlaWwobGVuZ3RoIC8gcGFnZVNpemUpIC0gMSkgKiBwYWdlU2l6ZSA6IHBhZ2UgKiBwYWdlU2l6ZTtcblxuICAgICAgICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWluKHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSwgbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0SW5kZXggKyAxICsgJyAtICcgKyBlbmRJbmRleCArICcgJyArIG9mICsgJyAnICsgbGVuZ3RoO1xuICAgIH1cbn1cbiJdfQ==
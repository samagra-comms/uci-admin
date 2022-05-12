import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "./global.service";
export class PaginatorIntl extends MatPaginatorIntl {
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
}
PaginatorIntl.ɵfac = function PaginatorIntl_Factory(t) { return new (t || PaginatorIntl)(i0.ɵɵinject(i1.GlobalService)); };
PaginatorIntl.ɵprov = i0.ɵɵdefineInjectable({ token: PaginatorIntl, factory: PaginatorIntl.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorIntl, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzYW1hZ3JhLXgvdWNpLWNvbnNvbGUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcGFnaW5hdG9yLWludGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFLN0QsTUFBTSxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7SUFHL0MsWUFBbUIsYUFBNEI7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFETyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXlCL0Msa0JBQWEsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE1BQWMsRUFBVSxFQUFFOztZQUN2RSwyQ0FBMkM7WUFDM0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUywwQ0FBRSxHQUFHLDBDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFLLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUNuQztZQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFFOUcsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3pELE9BQU8sVUFBVSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUN2RSxDQUFDLENBQUE7UUFsQ0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFO2dCQUN0RyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUMvRCxJQUFJLENBQUMsRUFBRTtvQkFDSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQyxDQUNKLENBQUM7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdCQUFnQjs7UUFDWixJQUFJLENBQUMsaUJBQWlCLGVBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLEdBQUcsMENBQUUsaUJBQWlCLENBQUM7UUFDaEYsSUFBSSxDQUFDLGFBQWEsZUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsMENBQUUsR0FBRywwQ0FBRSxhQUFhLENBQUM7UUFDeEUsSUFBSSxDQUFDLGlCQUFpQixlQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUywwQ0FBRSxHQUFHLDBDQUFFLGlCQUFpQixDQUFDO1FBQ2hGLElBQUksQ0FBQyxjQUFjLGVBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLEdBQUcsMENBQUUsY0FBYyxDQUFDO1FBQzFFLElBQUksQ0FBQyxhQUFhLGVBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLDBDQUFFLEdBQUcsMENBQUUsYUFBYSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsc0RBQXNEO0lBQzFELENBQUM7OzBFQTFCUSxhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZWLE1BQU07a0RBRVQsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JJbnRsIGV4dGVuZHMgTWF0UGFnaW5hdG9ySW50bCB7XG4gICAgcmVzb3VyY2VTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTZXJ2aWNlLnJlc291cmNlU2VydmljZSQuc3Vic2NyaWJlKGQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZVNlcnZpY2UgPSBkO1xuICAgICAgICAgICAgdGhpcy5nZXRQYWdpbmF0b3JJbnRsKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5nbG9iYWxTZXJ2aWNlLmdldFJlc291cmNlU2VydmljZSgpICYmIHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKS5sYW5ndWFnZVNlbGVjdGVkJCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5nZXRSZXNvdXJjZVNlcnZpY2UoKS5sYW5ndWFnZVNlbGVjdGVkJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGxhbmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdpbmF0b3JJbnRsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRQYWdpbmF0b3JJbnRsKCkge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZUxhYmVsID0gdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lml0ZW1zUGVyUGFnZUxhYmVsO1xuICAgICAgICB0aGlzLm5leHRQYWdlTGFiZWwgPSB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHM/LmxibD8ubmV4dFBhZ2VMYWJlbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2VMYWJlbCA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5wcmV2aW91c1BhZ2VMYWJlbDtcbiAgICAgICAgdGhpcy5maXJzdFBhZ2VMYWJlbCA9IHRoaXMucmVzb3VyY2VTZXJ2aWNlLmZybWVsbW50cz8ubGJsPy5maXJzdFBhZ2VMYWJlbDtcbiAgICAgICAgdGhpcy5sYXN0UGFnZUxhYmVsID0gdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lmxhc3RQYWdlTGFiZWw7XG4gICAgICAgIHRoaXMuY2hhbmdlcy5uZXh0KCk7XG4gICAgICAgIC8vIHRoaXMuZ2V0UmFuZ2VMYWJlbCA9IHRoaXMuZ2V0UmFuZ2VMYWJlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldFJhbmdlTGFiZWwgPSAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgY29uc3Qgb2YgPSB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHMgJiYgdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzLmxibCAmJiB0aGlzLnJlc291cmNlU2VydmljZS5mcm1lbG1udHMubGJsLm9mID8gdGhpcy5yZXNvdXJjZVNlcnZpY2UuZnJtZWxtbnRzPy5sYmw/Lm9mIDogJ29mJztcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBwYWdlU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcwICcgKyBvZiArICcgJyArIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZW5ndGggPSBNYXRoLm1heChsZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gcGFnZSAqIHBhZ2VTaXplID4gbGVuZ3RoID8gKE1hdGguY2VpbChsZW5ndGggLyBwYWdlU2l6ZSkgLSAxKSAqIHBhZ2VTaXplIDogcGFnZSAqIHBhZ2VTaXplO1xuXG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpO1xuICAgICAgICByZXR1cm4gc3RhcnRJbmRleCArIDEgKyAnIC0gJyArIGVuZEluZGV4ICsgJyAnICsgb2YgKyAnICcgKyBsZW5ndGg7XG4gICAgfVxufVxuIl19
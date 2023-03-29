import { GlobalService } from './global.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import * as ɵngcc0 from '@angular/core';
export declare class PaginatorIntl extends MatPaginatorIntl {
    globalService: GlobalService;
    resourceService: any;
    constructor(globalService: GlobalService);
    getPaginatorIntl(): void;
    getRangeLabel: (page: number, pageSize: number, length: number) => string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginatorIntl, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWludGwuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwYWdpbmF0b3ItaW50bC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSAnLi9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JJbnRsIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2luYXRvckludGwgZXh0ZW5kcyBNYXRQYWdpbmF0b3JJbnRsIHtcbiAgICBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlO1xuICAgIHJlc291cmNlU2VydmljZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpO1xuICAgIGdldFBhZ2luYXRvckludGwoKTogdm9pZDtcbiAgICBnZXRSYW5nZUxhYmVsOiAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikgPT4gc3RyaW5nO1xufVxuIl19
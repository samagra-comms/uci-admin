import { GlobalService } from './global.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export declare class PaginatorIntl extends MatPaginatorIntl {
    globalService: GlobalService;
    resourceService: any;
    constructor(globalService: GlobalService);
    getPaginatorIntl(): void;
    getRangeLabel: (page: number, pageSize: number, length: number) => string;
    static ɵfac: i0.ɵɵFactoryDef<PaginatorIntl, never>;
    static ɵprov: i0.ɵɵInjectableDef<PaginatorIntl>;
}

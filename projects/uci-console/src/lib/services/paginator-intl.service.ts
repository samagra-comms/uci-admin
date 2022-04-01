import {Injectable} from '@angular/core';
import {GlobalService} from './global.service';
import {MatPaginatorIntl} from '@angular/material/paginator';

@Injectable({
    providedIn: 'root'
})
export class PaginatorIntl extends MatPaginatorIntl {
    resourceService;

    constructor(public globalService: GlobalService) {
        super();
        this.globalService.resourceService$.subscribe(d => {
            this.resourceService = d;
            this.getPaginatorIntl();
            if (this.globalService.getResourceService() && this.globalService.getResourceService().languageSelected$) {
                this.globalService.getResourceService().languageSelected$.subscribe(
                    lang => {
                        this.getPaginatorIntl();
                    }
                );
            }
        });
    }

    getPaginatorIntl() {
        this.itemsPerPageLabel = this.resourceService.frmelmnts?.lbl?.itemsPerPageLabel;
        this.nextPageLabel = this.resourceService.frmelmnts?.lbl?.nextPageLabel;
        this.previousPageLabel = this.resourceService.frmelmnts?.lbl?.previousPageLabel;
        this.firstPageLabel = this.resourceService.frmelmnts?.lbl?.firstPageLabel;
        this.lastPageLabel = this.resourceService.frmelmnts?.lbl?.lastPageLabel;
        this.changes.next();
        // this.getRangeLabel = this.getRangeLabel.bind(this);
    }

    getRangeLabel = (page: number, pageSize: number, length: number): string => {
        // tslint:disable-next-line:max-line-length
        const of = this.resourceService.frmelmnts && this.resourceService.frmelmnts.lbl && this.resourceService.frmelmnts.lbl.of ? this.resourceService.frmelmnts?.lbl?.of : 'of';
        if (length === 0 || pageSize === 0) {
            return '0 ' + of + ' ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize > length ? (Math.ceil(length / pageSize) - 1) * pageSize : page * pageSize;

        const endIndex = Math.min(startIndex + pageSize, length);
        return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
    }
}

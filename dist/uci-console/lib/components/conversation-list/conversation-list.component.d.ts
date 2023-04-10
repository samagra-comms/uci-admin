import { OnInit } from '@angular/core';
import { UciService } from '../../services/uci.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { MatTable } from '@angular/material/table';
import * as ɵngcc0 from '@angular/core';
export declare class ConversationListComponent implements OnInit {
    private uciService;
    private router;
    private globalService;
    botTable: MatTable<any>;
    chatBots: any[];
    displayedColumns: string[];
    pager: {
        pageSizeOptions: number[];
        currentPage: number;
        totalItems: number;
        pageSize: number;
    };
    column: string;
    sortDirection: string;
    reverse: boolean;
    queryParams: any;
    search: any;
    user: any;
    resourceService: any;
    constructor(uciService: UciService, router: Router, globalService: GlobalService);
    ngOnInit(): void;
    getAllChatBots(): void;
    parseConversations(data: any): void;
    sortColumns(column: any): void;
    navigateToPage(pageEvent: any): void;
    getSearch(): void;
    onAddNew(): void;
    onEdit(conversation: any): void;
    onStatusChange(conversation: any, index: any): void;
    onDelete(conversation: any, index: any): void;
    onCopy(id: any): void;
    updateDatasource(): void;
    onReport(conversation: any, i: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConversationListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConversationListComponent, "lib-conversation-list", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9uLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbnZlcnNhdGlvbi1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVY2lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBNYXRUYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnZlcnNhdGlvbkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgdWNpU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICBwcml2YXRlIGdsb2JhbFNlcnZpY2U7XG4gICAgYm90VGFibGU6IE1hdFRhYmxlPGFueT47XG4gICAgY2hhdEJvdHM6IGFueVtdO1xuICAgIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xuICAgIHBhZ2VyOiB7XG4gICAgICAgIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW107XG4gICAgICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gICAgICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcbiAgICAgICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICB9O1xuICAgIGNvbHVtbjogc3RyaW5nO1xuICAgIHNvcnREaXJlY3Rpb246IHN0cmluZztcbiAgICByZXZlcnNlOiBib29sZWFuO1xuICAgIHF1ZXJ5UGFyYW1zOiBhbnk7XG4gICAgc2VhcmNoOiBhbnk7XG4gICAgdXNlcjogYW55O1xuICAgIHJlc291cmNlU2VydmljZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsIHJvdXRlcjogUm91dGVyLCBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGdldEFsbENoYXRCb3RzKCk6IHZvaWQ7XG4gICAgcGFyc2VDb252ZXJzYXRpb25zKGRhdGE6IGFueSk6IHZvaWQ7XG4gICAgc29ydENvbHVtbnMoY29sdW1uOiBhbnkpOiB2b2lkO1xuICAgIG5hdmlnYXRlVG9QYWdlKHBhZ2VFdmVudDogYW55KTogdm9pZDtcbiAgICBnZXRTZWFyY2goKTogdm9pZDtcbiAgICBvbkFkZE5ldygpOiB2b2lkO1xuICAgIG9uRWRpdChjb252ZXJzYXRpb246IGFueSk6IHZvaWQ7XG4gICAgb25TdGF0dXNDaGFuZ2UoY29udmVyc2F0aW9uOiBhbnksIGluZGV4OiBhbnkpOiB2b2lkO1xuICAgIG9uRGVsZXRlKGNvbnZlcnNhdGlvbjogYW55LCBpbmRleDogYW55KTogdm9pZDtcbiAgICBvbkNvcHkoaWQ6IGFueSk6IHZvaWQ7XG4gICAgdXBkYXRlRGF0YXNvdXJjZSgpOiB2b2lkO1xuICAgIG9uUmVwb3J0KGNvbnZlcnNhdGlvbjogYW55LCBpOiBhbnkpOiB2b2lkO1xufVxuIl19
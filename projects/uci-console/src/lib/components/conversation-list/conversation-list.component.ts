import {Component, OnInit, ViewChild} from '@angular/core';
import {UciService} from '../../services/uci.service';
import {Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {Helper} from '../../utils/helper';
import {MatTable} from '@angular/material/table';

@Component({
    selector: 'lib-conversation-list',
    templateUrl: './conversation-list.component.html',
    styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
    @ViewChild('botTable') botTable: MatTable<any>;
    chatBots = [];
    displayedColumns: string[] = ['name', 'status', 'description', 'startingMessage', 'botUrl', 'botId', 'action'];
    pager = {
        pageSizeOptions: [5, 10, 25, 30],
        currentPage: 1,
        totalItems: 0,
        pageSize: 10
    };
    column = '';
    sortDirection = '';
    reverse = false;
    queryParams: any;
    search;
    user;
    resourceService;

    constructor(
        private uciService: UciService,
        private router: Router,
        private globalService: GlobalService,
    ) {
    }

    ngOnInit() {
        this.user = this.globalService.getUser();
        if (!this.user) {
            this.router.navigate(['uci-admin']);
            return;
        }
        this.resourceService = this.globalService.getResourceService();
        this.getAllChatBots();
    }

    getAllChatBots() {
        const param: any = {
            page: this.pager.currentPage,
            perPage: this.pager.pageSize
        };

        if (this.search) {
            param.name = this.search;
            this.uciService.searchConversation(param).subscribe(
                data => this.parseConversations(data)
            );
        } else {
            this.uciService.fetchConversation(param).subscribe(
                data => this.parseConversations(data)
            );
        }

    }

    parseConversations(data) {
        this.chatBots = [];
        data.data.forEach(bot => {
            const obj = {...bot, segmentText: '', userCount: 0, status: bot.status || 'Draft'};
            obj.status = bot.status === 'enabled' ? 'Live' : bot.status === 'disabled' ? 'Disabled' : 'Draft';
            const segmentNames = [];
            bot.userSegments.forEach(userSegment => {
                segmentNames.push(userSegment.name);
                obj.userCount += (userSegment.count || 0);
            });
            obj.segmentText = segmentNames.join(', ');

            obj.url = Helper.makBotUrl(bot.startingMessage || '', this.globalService.getBotPhoneNumber());
            obj.botId = bot.id || '';

            this.chatBots.push(obj);
        });
        this.pager.totalItems = data.total;
    }

    sortColumns(column) {
        this.column = column;
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.reverse = !this.reverse;
    }

    navigateToPage(pageEvent): void {
        this.pager.currentPage = pageEvent.pageIndex + 1;
        this.getAllChatBots();
    }

    getSearch() {
        this.pager.currentPage = 1;
        this.getAllChatBots();
    }

    onAddNew() {
        this.router.navigateByUrl('uci-admin/add');
    }

    onEdit(conversation) {
        this.router.navigateByUrl(`uci-admin/${conversation.id}/edit`);
    }

    onStatusChange(conversation, index) {
        if (conversation.status === 'Live') {
            this.uciService.pauseConversation(conversation.id).subscribe(
                data => {
                    this.chatBots[index].status = 'Disabled';
                    this.updateDatasource();
                }
            );
        } else {
            this.uciService.startConversation(conversation.id).subscribe(
                data => {
                    this.chatBots[index].status = 'Live';
                    this.updateDatasource();
                }
            );
        }
    }

    onDelete(conversation, index) {
        this.uciService.deleteConversation(conversation.id).subscribe(
            data => {
                this.chatBots.splice(index, 1);
                this.updateDatasource();
            }
        );
    }

    onCopy(id) {
        Helper.copyData(id);
    }

    updateDatasource() {
        this.botTable.renderRows();
    }

    onReport(conversation, i): void {
        this.router.navigateByUrl(`uci-admin/${conversation.id}/reports`);
    }
}

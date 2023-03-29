import { TelemetryUtilsService } from '../../telemetry-utils.service';
import { UciService } from '../../services/uci.service';
import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../services/config.service';
import { IdiscussionConfig, IMenuOptions } from '../../models/uci-config.model';
import { GlobalService } from '../../services/global.service';
import * as ɵngcc0 from '@angular/core';
export declare class SidePanelComponent implements OnInit, OnDestroy {
    router: Router;
    uciService: UciService;
    activatedRoute: ActivatedRoute;
    private telemetryUtils;
    private configService;
    private globalService;
    paramsSubscription: Subscription;
    userName: string;
    defaultPage: string;
    data: IdiscussionConfig;
    hideSidePanel: boolean;
    menu: Array<IMenuOptions>;
    selectedTab: string;
    showSideMenu: Boolean;
    resourceService: any;
    constructor(router: Router, uciService: UciService, activatedRoute: ActivatedRoute, telemetryUtils: TelemetryUtilsService, configService: ConfigService, globalService: GlobalService);
    ngOnInit(): void;
    setMenu(): void;
    isActive(selectedItem: any): boolean;
    navigate(pageName: string, event?: any): void;
    ngOnDestroy(): void;
    showMenuButton(): void;
    closeNav(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SidePanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SidePanelComponent, "lib-side-panel", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic2lkZS1wYW5lbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZWxlbWV0cnlVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi90ZWxlbWV0cnktdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBVY2lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWRpc2N1c3Npb25Db25maWcsIElNZW51T3B0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy91Y2ktY29uZmlnLm1vZGVsJztcbmltcG9ydCB7IEdsb2JhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcm91dGVyOiBSb3V0ZXI7XG4gICAgdWNpU2VydmljZTogVWNpU2VydmljZTtcbiAgICBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gICAgcHJpdmF0ZSB0ZWxlbWV0cnlVdGlscztcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBnbG9iYWxTZXJ2aWNlO1xuICAgIHBhcmFtc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgZGVmYXVsdFBhZ2U6IHN0cmluZztcbiAgICBkYXRhOiBJZGlzY3Vzc2lvbkNvbmZpZztcbiAgICBoaWRlU2lkZVBhbmVsOiBib29sZWFuO1xuICAgIG1lbnU6IEFycmF5PElNZW51T3B0aW9ucz47XG4gICAgc2VsZWN0ZWRUYWI6IHN0cmluZztcbiAgICBzaG93U2lkZU1lbnU6IEJvb2xlYW47XG4gICAgcmVzb3VyY2VTZXJ2aWNlOiBhbnk7XG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIHVjaVNlcnZpY2U6IFVjaVNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdGVsZW1ldHJ5VXRpbHM6IFRlbGVtZXRyeVV0aWxzU2VydmljZSwgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSwgZ2xvYmFsU2VydmljZTogR2xvYmFsU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBzZXRNZW51KCk6IHZvaWQ7XG4gICAgaXNBY3RpdmUoc2VsZWN0ZWRJdGVtOiBhbnkpOiBib29sZWFuO1xuICAgIG5hdmlnYXRlKHBhZ2VOYW1lOiBzdHJpbmcsIGV2ZW50PzogYW55KTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHNob3dNZW51QnV0dG9uKCk6IHZvaWQ7XG4gICAgY2xvc2VOYXYoKTogdm9pZDtcbn1cbiJdfQ==
import { UciService } from './uci.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IdiscussionConfig } from '../models/uci-config.model';
import * as ɵngcc0 from '@angular/core';
export declare class ConfigService implements OnInit {
    activatedRoute: ActivatedRoute;
    private UciService;
    paramsSubscription: Subscription;
    private _config;
    checkContext: boolean;
    queryParams: any;
    getContextData: any;
    hasContextData: any;
    getParams: IdiscussionConfig;
    constructor(activatedRoute: ActivatedRoute, UciService: UciService);
    ngOnInit(): void;
    setConfig(activatedRoute: any): void;
    setConfigFromParams(activatedRoute: any): void;
    getConfig(): IdiscussionConfig;
    getCategories(): any;
    hasContext(): any;
    getContext(): any;
    getRouterSlug(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY29uZmlnLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWNpU2VydmljZSB9IGZyb20gJy4vdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElkaXNjdXNzaW9uQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL3VjaS1jb25maWcubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uZmlnU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuICAgIHByaXZhdGUgVWNpU2VydmljZTtcbiAgICBwYXJhbXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9jb25maWc7XG4gICAgY2hlY2tDb250ZXh0OiBib29sZWFuO1xuICAgIHF1ZXJ5UGFyYW1zOiBhbnk7XG4gICAgZ2V0Q29udGV4dERhdGE6IGFueTtcbiAgICBoYXNDb250ZXh0RGF0YTogYW55O1xuICAgIGdldFBhcmFtczogSWRpc2N1c3Npb25Db25maWc7XG4gICAgY29uc3RydWN0b3IoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBVY2lTZXJ2aWNlOiBVY2lTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHNldENvbmZpZyhhY3RpdmF0ZWRSb3V0ZTogYW55KTogdm9pZDtcbiAgICBzZXRDb25maWdGcm9tUGFyYW1zKGFjdGl2YXRlZFJvdXRlOiBhbnkpOiB2b2lkO1xuICAgIGdldENvbmZpZygpOiBJZGlzY3Vzc2lvbkNvbmZpZztcbiAgICBnZXRDYXRlZ29yaWVzKCk6IGFueTtcbiAgICBoYXNDb250ZXh0KCk6IGFueTtcbiAgICBnZXRDb250ZXh0KCk6IGFueTtcbiAgICBnZXRSb3V0ZXJTbHVnKCk6IHN0cmluZztcbn1cbiJdfQ==
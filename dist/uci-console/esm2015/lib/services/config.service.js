import { __decorate } from "tslib";
import { UciService } from './uci.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./uci.service";
let ConfigService = class ConfigService {
    constructor(activatedRoute, UciService) {
        this.activatedRoute = activatedRoute;
        this.UciService = UciService;
    }
    ngOnInit() {
    }
    setConfig(activatedRoute) {
        activatedRoute.data.subscribe((config) => {
            this._config = config.data;
        });
    }
    setConfigFromParams(activatedRoute) {
        activatedRoute.queryParams.subscribe((params) => {
            const obj = {
                userName: _.get(params, 'userName'),
                categories: JSON.parse(_.get(params, 'categories'))
            };
            this._config = obj;
        });
    }
    getConfig() {
        return this._config;
    }
    getCategories() {
        this.getParams = this.getConfig();
        return _.get(this.getParams, 'categories');
    }
    hasContext() {
        this.hasContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result.length : null)
            : null;
        return this.hasContextData;
    }
    getContext() {
        this.getContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result : null)
            : null;
        return this.getContextData;
    }
    getRouterSlug() {
        return this._config.routerSlug ? this._config.routerSlug : '';
    }
};
ConfigService.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: UciService }
];
ConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.ɵɵinject(i1.ActivatedRoute), i0.ɵɵinject(i2.UciService)); }, token: ConfigService, providedIn: "root" });
ConfigService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ConfigService);
export { ConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBOzs7O0FBTTNCLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFXeEIsWUFDUyxjQUE4QixFQUM3QixVQUFzQjtRQUR2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM1QixDQUFDO0lBRUwsUUFBUTtJQUVSLENBQUM7SUFFRCxTQUFTLENBQUMsY0FBYztRQUN0QixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxjQUFjO1FBQ2hDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDOUMsTUFBTSxHQUFHLEdBQXNCO2dCQUM3QixRQUFRLEVBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO2dCQUNwQyxVQUFVLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNyRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztJQUVNLGFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0NBQ0YsQ0FBQTs7WUFsRDBCLGNBQWM7WUFDakIsVUFBVTs7O0FBYnJCLGFBQWE7SUFIekIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGFBQWEsQ0E4RHpCO1NBOURZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVY2lTZXJ2aWNlIH0gZnJvbSAnLi91Y2kuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBJZGlzY3Vzc2lvbkNvbmZpZyB9IGZyb20gJy4uL21vZGVscy91Y2ktY29uZmlnLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGFyYW1zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbmZpZzogSWRpc2N1c3Npb25Db25maWc7XG4gIHB1YmxpYyBjaGVja0NvbnRleHQ6IGJvb2xlYW47XG4gIHB1YmxpYyBxdWVyeVBhcmFtcztcbiAgZ2V0Q29udGV4dERhdGE6IGFueTtcbiAgaGFzQ29udGV4dERhdGE6IGFueTtcbiAgZ2V0UGFyYW1zOiBJZGlzY3Vzc2lvbkNvbmZpZztcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBVY2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBzZXRDb25maWcoYWN0aXZhdGVkUm91dGUpIHtcbiAgICBhY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWcuZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldENvbmZpZ0Zyb21QYXJhbXMoYWN0aXZhdGVkUm91dGUpIHtcbiAgICBhY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgY29uc3Qgb2JqOiBJZGlzY3Vzc2lvbkNvbmZpZyA9IHtcbiAgICAgICAgdXNlck5hbWUgOiBfLmdldChwYXJhbXMsICd1c2VyTmFtZScpLFxuICAgICAgICBjYXRlZ29yaWVzIDogSlNPTi5wYXJzZShfLmdldChwYXJhbXMsICdjYXRlZ29yaWVzJykpXG4gICAgICB9O1xuICAgICAgdGhpcy5fY29uZmlnID0gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3JpZXMoKSB7XG4gICAgdGhpcy5nZXRQYXJhbXMgPSB0aGlzLmdldENvbmZpZygpXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuZ2V0UGFyYW1zLCAnY2F0ZWdvcmllcycpXG4gIH1cblxuICBwdWJsaWMgaGFzQ29udGV4dCgpIHtcbiAgICB0aGlzLmhhc0NvbnRleHREYXRhID0gdGhpcy5nZXRDYXRlZ29yaWVzKCkgP1xuICAgICAgKHRoaXMuZ2V0Q2F0ZWdvcmllcygpLnJlc3VsdCA/IHRoaXMuZ2V0Q2F0ZWdvcmllcygpLnJlc3VsdC5sZW5ndGggOiBudWxsKVxuICAgICAgOiBudWxsXG4gICAgcmV0dXJuIHRoaXMuaGFzQ29udGV4dERhdGFcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZXh0KCkge1xuICAgIHRoaXMuZ2V0Q29udGV4dERhdGEgPSB0aGlzLmdldENhdGVnb3JpZXMoKSA/XG4gICAgICAodGhpcy5nZXRDYXRlZ29yaWVzKCkucmVzdWx0ID8gdGhpcy5nZXRDYXRlZ29yaWVzKCkucmVzdWx0IDogbnVsbClcbiAgICAgIDogbnVsbFxuICAgIHJldHVybiB0aGlzLmdldENvbnRleHREYXRhXG4gIH1cblxuICBwdWJsaWMgZ2V0Um91dGVyU2x1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnJvdXRlclNsdWcgPyB0aGlzLl9jb25maWcucm91dGVyU2x1ZyA6ICcnO1xuICB9XG59XG4iXX0=
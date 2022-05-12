import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./uci.service";
var ConfigService = /** @class */ (function () {
    function ConfigService(activatedRoute, UciService) {
        this.activatedRoute = activatedRoute;
        this.UciService = UciService;
    }
    ConfigService.prototype.ngOnInit = function () {
    };
    ConfigService.prototype.setConfig = function (activatedRoute) {
        var _this = this;
        activatedRoute.data.subscribe(function (config) {
            _this._config = config.data;
        });
    };
    ConfigService.prototype.setConfigFromParams = function (activatedRoute) {
        var _this = this;
        activatedRoute.queryParams.subscribe(function (params) {
            var obj = {
                userName: _.get(params, 'userName'),
                categories: JSON.parse(_.get(params, 'categories'))
            };
            _this._config = obj;
        });
    };
    ConfigService.prototype.getConfig = function () {
        return this._config;
    };
    ConfigService.prototype.getCategories = function () {
        this.getParams = this.getConfig();
        return _.get(this.getParams, 'categories');
    };
    ConfigService.prototype.hasContext = function () {
        this.hasContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result.length : null)
            : null;
        return this.hasContextData;
    };
    ConfigService.prototype.getContext = function () {
        this.getContextData = this.getCategories() ?
            (this.getCategories().result ? this.getCategories().result : null)
            : null;
        return this.getContextData;
    };
    ConfigService.prototype.getRouterSlug = function () {
        return this._config.routerSlug ? this._config.routerSlug : '';
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(i1.ActivatedRoute), i0.ɵɵinject(i2.UciService)); };
    ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
    return ConfigService;
}());
export { ConfigService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.UciService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7QUFHM0I7SUFjRSx1QkFDUyxjQUE4QixFQUM3QixVQUFzQjtRQUR2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM1QixDQUFDO0lBRUwsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsY0FBYztRQUF4QixpQkFJQztRQUhDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNuQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLGNBQWM7UUFBbEMsaUJBUUM7UUFQQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDMUMsSUFBTSxHQUFHLEdBQXNCO2dCQUM3QixRQUFRLEVBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO2dCQUNwQyxVQUFVLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNyRCxDQUFDO1lBQ0YsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDakMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVNLGtDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUMxQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekUsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUNSLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM1QixDQUFDO0lBRU0sa0NBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRSxDQUFDOzhFQTdEVSxhQUFhO3lEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZaLE1BQU07d0JBUnBCO0NBd0VDLEFBakVELElBaUVDO1NBOURZLGFBQWE7a0RBQWIsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVY2lTZXJ2aWNlIH0gZnJvbSAnLi91Y2kuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBJZGlzY3Vzc2lvbkNvbmZpZyB9IGZyb20gJy4uL21vZGVscy91Y2ktY29uZmlnLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGFyYW1zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NvbmZpZzogSWRpc2N1c3Npb25Db25maWc7XG4gIHB1YmxpYyBjaGVja0NvbnRleHQ6IGJvb2xlYW47XG4gIHB1YmxpYyBxdWVyeVBhcmFtcztcbiAgZ2V0Q29udGV4dERhdGE6IGFueTtcbiAgaGFzQ29udGV4dERhdGE6IGFueTtcbiAgZ2V0UGFyYW1zOiBJZGlzY3Vzc2lvbkNvbmZpZztcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBVY2lTZXJ2aWNlOiBVY2lTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBzZXRDb25maWcoYWN0aXZhdGVkUm91dGUpIHtcbiAgICBhY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLl9jb25maWcgPSBjb25maWcuZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldENvbmZpZ0Zyb21QYXJhbXMoYWN0aXZhdGVkUm91dGUpIHtcbiAgICBhY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgY29uc3Qgb2JqOiBJZGlzY3Vzc2lvbkNvbmZpZyA9IHtcbiAgICAgICAgdXNlck5hbWUgOiBfLmdldChwYXJhbXMsICd1c2VyTmFtZScpLFxuICAgICAgICBjYXRlZ29yaWVzIDogSlNPTi5wYXJzZShfLmdldChwYXJhbXMsICdjYXRlZ29yaWVzJykpXG4gICAgICB9O1xuICAgICAgdGhpcy5fY29uZmlnID0gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3JpZXMoKSB7XG4gICAgdGhpcy5nZXRQYXJhbXMgPSB0aGlzLmdldENvbmZpZygpXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuZ2V0UGFyYW1zLCAnY2F0ZWdvcmllcycpXG4gIH1cblxuICBwdWJsaWMgaGFzQ29udGV4dCgpIHtcbiAgICB0aGlzLmhhc0NvbnRleHREYXRhID0gdGhpcy5nZXRDYXRlZ29yaWVzKCkgP1xuICAgICAgKHRoaXMuZ2V0Q2F0ZWdvcmllcygpLnJlc3VsdCA/IHRoaXMuZ2V0Q2F0ZWdvcmllcygpLnJlc3VsdC5sZW5ndGggOiBudWxsKVxuICAgICAgOiBudWxsXG4gICAgcmV0dXJuIHRoaXMuaGFzQ29udGV4dERhdGFcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZXh0KCkge1xuICAgIHRoaXMuZ2V0Q29udGV4dERhdGEgPSB0aGlzLmdldENhdGVnb3JpZXMoKSA/XG4gICAgICAodGhpcy5nZXRDYXRlZ29yaWVzKCkucmVzdWx0ID8gdGhpcy5nZXRDYXRlZ29yaWVzKCkucmVzdWx0IDogbnVsbClcbiAgICAgIDogbnVsbFxuICAgIHJldHVybiB0aGlzLmdldENvbnRleHREYXRhXG4gIH1cblxuICBwdWJsaWMgZ2V0Um91dGVyU2x1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnJvdXRlclNsdWcgPyB0aGlzLl9jb25maWcucm91dGVyU2x1ZyA6ICcnO1xuICB9XG59XG4iXX0=
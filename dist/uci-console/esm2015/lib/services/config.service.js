import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./uci.service";
export class ConfigService {
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
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(i1.ActivatedRoute), i0.ɵɵinject(i2.UciService)); };
ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.UciService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7Ozs7QUFNM0IsTUFBTSxPQUFPLGFBQWE7SUFXeEIsWUFDUyxjQUE4QixFQUM3QixVQUFzQjtRQUR2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM1QixDQUFDO0lBRUwsUUFBUTtJQUVSLENBQUM7SUFFRCxTQUFTLENBQUMsY0FBYztRQUN0QixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxjQUFjO1FBQ2hDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDOUMsTUFBTSxHQUFHLEdBQXNCO2dCQUM3QixRQUFRLEVBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO2dCQUNwQyxVQUFVLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNyRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDNUIsQ0FBQztJQUVNLGFBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRSxDQUFDOzswRUE3RFUsYUFBYTtxREFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO2tEQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWNpU2VydmljZSB9IGZyb20gJy4vdWNpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgSWRpc2N1c3Npb25Db25maWcgfSBmcm9tICcuLi9tb2RlbHMvdWNpLWNvbmZpZy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHBhcmFtc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9jb25maWc6IElkaXNjdXNzaW9uQ29uZmlnO1xuICBwdWJsaWMgY2hlY2tDb250ZXh0OiBib29sZWFuO1xuICBwdWJsaWMgcXVlcnlQYXJhbXM7XG4gIGdldENvbnRleHREYXRhOiBhbnk7XG4gIGhhc0NvbnRleHREYXRhOiBhbnk7XG4gIGdldFBhcmFtczogSWRpc2N1c3Npb25Db25maWc7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgVWNpU2VydmljZTogVWNpU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgc2V0Q29uZmlnKGFjdGl2YXRlZFJvdXRlKSB7XG4gICAgYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnLmRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBzZXRDb25maWdGcm9tUGFyYW1zKGFjdGl2YXRlZFJvdXRlKSB7XG4gICAgYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IG9iajogSWRpc2N1c3Npb25Db25maWcgPSB7XG4gICAgICAgIHVzZXJOYW1lIDogXy5nZXQocGFyYW1zLCAndXNlck5hbWUnKSxcbiAgICAgICAgY2F0ZWdvcmllcyA6IEpTT04ucGFyc2UoXy5nZXQocGFyYW1zLCAnY2F0ZWdvcmllcycpKVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXRlZ29yaWVzKCkge1xuICAgIHRoaXMuZ2V0UGFyYW1zID0gdGhpcy5nZXRDb25maWcoKVxuICAgIHJldHVybiBfLmdldCh0aGlzLmdldFBhcmFtcywgJ2NhdGVnb3JpZXMnKVxuICB9XG5cbiAgcHVibGljIGhhc0NvbnRleHQoKSB7XG4gICAgdGhpcy5oYXNDb250ZXh0RGF0YSA9IHRoaXMuZ2V0Q2F0ZWdvcmllcygpID9cbiAgICAgICh0aGlzLmdldENhdGVnb3JpZXMoKS5yZXN1bHQgPyB0aGlzLmdldENhdGVnb3JpZXMoKS5yZXN1bHQubGVuZ3RoIDogbnVsbClcbiAgICAgIDogbnVsbFxuICAgIHJldHVybiB0aGlzLmhhc0NvbnRleHREYXRhXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGV4dCgpIHtcbiAgICB0aGlzLmdldENvbnRleHREYXRhID0gdGhpcy5nZXRDYXRlZ29yaWVzKCkgP1xuICAgICAgKHRoaXMuZ2V0Q2F0ZWdvcmllcygpLnJlc3VsdCA/IHRoaXMuZ2V0Q2F0ZWdvcmllcygpLnJlc3VsdCA6IG51bGwpXG4gICAgICA6IG51bGxcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0RGF0YVxuICB9XG5cbiAgcHVibGljIGdldFJvdXRlclNsdWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5yb3V0ZXJTbHVnID8gdGhpcy5fY29uZmlnLnJvdXRlclNsdWcgOiAnJztcbiAgfVxufVxuIl19
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { GlobalService } from './global.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./global.service";
var UciGraphQlService = /** @class */ (function (_super) {
    __extends(UciGraphQlService, _super);
    function UciGraphQlService(http, globalService) {
        var _this = _super.call(this, http, globalService) || this;
        _this.http = http;
        _this.globalService = globalService;
        _this.globalService.baseUrl$.subscribe(function (value) {
            if (value) {
                _this.BASE_URL = value + '/uci-api/gql';
            }
        });
        return _this;
    }
    UciGraphQlService.prototype.getState = function () {
        return this.baseRequest({
            query: "query getListOfStates{\n            organisation(distinct_on:state){\n            state}}"
        });
    };
    UciGraphQlService.prototype.getDistrict = function (param) {
        return this.baseRequest({
            query: "query getListOfDistrictInState($state:String){\n            organisation(where:{state:{_eq:$state}},  distinct_on:district){\n            state\n            district}}",
            variables: param
        });
    };
    UciGraphQlService.prototype.getBlock = function (param) {
        return this.baseRequest({
            query: "query getListOfBlocksUnderDistrict($district:[String!],$state:String){\n            blocks: organisation(where:{state:{_eq:$state},district:{_in:$district}},distinct_on:block){\n            block\n            district\n            state\n            }\n            }",
            variables: param
        });
    };
    UciGraphQlService.prototype.getSchoolDetails = function (param) {
        return this.baseRequest({
            query: "query getListOfSchoolsUnderBlocksAndDistrict($district:[String!],$state:String,$block:[String!]){\n            schools:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}}){\n            school\n            school_code\n            block\n            district\n            state\n            }\n            }",
            variables: param
        });
    };
    UciGraphQlService.prototype.getClusters = function (param) {
        return this.baseRequest({
            query: "query getListOfClustersUnderBlockAndDistrict($block:[String!],$district:[String!],$state:String){\n            clusters:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}},distinct_on:cluster){\n            cluster\n            }\n            }",
            variables: param
        });
    };
    UciGraphQlService.prototype.getRole = function () {
        return this.baseRequest({
            query: "query fetchListOfRoles{\n                   role{\n                   id\n                   name\n                   }\n                   }"
        });
    };
    UciGraphQlService.prototype.getBoards = function () {
        return this.baseRequest({
            query: "query listOfBoards{\n                  board{\n                  id\n                  name}}"
        });
    };
    UciGraphQlService.prototype.baseRequest = function (body) {
        return this.http.post(this.BASE_URL, body, {});
    };
    UciGraphQlService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: GlobalService }
    ]; };
    UciGraphQlService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UciGraphQlService_Factory() { return new UciGraphQlService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GlobalService)); }, token: UciGraphQlService, providedIn: "root" });
    UciGraphQlService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], UciGraphQlService);
    return UciGraphQlService;
}(BaseService));
export { UciGraphQlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWdyYXBoLXFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VjaS1ncmFwaC1xbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBTS9DO0lBQXVDLHFDQUFXO0lBRzlDLDJCQUFtQixJQUFnQixFQUFTLGFBQTRCO1FBQXhFLFlBQ0ksa0JBQU0sSUFBSSxFQUFFLGFBQWEsQ0FBQyxTQU03QjtRQVBrQixVQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFFcEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUN2QyxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxjQUFjLENBQUM7YUFDMUM7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUUsMkZBRUM7U0FDWCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEIsS0FBSyxFQUFFLHlLQUdJO1lBQ1gsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRSw0UUFNTDtZQUNGLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEIsS0FBSyxFQUFFLHFWQVFMO1lBQ0YsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxzUkFJTDtZQUNGLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRSwrSUFLRTtTQUNaLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRSwrRkFHTTtTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sdUNBQVcsR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQXhGd0IsVUFBVTtnQkFBd0IsYUFBYTs7O0lBSC9ELGlCQUFpQjtRQUg3QixVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO09BQ1csaUJBQWlCLENBNEY3Qjs0QkFyR0Q7Q0FxR0MsQUE1RkQsQ0FBdUMsV0FBVyxHQTRGakQ7U0E1RlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCYXNlU2VydmljZX0gZnJvbSAnLi9iYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuL2dsb2JhbC5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVjaUdyYXBoUWxTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xuICAgIEJBU0VfVVJMO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGh0dHAsIGdsb2JhbFNlcnZpY2UpO1xuICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2UuYmFzZVVybCQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuQkFTRV9VUkwgPSB2YWx1ZSArICcvdWNpLWFwaS9ncWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZTdGF0ZXN7XG4gICAgICAgICAgICBvcmdhbmlzYXRpb24oZGlzdGluY3Rfb246c3RhdGUpe1xuICAgICAgICAgICAgc3RhdGV9fWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzdHJpY3QocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZEaXN0cmljdEluU3RhdGUoJHN0YXRlOlN0cmluZyl7XG4gICAgICAgICAgICBvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfX0sICBkaXN0aW5jdF9vbjpkaXN0cmljdCl7XG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgZGlzdHJpY3R9fWAsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHBhcmFtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJsb2NrKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgZ2V0TGlzdE9mQmxvY2tzVW5kZXJEaXN0cmljdCgkZGlzdHJpY3Q6W1N0cmluZyFdLCRzdGF0ZTpTdHJpbmcpe1xuICAgICAgICAgICAgYmxvY2tzOiBvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH19LGRpc3RpbmN0X29uOmJsb2NrKXtcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICBkaXN0cmljdFxuICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBwYXJhbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTY2hvb2xEZXRhaWxzKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgZ2V0TGlzdE9mU2Nob29sc1VuZGVyQmxvY2tzQW5kRGlzdHJpY3QoJGRpc3RyaWN0OltTdHJpbmchXSwkc3RhdGU6U3RyaW5nLCRibG9jazpbU3RyaW5nIV0pe1xuICAgICAgICAgICAgc2Nob29sczpvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH0sYmxvY2s6e19pbjokYmxvY2t9fSl7XG4gICAgICAgICAgICBzY2hvb2xcbiAgICAgICAgICAgIHNjaG9vbF9jb2RlXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgZGlzdHJpY3RcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogcGFyYW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2x1c3RlcnMocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZDbHVzdGVyc1VuZGVyQmxvY2tBbmREaXN0cmljdCgkYmxvY2s6W1N0cmluZyFdLCRkaXN0cmljdDpbU3RyaW5nIV0sJHN0YXRlOlN0cmluZyl7XG4gICAgICAgICAgICBjbHVzdGVyczpvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH0sYmxvY2s6e19pbjokYmxvY2t9fSxkaXN0aW5jdF9vbjpjbHVzdGVyKXtcbiAgICAgICAgICAgIGNsdXN0ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBwYXJhbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRSb2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGZldGNoTGlzdE9mUm9sZXN7XG4gICAgICAgICAgICAgICAgICAgcm9sZXtcbiAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Qm9hcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGxpc3RPZkJvYXJkc3tcbiAgICAgICAgICAgICAgICAgIGJvYXJke1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIG5hbWV9fWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiYXNlUmVxdWVzdChib2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLkJBU0VfVVJMLCBib2R5LCB7fSk7XG4gICAgfVxufVxuIl19
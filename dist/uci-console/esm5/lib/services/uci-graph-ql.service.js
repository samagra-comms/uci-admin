import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
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
    UciGraphQlService.ɵfac = function UciGraphQlService_Factory(t) { return new (t || UciGraphQlService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GlobalService)); };
    UciGraphQlService.ɵprov = i0.ɵɵdefineInjectable({ token: UciGraphQlService, factory: UciGraphQlService.ɵfac, providedIn: 'root' });
    return UciGraphQlService;
}(BaseService));
export { UciGraphQlService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UciGraphQlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWdyYXBoLXFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VjaS1ncmFwaC1xbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUkzQztJQUd1QyxxQ0FBVztJQUc5QywyQkFBbUIsSUFBZ0IsRUFBUyxhQUE0QjtRQUF4RSxZQUNJLGtCQUFNLElBQUksRUFBRSxhQUFhLENBQUMsU0FNN0I7UUFQa0IsVUFBSSxHQUFKLElBQUksQ0FBWTtRQUFTLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXBFLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDdkMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsY0FBYyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEIsS0FBSyxFQUFFLDJGQUVDO1NBQ1gsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRSx5S0FHSTtZQUNYLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUUsNFFBTUw7WUFDRixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxxVkFRTDtZQUNGLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUUsc1JBSUw7WUFDRixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUUsK0lBS0U7U0FDWixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUUsK0ZBR007U0FDaEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHVDQUFXLEdBQW5CLFVBQW9CLElBQUk7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO3NGQTNGUSxpQkFBaUI7NkRBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs0QkFQdEI7Q0FxR0MsQUEvRkQsQ0FHdUMsV0FBVyxHQTRGakQ7U0E1RlksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCYXNlU2VydmljZX0gZnJvbSAnLi9iYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuL2dsb2JhbC5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVjaUdyYXBoUWxTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xuICAgIEJBU0VfVVJMO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGh0dHAsIGdsb2JhbFNlcnZpY2UpO1xuICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2UuYmFzZVVybCQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuQkFTRV9VUkwgPSB2YWx1ZSArICcvdWNpLWFwaS9ncWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZTdGF0ZXN7XG4gICAgICAgICAgICBvcmdhbmlzYXRpb24oZGlzdGluY3Rfb246c3RhdGUpe1xuICAgICAgICAgICAgc3RhdGV9fWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzdHJpY3QocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZEaXN0cmljdEluU3RhdGUoJHN0YXRlOlN0cmluZyl7XG4gICAgICAgICAgICBvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfX0sICBkaXN0aW5jdF9vbjpkaXN0cmljdCl7XG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgZGlzdHJpY3R9fWAsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHBhcmFtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJsb2NrKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgZ2V0TGlzdE9mQmxvY2tzVW5kZXJEaXN0cmljdCgkZGlzdHJpY3Q6W1N0cmluZyFdLCRzdGF0ZTpTdHJpbmcpe1xuICAgICAgICAgICAgYmxvY2tzOiBvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH19LGRpc3RpbmN0X29uOmJsb2NrKXtcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICBkaXN0cmljdFxuICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBwYXJhbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTY2hvb2xEZXRhaWxzKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgZ2V0TGlzdE9mU2Nob29sc1VuZGVyQmxvY2tzQW5kRGlzdHJpY3QoJGRpc3RyaWN0OltTdHJpbmchXSwkc3RhdGU6U3RyaW5nLCRibG9jazpbU3RyaW5nIV0pe1xuICAgICAgICAgICAgc2Nob29sczpvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH0sYmxvY2s6e19pbjokYmxvY2t9fSl7XG4gICAgICAgICAgICBzY2hvb2xcbiAgICAgICAgICAgIHNjaG9vbF9jb2RlXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgZGlzdHJpY3RcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogcGFyYW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2x1c3RlcnMocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZDbHVzdGVyc1VuZGVyQmxvY2tBbmREaXN0cmljdCgkYmxvY2s6W1N0cmluZyFdLCRkaXN0cmljdDpbU3RyaW5nIV0sJHN0YXRlOlN0cmluZyl7XG4gICAgICAgICAgICBjbHVzdGVyczpvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH0sYmxvY2s6e19pbjokYmxvY2t9fSxkaXN0aW5jdF9vbjpjbHVzdGVyKXtcbiAgICAgICAgICAgIGNsdXN0ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBwYXJhbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRSb2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGZldGNoTGlzdE9mUm9sZXN7XG4gICAgICAgICAgICAgICAgICAgcm9sZXtcbiAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Qm9hcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGxpc3RPZkJvYXJkc3tcbiAgICAgICAgICAgICAgICAgIGJvYXJke1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIG5hbWV9fWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiYXNlUmVxdWVzdChib2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLkJBU0VfVVJMLCBib2R5LCB7fSk7XG4gICAgfVxufVxuIl19
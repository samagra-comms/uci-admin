import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { GlobalService } from './global.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./global.service";
let UciGraphQlService = class UciGraphQlService extends BaseService {
    constructor(http, globalService) {
        super(http, globalService);
        this.http = http;
        this.globalService = globalService;
        this.globalService.baseUrl$.subscribe(value => {
            if (value) {
                this.BASE_URL = value + '/uci-api/gql';
            }
        });
    }
    getState() {
        return this.baseRequest({
            query: `query getListOfStates{
            organisation(distinct_on:state){
            state}}`
        });
    }
    getDistrict(param) {
        return this.baseRequest({
            query: `query getListOfDistrictInState($state:String){
            organisation(where:{state:{_eq:$state}},  distinct_on:district){
            state
            district}}`,
            variables: param
        });
    }
    getBlock(param) {
        return this.baseRequest({
            query: `query getListOfBlocksUnderDistrict($district:[String!],$state:String){
            blocks: organisation(where:{state:{_eq:$state},district:{_in:$district}},distinct_on:block){
            block
            district
            state
            }
            }`,
            variables: param
        });
    }
    getSchoolDetails(param) {
        return this.baseRequest({
            query: `query getListOfSchoolsUnderBlocksAndDistrict($district:[String!],$state:String,$block:[String!]){
            schools:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}}){
            school
            school_code
            block
            district
            state
            }
            }`,
            variables: param
        });
    }
    getClusters(param) {
        return this.baseRequest({
            query: `query getListOfClustersUnderBlockAndDistrict($block:[String!],$district:[String!],$state:String){
            clusters:organisation(where:{state:{_eq:$state},district:{_in:$district},block:{_in:$block}},distinct_on:cluster){
            cluster
            }
            }`,
            variables: param
        });
    }
    getRole() {
        return this.baseRequest({
            query: `query fetchListOfRoles{
                   role{
                   id
                   name
                   }
                   }`
        });
    }
    getBoards() {
        return this.baseRequest({
            query: `query listOfBoards{
                  board{
                  id
                  name}}`
        });
    }
    baseRequest(body) {
        return this.http.post(this.BASE_URL, body, {});
    }
};
UciGraphQlService.ctorParameters = () => [
    { type: HttpClient },
    { type: GlobalService }
];
UciGraphQlService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UciGraphQlService_Factory() { return new UciGraphQlService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GlobalService)); }, token: UciGraphQlService, providedIn: "root" });
UciGraphQlService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UciGraphQlService);
export { UciGraphQlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWdyYXBoLXFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VjaS1ncmFwaC1xbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBTS9DLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEsV0FBVztJQUc5QyxZQUFtQixJQUFnQixFQUFTLGFBQTRCO1FBQ3BFLEtBQUssQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFEWixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLGNBQWMsQ0FBQzthQUMxQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEIsS0FBSyxFQUFFOztvQkFFQztTQUNYLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUU7Ozt1QkFHSTtZQUNYLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUU7Ozs7OztjQU1MO1lBQ0YsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUs7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRTs7Ozs7Ozs7Y0FRTDtZQUNGLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUU7Ozs7Y0FJTDtZQUNGLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRTs7Ozs7cUJBS0U7U0FDWixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUU7Ozt5QkFHTTtTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sV0FBVyxDQUFDLElBQUk7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0osQ0FBQTs7WUF6RjRCLFVBQVU7WUFBd0IsYUFBYTs7O0FBSC9ELGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDUixVQUFVLEVBQUUsTUFBTTtLQUNyQixDQUFDO0dBQ1csaUJBQWlCLENBNEY3QjtTQTVGWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0Jhc2VTZXJ2aWNlfSBmcm9tICcuL2Jhc2Uuc2VydmljZSc7XG5pbXBvcnQge0dsb2JhbFNlcnZpY2V9IGZyb20gJy4vZ2xvYmFsLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVWNpR3JhcGhRbFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XG4gICAgQkFTRV9VUkw7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGdsb2JhbFNlcnZpY2U6IEdsb2JhbFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoaHR0cCwgZ2xvYmFsU2VydmljZSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU2VydmljZS5iYXNlVXJsJC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5CQVNFX1VSTCA9IHZhbHVlICsgJy91Y2ktYXBpL2dxbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGdldExpc3RPZlN0YXRlc3tcbiAgICAgICAgICAgIG9yZ2FuaXNhdGlvbihkaXN0aW5jdF9vbjpzdGF0ZSl7XG4gICAgICAgICAgICBzdGF0ZX19YFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREaXN0cmljdChwYXJhbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGdldExpc3RPZkRpc3RyaWN0SW5TdGF0ZSgkc3RhdGU6U3RyaW5nKXtcbiAgICAgICAgICAgIG9yZ2FuaXNhdGlvbih3aGVyZTp7c3RhdGU6e19lcTokc3RhdGV9fSwgIGRpc3RpbmN0X29uOmRpc3RyaWN0KXtcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICBkaXN0cmljdH19YCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogcGFyYW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QmxvY2socGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZCbG9ja3NVbmRlckRpc3RyaWN0KCRkaXN0cmljdDpbU3RyaW5nIV0sJHN0YXRlOlN0cmluZyl7XG4gICAgICAgICAgICBibG9ja3M6IG9yZ2FuaXNhdGlvbih3aGVyZTp7c3RhdGU6e19lcTokc3RhdGV9LGRpc3RyaWN0OntfaW46JGRpc3RyaWN0fX0sZGlzdGluY3Rfb246YmxvY2spe1xuICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgIGRpc3RyaWN0XG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHBhcmFtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNjaG9vbERldGFpbHMocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZTY2hvb2xzVW5kZXJCbG9ja3NBbmREaXN0cmljdCgkZGlzdHJpY3Q6W1N0cmluZyFdLCRzdGF0ZTpTdHJpbmcsJGJsb2NrOltTdHJpbmchXSl7XG4gICAgICAgICAgICBzY2hvb2xzOm9yZ2FuaXNhdGlvbih3aGVyZTp7c3RhdGU6e19lcTokc3RhdGV9LGRpc3RyaWN0OntfaW46JGRpc3RyaWN0fSxibG9jazp7X2luOiRibG9ja319KXtcbiAgICAgICAgICAgIHNjaG9vbFxuICAgICAgICAgICAgc2Nob29sX2NvZGVcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICBkaXN0cmljdFxuICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBwYXJhbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDbHVzdGVycyhwYXJhbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGdldExpc3RPZkNsdXN0ZXJzVW5kZXJCbG9ja0FuZERpc3RyaWN0KCRibG9jazpbU3RyaW5nIV0sJGRpc3RyaWN0OltTdHJpbmchXSwkc3RhdGU6U3RyaW5nKXtcbiAgICAgICAgICAgIGNsdXN0ZXJzOm9yZ2FuaXNhdGlvbih3aGVyZTp7c3RhdGU6e19lcTokc3RhdGV9LGRpc3RyaWN0OntfaW46JGRpc3RyaWN0fSxibG9jazp7X2luOiRibG9ja319LGRpc3RpbmN0X29uOmNsdXN0ZXIpe1xuICAgICAgICAgICAgY2x1c3RlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHBhcmFtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFJvbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgZmV0Y2hMaXN0T2ZSb2xlc3tcbiAgICAgICAgICAgICAgICAgICByb2xle1xuICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRCb2FyZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgbGlzdE9mQm9hcmRze1xuICAgICAgICAgICAgICAgICAgYm9hcmR7XG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgbmFtZX19YFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJhc2VSZXF1ZXN0KGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuQkFTRV9VUkwsIGJvZHksIHt9KTtcbiAgICB9XG59XG4iXX0=
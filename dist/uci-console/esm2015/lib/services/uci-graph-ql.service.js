import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./global.service";
export class UciGraphQlService extends BaseService {
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
}
UciGraphQlService.ɵfac = function UciGraphQlService_Factory(t) { return new (t || UciGraphQlService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GlobalService)); };
UciGraphQlService.ɵprov = i0.ɵɵdefineInjectable({ token: UciGraphQlService, factory: UciGraphQlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UciGraphQlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.GlobalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWNpLWdyYXBoLXFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2FtYWdyYS14L3VjaS1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3VjaS1ncmFwaC1xbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTzNDLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxXQUFXO0lBRzlDLFlBQW1CLElBQWdCLEVBQVMsYUFBNEI7UUFDcEUsS0FBSyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQURaLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUVwRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsY0FBYyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNwQixLQUFLLEVBQUU7O29CQUVDO1NBQ1gsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRTs7O3VCQUdJO1lBQ1gsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRTs7Ozs7O2NBTUw7WUFDRixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBSztRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEIsS0FBSyxFQUFFOzs7Ozs7OztjQVFMO1lBQ0YsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFLO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRTs7OztjQUlMO1lBQ0YsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE9BQU87UUFDSCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEIsS0FBSyxFQUFFOzs7OztxQkFLRTtTQUNaLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BCLEtBQUssRUFBRTs7O3lCQUdNO1NBQ2hCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxXQUFXLENBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2tGQTNGUSxpQkFBaUI7eURBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTtrREFFVCxpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCYXNlU2VydmljZX0gZnJvbSAnLi9iYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHtHbG9iYWxTZXJ2aWNlfSBmcm9tICcuL2dsb2JhbC5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVjaUdyYXBoUWxTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xuICAgIEJBU0VfVVJMO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBnbG9iYWxTZXJ2aWNlOiBHbG9iYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGh0dHAsIGdsb2JhbFNlcnZpY2UpO1xuICAgICAgICB0aGlzLmdsb2JhbFNlcnZpY2UuYmFzZVVybCQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuQkFTRV9VUkwgPSB2YWx1ZSArICcvdWNpLWFwaS9ncWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZTdGF0ZXN7XG4gICAgICAgICAgICBvcmdhbmlzYXRpb24oZGlzdGluY3Rfb246c3RhdGUpe1xuICAgICAgICAgICAgc3RhdGV9fWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzdHJpY3QocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZEaXN0cmljdEluU3RhdGUoJHN0YXRlOlN0cmluZyl7XG4gICAgICAgICAgICBvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfX0sICBkaXN0aW5jdF9vbjpkaXN0cmljdCl7XG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICAgICAgZGlzdHJpY3R9fWAsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHBhcmFtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJsb2NrKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgZ2V0TGlzdE9mQmxvY2tzVW5kZXJEaXN0cmljdCgkZGlzdHJpY3Q6W1N0cmluZyFdLCRzdGF0ZTpTdHJpbmcpe1xuICAgICAgICAgICAgYmxvY2tzOiBvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH19LGRpc3RpbmN0X29uOmJsb2NrKXtcbiAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICBkaXN0cmljdFxuICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBwYXJhbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTY2hvb2xEZXRhaWxzKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VSZXF1ZXN0KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBgcXVlcnkgZ2V0TGlzdE9mU2Nob29sc1VuZGVyQmxvY2tzQW5kRGlzdHJpY3QoJGRpc3RyaWN0OltTdHJpbmchXSwkc3RhdGU6U3RyaW5nLCRibG9jazpbU3RyaW5nIV0pe1xuICAgICAgICAgICAgc2Nob29sczpvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH0sYmxvY2s6e19pbjokYmxvY2t9fSl7XG4gICAgICAgICAgICBzY2hvb2xcbiAgICAgICAgICAgIHNjaG9vbF9jb2RlXG4gICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgZGlzdHJpY3RcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIHZhcmlhYmxlczogcGFyYW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2x1c3RlcnMocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgcXVlcnk6IGBxdWVyeSBnZXRMaXN0T2ZDbHVzdGVyc1VuZGVyQmxvY2tBbmREaXN0cmljdCgkYmxvY2s6W1N0cmluZyFdLCRkaXN0cmljdDpbU3RyaW5nIV0sJHN0YXRlOlN0cmluZyl7XG4gICAgICAgICAgICBjbHVzdGVyczpvcmdhbmlzYXRpb24od2hlcmU6e3N0YXRlOntfZXE6JHN0YXRlfSxkaXN0cmljdDp7X2luOiRkaXN0cmljdH0sYmxvY2s6e19pbjokYmxvY2t9fSxkaXN0aW5jdF9vbjpjbHVzdGVyKXtcbiAgICAgICAgICAgIGNsdXN0ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBwYXJhbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRSb2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGZldGNoTGlzdE9mUm9sZXN7XG4gICAgICAgICAgICAgICAgICAgcm9sZXtcbiAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Qm9hcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUmVxdWVzdCh7XG4gICAgICAgICAgICBxdWVyeTogYHF1ZXJ5IGxpc3RPZkJvYXJkc3tcbiAgICAgICAgICAgICAgICAgIGJvYXJke1xuICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIG5hbWV9fWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiYXNlUmVxdWVzdChib2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLkJBU0VfVVJMLCBib2R5LCB7fSk7XG4gICAgfVxufVxuIl19
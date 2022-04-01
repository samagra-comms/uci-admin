import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {GlobalService} from './global.service';


@Injectable({
    providedIn: 'root'
})
export class UciGraphQlService extends BaseService {
    BASE_URL;

    constructor(public http: HttpClient, public globalService: GlobalService) {
        super(http, globalService);
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

    private baseRequest(body) {
        return this.http.post(this.BASE_URL, body, {});
    }
}

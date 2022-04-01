import { UciService } from './uci.service';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from 'lodash'
import { IdiscussionConfig } from '../models/uci-config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements OnInit {

  paramsSubscription: Subscription;
  private _config: IdiscussionConfig;
  public checkContext: boolean;
  public queryParams;
  getContextData: any;
  hasContextData: any;
  getParams: IdiscussionConfig;


  constructor(
    public activatedRoute: ActivatedRoute,
    private UciService: UciService,
  ) { }

  ngOnInit() {

  }

  setConfig(activatedRoute) {
    activatedRoute.data.subscribe((config) => {
      this._config = config.data;
    });
  }

  setConfigFromParams(activatedRoute) {
    activatedRoute.queryParams.subscribe((params) => {
      const obj: IdiscussionConfig = {
        userName : _.get(params, 'userName'),
        categories : JSON.parse(_.get(params, 'categories'))
      };
      this._config = obj;
    });
  }

  public getConfig() {
    return this._config;
  }

  public getCategories() {
    this.getParams = this.getConfig()
    return _.get(this.getParams, 'categories')
  }

  public hasContext() {
    this.hasContextData = this.getCategories() ?
      (this.getCategories().result ? this.getCategories().result.length : null)
      : null
    return this.hasContextData
  }

  public getContext() {
    this.getContextData = this.getCategories() ?
      (this.getCategories().result ? this.getCategories().result : null)
      : null
    return this.getContextData
  }

  public getRouterSlug() {
    return this._config.routerSlug ? this._config.routerSlug : '';
  }
}

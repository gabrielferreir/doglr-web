import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {ApiService} from '../../../core/api/api.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../../environments/environment';
import {UiToolbarService} from 'ng-smn-ui';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit, AfterViewInit, OnDestroy {
  loading: boolean;
  info: any;

  pathImages: string;

  slide: any;

  readyToGo: boolean;

  constructor(public _location: Location,
              private _api: ApiService,
              private _route: ActivatedRoute,
              private toolbarService: UiToolbarService) {
    this.info = {};
    this.pathImages = `${environment.API}/animals/`;
  }

  ngOnInit() {
    this.get();
  }

  ngAfterViewInit() {
    this.toolbarService.set('Nova mídia');
    this.toolbarService.activateExtendedToolbar(960);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }



  get() {
    this.loading = true;
    this._api.request('GET', `${environment.API}/animals/${this._route.snapshot.params.id}`, {})
      .subscribe(res => {
        this.info = res.content;
      }, err => {
        console.error(err);
      }, () => {
        this.slide = this.info.images;
        this.readyToGo = true;
        this.loading = false;
      });
  }

}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {ApiService} from '../../../core/api/api.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  loading: boolean;
  info: any;

  pathImages: string;

  slide: any;

  @ViewChild('images') images;

  constructor(public _location: Location,
              private _api: ApiService,
              private _route: ActivatedRoute) {
    this.info = {};
    this.pathImages = `${environment.API}/animals/`;
  }

  ngOnInit() {
    this.get();
  }

  nextImage() {
    console.log('AA');
    // const totalPages = this.images.element.nativeElement.querySelectorAll('.page').length;
    // const nextPage = this.images.currentPage < totalPages ? this.images.currentPage + 1 : 1;
    // this.images.pagesGoToPage(nextPage);
  }

  get() {
    this._api.request('GET', `${environment.API}/animals/${this._route.snapshot.params.id}`, {})
      .subscribe(res => {
        console.log(res);
        this.info = res.content;
      }, err => {
        console.log(err);

      }, () => {
        this.slide = this.info.images;
        this.loading = false;
      });
  }

}

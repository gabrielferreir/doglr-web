import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';
import {UiToolbarService} from 'ng-smn-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  animals: any;
  animalsDog: any;
  animalsCat: any;

  joaquina = {
    id: 'dnhsjdba',
    name: 'Joaquina',
    age: '3 anos',
    breed: 'Vira-lata',
    image: 'joaquina.png',
    visualizacoes: 26
  };

  constructor(private _api: ApiService,
              private toolbarService: UiToolbarService) {
  }

  ngOnInit() {
    this.getAnimals(null);
  }

  ngAfterViewInit() {
    this.toolbarService.set('Home');
    this.toolbarService.activateExtendedToolbar(960);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  getAnimals(type) {
    this._api.request('GET', `${environment.API}/animals${type ? '?tipo=' + type : ''}`, {})
      .subscribe(res => {
        console.log(res);
        if (type && type.toUpperCase() === 'C') {
          this.animalsDog = res.content;
        } else if (type && type.toUpperCase() === 'G') {
          this.animalsCat = res.content;
        } else {
          this.animals = res.content;
        }
      }, err => {
        console.log(err);

      }, () => {

      });
  }

}

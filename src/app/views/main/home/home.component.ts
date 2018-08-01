import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animals: any[];

  joaquina = {
    id: 'dnhsjdba',
    name: 'Joaquina',
    age: '3 anos',
    breed: 'Vira-lata',
    image: 'joaquina.png',
    visualizacoes: 26
  };

  constructor(private _api: ApiService) {
  }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this._api.request('GET', `${environment.API}/animals`, {})
      .subscribe(res => {
        console.log(res);
        this.animals = res.content;
      }, err => {
        console.log(err);

      }, () => {

      });
  }

}

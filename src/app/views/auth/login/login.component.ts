import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  info: any;

  constructor(private _api: ApiService) {
    this.info = {};
  }

  ngOnInit() {
    console.log(environment.API);

    // this.login();
  }

  login() {
    const res = this._api.request('POST', `${environment.API}login`, {
      body: this.info
    }).subscribe(response => {
      console.log(response.body);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Concluido');
    });
  }


}

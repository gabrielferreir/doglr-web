import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';
import {UserService} from '../../../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  info: any;

  constructor(private _api: ApiService,
              private _user: UserService) {
    this.info = {};
  }

  ngOnInit() {
    console.log(environment.API);

    // this.login();
  }

  login() {
    event.preventDefault();
    this._api.request('POST', `${environment.API}/login`, {
      body: this.info
    }).subscribe(response => {
      console.log(response);
      const content = response.content;
      console.log(content.token);
      this._user.setToken(content.token);

    }, err => {
      console.log(err);
    }, () => {
      console.log('Concluido');
    });
  }


}

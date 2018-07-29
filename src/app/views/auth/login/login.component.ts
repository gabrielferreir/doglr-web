import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';
import {UserService} from '../../../core/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  info: any;

  constructor(private _api: ApiService,
              private _user: UserService,
              private _router: Router) {
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
      const content = response.content;
      this._user.setToken(content.token);
      this._user.setUser(content.user);

      this._router.navigate(['/']);

    }, err => {
      console.log(err);
    }, () => {
      console.log('Concluido');
    });
  }


}

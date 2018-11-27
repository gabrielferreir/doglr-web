import {Component, ElementRef, OnInit} from '@angular/core';
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
              private _router: Router,
              private _element: ElementRef) {
    this.info = {};
  }

  ngOnInit() {
  }

  login(form) {
    event.preventDefault();

    const elementPassword = this._element.nativeElement.querySelector('#pass');

    if (form.invalid || this.loading) {
      form.controls.email.markAsTouched();
      form.controls.email.markAsDirty();
      form.controls.pass.markAsTouched();
      form.controls.pass.markAsDirty();
      // elementPassword.focus();
      return;
    }


    this.loading = true;

    console.log(this.info);

    this._api.request('POST', `${environment.API}/users/login`, {
      body: this.info
    }).subscribe(response => {
      const content = response.content;
      this._user.setToken(content.token);
      this._user.setUser(content.user);

      this._router.navigate(['/']);

    }, err => {
      console.error(err);

      if (err.status = 404) {
        form.controls.pass.setErrors({wrong: true});
        elementPassword.focus();
      }

    }, () => {
      this.loading = false;
    });
  }


}

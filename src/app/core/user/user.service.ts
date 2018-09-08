import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {UiCookie} from 'ng-smn-ui';
import {Subject} from 'rxjs';

@Injectable()
export class UserService {
  token: string;
  user = new Subject();
  COOKIE_NAME = {
    authentication: `${environment.system}Authentication`
  };

  constructor() {
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user.next(user);
  }

  getToken() {
    return UiCookie.get(this.COOKIE_NAME.authentication);
  }

  setToken(newToken) {
    this.token = newToken;
    this.setCookie(newToken);
  }

  setCookie(token) {
    UiCookie.set(this.COOKIE_NAME.authentication, token, 365, '/');
  }

  getCookie() {
    return {
      authentication: UiCookie.get(this.COOKIE_NAME.authentication),
    };
  }

  remove() {
    this.user = null;
    this.token = null;
    UiCookie.delete(this.COOKIE_NAME.authentication);
  }

}

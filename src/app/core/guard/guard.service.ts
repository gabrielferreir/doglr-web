import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ApiService} from '../api/api.service';
import {UserService} from '../user/user.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    private _api: ApiService,
    private _user: UserService
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this._user.getToken();
    // VERIFIQUE PELO LOGIN
    console.log(token);
    return token ? true : this.remake();
  }

  remake() {
    return new Promise(resolve => {
      const cookies = this._user.getCookie();
      !!cookies && this.router.navigate(['/login']);
      resolve(!!cookies);
    });

  }

}

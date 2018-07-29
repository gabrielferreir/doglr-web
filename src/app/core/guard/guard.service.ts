import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ApiService} from '../api/api.service';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';

@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    private _api: ApiService,
    private _user: UserService
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = <any>this._user.getUser();
    // VERIFIQUE PELO LOGIN
    console.log(user);
    return user.id ? true : this.remake();
  }

  remake() {
    return new Promise<boolean>(resolve => {
      const cookies = this._user.getCookie().authentication;
      console.log(cookies);
      if (!cookies) {
        this.router.navigate(['/login']);
      }
      // CASO EXISTA O TOKEN, PEGUE OS DADOS DO USUARIO PELO TOKEN
      resolve(!!cookies);
    });

  }

}

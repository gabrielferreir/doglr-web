import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ApiService} from '../api/api.service';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

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
        resolve(false);
      }

      this._api.request('GET', `${environment.API}/refazer/${cookies}`, {})
        .subscribe(res => {
          const content = res.content;
          this._user.setUser(content.user);
          resolve(true);
        }, err => {
          resolve(false);
          this.router.navigate(['/login']);
        }, () => {
          console.log('Complete');
        });
    });
  }

}

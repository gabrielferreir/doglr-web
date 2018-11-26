import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user/user.service';
import {Router} from '@angular/router';
import {UiToolbarService} from 'ng-smn-ui';
import {environment} from '../../../environments/environment';
import {ApiService} from '../../core/api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  title: string;
  menuOpen: boolean;
  user: any;

  constructor(private _user: UserService,
              private _router: Router,
              private toolbarService: UiToolbarService,
              private _api: ApiService) {
    this.title = 'Home';
    this.user = {};
  }

  ngOnInit() {


    this.toolbarService.registerMainToolbar(document.getElementById('app-header'));

    this.toolbarService.change.subscribe(title => {
      this.title = title;
    });

  }

  logoff() {
    this._router.navigate(['/login']);
    this._user.remove();
  }

  ngAfterViewInit() {
    this._user.getUser().subscribe(res => {
      this.user = res;
    });
    if (!Object.keys(this.user).length) {
      const cookies = this._user.getCookie().authentication;
      this._api.request('GET', `${environment.API}/refazer/${cookies}`, {})
        .subscribe(res => {
          this._user.setUser(res.content.user);
        });
    }

  }


}

import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UiToolbarService} from 'ng-smn-ui';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../core/api/api.service';
import {UserService} from '../../../core/user/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-my-animals',
  templateUrl: './my-animals.component.html',
  styleUrls: ['./my-animals.component.scss']
})
export class MyAnimalsComponent implements OnInit, AfterViewInit, OnDestroy {

  animals: any;

  loading: boolean;

  constructor(private toolbarService: UiToolbarService,
              private _api: ApiService,
              private _user: UserService,
              public _location: Location) {
  }

  ngOnInit() {
    this.getMyAnimals();
  }

  ngAfterViewInit() {
    this.toolbarService.set('Meus animais');
    this.toolbarService.activateExtendedToolbar(960);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  getMyAnimals() {
    this.loading = true;
    this._api.request('GET', `${environment.API}/myanimals`, {
      headers: {
        authentication: this._user.getToken()
      }
    })
      .subscribe(res => {
        this.animals = res.content;
      }, err => {
        console.error(err);
      }, () => {
        this.loading = false;
      });
  }

}

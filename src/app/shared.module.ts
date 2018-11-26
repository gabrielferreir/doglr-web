import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SMNUIModule, UiToolbarService} from 'ng-smn-ui';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ApiService} from './core/api/api.service';
import {UserService} from './core/user/user.service';
import {GuardService} from './core/guard/guard.service';

@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    BrowserModule,
    SMNUIModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [UiToolbarService, ApiService, UserService, GuardService],
  bootstrap: []
})
export class SharedModule {
}

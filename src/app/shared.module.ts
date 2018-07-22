import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {SMNUIModule, UiToolbarService} from 'ng-smn-ui';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

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
  providers: [UiToolbarService],
  bootstrap: []
})
export class SharedModule {
}

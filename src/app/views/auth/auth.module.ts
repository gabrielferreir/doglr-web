import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [LoginComponent]
})
export class AuthModule { }

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { MainComponent } from './main.component';
import {SharedModule} from '../../shared.module';
import {HomeModule} from './home/home.module';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  imports: [
    SharedModule,
    HomeModule
  ],
  declarations: [MainComponent, AnimalComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }

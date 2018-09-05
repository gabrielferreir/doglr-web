import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { MainComponent } from './main.component';
import {SharedModule} from '../../shared.module';
import {HomeModule} from './home/home.module';
import { AnimalComponent } from './animal/animal.component';
import {SlideModule} from '../../core/components/slide/slide.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    HomeModule,
    SlideModule
  ],
  declarations: [MainComponent, AnimalComponent, RegisterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }

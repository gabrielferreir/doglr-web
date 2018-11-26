import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {SharedModule} from '../../shared.module';
import {HomeModule} from './home/home.module';
import {AnimalComponent} from './animal/animal.component';
import {SlideModule} from '../../core/components/slide/slide.module';
import {RegisterComponent} from './register/register.component';
import {MyAnimalsComponent} from './my-animals/my-animals.component';
import {CardAnimalModule} from '../../core/components/card-animal/card-animal.module';

@NgModule({
  imports: [
    SharedModule,
    HomeModule,
    SlideModule,
    CardAnimalModule
  ],
  declarations: [MainComponent, AnimalComponent, RegisterComponent, MyAnimalsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {
}

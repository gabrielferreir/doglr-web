import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../../shared.module';
import {CardAnimalModule} from '../../../core/components/card-animal/card-animal.module';

@NgModule({
  imports: [
    SharedModule,
    CardAnimalModule
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}

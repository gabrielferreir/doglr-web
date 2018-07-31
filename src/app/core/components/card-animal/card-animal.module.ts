import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CardAnimalComponent} from './card-animal.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CardAnimalComponent],
  exports: [CardAnimalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardAnimalModule {
}

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {SlideComponent} from './slide.component';
import {SharedModule} from '../../../shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SlideComponent],
  exports: [SlideComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlideModule {
}

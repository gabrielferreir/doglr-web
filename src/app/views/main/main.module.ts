import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {SharedModule} from '../../shared.module';
import {HomeModule} from './home/home.module';

@NgModule({
  imports: [
    SharedModule,
    HomeModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }

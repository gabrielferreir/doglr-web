import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {GuardService} from '../../core/guard/guard.service';
import {HomeComponent} from './home/home.component';
import {AnimalComponent} from './animal/animal.component';

export const MAIN_ROUTES: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
      canActivate: [GuardService]
    },
    {
      path: 'animal/:id',
      component: AnimalComponent
    }
  ]
}];

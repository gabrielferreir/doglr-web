import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {GuardService} from '../../core/guard/guard.service';

export const MAIN_ROUTES: Routes = [{
  path: 'private',
  component: MainComponent,
  canActivate: [ GuardService ],
  children: []
}];

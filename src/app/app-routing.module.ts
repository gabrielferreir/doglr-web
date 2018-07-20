import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ERROR_ROUTES} from './views/error/error-routing.module';
import {AUTH_ROUTES} from './views/auth/auth-routing.module';
import {MAIN_ROUTES} from './views/main/main-routing.module';

const routes: Routes = [
  // Auth application
  ...AUTH_ROUTES,
  // Your routes here
  ...MAIN_ROUTES,
  // Errors aplication
  ...ERROR_ROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

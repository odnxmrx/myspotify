import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    //para ir a /auth/login:
    path: 'login', //sería localhost:4200/auth/login
    component: AuthPageComponent,
  },
  {
    path: '', //será localhost:4200/auth
    component: AuthPageComponent,
  },
  {
    path: '**', //Error 404 Not Found
    redirectTo: '/auth/login',
    // localhost:4200/auth/gfgvdrfs
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

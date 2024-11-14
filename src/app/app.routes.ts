import { Routes } from '@angular/router';
import { sessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
// import { ExampleComponent } from './example/example.component';

export const routes: Routes = [
  // {
  //   path: '', // referencia a /
  //   component: ExampleComponent
  // }
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '', //en ruta raiz '/'
    component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [sessionGuard],
  },
];

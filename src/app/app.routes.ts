import { Routes } from '@angular/router';
// import { ExampleComponent } from './example/example.component';

export const routes: Routes = [
  // {
  //   path: '', // referencia a /
  //   component: ExampleComponent
  // }
  {
    path: '', //en ruta raiz '/'
    //component: 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

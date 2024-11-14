import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // }

  //ahora llamaremos a los modulos que se van a renderizar dentro del outlet
  {
    path: 'tracks',
    loadChildren: () =>
      import('@modules/tracks/tracks.module').then((m) => m.TracksModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('@modules/favorites/favorites.module').then(
        (m) => m.FavoritesModule
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('@modules/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: '**', //on 404 - non-existing route
    redirectTo: '/tracks',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

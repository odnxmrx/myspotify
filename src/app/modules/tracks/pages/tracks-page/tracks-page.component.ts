import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';
import * as rawData from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/track.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [GenericSectionComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css',
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksListTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  //Buenas prácticas - Array de observables
  listObservers$: Array<Subscription> = [];

  //inyectamos servicio 'track'
  constructor(private _trackService: TrackService) {}

  //temp mock for tracks - despues vendra de API
  // mockTracksList: Array<TrackModel> = [];

  ngOnInit(): void {
    // const { data }: any = (rawData as any).default;
    // //console.log('lo que vale data: ', data);
    // this.mockTracksList = data;

    //Observar
    const observer1$ = this._trackService.dataTracksTrending$.subscribe(
      (response) => {
        this.tracksListTrending = response;
        this.tracksRandom = response; // tomar de ej. las que del .json
        console.log('response as canciones: ', response);
      }
    );

    const observer2$ = this._trackService.dataTracksRandom$.subscribe(
      (response) => {
        this.tracksRandom = [...this.tracksRandom, ...response];
        console.log('ancion random entrando...: ', response);
      }
    );

    this.listObservers$ = [observer1$, observer2$]; //inlcuir observer en Array
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.listObservers$.forEach((u) => u.unsubscribe());
  }
}

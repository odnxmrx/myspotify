import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { Observable, of } from 'rxjs';
import * as RawData from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  constructor() {
    const { data }: any = (RawData as any).default;

    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable((observer) => {
      const exampleTrack: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: '',
        cover:
          'https://images.genius.com/511d7b6e512772d5256e4da53e1c3b71.888x888x1.jpg',
        duration: 120,
      };

      setTimeout(() => {
        observer.next([exampleTrack]);
      }, 3000);
      /*
      propiedad '.next'
        Pasa nuevo evento por el stream que pueden tomarlo los componentes
      */
    });
  }

  //prop observable para trending tracks - Necesario suscribirse
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);
}

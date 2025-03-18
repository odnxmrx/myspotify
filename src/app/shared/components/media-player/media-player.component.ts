import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programación Reactiva

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet, AsyncPipe],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  constructor(public _multimediaService: MultimediaService) {}

  //Observadores array
  listObservers$: Array<Subscription> = [];
  myState: string = 'paused';

  ngOnDestroy(): void {
    this.listObservers$.forEach((subs) => subs.unsubscribe()); //recorder array y quitar suscripcion
  }

  ngOnInit(): void {
    // this._multimediaService.trackInfo$
    const observer1$ = this._multimediaService.playerStatus$.subscribe(
      (status) => (this.myState = status)
    );

    this.listObservers$ = [observer1$]; // de-suscribrir al destruir comp
  }

  // mockCover!: TrackModel;
}

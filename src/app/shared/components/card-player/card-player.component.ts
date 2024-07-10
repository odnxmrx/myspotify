import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
  ],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {

  //default input 'mode' and 'track
  @Input() mode: 'small' | 'big' = 'small';
  //@Input() track!: TrackModel; //porque falta inicializar, el '!' lo ignora
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    cover: '',
    duration: 22,
    url: '',
  }

}

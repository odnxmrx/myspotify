import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { BrokenImgDirective } from '@shared/directives/broken-img.directive';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [NgClass, NgIf, BrokenImgDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
})
export class CardPlayerComponent {
  //default input 'mode' and 'track
  @Input() mode: 'small' | 'big' = 'small';
  //@Input() track!: TrackModel; //porque falta inicializar, el '!' lo ignora
  @Input() track: TrackModel = {
    //initialize to its interface:
    _id: 0,
    name: '',
    album: '',
    cover: '',
    duration: 22,
    url: '',
  };
}

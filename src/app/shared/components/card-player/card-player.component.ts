import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { BrokenImgDirective } from '@shared/directives/broken-img.directive';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [NgClass, NgIf, BrokenImgDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css',
})
export class CardPlayerComponent {
  constructor(private _multimediaService: MultimediaService) {}

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

  //Método
  sendPlay(track: TrackModel): void {
    console.log("enviando 'track' a player....", track);

    this._multimediaService.callback.emit(track);
  }
}

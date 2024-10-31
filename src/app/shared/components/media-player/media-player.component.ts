import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent implements OnInit {
  constructor(private _multimediaService: MultimediaService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    const observer1$ = this._multimediaService.callback.subscribe(
      //suscribir para escuchar a 'callback'
      (response: TrackModel) => {
        //respuesta de tipo TrackModel
        console.log('recibiendo track (en response)', response);
      }
    );
  }

  mockCover: TrackModel = {
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_%28album_cover%29.png/640px-Charli_XCX_-_Brat_%28album_cover%29.png',
    name: 'Mock desde media-player',
    album: 'BRAT',
    duration: 12,
    url: 'http://localhost',
    _id: 1, //dependerá de la interfaz o de la BD (si es string o int)
  };
}

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

  mockCover: TrackModel = {
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_%28album_cover%29.png/640px-Charli_XCX_-_Brat_%28album_cover%29.png',
    name: 'Mock desde media-player',
    album: 'BRAT',
    duration: 12,
    url: 'http://localhost',
    _id: 1 //dependerá de la interfaz o de la BD (si es string o int)
  }

}

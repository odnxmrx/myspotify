import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

  mockCover: any = {
    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_%28album_cover%29.png/640px-Charli_XCX_-_Brat_%28album_cover%29.png',
    name: 'Girl, so confusing',
    album: 'BRAT',
  }

}

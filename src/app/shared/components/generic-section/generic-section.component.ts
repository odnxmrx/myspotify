import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardPlayerComponent } from "../card-player/card-player.component";
import { TrackModel } from '@core/models/track.model';

@Component({
    selector: 'app-generic-section',
    standalone: true,
    templateUrl: './generic-section.component.html',
    styleUrl: './generic-section.component.css',
    imports: [
        NgClass,
        NgFor,
        CardPlayerComponent
    ]
})
export class GenericSectionComponent {

  //using Input decorator
  @Input() title: string = '';

  //dato de entrada 'mode' - acepta solo UNO de DOS valores dados
  @Input() mode: 'small' | 'big' = 'big'; // valor default = 'big'

  //input array for dataTracks
  @Input() dataTracks: Array<TrackModel> = [];

}

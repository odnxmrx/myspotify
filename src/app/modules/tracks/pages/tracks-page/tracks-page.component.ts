import { Component, OnInit } from '@angular/core';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';
import * as rawData from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [
    GenericSectionComponent,
  ],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {

  //temp mock for tracks - despues vendra de API
  mockTracksList: Array<TrackModel> = [];

  ngOnInit(): void { 
    const {data}: any = (rawData as any).default;
    //console.log('lo que vale data: ', data);
    this.mockTracksList = data;
  }
  

}

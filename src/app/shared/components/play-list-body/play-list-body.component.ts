import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'; //importando JSON de tracks
import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    NgFor,
    NgTemplateOutlet
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})

export class PlayListBodyComponent implements OnInit {

  tracks: Array<TrackModel> = [];
  //tracks: TrackModel[] = [];

  //implementing OnInit:
  ngOnInit(): void {
    //{ data } -> Destructuring
    const { data }: any = (dataRaw as any).default; 
    // console.log('lo que vale data:', data);
    this.tracks = data; //Asignamos la 'data' en array 'tracks'
  }


}

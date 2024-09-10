import { DatePipe, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'; //importando JSON de tracks
import { TrackModel } from '@core/models/track.model';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    NgFor,
    NgTemplateOutlet,
    OrderListPipe,
    DatePipe,
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})

export class PlayListBodyComponent implements OnInit {

  tracks: Array<TrackModel> = [];
  //tracks: TrackModel[] = [];
  
  //Inicializacion y asignación por default de parametros para order:
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }


  //implementing OnInit:
  ngOnInit(): void {
    //{ data } -> Destructuring
    const { data }: any = (dataRaw as any).default; 
    // console.log('lo que vale data:', data);
    this.tracks = data; //Asignamos la 'data' en array 'tracks'
  }


  //funcion de escucha
  changeSort(property: string): void {
    const {order} = this.optionSort; //con destructuring
    this.optionSort = { //actualizamos obj
      property: property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log('el optionSort: ', this.optionSort);
    
  }


}

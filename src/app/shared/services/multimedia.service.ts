import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  //declaracion de variable cb
  callback: EventEmitter<any> = new EventEmitter<any>();
  /* EventEmitter
        subscribe()
        emit()
  */

  // creamos variables
  // nombre 'audio' y tipo 'HTMLAudioElem'
  public audio!: HTMLAudioElement;
  // variable 'trackInfo' de tipo BehaviorSubject incializada como 'undefined'
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor() {
    this.audio = new Audio(); // inicializamos 'audio' de la clase 'Audio'
    this.trackInfo$.subscribe((resOk) => {
      if (resOk) {
        this.setAudio(resOk);
      }
    });
  }

  // Funcion publica
  public setAudio(track: TrackModel): void {
    // console.log('recibí evento', track);
    this.audio.src = track.url; // asignamos a propiedad 'src' de variable 'audio', la 'url'
    this.audio.play();
  }
}

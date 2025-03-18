import { EventEmitter, Injectable } from '@angular/core';
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

  constructor() {}
}

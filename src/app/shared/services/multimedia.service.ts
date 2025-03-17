import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

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

  myObservable1$: Observable<any> = new Observable();

  constructor() {
    // práctica; inicializamos observable1
    this.myObservable1$ = new Observable((observer: Observer<any>) => {
      // función que recibe 'observer'
      observer.next('gluglugluuuuu');

      setTimeout(() => {
        observer.complete(); // finalizar/completar la suscripción
      }, 4000);

      setTimeout(() => {
        observer.next('yup');
      }, 2500);

      setTimeout(() => {
        observer.error('yup');
      }, 3500);
    });
  }
}

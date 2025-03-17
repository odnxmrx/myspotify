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

  // myObservable1$: Observable<any> = new Observable();
  // myObservable1$: Subject<any> = new Subject();
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('inicializado');

  constructor() {
    setTimeout(() => {
      // para poder visualizarlo en suscripción hecha en OnInit
      this.myObservable1$.next('wow');
    }, 1000);

    // // práctica; inicializamos observabl e1
    // this.myObservable1$ = new Observable((observer: Observer<any>) => {
    //   // función que recibe 'observer'
    //   observer.next('gluglugluuuuu');
    //   setTimeout(() => {
    //     observer.complete(); // finalizar/completar la suscripción
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('yup');
    //   }, 2500);
    //   setTimeout(() => {
    //     observer.error('yup');
    //   }, 3500);
    // });
  }
}

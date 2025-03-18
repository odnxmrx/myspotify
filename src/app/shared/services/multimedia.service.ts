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

  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject(
    '-00:00'
  );
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');

  constructor() {
    this.audio = new Audio(); // inicializamos 'audio' de la clase 'Audio'
    this.trackInfo$.subscribe((resOk) => {
      if (resOk) {
        this.setAudio(resOk);
      }
    });

    this.listenAllEvents(); // La llamamos en constructor
  }

  // Funcion publica
  public setAudio(track: TrackModel): void {
    // console.log('recibí evento', track);
    this.audio.src = track.url; // asignamos a propiedad 'src' de variable 'audio', la 'url'
    this.audio.play();
  }

  public togglePlayer(): void {
    // ejecutando métodos de HTML Audio
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  // Funciones privadas

  private listenAllEvents(): void {
    // agregamos evento
    this.audio.addEventListener('timeupdate', this.calculateTime); // 2do param es la arrow fn
    this.audio.addEventListener('playing', this.setPlayerStatus);
    this.audio.addEventListener('play', this.setPlayerStatus);
    this.audio.addEventListener('pause', this.setPlayerStatus);
    this.audio.addEventListener('ended', this.setPlayerStatus);
  }

  // El evento escuchador
  private calculateTime = (): void => {
    // console.log('calcula timeeee: ');
    const { duration, currentTime } = this.audio; // destructuring del HTML Audio
    // console.table([duration, currentTime]);
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(duration, currentTime);
  };

  // calcula tiempo transcurrido
  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60); // Obtener segundos sin decimales
    let minutes = Math.floor((currentTime / 60) % 60); // dividimos entre 60, para obener min.

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const displayFullFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFullFormat);
  }

  private setTimeRemaining(currentTime: number, duration: number): void {
    let timeLeft = Math.abs(duration - currentTime);

    let seconds = Math.floor(timeLeft % 60); // Obtener segundos sin decimales
    let minutes = Math.floor((timeLeft / 60) % 60); // dividimos entre 60, para obener min.

    const displaySeconds = seconds < 10 ? `${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `${minutes}` : minutes;

    const displayFullFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFullFormat);
  }

  // Eventos de Pause & Play
  private setPlayerStatus = (state: any): void => {
    // console.log('el estado::::::::::.', state);

    // switch que toma el estado
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }
  };
}

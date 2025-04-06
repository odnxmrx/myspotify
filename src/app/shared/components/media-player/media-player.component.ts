import { AsyncPipe, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // Programación Reactiva

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet, AsyncPipe],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css',
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') myProgressBar: ElementRef = new ElementRef('');

  constructor(public _multimediaService: MultimediaService) {}

  //Observadores array
  listObservers$: Array<Subscription> = [];
  myState: string = 'paused';

  ngOnDestroy(): void {
    this.listObservers$.forEach((subs) => subs.unsubscribe()); //recorder array y quitar suscripcion
  }

  ngOnInit(): void {
    // this._multimediaService.trackInfo$
    const observer1$ = this._multimediaService.playerStatus$.subscribe(
      (status) => (this.myState = status)
    );

    this.listObservers$ = [observer1$]; // de-suscribrir al destruir comp
  }

  // mockCover!: TrackModel;
  handlePosition(event: MouseEvent): void {
    const { clientX } = event;

    // obtenemos cuánto mide y dónde es que inicia la barra:
    const elNative: HTMLElement = this.myProgressBar.nativeElement; // del tag 'myProgressBar'
    const { x, width } = elNative.getBoundingClientRect(); // fn que se encarga de extraer esas propiedades
    // console.log('eje xxxx:clientX ', clientX);
    // console.log('ancho ', width);
    // console.log('el valor x, donde INICIALMENTE inicial la barra: ', x);

    // obtenemos el valor real donde se hace clic, restando:
    const clicReal = clientX - x;
    // console.log('reaaaal: ', clicReal);
    const percentageFromX = (clicReal * 100) / width;
    // console.log('porcentaje real de barra, percentageFromX: ', percentageFromX);
    this._multimediaService.seekAudio(percentageFromX);
  }
}

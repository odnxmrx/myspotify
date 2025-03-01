import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [PlayListBodyComponent, SearchComponent, AsyncPipe],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent {
  // Creamos array de lista de resultados ($ observable) de tipo TrackModel
  listResults$: Observable<any> = of([]);

  // inyectamos servicio en constructor
  constructor(private searchService: SearchService) {}

  // funcion que manejará lo que recibe del hijo
  receiveData(event: string): void {
    // con esto, ya está escuchando en automático
    this.listResults$ = this.searchService.searchTracks$(event);
  }
}

import { Component } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [PlayListBodyComponent, SearchComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent {
  // Creamos array de lista de resultados de tipo TrackModel
  listResults: TrackModel[] = [];

  // inyectamos servicio en constructor
  constructor(private searchService: SearchService) {}

  // funcion que manejará lo que recibe del hijo
  receiveData(event: string): void {
    // console.log('dato obtenido de componente hijo: ', event);
    this.searchService.searchTracks$(event).subscribe((res) => {
      // console.log('suscccccc servvvv la res: ', res);
      this.listResults = res.data;
    });
  }
}

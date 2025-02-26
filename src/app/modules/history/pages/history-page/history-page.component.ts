import { Component } from '@angular/core';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [PlayListBodyComponent, SearchComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent {}

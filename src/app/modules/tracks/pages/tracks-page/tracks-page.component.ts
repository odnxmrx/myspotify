import { Component, OnDestroy, OnInit } from '@angular/core';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';
import { TrackModel } from '@core/models/track.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [GenericSectionComponent], // Remove HttpClientModule here
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksListTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  //Buenas prácticas - Array de observables
  listObservers$: Array<Subscription> = [];

  //inyectamos servicio 'track'
  constructor(private _trackService: TrackService) {}

  ngOnInit(): void {
    this.loadDataRandom();
    this.loadDataAll();
  }

  loadDataAll(): void {
    this._trackService.getAllTracks$().subscribe(
      (resp: TrackModel[]) => {
        this.tracksListTrending = resp;
      },
      (err) => {
        console.log('Conn error.');
      }
    );
  }

  loadDataRandom(): void {
    //subscribing to getallRandom Observable service
    this._trackService.getAllRandom$().subscribe((resp: TrackModel[]) => {
      this.tracksRandom = resp;
    });
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
}

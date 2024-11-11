import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  //read-only var de entorno
  private readonly URI_API = environment.api;

  constructor(private _httpClient: HttpClient) {}

  //método privado, takes Tracks Array and track ID as params.
  private skipById(
    listTracks: TrackModel[],
    id: number
  ): Promise<TrackModel[]> {
    // JS Promise
    return new Promise((resolve, reject) => {
      //'tempList' filtered with given track ID
      const tempList = listTracks.filter((a) => a._id !== id);
      resolve(tempList);
    });
  }

  // '$' indica que es un Observable
  getAllTracks$(): Observable<any> {
    //debo retornar observable
    return this._httpClient.get(`${this.URI_API}/tracks`).pipe(
      //la request retorna obj data { data: [ objtrack1, objtrack2, ...]}
      map(({ data }: any) => {
        //haciendo destructuring
        return data; // retornar solo 'data'
      })
    );
  }

  //Método Observable para random Trancks
  getAllRandom$(): Observable<any> {
    return this._httpClient.get(`${this.URI_API}/tracks`).pipe(
      map(({ data }: any) => {
        return data.reverse(); //array 'data' apply 'reverse'
      })
      // map((reversedData) => {
      //   return reversedData.filter((track: TrackModel) => track._id !== 1);
      // })
    );
  }
}

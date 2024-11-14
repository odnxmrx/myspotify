import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
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
      mergeMap(
        ({ data }: any) => this.skipById(data, 1)
        //return data.reverse(); //array 'data' apply 'reverse'
      ),
      // map((reversedData) => {
      //   return reversedData.filter((track: TrackModel) => track._id !== 1);
      // })
      tap((data) => console.log("'data' desde pipe 'tap': ", data)),
      catchError((err) => {
        console.log('Entró a catch Error', err);
        // const {status, statusText} = err;
        // console.log('Error: ', [status, statusText]);
        return of([]);
      })
    );
  }
}

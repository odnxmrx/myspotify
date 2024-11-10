import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  //read-only var de entorno
  private readonly URI_API = environment.api;

  constructor(private _httpClient: HttpClient) {}

  // '$' indica que es un Observable
  getAllTracks$(): Observable<any> {
    //debo retornar observable
    return this._httpClient.get(`${this.URI_API}/tracks`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly URI = environment.api;

  // funcion para inyectar
  constructor(private http: HttpClient) {}

  // $ - indica que retornara observable
  searchTracks$(term: string): Observable<any> {
    return this.http.get(`${this.URI}/tracks?src=${term}`);
  }
}

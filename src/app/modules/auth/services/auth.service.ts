import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  private readonly API_URI = environment.api;

  //a enviar desde el login
  public sendCretentials(email: string, password: string): Observable<any> {
    //'any' porque no es un array, (yo podría hacerlo una interface, etc.)
    // console.log('Servicioooo clase, ', email, password);

    const bodyForRequest = {
      email, // email: email,
      password, //password: password
    };

    return this._http.post(`${this.API_URI}/auth/login`, bodyForRequest);
    // 1er param -> uri
    // 2do param -> body
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  //a enviar desde el login
  public sendCretentials(email: string, password: string): void {
    console.log('Servicioooo clase, ', email, password);
  }
}

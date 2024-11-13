import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent implements OnInit {
  constructor(private _authService: AuthService) {} //lo agregamos en su constructor

  errorSession: boolean = false; // error login flag
  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      //Obj de nombres a observar
      email: new FormControl(
        '', // 1er param: Estado-> Valor inicializado,
        [Validators.required, Validators.email]
      ), //2do param: Array de validaciones
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(18),
      ]),
    });
  }
  sendLogin(): void {
    const { email, password } = this.formLogin?.value; //toma lo que está en el form (en 'body')
    // console.log('BODYYYYYY => ', body);
    //Enviamso los params al método del service
    this._authService.sendCretentials(email, password).subscribe(
      (responseOk) => {
        //Correct credentials - 200 OK
        console.log('Sesión OK - Correcto');
      },
      (err) => {
        // 400 Error
        this.errorSession = true; // set flag to true
        console.log('Error en credenciales');
      }
    );
  }
}

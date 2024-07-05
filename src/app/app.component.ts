import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myspotify';

  //ejemplo de tipo de dato:
  // miDato: string | boolean = true;

  // car: MyCarModel = {
  // //car: any = {
  //   model: 'Civic',
  //   brand: 'Honda',
  //   year: 2024
  // };

  // listCars: Array<MyCarModel> = [
  //   {
  //     model: 'Focus',
  //     brand: 'Ford',
  //     year: 2021
  //   },
  //   {
  //     model: 'Camaro',
  //     brand: 'Chevrolet',
      
  //   }
  // ]


}


//interface
// interface MyCarModel {
//   model: string;
//   brand: string;
//   year?: number; //? is optional
// }
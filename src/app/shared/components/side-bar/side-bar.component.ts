import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar', //nombre de selector para utilizarlo
  standalone: true,
  imports: [
    NgFor,
    NgClass
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

  //logica del coponente
  //public linksDeMenu: Array<any> = [];
  
  // linksDeMenu: Array<any> = [
  //   {
  //     name: 'Home',
  //     icon: 'uil-estate'
  //   },
  //   {
  //     name: 'Search',
  //     icon: 'uil-estate'
  //   },
  //   {
  //     name: 'My Library',
  //     icon: 'uil-estate'
  //   }
  // ];

  //'mainMenu' -> obj de dos propiedades del tipo array
  mainMenu: 
    { defaultOptions: Array<any>, accessLink: Array<any> } 
  = { defaultOptions: [], accessLink: [] } //TS necesita su inicialización (valor inicial); simplemente vacíos

  customOptions: Array<any> = [];

  ngOnInit(): void {
    
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'history']
      },
      {
        name: 'My Library',
        icon: 'uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'My List º1',
        router: ['/']
      },
      {
        name: 'My List º2',
        router: ['/']
      },
      {
        name: 'My List º3',
        router: ['/']
      },
      {
        name: 'My List º4',
        router: ['/']
      }
    ]


  }

}

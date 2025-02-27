import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar', //nombre de selector para utilizarlo
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router) {}

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
      },
    });
    // console.log('el evento: ', $event);

    // throw new Error('Method not implemented.');
  }

  //logica del coponente

  //'mainMenu' -> obj de dos propiedades del tipo array
  mainMenu: { defaultOptions: Array<any>; accessLink: Array<any> } = {
    defaultOptions: [],
    accessLink: [],
  }; //TS necesita su inicialización (valor inicial); simplemente vacíos

  customOptions: Array<any> = [];

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil-estate',
        router: ['/', 'auth'],
      },
      {
        name: 'Search',
        icon: 'uil-search',
        router: ['/', 'history'], // -> http://localhost:4200/history
        //router: ['/', 'history', 'detail'] sería -> http://localhost:4200/history/detail
        query: {
          key1: 'value1',
          key2: 'value2',
        },
      },
      {
        name: 'My Library',
        icon: 'uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' },
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
        router: ['/', 'favorites'],
      },
    ];

    this.customOptions = [
      {
        name: 'My List º1',
        router: ['/'],
      },
      {
        name: 'My List º2',
        router: ['/'],
      },
      {
        name: 'My List º3',
        router: ['/'],
      },
      {
        name: 'My List º4',
        router: ['/'],
      },
    ];

    //escuchar datarandom - y agregarlo a sidebar
    // this._trackService.dataTracksRandom$.subscribe((response: any) => {
    //   this.customOptions.push({
    //     //Arreglo creado, sin estructra de Tracks
    //     name: response[0].name,
    //     router: [],
    //   });
    // });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent
  ],
  exports: [ //array de declaracion compartidos (exportar)
    SideBarComponent
  ]
})
export class SharedModule { }

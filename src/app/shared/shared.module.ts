import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  exports: [ //array de declaracion compartidos (exportar)
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }

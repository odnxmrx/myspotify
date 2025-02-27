import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule,
    PlayListBodyComponent,
    FormsModule,
  ],
})
export class HistoryModule {}

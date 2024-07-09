import { Component } from '@angular/core';
import { GenericSectionComponent } from '@shared/components/generic-section/generic-section.component';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [
    GenericSectionComponent,
  ],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {

}

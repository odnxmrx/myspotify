import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-section',
  standalone: true,
  imports: [],
  templateUrl: './generic-section.component.html',
  styleUrl: './generic-section.component.css',
})
export class GenericSectionComponent {

  //using Input decorator
  @Input() title: string = '';

}

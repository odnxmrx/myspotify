import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  src: string = 'valor iniciaaaal';

  // utilizamos decorador y creamos el emisor de evento
  @Output() cbData: EventEmitter<any> = new EventEmitter();

  callSearch(searchTerm: string): void {
    // console.log(this.src);
    if (searchTerm.length >= 3) {
      // Ejecutar solo cuando escriba al menos 3 caracteres
      console.log('valooor: ', searchTerm);
      this.cbData.emit(searchTerm); // emitimos evento
    }
  }
}

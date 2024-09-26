import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appBrokenImg]',
  standalone: true,
})
export class BrokenImgDirective {
  @Input() myCustomImgPlaceholder: string = ''; //2da manera con tipo 'placeholder'

  @HostListener('error') handleError(): void {
    const nativeElem = this.miHost.nativeElement; //tomo el nativeElement del obj.
    //console.log('Disparador de evento en host img - Error', this.miHost);
    nativeElem.src = this.myCustomImgPlaceholder; //'../../../assets/images/img-broken-placeholder.png';
  }

  constructor(private miHost: ElementRef) {
    //console.log('que es esta priv var? ', this.miHost);
  }
}

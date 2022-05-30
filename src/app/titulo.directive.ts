import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor(private elemRef: ElementRef) {
    elemRef.nativeElement.fontsize='60px' ;

   }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNavbarcolourDirective]'
})
export class NavbarcolourDirectiveDirective {

  constructor(private _elementRef:ElementRef) { 
    this._elementRef.nativeElement.style.color="blue";
  }


}

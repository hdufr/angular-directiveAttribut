import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector : '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef){
    console.log(this.el);
  }
}

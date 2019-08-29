import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: 'appHighlight'
})
export class HighlightDirective implements OnInit {

  constructor(private elem: ElementRef) {
    console.log("Directive intialized....");
  }

  ngOnInit() {
    this.elem.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener("mouseover")
  mouseover() {
    console.log("mouse over")
  }

  @HostListener("mouseout")
  mouseout() {
    console.log("mouseout.....")
  }

  @HostListener("mousedown")
  click() {
    console.log("clicked.....")
  }
}

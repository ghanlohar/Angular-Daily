import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterhighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() hoverColor = 'blue';
  @HostBinding('style.backgroundColor') bgColor = this.defaultColor;
  constructor(private renederer: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.renederer.setStyle(this.elem.nativeElement, 'backgroundColor', 'blue');
    console.log(this.hoverColor);
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    //this.renederer.setStyle(this.elem.nativeElement, 'backgroundColor', 'blue');
    this.bgColor = this.hoverColor;
  }
  @HostListener('mouseleave') mouseout() {
    //this.renederer.setStyle(this.elem.nativeElement, 'backgroundColor', 'transparent');
    this.bgColor = this.defaultColor;
  }
}

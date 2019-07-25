import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[basicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elem: ElementRef) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.elem.nativeElement.style.backgroundColor = 'red';
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',

})
export class NameeditorComponent implements OnInit {
  name = new FormControl('');
  currentVal = '';
  constructor() { }

  ngOnInit() {
    this.name.valueChanges.subscribe((value) => {console.log(value); this.currentVal = value; } );
  }

  updateName() {
    this.name.setValue('Nancy');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.css']
})
export class NameeditorComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  name = new FormControl('test');
  updateName() {
    this.name.setValue('Nancy');
  }
  getValue() {
    this.name.valueChanges.subscribe((value) => {console.log(value);return value;})}
}

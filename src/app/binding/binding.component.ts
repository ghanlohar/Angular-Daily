import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  username: String = 'ghan';
  constructor() { }

  ngOnInit() {
  }
  resetUsername(event: Event) {
    this.username = '';
  }
  getColor() {
    return this.username === '' ? 'red' : 'Green';
  }
}

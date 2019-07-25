import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assign',
  templateUrl: './directive-assign.component.html',
  styleUrls: ['./directive-assign.component.css']
})
export class DirectiveAssignComponent implements OnInit {
  toggle: Boolean = true;
  logs: Array<Object> = [];
  counter = 1;
  constructor() { }

  ngOnInit() {
  }

  togglePara($event): void {
    const obj = {};
    obj['counter'] = this.counter++;
    obj['ts'] = new Date();
    this.toggle = !this.toggle;
    console.log(this.toggle);
    this.logs.push(obj);
  }
  getBackground(x) {
    return (x.counter > 5) ? 'blue' : 'red';
  }
  trackByFn(index, item) {
    return item.counter;
  }
}

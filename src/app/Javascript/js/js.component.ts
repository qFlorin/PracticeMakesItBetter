// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { ArraysComponent } from '../arrays/arrays.component';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.scss'],
  imports: [ArraysComponent],
})
export class JsComponent implements OnInit {
  constructor() {}
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit() {
    this.tryToCode();
  }

  tryToCode() {
    console.log(this.arr.myFilter((item) => item % 2 === 0));
  }
}

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

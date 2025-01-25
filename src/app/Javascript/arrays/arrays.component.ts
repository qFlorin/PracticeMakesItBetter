// @ts-nocheck
import { Component, inject, OnInit } from '@angular/core';
import { JsService } from './../js/js.service';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css'],
})
export class ArraysComponent implements OnInit {
  arrayMethods = inject(JsService).arrayMethods;
  personArr = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25, hobbies: ['reading', 'traveling'] },
    {
      name: 'Alice Johnson',
      age: 28,
      address: { city: 'New York', zip: '10001' },
    },
    { name: 'Bob Brown', age: 35, children: ['Charlie', 'David'] },
    {
      name: 'Carol White',
      age: 32,
      contact: { email: 'carol@example.com', phone: '123-456-7890' },
    },
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.personArr.myAt(3));
  }
}

Array.prototype.myAt = function (x) {
  return this[x];
};

Array.prototype.myConcat = function (ar1, ar2) {
  return [...ar1, ...ar2];
};

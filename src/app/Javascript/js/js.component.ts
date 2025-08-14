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

  ngOnInit() {}
}

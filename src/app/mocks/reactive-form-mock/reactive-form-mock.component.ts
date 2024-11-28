import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-reactive-form-mock',
    templateUrl: './reactive-form-mock.component.html',
    styleUrls: ['./reactive-form-mock.component.css'],
    imports: [ReactiveFormsModule]
})
export class ReactiveFormMockComponent implements OnInit {
  public form!: any;
  constructor() {}

  ngOnInit() {}
}

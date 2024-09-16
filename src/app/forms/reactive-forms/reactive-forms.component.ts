import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class ReactiveFormsComponent implements OnInit {
  public fb = inject(FormBuilder);
  public form = this.fb.group({
    firstName: [''],
    lastName: [''],
    password: [''],
    city: [''],
    state: [''],
    zipCode: [''],
    gender: ['male'],
    hobby: [''],
  });
  constructor() {}

  ngOnInit() {}

  submit() {
    console.log(111, 'Form', this.form.value);
  }
}

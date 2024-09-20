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

  /*
  - Create basic form
  - Add a validator for min length and required
  - Group city, state, zip into address
  - Add a second address group
  - Delete a second address group
  - Add an array of hobbies
  - Delete hobbies inputs
  - Add an async validator
  - Hide a field based on a select option
  - Add a error to another field if something is not corresponding
  -
  */
}

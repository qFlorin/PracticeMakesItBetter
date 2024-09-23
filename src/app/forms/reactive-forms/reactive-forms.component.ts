import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
})
export class ReactiveFormsComponent implements OnInit {
  public fb = inject(FormBuilder);
  public form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    password: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      zipCode: [''],
    }),
    gender: ['male'],
    hobbies: this.fb.array([new FormControl('')]),
  });
  constructor() {
    /*
      - this.form.status -> Check if form is valid or not
      -
    */
  }

  ngOnInit() {
    this.updateFirstName();
    this.updateAddress();
  }

  submit() {
    console.log(111, 'Form', this.form.value);
  }

  // Set a value
  updateFirstName() {
    this.form.controls.firstName.setValue('Thea');
  }

  // updateForm (With patch you can update only a part of form, with setValue you need to pass all form fields)
  updateAddress() {
    this.form.patchValue({
      firstName: 'Nancy',
      address: {
        city: 'Cluj',
      },
    });
  }
  // Get the array of hobbies
  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  // Add a new entry to hobbies
  addHobbies() {
    this.hobbies.push(new FormControl(''));
  }

  removeHobby(index: number) {
    const hobbiesArray = this.form.get('hobbies') as FormArray;
    hobbiesArray.removeAt(index);
  }

  // Create a new address form group
  // Get the array of addresses
  get addresses(): FormArray {
    return this.form.get('addresses') as unknown as FormArray;
  }

  // Create a new address form group
  createAddressGroup(): FormGroup {
    return this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  // Add a new address form group
  addAddress() {
    this.addresses.push(this.createAddressGroup());
  }

  // Remove an address form group by index
  removeAddress(index: number) {
    this.addresses.removeAt(index);
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

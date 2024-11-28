import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { specificNamesValidator, zipCodeValidatorFn } from './form-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  imports: [ReactiveFormsModule, NgClass],
})
export class ReactiveFormsComponent implements OnInit {
  public fb = inject(NonNullableFormBuilder);
  public form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [specificNamesValidator()]],
    password: [''],
    addresses: this.fb.array([
      this.fb.group({
        city: ['', Validators.required],
        state: ['Texas', Validators.required],
        zipCode: [
          '',
          [Validators.required, Validators.minLength(5), zipCodeValidatorFn()],
        ],
      }),
    ]),
    gender: ['male'],
    hobbies: this.fb.array([new FormControl('')]),
  });

  ngOnInit() {
    this.updateFirstName();
    this.updateAddress();
  }

  submit() {
    console.log(111, 'Form', this.form);
  }

  // Set a value
  updateFirstName() {
    this.form.controls.firstName.setValue('Thea');
  }

  // Update whole array, or update only a simple group without []
  updateAddressGroup() {
    this.form.controls.addresses.setValue([
      {
        city: 'New York',
        state: 'Texas',
        zipCode: '10001',
      },
      {
        city: 'Los Angeles',
        state: 'California',
        zipCode: '90001',
      },
    ]);
  }

  // updateForm (With patch you can update only a part of form, with setValue you need to pass all form fields)
  updateAddress() {
    this.form.patchValue({
      firstName: 'Nancy',
      addresses: [{ city: 'New York', state: 'Texas', zipCode: '10001' }],
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

  // Remove hobby
  removeHobby(index: number) {
    const hobbiesArray = this.form.get('hobbies') as FormArray;
    hobbiesArray.removeAt(index);
  }

  // Get the array of addresses
  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  // Create a new address form group
  createAddressGroup(): FormGroup {
    return this.fb.group({
      city: ['', Validators.required],
      state: ['Texas', Validators.required],
      zipCode: ['', [Validators.required, Validators.minLength(5)]],
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

  // Get the last name error message
  getLastNameErrorMessage(): string {
    const lastNameControl = this.form.get('lastName');
    if (lastNameControl?.hasError('required')) {
      return 'Please provide the name';
    } else if (lastNameControl?.hasError('specificNames')) {
      return 'Enter a different name.';
    }
    return '';
  }

  /*
  - Create basic form ( Done)
  - Add a validator for min length and required ( Done)
  - Group city, state, zip into address group ( Done)
  - Add a second address group ( Done)
  - Delete a second address group ( Done)
  - Add an array of hobbies ( Done)
  - Delete hobbies inputs ( Done)
  - Add an async validator ( Done)
  - Hide a field based on a select option
  - Add a error to another field if something is not corresponding
  - Disable a field based on other field value
  - Disable field by default
  - Make a field readonly by default
  - Edit form values
  */
}

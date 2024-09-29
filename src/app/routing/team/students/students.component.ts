import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
})
export class StudentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Alice Johnson', age: 21, major: 'Physics' },
    { id: 4, name: 'Bob Brown', age: 23, major: 'Chemistry' },
    { id: 5, name: 'Charlie Davis', age: 20, major: 'Biology' },
    { id: 6, name: 'Diana Evans', age: 22, major: 'English' },
    { id: 7, name: 'Frank Green', age: 21, major: 'History' },
    { id: 8, name: 'Grace Harris', age: 23, major: 'Philosophy' },
    { id: 9, name: 'Henry Jackson', age: 20, major: 'Economics' },
    { id: 10, name: 'Ivy King', age: 22, major: 'Political Science' },
  ];
}

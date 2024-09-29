import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  standalone: true,
})
export class TeachersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  teachers = [
    { id: 1, name: 'John Doe', subject: 'Mathematics' },
    { id: 2, name: 'Jane Smith', subject: 'English' },
    { id: 3, name: 'Michael Johnson', subject: 'Science' },
    { id: 4, name: 'Emily Davis', subject: 'History' },
    { id: 5, name: 'William Brown', subject: 'Geography' },
    { id: 6, name: 'Olivia Wilson', subject: 'Physics' },
    { id: 7, name: 'James Taylor', subject: 'Chemistry' },
    { id: 8, name: 'Sophia Martinez', subject: 'Biology' },
    { id: 9, name: 'Benjamin Anderson', subject: 'Physical Education' },
    { id: 10, name: 'Isabella Thomas', subject: 'Art' },
    { id: 11, name: 'Lucas Jackson', subject: 'Music' },
    { id: 12, name: 'Mia White', subject: 'Computer Science' },
    { id: 13, name: 'Alexander Harris', subject: 'Economics' },
    { id: 14, name: 'Charlotte Martin', subject: 'Literature' },
  ];
}

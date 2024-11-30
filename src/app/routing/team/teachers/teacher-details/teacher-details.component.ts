import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss'],
})
export class TeacherDetailsComponent implements OnInit {
  closeDialog = output();
  constructor() {}

  ngOnInit() {}

  close() {
    this.closeDialog.emit();
  }
}

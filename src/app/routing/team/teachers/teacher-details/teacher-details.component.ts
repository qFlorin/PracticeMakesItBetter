import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss'],
})
export class TeacherDetailsComponent implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  teacherId = input('');

  close() {
    const dialog = document.querySelector<HTMLDialogElement>('#teacherDialog');
    dialog?.close();
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
    console.log('Teacher ID:', this.teacherId());
    const dialog = document.querySelector<HTMLDialogElement>('#teacherDialog');
    dialog?.showModal();
  }
}

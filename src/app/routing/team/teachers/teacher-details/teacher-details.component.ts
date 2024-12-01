import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher, TeamService } from '../../../services/team.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingComponent } from '../../../../shared/loading/loading.component';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss'],
  imports: [AsyncPipe, LoadingComponent],
})
export class TeacherDetailsComponent implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  dialog = document.querySelector<HTMLDialogElement>('#teacherDialog');
  teacherId = input('');
  teamService = inject(TeamService);
  teacher: Observable<Teacher | undefined> | null = null;
  close() {
    this.dialog?.close();
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
    this.teacher = this.teamService.getTeacherById(+this.teacherId());
    this.dialog?.showModal();
  }
}

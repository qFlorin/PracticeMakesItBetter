import { Component, inject, input, signal } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { TeamService } from '../../../services/team.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { LoadingComponent } from '../../../../shared/loading/loading.component';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
  imports: [AsyncPipe, LoadingComponent],
})
export class StudentDetailsComponent {
  studentId = input<string>('');
  teamService = inject(TeamService);
  // currentStudent = toObservable(this.studentId).pipe(
  //   switchMap((id) => this.teamService.getStudentById(Number(id)))
  // );

  // Alternative:
  isLoading = signal(false);
  currentStudent = toObservable(this.studentId).pipe(
    switchMap((id) => {
      this.isLoading.set(true);
      return this.teamService
        .getStudentById(Number(id))
        .pipe(tap(() => this.isLoading.set(false)));
    })
  );
}

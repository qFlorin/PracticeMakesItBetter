import { Component, inject, input } from '@angular/core';
import { switchMap } from 'rxjs';
import { TeamService } from '../../../services/team.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { LoadingComponent } from '../../../../shared/loading/loading.component';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
  imports: [AsyncPipe, LoadingComponent, JsonPipe],
})
export class StudentDetailsComponent {
  studentId = input<string>('');
  teamService = inject(TeamService);
  currentStudent = toObservable(this.studentId).pipe(
    switchMap((id) => this.teamService.getStudentById(Number(id)))
  );
}

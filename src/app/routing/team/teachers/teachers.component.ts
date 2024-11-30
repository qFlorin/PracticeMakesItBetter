import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TeamService } from '../../services/team.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterOutlet, AsyncPipe],
})
export class TeachersComponent {
  constructor() {}
  teachers = inject(TeamService).getTeachers();
}

import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterOutlet],
})
export class StudentsComponent implements OnInit {
  students = inject(TeamService).students;
  constructor() {}

  ngOnInit() {}
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    imports: [RouterModule]
})
export class TeamComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {}

  navigateToTeachers() {
    this.router.navigate(['/teachers'], { relativeTo: this.activatedRoute });
  }
  navigateToStudents() {
    this.router.navigate(['/students'], { relativeTo: this.activatedRoute });
  }
}

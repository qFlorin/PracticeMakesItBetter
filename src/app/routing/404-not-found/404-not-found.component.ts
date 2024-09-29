import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-404-not-found',
  templateUrl: './404-not-found.component.html',
  styleUrls: ['./404-not-found.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class NotFoundComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['/home'], { relativeTo: this.activatedRoute }); // Daca punem relative to face append la ruta existenta, doar daca ruta existenta este parinte, altfel nu face nimic
    // this.router.navigateByUrl('/home'); // absolute path always
  }

  navigateToTeam() {
    // this.router.navigate(['team', 'students']);
    this.router.navigateByUrl('/team/students');
  }
}

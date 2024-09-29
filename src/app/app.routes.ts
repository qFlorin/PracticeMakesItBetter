import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { DashboardComponent } from './routing/dashboard/dashboard.component';
import { NotFoundComponent } from './routing/404-not-found/404-not-found.component';
import { TeamComponent } from './routing/team/team.component';
import { StudentsComponent } from './routing/dashboard/students/students.component';
import { TeachersComponent } from './routing/dashboard/teachers/teachers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, redirectTo: '' },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'team',
    component: TeamComponent,
    children: [
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { DashboardComponent } from './routing/dashboard/dashboard.component';
import { NotFoundComponent } from './routing/404-not-found/404-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];

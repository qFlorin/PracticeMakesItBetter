import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { NotFoundComponent } from './routing/404-not-found/404-not-found.component';
import { TeamComponent } from './routing/team/team.component';
import { StudentsComponent } from './routing/team/students/students.component';
import { TeachersComponent } from './routing/team/teachers/teachers.component';
import { OrderDetailsComponent } from './routing/orders/order-details/order-details.component';
import { OrdersComponent } from './routing/orders/orders.component';
import { LoginComponent } from './routing/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'orders',
    children: [
      { path: '', component: OrdersComponent },
      { path: 'order-details/:orderId', component: OrderDetailsComponent },
    ],
  },
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

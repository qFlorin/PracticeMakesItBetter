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

/*
  TODO: Exercices:
  Add activateRoute with relatedTo option to append a route to current route from .ts
  Add a list of products on the left and clicking on one of them load data on the right
  Relative vs absolute paths, differece between ./ and / and ../ and when to use each
  Add a route with a parameter and use it to load data
  Use exact true to match only the exact path
  Use redirectTo to redirect to another route
  Fix route with params doesn't have active class
  Scrolling activate section, add class to active section
  Use fragments to navigate down and open url with fragment in new tab (add transition) - scrollIntoView(smooth)
  - Read the value of fragment, params, queryParams, data, and url and console log it
  - Filter a list of items based on params
  - Open a modal with a route where in modal show the data of the item (How to open modal automatically if I access it via url)
  - How encoding url works %3d and others
*/

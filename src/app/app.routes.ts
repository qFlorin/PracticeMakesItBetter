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
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./routing/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'reactive-form',
    loadComponent: () =>
      import('./forms/reactive-forms/reactive-forms.component').then(
        (c) => c.ReactiveFormsComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./routing/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'orders',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./routing/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
      {
        path: 'order-details/:orderId',
        loadComponent: () =>
          import('./routing/orders/order-details/order-details.component').then(
            (c) => c.OrderDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./routing/team/team.component').then((c) => c.TeamComponent),
    children: [
      { path: '', redirectTo: 'teachers', pathMatch: 'full' }, // Remove this if you want to have team componet instead of student as default
      {
        path: 'students',
        loadComponent: () =>
          import('./routing/team/students/students.component').then(
            (c) => c.StudentsComponent
          ),
      },
      {
        path: 'teachers',
        loadComponent: () =>
          import('./routing/team/teachers/teachers.component').then(
            (c) => c.TeachersComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./routing/404-not-found/404-not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];

/*
  TODO: Exercices:
  Add activateRoute with relatedTo option to append a route to current route from .ts
  Add a list of products on the left and clicking on one of them load data on the right
  Relative vs absolute paths, differece between ./ and / and ../ and when to use each
  Add a route with a parameter and use it to load data
  Use exact true to match only the exact path
  Active route class for teachers/students
  Use redirectTo to redirect to another route
  Fix route with params doesn't have active class
  Scrolling activate section, add class to active section
  Use fragments to navigate down and open url with fragment in new tab (add transition) - scrollIntoView(smooth)
  - Read the value of fragment, params, queryParams, data, and url and console log it
  - Filter a list of items based on params
  - Open a modal with a route where in modal show the data of the item (How to open modal automatically if I access it via url)
  - How encoding url works %3d and others
  - Difference between router resolver and and get data in component
  - Router events, how to use them
  - Take input from the route and use it in modal
*/

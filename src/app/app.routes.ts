import { Routes } from '@angular/router';

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
    path: 'calendar',
    loadComponent: () =>
      import('./routing/calendar/calendar.component').then(
        (c) => c.CalendarComponent
      ),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./routing/team/team.component').then((c) => c.TeamComponent),

    children: [
      { path: '', redirectTo: 'teachers', pathMatch: 'full' },
      {
        path: 'students',
        loadComponent: () =>
          import('./routing/team/students/students.component').then(
            (c) => c.StudentsComponent
          ),
        children: [
          {
            path: ':studentId',
            loadComponent: () =>
              import(
                './routing/team/students/student-details/student-details.component'
              ).then((c) => c.StudentDetailsComponent),
          },
        ],
      },
      {
        path: 'teachers',
        loadComponent: () =>
          import('./routing/team/teachers/teachers.component').then(
            (c) => c.TeachersComponent
          ),
        children: [
          {
            path: ':teacherId',
            loadComponent: () =>
              import(
                './routing/team/teachers/teacher-details/teacher-details.component'
              ).then((c) => c.TeacherDetailsComponent),
          },
        ],
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
  FRAGMENTS:
  - Scrolling activate section, add class to active section
  - Use fragments to navigate down and open url with fragment in new tab (add transition) - scrollIntoView(smooth)
  - Read the value of fragment, params, queryParams, data, and url and console log it
  - Do something if query param, data, fragment is changing

  ORDERS:
  - Filter a list of items based on params
  - How encoding url works %3d and others
  - Fix route with params doesn't have active class

  EXTRA:
  - Difference between router resolver and and get data in component, Load data from resolver
  - Router events, how to use them
  - Use multiple outlets
  - Skip location change example
  - Add a dropdown menu with routes for big sections
  - Open modal at redirects

  Learn:
 - Exact true to match only the exact path
*/

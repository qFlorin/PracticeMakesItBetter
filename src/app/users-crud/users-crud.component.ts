import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss'],
  imports: [AsyncPipe],
})
export class UsersCrudComponent implements OnInit {
  usersService = inject(UsersService);
  users = this.usersService.getUsers();
  constructor() {}

  ngOnInit() {}

  addUser() {
    this.usersService
      .addUser({
        id: Math.random().toString(36).substr(2, 9),
        name: 'David Williams',
        email: 'david.williams@example.com',
        role: 'user',
        status: 'active',
        title: 'Mr.',
        image: `https://picsum.photos/200?random=${Math.random()}`,
      })
      .subscribe(() => {
        this.users = this.usersService.getUsers();
      });
  }
}

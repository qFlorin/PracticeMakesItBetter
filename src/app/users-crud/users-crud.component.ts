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

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}

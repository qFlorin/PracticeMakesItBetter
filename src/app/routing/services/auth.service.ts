import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged = false;
  userService = inject(UserService);
  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.userService.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      this.isLogged = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLogged = false;
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }
}

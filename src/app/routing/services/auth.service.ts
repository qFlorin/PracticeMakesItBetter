import { inject, Injectable, signal } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged = signal(false);
  userService = inject(UserService);
  constructor() {}

  login(
    username: string,
    password: string
  ): { id: number; username: string; password: string } | undefined {
    const user = this.userService.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      this.isLogged.set(true);
    } else {
      this.isLogged.set(false);
    }
    return user;
  }
}

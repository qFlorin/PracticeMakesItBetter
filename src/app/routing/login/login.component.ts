import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  public loginForm = new FormGroup({
    username: new FormControl('user1'),
    password: new FormControl('pass1'),
  });
  constructor() {}

  ngOnInit() {}

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (username && password) {
      const user = this.authService.login(username, password);
      if (user !== undefined) {
        alert(user?.username + ' is logged in');
        this.router.navigate(['/orders']);
      } else {
        console.error('Username or password is missing');
        alert('Username or password is missing');
      }
    }
  }
}

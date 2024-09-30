import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
    username: new FormControl('user1'),
    password: new FormControl('pass1'),
  });
  constructor() {}

  ngOnInit() {}
}

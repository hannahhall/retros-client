import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: {
    username: string;
    password: string;
  } = {
    username: '',
    password: ''
  };
  constructor(private authService: AuthService, private router: Router) { }

  login() {
    debugger;
    this.authService.login(this.user)
    this.router.navigate([''])
  }
}

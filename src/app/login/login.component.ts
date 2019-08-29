import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit() { }
  handleLogin() {
    console.log('handle login is called ');
    this.loginService.login(this.username, this.password);
    console.log('Login Done..');
    this.router.navigate(['']);
  }
}


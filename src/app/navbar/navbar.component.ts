import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedin = false;
  constructor(private loginService: LoginService, private router: Router) {
    this.loggedin = this.loginService.isLoggedIn();
  }
  ngOnInit() {
    this.loginService.getLoginSubscriber().subscribe((result) => {
      this.loggedin = true;
    });
  }
  handleLogout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
    this.loggedin = false;
  }
}










import { Injectable } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Subject } from 'rxjs';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private subject: Subject = new Subject();

  constructor() { }
  isLoggedIn() {
    let loggedin = false;
    if (sessionStorage.getItem('ACTIVE')) {
      loggedin = true;
    }
    return loggedin;
  }
  getLoginSubscriber() {
    return this.subject.asObservable();
  }
  login(username: string, password: string): boolean {
    console.log('Login ........');
    sessionStorage.setItem('ACTIVE', 'LOGGEDIN');
    this.subject.next('LOGGEDIN');
    return true;
  }
  logout() {
    console.log('User Logged out .......');
    sessionStorage.clear();
  }
}

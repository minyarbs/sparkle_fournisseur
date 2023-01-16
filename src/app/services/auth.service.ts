import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  text: string;
  error: string = '';
  constructor(
    public route: Router,
    private http: HttpClient
  ) { }
  login(username: string, password: string) {
    const result = this.http.post('http://localhost:3000/suppliers-accounts/Login', { "username": username, "password": password }).subscribe((res) => {
      localStorage.setItem('role', res['role'])
      localStorage.setItem('loggedIn','true')
      this.route.navigate(['home'])
    },
      (err) => {
        this.error = err.message;
      })

  }
  logout() {
    localStorage.removeItem('loggedIn')
    this.route.navigate(['login'])
  }
  get isloggedin(): boolean {
    let val = localStorage.getItem('loggedIn')
    if (val === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

  getQuote() {
    return this.http.get('http://localhost:3000/quotes', { responseType: 'text' })
  }

}

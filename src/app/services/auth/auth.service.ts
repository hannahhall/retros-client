import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: { headers: HttpHeaders; };
  errors: any[] = [];

  get token() {
    return localStorage.getItem('token') || "";
  }

  set token(value: string) {
    localStorage.setItem('token', value);
  }

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  login(user: any) {
    this.http.post(`${environment.api}/api/login`, JSON.stringify(user), this.httpOptions).subscribe(
      (data: any) => {
        this.updateData(data.token);
        this.errors = [];
      },
      err => {
        this.errors.push(err)
      }
    );
  }

  updateData(token: string) {
    this.token = token;
  }
}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface RegisterBodyObject {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface LoginBodyObject {
  email: string;
  password: string;
}

export interface ChangePasswordBodyObject {
  password: string;
  new_password: string;
  confirm_password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, @Inject('API_URL') private api_url) {}

  register(body: RegisterBodyObject) {
    return this.http.post(`${this.api_url}/api/v2/public/auth/register`, body);
  }

  login(body: LoginBodyObject) {
    return this.http.post(`${this.api_url}/api/v2/public/auth/login`, body).pipe(
      catchError(({error}) => {
        if (typeof error === 'string')  {
          return throwError([{type: 'failure', content: error}]);
        } else {
          return throwError([{type: 'failure', content: error.msg}]);
        }
      })
    );
  }

  updateProfile(body: object) {
    return this.http.put(`${this.api_url}/api/v2/public/auth/profile`, body)
  }

  changePassword(body: ChangePasswordBodyObject) {
    return this.http.put(`${this.api_url}//api/v2/public/auth/profile`, body);
  }

  getProfile() {
    return this.http.get(`${this.api_url}/api/v2/public/auth/profile`)
  }
}

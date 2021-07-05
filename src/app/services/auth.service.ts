import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseMessage } from '../models/response.model';

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
    return this.http
      .post(`${this.api_url}/api/v2/public/auth/register`, body)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const messages: ResponseMessage[] = error.error.message.map(
            (msg) => ({
              type: 'failure',
              content: msg.msg,
            })
          );
          return throwError(messages);
        })
      );
  }

  login(body: LoginBodyObject) {
    return this.http
      .post(`${this.api_url}/api/v2/public/auth/login`, body)
      .pipe(
        catchError((errorRes: HttpErrorResponse) => {
          console.log(errorRes.error);
          if (errorRes.error.msg) {
            // error: {msg: string}
            return throwError([
              { type: 'failure', content: errorRes.error.msg },
            ]);
          }
          if (typeof errorRes.error === 'string') {
            // error: string
            return throwError([{ type: 'failure', content: errorRes.error }]);
          }
          // error: [{msg: string}]
          const errorList = errorRes.error.message.map((err: any) => ({
            type: 'failure',
            content: err.msg,
          }));
          return throwError(errorList);
        })
      );
  }

  adminLogin(body: LoginBodyObject) {
    return this.http.post(`${this.api_url}/api/v1/admin/login`, body).pipe(
      catchError((errorRes: HttpErrorResponse) => {
        if (typeof errorRes.error === 'string') {
          // error: string
          return throwError([{ type: 'failure', content: errorRes.error }]);
        } else {
          return throwError([{type: 'failure', content:'Something bad happend. Please try again later'}]);
        }
      })
    )
  }

  updateProfile(body: object) {
    return this.http.put(`${this.api_url}/api/v2/public/auth/profile`, body);
  }

  changePassword(body: ChangePasswordBodyObject) {
    return this.http.put(`${this.api_url}//api/v2/public/auth/profile`, body);
  }

  getProfile() {
    return this.http
      .get(`${this.api_url}/api/v2/public/auth/profile`)
      .pipe(catchError((error: HttpErrorResponse) => {
        const errorMessage = error.error;
        return throwError(errorMessage);
      }));
  }
}

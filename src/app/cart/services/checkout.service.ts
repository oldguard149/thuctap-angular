import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseMessage } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient, @Inject('API_URL') private api_url) {}

  checkout(body: any) {
    return this.http
      .post(`${this.api_url}/api/v2/public/order/checkout-stripe`, body)
      .pipe(catchError((errorRes: HttpErrorResponse) => {
        const error = this.getErrorMessageFor403Error(errorRes);
        return throwError(error);
      }));
  }

  getErrorMessageFor403Error(errorRes: HttpErrorResponse) {
    if (errorRes.status === 403 || errorRes.status === 401) {
      return [{type: 'failure', content: 'You need to login first'} as ResponseMessage];
    }
  }
}

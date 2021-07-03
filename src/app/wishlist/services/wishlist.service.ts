import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsResponse } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient, @Inject('API_URL') private api_url) {}

  get(page: number, limit: number) {
    const options = {
      params: new HttpParams().set('page', page).set('limit', limit),
    };
    return this.http.get<ProductsResponse>(
      `${this.api_url}/api/v2/favorite`,
      options
    );
  }

  add(id: string) {
    return this.http
      .post<{ message: string }>(`${this.api_url}/api/v2/favorite/${id}`, {})
      .pipe(
        catchError((errorRes: HttpErrorResponse) => {
          if (errorRes.status === 401 || errorRes.status === 403) {
            return of({ isUnAuthError: true, message: '' });
          } else {
            return of({ isUnAuthError: false, message: errorRes.error.message });
          }
        })
      );
  }

  delete(id: string) {
    return this.http
      .delete<{ message: string }>(`${this.api_url}/api/v2/favorite/${id}`)
      .pipe(
        catchError((errorRes: HttpErrorResponse) => {
          return this.handleError(errorRes);
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    if (errorRes.status === 401 || errorRes.status === 403) {
      return of({ authError: true, message: '' });
    } else {
      return of({ authError: false, message: errorRes.error.message });
    }
  }
}

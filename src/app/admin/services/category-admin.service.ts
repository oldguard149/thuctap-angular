import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CategoriesResponse, ResponseMessage } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryAdminService {
  constructor(private http: HttpClient, @Inject('API_URL') private api_url) {}

  getAll() {
    return this.http.get<CategoriesResponse>(
      `${this.api_url}/api/v1/categories/list`
    );
  }

  create(body: CategoryBody) {
    return this.http.post(`${this.api_url}/api/v1/categories/create`, body).pipe(
      catchError((errorRes: HttpErrorResponse) => {
        return throwError(convertErrorToResponseMessage(errorRes));
      })
    );
  }

  update(categoryId: string, body: CategoryBody) {
    return this.http.put(
      `${this.api_url}/api/v1/categories/update/${categoryId}`,
      body
    ).pipe(
      catchError((errorRes: HttpErrorResponse) => {
        return throwError(convertErrorToResponseMessage(errorRes));
      })
    );;
  }

  delete(categoryId: string) {
    return this.http.delete(`${this.api_url}/api/v1/categories/${categoryId}`);
  }

  active(categoryId: string) {
    return this.http.put(
      `${this.api_url}/api/v1/categories/${categoryId}/active`,
      {}
    );
  }

  deactive(categoryId: string) {
    return this.http.put(
      `${this.api_url}/api/v1/categories/${categoryId}/dective`,
      {}
    );
  }
}

export interface CategoryBody {
  name: string;
  is_active: boolean;
}


// only use when errorRes.message has shape similar with the following type 
// {
//   location: "body"
//   msg: "Category name is existing": 
//   param: "name"
//   value: "TV"
// }[]
export function convertErrorToResponseMessage(errorRes: any): ResponseMessage[] {
  return errorRes.error.message.map(err => ({type: 'failure', content: err.msg} as ResponseMessage));
}

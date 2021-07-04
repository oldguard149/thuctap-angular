import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsResponse } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductAdminService {
  constructor(private http: HttpClient, @Inject('API_URL') private api_url) {}

  getAll(page: number = 1, limit: number = 10) {
    const options = {
      params: new HttpParams().set('page', page).set('limit', limit),
    };
    return this.http.get<ProductsResponse>(`${this.api_url}/api/v1/products/list`, options);
  }

  create(body: ProductBody) {
    return this.http.post(`${this.api_url}/api/v1/products/create`, body).pipe(
      catchError((errorRes: HttpErrorResponse) => {
        const errorList = errorRes.error.message.map((err: any) => ({
          type: 'failure',
          content: err.msg,
        }));
        return throwError(errorList);
      })
    );
  }

  update(productId: string, body: ProductBody) {
    return this.http.put(`${this.api_url}/api/v1/products/update/${productId}`, body).pipe(
      catchError((errorRes: HttpErrorResponse) => {
        const errorList = errorRes.error.message.map((err: any) => ({
          type: 'failure',
          content: err.msg,
        }));
        return throwError(errorList);
      })
    );;
  }

  delete(productId: string) {
    return this.http.delete(`${this.api_url}/api/v1/products/${productId}`);
  }

  addImageUrls(productId: string, body: ImageUrlsBody) {
    return this.http.post(`${this.api_url}/api/v1/products/${productId}/images`, body);
  }

  addVideoUrls(productId: string, body: VideoUrlsBody) {
    return this.http.post(`${this.api_url}/api/v1/products/${productId}/videos`, body);
  }

  deleteImageUrls(productId: string, body: ImageUrlsBody) {
    return this.http.request(
      'delete',
      `${this.api_url}/api/v1/products/${productId}/images`,
      { body: body }
    );
  }

  deleteVideoUrls(productId: string, body: VideoUrlsBody) {
    return this.http.request(
      'delete',
      `${this.api_url}/api/v1/products/${productId}/videos`,
      { body: body }
    );
  }

  active(productId: string) {
    return this.http.put(`${this.api_url}/api/v1/products/${productId}/active`, {});
  }

  deactive(productId: string) {
    return this.http.put(`${this.api_url}/api/v1/products/${productId}/deactive`, {});
  }
}

export interface ImageUrlsBody {
  images: string[];
}

export interface VideoUrlsBody {
  videos: string[];
}

export interface ProductBody {
  title: string;
  desciption: string;
  sku: string;
  images: string[];
  videos: string[];
  category: string[];
  status: 'selling';
  price: number;
  quantity: number;
  is_active: true;
  specifications: { a: '1' };
  promotion: null;
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProductsResponse } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private api_url
  ) { }

  getProductDetails(productId: string) {
    return this.http.get(`${this.api_url}/api/v1/products/details/${productId}`);
  }

  getProducts(page: number = 1, limit: number = 10) {
    const options = {
      params: new HttpParams()
        .set('page', page)
        .set('limit', limit)
    }
    return this.http.get<ProductsResponse>(`${this.api_url}/api/v1/products/list`, options);
  }

  searchProduct(key: string, page: number = 1, limit: number = 10) {
    const options = {
      params: new HttpParams()
        .set('search', key)
        .set('page', page)
        .set('limit', limit)
    }

    return this.http.get(`${this.api_url}/api/v1/products/list`, options)
  }
}

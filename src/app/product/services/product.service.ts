import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { CategoriesResponse, ProductsResponse } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private api_url
  ) { }

  fetchProductDetails(productId: string) {
    return this.http.get(`${this.api_url}/api/v1/products/details/${productId}`)
      .pipe(map((product: Product) => ({...product, id: product._id})));
  }

  fetchProducts(page: number = 1, limit: number = 10) {
    const options = {
      params: new HttpParams()
        .set('page', page)
        .set('limit', limit)
    }
    return this.http.get<ProductsResponse>(`${this.api_url}/api/v1/products/list`, options);
  }

  fetchCategories() {
    return this.http.get<CategoriesResponse>(`${this.api_url}/api/v1/categories/list`)
  }

  searchProduct(key: string, page: number = 1, limit: number = 10) {
    const options = {
      params: new HttpParams()
        .set('search', key)
        .set('page', page)
        .set('limit', limit)
    }
    return this.http.get<ProductsResponse>(`${this.api_url}/api/v1/products/list`, options)
  }


  fetchNewProducts() {
    return this.fetchProducts(1, 10);
  }

  fetchTodayDealProducts() {
    return this.fetchProducts(1, 3);
  }

  fetchBestSellerProducts() {
    return this.fetchProducts(1, 3);
  }

  fetchNewArrivalProducts() {
    return this.fetchProducts(1, 3);
  }

  fetchFeatureProducts() {
    return this.fetchProducts(1, 7);
  }
}

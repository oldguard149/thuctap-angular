import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProductsResponse } from 'src/app/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient, @Inject('API_URL') private api_url) {}

  get(page: number, limit: number) {
    const options = {
      params: new HttpParams()
        .set('page', page)
        .set('limit', limit)
    }
    return this.http.get<ProductsResponse>(`${this.api_url}/api/v2/favorite`, options);
  }

  add(id: string) {
    return this.http.post<{message: string}>(`${this.api_url}/api/v2/favorite/${id}`, {});
  }

  delete(id: string) {
    return this.http.delete<{message: string}>(`${this.api_url}/api/v2/favorite/${id}`);
  }
}

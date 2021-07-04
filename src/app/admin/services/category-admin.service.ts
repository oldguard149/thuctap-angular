import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CategoriesResponse } from 'src/app/models/response.model';

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
    return this.http.post(`${this.api_url}/api/v1/categories/create`, body);
  }

  update(categoryId: string, body: CategoryBody) {
    return this.http.put(
      `${this.api_url}/api/v1/categories/update/${categoryId}`,
      body
    );
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

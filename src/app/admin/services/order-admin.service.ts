import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Order, OrderResponse } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderAdminService {

  constructor(private http: HttpClient, @Inject('API_URL') private api_url) {}

  getAll(page: number, limit: number) {
    const options = {
      params: new HttpParams().set('page', page).set('limit', limit),
    };
    return this.http.get<OrderResponse>(`${this.api_url}/api/v1/orders/list`, options);
  }

  getDetails(orderId: string) {
    return this.http.get<Order>(`${this.api_url}/api/v1/orders/details/${orderId}`)

  }

  checkStatus(orderId: string, body: CheckStatusOrderBody) {
    return this.http.post(`${this.api_url}/api/v1/orders/check-status/${orderId}`, body)

  }
}

export interface CheckStatusOrderBody {
  status: 'PENDING' | 'CANCEL' | 'SUCCESS'
}
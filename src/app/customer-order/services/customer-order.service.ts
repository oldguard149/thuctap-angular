import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  getAll() {
    return this.http.get<Order[]>(`${this.api_url}/api/v2/public/customer/order`)
  }

  getDetails(orderId: string) {
    return this.http.get<Order>(`${this.api_url}/api/v2/public/customer/order/${orderId}`);
  }
  constructor(private http: HttpClient, @Inject('API_URL') private api_url) { }
}

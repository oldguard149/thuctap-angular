import { Response } from "./response.model";

interface OrderProduct {
  _id: string;
  images: string[];
  title: string;
  current_price: number;
  qty: number;
  amount: number;
}

interface Buyer {
  _id: string;
  orders: [];
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  __v: number;
}

interface User {
  _id: string;
  products: string[];
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  role: number;
  __v: number;
}
export interface Order {
  products: OrderProduct[];
  _id: string;
  buyer: string | Buyer;
  user: string | User;
  status: string;
  total_amount: number;
  description: string;
  charge_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface OrderResponse extends Response {
  docs: Order[];
}

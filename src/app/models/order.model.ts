interface OrderProduct {
    _id: string;
    images: string[];
    title: string;
    current_price: number;
    qty: number;
    amount: number;
};
export interface Order {
  products: OrderProduct[];
  _id: string;
  buyer: string;
  user: string;
  status: string;
  total_amount: number;
  description: string;
  charge_id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
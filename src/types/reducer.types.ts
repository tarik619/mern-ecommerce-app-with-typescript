import { CartItem, ShippingInfo, User } from "./types";

export interface UserReducerIntialState {
  user: User | null;
  loading: boolean;
}
export interface CartReducerIntialState {
  cartItems: CartItem[];
  loading: boolean;
  subtotal: number;
  total: number;
  tax: number;
  discount: number;
  shippingCharges: number;
  shippingInfo: ShippingInfo;
}

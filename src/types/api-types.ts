import { Product, User } from "./types";

export type CustomError = {
  status: number;
  data: {
    message: string;
    success: boolean;
  };
};

export type MessageResponse = {
  success: boolean;
  message: string;
};
export type UserResponse = {
  success: boolean;
  user: User;
};

export type AllProductResponse = {
  success: boolean;
  products: Product[];
};
export type CategoriesResponse = {
  success: boolean;
  categories: string[];
};

export type SearchProductResponse = {
  success: boolean;
  products: Product[];
  totalPage: number;
};
export type SearchProductRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};
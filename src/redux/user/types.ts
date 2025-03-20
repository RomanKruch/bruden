import { ICartProduct, IProduct } from '../../types/Types';

export interface ISign {
  name: string;
  email: string;
  token: string;
  cart: ICartProduct[];
  liked: IProduct[];
}

export interface IUserInfoSing {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  name: string;
  email: string;
  token: string;
  cart: ICartProduct[];
  liked: IProduct[];
}
export interface IUserInfo {
  email: string;
  password: string;
}

export interface IRefresh {
  name: string;
  email: string;
  token: string;
  cart: ICartProduct[];
  liked: IProduct[];
}

export type TOnAddProduct = [string, number?];

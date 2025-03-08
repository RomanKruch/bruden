import { ICartProduct, IProduct } from '../../types/Types';

export interface ISign {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface IUserInfoSing {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  user: {
    name: string;
    email: string;
  };
  token: string;
  cart: ICartProduct[];
  liked: IProduct[];
}
export interface IUserInfo {
  email: string;
  password: string;
}

export interface IRefresh {
  userInfo: {
    name: string;
    email: string;
  };
  token: string;
  cart: ICartProduct[];
  liked: IProduct[];
}

export type TOnAddProduct = [string, number?];
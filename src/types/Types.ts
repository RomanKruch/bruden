export type TPriceFilterValue = number[];

export type TListView = 'grid' | 'list';

export type TSelectValues = 'def' | 'priceUp' | 'priceDown' | 'rating';

export interface ITag {
  img: string;
  imgId: string;
  name: string;
  _id: string;
  active: boolean;
}

export interface IProduct {
  _id: string;
  img: {
    small: {
      ref: string;
      id: string;
    };
    large: {
      ref: string;
      id: string;
    };
  };
  title: string;
  price: number;
  tag: ITag;
  description: string;
  totalQty: number;
}

export type ICartProduct = IProduct & { qty: number };

export interface IUserState {
  userInfo: {
    name: null | string;
    email: null | string;
  };
  token: null | string;
  isLoading: boolean;
  isRefreshing: boolean;
  isLogged: boolean;
  cart: ICartProduct[];
  liked: IProduct[];
}

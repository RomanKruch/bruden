import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IState } from '../store';
import { ICartProduct, IProduct } from '../../types/Types';
import {
  ISign,
  IUserInfoSing,
  ILogin,
  IUserInfo,
  IRefresh,
  TOnAddProduct,
} from './types';
import { addNotification } from '../notifications/notificationsSlice';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const onSignUp = createAsyncThunk<
  ISign,
  IUserInfoSing,
  { rejectValue: null }
>('user/signUp', async (userInfo, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post('/auth/register', userInfo);
    token.set(data.token);
    dispatch(
      addNotification({ message: 'Sign up successful!', type: 'success' }),
    );
    return data;
  } catch (err: any) {
    const { message } = err?.response.data;
    dispatch(addNotification({ message, type: 'error' }));
    return rejectWithValue(null);
  }
});

export const onLogin = createAsyncThunk<
  ILogin,
  IUserInfo,
  { rejectValue: null }
>('user/login', async (userInfo, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post('/auth/login', userInfo);
    token.set(data.token);
    dispatch(
      addNotification({ message: 'Log in successful!', type: 'success' }),
    );
    return {
      ...data,
      cart: data.cart.map((item: IProduct) => ({ ...item, qty: 1 })),
    };
  } catch (err: any) {
    const { message } = err?.response.data;
    dispatch(addNotification({ message, type: 'error' }));
    return rejectWithValue(null);
  }
});

export const onLogout = createAsyncThunk<void, void, { rejectValue: null }>(
  'user/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('/auth/logout');
      token.unSet();
      dispatch(
        addNotification({ message: 'Logout successful!', type: 'success' }),
      );
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
      return rejectWithValue(null);
    }
  },
);

export const onRefresh = createAsyncThunk<
  IRefresh,
  void,
  { state: IState; rejectValue: null }
>('user/refresh', async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const persistToken = state.user.token;

  if (persistToken === null) {
    return rejectWithValue(null);
  }

  try {
    token.set(persistToken);
    const { data } = await axios.get('/auth/refresh');
    return {
      ...data,
      cart: data.cart.map((item: IProduct) => ({ ...item, qty: 1 })),
    };
  } catch {
    return rejectWithValue(null);
  }
});

export const onAddProduct = createAsyncThunk<
  ICartProduct,
  TOnAddProduct,
  { rejectValue: null }
>(
  'cart/addProduct',
  async ([productId, qty = 1], { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/cart', { productId });
      return {
        ...data.data.newProduct,
        id: data.data.newProduct._id,
        qty,
      };
    } catch (err: any) {
      const { message } = err?.response.data;
      dispatch(addNotification({ message, type: 'error' }));
      return rejectWithValue(null);
    }
  },
);

export const onDeleteProduct = createAsyncThunk<
  string,
  string,
  { rejectValue: null }
>('cart/deleteProduct', async (productId, { rejectWithValue, dispatch }) => {
  try {
    await axios.delete(`/cart/${productId}`);
    return productId;
  } catch (err: any) {
    const { message } = err?.response.data;
    dispatch(addNotification({ message, type: 'error' }));
    return rejectWithValue(null);
  }
});

export const onLikeProduct = createAsyncThunk<
  IProduct | string,
  string,
  { rejectValue: null }
>('user/likeProduct', async (productId, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post(`/users/like/${productId}`);
    if (data.id) {
      return data.id;
    }
    return data;
  } catch (err: any) {
    const { message } = err?.response.data;
    dispatch(addNotification({ message, type: 'error' }));
    return rejectWithValue(null);
  }
});

export const onUserCart = createAsyncThunk<
  ICartProduct | string,
  TOnAddProduct,
  { rejectValue: null }
>('user/cart', async ([productId, qty = 1], { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post(`/users/cart/${productId}`);
    if (data.id) {
      return data.id;
    }
    return { ...data, qty };
  } catch (err: any) {
    const { message } = err?.response.data;
    dispatch(addNotification({ message, type: 'error' }));
    return rejectWithValue(null);
  }
});

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  onSignUp,
  onLogin,
  onLogout,
  onRefresh,
  onLikeProduct,
  onUserCart
} from './userOperations';
import { IUserState } from '../../types/Types';

const initialState: IUserState = {
  userInfo: {
    name: null,
    email: null,
  },
  token: null,
  isLoading: false,
  isRefreshing: false,
  isLogged: false,
  cart: [],
  liked: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onChangeQty(
      state,
      { payload }: PayloadAction<{ id: string; value: number }>,
    ) {
      state.cart = state.cart.map(item =>
        item._id === payload.id ? { ...item, qty: payload.value } : item,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(onSignUp.pending, state => ({
        ...state,
        isLoading: true,
      }))

      .addCase(onSignUp.fulfilled, (_, { payload }) => ({
        ...initialState,
        userInfo: {
          name: payload.name,
          email: payload.email,
        },
        token: payload.token,
        isLogged: true,
      }))

      .addCase(onSignUp.rejected, state => ({
        ...state,
        isLoading: false,
      }))

      .addCase(onLogin.pending, state => ({
        ...state,
        isLoading: true,
      }))

      .addCase(onLogin.fulfilled, (_, { payload }) => ({
        ...initialState,
        userInfo: {
          name: payload.name,
          email: payload.email,
        },
        token: payload.token,
        isLogged: true,
        cart: payload.cart,
        liked: payload.liked,
      }))

      .addCase(onLogin.rejected, state => ({
        ...state,
        isLoading: false,
      }))

      .addCase(onLogout.fulfilled, () => ({
        ...initialState,
      }))

      .addCase(onRefresh.pending, state => ({
        ...state,
        isRefreshing: true,
      }))

      .addCase(onRefresh.fulfilled, (_, { payload }) => ({
        ...initialState,
        userInfo: {
          name: payload.name,
          email: payload.email,
        },
        token: payload.token,
        cart: payload.cart,
        liked: payload.liked,
        isLogged: true,
        isRefreshing: false,
      }))

      .addCase(onRefresh.rejected, state => ({
        ...state,
        isRefreshing: false,
      }))

      .addCase(onLikeProduct.fulfilled, (state, { payload }) => {
        if (typeof payload === 'string') {
          return {
            ...state,
            liked: state.liked.filter(item => item._id !== payload),
          };
        }

        return {
          ...state,
          liked: [...state.liked, payload],
        };
      })

      .addCase(onUserCart.fulfilled, (state, { payload }) => {
        if (typeof payload === 'string') {
          return {
            ...state,
            cart: state.cart.filter(item => item._id !== payload),
          };
        }

        return {
          ...state,
          cart: [...state.cart, payload],
        };
      })
  },
});

export const { onChangeQty } = userSlice.actions;

export default userSlice.reducer;

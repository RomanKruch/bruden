import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
})

export type IState = ReturnType<typeof store.getState>

export default store;
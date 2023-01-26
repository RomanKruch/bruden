import { createReducer } from "@reduxjs/toolkit";
import { onAddProduct, onDeleteProduct, onChangeQty } from "./cartActions";
import { IProduct } from "../../pages/ShopPage/sections/Shop/types";

const initialState: IState = {
    items: []
}

interface IState {
    items: (IProduct & {qty: number})[]
}


const cartReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(onAddProduct, (state, {payload}) => {
        state.items = [...state.items, {...payload, qty: 1}];
      })
      .addCase(onDeleteProduct, (state, {payload}) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(onChangeQty, (state, {payload}) => {
        state.items = state.items.map(item => item.id === payload.id ? {...item, qty: payload.value}: item);
      })
})

export default cartReducer;
import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "../../pages/ShopPage/sections/Shop/types";

export const onAddProduct = createAction<{product:IProduct, qty: number}, 'cart_addProduct'>('cart_addProduct');

export const onDeleteProduct = createAction<IProduct, 'cart_deleteProduct'>('cart_deleteProduct');

export const onChangeQty = createAction<{id: string, value: number}, 'cart_changeQty'>('cart_changeQty');
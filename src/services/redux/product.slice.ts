import { createSlice } from "@reduxjs/toolkit";

type ProductItem = {
  id: number;
  name: string;
}

type ProductState = {
  products: ProductItem[],
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [ ...state.products, ...action.payload ];
    },
  },
});

export const {
  setProducts,
} = productSlice.actions;
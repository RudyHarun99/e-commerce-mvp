import { createSlice } from "@reduxjs/toolkit";

type ProductItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

type ProductState = {
  products: ProductItem[],
  productDetail: ProductItem,
}

const initialState: ProductState = {
  products: [],
  productDetail: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    }
  }
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
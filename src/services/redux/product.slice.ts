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
  isFetching: boolean,
  error: null | string,
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
  },
  isFetching: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [ ...state.products, ...action.payload ];
    },
    setDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setDetail,
  setIsFetching,
  setError,
} = productSlice.actions;
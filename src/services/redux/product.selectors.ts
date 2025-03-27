import { RootState } from ".";

export const productSelector = (state: RootState) => state.product;
export const productDetailSelector = (state: RootState) => state.product.productDetail;
export const isFetchingSelector = (state: RootState) => state.product.isFetching;
export const errorSelector = (state: RootState) => state.product.error;

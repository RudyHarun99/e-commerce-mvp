import { RootState } from ".";

const productSelector = (state: RootState) => state.product.products;
const productDetailSelector = (state: RootState) => state.product.productDetail;
const categoriesSelector = (state: RootState) => state.product.categories;
const isFetchingSelector = (state: RootState) => state.product.isFetching;
const errorSelector = (state: RootState) => state.product.error;

export {
  productSelector,
  productDetailSelector,
  categoriesSelector,
  isFetchingSelector,
  errorSelector,
}
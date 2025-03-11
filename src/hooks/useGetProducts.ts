import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/services/redux/product.slice";
import { useQuery } from "@tanstack/react-query";
import { getProducts, ProductsQueryKey } from "@/api/getProducts";
import { Product } from "@/models/product";
import { ZodError } from "zod";

type UseGetProductsReturn = {
  results: Product[];
  isFetching: boolean;
  error: Error | null;
  queryKey: ProductsQueryKey;
};

export const useGetProducts = (): UseGetProductsReturn => {
  const dispatch = useDispatch();
  const queryKey: ProductsQueryKey = [ 'products' ];

  const { data, error, isFetching } = useQuery({
    queryKey,
    queryFn: getProducts,
    retry: (failureCount, error) => {
      if (error instanceof ZodError) {
        console.error('Schema validation error:', error.errors);
        return false;
      }

      return failureCount <= 3;
    },
  });

  const results = data ?? [];

  useEffect(() => {
    dispatch(setProducts(results));
  }, [data]);

  return {
    results,
    isFetching,
    error,
    queryKey,
  };
};
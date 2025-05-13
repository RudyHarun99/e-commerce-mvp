import { useEffect } from "react";
import { useAppDispatch } from "@/services/redux";
import {
  setProducts,
  setIsFetching,
  setError,
  setCategories,
} from "@/services/redux/product.slice";
import { useQuery } from "@tanstack/react-query";
import { getProducts, ProductsQueryKey } from "@/api/getProducts";
import { ZodError } from "zod";

export const useGetProducts = () => {
  const dispatch = useAppDispatch();
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
  const categories = [...new Set(results.map(el => el.category))];

  useEffect(() => {
    dispatch(setProducts(results));
    dispatch(setIsFetching(isFetching));
    dispatch(setError(error?.message ?? null));
    dispatch(setCategories(categories));
  }, [data]);
};
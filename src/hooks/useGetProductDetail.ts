import { useEffect } from "react";
import { useAppDispatch } from "@/services/redux";
import { useParams } from "react-router-dom";
import {
  setDetail,
  setIsFetching,
  setError
} from "@/services/redux/product.slice";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail, ProductDetailQueryKey } from "@/api/getProductDetail";
import { ZodError } from "zod";

export const useGetProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const queryKey: ProductDetailQueryKey = [ 'products', id ?? '' ];

  const { data, error, isFetching } = useQuery({
    queryKey,
    queryFn: getProductDetail,
    retry: (failureCount, error) => {
      if (error instanceof ZodError) {
        console.error('Schema validation error:', error.errors);
        return false;
      }

      return failureCount <= 3;
    },
  });

  const result = data ?? {};

  useEffect(() => {
    dispatch(setDetail(result));
    dispatch(setIsFetching(isFetching));
    dispatch(setError(error?.message ?? null));
  }, [data]);
};
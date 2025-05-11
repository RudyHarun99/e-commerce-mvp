import { QueryFunction } from "@tanstack/react-query";
import { customAxios } from ".";
import { z } from "zod";
import { productSchema } from "@/models/product";

export type ProductDetailQueryKey = string[];
export type ProductResponse = z.infer<typeof productSchema>;

export const getProductDetail: QueryFunction<
  ProductResponse, ProductDetailQueryKey
> = async ({
  queryKey,
}) => {
  const [ path, id ] = queryKey;
  const apiPath = `/${path}/${Number(id)}`;
  const response = await customAxios.get<ProductResponse>(apiPath);

  return productSchema.parse(response.data);
};
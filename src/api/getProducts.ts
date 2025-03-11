import { QueryFunction } from "@tanstack/react-query";
import { customAxios } from ".";
import { z } from "zod";
import { productSchema } from "@/models/product";

export type ProductsQueryKey = [
  string,
];

export const productResponseSchema = z.array(productSchema);

export type ProductResponse = z.infer<typeof productResponseSchema>;

export const getProducts: QueryFunction<ProductResponse, ProductsQueryKey> = async ({
  queryKey,
}) => {
  const [ path ] = queryKey;
  const apiPath = `/${path}`;
  const response = await customAxios.get<ProductResponse>(apiPath);

  return productResponseSchema.parse(response.data);
};
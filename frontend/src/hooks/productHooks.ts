import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { Product } from '../types/Product'

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  })

export const useGetProductDetailsBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ['products', slug],
    queryFn: async () =>
      (await apiClient.get<Product>(`api/products/slug/${slug}`)).data,
  })

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () =>
      (await apiClient.get<[]>(`/api/products/categories`)).data,
  })

  export const useGetProductCategoryQuery = (category: string | null) =>
    useQuery({
      queryKey: ['products', category],
      queryFn: async () => {
        const { data } = await apiClient.get<Product[]>(`/api/products/category?category=${category}`);
        return data;
      },
    });

    export const useGetProductNameQuery = (name: string | null) =>
      useQuery({
        queryKey: ['name', name],
        queryFn: async () => {
          const { data } = await apiClient.get<Product[]>(`/api/products/search?query=${name}`);
          return data;
        },
      });
  

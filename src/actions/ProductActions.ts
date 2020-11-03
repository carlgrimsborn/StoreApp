import {Product} from '../types';

export const setProduct = (products: Product[]) => {
  return {
    type: 'SET_PRODUCTS',
    products: products,
  };
};

export const cleanProducts = () => {
  return {
    type: 'CLEAN_PRODUCTS',
  };
};

import {Product} from '../Types';

export const setProducts = (products: Product[]) => {
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

import Axios from 'axios';
import axios from 'axios';
import {Product} from '../types';

export const getProducts = () => {
  axios
    .get('http://localhost:2000/products')
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const postProduct = (product: Product) => {
  axios
    .post('http://localhost:2000/product', product)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const editProduct = (product: Product) => {
  axios
    .put('http://localhost:2000/product', product)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const deleteProduct = (id: string) => {
  axios
    .delete('http://localhost:2000/product', {
      params: {
        id: id,
      },
    })
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

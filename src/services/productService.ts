import axios from 'axios';
import {Product} from '../Types';

export const getProducts = async () => {
  let data;
  await axios
    .get('http://localhost:2000/products')
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const postProduct = async (product: Product) => {
  let data;
  await axios
    .post('http://localhost:2000/product', JSON.stringify({product: product}), {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const editProduct = async (product: Product) => {
  let data;
  await axios
    .put('http://localhost:2000/product', JSON.stringify({product: product}), {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const deleteProduct = async (id: string) => {
  let data;
  await axios
    .delete('http://localhost:2000/product', {
      params: {
        id: id,
      },
    })
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

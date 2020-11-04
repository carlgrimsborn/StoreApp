import {Warehouse} from '../Types';

export const setWarehouses = (warehouses: Warehouse[]) => {
  return {
    type: 'SET_WAREHOUSES',
    warehouses: warehouses,
  };
};

export const cleanWarehouses = () => {
  return {
    type: 'CLEAN_WAREHOUSES',
  };
};

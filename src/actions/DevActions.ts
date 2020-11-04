import {Dev} from '../Types';

export const setDev = (dev: Dev) => {
  return {
    type: 'SET_DEV',
    dev: dev,
  };
};

export const cleanProducts = () => {
  return {
    type: 'CLEAN_DEV',
  };
};

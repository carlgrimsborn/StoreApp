import {Dev} from '../Types';

export const setDev = (dev: Dev) => {
  return {
    type: 'SET_DEV',
    dev: dev,
  };
};

export const cleanDev = () => {
  return {
    type: 'CLEAN_DEV',
  };
};

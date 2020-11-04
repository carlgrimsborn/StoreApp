import {User} from '../Types';

export const setUser = (user: User) => {
  return {
    type: 'SET_USER',
    user: user,
  };
};

export const cleanUser = () => {
  return {
    type: 'CLEAN_USER',
  };
};

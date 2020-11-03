import {User} from '../types';

export const setUsers = (users: User[]) => {
  return {
    type: 'SET_USER',
    users: users,
  };
};

export const cleanUsers = () => {
  return {
    type: 'CLEAN_USERS',
  };
};

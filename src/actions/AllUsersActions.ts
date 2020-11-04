import {User} from '../Types';

export const setUsers = (users: User[]) => {
  return {
    type: 'SET_USERS',
    users: users,
  };
};

export const cleanUsers = () => {
  return {
    type: 'CLEAN_USERS',
  };
};

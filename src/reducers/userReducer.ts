import {User} from '../types';

const initUser: User = {
  userId: 0,
  surname: '',
  lastname: '',
  email: '',
  password: '',
  items: [],
};

const UserReducer = (user: User = initUser, action: any) => {
  if (action.type === 'SET_USER') {
    const newUser = action.user;
    return {
      ...user,
      ...newUser,
    };
  }
  if (action.type === 'CLEAN_USER') {
    return {
      ...user,
      initUser,
    };
  }

  return user;
};

export default UserReducer;

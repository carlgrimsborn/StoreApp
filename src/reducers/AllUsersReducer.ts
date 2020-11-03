import {User} from '../types';

const initUsers: User[] = [
  {
    id: 0,
    surname: '',
    lastname: '',
    email: '',
    password: '',
    items: [],
  },
];

const AllUsersReducer = (users: User[] = initUsers, action: any) => {
  if (action.type === 'SET_USERS') {
    const newUsers = action.users;
    return {
      ...users,
      ...newUsers,
    };
  }
  if (action.type === 'CLEAN_USERS') {
    return {
      ...users,
      initUsers,
    };
  }

  return users;
};

export default AllUsersReducer;

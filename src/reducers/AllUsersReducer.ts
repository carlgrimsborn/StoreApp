import {User} from '../Types';

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
    return [...newUsers];
  }
  if (action.type === 'CLEAN_USERS') {
    return [...initUsers];
  }

  return users;
};

export default AllUsersReducer;

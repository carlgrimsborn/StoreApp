import {Dev, User} from '../Types';

const initDev: Dev = {
  name: '',
  email: '',
  password: '',
};

const DevReducer = (dev: Dev = initDev, action: any) => {
  if (action.type === 'SET_DEV') {
    const newDev = action.dev;
    return {
      ...dev,
      ...newDev,
    };
  }
  if (action.type === 'CLEAN_DEV') {
    return {
      ...dev,
      ...initDev,
    };
  }
  return dev;
};

export default DevReducer;

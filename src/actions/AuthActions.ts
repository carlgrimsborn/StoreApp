import {Authentication} from '../Types';

export const setAuth = (auth: Authentication) => {
  return {
    type: 'SET_AUTH',
    authenticated: auth.authenticated,
    authType: auth.authType,
  };
};

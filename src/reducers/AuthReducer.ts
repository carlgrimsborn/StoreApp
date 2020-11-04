import {Authentication, AuthType} from '../Types';

const initAuth: Authentication = {
  authenticated: false,
  authType: AuthType.USER,
};

const AuthReducer = (auth: Authentication = initAuth, action: any) => {
  if (action.type === 'SET_AUTH') {
    const newAuth: Authentication = {
      authenticated: action.authenticated,
      authType: action.authType,
    };
    return {
      ...initAuth,
      ...newAuth,
    };
  }
  return auth;
};

export default AuthReducer;

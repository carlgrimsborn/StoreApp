import {ReduxState, User} from '../../types';

export default interface LoginType {
  setUser: (user: User) => void;
  state: ReduxState;
}

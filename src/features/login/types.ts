import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStack} from '../../navigationTypes';
import {ReduxState, User} from '../../Types';

export default interface LoginType {
  setUser: (user: User) => void;
  state: ReduxState;
  navigation: StackNavigationProp<LoginStack, 'LoginScreen'>;
}

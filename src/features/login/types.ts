import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStack} from '../../navigation/NavigationTypes';
import {Dev, ReduxState, User} from '../../Types';

export default interface LoginScreenProps {
  setUser: (user: User) => void;
  setDev: (dev: Dev) => void;
  setAuth: (authenticated: boolean) => void;
  state: ReduxState;
  navigation: StackNavigationProp<LoginStack, 'LoginScreen'>;
}

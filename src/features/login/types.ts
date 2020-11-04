import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStack} from '../../navigation/NavigationTypes';
import {Authentication, Dev, ReduxState, User} from '../../Types';

export default interface LoginScreenProps {
  setUser: (user: User) => void;
  setDev: (dev: Dev) => void;
  setAuth: (auth: Authentication) => void;
  state: ReduxState;
  navigation: StackNavigationProp<LoginStack, 'LoginScreen'>;
}

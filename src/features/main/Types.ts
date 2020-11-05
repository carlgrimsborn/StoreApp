import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainStack} from '../../navigation/NavigationTypes';
import {Authentication, ReduxState, User} from '../../types';

export interface ProductScreenProps {
  navigation: BottomTabNavigationProp<MainStack, 'ProductScreen'>;
  state: ReduxState;
  setUser: (user: User) => void;
}
export interface UserScreenProps {
  navigation: BottomTabNavigationProp<MainStack, 'UserScreen'>;
  state: ReduxState;
  cleanUser: () => void;
  setAuth: (auth: Authentication) => void;
}

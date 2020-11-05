import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainStack} from '../../navigation/NavigationTypes';
import {Authentication, ReduxState} from '../../types';

export interface ProductScreenProps {
  navigation: BottomTabNavigationProp<MainStack, 'ProductScreen'>;
  state: ReduxState;
}
export interface UserScreenProps {
  navigation: BottomTabNavigationProp<MainStack, 'UserScreen'>;
  state: ReduxState;
  cleanUser: () => void;
  setAuth: (auth: Authentication) => void;
}

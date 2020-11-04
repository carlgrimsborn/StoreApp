import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DashboardStack, MainStack} from '../../navigation/NavigationTypes';
import {ReduxState} from '../../types';

export interface ProductScreenProps {
  navigation: BottomTabNavigationProp<MainStack, 'ProductScreen'>;
  state: ReduxState;
}
export interface UserScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'UserScreen'>;
  state: ReduxState;
  cleanUser: () => void;
}

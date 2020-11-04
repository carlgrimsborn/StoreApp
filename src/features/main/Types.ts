import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DashboardStack, MainStack} from '../../navigationTypes';

export interface ProductScreenProps {
  navigation: BottomTabNavigationProp<MainStack, 'ProductScreen'>;
}
export interface UserScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'UserScreen'>;
}

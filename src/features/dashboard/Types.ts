import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DashboardStack} from '../../navigationTypes';

export interface AppUsersScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'AppUsersScreen'>;
}
export interface ProductScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'ProductScreen'>;
}

export interface UserScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'UserScreen'>;
}
export interface WarehouseScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'WarehouseScreen'>;
}

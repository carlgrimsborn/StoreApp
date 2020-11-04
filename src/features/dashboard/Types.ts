import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DashboardStack} from '../../navigationTypes';
import {User, ReduxState, Product} from '../../types';

export interface AppUsersScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'AppUsersScreen'>;
  setUser: (user: User) => void;
  state: ReduxState;
}
export interface ProductScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'ProductScreen'>;

  setProducts: (products: Product[]) => void;
  state: ReduxState;
}

export interface UserScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'UserScreen'>;
  state: ReduxState;
  cleanUsers: () => void;
  cleanDev: () => void;
  cleanProducts: () => void;
}
export interface WarehouseScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'WarehouseScreen'>;
  state: ReduxState;
}

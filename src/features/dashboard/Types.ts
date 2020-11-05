import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DashboardStack} from '../../navigation/NavigationTypes';
import {User, ReduxState, Product, Authentication} from '../../Types';

export interface AppUsersScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'AppUsersScreen'>;
  setUser: (user: User) => void;
  state: ReduxState;
}
export interface AppProductsScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'AppProductsScreen'>;

  setProducts: (products: Product[]) => void;
  state: ReduxState;
}

export interface DevScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'DevScreen'>;
  state: ReduxState;
  cleanUsers: () => void;
  cleanDev: () => void;
  cleanProducts: () => void;
  cleanWarehouses: () => void;
  setAuth: (auth: Authentication) => void;
}
export interface WarehouseScreenProps {
  navigation: BottomTabNavigationProp<DashboardStack, 'WarehouseScreen'>;
  state: ReduxState;
}

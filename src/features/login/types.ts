import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStack} from '../../navigation/NavigationTypes';
import {
  Authentication,
  Dev,
  Product,
  ReduxState,
  User,
  Warehouse,
} from '../../Types';

export interface LoginScreenProps {
  setUser: (user: User) => void;
  setDev: (dev: Dev) => void;
  setAuth: (auth: Authentication) => void;
  setUsers: (users: User[]) => void;
  setProducts: (products: Product[]) => void;
  setWarehouses: (warehouse: Warehouse) => void;
  state: ReduxState;
  navigation: StackNavigationProp<LoginStack, 'Login'>;
}

export interface RegisterScreenProps {
  setAuth: (auth: Authentication) => void;
  setUser: (user: User) => void;
  state: ReduxState;
  navigation: StackNavigationProp<LoginStack, 'Register'>;
}

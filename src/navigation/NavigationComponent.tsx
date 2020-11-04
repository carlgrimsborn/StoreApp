import React from 'react';
import AppProductsScreen from '../features/dashboard/screens/AppProductsScreen';
import AppUsersScreen from '../features/dashboard/screens/AppUsersScreen';
import DevScreen from '../features/dashboard/screens/DevScreen';
import WarehouseScreen from '../features/dashboard/screens/WarehouseScreen';
import UserScreen from '../features/main/screens/UserScreen';
import ProductScreen from '../features/main/screens/productScreen/ProductScreen';
import LoginScreen from '../features/login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {AuthType, ReduxState} from '../Types';

const NavigationComponent: React.FC<{state: ReduxState}> = (props) => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const DashboardStack = () => (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={AppProductsScreen} />
      <Tab.Screen name="Users" component={AppUsersScreen} />
      <Tab.Screen name="Warehouses" component={WarehouseScreen} />
      <Tab.Screen name="Me" component={DevScreen} />
    </Tab.Navigator>
  );
  const MainStack = () => (
    <Tab.Navigator>
      <Tab.Screen name="My items" component={ProductScreen} />
      <Tab.Screen name="Me" component={UserScreen} />
    </Tab.Navigator>
  );
  const LoginStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={LoginScreen} />
    </Stack.Navigator>
  );
  console.log('QQQ', props);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!props.state.AuthReducer.authenticated ? (
          <Stack.Screen name="Login" component={LoginStack} />
        ) : props.state.AuthReducer.authenticated &&
          props.state.AuthReducer.authType === AuthType.USER ? (
          <Stack.Screen name="Profile" component={MainStack} />
        ) : props.state.AuthReducer.authenticated &&
          props.state.AuthReducer.authType === AuthType.DEV ? (
          <Stack.Screen name="Dashboard" component={DashboardStack} />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(NavigationComponent);

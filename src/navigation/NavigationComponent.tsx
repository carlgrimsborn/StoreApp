import React from 'react';
import AppProductsScreen from '../features/dashboard/screens/appProductsScreen/AppProductsScreen';
import AppUsersScreen from '../features/dashboard/screens/appUsersScreen/AppUsersScreen';
import DevScreen from '../features/dashboard/screens/devScreen/DevScreen';
import WarehouseScreen from '../features/dashboard/screens/warehouseScreen/WarehouseScreen';
import UserScreen from '../features/main/screens/userScreen/UserScreen';
import ProductScreen from '../features/main/screens/productScreen/ProductScreen';
import LoginScreen from '../features/login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {AuthType, ReduxState} from '../Types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faBook,
  faUsers,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

const NavigationComponent: React.FC<{state: ReduxState}> = (props) => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const DashboardStack = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Products') {
            return (
              <FontAwesomeIcon icon={faBook} color="grey"></FontAwesomeIcon>
            );
          }
          if (route.name === 'Users') {
            return (
              <FontAwesomeIcon icon={faUsers} color="grey"></FontAwesomeIcon>
            );
          }
          if (route.name === 'Warehouses') {
            return (
              <FontAwesomeIcon
                icon={faWarehouse}
                color="grey"></FontAwesomeIcon>
            );
          }
          if (route.name === 'Me') {
            return (
              <FontAwesomeIcon icon={faUser} color="grey"></FontAwesomeIcon>
            );
          }
        },
      })}>
      <Tab.Screen name="Products" component={AppProductsScreen} />
      <Tab.Screen name="Users" component={AppUsersScreen} />
      <Tab.Screen name="Warehouses" component={WarehouseScreen} />
      <Tab.Screen name="Me" component={DevScreen} />
    </Tab.Navigator>
  );
  const MainStack = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'My items') {
            return (
              <FontAwesomeIcon icon={faBook} color="grey"></FontAwesomeIcon>
            );
          }
          if (route.name === 'Me') {
            return (
              <FontAwesomeIcon icon={faUser} color="grey"></FontAwesomeIcon>
            );
          }
        },
      })}>
      <Tab.Screen name="My items" component={ProductScreen} />
      <Tab.Screen name="Me" component={UserScreen} />
    </Tab.Navigator>
  );
  const LoginStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={LoginScreen} />
    </Stack.Navigator>
  );
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

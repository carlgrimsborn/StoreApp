/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import ProductReducer from './src/reducers/ProductReducer';
import UserReducer from './src/reducers/UserReducer';
import DevReducer from './src/reducers/DevReducer';
import AllUsersReducer from './src/reducers/AllUsersReducer';
import WarehouseReducer from './src/reducers/WarehouseReducer';
import LoginScreen from './src/features/login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppProductsScreen from './src/features/dashboard/screens/AppProductsScreen';
import AppUsersScreen from './src/features/dashboard/screens/AppUsersScreen';
import DevScreen from './src/features/dashboard/screens/DevScreen';
import WarehouseScreen from './src/features/dashboard/screens/WarehouseScreen';
import UserScreen from './src/features/main/screens/UserScreen';
import ProductScreen from './src/features/main/screens/ProductScreen';

const store = createStore(
  combineReducers({
    UserReducer,
    ProductReducer,
    DevReducer,
    AllUsersReducer,
    WarehouseReducer,
  }),
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const Dashboard = () => (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={AppProductsScreen} />
      <Tab.Screen name="Users" component={AppUsersScreen} />
      <Tab.Screen name="Warehouses" component={WarehouseScreen} />
      <Tab.Screen name="Me" component={DevScreen} />
    </Tab.Navigator>
  );
  const Main = () => (
    <Tab.Navigator>
      <Tab.Screen name="My items" component={ProductScreen} />
      <Tab.Screen name="Me" component={UserScreen} />
    </Tab.Navigator>
  );
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

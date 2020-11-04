/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import ProductReducer from './src/reducers/ProductReducer';
import UserReducer from './src/reducers/UserReducer';
import DevReducer from './src/reducers/DevReducer';
import AllUsersReducer from './src/reducers/AllUsersReducer';
import WarehouseReducer from './src/reducers/WarehouseReducer';
import AuthReducer from './src/reducers/AuthReducer';
import NavigationComponent from './src/navigation/NavigationComponent';

const store = createStore(
  combineReducers({
    UserReducer,
    ProductReducer,
    DevReducer,
    AllUsersReducer,
    WarehouseReducer,
    AuthReducer,
  }),
);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationComponent />
    </Provider>
  );
};

export default App;

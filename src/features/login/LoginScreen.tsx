import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUser} from '../../actions/UserActions';
import {setDev} from '../../actions/DevActions';
import {setAuth} from '../../actions/AuthActions';
import {setWarehouses} from '../../actions/WarehouseActions';
import {setUsers} from '../../actions/AllUsersActions';
import {setProducts} from '../../actions/ProductActions';
import {AuthType, Product, ReduxState, User} from '../../Types';
import {getProducts} from '../../services/ProductService';
import {getWarehouses} from '../../services/WarehouseService';
import {LoginScreenProps} from './types';
import {login, loginDev, getUsers} from '../../services/UserService';

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [email, setEmail] = useState('King.Clifford@gmail.com'); //123@123.com
  const [password, setPassword] = useState('12345');
  const [loading, setLoading] = useState(false);

  const doLoginUser = async () => {
    setLoading(true);
    const resp = await login(email, password);
    if (resp) {
      props.setUser(resp);
      setLoading(false);
      props.setAuth({authenticated: true, authType: AuthType.USER});
    } else {
      setLoading(false);
      alert('Error logging in');
    }
  };

  const doLoginDev = async () => {
    setLoading(true);
    const resp = await loginDev(email, password);
    const respProd = await getProducts();
    const respUsers = await getUsers();
    const respWarehouses = await getWarehouses();
    if (resp && respProd && respUsers && respWarehouses) {
      props.setDev(resp);
      props.setProducts(respProd);
      props.setUsers(respUsers);
      props.setWarehouses(respWarehouses);
      props.setAuth({authenticated: true, authType: AuthType.DEV});
    } else {
      setLoading(false);
      alert('Error logging in');
    }
  };

  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Input
          placeholder="email"
          value={email}
          onChangeText={(e) => setEmail(e)}></Input>
        <Input
          placeholder="password"
          value={password}
          onChangeText={(e) => setPassword(e)}></Input>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 10}}>
        <Button
          style={{margin: 3}}
          title="Login"
          onPress={async () => {
            await doLoginUser();
          }}></Button>
        <Button
          style={{margin: 3}}
          title="Login Dev"
          buttonStyle={{backgroundColor: 'orange'}}
          onPress={async () => {
            await doLoginDev();
          }}></Button>
        <Button
          style={{margin: 3}}
          title="Register"
          buttonStyle={{backgroundColor: 'red'}}
          onPress={() => props.navigation.navigate('Register')}></Button>
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{
            position: 'absolute',
            top: '50%',
            right: '50%',
            flex: 1,
          }}></ActivityIndicator>
      ) : null}
    </View>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {setUser, setDev, setAuth, setUsers, setProducts, setWarehouses},
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

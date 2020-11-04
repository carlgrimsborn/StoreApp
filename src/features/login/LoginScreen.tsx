import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginScreenProps from './Types';
import {setUser} from '../../actions/UserActions';
import {setDev} from '../../actions/DevActions';
import {setAuth} from '../../actions/AuthActions';
import {login, loginDev} from '../../services/UserService';
import {AuthType, ReduxState} from '../../Types';

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [email, setEmail] = useState('King.Clifford@gmail.com');
  const [password, setPassword] = useState('12345');
  const [loading, setLoading] = useState(false);
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
            setLoading(true);
            const resp = await login(email, password);
            if (resp) {
              setLoading(false);
              props.setUser(resp);
              props.setAuth({authenticated: true, authType: AuthType.USER});
            } else {
              setLoading(false);
              alert('Error logging in');
            }
          }}></Button>
        <Button
          style={{margin: 3}}
          title="Login Dev"
          buttonStyle={{backgroundColor: 'orange'}}
          onPress={async () => {
            setLoading(true);
            const resp = await loginDev(email, password);
            if (resp) {
              setLoading(false);
              props.setDev(resp);
              props.setAuth({authenticated: true, authType: AuthType.DEV});
            } else {
              setLoading(false);
              alert('Error logging in');
            }
          }}></Button>
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
  return bindActionCreators({setUser, setDev, setAuth}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

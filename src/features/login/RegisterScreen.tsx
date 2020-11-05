import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AuthType, ReduxState, User} from '../../Types';
import {setUser} from '../../actions/UserActions';
import {setAuth} from '../../actions/AuthActions';
import {Input, Button} from 'react-native-elements';
import {register} from '../../services/UserService';
import {RegisterScreenProps} from './Types';

const RegisterScreen: React.FC<RegisterScreenProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [loading, setLoading] = useState(false);

  const doRegister = async () => {
    const resp = await register({
      email: email,
      surname: firstname,
      lastname: lastname,
      password: password,
      items: [],
      id: Math.random() * 1000,
    });
    if (resp) {
      console.log('RESP', resp);
      props.setUser(resp);
      setLoading(false);
      props.setAuth({authenticated: true, authType: AuthType.USER});
    } else {
      setLoading(false);
      alert('Error with register');
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
        <Input
          placeholder="firstname"
          value={firstname}
          onChangeText={(e) => setFirstname(e)}></Input>
        <Input
          placeholder="lastname"
          value={lastname}
          onChangeText={(e) => setLastname(e)}></Input>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 10}}>
        <Button
          style={{margin: 3}}
          title="Register"
          onPress={async () => {
            await doRegister();
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
  return bindActionCreators({setUser, setAuth}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

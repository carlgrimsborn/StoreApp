import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginType from './types';
import {setUser} from '../../actions/UserActions';
import {login} from '../../services/UserService';
import {ReduxState, User} from '../../types';

const Login: React.FC<LoginType> = (props) => {
  return (
    <View>
      <Text>{props.state.UserReducer.id}</Text>
      <Button
        title="btn"
        onPress={async () => {
          const l = await login('King.Clifford@gmail.com', '12345');
          if (l) {
            console.log('QQ', l);
            props.setUser(l);
            console.log('LL', props.state.UserReducer.id);
          }
        }}></Button>
    </View>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({setUser}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

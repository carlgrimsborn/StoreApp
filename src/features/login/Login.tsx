import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {User} from '../../types';
import {setUser} from '../../actions/UserActions';

const Login: React.FC = (props) => {
  console.log('QQ', props);

  return (
    <View>
      <Text>{props.state.UserReducer.userId}</Text>
      <Button
        title="btn"
        onPress={() =>
          props.setUser({
            userId: 1,
            surname: '',
            lastname: '',
            email: '',
            password: '',
            items: [],
          })
        }></Button>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({setUser}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UserScreenProps} from '../../Types';
import {cleanUser} from '../../../../actions/UserActions';
import {setAuth} from '../../../../actions/AuthActions';
import {Text, Button} from 'react-native-elements';
import {AuthType, ReduxState} from '../../../../Types';

const UserScreen: React.FC<UserScreenProps> = (props) => {
  const doLogout = () => {
    props.cleanUser();
    props.setAuth({authType: AuthType.USER, authenticated: false});
  };
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text h4={true} style={{marginBottom: 10}}>
          {props.state.UserReducer.surname} {props.state.UserReducer.lastname}
        </Text>
        <Text h4={true}>{props.state.UserReducer.email}</Text>
      </View>
      <Button
        onPress={() => doLogout()}
        title="Logout"
        style={{margin: 3}}
        buttonStyle={{backgroundColor: 'red'}}></Button>
    </View>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({cleanUser, setAuth}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

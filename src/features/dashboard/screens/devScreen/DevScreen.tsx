import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {DevScreenProps} from '../../Types';
import {cleanProducts} from '../../../../actions/ProductActions';
import {cleanDev} from '../../../../actions/DevActions';
import {setAuth} from '../../../../actions/AuthActions';
import {cleanWarehouses} from '../../../../actions/WarehouseActions';
import {cleanUsers} from '../../../../actions/AllUsersActions';
import {Text, Button} from 'react-native-elements';
import {AuthType, ReduxState} from '../../../../Types';
export const DevScreen: React.FC<DevScreenProps> = (props) => {
  const doLogout = () => {
    props.cleanUsers();
    props.cleanProducts();
    props.cleanWarehouses();
    props.cleanDev();
    props.setAuth({authType: AuthType.DEV, authenticated: false});
  };
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text h4={true} style={{marginBottom: 10}}>
          {props.state.DevReducer.name}
        </Text>
        <Text h4={true}>{props.state.DevReducer.email}</Text>
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
  return bindActionCreators(
    {cleanUsers, cleanDev, cleanProducts, setAuth, cleanWarehouses},
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DevScreen);

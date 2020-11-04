import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../types';
import {UserScreenProps} from '../Types';
import {cleanUser} from '../../../actions/UserActions';

const UserScreen: React.FC<UserScreenProps> = () => {
  return <View></View>;
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({cleanUser}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

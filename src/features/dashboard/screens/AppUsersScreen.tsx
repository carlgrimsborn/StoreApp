import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../types';
import {AppUsersScreenProps} from '../Types';
import {setUsers} from '../../../actions/AllUsersActions';
export const AppUsersScreen: React.FC<AppUsersScreenProps> = () => {
  return <View></View>;
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({setUsers}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppUsersScreen);

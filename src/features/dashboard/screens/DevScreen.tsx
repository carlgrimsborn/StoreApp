import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../types';
import {DevScreenProps} from '../Types';
import {cleanProducts} from '../../../actions/ProductActions';
import {cleanDev} from '../../../actions/DevActions';
import {cleanUsers} from '../../../actions/AllUsersActions';
export const DevScreen: React.FC<DevScreenProps> = () => {
  return <View></View>;
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({cleanUsers, cleanDev, cleanProducts}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DevScreen);
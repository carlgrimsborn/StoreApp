import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {ReduxState} from '../../../types';
import {WarehouseScreenProps} from '../Types';

const WarehouseScreen: React.FC<WarehouseScreenProps> = () => {
  return <View></View>;
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(WarehouseScreen);

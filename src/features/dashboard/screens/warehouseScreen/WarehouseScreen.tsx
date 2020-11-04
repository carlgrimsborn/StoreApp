import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import WarehouseCards from '../../../../components/WarehouseCards';
import {ReduxState} from '../../../../types';
import {WarehouseScreenProps} from '../../Types';

const WarehouseScreen: React.FC<WarehouseScreenProps> = (props) => {
  return (
    <View>
      <WarehouseCards
        warehouses={props.state.WarehouseReducer}></WarehouseCards>
    </View>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(WarehouseScreen);

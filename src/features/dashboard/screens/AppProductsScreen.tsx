import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../types';
import {AppProductsScreenProps} from '../Types';
import {setProducts} from '../../../actions/ProductActions';

const AppProductsScreen: React.FC<AppProductsScreenProps> = () => {
  return <View></View>;
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({setProducts}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppProductsScreen);

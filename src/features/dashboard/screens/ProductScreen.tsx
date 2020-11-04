import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../types';
import {ProductScreenProps} from '../Types';
import {setProducts} from '../../../actions/ProductActions';

const ProductScreen: React.FC<ProductScreenProps> = () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);

import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../../Types';
import {ProductScreenProps} from '../../Types';
import {setUser} from '../../../../actions/UserActions';
import ProductCard from './components/ProductCard';

const ProductScreen: React.FC<ProductScreenProps> = (props) => {
  return (
    <View>
      {props.state.UserReducer.items.map((item) => (
        <ProductCard item={item}></ProductCard>
      ))}
    </View>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({setUser}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);

import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../../Types';
import {ProductScreenProps} from '../../Types';
import {setUser} from '../../../../actions/UserActions';
import ProductCard from './components/ProductCard';
import {ScrollView} from 'react-native-gesture-handler';

const ProductScreen: React.FC<ProductScreenProps> = (props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {props.state.UserReducer.items.map((item) => (
          <ProductCard item={item} key={item.id}></ProductCard>
        ))}
      </ScrollView>
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

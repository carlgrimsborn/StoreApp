import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../../Types';
import {AppProductsScreenProps} from '../../Types';
import {setProducts} from '../../../../actions/ProductActions';
import ProductCard from '../../../../components/ProductCard';

const AppProductsScreen: React.FC<AppProductsScreenProps> = (props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {props.state.ProductReducer.map((product) => (
          <ProductCard
            item={product}
            key={product.id}
            users={props.state.AllUsersReducer}></ProductCard>
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
  return bindActionCreators({setProducts}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppProductsScreen);

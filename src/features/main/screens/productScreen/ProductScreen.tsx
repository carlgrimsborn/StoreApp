import React, {useState} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  ProductPeriod,
  ProductSize,
  ProductStatus,
  ProductType,
  ReduxState,
  WarehouseName,
} from '../../../../Types';
import {ProductScreenProps} from '../../Types';
import {setUser} from '../../../../actions/UserActions';
import ProductCard from '../../../../components/ProductCard';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Input} from 'react-native-elements';
import {Modal, View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {postProduct} from '../../../../services/ProductService';
import {login} from '../../../../services/UserService';

const ProductScreen: React.FC<ProductScreenProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState<string>('example');
  const [toDate, seToDate] = useState<string>('2020-07-12');
  const [fromDate, setFromDate] = useState<string>('2020-07-13');
  const [length, setLength] = useState<string>('1');
  const [width, setWidth] = useState<string>('1');
  const [height, setHeigth] = useState<string>('1');
  const [type, setType] = useState<string>('Furniture');

  const postItem = async () => {
    const resp = await postProduct({
      id: Math.random() * 1000,
      name: name,
      ownerId: props.state.UserReducer.id.toString(),
      period: {fromDate: fromDate, toDate: toDate},
      size: {
        height: parseInt(height),
        length: parseInt(length),
        width: parseInt(width),
      },
      status: ProductStatus.ACTIVE,
      type: type as ProductType,
      warehouse: WarehouseName.Hatchworks,
    });
    if (resp) {
      console.log(resp);
      const respuser = await login(
        props.state.UserReducer.email,
        props.state.UserReducer.password,
      );
      if (respuser) {
        props.setUser(respuser);
      } else alert('Failed to upload');
    } else {
      alert('Failed to upload');
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {props.state.UserReducer.items.map((item) => (
          <ProductCard item={item} key={item.id}></ProductCard>
        ))}
      </ScrollView>
      <View style={{justifyContent: 'flex-end', marginBottom: 10}}>
        <Button
          style={{margin: 3}}
          title="Add Product"
          onPress={() => setModalVisible(!modalVisible)}></Button>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 22,
          }}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Product</Text>
            <Input
              placeholder="name"
              value={name}
              onChangeText={(e) => setName(e)}></Input>
            <Input
              placeholder="toDate"
              value={toDate}
              onChangeText={(e) => seToDate(e)}></Input>
            <Input
              placeholder="fromDate"
              value={fromDate}
              onChangeText={(e) => setFromDate(e)}></Input>
            <Input
              placeholder="length"
              value={length}
              onChangeText={(e) => setLength(e)}></Input>
            <Input
              placeholder="width"
              value={width}
              onChangeText={(e) => setWidth(e)}></Input>
            <Input
              placeholder="height"
              value={height}
              onChangeText={(e) => setHeigth(e)}></Input>
            <Input
              placeholder="type"
              value={type}
              onChangeText={(e) => setType(e)}></Input>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={async () => {
                await postItem();
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 150,
  },
});

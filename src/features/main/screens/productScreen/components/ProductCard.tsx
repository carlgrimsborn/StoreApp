import React from 'react';
import {Card} from 'react-native-elements';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Product, ProductType} from '../../../../../Types';
import {
  faCouch,
  faVrCardboard,
  faTv,
  faCar,
} from '@fortawesome/free-solid-svg-icons';

const calculateIcon = (item: Product) => {
  switch (item.type) {
    case ProductType.Furniture:
      return (
        <FontAwesomeIcon
          icon={faCouch}
          color="brown"
          size={30}
          style={{top: -5}}
        />
      );

    case ProductType.Cardboard:
      return (
        <FontAwesomeIcon
          icon={faVrCardboard}
          color="yellow"
          size={30}
          style={{top: -5}}
        />
      );

    case ProductType.Electronics:
      return (
        <FontAwesomeIcon icon={faTv} color="grey" size={30} style={{top: -5}} />
      );

    case ProductType.Vehicle:
      return (
        <FontAwesomeIcon
          icon={faCar}
          color="black"
          size={30}
          style={{top: -5}}
        />
      );
  }
};

const ProductCard: React.FC<{item: Product}> = (props) => (
  <Card key={props.item.id}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Card.Title>{props.item.name}</Card.Title>
      {calculateIcon(props.item)}
    </View>
    <Card.Divider />
    <Text style={{marginBottom: 10}}>Status: {props.item.status}</Text>
    <Text style={{marginBottom: 10}}>
      Period: {props.item.period.fromDate} to {props.item.period.toDate}
    </Text>
    <Text style={{marginBottom: 10}}>
      Dimensions: {props.item.size.height * 100}cm*{props.item.size.width * 100}
      cm*
      {props.item.size.length * 100}cm
    </Text>
    <Text style={{marginBottom: 10}}>Located at: {props.item.warehouse}</Text>
  </Card>
);

export default ProductCard;

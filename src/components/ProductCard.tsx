import React from 'react';
import {Card} from 'react-native-elements';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Product, ProductType, User} from '../Types';
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
          color="orange"
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

interface ProductCardProps {
  item: Product;
  users?: User[];
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const owner = () => {
    let value: string = '';
    if (props.users) {
      props.users.map((user) => {
        {
          console.log('AAA', user.id + props.item.ownerId);
        }
        if (user.id.toString() === props.item.ownerId.toString()) {
          value = user.surname + ' ' + user.lastname;
        }
      });
    }
    return value;
  };
  return (
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
        Dimensions: {props.item.size.height * 100}cm*
        {props.item.size.width * 100}
        cm*
        {props.item.size.length * 100}cm
      </Text>
      <Text style={{marginBottom: 10}}>Located at: {props.item.warehouse}</Text>

      {props.users ? (
        <Text style={{marginBottom: 10}}>Owner: {owner()}</Text>
      ) : null}
    </Card>
  );
};

export default ProductCard;

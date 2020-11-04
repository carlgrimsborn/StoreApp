import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Card, ListItem} from 'react-native-elements';
import {User, Warehouse} from '../Types';
import {faWarehouse} from '@fortawesome/free-solid-svg-icons';

interface WarehouseCardsProps {
  warehouses: Warehouse[];
}

const WarehouseCards: React.FC<WarehouseCardsProps> = (props) => {
  return (
    <Card containerStyle={{padding: 0}}>
      {props.warehouses.map((w, i) => {
        return (
          <ListItem
            key={i}
            title={w.name}
            leftAvatar={<FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon>}
            bottomDivider={true}
          />
        );
      })}
    </Card>
  );
};

export default WarehouseCards;

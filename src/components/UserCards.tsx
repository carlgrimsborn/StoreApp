import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Card, ListItem} from 'react-native-elements';
import {User} from '../Types';
import {faUser} from '@fortawesome/free-solid-svg-icons';

interface UserCardsProps {
  users: User[];
}

const UserCards: React.FC<UserCardsProps> = (props) => {
  return (
    <Card containerStyle={{padding: 0}}>
      {props.users.map((u, i) => {
        return (
          <ListItem
            key={i}
            title={u.surname + ' ' + u.lastname}
            leftAvatar={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
            bottomDivider={true}
          />
        );
      })}
    </Card>
  );
};

export default UserCards;

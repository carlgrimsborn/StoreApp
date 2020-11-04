import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ReduxState} from '../../../../types';
import {AppUsersScreenProps} from '../../Types';
import {setUsers} from '../../../../actions/AllUsersActions';
import {ScrollView} from 'react-native-gesture-handler';
import UserCards from '../../../../components/UserCards';
export const AppUsersScreen: React.FC<AppUsersScreenProps> = (props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <UserCards users={props.state.AllUsersReducer}></UserCards>
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
  return bindActionCreators({setUsers}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppUsersScreen);

import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as LocalDB from '../../localDB/realm';
import {addAction} from '../../store/main/actions';
import RenderItem from '../components/renderItem';
import styles from './styles';

const Main = ({route, addLocal, users, navigation}) => {
  useEffect(() => {
    const response = LocalDB.getLocal();
    if (response) {
      addLocal(response);
    }
  }, [route?.params?.add]);

  const renderItem = ({item, index}) => (
    <RenderItem item={item} index={index} navigation={navigation} />
  );

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyViewContainer}>
        <Text variant={'titleLarge'}>No records</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={ListEmptyComponent}
      contentContainerStyle={{flexGrow: 1}}
    />
  );
};

const mapStateToProps = store => {
  return {
    users: store.user.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLocal: data => dispatch(addAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
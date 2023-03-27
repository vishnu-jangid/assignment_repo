import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {Text, View, FlatList, TextInput} from 'react-native';
import * as LocalDB from '../../localDB/realm';
import {addUrlAction} from '../../store/main/actions';
import uuid from 'react-native-uuid';
import {connect} from 'react-redux';
import styles from './styles';
import {isReachable} from '../../utils/serverStatus';

const SecondScreen = ({urls, addUrlAction}) => {
  const [state, setState] = useState({
    page: 1,
    text: '',
  });

  const renderRow = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Text>{item?.url}</Text>
        </View>
        <View style={styles.item}>
          <Text>{item?.status}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    const response = LocalDB.getLocalUrl();
    if (response) {
      addUrlAction(response);
    }
  }, []);

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyViewContainer}>
        <Text variant={'titleLarge'}>No records</Text>
      </View>
    );
  };
  const onChangeText = useCallback(
    text => {
      setState({...state, text: text});
    },
    [state.text],
  );

  const onSubmitEditing = async () => {
    let status;
    if (state.text !== '') {
      let resp = await isReachable(state.text);
      if (resp === true) status = 'SUCCESS';
      else status = 'FAILURE';

      let data = {
        id: uuid.v4(),
        url: state.text,
        status: status,
      };

      LocalDB.addLocalUrl(data);
      setTimeout(() => {
        const response = LocalDB.getLocalUrl();
        if (response) {
          addUrlAction(response);
        }
      }, 500);
      setState(prev => ({...prev, text: ''}));
    }
  };

  const ListHeader = useMemo(() => {
    return (
      <View style={[styles.searchInput]}>
        <TextInput
          placeholder={'Enter Website here to be monitored'}
          onChangeText={onChangeText}
          onSubmitEditing={() => onSubmitEditing()}
          value={state.text}
          style={{backgroundColor: '#f3f3f3'}}
          blurOnSubmit={true}
        />
      </View>
    );
  }, [state.text]);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        data={urls}
        renderItem={renderRow}
        ListHeaderComponent={ListHeader}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}
      />
    </View>
  );
};

const mapStateToProps = store => {
  return {
    urls: store.user.urls,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUrlAction: data => dispatch(addUrlAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);

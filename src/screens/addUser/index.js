import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import uuid from 'react-native-uuid';
import styles from './styles';
import * as LocalDB from '../../localDB/realm';

const AddUser = ({navigation, route}) => {
  const {params} = route;
  const [state, setState] = useState({
    tableName: params?.item?.tableName ?? '',
    uniqueName: params?.item?.uniqueName ?? '',
    columnName: params?.item?.columnName ?? '',
  });

  const onSave = () => {
    const {tableName, uniqueName, columnName} = state;
    if (check) {
      Alert.alert('Oops!', `Please provide a value in each field`);
    } else if (params?.item?.update) {
      let data = {
        id: params?.item?.id,
        tableName: tableName,
        uniqueName: uniqueName,
        columnName: columnName,
      };
      LocalDB.updateUserLocal(data);
      navigation.navigate('Main', {add: 'update'});
    } else {
      let data = {
        id: uuid.v4(),
        tableName: tableName,
        uniqueName: uniqueName,
        columnName: columnName,
      };
      LocalDB.addLocal(data);
      navigation.navigate('Main', {add: 'update'});
    }
  };

  const {tableName, uniqueName, columnName} = state;
  const check = tableName === '' || uniqueName === '' || columnName === '';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        underlineColorAndroid="transparent"
        placeholder={'Table Name'}
        value={tableName}
        onChangeText={text => setState(prev => ({...prev, tableName: text}))}
        placeholderTextColor={'#000'}
      />

      <TextInput
        style={styles.inputStyle}
        underlineColorAndroid="transparent"
        placeholder={'Unique column'}
        value={uniqueName}
        onChangeText={text => setState(prev => ({...prev, uniqueName: text}))}
        placeholderTextColor={'#000'}
      />

      <TextInput
        style={styles.inputStyle}
        underlineColorAndroid="transparent"
        placeholder={'Column name'}
        value={columnName}
        onChangeText={text => setState(prev => ({...prev, columnName: text}))}
        placeholderTextColor={'#000'}
      />

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={onSave}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUser;

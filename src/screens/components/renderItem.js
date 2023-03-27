import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as LocalDB from '../../localDB/realm';
import {addAction} from '../../store/main/actions';
import styles from './styles';

const RenderItem = ({item, navigation, addLocal}) => {
  const onPressViewUser = () => navigation.navigate('ViewUser', {item});

  const onPressEditUser = () => {
    item.update = true;
    navigation.navigate('Add', {item});
  };

  const onPressRemoveUser = () => {
    LocalDB.deleteUserLocal(item.id);
    const response = LocalDB.getLocal();
    if (response) {
      addLocal(response);
    }
  };

  return (
    <View style={styles.mainCardView}>
      <View>
        <Text style={styles.itemText}>Table Name: {item?.tableName}</Text>
        <Text style={styles.itemText}>Unique Name: {item?.uniqueName}</Text>
        <Text style={styles.itemText}>Column Name: {item?.columnName}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#81a135'}]}
          onPress={onPressEditUser}
          hitSlop={styles.hitSlop}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#f44336'}]}
          onPress={onPressRemoveUser}
          hitSlop={styles.hitSlop}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#9ed9db'}]}
          onPress={onPressViewUser}
          hitSlop={styles.hitSlop}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addLocal: data => dispatch(addAction(data)),
  };
};
export default connect(null, mapDispatchToProps)(RenderItem);

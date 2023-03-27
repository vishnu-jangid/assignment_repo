import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ViewUser = ({route}) => {
  const {params} = route;
  return (
    <View style={styles.container}>
      <View style={styles.mainCardView}>
        <Text style={{fontSize: 25}}>
          Table Name: {params?.item?.tableName}
        </Text>
        <Text style={{fontSize: 25}}>
          Unique Name: {params?.item?.uniqueName}
        </Text>
        <Text style={{fontSize: 25}}>
          Column Name: {params?.item?.columnName}
        </Text>
      </View>
    </View>
  );
};

export default ViewUser;

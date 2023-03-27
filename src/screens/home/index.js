import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  const onPressUserCaseFirst = () => {
    navigation.navigate('Main');
  };

  const onPressUserCaseSecond = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressUserCaseFirst}>
        <Text style={styles.btnText}>User Case 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressUserCaseSecond}>
        <Text style={styles.btnText}>User Case 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

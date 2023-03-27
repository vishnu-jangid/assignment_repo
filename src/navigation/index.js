import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/main';
import {Button} from 'react-native';
import Add from '../screens/addUser';
import ViewUser from '../screens/viewUser';
import Home from '../screens/home';
import SecondScreen from '../screens/secondScreen';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerTitle: 'Home Screen',
          })}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={() => ({
            headerTitle: 'Add User',
          })}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={({navigation, route}) => ({
            headerTitle: 'Main',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Add')}
                title="Add User"
              />
            ),
          })}
        />
        <Stack.Screen
          name="ViewUser"
          component={ViewUser}
          options={() => ({
            headerTitle: 'View User',
          })}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={() => ({
            headerTitle: 'Second Screen',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import ConfirmCodeScreen from './screens/ConfirmCodeScreen';
import LoginScreen from './screens/LoginScreen';
import CompleteRegisterScreen from './screens/CompleteRegisterScreen';
import ToDoScreen from './screens/ToDoScreen';

const Stack = createNativeStackNavigator();
const HomeScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="CompleteRegister"
          component={CompleteRegisterScreen}
        />

        <Stack.Screen name="ConfirmCode" component={ConfirmCodeScreen} />
        <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenStack;

const styles = StyleSheet.create({});

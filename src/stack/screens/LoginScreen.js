import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('ToDoScreen')}></Button>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}></Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

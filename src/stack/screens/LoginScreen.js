import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const LoginScreen = ({navigation}) => {
  const [mail, setmail] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setmail}
        value={mail}
        placeholder="Enter your email address..."
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

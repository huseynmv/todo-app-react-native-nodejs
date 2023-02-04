import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const RegisterScreen = ({navigation}) => {
  const ConfirmScreen = () => {
    navigation.navigate('ConfirmCode');
  };

  return (
    <View>
      {/* <Text>RegisterScreen</Text>*/}

      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
      />
      <Button title="Register" onPress={() => ConfirmScreen()}></Button>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

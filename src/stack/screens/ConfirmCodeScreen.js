import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ConfirmCodeScreen = ({navigation}) => {
  return (
    <View>
      <Text>ConfirmCodeScreen</Text>
      <Button
        title="Confirm"
        onPress={() => navigation.navigate('CompleteRegister')}></Button>
    </View>
  );
};

export default ConfirmCodeScreen;

const styles = StyleSheet.create({});

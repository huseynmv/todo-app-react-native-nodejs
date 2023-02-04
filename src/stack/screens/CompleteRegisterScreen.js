import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CompleteRegisterScreen = ({navigation}) => {
  return (
    <View>
      <Text>CompleteRegisterScreen</Text>
      <Button
        title="Complete"
        onPress={() => navigation.navigate('ToDoScreen')}></Button>
    </View>
  );
};

export default CompleteRegisterScreen;

const styles = StyleSheet.create({});

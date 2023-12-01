import * as React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ChuckerView } from 'react-native-chucker';
import axios from 'axios';

export default function App() {
  const callPostApi = () => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((val) => {
        console.log('value---', val.data.data);
      })
      .catch((e) => {
        console.log('error--', e);
      });
  };
  return (
    <View style={styles.container}>
      <ChuckerView color="#32a852" style={styles.box} />
      <TouchableOpacity style={styles.btn} onPress={callPostApi} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  btn: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});

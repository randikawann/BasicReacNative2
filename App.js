
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Pin from './components/Pin';
import Testbox from './components/Testbox';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Pin style={styles.pinstyle}/>
        <Testbox style={styles.textboxstyle}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  pinstyle :{
    flex : 5,
  },
  textboxstyle :{
    flex : 1,
  },
});

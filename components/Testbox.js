import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Testbox extends Component{
    render(){
        return(
            <View style={styles.testboxcontainer}>
                <View style = {[styles.boxcontainer, styles.boxone]}>
                    <Text>BAT</Text>
                </View>
                <View style = {[styles.boxcontainer, styles.boxtwo]}>
                    <Text>HAT</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    testboxcontainer:{
        flex : 1,
    },
    boxcontainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      boxone:{
        flex: 4,
        backgroundColor: '#F5FC00',
      },
      boxtwo:{
        flex: 2,
        backgroundColor: '#F50CCC',
      }
});
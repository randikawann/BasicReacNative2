import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    Image
} from 'react-native';

export default class Pin extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>Pin</Text>
                <View style={styles.imagelayout}>
                    <Image style={styles.imagelayoutin} source={require('../assets/homeimg.jpg')}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    imagelayout:{
        flex: 10,

    },
    pincolor :{
        flex : 2,
        
        backgroundColor : '#ffddaa'
    }
});
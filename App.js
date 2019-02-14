import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>

        {/* <Button
          title="Go to Home... again"
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
        //add more button
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        {/* added new button to home screen */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
 //no need
  /*
  Home: {
    screen: HomeScreen
  }
  */
      //no need above things 
//  Home: HomeScreen
      //multiple class added
  Home: HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

type Props = {};


export default class App extends React.Component {
  render() {
    return ( <AppContainer />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

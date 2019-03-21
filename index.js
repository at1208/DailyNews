import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import Subheading from './src/components/subheading';
import Techlist from './src/components/techlist';


class App extends Component {
  render() {
    return (
      <View>
       <Header heading='Techy Baba' />
       <Subheading sub='Daily Tech News' />
       <Techlist />

      </View>
    );
  }
}

AppRegistry.registerComponent('techy',() => App)

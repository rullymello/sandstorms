
import React, { Component } from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   View
} from 'react-native';
import Navigator from './Tab/Navigator';

export default class App extends Component<{}> {
  render() {
    return (
      <Navigator  />
    );
  }
}


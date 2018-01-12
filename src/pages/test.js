//importando do próprio react
import React, {Component } from 'react';
// importando elementos do react-native
import {View,
    Text,
    TouchableOpacity,
    TextInput,Button} from 'react-native';
   export default class Curadoria extends React.Component {
        static navigationOptions = {
          tabBarLabel: 'Modafocaem',
        };
        render() {
          const { goBack } = this.props.navigation;
          return (
            <Button
              title="Go back to home tab"
              onPress={() => goBack()}
            />
          );
        }
      }
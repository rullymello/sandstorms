
import * as React from 'react';
import { View,Text,StyleSheet, Dimensions ,ScrollView} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import List from './Form';
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};


export default class Categorias extends React.Component {
  state = {
    lista :[
      { id:1,
        title:'rocketseat.com.br',
        thumbnail:'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author:'rocketseat',
      },
      {            
        id:2,
        title:'rocketnative',
        thumbnail:'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author:'carlos',
      },
      {            
        id:3,
        title:'rocketnative',
        thumbnail:'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author:'marcos',
      },
      {            
        id:4,
        title:'rocketnative',
        thumbnail:'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author:'julio',
      },
      {            
        id:5,
        title:'rocketnative',
        thumbnail:'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author:'marcello',
      },
      {            
        id:6,
        title:'rocketnative',
        thumbnail:'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author:'leandro',
      },
      {            
        id:7,
        title:'rocketnative',
        thumbnail:'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author:'julho',
      },
    ],

    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'tree', title: 'Three' },
      { key: 'quad', title: 'For' },
      { key: 'quint', title: 'Five' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
  scrollEnabled
   {...props} />;

  _renderScene = () => <View style={styles.container}>
  <ScrollView contentContainerStyle={styles.repoList}>
  {this.state.lista.map(lista => <List key={lista.id} data={lista} /> )}
  </ScrollView>
            </View>;

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}


const styles = StyleSheet.create({
  container : {
 flex:1,
backgroundColor:'#333'
},
repoList : {
padding:20
},
repo : {
  padding:20,
  backgroundColor:'#FFF',
  height:120,
  marginBottom:20,
  borderRadius:5,
},

});









/*
import * as React from 'react';
import { View,Text, StyleSheet, Dimensions , ScrollView } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};


export default class TabViewExample extends React.Component {
  // criando estado com as tabs
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Pratos' },
      { key: '2', title: 'Petiscos' },
      { key: '3', title: 'Bebidas' },
      { key: '4', title: 'Saladas' },
      { key: '5', title: 'Vegetarianos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });
// renderizando a TabBar com scrollEnabled(rolamento ativado) e useNativeDriver(uso de driver nativo)
  _renderHeader = props => <TabBar 
  scrollEnabled
   {...props} />;

  _renderScene = () => {this.state.routes.map(routes =>
   <View>
     
     <Text>OLÁ UNIVERSO</Text>
   </View>     // retornando uma view para cada tab
)} 
//renderizando o componente TabViewAnimated que pega o estado da navegação e renderiza cada TabView
  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        useNativeDriver
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});




*/


























/*
import React from 'react';
import {Text,View,StyleSheet,Button,Alert,TouchableOpacity,TextInput,Modal} from 'react-native';
import {TabNavigator} from "react-navigation";

import LoginForm from './LoginForm';
import Produtos from './Produtos';
import Curadoria from './test';
import Form from './Form';
// navegador drawer com as rotas
const Navi = TabNavigator({
 Bookmark : {
   screen:Produtos
  },
  Form : {
    screen:Form
   },

  Produto : {
    screen:Curadoria
   },
 Gerenciamento : {
   screen:LoginForm
  },
},
  {
    swipeEnabled:true,
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled:true,
    },
    useNativeDriver:true,
 });
 
 
 
 export default Navi;
 
*/
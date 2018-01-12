
/*

import * as React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} ><Text>OI</Text></View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;


export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second'},
      {key:'third',title:'Third'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar
  scrollEnabled
  {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
  });

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
  container: {
    flex: 1,
  },
});

*/


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







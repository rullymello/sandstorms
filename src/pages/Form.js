//importando do próprio react
import React, {Component } from 'react';
// importando elementos do react-native
import {View,
    Text,
    TouchableOpacity,
    TextInput,
    Button,
    ScrollView,
    StyleSheet,
    Image
       } from 'react-native';

 

export default class List extends React.Component {
        render() {
          return (
            <View style={styles.repo}>
             <Image
              style={styles.repoImage}
              source={{uri:this.props.data.thumbnail}}
             />
<View style={styles.repoInfo}>
<Text style={styles.repoTitle}>{this.props.data.title}</Text>
<Text style={styles.repoAuthor}>{this.props.data.author}</Text>
  </View>
 </View>

          );
        }
      }

const styles = StyleSheet.create({
 
  repoList : {
    padding:20
    },
    
    repo: {
      padding:20,
      backgroundColor:'#FFF',
      height:120,
      marginBottom:20,
      flexDirection:'row',
      borderRadius:5,
      alignItems:'center',
    },

repoImage:{
  width:50,
  height:50,
},  

repoInfo:{
marginLeft:10,
},

repoTitle: {
fontWeight:'bold',
color:'#333',
},

repoAuthor:{
fontSize:12,
color:'#999',
},
});

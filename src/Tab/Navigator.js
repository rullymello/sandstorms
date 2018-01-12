import React from 'react';
import {View, Text,Button} from 'react-native';
import { DrawerNavigator} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import IOSIcon from "react-native-vector-icons/Ionicons";

// Screens

import Bookmark from '../pages/Bookmark';

//import ModalProduto from './ModalProduto';




// navegador drawer com as rotas
const Navigator = DrawerNavigator({
//Bookmark com ícone de menu
Bookmark : {
	    screen:Bookmark,
        navigationOptions: {
        drawerLabel: "Bookmark",
        drawerIcon: ({ tintColor }) => <IOSIcon name="ios-menu" size={30} />,
       },
},


});



export default Navigator;

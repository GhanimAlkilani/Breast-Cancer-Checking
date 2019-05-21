import React, { Component } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import drawernav from './drawer';

import DrawerButton from './DrawerButton';
import Home from './Home';
import About from './About';
import LangButton from './LangButton';
 





const AppNavigator = createStackNavigator(
  {
    

    Home: {
      screen: drawernav,

      navigationOptions: ({ navigation }) => {
        return {
          title: 'Home',
          headerStyle: {
            backgroundColor: '#0099cc',
          },
          headerTintColor: '#fff',
          headerLeft: <DrawerButton navigation={navigation} />,
          headerRight: <LangButton navigation={navigation} />,
        };
      },
    },

   About: {
    screen: About,
    navigationOptions:{
      title:'About',
       
      
    }
  }
}
  
);

export default AppNavigator;

import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'


import DrawerButton from './DrawerButton';

import LangButton from './LangButton';

import Home from './Home';

import About from "./About"
const drawernav = createDrawerNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: Home,
    drawerLabel: 'Customers',
  },
  About: {
    screen: About,
    drawerLabel: 'Customers',
  }

});


export default drawernav;
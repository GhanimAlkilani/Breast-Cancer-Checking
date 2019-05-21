import React, { Component } from 'react';
import AppNavigator from './src/stacknav';
import { Root } from 'native-base';

// You can import from local files

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

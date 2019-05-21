import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Home from './Home';



export default class LangButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity>
        <Image source={require('./img/Lang.png')} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

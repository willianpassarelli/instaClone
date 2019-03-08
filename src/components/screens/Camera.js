import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Camera extends Component {

	login() {
    this.props.navigation.navigate('main');
    //Navigate to MainFeed
  }

  render() {
    return (
        <TouchableOpacity 
          style={styles.container}
          onPress={()=> this.login()}
        >
            <Text>Camera Page</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 100 + '%', 
        width: 100 + '%', 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
});
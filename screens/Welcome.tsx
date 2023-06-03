import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.splashStyle} source={require('../assets/App_icon.png')} />
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4DFFC5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashStyle: {
    width: Dimensions.get("screen").width * 1.4,
    height: Dimensions.get("screen").height * 0.84,
    marginRight: Dimensions.get("screen").width * 0.34,
    alignSelf: "center"
  }
});
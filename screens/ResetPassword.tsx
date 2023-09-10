import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const ResetPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        color: "#ffff"
      }}>Reset Password</Text>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#21262C',
        height: Dimensions.get("screen").height * 1.03,
        width: Dimensions.get("screen").width,
    }
})
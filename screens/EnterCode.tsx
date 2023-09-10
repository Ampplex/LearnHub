import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const EnterCode = ({navigation, userName}: any) => {
  return (
    <>
    <View style={styles.container}>
      <Text>EnterCode</Text>
    </View>
    </>
  )
}

export default EnterCode;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
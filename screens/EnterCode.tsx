import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { StatusBar } from 'expo-status-bar';

const EnterCode = ({navigation, route}: any) => {

  type codeType = string;

  const [code, setCode] = useState<codeType>("")

  return (
    <>
    <View style={{
      flex: 1,
      backgroundColor: "#fff"
    }}>
      <FlashMessage position={"center"} />
    <ScrollView contentContainerStyle={styles.container}>
      <LottieView
         source={require('../assets/animations/animations/astronaut.json')}
         style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height * 0.36,
            position: "absolute",
            top: Dimensions.get("window").height * 0.06,
            backgroundColor: "#fff",
         }}
         autoPlay={true}
         loop={true}
      />

      <StatusBar style="dark" />

      {/* Input Code field */}

      <View style={styles.inputCode}>
        <TextInput
        placeholder={"Enter the code"}
        onChangeText={(text) => setCode(text)}
        style={{
          fontSize: 15,
          width: Dimensions.get("screen").width * 0.7,
          height: Dimensions.get("screen").height * 0.07,
        }}
        />
      </View>

      {/* Proceed button */}

      <TouchableOpacity
          onPress={() => {
            if(code.toLowerCase() == "b1") {
              navigation.navigate("Study")
            } else if (code.toLowerCase() == "c1") {
              navigation.navigate("ChatScreen")
            } else {
              console.log("Please enter a valid code")
              showMessage({
                message: 'Invalid code',
                type: 'danger',
                description: 'Please enter a valid code.',
                duration: 3000,
                floating: true, // This allows the message to be displayed even if the user scrolls
                icon: 'danger', // You can customize the icon (optional)
              });
            }
          }}
          style={styles.ProceedButton}
        >
          <Text style={styles.learnMoreButtonText}>Proceed</Text>
        </TouchableOpacity>
        <View>

        
        </View>
    </ScrollView>
    </View>
    </>
  )
}

export default EnterCode;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
    },
    inputCode: {
      backgroundColor: "#E1EBFF",
      width: Dimensions.get("screen").width * 0.8,
      height: Dimensions.get("screen").height * 0.07,
      borderRadius: 20,
      marginTop: Dimensions.get("screen").height * 0.12,
      alignContent: 'center',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 20,
    },
    ProceedButton: {
      backgroundColor: '#007AFF', // Change the color to your preference
      width: Dimensions.get('screen').width * 0.8,
      height: Dimensions.get('screen').height * 0.07,
      borderRadius: 20,
      marginTop: Dimensions.get('screen').height * 0.02, // Adjust the margin as needed
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    learnMoreButtonText: {
      color: '#fff', // Change the text color to your preference
      fontSize: 18,
      fontWeight: 'bold',
    },
    
})
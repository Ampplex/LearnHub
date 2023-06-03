import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {

  const btnHandler = async () : Promise<void> => {
    await console.log("Hello world!");
  }

  const Reset = () => {
    return "Reset";
  }

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['#348CFD', '#4EAEFF']}
        style={styles.background}
        start={{x: 0.1, y: 0.2}}
        end={{x: 1, y: 0.1}}        
      >

        <View style={{ 
            position: 'absolute',
            top: Dimensions.get("window").height * 0.15,
            alignSelf: 'center',
        }}>
        <Text style={{
          color: 'white',
          fontSize: 35,
          fontFamily: 'sans-serif-medium',
          fontWeight: 'bold',
        }}>Login</Text>  
        </View>
      
      </LinearGradient>
      

       <StatusBar style="light" />

      <View style={{
        marginTop: Dimensions.get("screen").height * 0.1
      }}>

       <TextInput
      placeholder='Name'
      placeholderTextColor={"white"}
      style={{
        borderColor: '#4EAEFF',
        width: Dimensions.get("window").width * 0.75,
        height: Dimensions.get("window").height * 0.065,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 55,
        paddingLeft: 15,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
      }}
      />

      <TextInput
      placeholder='Email'
      placeholderTextColor={"white"}
      style={{
        borderColor: '#4EAEFF',
        width: Dimensions.get("window").width * 0.75,
        height: Dimensions.get("window").height * 0.065,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 55,
        paddingLeft: 15,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        marginTop: 30,
      }}
      />
      </View>

      <TouchableOpacity style={styles.LoginBtn} onPress={() => btnHandler()}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#348CFD', '#4EAEFF']}
        style={{
          width: Dimensions.get("screen").width * 0.62,
          height: Dimensions.get("screen").height * 0.07,
          borderRadius: 30,
          top: 20,
          elevation: 5
        }}
        start={{x: 0.1, y: 0.2}}
        end={{x: 1, y: 0.1}}        
      >
            <Text style={{
                alignSelf: "center",
                paddingTop: 12,
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
                fontFamily: 'sans-serif-medium',
      }}>Login</Text>
    </LinearGradient>
      </TouchableOpacity>
      
      {/* Forgot Password */}
      
      <View style={{
            bottom: Dimensions.get("screen").height * 0.13,
        }}>
            <Text style={{
                color: "white",
                fontFamily: "sans-serif-medium",
             }}>Forgot password? </Text>
      </View>

      <TouchableOpacity style={{
        bottom: Dimensions.get("screen").height * 0.13,
      }}>
        <Text style={{
                color: "white",
                fontFamily: "sans-serif-medium",
             }}>Reset</Text>
      </TouchableOpacity>
  
  </ScrollView>
    </>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A2C',
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
    },
    background: {
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height * 0.3,
      position: "absolute",
      top: 0,
      borderBottomLeftRadius: 130,
    },
    loginBtnGradient: {
      width: 120,
      height: 50,
      borderRadius: 30,
    },
    LoginBtn: {
      width: Dimensions.get("screen").width * 0.62,
      height: Dimensions.get("screen").height * 0.17,
      borderRadius: 30,
      top: 60,
  },
})
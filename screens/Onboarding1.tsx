import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Onboarding1 = ({navigation} : any) => {
    
  return (
    <View style={styles.container}>

        <View style={{
            alignSelf: "center",
            position: "absolute",
            top: Dimensions.get("screen").height * 0.1,
        }}> 
            <Text style={styles.app_name}>LearnHub</Text>
        </View>

         <LottieView
         source={require('../assets/animations/animations/education.json')}
         style={{
            width: Dimensions.get("window").width * 0.8,
            height: Dimensions.get("window").height * 0.3,
         }}
         autoPlay={true}
         loop={true}
         />

        {/* Login Btn */}
        <TouchableOpacity style={styles.LoginBtn} onPress={() => navigation.navigate("Login")}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#348CFD', '#4EAEFF']}
        style={styles.LoginBtn}
        start={{x: 0.1, y: 0.2}}
        end={{x: 1, y: 0.1}}        
      >
            <Text style={{
                alignSelf: "center",
                paddingTop: 12,
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
                fontFamily: 'sans-serif-medium',
            }}>Login</Text>
        </LinearGradient>
        </TouchableOpacity>

        {/* Register Btn */}
        <TouchableOpacity style={styles.RegisterBtn} onPress={() => navigation.navigate("Register")}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#348CFD', '#4EAEFF']}
        style={styles.RegisterBtn}
        start={{x: 0.1, y: 0.2}}
        end={{x: 1, y: 0.1}}        
        >
            <Text style={{
                alignSelf: "center",
                paddingTop: 12,
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
                fontFamily: 'sans-serif-medium',
            }}>Register</Text>
            </LinearGradient>
        </TouchableOpacity>

    </View>
  )
}

export default Onboarding1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    hello_anm: {
        width: Dimensions.get("screen").width * 0.9,
        height: Dimensions.get("screen").height * 0.9,
    },
    app_name: {
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: 'sans-serif-medium',
        color: "#000",
        fontStyle: "italic",
    },
    LoginBtn: {
        width: Dimensions.get("screen").width * 0.62,
        height: Dimensions.get("screen").height * 0.057,
        position: 'absolute',
        bottom: Dimensions.get("screen").height * 0.08,
        borderRadius: 20,
    },
    RegisterBtn: {
        width: Dimensions.get("screen").width * 0.62,
        height: Dimensions.get("screen").height * 0.057,
        position: 'absolute',
        bottom: Dimensions.get("screen").height * 0.037,
        borderRadius: 20,
    }
});
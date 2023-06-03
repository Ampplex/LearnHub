import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
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
            <Text style={styles.app_name}>Communicare</Text>
        </View>

        <View style={styles.hello_anm}>
        <LottieView
          source={require('../assets/animations/hello.json')}
          autoPlay={true}
        />    
        </View>
        
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
        <TouchableOpacity style={styles.RegisterBtn}>
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
        backgroundColor: '#1A1A2C'
    },
    hello_anm: {
        width: Dimensions.get("screen").width * 0.9,
        height: Dimensions.get("screen").height * 0.9
    },
    app_name: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: 'sans-serif-medium',
        color: "#FFFF"
    },
    LoginBtn: {
        width: Dimensions.get("screen").width * 0.62,
        height: Dimensions.get("screen").height * 0.057,
        position: 'absolute',
        bottom: Dimensions.get("screen").height * 0.08,
        borderRadius: 20,
        elevation: 5
    },
    RegisterBtn: {
        width: Dimensions.get("screen").width * 0.62,
        height: Dimensions.get("screen").height * 0.057,
        position: 'absolute',
        bottom: Dimensions.get("screen").height * 0.037,
        borderRadius: 20,
        elevation: 5
    }
});
import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

interface TextInput_Handler_type {
    password_eval() : boolean;
}

const Register = ({navigation}: any) => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [conf_password, set_conf_password] = useState<string>("")

    class TextInput_Handler implements TextInput_Handler_type {
        password_eval = () : boolean => {
          if (password.length >= 8 && conf_password.length >= 8)
          {
            return (password === conf_password && password != "" && conf_password != "");
          } else {
            return false;
          }
    }
  }

  const Register_btn_Handler = () : void => {
    const inp_handler_obj = new TextInput_Handler();
    if (inp_handler_obj.password_eval()) {
      console.log("Success");
    } else {
      console.log("Error");
    }
  }

 
  return (
    <>
    <StatusBar style="light" />

    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#F72C98', '#A94ACA']}
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
        }}>Register</Text>  
        </View>
      
      </LinearGradient>


      <View style={{
        marginTop: Dimensions.get("screen").height * 0.18
      }}>

       <TextInput
      placeholder='Name'
      placeholderTextColor={"black"}
      onChangeText={(name) => setName(name)}
      style={{
        borderColor: '#4EAEFF',
        width: Dimensions.get("window").width * 0.75,
        height: Dimensions.get("window").height * 0.065,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 55,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        color: "black",
      }}
      />

      <TextInput
      placeholder='Email'
      placeholderTextColor={"black"}
      onChangeText={(email) => setEmail(email)}
      style={{
        borderColor: '#4EAEFF',
        width: Dimensions.get("window").width * 0.75,
        height: Dimensions.get("window").height * 0.065,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 55,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        marginTop: 30,
        color: "black",
      }}
      />

      <TextInput
      placeholder='New password'
      placeholderTextColor={"black"}
      onChangeText={(pass) => setPassword(pass)}
      secureTextEntry={true}
      style={{
        borderColor: '#4EAEFF',
        width: Dimensions.get("window").width * 0.75,
        height: Dimensions.get("window").height * 0.065,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 55,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        marginTop: 30,
        color: "black",
      }}
      />
      <TextInput
      placeholder='Confirm password'
      placeholderTextColor={"black"}
      onChangeText={(conf_pass) => set_conf_password(conf_pass)}
      secureTextEntry={true}
      style={{
        borderColor: '#4EAEFF',
        width: Dimensions.get("window").width * 0.75,
        height: Dimensions.get("window").height * 0.065,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 55,
        paddingLeft: 20,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        marginTop: 30,
        color: "black",
      }}
      />
      </View>
      
     <TouchableOpacity style={styles.RegisterBtn} onPress={() => Register_btn_Handler()}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#F72C98', '#A94ACA']}
        style={{
          width: Dimensions.get("screen").width * 0.62,
          height: Dimensions.get("screen").height * 0.08,
          borderRadius: 30,
          top: 0,
        }}
        start={{x: 0.1, y: 0.2}}
        end={{x: 1, y: 0.1}}        
      >
        <Text style={{
          alignSelf: "center",
          paddingTop: (Dimensions.get("screen").height * 0.08) / 4.2,
          fontSize: 20,
          color: "#fff",
          fontWeight: "bold",
          fontFamily: 'sans-serif-medium',

      }}>Register</Text>
    </LinearGradient>
      </TouchableOpacity>
      
  </ScrollView>
    </>
  )
}

export default Register;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: Dimensions.get("screen").height * 1.03,
      width: Dimensions.get("screen").width,
    },
    background: {
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height * 0.3,
      position: "absolute",
      top: 0,
      borderBottomLeftRadius: 130,
      elevation: 12
    },
    RegisterBtn: {
      width: Dimensions.get("screen").width * 0.62,
      height: Dimensions.get("screen").height * 0.08,
      borderRadius: 30,
      backgroundColor: "#FAFA",
      marginTop: 63,
      marginBottom: 10,
      elevation: 12
  },
})
import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView ,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

interface Login_construct {
  RequestLogin() : Promise<Number>
  Reset() : string | void
}

const Login = ({navigation}: any) => {
  
  class Login_Btn_Handler implements Login_construct
  {
    private email : string;
    private password : string;
    public username : string;
  
    constructor(email: string, password: string){
      this.email = email;
      this.password = password;
      this.username = "";
    }
  
    public RequestLogin = async () : Promise<Number> => {
        const url = `https://ampplex-backend.onrender.com/Login/${this.email}/${this.password}`;
        // console.log("Request sent");
        const response = await fetch(url);
        const data = await response.json();
        let userName = "";
  
        if(data.status_code == "200") {
          
          this.username = data.userName; // Retreiving userName returned by the backend server
          userName = this.username;
          
          showMessage({
            message: "Logined successfully!",
            type: "success",
          });

          setTimeout(() => {
            navigation.navigate("EnterCode", {userName})
          }, 680);
          return 0;
  
        } 
        else if (this.password.length <= 8) {
          showMessage({
            message: "Password length must be more than 8 characters",
            type: "danger",
          });
  
        }
        else {
          showMessage({
            message: "Some error occurred!",
            type: "danger",
          });
  
        }
        return 1;
    }
    
    public Reset = () : string | void => {
      return "Reset";
    }
  }

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
    <View style={{ 
      flex: 1,
      backgroundColor: "#fff"
    }}>
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
        }}>Login</Text>  
        </View>
      
      </LinearGradient>
      

       <StatusBar style="light" />

      <View style={{
        marginTop: Dimensions.get("screen").height * 0.12
      }}>

      {/* Email  */}

       <TextInput
      placeholder='Email'
      placeholderTextColor={"black"}
      onChangeText={(email:string) => setEmail(email)}
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

      {/* Password */}

      <TextInput
      placeholder='Password'
      placeholderTextColor={"black"}
      secureTextEntry={true}
      onChangeText={(password:string) => setPassword(password)}
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

     <TouchableOpacity style={styles.LoginBtn} onPress={() => {
      const login_inst = new Login_Btn_Handler(email, password);
      login_inst.RequestLogin();
     }}>
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

      }}>Login</Text>
    </LinearGradient>
      </TouchableOpacity>

              {/* Reset button */}
      <View style={{ 
        bottom : -Dimensions.get("screen").height * 0.036,
      }}>
        <TouchableOpacity style={{
          backgroundColor: "#fff",
          width: 200,
          height: 30,
        }}
        onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={{
                  color: "#000",
                  fontFamily: "sans-serif-medium",
                  alignSelf: "center",
                  paddingTop: 5,
              }}>Forgot password? Reset</Text>
        </TouchableOpacity> 
      </View>

      <FlashMessage position={"bottom"}/>

  </ScrollView>
  </View>
    </>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
    },
    background: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height * 0.3,
      position: "absolute",
      top: 0,
      borderBottomLeftRadius: 130,
      elevation: 12
    },
    LoginBtn: {
      width: Dimensions.get("screen").width * 0.62,
      height: Dimensions.get("screen").height * 0.08,
      borderRadius: 30,
      backgroundColor: "#FAFA",
      marginTop: 63,
      marginBottom: 10,
      elevation: 12
  },
})
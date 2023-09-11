import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView ,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

interface Login_construct {
  RequestLogin() : Promise<Response>
  verifyInfo() : Number
  Reset() : string | void
}

interface Response {
  status_code: string,
  userName: string
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
  
    public RequestLogin = async () : Promise<Response> => {
      // Fetches user details and login information from the back-end
        // console.log(typeof(this.email))
        // console.log("Request sent");
        
        const url = `https://ampplex-backend.onrender.com/Login/${this.email}/${this.password}`;
        const response = await fetch(url);
        const data = await response.json();

        return data;
      }
      
      public verifyInfo = () : Number => {
      
      // Verifying if the user has entered the correct login information using the RequestLogin method of this class
      
      let userName: string;
      const resp: Promise<Response> = this.RequestLogin();

      resp.then((response: Response) => {
        if(response.status_code == "200") { 
          // If the user has entered the correct login information then navigating to the EnterCode Screen
          
          this.username = response.userName; // Retreiving userName returned by the backend server
          userName = this.username;
          
          showMessage({
            message: "Logined successfully!",
            type: "success",
            duration: 3000,
            floating: true, // This allows the message to be displayed even if the user scrolls
            icon: 'success', 
          });
  
          setTimeout(() => {
            console.log(userName);
            navigation.navigate("EnterCode", {userName})
          }, 680);
          return 0;
  
        } 
        else if (response.status_code == "404") {
          showMessage({
            message: "User not found try typing email manually",
            type: "danger",
            duration: 3000,
            floating: true, // This allows the message to be displayed even if the user scrolls
            icon: 'danger', 
          });
        }
        else if (this.password.length < 8) {
          showMessage({
            message: "Password length must be more than 8 characters",
            type: "danger",
            duration: 3000,
            floating: true, // This allows the message to be displayed even if the user scrolls
            icon: 'danger', 
          });
  
        }
        else if (this.email.length == 0 || this.password.length == 0) {
          showMessage({
            message: "Please fill all the details",
            type: "danger",
            duration: 3000,
            floating: true, // This allows the message to be displayed even if the user scrolls
            icon: 'danger', 
          });
        }
        else {
          showMessage({
            message: "Please enter your valid details!",
            type: "danger",
          });
  
        }
        return 1;
      }).catch((exception) => {
        console.log(exception);
        showMessage({
          message: "Some error occured :(",
          type: "danger",
        });
      });
      return 1;
    }
    
    public Reset = () : string | void => {
      // If user wishes to reset password his/her password

      return "Reset";
    }
  }

  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

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
      autoComplete={'off'}
      autoCorrect={false}
      value={email}
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
      value={password}
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
      login_inst.verifyInfo();
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
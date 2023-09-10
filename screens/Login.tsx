import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView ,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


interface Login_construct {
  RequestLogin() : Promise<void>
  Reset() : string | void
}

class Login_Btn_Handler implements Login_construct
{
  private email : string;
  private password : string;

  constructor(email: string, password: string){
    this.email = email;
    this.password = password;
  }

  public RequestLogin = async () : Promise<void> => {
      const url = `https://ampplex-backend.onrender.com/Login/${this.email}/${this.password}`;
      console.log("Request sent");
      const response = await fetch(url);
      const data = await response.json();

      if(data.status_code == "200") {
        console.log("Logined successfully")
      } else {
        console.log("Error")
      }
  }
  
  public Reset = () : string | void => {
    return "Reset";
  }
}

const Login = ({navigation}: any) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
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
        bottom : -Dimensions.get("screen").height * 0.035,
        left: Dimensions.get("screen").width * 0.14
      }}>
        <TouchableOpacity style={{
          backgroundColor: "#fff",
          width: 68,
          height: 30,
        }}
        onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={{
                  color: "#000",
                  fontFamily: "sans-serif-medium",
                  alignSelf: "center",
                  paddingTop: 5,
              }}>Reset</Text>
        </TouchableOpacity> 
      </View>
      {/* Forgot Password */}
      
      <Text style={{
        color: "black",
        fontFamily: "sans-serif-medium",
        position: "absolute",
        bottom : Dimensions.get("screen").height * 0.25,
        left: Dimensions.get("screen").width * 0.27,
      }}>Forgot password? </Text>
      
  </ScrollView>
    </>
  )
}

export default Login;

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
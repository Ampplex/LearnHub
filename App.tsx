import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Easing } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator,  TransitionPresets, CardStyleInterpolators, } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import { NavigationContainer } from "@react-navigation/native";
import Onboarding1 from './screens/Onboarding1';
import Login from './screens/Login';

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 220,
    easing: Easing.linear,
  },
};

export default function App() {

  const Stack = createStackNavigator();
  
  return (
    <>
     <NavigationContainer>

     <Stack.Navigator
                screenOptions={{
                  headerTitleAlign: "center",
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                  transitionSpec: {
                    open: config,
                    close: closeConfig,
                  },
                  headerMode: "float"
                }}
                animation="fade"
        >
    
      <Stack.Screen name="Onboarding1" component={Onboarding1} options={{
        headerShown: false
      }} />

          
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />
    
      {/* <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown: false
      }} /> */}

    </Stack.Navigator>

     </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
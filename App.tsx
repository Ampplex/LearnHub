import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Easing, Animated } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator,  TransitionPresets, CardStyleInterpolators, } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Onboarding1 from './screens/Onboarding1';
import Login from './screens/Login';
import ResetPassword from './screens/ResetPassword';
import Register from './screens/Register';
import EnterCode from './screens/EnterCode';
import ChatScreen from './screens/ChatScreen';
import Study from './screens/Study';

// Push to GitHub 'git push --set-upstream origin main'

type TransitionSpec =   | {
  animation: 'spring';
  config: Omit<
    Animated.SpringAnimationConfig,
    'toValue' | keyof Animated.AnimationConfig
  >;
}
| {
  animation: 'timing';
  config: Omit<
    Animated.TimingAnimationConfig,
    'toValue' | keyof Animated.AnimationConfig
  >;
};

const config: TransitionSpec  = {
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

const closeConfig: TransitionSpec = {
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
        >
    
      <Stack.Screen name="Onboarding1" component={Onboarding1} options={{
        headerShown: false
      }} />

          
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />

      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Register" component={Register} options={{
        headerShown: false
      }} />

      <Stack.Screen name="EnterCode" component={EnterCode} options={{
        headerShown: false
      }} />

      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{
        headerShown: false
      }} />

      <Stack.Screen name="Study" component={Study} options={{
        headerShown: false
      }} />

    </Stack.Navigator>

     </NavigationContainer>
      <StatusBar style="light" />
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

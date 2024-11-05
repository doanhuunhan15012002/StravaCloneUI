import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  OnboardingScreen,
  Exercise,
  WorkoutScreen,
  FitScreen,
  RestScreen,
} from './src/screens'
import BottomTab from './src/components/BottomTab'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
          <Stack.Screen name="BottomTab" component={BottomTab}/>
          <Stack.Screen options={{headerShown: true}} name="Exercise" component={Exercise} />
        <Stack.Screen options={{headerShown: true}} name="WorkoutScreen" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: true }} name="FitScreen" component={FitScreen} />
        <Stack.Screen options={{ headerShown: true }} name="RestScreen" component={RestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

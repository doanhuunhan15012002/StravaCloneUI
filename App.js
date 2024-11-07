import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Event from './src/screens/Event';
import Archive from './src/screens/Archive';
import Rank from './src/screens/RankView/GroupRank';
import EventTab from './src/components/EventTab'
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
          {/* Các màn hình không có tab */}
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />

          {/* Màn hình BottomTab sẽ là một màn hình chính trong Stack */}
          <Stack.Screen name="BottomTab" component={BottomTab} />

          {/* Các màn hình không có tab như Event, Archive, Rank */}
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="EventTab" component={EventTab} />
          <Stack.Screen name="Archive" component={Archive} />
          <Stack.Screen name="Rank" component={Rank} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

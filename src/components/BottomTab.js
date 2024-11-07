import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import Group from '../screens/Group';
import Profile from '../screens/Profile';

import Icon from 'react-native-vector-icons/Ionicons' // Import icon từ react-native-vector-icons

const Tab = createBottomTabNavigator()

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          // Chọn icon dựa vào tên của từng tab
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Group') {
            iconName = focused ? 'people' : 'people-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }

          // Trả về icon
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#42f44b', // Màu khi tab được chọn
        tabBarInactiveTintColor: 'gray',  // Màu khi tab không được chọn
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Group" component={Group} />
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      <Tab.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default BottomTab

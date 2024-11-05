import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import HeaderForm from '../components/HeaderForm'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <HeaderForm>Strava Clone</HeaderForm>
      <Paragraph>
        Sửa gì sửa đi
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}

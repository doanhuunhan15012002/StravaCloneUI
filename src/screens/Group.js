import React from 'react'
import GroupBackGround from '../components/GroupBackGround'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Alert, SafeAreaView, StyleSheet, Text } from 'react-native'


export default function Group({ navigation, title }) {
  return (
    <SafeAreaView style={{flex:1}}>
        <Header title={"Groups"}></Header>
        <GroupBackGround>
      <Button
        mode="inlined"
        style={styles.button}
        onPress={() =>
          navigation.navigate("OnboardingScreen")
        }
      >
        <Text 
            style={styles.text}
        >Tham gia sự kiện</Text>
      </Button>
    </GroupBackGround>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 10,
      paddingVertical: 2,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
      color: 'blue'
    },
  })

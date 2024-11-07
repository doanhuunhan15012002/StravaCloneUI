import React from 'react'
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
} from 'react-native'

function Archive({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar></StatusBar>
      <View>
        <Text>Welcome to</Text>
        <Text>Event chalenge 2024</Text>
      </View>
      <View style={styles.info}>
        <Image source={require('../assets/16.jpg')} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text>Chào buổi tối</Text>
          <Text>Nguyễn Thế Quang</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Archive
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
    color: 'blue',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center', // Căn giữa theo chiều dọc
    marginVertical: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 15,
    marginRight: 10, // Khoảng cách giữa ảnh và text
  },
  textContainer: {
    flexDirection: 'column' // Căn các dòng text theo cột
  },
})

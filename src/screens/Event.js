import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Header from '../components/Header';
import EventTab from '../components/EventTab';
import BottomTab from '../components/BottomTab';

export default function Event({ navigation, title,  }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Header
      navigation={navigation}
      showBackButton={true} //
      title={"Event"} />
      {/* Nếu EventTab là một navigator, bọc nó trong một màn hình riêng biệt */}
      <EventTab />
      {/* Nếu BottomTab cũng là một navigator, bọc nó trong một màn hình riêng biệt */}
      
    </SafeAreaView>
  );
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

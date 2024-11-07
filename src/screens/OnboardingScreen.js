import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
const {width, height} = Dimensions.get('window');
export default function OnboardingScreen(props) {
    //navigation
    const {navigation, route} = props
    //functions of navigate to/back
    const {navigate, goBack} = navigation
    const handleDone = ()=>{
        navigation.reset({
            index: 0,
            routes: [{ name: 'Event' }],
          })
    }
    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )       
    }
  return (
    <View style={styles.container}>
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            // bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal: 15}}
            pages={[
                {
                    backgroundColor: '#DDDDDD',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('../assets/animation/d.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Ghi gì ghi',
                    subtitle: 'Vào OnboardingScreen.js mà sửa',
                },
                {
                    backgroundColor: '#fef3c7',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('../assets/animation/b.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Ghi gì ghi',
                    subtitle: 'Vào OnboardingScreen.js mà sửa',
                },
                {
                    backgroundColor: 'white',
                    image: (
                        <View style={styles.lottie}>
                            <Lottie source={require('../assets/animation/c.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Ghi gì ghi',
                    subtitle: 'Vào OnboardingScreen.js mà sửa',
                },
            
            ]}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width
    },
    doneButton: {
        padding: 20,
    }
})
import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'


export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();


    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={{
                    backgroundColor: "#084F6A",
                    width: 150,
                    height: 150,
                    borderColor: "white",
                    borderWidth: 2,
                    opacity: opacity,
                }}>
                </Animated.View>
                <View style={{
                    flexDirection: 'row', marginTop: 10, justifyContent:'space-around'
                }}>
                    <View style={{  marginHorizontal: 50 }}>
                        <Button title="FadeOut" onPress={fadeOut}></Button>
                    </View>
                    <View style={{  marginHorizontal: 50 }}>
                        <Button title="FadeIn" onPress={fadeIn}></Button>
                    </View>


                </View>


            </View>


        </>
    )
}

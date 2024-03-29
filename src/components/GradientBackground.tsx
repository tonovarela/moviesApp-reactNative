import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientsContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}
export const GradientBackground = ({ children }: Props) => {
    const { colors, prevColors,setPrevMainColors } = useContext(GradientContext);
    const { opacity, fadeIn,fadeOut } = useFade();
    useEffect(() => {
        fadeIn(()=>{
            setPrevMainColors(colors);
            fadeOut(200);
        });
    }, [colors])


    return (
        <View style={{ flex:1 }}>            
            <LinearGradient colors={[prevColors.primary, prevColors.secondary, 'white']} style={{ ...StyleSheet.absoluteFillObject }} start={{ x: 0.1, y: 0.1 }} end={{ x: 0.5, y: 0.5 }} />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >                
                <LinearGradient colors={[colors.primary, colors.secondary, 'white']} style={{ ...StyleSheet.absoluteFillObject }} start={{ x: 0.1, y: 0.1 }} end={{ x: 0.5, y: 0.5 }} />
            </Animated.View>
            {children}
            

        </View>
    )
}

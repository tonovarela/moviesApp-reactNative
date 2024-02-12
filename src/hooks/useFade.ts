import { useRef } from "react";
import { Animated } from "react-native";

export const useFade = () => {

    const opacity = useRef(new Animated.Value(1)).current;
    const fadeOut = (duration=300) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration,
            useNativeDriver: true
        }).start()


    }
    const fadeIn = (cb?:Function) => {        
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(()=>cb && cb())

    }


    return {
        fadeIn, fadeOut,opacity
    }


}
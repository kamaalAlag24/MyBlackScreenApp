import { useRef } from "react";
import { Animated } from "react-native";
import { State } from "react-native-gesture-handler";


export const translateX = useRef(new Animated.Value(0)).current;
export const translateY = useRef(new Animated.Value(0)).current;


    export const onGestureEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: translateX,
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true } 
    );

    export const onHandlerStateChange = (event: { nativeEvent: { oldState: any; }; }) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(translateX, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
            Animated.spring(translateY, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    };
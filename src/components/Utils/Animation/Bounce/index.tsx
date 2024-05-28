
import { useRef } from 'react';
import { Animated } from 'react-native';

export const value = useRef(new Animated.Value(0)).current;

  export const moveCircle = () => {
    Animated.sequence([
      Animated.spring(value, {
        toValue: -100,
        useNativeDriver: true,
        speed: 12,
        bounciness: 20
      }),
      Animated.spring(value, {
        toValue: 0, 
        useNativeDriver: true,
        speed: 12,
        bounciness: 20
      })
    ]).start();
  };
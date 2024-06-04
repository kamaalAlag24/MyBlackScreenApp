import {useRef} from 'react';
import {Animated} from 'react-native';
import {State} from 'react-native-gesture-handler';

export const useAnimatedValues = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChange = (event: {nativeEvent: {oldState: any}}) => {
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

  return {
    translateX,
    translateY,
    onGestureEvent,
    onHandlerStateChange,
  };
};

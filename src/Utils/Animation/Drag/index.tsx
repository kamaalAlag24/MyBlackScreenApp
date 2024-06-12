import React, {useRef} from 'react';
import {Animated, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {styles} from '../../../Hooks/useState/count'; // Ensure this path is correct
import {Button} from '../../../components/button';

export const AnimatedGestureComponent = () => {
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

  const onHandlerStateChange = (event: {nativeEvent: {oldState: number}}) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateX, {
        toValue: 0,
        damping: 10,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        damping: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  const moveCircle = () => {
    // Define what should happen when the button is pressed
    console.log('Circle moved');
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View
            style={[
              styles.circle,
              {
                transform: [{translateX: translateX}, {translateY: translateY}],
              },
            ]}
          />
        </PanGestureHandler>
        <View style={styles.buttonContainer} />
        <Button variant="primary" onPress={moveCircle} />
      </View>
    </GestureHandlerRootView>
  );
};

// import React from 'react';
// import {SafeAreaView, StyleSheet} from 'react-native';
// import {AnimatedGestureComponent} from './src/Utils/Animation/Drag';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <AnimatedGestureComponent />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     width: '100%',
//   },
//   circle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'red',
//     position: 'absolute',
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 50,
//   },
// });

// export default App;

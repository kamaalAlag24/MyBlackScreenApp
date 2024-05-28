import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Button } from './src/components/Button'; 
import { moveCircle, value } from './src/components/Utils/Animation/Bounce';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import { onGestureEvent, onHandlerStateChange, translateX, translateY } from './src/components/Utils/Animation/Drag';

const App = () => {
//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.circle,
//           {
//             transform: [{ translateY: value }]
//           }
//         ]}
//       />
//       <View style={styles.buttonContainer}>
//         <Button variant="primary" onPress={moveCircle}></Button>
//       </View>
//     </View>
//   );
// };

return (
  <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
          <PanGestureHandler
              onGestureEvent={onGestureEvent}
              >
              <Animated.View
                  style={[
                      styles.circle,
                      {
                          transform: [
                              { translateX },
                              { translateY },
                              { translateY: value }
                          ]
                      }
                  ]}
                  
              />
          </PanGestureHandler>
          <View style={styles.buttonContainer}>
        <Button variant="primary" onPress={moveCircle}></Button>
      </View>
      </View>
  </GestureHandlerRootView>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    position: 'absolute'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50 
  }
});

export default App;


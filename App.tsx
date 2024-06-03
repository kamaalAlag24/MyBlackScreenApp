// import React from 'react';
// import { StyleSheet, View, Animated } from 'react-native';
// import { Button } from './src/components/Button'; 
// import { moveCircle, value } from './src/components/Utils/Animation/Bounce';
// import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
// import { onGestureEvent, onHandlerStateChange, translateX, translateY } from './src/components/Utils/Animation/Drag';

import { Button, SafeAreaView, Text, View } from "react-native";
import { MyComponent, styles } from "./src/hooks/useState/count";


// const App = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Animated.View
// //         style={[
// //           styles.circle,
// //           {
// //             transform: [{ translateY: value }]
// //           }
// //         ]}
// //       />
// //       <View style={styles.buttonContainer}>
// //         <Button variant="primary" onPress={moveCircle}></Button>
// //       </View>
// //     </View>
// //   );
// // };

// return (
//   <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//           <PanGestureHandler
//               onGestureEvent={onGestureEvent}
//               >
//               <Animated.View
//                   style={[
//                       styles.circle,
//                       {
//                           transform: [
//                               { translateX },
//                               { translateY },
//                               { translateY: value }
//                           ]
//                       }
//                   ]}
                  
//               />
//           </PanGestureHandler>
//           <View style={styles.buttonContainer}>
//         <Button variant="primary" onPress={moveCircle}></Button>
//       </View>
//       </View>
//   </GestureHandlerRootView>
// );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white', 
//   },
//   circle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: 'red',
//     position: 'absolute'
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 50 
//   }
// }); 

// export default App;

// const App = () => {
//   return (
//       <View style = {styles.container}>
//           <MyComponent />
//       </View>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { FavoriteColor } from "./src/Hooks/useState/colour";
// import { Counter } from "./src/Hooks/useRef";

// const App = () => { // code for useref,uses

//   return (
//     <SafeAreaView style={styles.container}>
//        <MyComponent/>    code for usestate
//       <FavoriteColor/>   code for usestate
//       <Counter/>         code for useref
//       </SafeAreaView>
     
//   );
// }

// export default App;

// import React, { useMemo, useState } from 'react';
// import { ExpensiveComponent } from "./src/Hooks/useMemo";



// const App = () => {
//   const [count, setCount] = useState(0);   // useMemo

//   return (
//     <SafeAreaView style={styles.container}>
//       <Button title="Increment Count" onPress={() => setCount(count + 1)} />
//       <Text>Count: {count}</Text>
//       <ExpensiveComponent />
//     </SafeAreaView>
//   );
// };

// export default App;

import React, { useCallback, useState } from "react";
import { MemoizedComponent } from "./src/hooks/useCallBack";



const App = () => {
   const [count, setCount] = useState(0);
   
  
   const memoizedCallback = useCallback(() => {   
    console.log('Callback invoked');
    
    setCount(count + 1);
  }, 
  [count]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <MemoizedComponent onPress={memoizedCallback} />  
    </SafeAreaView>
  );
};

 export default App;


// import React from 'react';
// import { StyleSheet } from 'react-native';
// import Calc from "./src/Hooks/useEffect";


// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Calc />
//     </SafeAreaView>
//   );
// };



// export default App;

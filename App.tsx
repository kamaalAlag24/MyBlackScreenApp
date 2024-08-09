// import React from 'react';
// import { Provider } from 'react-redux';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import from react-native-vector-icons
// import store from './src/store/store';
// import SignInScreen from './src/Hooks/useForm';
// import HomeScreen from './src/components/screens/homescreen/homeScreen';
// import SettingsScreen from './src/components/screens/settingscreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

// function SettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// }

// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="SettingsStack"
//         component={SettingsStack}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="SignIn">
//           <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import store from './src/store/store';
// import SignInScreen from './src/Hooks/useForm';
// import HomeScreen from './src/components/screens/homescreen/homeScreen';
// import SettingsScreen from './src/components/screens/settingscreen';
// import RegisterScreen from './src/components/screens/register';


// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

// function SettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// }

// function RegisterStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Register" component={RegisterScreen} />
//     </Stack.Navigator>
//   );
// }

// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="RegisterStack"
//         component={RegisterStack}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Register',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account-plus" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="SettingsStack"
//         component={SettingsStack}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Settings',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="cog" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="SignIn">
//           <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import from react-native-vector-icons
import store from './src/store/store';
import SignInScreen from './src/Hooks/useForm';
import HomeScreen from './src/components/screens/homescreen/homeScreen';
import SettingsScreen from './src/components/screens/settingscreen';
import RegisterScreen from './src/components/screens/register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function RegisterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RegisterStack"
        component={RegisterStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Register',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

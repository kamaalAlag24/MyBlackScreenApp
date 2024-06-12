// import React from 'react';
// import {Text, TextInput, StyleSheet} from 'react-native';
// import {useForm, Controller} from 'react-hook-form';
// import {Button} from '../../components/button';
// import {View} from '@ant-design/react-native';

// export const SignInScreen = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm({
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Sign in to YouTube</Text>

//       <Controller
//         control={control}
//         rules={{required: 'Email is required'}}
//         render={({field: {onChange, onBlur, value}}) => (
//           <TextInput
//             placeholder="Email"
//             style={styles.input}
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//         name="email"
//       />
//       {errors.email && (
//         <Text style={styles.errorText}>{errors.email.message}</Text>
//       )}

//       <Controller
//         control={control}
//         rules={{
//           required: 'Password is required',
//           minLength: {
//             value: 6,
//             message: 'Password must be at least 6 characters long',
//           },
//         }}
//         render={({field: {onChange, onBlur, value}}) => (
//           <TextInput
//             placeholder="Password"
//             style={styles.input}
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             secureTextEntry
//           />
//         )}
//         name="password"
//       />
//       {errors.password && (
//         <Text style={styles.errorText}>{errors.password.message}</Text>
//       )}

//       <Button
//         variant="primary"
//         title="Sign In"
//         onPress={handleSubmit(onSubmit)}
//       />
//     </View>
//   );
// };

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 10,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 5,
//   },
// });

// export default SignInScreen;

import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Button} from '../../components/button';
import {View} from '@ant-design/react-native';

export const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in to YouTube</Text>

      <Controller
        control={control}
        rules={{required: 'Email is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Email"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Password"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <Button
        variant="primary"
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default SignInScreen;

// import React from 'react';
// import {SafeAreaView} from 'react-native';
// import SignInScreen, {styles} from './src/Hooks/useForm';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <SignInScreen />
//     </SafeAreaView>
//   );
// };

// export default App;

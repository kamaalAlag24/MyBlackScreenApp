

// import React from 'react';
// import {Alert, Text, TextInput, StyleSheet, Button} from 'react-native';
// import {useForm, Controller} from 'react-hook-form';
// import {View} from 'react-native';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type RootStackParamList = {
//   SignIn: undefined;
//   Home: undefined;
// };

// type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

// const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
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

//   const onSubmit = (data: {email: any; password: any}) => {
//     console.log('Form Data:', data);

//     const apiUrl = 'https://reqres.in/api/login';

//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: data.email,
//         password: data.password, // make sure this is potentially empty for testing
//       }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           // Parse the error response and throw it
//           return response.json().then(err => {
//             console.log(err); // Log the entire error object from the API
//             throw new Error(err.error || `HTTP status ${response.status}`);
//           });
//         }
//         return response.json(); // Continue to process a valid response
//       })
//       .then(json => {
//         if (json.token) {
//           console.log('Received Token:', json.token);
//           Alert.alert('Login Successful', 'You have successfully logged in!');
//           navigation.navigate('Home');
//         } else {
//           Alert.alert('Login Failed', 'No token received, check credentials.');
//         }
//       })
//       .catch(error => {
//         console.error('Login Error:', error);
//         Alert.alert('Login Error', error.message); // Show the error message in an alert
//       });
//   };

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

//       <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
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

// 
import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  SignIn: undefined;
  HomeTabs: undefined;
};

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log('Form Data:', data);

    const apiUrl = 'https://reqres.in/api/login';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            console.log(err);
            throw new Error(err.error || `HTTP status ${response.status}`);
          });
        }
        return response.json();
      })
      .then(json => {
        if (json.token) {
          console.log('Received Token:', json.token);
          Alert.alert('Login Successful', 'You have successfully logged in!');
          navigation.navigate('HomeTabs');
        } else {
          Alert.alert('Login Failed', 'No token received, check credentials.');
        }
      })
      .catch(error => {
        console.error('Login Error:', error);
        Alert.alert('Login Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Sign In to your account</Text>

      <Controller
        control={control}
        rules={{ required: 'Email is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="john@gmail.com"
            placeholderTextColor="#ccc"
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
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
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

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot your Password?</Text>
      <Text style={styles.createAccount}>Don't have an account? <Text style={styles.createAccountLink}>Create</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FD3A69',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#666',
    marginBottom: 20,
  },
  createAccount: {
    color: '#666',
  },
  createAccountLink: {
    color: '#FD3A69',
    fontWeight: 'bold',
  },
});

export default SignInScreen;

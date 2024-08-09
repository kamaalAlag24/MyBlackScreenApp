// import React from 'react';
// import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { addUser } from '../../../slices/userSlices';
// import { RootStackParamList } from '../../../navigation/navigationTypes';
// import ImagePickerComponent from '../../image';
// import { ImageProvider } from '../../../context/imagepicker';

// type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

// const RegisterScreen: React.FC<Props> = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       email: '',
//       first_name: '',
//       last_name: '',
//     },
//   });

//   const onSubmit = (data: { email: string; first_name: string; last_name: string }) => {
//     const newUser = { ...data, id: Date.now() };
//     dispatch(addUser(newUser));
//     Alert.alert('Registration Successful', 'You have successfully registered!');
//     navigation.navigate('HomeTabs', { screen: 'HomeStack', params: { screen: 'Home' } });
//   };

//   return (
//     <ImageProvider>
//       <View style={styles.container}>
//         <Text style={styles.header}>Register</Text>
//         <ImagePickerComponent />
//         <Controller
//           control={control}
//           rules={{ required: 'Email is required' }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               placeholder="Email"
//               style={styles.input}
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//             />
//           )}
//           name="email"
//         />
//         {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
//         <Controller
//           control={control}
//           rules={{ required: 'First name is required' }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               placeholder="First Name"
//               style={styles.input}
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//             />
//           )}
//           name="first_name"
//         />
//         {errors.first_name && <Text style={styles.errorText}>{errors.first_name.message}</Text>}
//         <Controller
//           control={control}
//           rules={{ required: 'Last name is required' }}
//           render={({ field: { onChange, onBlur, value } }) => (
//             <TextInput
//               placeholder="Last Name"
//               style={styles.input}
//               onBlur={onBlur}
//               onChangeText={onChange}
//               value={value}
//             />
//           )}
//           name="last_name"
//         />
//         {errors.last_name && <Text style={styles.errorText}>{errors.last_name.message}</Text>}
//         <Button title="Register" onPress={handleSubmit(onSubmit)} />
//       </View>
//     </ImageProvider>
//   );
// };

// const styles = StyleSheet.create({
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

// export default RegisterScreen;

import React, {useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {addUser} from '../../slices/userSlices';
import {RootStackParamList} from '../../navigation/navigationTypes';
import {ImageContext} from '../../context/imagePicker';
import ImagePickerComponent from '../../components/ImageUpload';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {image, setImage} = useContext(ImageContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      first_name: '',
      last_name: '',
    },
  });

  const onSubmit = (data: {
    email: string;
    first_name: string;
    last_name: string;
  }) => {
    const newUser = {...data, avatar: image, id: Date.now()};
    dispatch(addUser(newUser));
    Alert.alert('Registration Successful', 'You have successfully registered!');
    setImage(null); // Reset the image
    reset(); // Reset the form fields
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Register</Text>
        <ImagePickerComponent />
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
          rules={{required: 'First name is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="First Name"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="first_name"
        />
        {errors.first_name && (
          <Text style={styles.errorText}>{errors.first_name.message}</Text>
        )}
        <Controller
          control={control}
          rules={{required: 'Last name is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="last_name"
        />
        {errors.last_name && (
          <Text style={styles.errorText}>{errors.last_name.message}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c669f', // Updated background color
    paddingTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../../store/store';
// import { setSelectedUser } from '../../../slices/userSlices';
// import { useNavigation } from '@react-navigation/native';
// import { IconButton } from 'react-native-paper';

// const SettingsScreen: React.FC = () => {
//   const selectedUser = useSelector((state: RootState) => state.user.selectedUser);
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const handleClearUser = () => {
//     dispatch(setSelectedUser(undefined));
//     navigation.navigate('SignIn');
//   };

//   if (!selectedUser) {
//     return (
//       <View style={styles.noUserContainer}>

//         <Text style={styles.noUserText}>No user selected</Text>
//         <Text style={styles.noUserSubText}>Please select a user from the Home screen.</Text>
//         <TouchableOpacity style={styles.logoutButton} onPress={handleClearUser}>
//         <Text style={styles.logoutButtonText}>Log out</Text>
//       </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.profileHeader}>
//         <Image source={{ uri: selectedUser.avatar }} style={styles.avatar} />
//         <Text style={styles.name}>{selectedUser.first_name} {selectedUser.last_name}</Text>
//       </View>
//       <View style={styles.profileInfo}>
//         <Text style={styles.infoLabel}>Email:</Text>
//         <Text style={styles.infoValue}>{selectedUser.email}</Text>
//         <Text style={styles.infoLabel}>Role:</Text>
//         <Text style={styles.infoValue}>User</Text>
//       </View>
//       <TouchableOpacity style={styles.logoutButton} onPress={handleClearUser}>
//         <Text style={styles.logoutButtonText}>Log out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   profileHeader: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   profileInfo: {
//     width: '80%',
//     marginBottom: 30,
//   },
//   infoLabel: {
//     fontSize: 18,
//     color: '#777',
//     marginBottom: 5,
//   },
//   infoValue: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   logoutButton: {
//     width: '80%',
//     padding: 15,
//     backgroundColor: '#f00',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   logoutButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   noUserContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   noUserIcon: {
//     marginBottom: 20,
//   },
//   noUserText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   noUserSubText: {
//     fontSize: 16,
//     color: '#777',
//   },
// });

// export default SettingsScreen;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import {setSelectedUser} from '../../slices/userSlices';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen: React.FC = () => {
  const selectedUser = useSelector(
    (state: RootState) => state.user.selectedUser,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleClearUser = () => {
    dispatch(setSelectedUser(undefined));
    navigation.navigate('SignIn');
  };

  if (!selectedUser) {
    return (
      <View style={styles.noUserContainer}>
        <Text style={styles.noUserText}>No user selected</Text>
        <Text style={styles.noUserSubText}>
          Please select a user from the Home screen.
        </Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleClearUser}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{uri: selectedUser.avatar}} style={styles.avatar} />
        <Text style={styles.name}>
          {selectedUser.first_name} {selectedUser.last_name}
        </Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{selectedUser.email}</Text>
        <Text style={styles.infoLabel}>Role:</Text>
        <Text style={styles.infoValue}>User</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleClearUser}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c669f',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  profileInfo: {
    width: '80%',
    marginBottom: 30,
    color: 'white',
  },
  infoLabel: {
    fontSize: 18,
    color: '#777',
    marginBottom: 5,
    color: 'white',
  },
  infoValue: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  logoutButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#f00',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  noUserContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noUserIcon: {
    marginBottom: 20,
  },
  noUserText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noUserSubText: {
    fontSize: 16,
    color: '#777',
  },
});

export default SettingsScreen;

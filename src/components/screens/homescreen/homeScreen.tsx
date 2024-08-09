// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';
// import { RootState } from '../../../store/store';
// import { setUsers, setSelectedUser } from '../../../slices/userSlices';

// const HomeScreen: React.FC = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state: RootState) => state.user.users);
//   const loading = useSelector((state: RootState) => state.user.loading);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetch('https://reqres.in/api/users')
//       .then(response => response.json())
//       .then(data => {
//         dispatch(setUsers(data.data));
//       });
//   }, [dispatch]);

//   const handleSelectUser = (user: any) => {
//     dispatch(setSelectedUser(user));
//     navigation.navigate('SettingsStack', { screen: 'Settings' });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Hello ReqRes users!</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <FlatList
//           data={users}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handleSelectUser(item)}>
//               <View style={styles.userItem}>
//                 <Image source={{ uri: item.avatar }} style={styles.avatar} />
//                 <View style={styles.userInfo}>
//                   <Text style={styles.userName}>{item.first_name} {item.last_name}</Text>
//                   <Text style={styles.userEmail}>{item.email}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     margin: 20,
//     textAlign: 'center',
//   },
//   userItem: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     marginHorizontal: 10,
//     borderRadius: 10,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   userInfo: {
//     marginLeft: 10,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   userEmail: {
//     fontSize: 16,
//     color: '#555',
//   },
// });

// export default HomeScreen;

import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setSelectedUser } from '../../../slices/userSlices';
import { RootState } from '../../../store/store';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserPress = (user: any) => {
    dispatch(setSelectedUser(user));
    navigation.navigate('Settings');
  };

  const renderUser = ({ item }: any) => (
    <TouchableOpacity onPress={() => handleUserPress(item)} style={styles.userItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.first_name} {item.last_name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello ReqRes users!</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c669f',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  listContent: {
    paddingBottom: 20,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;


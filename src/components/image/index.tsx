// import React, {useContext, useState} from 'react';
// import {View, Button, Image, Text} from 'react-native';
// import {
//   launchCamera,
//   launchImageLibrary,
//   CameraOptions,
//   ImageLibraryOptions,
// } from 'react-native-image-picker';
// import {ImageContext} from '../../context/imagePicker/imageContext';

// const ImagePickerComponent = () => {
//   const {image, setImage} = useContext(ImageContext);
//   const [error, setError] = useState<string | null>(null);

//   const cameraOptions: CameraOptions = {
//     mediaType: 'photo',
//   };

//   const libraryOptions: ImageLibraryOptions = {
//     mediaType: 'photo',
//   };

//   const openGallery = async () => {
//     try {
//       const result = await launchImageLibrary(libraryOptions);
//       if (result.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (result.errorCode) {
//         console.log('ImagePicker Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (
//         result.assets &&
//         result.assets.length > 0 &&
//         result.assets[0].uri
//       ) {
//         setImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error opening gallery: ', error);
//       setError('An error occurred while opening the gallery');
//     }
//   };

//   const openCamera = async () => {
//     try {
//       const result = await launchCamera(cameraOptions);
//       if (result.didCancel) {
//         console.log('User cancelled camera picker');
//       } else if (result.errorCode) {
//         console.log('Camera Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (
//         result.assets &&
//         result.assets.length > 0 &&
//         result.assets[0].uri
//       ) {
//         setImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error opening camera: ', error);
//       setError('An error occurred while opening the camera');
//     }
//   };

//   return (
//     <View>
//       <Button title="Open Gallery" onPress={openGallery} />
//       <Button title="Open Camera" onPress={openCamera} />
//       {image && (
//         <Image source={{uri: image}} style={{width: 200, height: 200}} />
//       )}
//       {error && (
//         <View>
//           <Text style={{color: 'red'}}>{error}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default ImagePickerComponent;

// import React, { useContext, useState } from 'react';
// import { View, Button, Image, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// import {
//   launchCamera,
//   launchImageLibrary,
//   CameraOptions,
//   ImageLibraryOptions,
// } from 'react-native-image-picker';
// import { ImageContext } from '../../context/imagepicker';

// const ImagePickerComponent = () => {
//   const { image, setImage } = useContext(ImageContext);
//   const [showOptions, setShowOptions] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const cameraOptions: CameraOptions = {
//     mediaType: 'photo',
//   };

//   const libraryOptions: ImageLibraryOptions = {
//     mediaType: 'photo',
//   };

//   const openGallery = async () => {
//     try {
//       const result = await launchImageLibrary(libraryOptions);
//       if (result.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (result.errorCode) {
//         console.log('ImagePicker Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         setImage(result.assets[0].uri);
//         setShowOptions(false);
//       }
//     } catch (error) {
//       console.error('Error opening gallery: ', error);
//       setError('An error occurred while opening the gallery');
//     }
//   };

//   const openCamera = async () => {
//     try {
//       const result = await launchCamera(cameraOptions);
//       if (result.didCancel) {
//         console.log('User cancelled camera picker');
//       } else if (result.errorCode) {
//         console.log('Camera Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         setImage(result.assets[0].uri);
//         setShowOptions(false);
//       }
//     } catch (error) {
//       console.error('Error opening camera: ', error);
//       setError('An error occurred while opening the camera');
//     }
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={() => setShowOptions(true)}>
//         <View style={styles.imageContainer}>
//           {image ? (
//             <Image source={{ uri: image }} style={styles.image} />
//           ) : (
//             <Text style={styles.addPhotoText}>Add Photo</Text>
//           )}
//         </View>
//       </TouchableOpacity>
//       <Modal
//         visible={showOptions}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setShowOptions(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity onPress={openCamera} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Take photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={openGallery} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Choose photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => setShowOptions(false)} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       {error && (
//         <View>
//           <Text style={{ color: 'red' }}>{error}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imageContainer: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#ddd',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 50,
//   },
//   addPhotoText: {
//     color: '#000',
//     textAlign: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     alignItems: 'center',
//   },
//   modalButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginVertical: 10,
//   },
//   modalButtonText: {
//     fontSize: 18,
//   },
// });

// export default ImagePickerComponent;

// import React, { useContext, useState } from 'react';
// import { View, Button, Image, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
// import { ImageContext } from '../../context/imagePicker';

// const ImagePickerComponent = () => {
//   const { image, setImage } = useContext(ImageContext);
//   const [error, setError] = useState<string | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const cameraOptions: CameraOptions = {
//     mediaType: 'photo',
//   };

//   const libraryOptions: ImageLibraryOptions = {
//     mediaType: 'photo',
//   };

//   const openGallery = async () => {
//     try {
//       const result = await launchImageLibrary(libraryOptions);
//       if (result.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (result.errorCode) {
//         console.log('ImagePicker Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         setImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error opening gallery: ', error);
//       setError('An error occurred while opening the gallery');
//     }
//     setModalVisible(false);
//   };

//   const openCamera = async () => {
//     try {
//       const result = await launchCamera(cameraOptions);
//       if (result.didCancel) {
//         console.log('User cancelled camera picker');
//       } else if (result.errorCode) {
//         console.log('Camera Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         setImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error opening camera: ', error);
//       setError('An error occurred while opening the camera');
//     }
//     setModalVisible(false);
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addPhotoButton}>
//         <Text style={styles.addPhotoText}>Add Photo</Text>
//       </TouchableOpacity>
//       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       {error && (
//         <View>
//           <Text style={{ color: 'red' }}>{error}</Text>
//         </View>
//       )}

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity onPress={openCamera} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Take Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={openGallery} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Choose Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   addPhotoButton: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   addPhotoText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   modalButton: {
//     padding: 10,
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   modalButtonText: {
//     fontSize: 16,
//     color: '#007bff',
//   },
// });

// export default ImagePickerComponent;

// import React, { useContext, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
// import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
// import { ImageContext } from '../../context/imagePicker';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const ImagePickerComponent = () => {
//   const { image, setImage } = useContext(ImageContext);
//   const [error, setError] = useState<string | null>(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const cameraOptions: CameraOptions = {
//     mediaType: 'photo',
//   };

//   const libraryOptions: ImageLibraryOptions = {
//     mediaType: 'photo',
//   };

//   const openGallery = async () => {
//     try {
//       const result = await launchImageLibrary(libraryOptions);
//       if (result.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (result.errorCode) {
//         console.log('ImagePicker Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         setImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error opening gallery: ', error);
//       setError('An error occurred while opening the gallery');
//     }
//     setModalVisible(false);
//   };

//   const openCamera = async () => {
//     try {
//       const result = await launchCamera(cameraOptions);
//       if (result.didCancel) {
//         console.log('User cancelled camera picker');
//       } else if (result.errorCode) {
//         console.log('Camera Error: ', result.errorMessage);
//         setError(result.errorMessage || 'Unknown error occurred');
//       } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
//         setImage(result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error opening camera: ', error);
//       setError('An error occurred while opening the camera');
//     }
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addPhotoButton}>
//         {image ? (
//           <Image source={{ uri: image }} style={styles.avatar} />
//         ) : (
//           <View style={styles.iconContainer}>
//             <Icon name="camera" size={24} color="#fff" />
//             <Text style={styles.addPhotoText}>Add Photo</Text>
//           </View>
//         )}
//       </TouchableOpacity>
//       {error && (
//         <View>
//           <Text style={{ color: 'red' }}>{error}</Text>
//         </View>
//       )}

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <TouchableOpacity onPress={openCamera} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Take Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={openGallery} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Choose Photo</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   addPhotoButton: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 50,
//     width: 100,
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addPhotoText: {
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     width: '100%',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   modalButton: {
//     padding: 15,
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   modalButtonText: {
//     fontSize: 16,
//     color: '#007bff',
//   },
// });

// export default ImagePickerComponent;

import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert, Image } from 'react-native';
import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
import { ImageContext } from '../../context/imagePicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImagePickerComponent = () => {
  const { image, setImage } = useContext(ImageContext);
  const [error, setError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const cameraOptions: CameraOptions = {
    mediaType: 'photo',
  };

  const libraryOptions: ImageLibraryOptions = {
    mediaType: 'photo',
  };

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary(libraryOptions);
      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorCode) {
        console.log('ImagePicker Error: ', result.errorMessage);
        setError(result.errorMessage || 'Unknown error occurred');
      } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
        console.log('Image selected from gallery: ', result.assets[0].uri);
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error opening gallery: ', error);
      setError('An error occurred while opening the gallery');
    }
    setModalVisible(false);
  };

  const openCamera = async () => {
    try {
      const result = await launchCamera(cameraOptions);
      if (result.didCancel) {
        console.log('User cancelled camera picker');
      } else if (result.errorCode) {
        console.log('Camera Error: ', result.errorMessage);
        setError(result.errorMessage || 'Unknown error occurred');
      } else if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
        console.log('Image captured from camera: ', result.assets[0].uri);
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error opening camera: ', error);
      setError('An error occurred while opening the camera');
    }
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addPhotoButton}>
        <View style={styles.addPhotoIconContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.avatar} />
          ) : (
            <>
              <Icon name="camera" size={50} color="#007bff" />
              <Text style={styles.addPhotoText}>Add Photo</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
      {error && (
        <View>
          <Text style={{ color: 'red' }}>{error}</Text>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={openCamera} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openGallery} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Choose Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  addPhotoButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  addPhotoIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  addPhotoIcon: {
    fontSize: 40,
    color: '#007bff',
  },
  addPhotoText: {
    fontSize: 16,
    color: '#007bff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalButton: {
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default ImagePickerComponent;

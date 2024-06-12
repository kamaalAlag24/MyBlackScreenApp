// CustomModal.tsx
import React from 'react';
import {Modal, View, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from '../button';
import MyComponent from '../../Hooks/useState/count';

interface CustomModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.centeredView}>
        <SafeAreaView style={styles.modalView}>
          <MyComponent />
          <Button
            variant="link"
            title="Close Modal"
            onPress={() => setModalVisible(false)}
          />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    width: 200,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CustomModal;

// import React, {useState} from 'react';
// import {View} from 'react-native';
// import CustomModal from './src/components/modal/modal';
// import {Button} from './src/components/button';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Button
//         variant="link"
//         title="Show Modal"
//         onPress={() => setModalVisible(true)}
//       />
//       <CustomModal
//         modalVisible={modalVisible}
//         setModalVisible={setModalVisible}
//       />
//     </View>
//   );
// };

// export default App;

import React, {useRef} from 'react';
import {Animated, View} from 'react-native';
import {styles as importedStyles} from '../../../Hooks/useState/count';
import {Button} from '../../../components/button';

export const MyAnimatedComponent = () => {
  const value = useRef(new Animated.Value(0)).current;

  const moveCircle = () => {
    Animated.sequence([
      Animated.spring(value, {
        toValue: -100,
        useNativeDriver: true,
        speed: 12,
        bounciness: 20,
      }),
      Animated.spring(value, {
        toValue: 0,
        useNativeDriver: true,
        speed: 12,
        bounciness: 20,
      }),
    ]).start();
  };

  return (
    <View style={importedStyles.container}>
      <Animated.View
        style={[importedStyles.circle, {transform: [{translateY: value}]}]}
      />
      <Button variant="primary" onPress={moveCircle} />
    </View>
  );
};

export default MyAnimatedComponent;

import React from 'react';
import {useRef} from 'react';
import {Alert, Button} from 'react-native';

export const Counter = () => {
  const count = useRef(0);

  const handlePress = () => {
    count.current = count.current + 1;
    Alert.alert('You clicked ' + count.current + ' times!');
  };

  return <Button title="Click me!" onPress={handlePress} />;
};

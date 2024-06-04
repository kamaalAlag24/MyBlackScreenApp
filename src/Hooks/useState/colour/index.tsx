import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../count';

export const FavoriteColor = () => {
  const [color, setColor] = useState('red');

  return (
    <View style={styles.container}>
      <Text>My favorite color is {color}!</Text>
      <Button title="Blue" onPress={() => setColor('blue')} color={'blue'} />
      <Button title="Red" onPress={() => setColor('red')} color={'red'} />
      <Button title="Pink" onPress={() => setColor('pink')} color={'pink'} />
      <Button title="Green" onPress={() => setColor('green')} color={'green'} />
    </View>
  );
};

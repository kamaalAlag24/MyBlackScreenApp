import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../useState/count';

export const Calc = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Text>Calculation: {calculation}</Text>
    </View>
  );
};

export default Calc;

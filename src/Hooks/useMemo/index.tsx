import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

export const ExpensiveComponent = () => {
  const memoizedExpensiveFunction = useMemo(() => {
    console.log('Expensive function executed');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <View>
      <Text>Memoized Value: {memoizedExpensiveFunction}</Text>
    </View>
  );
};

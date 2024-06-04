import React from 'react';
import {View, Text, Button} from 'react-native';

type MemoizedComponentProps = {
  onPress: () => void;
};

export const MemoizedComponent: React.FC<MemoizedComponentProps> = React.memo(
  ({onPress}) => {
    return (
      <View>
        <Text>Memoized Component</Text>
        <Button title="Press Me" onPress={onPress} />
      </View>
    );
  },
);

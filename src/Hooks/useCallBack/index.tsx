import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';



export const MemoizedComponent = ({ onPress }) => {
    return (
      <View>
        <Text>Memoized Component</Text>
        <Button title="Press Me" onPress={onPress} />
      </View>
    );
  }
  
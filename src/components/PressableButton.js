import React from 'react';
import { View, Text, Pressable } from 'react-native';

const PressableButton = () => {
  return (
    <Pressable style={{
      padding: 10,
      backgroundColor: '#1abc9c',
    }}
    onPressIn = {() => console.log('PressIn \n')}
    onPressOut = {() => console.log('PressOut \n')}
    onPress = {() => console.log('Press \n')}
    onLongPress = {() => console.log('Long Press \n')}
    pressRetentionOffset = {
      {
        bottom: 50,
        left: 50,
        right: 50,
        top: 50
      }
    }
    hitSlop={50}
    >
      <Text style={{padding: 10, fontSize: 30}}>title</Text>

    </Pressable>
  );
};

export default PressableButton;

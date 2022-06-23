import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const EventButton = () => {

  const onPressIn = () => console.log("PRESS_IN_DETECTED \n");
  const onPressOut = () => console.log("PRESS_OUT_DETECTED \n");
  const onPress = () => console.log("PRESS_DETECTED \n");
  const onLongPress = () => console.log("LONG_PRESS_DETECTED \n");

  return (
    <TouchableOpacity style={{
      backgroundColor: '#f1c40f',
      padding: 16,
      margin: 10,
      borderRadius: 8,
    }}
                      onPressIn = {onPressIn}
                      onLongPress = {onLongPress}
                      onPressOut = {onPressOut}
                      onPress = {onPress}>
      <Text style={{
        color: 'white',
        fontSize: 24,
      }}>
        Press
      </Text>
    </TouchableOpacity>
  );

};

export default EventButton;


import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MyButton from "./MyButton";

const Counter = () => {
  const [ count , setCount ] = useState(0);
  console.log(setCount);
  return (
    <View style={{
      alignItems : 'center',
    }}>
      <Text style={{fontSize: 30, margin: 10}}>{count}</Text>
      {/* setCount(count + 1) ===> count = count + 1 */}
      <MyButton title="+1" onPress={() => setCount(count+1)}> </MyButton>
    </View>
  );

};

export default Counter;

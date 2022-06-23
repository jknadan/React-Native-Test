import React, {Fragment} from 'react';
import {View, StyleSheet, Text, StatusBar, Button, Section} from 'react-native';
import MyButton from "./components/MyButton";
import Counter from "./components/counter";

// 부모 컴포넌트 App.js
const App = () => {

  const name = 'Cho';

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        안녕하세요 클릭하세요
      </Text>

      <Button title="Button"> </Button>
      {/* 자식 컴포넌트 호출 My Button.js */}
      {/* 태그에 children 값을 추가하고 커스텀한 컴포넌트에 children 값을 출력하도록 해주면 되겠구마 */}
      <MyButton onPress={()=>alert('부모 컴포넌트에서 click')}> </MyButton>
      <Counter/>
      <StatusBar style='auto'/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
});

export default App;

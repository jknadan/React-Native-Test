// 리액트를 불러와서 사용가능 , JSX는 React.createElement 를 호출하는 코드로 컴파일 되므로 필수
import React from 'react';
// react-native 에서 제공하는 컴포넌트 2개 import
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = (props) => {

  console.log(props);
  return (
    <TouchableOpacity style={{
      padding: 16,
      backgroundColor: '#008197',
      margin: 10,
      borderRadius: 8,
    }}
    onPress={()=>props.onPress()}>
      <Text style={{ fontSize: 30 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
};

MyButton.defaultProps = {
  title: 'defaultButton',
};

MyButton.propTypes = {
  title : PropTypes.string.isRequired,
}

export default MyButton;

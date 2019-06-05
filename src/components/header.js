import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

  return (
    <View style={style.viewStyle}>
  <Text style={style.textStyle}>{props.heading}</Text>
  </View>
);
};

const style = {
  textStyle: {
    fontSize:30
  },
  viewStyle: {
  height: 150,
  width: 350,
  alignItems: 'center',
  justifyContent: 'center'


  }
}
export default Header

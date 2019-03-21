import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return(
    <View style={viewStyle}>
    <Text style={textStyle}>{props.heading}</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'white'
  },
  viewStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    backgroundColor:'red'
  }
}
export default Header;

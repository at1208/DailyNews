import React from 'react';
import { Text, View } from 'react-native';

const Subheading = (props) => {
  const { textStyle, viewStyle } = styles
  return(
    <View style={viewStyle}>
    <Text style={textStyle}>{props.sub}</Text>
    </View>
  )
}
const styles ={
  viewStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'

  },
  textStyle:{
      fontStyle: 'italic',
      color: 'black',
      fontWeight:'bold'

  }
}
export default Subheading;

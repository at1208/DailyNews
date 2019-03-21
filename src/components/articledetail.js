import React from 'react';
import { View, Text } from 'react-native';

const Articledetail = (props) => {
  return (
   <View>
   <Text>{props.data.article.title}</Text>
   </View>
 );
};
export default Articledetail;

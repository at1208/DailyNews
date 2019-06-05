import React from 'react';
import { View, Text, Image  } from 'react-native';

const NewsDetail = (props) => {
  console.log(props)
  return (
      <View style={style.viewStyle}>
       <Text style={style.textStyle} >{props.article.title}</Text>
       <Text>{props.article.author} <Text>{props.article.publishedAt}</Text></Text>
       <Image style={style.imageStyle} source={{ uri: props.article.urlToImage }} />
       <Text style={{ fontStyle: 'italic' }}>{props.article.description}</Text>
      </View>
  )
}

const style = {
  textStyle: {
    fontSize: 20,
    fontWeight: '600'
  },
  viewStyle:{
    height: 350,
    width: 300,
    alignItems: 'center',
    marginLeft: 40,
    marginBottom: 30,
    backgroundColor:'skyblue',
  },
  imageStyle: {
    height:200,
      flex:1,
      width:300,
      margin: 15

  }
}

export default NewsDetail;

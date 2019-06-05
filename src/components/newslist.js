import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'
import NewsDetail from './newsdetails'

class NewsList extends Component {
 constructor(props) {
   super(props)
   this.state = {
     articles: []
   }
 }
    componentDidMount(){
   axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=4077f3315e384f9984a112ca91362887')
   .then((response) => this.setState({ articles: response.data.articles} ))
   .catch((err) => console.log(err))
   }

  render() {
const Khabre =  this.state.articles.map((e) => {
  return  <NewsDetail article={e} />
 });
    return (
        <View>
        {Khabre}
        </View>
    )
  }
}
export default NewsList;

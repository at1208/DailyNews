 import React, { Component } from 'react';
 import { View } from 'react-native';
 import axios from 'axios';
 import Articledetail from './articledetail';

 class Techlist extends Component {
 state = {
   articles: []
 }

componentWillMount() {
  axios.get('https://newsapi.org/v2/everything?sources=techcrunch&apiKey=7b336f545af1465eac7716959cd75c52')
  .then(response => this.setState({ articles: response.data }));
}
renderArticle() {
  return Object.keys(Object.keys(this.state.articles)).map(article =>
    <Articledetail data={ article } />);

   render() {
     console.log(this.state);
     return (
     <View>
   {this.renderArticle()}
     </View>
     );
   }
 }
 export default Techlist;

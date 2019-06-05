import React from 'react';
import Header from './components/header';
import { View } from 'react-native'
import NewsList from './components/newslist'

const App = () => {
  return (
           <View>
          <Header heading='Daily News' />
          <NewsList />
           </View>
  );
};
export default App;

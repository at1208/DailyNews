import React from 'react';
import Header from './components/header';
import { View, ScrollView  } from 'react-native'
import NewsList from './components/newslist'

const App = () => {
  return (
           <ScrollView>
          <Header heading='Daily News' />
          <NewsList />
           </ScrollView>
  );
};
export default App;

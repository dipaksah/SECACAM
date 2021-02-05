
import React from 'react';
import {View,Text,StatusBar,
} from 'react-native';

import Home from './screens/Home';
import LoginPage from './screens/LoginPage'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
     <Home />
    </>
  );
};



export default App;

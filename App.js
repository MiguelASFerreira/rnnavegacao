import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import AppRotas from './src/routes/AppRotas.js';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  );
}

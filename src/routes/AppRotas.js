import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas.js';
import MelhoresProdutoresRotas from './MelhoresProdutores.js';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtos"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

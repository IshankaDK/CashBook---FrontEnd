import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AddIncome from '../components/AddIncome';
import Home from '../components/Home';
import AddExpense from '../components/AddExpense';



const Drawer = createDrawerNavigator();

export default function toggle() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Income" component={AddIncome} />
        <Drawer.Screen name="Add Expense" component={AddExpense} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}
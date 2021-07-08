import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AddIncome from '../components/AddIncome';
import Home from '../components/Home';
import AddExpense from '../components/AddExpense';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const Drawer = createDrawerNavigator();

export default function toggle() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        {/* <Drawer.Screen name="Login" component={Login} /> */}
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Income" component={AddIncome} />
        <Drawer.Screen name="Add Expense" component={AddExpense} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}
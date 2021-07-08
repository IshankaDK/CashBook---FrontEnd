import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import AddIncome from '../components/AddIncome';
import Home from '../components/Home';
import AddExpense from '../components/AddExpense';
import Login from '../components/Login';
import SignUp from '../components/SignUp';


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">

            <Stack.Screen name='Login' component={Login} />

            <Stack.Screen name='Home' component={Home} />

            <Stack.Screen name='SignUp' component={SignUp} />

            <Stack.Screen name='Add Income' component={AddIncome} />

            <Stack.Screen name='Add Expense' component={AddExpense} />

        </Stack.Navigator>
    );
}
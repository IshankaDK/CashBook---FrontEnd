import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import AddIncome from '../components/AddIncome';
import Main from '../components/Main';
import AddExpense from '../components/AddExpense';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator(){
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Main' component={Main} />
            
            <Stack.Screen name='AddIncome' component={AddIncome} />

            <Stack.Screen name='AddExpense' component={AddExpense} />
            
        </Stack.Navigator>
    );
}
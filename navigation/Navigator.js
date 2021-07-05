import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import AddIncome from '../components/AddIncome';
import Home from '../components/Home';
import AddExpense from '../components/AddExpense';


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator(){
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Home' component={Home} />

            {/* <Stack.Screen name='toggle' component={toggle} /> */}

            <Stack.Screen name='AddIncome' component={AddIncome} />

            <Stack.Screen name='AddExpense' component={AddExpense} />
            
        </Stack.Navigator>
    );
}
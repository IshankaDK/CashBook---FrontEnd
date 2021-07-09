import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView,Alert } from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AddExpense extends Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            amount: '',
            note: '',
            PickerSelectedVal: "Bills",
        };
    }
    static navigationOptions = {
        title: 'Main',
    };
    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        try {
            const isLogedin = await AsyncStorage.getItem('isLogedIn')
            const user = await AsyncStorage.getItem('userId')
            console.log("isLogedin at addExpense" + isLogedin);
            console.log("Active User at addExpense " + user);

            this.setState({ userId: user })

        } catch (e) {
            // error reading value
            console.log(e);
        }
    }
    clearText = () => {
        this.setState({ amount: '' })
        this.setState({ note: '' })
    }
    render() {

        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={{
                    height: 1000,
                    width: '100%',
                    backgroundColor: '#fff',
                    marginTop: 100,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                    <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigate('Home', { name: 'Home' })}
                        >
                            <Image
                                resizeMode='contain'
                                style={{
                                    width: 50,
                                    height: 50
                                }}
                                source={require('../assests/icons8-macos-close-48.png')} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: '700',
                            marginLeft: 50,
                        }}>Add Expense</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
                        <View style={{
                            height: 50,
                            width: 100,
                            backgroundColor: '#fc5c65',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 15
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 28,
                                fontWeight: '700',
                            }}>LKR</Text>
                        </View>
                        <TextInput
                            placeholder='Expense Amount '
                            keyboardType='numeric'
                            style={{
                                fontSize: 28,
                                marginLeft: 10,
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#000'
                            }}
                            onChangeText={(value) => this.setState({ amount: value })}
                            value={this.state.amount}
                        >
                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
                        <Image
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 15
                            }}
                            source={require('../assests/note.png')} />
                        <TextInput
                            placeholder='Note'
                            style={{
                                width: '80%',
                                fontSize: 18,
                                marginLeft: 10,
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#000'
                            }}
                            onChangeText={(value) => this.setState({ note: value })}
                            value={this.state.note}
                        >
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 20, padding: 10, alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                            }}>
                            Select Catagory
                        </Text>
                    </View>
                    <View>
                        <Picker
                            style={{
                                fontSize: 25,
                                fontWeight: '700',
                                padding: 10,
                                margin: 10
                            }}
                            selectedValue={this.state.PickerSelectedVal}
                            onValueChange={(value) =>
                                this.setState({ PickerSelectedVal: value })
                            } >
                            <Picker.Item label="Bills" value="Bills" />
                            <Picker.Item label="Food" value="Food" />
                            <Picker.Item label="Car" value="Car" />
                            <Picker.Item label="Clothes" value="Clothes" />
                            <Picker.Item label="House" value="House" />
                            <Picker.Item label="Transport" value="Transport" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            marginTop: 40,
                            margin: 20,
                            padding: 15,
                            backgroundColor: '#fc5c65',
                            borderRadius: 20
                        }}
                        onPress={() => {
                            console.log(this.state.userId + "   xxxxxx");
                            console.log(this.state.PickerSelectedVal + "   xxxxxx");
                            fetch('http://192.168.1.102:3010/expense', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    user:this.state.userId,
                                    amount:this.state.amount,
                                    note:this.state.note,
                                    catagory:this.state.PickerSelectedVal,
                                    type:"Expense"
                                })
                                
                            })
                            .then((response) => response.json())
                            .then((json) => {
                                if (json) {
                                    Alert.alert(
                                        "Cash Book",
                                        "Expense Added..!",
                                        [
                                            { text: "OK", onPress: () => console.log("Ok Pressed") }
                                        ]
                                    );
                                    this.clearText()
                                }
                                // console.log(json);
                            })
                            .catch((error) => {
                                console.log(error);
                                Alert.alert(
                                    "Error..!",
                                    "Please enter Valid Details",
                                    [
                                        { text: "OK", onPress: () => navigate('Add Expense', { name: 'AddExpense' }) }
                                    ]
                                );
                            })
                        }
                        }
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: '700',
                                    textAlign: 'center'
                                }}>+Add Expense</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fc5c65'
    }
})
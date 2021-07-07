import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    clearText = () => {
        this.setState({ email: '' })
        this.setState({ password: '' })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container0}>
                    <Text
                        style={{
                            fontSize: 60, fontWeight: '700',
                            color: '#ced6e0',
                        }}>
                        Cash Book
                    </Text>
                    <Text
                        style={{
                            fontSize: 20, fontWeight: '500',
                            color: '#ced6e0',
                        }}>
                        Income-Expense Tracker
                    </Text>
                </View>
                <View style={styles.container1}>
                    <TextInput
                        placeholder='Email'
                        style={{
                            width: '80%',
                            fontSize: 18,
                            marginLeft: 10,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderRadius: 25
                        }}
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                    >
                    </TextInput>
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Password'
                        style={{
                            width: '80%',
                            fontSize: 18,
                            marginLeft: 10,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderRadius: 25
                        }}
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    >
                    </TextInput>
                    <TouchableOpacity
                        //  onPress={this.storeData.bind(this)}
                        onPress={() => {
                            fetch('http://192.168.1.102:3010/user?email=' + this.state.email + "&password=" + this.state.password, {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                            })
                                .then((response) => response.json())
                                .then((json) => {
                                    if (json) {
                                        AsyncStorage.setItem('isLogedIn', "true")
                                        AsyncStorage.setItem('userId', json._id)
                                        console.log(json._id);
                                        navigate('Home', { name: 'Home' })
                                        this.clearText()
                                    } else {
                                        Alert.alert(
                                            "Login Error..!",
                                            "Email and Password is invalid",
                                            [
                                                { text: "OK", onPress: () => navigate('Login', { name: 'Login' }) }
                                            ]
                                        );
                                    }
                                })
                                .catch((error) => {
                                    Alert.alert(
                                        "Login Error..!",
                                        "Email is not valid, Please Enter valid Email",
                                        [
                                            { text: "OK", onPress: () => navigate('Login', { name: 'Login' }) }
                                        ]
                                    );
                                })
                            // .finally(this.clearText())
                        }
                        }
                        style={{
                            marginTop: 20,
                            width: '80%',
                            height: 50,
                            backgroundColor: '#44bd32',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontWeight: '700',
                            textAlign: 'center',
                            fontSize:16
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={{
                        flexDirection: 'row', marginTop: 50,
                        justifyContent: 'center'
                    }}
                    >
                        <Text style={{
                            color: '#7f8c8d',
                            paddingRight: 15
                        }}>
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigate('SignUp', { name: 'SignUp' })}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>
                                Sign Up
                            </Text>
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
        backgroundColor: '#34495e',

    },
     container0: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    container2: {
        flex: 1,
    }
})
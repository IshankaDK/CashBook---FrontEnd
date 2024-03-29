import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    clearText = () => {
        this.setState({ name: '' })
        this.setState({ email: '' })
        this.setState({ password: '' })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/* <View style={styles.container0}>
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
                </View> */}
                <KeyboardAvoidingView style={styles.container1}>
                    <TextInput
                        placeholder='Name'
                        style={{
                            width: '80%',
                            fontSize: 15,
                            marginLeft: 10,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderRadius: 25
                        }}
                        onChangeText={(value) => this.setState({ name: value })}
                        value={this.state.name}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='Email'
                        style={{
                            width: '80%',
                            fontSize: 15,
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
                        placeholder='Password'
                        style={{
                            width: '80%',
                            fontSize: 15,
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
                        onPress={() => {
                            fetch('http://192.168.1.102:3010/user', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: this.state.name,
                                    email: this.state.email,
                                    password: this.state.password
                                })
                            })
                                .then((response) => response.json())
                                .then((json) => {
                                    if (json) {
                                        Alert.alert(
                                            "Cash Book",
                                            "Signed Up Successfully, Please Login",
                                            [
                                                {
                                                    text: "Cancel",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "cancel"
                                                },
                                                { text: "OK", onPress: () => navigate('Login', { name: 'Login' }) }
                                            ]
                                        );
                                        this.clearText()
                                    }
                                })
                                .catch((error) => {
                                    Alert.alert(
                                        "SignUp Error..!",
                                        "Please enter Valid Details",
                                        [
                                            { text: "OK", onPress: () => navigate('SignUp', { name: 'SignUp' }) }
                                        ]
                                    );
                                })
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
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
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
                            Already have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigate('Login', { name: 'Login' })}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353b48'

    },
    // container0: {
    //     flex: 2,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    container1: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',


    },
    container2: {
        flex: 0.75,
    }
})
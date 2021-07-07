import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: '',
        password: ''
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container}>
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
                        onPress={() => {
                            Alert.alert(
                                "Alert Title",
                                "Signed Up",
                                [
                                  {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                  },
                                  { text: "OK", onPress: () =>  navigate('Login', { name: 'Login' }) }
                                ]
                              );
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
                            textAlign: 'center'
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
        backgroundColor: '#34495e'

    }, container1: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    container2: {
        flex: 1,
    }
})
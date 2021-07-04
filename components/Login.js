import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, } from 'react-native'
import { Button, Text } from 'native-base';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                    placeholder="Username"
                    style={styles.inputs}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.inputs}
                />
                <Button style={styles.button} block
                 onPress={()=>{
                    this.props.navigation.navigate('Main')
                }}
                >
                    <Text>Login</Text>
                </Button>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs: {
        height: 50,
        backgroundColor: '#ecf0f1',
        marginHorizontal: 10,
        marginVertical: 5,
        width: 300
    },
    button:{
        marginStart:50,
        width:300,
    }
})
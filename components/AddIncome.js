import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker'

export default class AddIncome extends Component {

    static navigationOptions = {
        title: 'Main',
    };

    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{
                    height: 1000,
                    width: '100%',
                    backgroundColor: '#fff',
                    marginTop: 70,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                    <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigate('Main', { name: 'Main' })}
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
                        }}>Add Income</Text>
                    </View>


                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
                        <View style={{
                            height: 50,
                            width: 100,
                            backgroundColor: '#22ce99',
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
                            placeholder='Income Amount '
                            keyboardType='numeric'
                            style={{
                                fontSize: 28,
                                marginLeft: 10,
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#000'
                            }}
                        >
                        </TextInput>
                    </View>
                    <KeyboardAvoidingView style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
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
                        >
                        </TextInput>
                    </KeyboardAvoidingView>
                    <TouchableOpacity style={{
                        marginTop: 50,
                        margin:20,
                        padding: 25,
                        backgroundColor: '#22ce99',
                    }}>
                        <Text
                        style={{
                            fontSize:30,
                            fontWeight:'700',
                            textAlign:'center'
                        }}>Add Income</Text>
                    </TouchableOpacity>
                </View>



            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26de81'
    }
})
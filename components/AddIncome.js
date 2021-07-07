import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView , } from 'react-native'
import {Picker} from '@react-native-picker/picker'

import { Dropdown } from 'react-native-material-dropdown';

export default class AddIncome extends Component {
    constructor() {
        super();
        this.state = {
            PickerSelectedVal : ''
        };
      }
    static navigationOptions = {
        title: 'Main',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={{
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
                        }}>Add Income</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
                        <View style={{
                            height: 50,
                            width: 100,
                            backgroundColor: '#26de81',
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
                    <View style={{ marginTop:20, padding:10,alignItems:'center' }}>
                        <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '700',
                        }}>
                    Select Catagory
                        </Text>
                    </View>
                    <Picker
                     style={{
                         fontSize: 25,
                         fontWeight: '700',
                         padding:10,
                         margin:10
                     }}
                        selectedValue={this.state.PickerSelectedVal}
                        onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelectedVal: itemValue })} >

                        <Picker.Item label="Salary" value="Salary" />
                        <Picker.Item label="Deposits" value="Deposits" />
                        <Picker.Item label="Savings" value="Savings" />
                    </Picker>
                    <TouchableOpacity style={{
                        marginTop: 70,
                        margin: 20,
                        padding: 20,
                        backgroundColor: '#26de81',
                        borderRadius: 20
                    }}>
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>+Add Income</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
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
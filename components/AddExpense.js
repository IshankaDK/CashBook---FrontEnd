import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker'
import {Picker} from '@react-native-picker/picker'

export default class AddExpense extends Component {
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

                        <Picker.Item label="Bills" value="Bills" />
                        <Picker.Item label="Food" value="Food" />
                        <Picker.Item label="Car" value="Car" />
                        <Picker.Item label="Clothes" value="Clothes" />
                        <Picker.Item label="House" value="House" />
                        <Picker.Item label="Transport" value="Transport" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                    <TouchableOpacity style={{
                       marginTop: 40,
                       margin: 20,
                       padding: 15,
                       backgroundColor: '#fc5c65',
                       borderRadius: 20
                    }}>
                        <Text
                        style={{
                            fontSize:30,
                            fontWeight:'700',
                            textAlign:'center'
                        }}>+Add Expense</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fc5c65'
    }
})
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DrawerActions } from '@react-navigation/drawer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: ' Main',
  };
  componentDidMount() {
    this.getData()
  }
  getData = async () => {
    try {
      const isLogedin = await AsyncStorage.getItem('isLogedIn')
      const userId = await AsyncStorage.getItem('userId')
      console.log("isLogedin " + isLogedin);
      console.log("Active User " + userId);

      if (isLogedin == null) {
          this.props.navigation.navigate("Login");
      }

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <View style={{ paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginBottom: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity
            // onPress={() => navigate.dispatch(DrawerActions.toggleDrawer())}
            onPress={this.getData.bind(this)}
            >
              <Image
                resizeMode='contain'
                style={{ height: 40, width: 40 }}
                source={require('../assests/menu.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.removeItem('isLogedIn');
                AsyncStorage.removeItem('userId');
                navigate('Login', { name: 'Login' })
              }}

            >
              <Image
                resizeMode='contain'
                style={{
                  height: 35, width: 35,
                }}
                source={require('../assests/logout.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ padding: 30 }}>
          <Text
            style={{
              color: '#000',
              fontSize: 26,
              fontWeight: '600',
            }}
          >
            My Budget
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 47,
              fontWeight: '700',
            }}
          >
            LKR 52,410
          </Text>
        </View>
        <View style={{
          height: 900,
          width: '100%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
          <View style={{ flexDirection: 'row', paddingTop: 40, justifyContent: 'space-around' }}>
            <TouchableOpacity
              onPress={() => {
                // AsyncStorage.setItem('isLogedIn', "true")
                // AsyncStorage.setItem('userId', this.state.userId)
                navigate('Add Income', { name: 'AddIncome' })
              }
              }
              style={{
                width: 150,
                height: 150,
                backgroundColor: '#fff',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 8,
                borderColor: '#26de81',
              }}
            >
              <Text style={{
                color: '#000',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                INCOME
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('Add Expense', { name: 'AddExpense' })}
              style={{
                width: 150,
                height: 150,
                backgroundColor: '#fff',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 8,
                borderColor: '#fc5c65',
              }}
            >
              <Text style={{
                color: '#000',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                EXPENSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc048'
  }
})
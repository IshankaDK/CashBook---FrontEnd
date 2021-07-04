import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  static navigationOptions = {
    title: ' Main',

  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ paddingTop: 50 }}>
          <View style={{ padding: 30 }}>
            <Text
              style={{
                color: '#000',
                fontSize: 25,
                fontWeight: '600',
              }}
            >
              My Budget
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 45,
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
                onPress={()=> navigate('AddIncome',{name:'AddIncome'})}
              //   onPress={()=>{
              //     this.props.navigation.navigate('AddIncome')
              // }}
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

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26de81'
  }
})
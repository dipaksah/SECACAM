import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import navigation from 'react-navigation'
import Home from './Home'

export default class LoginPage extends Component {

    handleclick(){
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View>
                <Text>
                    this is Login Page
                </Text>
                <Button title="go to home" onPress={()=>this.props.navigate.navigate('Home')}/>       
            </View>
        )
    }
}

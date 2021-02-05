import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { Appbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

export default class Showroom extends Component {
    render() {
        return (
            <View>
              <Header/>
                <Text>this is Showroom</Text>
        </View>
        )
    }
}

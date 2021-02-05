import React, { Component } from 'react'
import {Text, View} from 'react-native'
import { Appbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

export default class Cameras extends Component {
    render() {
        return (
            <View>
               <Header/>
                    <Text>this is Cameras</Text>
            </View>
        )
    }
}

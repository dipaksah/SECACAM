import React, { Component } from 'react'
import { Appbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,View} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View>
                 <Appbar.Header style={{backgroundColor:'white'}}>
                    <View style={{flex:1,flexDirection:'row', justifyContent:"space-between"}}>
                        <Icon name="calendar" color="red" size={25} style={{justifyContent: 'flex-start'}}/>   
                        <View style={{flexDirection:'row'}}>
                            <Text style={{justifyContent:'space-between'}}>All</Text>
                            <Icon name="arrow-down" size={18} style={{justifyContent:'center'}} /> 
                        </View>
                        
                        <Icon name="trash" color="red" size={30} style={{alignSelf: 'flex-end'}}  />      
                    </View>
                </Appbar.Header>
            </View>
        )
    }
}

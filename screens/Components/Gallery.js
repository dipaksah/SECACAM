import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Appbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

//screen
import Header from '../Components/Header';

export default class Gallery extends Component {
    render() {
        return (
            <View >
                    <View>
                    <Header/>
                    </View>
              
                <View >
                   <ScrollView>
                   <View style={styles.container}>
                            <View style={styles.box}>
                                    <View style={styles.inner}>
                                    </View>
                            </View>

                            <View style={styles.box}>
                                    <View style={styles.inner}>
                                    </View>
                            </View>

                            <View style={styles.box}>
                                    <View style={styles.inner}>
                                    </View>
                            </View>
                            <View style={styles.box}>
                                    <View style={styles.inner}>
                                    </View>
                            </View>
                            <View style={styles.box}>
                                    <View style={styles.inner}>
                                    </View>
                            </View>
                            <View style={styles.box}>
                                    <View style={styles.inner}>
                                    </View>
                            </View>
                            <View style={styles.box}>
                                    <View style={styles.inner}>
                                    </View>
                            </View>

                           
                    </View>
                   </ScrollView>
                 </View>
              
            </View>
        )
    }
}

const styles=StyleSheet.create({
   container:{     
       height:'100%',
       width:'100%',
       padding:5,
       flexDirection:'row',
       backgroundColor:'white',
       flexWrap:'wrap'
   },
   box:{
       width:'50%',
       height:150,
       padding:5
   },
   inner:{
       flex:1,
       backgroundColor:'grey',
       alignItems:'center',
       justifyContent:'center'
   }
});

{/* <FlatList>
                    <View style={styles.box}>
                        <View style={styles.inner}>

                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.inner}>

                        </View>
                    </View>
                    </FlatList> */}
import * as React from "react";
import { View, Text,StyleSheet, TouchableOpacity, Button, Alert } from "react-native";
import { createAppContainer,createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar } from "react-native-paper";
// import Icon from "react-native-ionicons";
import Icon from 'react-native-vector-icons/FontAwesome';

//screens
import Gallery from '../screens/Components/Gallery'
import Showroom from '../screens/Components/Showroom'
import Cameras from '../screens/Components/Cameras'
import Header from "./Components/Header";
// import moduleName from '../screens/Components/'

function HomeScreen({ navigation }) {
  return (
    <View>
     <Header/>
         {/* <Icon name="bars" size={30} style={styles.container} onPress={() => navigation.openDrawer()}/> */} 
         {/* <Image source={require('./img/check.png')} /> */}
              <View style={{alignItems: 'center', justifyContent: 'center' }}>
                <Text>This is Home Page</Text>
                  {/* <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('About')}
                  />
                  <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
                  <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
              </View>
     </View>
  );
} 

// const stack=createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab=createBottomTabNavigator();

export default function Home() {
  return(  
    <NavigationContainer>
     <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Gallery') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Cameras') {
              iconName = focused ? 'camera' : 'camera';
            }else if(route.name==='Showroom'){
              iconName=focused? 'diamond' : 'diamond';
            }else if(route.name==='Menu'){
              iconName=focused? 'reorder' : 'reorder';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
     >
        <Tab.Screen name="Gallery" component={Gallery}/>
        <Tab.Screen name="Cameras" component={Cameras} />
        <Tab.Screen name="Showroom" component={Showroom}/>
        <Tab.Screen name="Menu" component={HomeScreen} />
        {/* <Drawer.Screen name="LoginPage" component={LoginPage}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10
  },
});

// <Appbar.Header>
//                 <Appbar.Content title="Title" subtitle="Subtitle" />
//             </Appbar.Header>
  // <NavigationContainer>
      //   <MyDrawer/>
      // </NavigationContainer>


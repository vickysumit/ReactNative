import React, { Component } from 'react';
import Menu from './MenuComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, FlatList } from 'react-native';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';


function MenuRender() {
  const Stack = createStackNavigator();
  return (   
   
    <Stack.Navigator>
          <Stack.Screen name="Menu" component={Menu } options={{
            title: 'Menu',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen name="Dishdetail" component={Dishdetail} options={{
            title: 'Dish Details',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>

  );
}

function Main(props){
  const Drawer = createDrawerNavigator();
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Menu" component={MenuRender} />
      </Drawer.Navigator>
  </NavigationContainer>           
);
}
export default Main;


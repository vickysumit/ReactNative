import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "./HomeComponent";
import {createDrawerNavigator} from "react-navigation-drawer";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { Icon } from "react-native-elements";
const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu,
        navigationOptions:({navigation}) =>({
            headerLeft: <Icon name='menu' size={24}
            color="white" 
            onPress={() => navigation.toggleDrawer()}
             />
        })
     },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const HomeNavigator = createStackNavigator({
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) =>({
            
            headerStyle: {
                backgroundColor: "red"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: <Icon name='menu' size={24}
            color="white" 
            onPress={() => navigation.toggleDrawer()}
             />
        })
    }
);


const AboutNavigator = createStackNavigator({
        About: { screen: About }
    },
    {
        navigationOptions:({navigation}) =>( {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: <Icon name='menu' size={24}
            color="white" 
            onPress={() => navigation.toggleDrawer()}
             />
        })
    }
);

const ContactNavigator = createStackNavigator({
        Contact: { screen: Contact }
    },
    {
        navigationOptions: ({navigation}) =>({
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            },
            headerLeft: <Icon name='menu' size={24}
            color="white" 
            onPress={() => navigation.toggleDrawer()}
             />
        })
    }
);


const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon:({tintColor}) =>(
                <Icon
                    name="home"
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon:({tintColor}) =>(
                <Icon
                    name="info-circle"
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon:({tintColor}) =>(
                <Icon
                    name="list"
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon:({tintColor}) =>(
                <Icon
                    name="address-card"
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                    />
            )
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9'
    }
);


// class Main extends Component{
//
//     render() {
//         return (
//             <View style={{flex:1, paddingTop: 0 }}>
//                 <MenuNavigator/>
//             </View>
//         );
//     }
// }

// export default Main;
const Main = createAppContainer(MainNavigator);

export default Main;
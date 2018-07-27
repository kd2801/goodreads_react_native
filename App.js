import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import Login from './src/screens/Authentication/Login';
import Signup from './src/screens/Authentication/Signup';

const RootStack = createStackNavigator(
    {
        Home: Login,
        Details: DetailsScreen,
        Signup: Signup,
        Login: Login
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default class App extends Component {
    render() {
        return <RootStack/>
    }
};
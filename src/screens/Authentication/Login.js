import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

import DefaultInput from '../../Components/UI/DefaultInput';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    loginHandler = () => {

    };

    navigateToSignupHandler = () => {
        this.props.navigation.navigate("Signup");
    };

    render() {
        return (
            <DefaultInput
                view="login"
                authHandler={this.navigateToSignupHandler}/>
        );
    }
}

export default Login;
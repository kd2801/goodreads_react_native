import React, { Component } from 'react';

import DefaultInput from '../../Components/UI/DefaultInput';

class Signup extends Component {
    navigateToLoginHandler = () => {
        this.props.navigation.navigate("Login");
    };

    signupHandler = () => {

    };

    render() {
        return (
            <DefaultInput
                view="signup"
                submit={this.signupHandler}
                authHandler={this.navigateToLoginHandler}/>
        );
    }
}

export default Signup;
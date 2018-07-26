import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home"
    };

    changeScreenHandler = () => {
        this.props.navigation.navigate("Details", {
            itemId: 86,
            otherParam: "This is the value of other param"
        });
    };

    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <Button title="Change Screen" onPress={this.changeScreenHandler}/>
            </View>

        );
    }
}

export default HomeScreen;
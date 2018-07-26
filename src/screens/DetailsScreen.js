import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A nested detail screen')
        }
    };

    updateHeaderHandler = () => {
        this.props.navigation.setParams({
            otherParam: "Updated"
        });
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam("itemId", "NO-ID");
        const otherParam = navigation.getParam("otherParam", "Default");

        return (
            <View>
                <Text>Screen changed</Text>
                <Text>Item id is: {JSON.stringify(itemId)}</Text>
                <Text>Other param is: {JSON.stringify(otherParam)}</Text>
                <Button title="Update header" onPress={this.updateHeaderHandler}/>
            </View>

        );
    }
}

export default DetailsScreen;
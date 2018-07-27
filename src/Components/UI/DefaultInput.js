import React from 'react';
import { TextInput, StyleSheet, View, Button, Text } from 'react-native';

const defaultInput = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>W</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Your Email Address" underlineColorAndroid="transparent"/>
                <TextInput placeholder="Password" style={styles.loginSubmitBtn} underlineColorAndroid="transparent"/>

                {props.view === "signup" ?
                    <TextInput placeholder="Confirm Password" style={styles.loginSubmitBtn} underlineColorAndroid="transparent" />
                    : null}

                <View style={styles.CTASection}>
                    <View style={styles.CTAContainer1}>
                        <Button title={props.view} onPress={this.loginHandler}/>
                    </View>
                    <View style={styles.CTAContainer2}>
                        <Text onPress={props.authHandler}>{props.view}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff"
    },
    logoContainer: {
        height: "30%",
        justifyContent: "center"
    },
    logoText: {
        fontSize: 72
    },
    inputContainer: {
        width: "80%",
        height: "70%"
    },
    loginSubmitBtn: {
        marginBottom: "10%"
    },
    CTAContainer1: {
        width: "50%"
    },
    CTAContainer2: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "700",
    },
    CTASection: {
        flexDirection: "row",
        width: "100%"
    }
});

export default defaultInput;
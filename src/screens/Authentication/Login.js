import React, { Component } from 'react';
import { Form, Button, Input, Text, Container, Item, Content  } from 'native-base';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    loginHandler = () => {

    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Item style={styles.logoContainer}>
                        <Text style={styles.logoText}>W</Text>
                    </Item>
                    <Form>
                        <Item></Item>
                        <Item last></Item>
                    </Form>
                </Content>
                {/*<View style={styles.inputContainer}>*/}
                    {/*<TextInput placeholder="Your Email Address" underlineColorAndroid="transparent" />*/}
                    {/*<TextInput placeholder="Password" style={styles.loginSubmitBtn} underlineColorAndroid="transparent" />*/}
                    {/*<View style={styles.CTASection}>*/}
                        {/*<View style={styles.CTAContainer1}>*/}
                            {/*<Button title="Login" onPress={this.loginHandler} />*/}
                        {/*</View>*/}
                        {/*<View style={styles.CTAContainer2}>*/}
                            {/*<Text>SIGN UP</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                {/*</View>*/}
            </Container>
        );
    }
}

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

export default Login;
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = (props) => (
    <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
    />
);



export default defaultInput;
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import { displayName } from 'react-native/Libraries/Text/TextAncestor';
import { MainButton } from '../components/button';
//import auth from '@react-native-firebase/auth';
import { auth, db } from '../firebase'

export class SignUpScreenComponent extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
    }
    signUp = () => {
        if (this.state.email === '' || this.state.password === '')
            alert('fill the empty fields !')
        else {
            console.log(this.state.email)
            auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => { this.props.navigation.replace('Chat') })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                    // ..
                });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextStyles}>SignUp</Text>
                <TextInput style={styles.inputStyle} placeholder='Username' onChangeText={(name) => {

                    this.setState({ username: name })
                }} />
                <TextInput style={styles.inputStyle} placeholder='Email' onChangeText={(emailinput) => this.setState({ email: emailinput })} />
                <TextInput style={styles.inputStyle} placeholder='password' onChangeText={(passwordinput) => this.setState({ password: passwordinput })} />
                <MainButton title="SignUp" onpress={this.signUp} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    TextStyles: {
        fontSize: 20,

    }
    ,
    inputStyle: {
        width: "80%",
        backgroundColor: '#fff',
        borderRadius: 30,
        margin: 10

    }
});
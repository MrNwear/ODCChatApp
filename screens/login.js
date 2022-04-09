import React from 'react';
import { Image, View, StyleSheet, TextInput, Text } from 'react-native';
import { MainButton } from '../components/button';
import { auth } from '../firebase';

import AsyncStorage from '@react-native-async-storage/async-storage';


// const storeData = async (value) => {
//     try {
//         await AsyncStorage.setItem('email', value)
//         alert('success');
//     } catch (e) {
//         // saving error
//     }
// }
export class LoginScreenComponent extends React.Component {
    // getData = async () => {
    //     try {
    //         value = await AsyncStorage.getItem('email')
    //         if (value != null)
    //             this.props.navigation.navigate('Chat')
    //     } catch (e) {
    //         // saving error
    //     }
    // }

    state = {
        email: '',
        password: ''
    }

    // LocalLogin = () => {
    //     if (this.state.email != '' && this.state.password != '') {
    //         storeData(this.state.email);
    //     }
    //     else {
    //         alert("fill the empty fields");
    //     }

    // }

    login = () => {
        if (this.state.email === '' || this.state.password === '')
            alert('fill the empty fields !')
        else {
            auth
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    alert('User account created & signed in!');
                    this.props.navigation.replace('Chat');
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found') {
                        alert('That email address is wrong');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }
                    // alert(error);


                });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Images/chat.png')} style={{ height: 70, width: 70 }} />
                <Text style={styles.TextStyles}>Welcome Back !</Text>
                <Text style={styles.TextStyles}>Login</Text>
                <TextInput style={styles.inputStyle} placeholder='Email' onChangeText={(email) => { this.setState({ email: email }) }} />

                <TextInput style={styles.inputStyle} placeholder='password' secureTextEntry onChangeText={(password) => { this.setState({ password: password }) }} />
                <MainButton title="Login" style={{ marginBottom: 10 }} onpress={this.login} />
                <MainButton title="SignUp" style={{ backgroundColor: "#bac321" }} onpress={() => { this.props.navigation.navigate('SignUp') }} />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000011',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    TextStyles: {
        fontSize: 20,
        color: 'white'
    }
    ,
    inputStyle: {
        width: "80%",
        backgroundColor: '#fff',
        borderRadius: 30,
        margin: 10,

    }
});
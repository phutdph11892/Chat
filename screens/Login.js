import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Text } from 'react-native-elements'
import { db, auth } from '../firebase'

const Login = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageURL, setImageURL] = useState('')

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                user.updateProfile({
                    displayName: name,
                    photoURL: imageURL ? imageURL :
                        "https://static.wikia.nocookie.net/characters/images/7/7f/Tom_Cat.jpg/revision/latest?cb=20190404160415"
                }).then(() => {
                    // Update successful
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }



    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <StatusBar style='light' />
            <Text h2 style={{ marginBottom: 50 }}>Create a account</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Enter your fullname'
                    label='Full name'
                    type='text'
                    leftIcon={{ type: 'material', name: 'person' }}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder='Enter your email'
                    label='Email'
                    type='email'
                    leftIcon={{ type: 'material', name: 'email' }}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder='Enter your password'
                    label='Password'
                    leftIcon={{ type: 'material', name: 'lock' }}
                    value={password}
                    type='password'
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder='Profile Picture URL (optional)'
                    label='Profile Picture'
                    type='text'
                    leftIcon={{ type: 'material', name: 'face' }}
                    value={imageURL}
                    onChangeText={text => setImageURL(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title='Register'
            />
        </KeyboardAvoidingView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 100,
        marginTop: 10
    },
})

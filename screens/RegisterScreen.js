import React, { useState, useLayoutEffect } from 'react';
import {View,Text,TextInput,Button} from 'react-native'
import { db, auth } from '../firebase'

const RegisterScreen = () => {
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



    return(
        <View>

            <TextInput
             placeholder='Enter your fullname'
             label='Full name'
             type='text'
             leftIcon={{ type: 'material', name: 'person' }}
             value={name}
             onChangeText={text => setName(text)}
         />
            <TextInput  placeholder='Enter your email'
                     label='Email'
                     type='email'
                     leftIcon={{ type: 'material', name: 'email' }}
                     value={email}
                     onChangeText={text => setEmail(text)}/>
                     
                     <TextInput
                  placeholder='Enter your password'
                              label='Password'
                              leftIcon={{ type: 'material', name: 'lock' }}
                              value={password}
                              type='password'
                              secureTextEntry={true}
                              onChangeText={text => setPassword(text)}
                     />
                      <Button
             
                raised
                onPress={register}
                title='Register'
            />

        </View>
    )
}
export default RegisterScreen;

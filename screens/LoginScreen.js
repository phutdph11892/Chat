import React , { useState, useEffect } from 'react';
import {View,Text,Button, TextInput, Image,KeyboardAvoidingView} from 'react-native';

const LoginScreen= ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

        return (

        <View style={{flex:1,alignItems: 'center',justifyContent:'center',padding:10}}><Text>Login</Text>
        <TextInput
         placeholder='Enter your email'
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
                           <Button   title='Login' />
            <Button  onPress={() => navigation.navigate('RegisterScreen')} type='outline' title='Register' />
        </View>
        );
    
}


export default LoginScreen;

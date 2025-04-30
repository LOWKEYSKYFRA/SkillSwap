import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const SignupScreen = () =>  { 
    const [newEmail, setNewEmail] =
     useState('');// define setNewPassword
     const [newPassword, setNewPassword] =
     useState('');
      const blImage =require("../../assets/images/rain.jpg")

  const handleSignup = () => {  
  //sign logic will go there later
  console.log('log in with:', newEmail, newPassword);//Placeholder log
  //you would typically make an API call or update state here

  };

  return (
    <ImageBackground style={styles.backgroundImage} source={blImage}>
        <View style={styles.container}>
           <Text style={styles.header}>Log In</Text>
            <TextInput
            style={styles.input}
             placeholder="Enter Email"
             onChangeText={setNewEmail}
             keyboardType="email-address"
              autoCapitalize="none"
              value={newEmail} // it's good to practice to control the input value with state
            />
            <TextInput
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={setNewPassword}
            secureTextEntry
            value={newPassword}/>
            <TouchableOpacity
             onPress={handleSignup} 
             style={styles.Button} 
            >
            <Text style={{width:200, textAlign:"center",fontSize:30, color:"white",verticalAlign:"center",margin:"auto"}}>Log In</Text>
            
            </TouchableOpacity>
         </View>
    </ImageBackground>
  );
};
export default function App(){
    return(
         <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Log in'>
            <Stack.Screen  name="Log in"
    component={SignupScreen} />
        </Stack.Navigator>
    
    );
}
const styles = StyleSheet.create({
  Button:{
    width: "100%",
    height: 50,
    backgroundColor:"brown",
    borderRadius:20,
    color:"white"
  },
  container:{
    width:"80%",
    height:"30%",
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    color: "",
    backgroundColor:"grey",
    opacity:0.6,
    borderRadius:30,
    marginTop:90,
    marginBottom:90,
  },
  backgroundImage:{width:"100%",height:"100%", alignItems:'center',justifyContent:"space-between"},
  header: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    padding: 10,
  },
});
 
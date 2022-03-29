import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            alert("Sign In Completed Successfully")
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                navigation.replace("Profile")
                } 
            })
        })
        .catch(error => alert(error))
    }

    const forgotPassword = () => {
        auth
        .sendPasswordResetEmail(email)
        .then(() => {
            alert("Password reset email sent!")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage + " Enter Your Email Correctly")
        });
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.center}>
            <Text style={{marginBottom: 20, fontSize: 33, fontWeight: 'bold'}}>Login Page</Text>

            <TextInput
            style={{ 
                width: "80%",
                height: 40, 
                borderColor: 'gray', 
                borderWidth: 1,
                borderRadius: 15,
                placeholderTextColor: 'gray',
                paddingHorizontal: 10,
                marginBottom: 20
            }}
            placeholder="Enter your email!"
            onChangeText={text => setEmail(text)}
            value={email}
            />

            <TextInput
            style={{ 
                width: "80%",
                height: 40, 
                borderColor: 'gray', 
                borderWidth: 1,
                borderRadius: 15,
                placeholderTextColor: 'gray',
                paddingHorizontal: 10,
                marginBottom: 20
            }}
            placeholder="Enter your password!"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            />

            <Pressable onPress={handleLogin} style={{backgroundColor: '#4187FF',textAlign:'center',borderRadius: 30, paddingHorizontal: 40, paddingTop:12, paddingBottom:12}}>
                <Text style={{color: 'white', fontSize: 15, fontWeight:'bold'}}>Sign In</Text>
            </Pressable>

            <Text style={{color: 'black', fontSize: 16, marginTop: 20}}>Did You Forgot Password?<Text onPress={forgotPassword} style={{fontWeight:'bold', color:'#4187FF'}}> Renew Password</Text></Text>

            <Text style={{color: 'black', fontSize: 16, marginTop: 20}}>Don't have an account yet?<Text onPress={()=> {navigation.navigate("Register")}} style={{fontWeight:'bold', color:'#4187FF'}}> Sign Up</Text></Text>
        </View>
    </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Login;
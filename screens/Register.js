import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable} from "react-native";
import { auth } from "../firebase";

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
          const user = userCredentials.user;
          alert("Registered Successfully")
          navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.center}>
            <Text style={{marginBottom: 20, fontSize: 33, fontWeight: 'bold'}}>Register Page</Text>

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
            placeholder="Enter your Full Name!"
            onChangeText={text => setName(text)}
            value={name}
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
            placeholder="Enter your Email!"
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
              placeholder="Enter your Address!"
              onChangeText={text => setAddress(text)}
              value={address}
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
            placeholder="Enter your Password!"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            />

            <Pressable onPress={handleSignUp} style={{backgroundColor: '#4187FF',textAlign:'center',borderRadius: 30, paddingHorizontal: 40, paddingTop:12, paddingBottom:12}}>
                <Text style={{color: 'white', fontSize: 15, fontWeight:'bold'}}>Sign Up</Text>
            </Pressable>
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

export default Register;
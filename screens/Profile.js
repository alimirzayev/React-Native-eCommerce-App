import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { auth } from "../firebase";
import React from "react";
import { View, StyleSheet, Text, Pressable, TouchableOpacity  } from "react-native";

const Profile = () => {
  const user = firebase.auth().currentUser;
  const navigation = useNavigation()

  const emailVerified = user.emailVerified

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const sendVerification = () => {

    user.sendEmailVerification()
    .then(() => {
      alert('Verification Link sent your email')
      navigation.replace("Login")
    })
    .catch(error => alert("Error" + error))

  }

  return (
    <View style={styles.center}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 19}}>Email: {auth.currentUser?.email}</Text>

      {emailVerified ?
      <Text style={{color: 'black', fontSize: 17, marginTop: 10}}>Your Email is Verified</Text>
      :
      <TouchableOpacity onPress={sendVerification} style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Verify Your Email</Text>
      </TouchableOpacity> }

      <TouchableOpacity onPress={handleSignOut} style={styles.button2}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 130,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 30,
    marginTop: 20,
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 130,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 20,
  }
});

export default Profile;
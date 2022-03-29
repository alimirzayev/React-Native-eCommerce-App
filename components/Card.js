import { View, Button, Text, StyleSheet, ScrollView, Dimensions, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';


const Card = (props) => {
  const navigation = useNavigation(); 

  const [toggle, setToggle] = useState(false);

  const fav = (event) => {
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => navigation.navigate('Detail',{id: props.id})}
      >
            <Icon style={styles.heart} name="heart" size={25} color={toggle ? 'white' : '#ff4d4d'}
            
            onPress={() => fav()}
            />

            <Image
              source={{uri: props.img}}
              style={{
                width: "100%",
                height: 200,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              resizeMode='contain'
            />

            <Text style={{fontSize: 14}}>{props.desc}</Text>

            <Text style={styles.heading}>{props.title}</Text>
        </Pressable>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  heart:{
    position: 'absolute',
    top: 10,
    left: 7,
    zIndex: 1000,
  },
  card:{
        position: 'relative',
        backgroundColor: '#EEF2FA',
        width: "45%",
        height: "auto",
        borderWidth: 0,
        // borderColor: "#6F737B",
        marginBottom: 40,
        padding: 5,
        borderRadius: 15,
        shadowColor: "#6F737B",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.00,
        elevation: 10,
    
    },
    heading:{
        paddingTop: 4,
        paddingBottom: 4,
        fontWeight: 'bold',
        color: "#4187FF",
        fontSize: 15,
        lineHeight: 21,
        width: "90%"
    }
})
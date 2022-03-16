import React, {useState} from "react";
import { View, Button, Text, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../data.json'
import Card from '../components/Card'

const Home = () => {

  return (
    <ScrollView>
      <View style={styles.center}>
        
        <View style={styles.container}>

          {data && data.map((e) => {
            return (
              <Card title={e.title} img={e.img} desc={e.desc} id={e.id}/>
            )
          })}

        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    backgroundColor: "#EEF2FA",
    width: Dimensions.get('window').width,
    paddingTop: 20,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  container:{
    width: Dimensions.get('window').width,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    flexWrap: "wrap"
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
    zIndex: 1001,
  },

  heart:{
    position: 'absolute',
    top: 10,
    left: 7,
    zIndex: 1000,
  },

  heading:{
    paddingTop: 4,
    paddingBottom: 4,
    fontWeight: 'bold',
    color: "#4187FF",
    fontSize: 18,
    lineHeight: 21
  }
});

export default Home;

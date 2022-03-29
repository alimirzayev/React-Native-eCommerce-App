import React,{useEffect} from "react";
import { View, StyleSheet, Text, ScrollView, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import { withRepeat } from "react-native-reanimated";


const Checkout = (props) => {
  const state = useSelector((state) => state)

  const removeToCart = (e) => {
    props.dispatch({ type: "DEL_CART", payload: e })
  }

  const increaseQty = (e) => {
    props.dispatch({type: "INC_QTY", payload: e})
  }

  const decreaseQty = (e) => {
    props.dispatch({type: "DEC_QTY", payload: e})
  }

  return (
    <ScrollView>
        <View style={styles.center}>
          <Text style={styles.heading}>Checkout ({state.cart.Carts ? state.cart.Carts.length : 0})</Text>

        {state.cart.Carts && state.cart.Carts.map((e) => {
              return (
                <View key={e.id} style={styles.card}>

                  <Image
                    source={{uri: e.img}}
                    style={{
                      width: "50%",
                      height: 150,
                      // marginLeft: 'auto',
                      // marginRight: 'auto'
                    }}
                    resizeMode='contain'
                  />

                  <View style={{width: "45%"}}>
                    <Text style={styles.heading2}>
                      {e.title}
                    </Text>

                    <View style={{display: 'flex', flexDirection:'row', width: "70%", justifyContent: 'space-between', marginTop: "25%"}}>
                      
                      <View>
                        <Text onPress={() => decreaseQty(e)} style={styles.same}>-</Text>
                      </View>

                      <View>
                        <Text style={styles.same}>
                          {e.quantity}
                        </Text>
                      </View>

                      <View>
                        <Text onPress={() => increaseQty(e)} style={styles.same}>+</Text>
                      </View>

                    </View>


                    <Text style={styles.delete}
                      onPress={() => removeToCart(e)}
                    >
                      Delete Item <Icon style={styles.trash} name="trash" size={25} color="red"/>
                    </Text>
                    
                  </View>

                </View>
              )
        })}

          <Text style={styles.heading}>Total: <Text style={{color: 'green'}}>${state.cart.total}</Text></Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
  },

  heading: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: "4%"
  },

  heading2: {
    fontWeight: '800',
    fontSize: 16
  },

  delete:{
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
    position: 'absolute',
    bottom: 0,
    right: 0
  },

  card:{
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEF2FA',
    height: "auto",
    borderWidth: 0,
    borderColor: "#6F737B",
    marginBottom: 10,
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

  same:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
});

let mapStateToProps = state => state
export default connect(mapStateToProps) (Checkout);
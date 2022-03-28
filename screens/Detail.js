import React from "react";
import { View, Button, Text, StyleSheet, ScrollView, Dimensions, Image, Pressable, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../data.json'
import SwipeButton from 'rn-swipe-button';
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'

const Detail = (props) => {
    // const dispatch = useDispatch();
    const state = useSelector((state) => state)

    const addToCart = (e) => {
        alert("Product added to cart successfully")
        props.dispatch({ type: "ADD_CART", payload: e })
    }


    const { id } = props.route.params;

    return (
        <ScrollView showsVerticalScrollIndicator ={false}>
            <View style={styles.center}>
            {data.filter((item) => item.id === id).map((e) => {
                return (
                    <View key={e.id} style={styles.center}>
                        <Text style={styles.heading}>
                            {e.innerHeading}
                        </Text>

                        <Image
                            source={{uri: e.img}}
                            style={{
                            width: "100%",
                            height: 280,
                            marginTop: 20,
                            marginBottom: 40,
                            }}
                            resizeMode='contain'
                        />

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                            <View style={styles.container} >

                                <View style={styles.innerCard}>
                                    <ImageBackground source={bg1}
                                    style={{width: '100%', height: '100%'}}
                                    >
                                        <Icon style={styles.icon} name="microphone" size={30} color="#4187FF"/>

                                        <Text style={styles.innerCardText}>
                                            Built-In
                                            Microphone
                                        </Text>
                                        
                                    </ImageBackground>
                                    
                                </View>

                                <View style={styles.innerCard}>
                                    <ImageBackground source={bg2}
                                    style={{width: '100%', height: '100%'}}
                                    >
                                        <Icon style={styles.icon} name="headphones" size={30} color="#4187FF"/>

                                        <Text style={styles.innerCardText}>
                                            Noise
                                            Cancelling
                                        </Text>
                                        
                                    </ImageBackground>
                                </View>

                                <View style={styles.innerCard}>
                                    <ImageBackground source={bg3}
                                    style={{width: '100%', height: '100%'}}
                                    >
                                        <Icon style={styles.icon} name="adjust" size={30} color="#4187FF"/>

                                        <Text style={styles.innerCardText}>
                                            Water
                                            Resistant
                                        </Text>
                                        
                                    </ImageBackground>           
                                </View>
                            </View>

                        </ScrollView>

                        <Pressable style={styles.button} onPress={() => addToCart(e)}>
                            <Text style={{color:'white', fontWeight: 'bold', fontSize:19}}>Buy Now</Text>
                        </Pressable>
                        
                    </View>
                )
            })}
        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    center: {
        width: Dimensions.get('window').width,
        flex: 1,
        alignItems: "center",
        backgroundColor: '#EEF2FA'
    },
    heading: {
        textAlign: 'center',
        paddingTop: 25,
        fontSize: 80,
        fontWeight: "bold",
        lineHeight: 73,
        letterSpacing: 14,
        fontFamily: 'AmericanTypewriter-Light',
        color: '#21262E',
    },
    button:{
        width: "80%",
        backgroundColor: "#4187FF",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 62,
        borderRadius: 60,

        shadowColor: "#2E70E2",
        shadowOffset:{
        width: 0,
        height: 5,
        },

        shadowOpacity: 0.45,
        shadowRadius: 20.00,
        elevation: 10,
        marginBottom: "10%",
    },
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15
    },

    innerCard:{
        marginRight: 15,
        width: 150,
        height: 150,
        position: 'relative',
        backgroundColor: '#EEF2FA',
        borderWidth: 0,
        marginBottom: 40,
        // padding: 10,
        borderRadius: 25,
        shadowColor: "#6F737B",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.00,
        elevation: 10,
    },
    innerCardText:{
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 18,
        bottom: 10,
        left: 10,
        width: "80%"
    },
    icon:{
        paddingTop: 10,
        paddingLeft: 10,
    }
});



let mapStateToProps = state => state
export default connect(mapStateToProps)(Detail)
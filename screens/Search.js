import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard} from "react-native";
import data from '../data.json'
import { useNavigation } from '@react-navigation/native';


const Search = (props) => {
  const navigation = useNavigation(); 

  const [filteredData,setFilteredData] = useState(data);
  const [textInputValue, setTextInputValue] = React.useState('');

  const search = () => {
    let result = [];

    result = data.filter(i => 
      i.title.toLowerCase().includes(textInputValue.toLowerCase())
      )
    setFilteredData(result);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.center}>

        <TextInput
          placeholder="Insert your product name!"
          onChangeText={text => setTextInputValue(text)}
          onKeyPress={search}
          style={{ 
            marginTop: 10,
            width: "90%",
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1,
            placeholderTextColor: 'gray',
            textAlign: 'center',
            borderWidth: 1,
            borderRadius: 40,
            fontSize: 18
          }}
        />

      <View>
      {filteredData.map((value,index)=>{
        return(
          <View style={{alignItems: "center"}} key={value.id}>
            <Text
              onPress={() => navigation.navigate('Detail',{id: value.id})}
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 20
              }}
            >
              {value.title}
            </Text>
          </View>
        )
        })}

      </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  input:{
    width: "100%",
    height: 40,
  }
});

export default Search;
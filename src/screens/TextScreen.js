import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen =()=>{
    const [name,setName] = useState('');
    return(
   <View>
       <Text>Enter Name:</Text>
       <TextInput style={styles.input} 
       autoCorrect={false}
       autoCapitalize="sentences"
       placeholder="add text"
       value={name}
       onChangeText={newValue => setName(newValue)}
       />
       <Text> My Name is {name}</Text>
   </View>
 );    
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'blue',
        borderWidth:1
    }
})
export default TextScreen;
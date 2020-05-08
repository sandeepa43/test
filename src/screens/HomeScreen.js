import React from "react";
import { Text, StyleSheet,TouchableOpacity} from "react-native";


const HomeScreen = () => {
  return <TouchableOpacity onPress={()=>console.log('hey sandeepa')}><Text style={styles.text}>Hey Abhinav Welcome to my app</Text></TouchableOpacity>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:'green',
  }
});

export default HomeScreen;

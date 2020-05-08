import React,{Component} from "react";
import { Text, View,StyleSheet,TouchableOpacity,TextInput} from "react-native";
import {Button} from 'native-base';

class HomeScreen extends Component{
// const HomeScreen = () => {
  onSubmit=()=>{
    console.log('called');
  }
  render(){
  return(
     <View><Text style={styles.text}>Hey! wanna see some cool images from an outside world?</Text>
  <Text>Just login </Text>
  <TextInput
  placeholder="Enter Asteroid ID"
  />
  <Button><Text>Random Asteroid</Text></Button>
  <Button onPress={()=>this.onSubmit()}>Submit</Button>
  </View>
  );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color:'blue',
    textAlign:'center',
    marginHorizontal:30,
  }
});

export default HomeScreen;

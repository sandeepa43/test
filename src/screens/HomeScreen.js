import React from "react";
import { Text, View,StyleSheet,TouchableOpacity,TextInput,Button} from "react-native";


const HomeScreen=({navigation})=>{

  return(
     <View><Text style={styles.text}>Hey There!</Text>
     <Button 
     onPress={()=>navigation.navigate('Components')}
     title=" Go to Components demo"/>

<Button onPress={()=>navigation.navigate('Lists')} title="Go To List Demo" />
<Button onPress={()=>navigation.navigate('Image')} title= "Go to Image screen"/>
<Button onPress={()=>navigation.navigate('Counter')} title="Counter screen"/>
<Button onPress={()=>navigation.navigate('Color')} title="color screen"/>
<Button onPress={()=>navigation.navigate('Sqaure')} title="square screen"/>

  </View>
  );

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

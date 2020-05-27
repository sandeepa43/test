import React from 'react';
import {Text,StyleSheet , View,TextInput} from 'react-native';

const ComponentsScreen  = () =>{
    return( <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text>your name is </Text><TextInput placeholder="abc..." placeholderTextColor="blue"/>
        </View>
        );
};

const styles = StyleSheet.create({
    textStyle:{
     fontSize :30
    }
});

export default ComponentsScreen;
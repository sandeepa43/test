import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen = ()=>{
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg')} imageScore="9"/>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore="10"/>
        </View>
    );
}

export default ImageScreen;
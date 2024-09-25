import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import StoreData from '@/mockData/StoreData';

const {width, height} = Dimensions.get('screen');

const StoreSlides = ({item}) => {
  return (
    <View style={styles.container}>
        <Image source={item.image} resizeMode='contain' style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },
    image: {
        flex: 0.6,
        width: '100%',
    },
    content: {
        flex: 0.6,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
    }

});

export default StoreSlides;

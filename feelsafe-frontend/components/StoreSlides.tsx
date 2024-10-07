import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import StoreData from '@/mockData/StoreData';

const {width, height} = Dimensions.get('screen');

const storeData = StoreData;

const StoreSlides = () => {
  return (
    <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
    >
        {storeData.map((item, index) => (
            <View key={index} style={styles.container}>
                <Image source={{uri: item.image}} resizeMode='contain' style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        ))}
    </ScrollView>    
  )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
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

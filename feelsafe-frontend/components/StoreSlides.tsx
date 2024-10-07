import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import StoreData from '@/mockData/StoreData'; // Update with actual path

const StoreSlides = () => {
  

  // // This effect will run once and update the rendered state
  //   const renderedOnce = useRef(false);
  // useEffect(() => {
  //   if((!renderedOnce.current)) {
  //       renderedOnce.current = true;
  //   }
  // }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  // Render only if the component hasn't rendered before
  return (
    <FlatList
        //  for passing through the data set once, potentially need update in order to check for new items
      data={StoreData}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StoreSlides;



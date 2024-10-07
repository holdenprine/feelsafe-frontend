import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import StoreData from '@/mockData/StoreData';
import StoreSlides from '@/components/StoreSlides';

const Store = () => {
     
  return (
    <View>
      <StoreSlides />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  courseContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  courseImage: {
    width: 50,
    height: 200,
    borderRadius: 10,
  },
});

export default Store;

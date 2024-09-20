import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'; 

const { width: viewportWidth } = Dimensions.get('window');

const Store = () => {
  const items = [
    { title: 'Product 1', image: 'https://picsum.photos/200' },
    { title: 'Product 2', image: 'https://picsum.photos/201' },
    { title: 'Product 3', image: 'https://picsum.photos/202' },
    { title: 'Product 4', image: 'https://picsum.photos/203' }
  ];

  const renderItem = ({ item }) => {
    console.log('Rendering item:', item); // Log to check if item is undefined
    
    if (!item) {
      console.error('Item is undefined at index:', index);
      return <Text style={styles.errorText}>Item not found</Text>;
    }

    return (
      <View style={styles.courseContainer}>
        {item.image && (
          <Image style={styles.courseImage} source={{ uri: item.image }} />
        )}
        <Text style={styles.courseTitle}>{item.title || 'No Title Available'}</Text>
      </View>
    );
  };

  return (
    <View>
      {/* <Text style={styles.heading}>Store</Text>
      {items.length > 0 ? (
        <Carousel
        loop
        width={viewportWidth}
        height={250}
        autoplay={true}
        data={items}
        renderItem={({item}) => renderItem({item})}
        />
      ) : (
        <Text>No items available</Text>
      )} */}
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
    width: viewportWidth * 0.7,
    height: 200,
    borderRadius: 10,
  },
});

export default Store;

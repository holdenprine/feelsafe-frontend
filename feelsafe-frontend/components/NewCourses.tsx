import React, { useEffect, useState, useRef } from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'; 
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const { width: viewportWidth } = Dimensions.get('window');

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Apply API endpoint to .env file for env variable use
        const response = await axios.get('insert API_ENDPOINT');
        setCourses(response.data);
      } catch(err) {
        console.error('Error fetching courses:', err);
      }
    };

    fetchCourses();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.courseContainer}>
        <Image style={styles.courseImage} source={{ uri: item.image || 'https://picsum.photos/200' }} />
        <Text style={styles.courseTitle}>{item.title || 'Course Title'}</Text>
      </View>
    );
  };

  return (
    <View>
      {courses.length > 0 ? (
        <Carousel
          ref={carouselRef}
          data={courses}
          renderItem={renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth * 0.8}
          loop={true}
          autoplay={true}
          autoplayDelay={2000}
          autoplayInterval={3000}
        />
      ) : (
        <Text style={styles.courseTitle}>
          No current courses available, check out our store or sign in to check out more courses!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    marginHorizontal: 10,
    alignItems: 'center', // Center the content
  },
  courseTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  courseImage: {
    width: viewportWidth * 0.7,
    height: 200,
    borderRadius: 10,
  },
});

export default Courses;


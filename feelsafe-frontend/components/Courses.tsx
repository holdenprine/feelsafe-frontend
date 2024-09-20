import React, { useEffect, useState } from 'react'
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'; 
import { Carousel } from 'nuka-carousel';
import axios from 'axios';

const { width: screenWidth } = Dimensions.get('window');

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // apply API endpoint to .env file for env variable use
        const response = await axios.get('insert API_ENDPOINT');
        setCourses(response.data);
      } catch(err) {
        console.error('Error fetching courses:', err);
      }
    };

    fetchCourses();
  }, []);
  return (
    <View>
      {courses.length > 0 ? (
        <Carousel autoplay showDots>
          {courses.map((course, index) => (
            <View key={index} style={styles.courseContainer}>
              <Image style={styles.courseImage} source={{uri : 'https://picsum.photos/200'}}/>
              <Text style={styles.courseTitle}>{'placeholder text -> should be course.title'}</Text>
              </View>
          ))}
        </Carousel>
      ) : (
        <Text style={styles.courseTitle}>No current courses available, check out our store or sign in to check out more courses!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    width: screenWidth * 0.8,
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    marginHorizontal: screenWidth * 0.1,
  },
  courseTitle: {
    fontSize: 14,
    color: '#666'
  },
  courseImage: {
  borderRadius: 10
  },
});

export default Courses;

import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'; 
import { Carousel } from 'nuka-carousel';
import axios from 'axios';

const { width: screenWidth } = Dimensions.get('window');

const Courses = () => {
  const [courses, setCourses] = useState([]);
  return (
    <View>
      <Carousel autoplay showDots>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
      </Carousel>

    </View>
  )
}

export default Courses;

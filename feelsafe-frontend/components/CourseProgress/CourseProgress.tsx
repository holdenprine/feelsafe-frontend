import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import CourseSidebar from './CourseSidebar'

const CourseProgress = () => {
  return (
    <View>
        <Text>CourseProgress</Text>
        <CourseSidebar image={require('@/assets/images/logo.jpeg')} />
        
    </View>
  )
}

export default CourseProgress
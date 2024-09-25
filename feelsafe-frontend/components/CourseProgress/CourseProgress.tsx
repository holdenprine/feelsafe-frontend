import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native'
import CourseSidebar from './CourseSidebar'
import CourseProgressBar from './CourseProgressBar'
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData'

const { height } = Dimensions.get('window');

// for progress bar, pass in courseDataProp for the given course
const CourseProgress = () => {
  return (
    <SafeAreaView>
        <CourseSidebar image={require('@/assets/images/logo.jpeg')} />
        <View style={styles.content}>
          <CourseProgressBar data={FeelSafeCourseData}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
    },
    container: {
      flex: 1,
    }
})

export default CourseProgress
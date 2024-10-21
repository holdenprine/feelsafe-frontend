import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import CourseSidebar from './CourseSidebar';
import CourseProgressBar from './CourseProgressBar';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData';

const { height } = Dimensions.get('window');

// for progress bar, pass in courseData for the given course
const CourseProgress = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView>
      <ScrollView>
        <CourseSidebar image={require('@/assets/images/logo.jpeg')} />
        <Text style={styles.header}>Current Course Progress</Text>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('moduleoverview')}
        >
          <Text style={styles.navButtonText}>Full Course</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <CourseProgressBar data={FeelSafeCourseData}/>
        </View>
      </ScrollView>  
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
  },
  header: {
    fontSize: 28, // Slightly larger for prominence
    fontWeight: 'bold',
    color: '#5F6D46', // Accent color for the header text
    textAlign: 'center',
    marginVertical: 20,
  },
  navButton: {
    backgroundColor: '#5F6D46',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
  }
});

export default CourseProgress;

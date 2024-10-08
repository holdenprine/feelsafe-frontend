import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData';

const CourseModule = () => {
  // Randomly select a course for testing
  const [randIndex, setRandIndex] = useState(Math.floor(Math.random() * FeelSafeCourseData.length));
  const currentCourse = FeelSafeCourseData[randIndex];

  const [paused, setPaused] = useState(true);
  const videoRef = React.useRef<Video | null>(null);

  // For a manual play and pause button -> currently using native controls
  // const handlePlayPause = () => {
  //   if (videoRef.current) {
  //     if (paused) {
  //       videoRef.current.playAsync();
  //     } else {
  //       videoRef.current.pauseAsync();
  //     }
  //     setPaused(!paused);
  //   }
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.unitContainer}>
          <Text style={styles.header}>{currentCourse.moduleTitle}</Text>
          <Text style={styles.description}>{currentCourse.description}</Text>
          <Video
            ref={videoRef}
            source={require('@/assets/videos/testvideo.mov')}
            style={styles.video}
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            isLooping
            shouldPlay={!paused}
          />

          <View style={styles.buttonNavContainer}>
            <TouchableOpacity style={styles.previousButton}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Fill the entire screen
  },
  scrollViewContent: {
    padding: 10,
    // Ensure the content is not cut off and can scroll if needed
    paddingBottom: 100, // Add some padding to avoid cutting off buttons
  },
  unitContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    textAlign: 'left',
    fontSize: 40,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 40,
    textAlign: 'center',
  },
  video: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 20, // Space between video and buttons
  },
  buttonNavContainer: {
    flexDirection: 'row', // Row direction for side-by-side layout
    justifyContent: 'space-between', // Space buttons on either side
    paddingHorizontal: 20, // Padding for the sides
    marginBottom: 20, // Space from the bottom
  },
  previousButton: {
    width: 100, // Fixed width for uniformity
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#5F6D46',
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  nextButton: {
    width: 100, // Fixed width for uniformity
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#5F6D46',
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
  },
  buttonText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CourseModule;

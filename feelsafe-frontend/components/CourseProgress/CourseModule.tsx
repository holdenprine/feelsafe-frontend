import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData'



const CourseModule = () => {

    const videoUrl='https://www.youtube.com/watch?v=Tish3KkNnLc';
    const randIndex = Math.floor(Math.random() * 5);
    const currentCourse = FeelSafeCourseData; 

    const [paused, setPaused] = useState(true);
    const videoRef = React.useRef<Video | null>(null);

    const handlePlayPause = () => {
        if(videoRef.current) {
            if(paused) {
                videoRef.current.playAsync();
            } else {
                videoRef.current.pauseAsync();
            }
            setPaused(!paused);
        }
    }

  return (
    <SafeAreaView>
        <ScrollView>
            {currentCourse.map((item) => (
                <View key={randIndex} style={styles.unitContainer}>
                    <Text style={styles.header}>{item.moduleTitle}</Text>
                    <Text>{item.description}</Text>
                    <Video 
                      ref={videoRef}
                      source={{uri: videoUrl}}
                      style={styles.video}
                      resizeMode={ResizeMode.COVER}
                      useNativeControls
                      isLooping
                      shouldPlay={!paused}
                    />

                    <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
                        <Text style={styles.buttonText}>{paused ? 'Play' : 'Pause'}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    unitContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        textAlign: 'left',
    },
    video: {
        width: '100%',
        height: 300,
    },
    button: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 16,
    },
})
export default CourseModule

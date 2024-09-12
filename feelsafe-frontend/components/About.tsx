import React, { useEffect, useRef } from 'react';
import { View, Text , Image, StyleSheet, Animated  } from 'react-native';

const About = () => {
    
    const FadeInBox = () => {
        const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value
        const translateYAnim = useRef(new Animated.Value(20)).current; // Initial position below
      
        useEffect(() => {
          // Start the fade and slide up animation when the component mounts
          Animated.parallel([
            Animated.timing(fadeAnim, {
              toValue: 1, // Fade to full opacity
              duration: 1000, // Duration of the fade
              useNativeDriver: true, // Enable native driver for better performance
            }),
            Animated.timing(translateYAnim, {
              toValue: 0, // Move to original position
              duration: 1000, // Duration of the move
              useNativeDriver: true, // Enable native driver for better performance
            }),
          ]).start();
        }, [fadeAnim, translateYAnim]);
    
    }

    return (
        <Animated.View style={[
            styles.container,
            {
                opacity: fadeAnim,
                transform: [{translateY: translateYAnim}],
            },
        ]}>
            <View>
                <Text style={styles.title}></Text>
                <Text style={styles.body}></Text>
            </View>
            <Image 
                source={require('')}
                style={styles.image}
                resizeMode='cover'
            />

        </Animated.View>
    );
};

const styles = StyleSheet.create({
    
});

export default About;
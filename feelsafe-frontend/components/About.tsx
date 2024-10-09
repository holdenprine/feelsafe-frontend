import React, { useEffect, useRef } from 'react';
import { View, Text , Image, StyleSheet, Animated, Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import Header from '@/components/Header';

const { width } = Dimensions.get('window');

const About = () => {
    
    // animations not currently in use
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
    
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        

        // <Animated.View style={[
        //     styles.container,
        //     {
        //         opacity: fadeAnim,
        //         transform: [{translateY: translateYAnim}],
        //     },
        // ]}>
        //     <View style={styles.descriptionContainer}>
        //         <Text style={styles.title}>About Us</Text>
        //         <Text style={styles.body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis modi fugit nesciunt dignissimos eaque aut facere provident omnis deserunt expedita id itaque quod, doloribus iste eum, illo nisi soluta?</Text>
        //     </View>
        //     <Image 
        //         source={require('../assets/images/temp-about-photo.jpg')}
        //         style={styles.image}
        //         resizeMode='cover'
        //     />

        // </Animated.View>
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Image
                        source={require('../assets/images/temp-about-photo.jpg')}
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <View>
                    <Text style={styles.title}>About Us</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis modi fugit nesciunt dignissimos eaque aut facere provident omnis deserunt expedita id itaque quod, doloribus iste eum, illo nisi soluta?</Text>
                </View>
                <View>
                    <Text>Want to learn more about us?</Text>
                    <Text>Get in contact here!</Text>
                </View>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('contact')}
                >
                    <Text>Contact Us</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: width - 40,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        marginVertical: 20,
    },
    descriptionContainer: {
        flex: 3,
        justifyContent: 'center',
        paddingRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    body: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    image: {
      flex: 1,
      width: 300,
      height: 400,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
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

export default About;
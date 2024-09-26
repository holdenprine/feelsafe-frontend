import React from 'react'
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData';
import ModuleCard from './ModuleCard';
import { useNavigation } from '@react-navigation/native';

const ModuleOverview = () => {

    const courseNames = [...new Set(FeelSafeCourseData.map(item => item.courseName))];

    // for handling back button
    const navigation = useNavigation();
    const onPressGoBack = () => {
      navigation.goBack();
    }
    
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                {courseNames.map((name, index) => (
                    <Text key={index} style={styles.courseName}>{name}</Text>
                ))}  
            </View>
            <View style={styles.buttonWrapper}>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={onPressGoBack}
                  title= 'Back'
                  color='#E2CF03'
                  accessibilityLabel='back to course progress'
                />
              </View>
            </View>
        </ScrollView>
        <View style={styles.cardContainer}>
          <ModuleCard />
        </View>

    </SafeAreaView>

        
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      courseName: {
        fontSize: 24,
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 10,
        color: '#333',
        paddingTop: 20
      },
      buttonWrapper: {
        flex: 1,
        paddingTop: 12,
        justifyContent: 'center',
        alignItems: 'center',  // This ensures the button is horizontally centered
      },
      buttonContainer: {
        backgroundColor: '#5F6D46',  // Custom background color
        width: 120,  // Adjusted width for a smaller button
        height: 40,  // Adjusted height for a smaller button
        justifyContent: 'center',  // Center button text vertically
        borderRadius: 20,  // Rounded corners
        shadowColor: '#000',  // Shadow effect
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,  // Elevation for Android shadow
        overflow: 'hidden',  // Ensure borderRadius applies
      },
      cardContainer: {
        paddingBottom: 25,
      },
      // need to research styling for button
      buttonText: {
        fontFamily: ''
      },
})

export default ModuleOverview
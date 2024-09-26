import React from 'react'
import {View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData';

const ModuleOverview = () => {

    const courseNames = [...new Set(FeelSafeCourseData.map(item => item.courseName))];
    
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                {courseNames.map((name, index) => (
                    <Text key={index} style={styles.courseName}>{name}</Text>
                ))}  
            </View>
        </ScrollView>
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
})

export default ModuleOverview
import React from 'react'
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData';
import ModuleCard from './ModuleCard';
import { useNavigation } from '@react-navigation/native';

const ModuleOverview = () => {

    const courseNames = [...new Set(FeelSafeCourseData.map(item => item.courseName))];

    // for handling back button
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                {courseNames.map((name, index) => (
                    <Text key={index} style={styles.courseName}>{name}</Text>
                ))}  
            </View>
        <View style={styles.cardContainer}>
          <ModuleCard />
        </View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('index')}
        >
          <Text style={styles.navButtonText}>Back To Home</Text>
        </TouchableOpacity>
      </ScrollView>     
    </SafeAreaView>

        
  )
}
const styles = StyleSheet.create({
      safeArea: {
        flex: 1,
        backgroundColor: '#fff',
      },
      scrollViewContent: {
        flexGrow: 1,
        padding: 10,
        justifyContent: 'flex-start',
      },    
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      courseName: {
        fontSize: 24,
        fontFamily: 'Montserrat_700Bold',
        marginTop: 20,
        marginBottom: 4,
        color: '#333',
        paddingTop: 20
      },
      cardContainer: {
        paddingBottom: 25,
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

})

export default ModuleOverview
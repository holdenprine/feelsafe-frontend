import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import About from "../components/About";
import Courses from "@/components/Courses";
import Store from "@/components/Store";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CourseProgress from "@/components/CourseProgress/CourseProgress";
import ModuleOverview from "@/components/CourseProgress/ModuleOverview";
import SettingsHomepage from "@/components/Settings/SettingsHomepage";
import CourseModule from "@/components/CourseProgress/CourseModule";
import axios from 'axios';
import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { PlayfairDisplay_400Regular, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
// import AppLoading from 'expo-app-loading';


export default function Index() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  });
  
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
      <SafeAreaView style={styles.safeArea}>
        {/* Add StatusBar for iOS */}
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />}

        <ScrollView contentContainerStyle={styles.container}>
          {/* Ensure Header starts below the notch */}
           <View style={styles.headerWrapper}>
            <Header />
          </View>
          <About />
          <Store />
          <CourseProgress />
        </ScrollView>
      </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // New background color
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff', // New background color
  },
  headerWrapper: {
    backgroundColor: '#5F6D46', // New background color
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 4 : 0, // Use StatusBar height for iOS notch
  },
});

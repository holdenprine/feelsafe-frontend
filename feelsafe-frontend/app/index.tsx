import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Header from "../components/Header";
import About from "../components/About";
import Courses from "@/components/Courses";
import Store from "@/components/Store";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CourseProgress from "@/components/CourseProgress/CourseProgress";
import axios from 'axios';


export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Add StatusBar for iOS */}
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />}

      <ScrollView contentContainerStyle={styles.container}>
        {/* Ensure Header starts below the notch */}
        <View style={styles.headerWrapper}>
          <Header />
        </View>

        <CourseProgress />
        {/* <About /> */}
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

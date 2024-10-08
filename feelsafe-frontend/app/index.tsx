import { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import About from "../components/About";
import Store from "@/components/Store";
import CourseProgress from "@/components/CourseProgress/CourseProgress";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />}
      
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerWrapper}>
          <Header />
        </View>
        <About />
        <Store />
        <CourseProgress />
        <TouchableOpacity 
          style={styles.settingsNavButton} 
          onPress={() => navigation.navigate('SettingsHomepage')}  // This will now work
        >
          <Text style={styles.navButtonText}>Go to Settings</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  headerWrapper: {
    backgroundColor: '#5F6D46',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 4 : 0,
  },
  settingsNavButton: {
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

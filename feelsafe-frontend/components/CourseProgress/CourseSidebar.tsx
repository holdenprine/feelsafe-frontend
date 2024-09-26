import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, StatusBar, Platform, Animated } from 'react-native';
// replace this icon with another to distingush between sidebar and drop down
import { MaterialIcons } from '@expo/vector-icons';

const CourseSidebar = ({ image }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarPosition] = useState(new Animated.Value(-Dimensions.get('window').width * 0.75)); // Start sidebar off-screen

  const toggleSidebar = () => {
    // Animate the sidebar
    Animated.timing(sidebarPosition, {
      toValue: sidebarVisible ? -Dimensions.get('window').width * 0.75 : 0, // Slide out or in
      duration: 300,
      useNativeDriver: false, // Web support
    }).start();

    setSidebarVisible(!sidebarVisible); // Toggle visibility state
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Sidebar Icon (Logo) */}
        <TouchableOpacity onPress={toggleSidebar} style={styles.logoContainer}>
          <MaterialIcons name='more-vert' size={24} color="#E2CF03" />
        </TouchableOpacity>

        {/* Sidebar Menu */}
        <Animated.View style={[styles.sidebar, { left: sidebarPosition }]}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          {/* link to Overview component */}
          <Text style={styles.menuItem}>Overview</Text>
          <Text style={styles.menuItem}>Store</Text>
          <Text style={styles.menuItem}>Account Settings</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 44 : 0, // Adjust for notch on iOS
  },
  container: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logoContainer: {
    width: 50, 
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10, 
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    width: width * 0.75,
    backgroundColor: '#fff',
    height: '100%',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeText: {
    fontSize: 18,
    color: 'red',
  },
});

export default CourseSidebar;

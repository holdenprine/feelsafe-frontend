import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, StatusBar, Platform } from 'react-native';

const CourseSidebar = ({image}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Adding StatusBar for visibility */}
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Sidebar Icon */}
        <TouchableOpacity onPress={toggleSidebar} style={styles.sidebarIcon}>
          <Image
            source={image}
            style={styles.logo}
            resizeMode="cover"
          />
        </TouchableOpacity>

        {/* Sidebar Menu */}
        {sidebarVisible && (
          <View style={styles.sidebar}>
            <Text style={styles.menuItem}>Home</Text>
            <Text style={styles.menuItem}>About</Text>
            <Text style={styles.menuItem}>Courses</Text>
            <Text style={styles.menuItem}>Store</Text>
            <Text style={styles.menuItem}>Support</Text>
            <Text style={styles.menuItem}>Settings</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 44 : 0, // Additional padding for iOS to handle notch
  },
  container: {
    flexDirection: 'row',
  },
  sidebarIcon: {
    padding: 10,
    zIndex: 1,
  },
  logo: {
    width: 40,
    height: 40,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.75,
    backgroundColor: '#fff',
    height: '100%',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CourseSidebar;

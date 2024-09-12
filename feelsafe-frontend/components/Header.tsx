import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {

    const [dropdownVisibile, setDropdownVisibile] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisibile(!dropdownVisibile);
    };

    return (
        <View style={styles.container}>
            <View style={styles.rightSection}>
                <Image
                    source={require('../assets/images/logo.jpeg')}
                    style={styles.logo}
                    resizeMode="cover"
                />
           
            {/* drop down button on the right */}
            <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                <MaterialIcons name='more-vert' size={24} color="E2CF03" />
            </TouchableOpacity>
            </View>
            {/* dropdown Menu */}
            {dropdownVisibile && (
            <View style={styles.dropdownMenu}>
                <Text style={styles.menuItem}>Home</Text>
                <Text style={styles.menuItem}>About</Text>
                <Text style={styles.menuItem}>Courses</Text>
                <Text style={styles.menuItem}>Store</Text>
                <Text style={styles.menuItem}>Support</Text>
                <Text style={styles.menuItem}>Settings</Text>
            </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        // make background color a global variable
        backgroundColor: '#5f6d46',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    rightSection: {
        position: 'absolute',
        top: 0,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60, // Aligns both logo and dropdown vertically 
    },
    logo: {
        width: 100,
        height: 50,
        borderRadius: 10,
        marginRight: 5,
    },
    dropdownButton: {
        padding: 5,
      },
      dropdownMenu: {
        position: 'absolute',
        top: 50,    // Position the dropdown below the header
        right: 10,  // Align it to the right corner
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10,
        elevation: 3,    // Shadow for Android
        shadowColor: '#000',  // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      menuItem: {
        paddingVertical: 5,
        fontSize: 16,
        color: '#000',
      },
});

export default Header;
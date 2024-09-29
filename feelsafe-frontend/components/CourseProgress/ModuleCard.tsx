import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import FeelSafeCourseData from '@/mockData/FeelSafeCourseData';
import { SafeAreaView } from 'react-native-safe-area-context';

// Logic needed for if completed, either show card or show a grayed out/ blurred card

const ModuleCard = () => {
  return (
    <SafeAreaView>
        <FlatList 
            data={FeelSafeCourseData}
            keyExtractor={(item) => item.moduleTitle.toString()}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image
                        source={{uri: item.image}}
                        style={styles.image}
                        resizeMode='contain'
                    />
                    <Text style={styles.moduleTitle}>{item.moduleTitle}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            )}
        />
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      margin: 10,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 5,
    },
    moduleTitle: {
      fontSize: 14,
      fontWeight: '600',
      marginBottom: 5,
    },
    description: {
      fontSize: 12,
      color: '#666',
    },
  });
  

export default ModuleCard
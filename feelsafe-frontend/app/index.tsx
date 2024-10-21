import { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import Header from "../components/Header";
import About from "../components/About";
import Store from "@/components/Store";
import ModuleCard from "@/components/CourseProgress/ModuleCard";
import CourseModule from "@/components/CourseProgress/CourseModule";
import CourseProgress from "@/components/CourseProgress/CourseProgress";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMediaQuery } from "react-responsive";

export default function Index() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const insets = useSafeAreaInsets();

  const isLargeScreen = useMediaQuery({query: '(min-width: 1024px)'})

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView style={[styles.safeArea, {paddingTop: insets.top}]}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />}
      
      <ScrollView contentContainerStyle={[styles.container, isLargeScreen && styles.largeScreenContainer]}>
        {/* <View style={styles.headerWrapper}>
          <Header />
        </View> */}
        <View style={styles.section}>
          <CourseProgress />
        </View>
        <View style={styles.section}>
          <Store />
        </View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('about')}
        >
          <Text style={styles.navButtonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('settings')}  // This will now work
        >
          <Text style={styles.navButtonText}>Settings</Text>
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
  largeScreenContainer: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  section: {
    marginBottom: 20,
  },
  headerWrapper: {
    backgroundColor: '#5F6D46',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight || 4 : 0,
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
});

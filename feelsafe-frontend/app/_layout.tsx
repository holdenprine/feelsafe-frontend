import { SafeAreaView, StyleSheet, StatusBar, Platform  } from "react-native";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import SettingsHomepage from "@/components/Settings/SettingsHomepage";

export default function RootLayout() {
  return (
    <>
      {/* <SafeAreaView style={styles.safeArea}>    
        <Header />
      </SafeAreaView>   */}
      <Stack
        screenOptions={{
          headerShown: true,
          header: () => (
            <SafeAreaView style={styles.safeArea}>
              <Header />
            </SafeAreaView>
          )
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="about" />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
})
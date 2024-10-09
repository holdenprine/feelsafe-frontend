import { SafeAreaView, StyleSheet, StatusBar, Platform  } from "react-native";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import SettingsHomepage from "@/components/Settings/SettingsHomepage";

export default function RootLayout() {
  return (
    <>
      <SafeAreaView>    
        <Header />
      </SafeAreaView>  
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="about" />
      </Stack>
    </>
  );
}

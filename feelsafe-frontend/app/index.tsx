import { Text, View } from "react-native";
import Header from "../components/Header";
import About from "../components/About";
import Courses from "@/components/Courses";
import Store from "@/components/Store";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <About />
      <Courses />
      <Store />
      <Contact />
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
    </View>
  );
}

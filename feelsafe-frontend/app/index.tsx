import { Text, View } from "react-native";
import Header from "../components/Header";
import About from "../components/About";

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
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
    </View>
  );
}

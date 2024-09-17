import { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import About from "../components/About";
import Courses from "@/components/Courses";
import Store from "@/components/Store";
import Contact from "@/components/Contact";
import axios from 'axios';


export default function Index() {

  const tempURL = 'http://localhost:3000/';
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(tempURL).then((res) => {
      setData(res.data);
    });
  }, []);

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

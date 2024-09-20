import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import About from "../components/About";
import Courses from "@/components/Courses";
import Store from "@/components/Store";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import axios from 'axios';


export default function Index() {

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Header />
      <About />
      <Courses />
      <Store />
      <Contact />
      <Footer />
    </ScrollView>
  );
}

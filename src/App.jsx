import React from "react";
import Layout from "./layout/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import AnimatedNavbar from "./components/AnimatedNavbar";

const App = () => {
  return (
    <Layout title="Chaitanya Patil | Portfolio">
      {/* <Navbar /> */}
      <AnimatedNavbar/>
      <Hero />
      <Projects />
      <Contact />
      <Footer/>
    </Layout>
  );
};

export default App;

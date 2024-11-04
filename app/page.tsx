'use client'
import About from "./components/about";
import Category from "./components/category";
import Hero from "./components/hero";
import NavBar from "./components/navBar";
import Project from "./components/project";
import { ParallaxProvider } from "react-scroll-parallax";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="bg-gray-200 overflow-x-hidden">
        <NavBar />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="category"><Category /></section>
        <section id="project"><Project /></section>
        <section><Testimonial /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

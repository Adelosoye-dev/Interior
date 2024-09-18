'use client'
import About from "./components/about";
import Category from "./components/category";
import Hero from "./components/hero";
import NavBar from "./components/navBar";
import Project from "./components/project";
import { ParallaxProvider } from "react-scroll-parallax";
export default function Home() {
  return (
    <ParallaxProvider>
    <div className="bg-[#f8f8f8] overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Category />
      <Project/>
    </div>
    </ParallaxProvider>
  );
}

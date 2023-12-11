import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import { useGlobalContext } from "../Context";
import Services from "./Service";
import Contact from "./Contact";

function Home() {
  // const data = {
  //   name: "Bhagat Tech",
  //   image: "./hero.svg",
  // };

  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
}

export default Home;

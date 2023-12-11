import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import { useGlobalContext } from "../Context";

function About() {
  // const data = {
  //   name: "Tech About",
  //   image: "./about1.svg",
  // };

  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => {
    udpateAboutPage();
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  );
}

export default About;

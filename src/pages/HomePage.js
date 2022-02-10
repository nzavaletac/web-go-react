import React from "react";
import CarouselImg from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <h1>Hello from react</h1>
      <CarouselImg />
      <Footer />
    </>
  );
};

export default HomePage;
